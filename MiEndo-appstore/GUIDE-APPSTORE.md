# MiEndo → App Store : guide pas à pas

Ton code est prêt à être compilé en app iOS via **Capacitor** + **Codemagic** (build dans le cloud, aucun Mac requis). Ce guide couvre les étapes que toi seul peux faire.

## Ce qui est automatisé vs. manuel

- **Automatisé** (déjà en place dans le repo) : config Capacitor, génération du dossier `www/`, module de notifications, recette de build `codemagic.yaml`. Codemagic régénère la plateforme iOS et compile à chaque build.
- **Manuel** (ce guide) : créer le compte Apple, enregistrer l'app, connecter Codemagic, tester, puis soumettre.

---

## Étape 1 — Compte Apple Developer (99 $/an)

1. Va sur https://developer.apple.com/programs/ et inscris-toi avec ton Apple ID.
2. Paie les 99 $/an. La validation prend de quelques heures à 2 jours.
3. L'identité peut être vérifiée via l'app **Apple Developer** sur ton iPhone.

## Étape 2 — Enregistrer l'app dans App Store Connect

1. Sur https://appstoreconnect.apple.com → **Certificats, identifiants et profils** → **Identifiers** → crée un **App ID** avec le bundle `app.miendo`.
   *(Tu peux choisir un autre identifiant : si tu le fais, change-le partout — `capacitor.config.json`, `codemagic.yaml`, et ici. Il doit être identique aux trois endroits.)*
2. Retour dans **App Store Connect** → **Mes apps** → **+** → **Nouvelle app** : nom « MiEndo », langue, bundle `app.miendo`. Note l'**Apple ID** numérique attribué à l'app.

## Étape 3 — Mettre ton code sur Git

Si ce n'est pas déjà fait, pousse ton repo sur **GitHub** (ou GitLab/Bitbucket). Codemagic se branche dessus. Le `.gitignore` exclut déjà `node_modules/`, `www/` et `ios/`.

## Étape 4 — Configurer Codemagic

1. Crée un compte sur https://codemagic.io et connecte ton dépôt Git.
2. Génère une **clé API App Store Connect** : dans App Store Connect → **Utilisateurs et accès** → **Intégrations** → **App Store Connect API** → nouvelle clé avec le rôle **App Manager** (ou Admin). Télécharge le fichier `.p8` (téléchargeable une seule fois !) et note l'**Issuer ID** et le **Key ID**.
3. Dans Codemagic → **Teams** → **Integrations** → **App Store Connect** → ajoute cette clé. Donne-lui un nom et reporte ce nom dans `codemagic.yaml` à la ligne `app_store_connect:` (actuellement `CodemagicMiEndo`).
4. Codemagic gère ensuite la signature automatiquement (grâce au bloc `ios_signing` du yaml).

## Étape 5 — Lancer le premier build

Déclenche le workflow **MiEndo iOS** dans Codemagic (bouton *Start new build*). Il va : installer les dépendances → générer `www/` → créer la plateforme iOS → signer → compiler l'`.ipa` → l'envoyer sur **TestFlight**. Compte ~10–20 min.

> Si un build échoue, lis les logs : 9 fois sur 10 c'est un nom d'intégration, un bundle ID ou une clé API mal renseignés.

## Étape 6 — Tester sur ton iPhone

1. Installe l'app **TestFlight** depuis l'App Store sur ton iPhone.
2. Dans App Store Connect → **TestFlight**, ajoute-toi comme testeur interne.
3. Ouvre MiEndo via TestFlight, teste tout — **et en particulier le rappel quotidien** (Paramètres → Rappel quotidien) : c'est ta fonctionnalité native clé.

## Étape 7 — Préparer la soumission App Store

Quand l'app te convient, dans App Store Connect tu prépares la fiche :

- **Captures d'écran** (prises depuis TestFlight sur ton iPhone).
- **Description, mots-clés, catégorie** (Santé et remise en forme).
- **Politique de confidentialité** (URL obligatoire) + **étiquette de confidentialité** (déclarer les données collectées : compte, données de santé/cycle, etc.).
- **Suppression de compte** : Apple l'exige pour toute app avec comptes. Prévois un bouton « Supprimer mon compte » dans l'app.
- Puis **Soumettre pour révision**. Délai habituel : < 24 h à quelques jours.

---

## Points d'attention

- **Règle 4.2 (fonctionnalité minimale)** : une app qui n'est qu'un site emballé est refusée. Tes atouts : comptes, suivi quotidien, graphiques, carte corporelle, **notifications locales**, fonctionnement hors-ligne. Mets en avant ces fonctions natives si un évaluateur pose la question.
- **Pas de promesses médicales** : « journal de suivi de l'endométriose », oui ; « diagnostique/soigne », non.
- **Icône de l'app** : le premier build aura l'icône Capacitor par défaut. On la remplacera par la tienne (`@capacitor/assets` à partir d'une image 1024×1024) — étape rapide à faire ensemble.
- **Connexion Google** : la connexion par e-mail fonctionne nativement ; la connexion Google via popup peut nécessiter un ajustement dans la WebView — à vérifier au test, on s'en occupera si besoin.
- **HealthKit (synchro sommeil)** : possible dans un second temps. Ça demandera d'ajouter le plugin, les autorisations et de committer le dossier `ios/`. On le fera quand la base TestFlight tournera.
- **Mises à jour** : à chaque nouvelle version, incrémente le numéro de version et relance un build Codemagic.
