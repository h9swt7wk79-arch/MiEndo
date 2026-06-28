/* MiEndo — rappel quotidien par notification locale native (via Capacitor).
   Expose window.MiendoRappels, utilisé par parametres.html.

   Hors de l'app native (dans un navigateur web classique), estNatif() renvoie
   false : la carte « Rappel quotidien » reste alors masquée, et le site web
   continue de fonctionner normalement. */
(function () {
  const ID_RAPPEL = 1001; // identifiant fixe de la notification quotidienne

  // Le pont Capacitor et le plugin sont injectés par la coquille native iOS.
  function plugin() {
    return window.Capacitor
      && window.Capacitor.Plugins
      && window.Capacitor.Plugins.LocalNotifications;
  }

  function estNatif() {
    return !!(
      window.Capacitor
      && typeof window.Capacitor.isNativePlatform === 'function'
      && window.Capacitor.isNativePlatform()
      && plugin()
    );
  }

  // Demande l'autorisation de notifier si elle n'a pas déjà été accordée.
  async function autorisationOk() {
    const LN = plugin();
    let perm = await LN.checkPermissions();
    if (perm.display !== 'granted') {
      perm = await LN.requestPermissions();
    }
    return perm.display === 'granted';
  }

  // Active (ou reprogramme) le rappel quotidien à l'heure donnée (0–23).
  // Renvoie true si tout s'est bien passé, false si l'autorisation manque.
  async function activerRappelBilan(heure) {
    const LN = plugin();
    if (!LN) return false;
    if (!(await autorisationOk())) return false;

    // on supprime l'éventuel rappel existant avant de le reprogrammer
    await LN.cancel({ notifications: [{ id: ID_RAPPEL }] });

    await LN.schedule({
      notifications: [{
        id: ID_RAPPEL,
        title: 'MiEndo',
        body: "C'est le moment de remplir ton bilan du jour 🌸",
        // schedule.on -> répétition quotidienne à hh:00
        schedule: { on: { hour: heure, minute: 0 }, allowWhileIdle: true },
      }],
    });

    localStorage.setItem('miendo_rappel_actif', '1');
    localStorage.setItem('miendo_rappel_heure', String(heure));
    return true;
  }

  // Désactive le rappel quotidien.
  async function desactiverRappelBilan() {
    const LN = plugin();
    if (LN) await LN.cancel({ notifications: [{ id: ID_RAPPEL }] });
    localStorage.setItem('miendo_rappel_actif', '0');
  }

  window.MiendoRappels = { estNatif, activerRappelBilan, desactiverRappelBilan };
})();
