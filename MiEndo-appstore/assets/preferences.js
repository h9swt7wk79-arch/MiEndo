/* MiEndo — préférences d'affichage (mode sombre, taille de police, langue)
   Appliquées le plus tôt possible pour éviter le flash de contenu non stylé. */
(function(){
  try {
    const sombre = localStorage.getItem('miendo_mode_sombre') === '1';
    const echelle = localStorage.getItem('miendo_echelle_police') || '1';
    const langue = localStorage.getItem('miendo_langue') || 'fr';
    if (sombre) document.documentElement.classList.add('mode-sombre');
    document.documentElement.style.setProperty('--echelle-police', echelle);
    document.documentElement.setAttribute('lang', langue);
    window.MIENDO_LANGUE = langue;
  } catch(e){ /* localStorage indisponible : on continue avec les valeurs par défaut */ }
})();
