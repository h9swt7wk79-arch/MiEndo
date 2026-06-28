/* MiEndo — Internationalisation (i18n)
   Usage : t('clé') retourne la traduction dans la langue active.
   La langue active est lue depuis localStorage ('miendo_langue'), défaut : 'fr'. */

window.MIENDO_I18N = {
  fr: {
    /* ---- Navigation ---- */
    nav_cycle: 'Cycle',
    nav_repas: 'Repas',
    nav_rdv: 'Rendez-vous',
    nav_analyses: 'Analyses',
    nav_bienetre: 'Bien-être',
    nav_profil: 'Profil',

    /* ---- Index / Connexion ---- */
    connexion_titre: 'Connexion',
    connexion_email: 'Adresse e-mail',
    connexion_mdp: 'Mot de passe',
    connexion_btn: 'Se connecter',
    connexion_google: 'Continue with Google',
    connexion_creer: 'Créer un compte',
    connexion_deja: 'Déjà un compte ? Se connecter',
    connexion_mdp_oublie: 'Mot de passe oublié ?',
    connexion_legal: 'En continuant, tu acceptes notre',
    connexion_legal_lien: 'politique de confidentialité',

    /* ---- Onboarding ---- */
    onboarding_titre: 'Bienvenue !',
    onboarding_sous_titre: 'Quelques questions pour personnaliser ton suivi',
    onboarding_naissance: 'Date de naissance',
    onboarding_contraception: 'Contraception actuelle',
    onboarding_objectifs: 'Tes objectifs',
    onboarding_obj_enceinte: 'Tomber enceinte',
    onboarding_obj_cycle: 'Suivre mon cycle',
    onboarding_obj_douleurs: 'Comprendre mes douleurs',
    onboarding_consentement: "J'ai lu et j'accepte la",
    onboarding_btn: "C'est parti !",

    /* ---- Guide ---- */
    guide_badge: 'Bêta bientôt ouverte',
    guide_s1_titre: 'Bienvenue sur MiEndo',
    guide_s1_texte: "Une app pensée pour suivre ton cycle, tes douleurs et ton bien-être au quotidien — créée avec et pour les personnes atteintes d'endométriose.",
    guide_s2_titre: "L'écran Cycle",
    guide_s2_texte: "L'anneau te montre où tu en es dans ton cycle. Le bouton Règles démarre tes règles, Bilan ouvre ton suivi quotidien, et le ⚠️ t'amène en mode SOS en cas de crise.",
    guide_s3_titre: 'Ton Bilan quotidien',
    guide_s3_texte: "Douleur, humeur, transit, sommeil, médicaments… Plus tu remplis ton Bilan régulièrement, plus tes Analyses deviennent précises.",
    guide_s4_titre: 'Bien-être',
    guide_s4_texte: "Conseils par phase, articles sourcés, yoga interactif, recettes anti-inflammatoires, et une communauté bienveillante.",
    guide_s5_titre: 'Espace partenaire',
    guide_s5_texte: "Dans ton Profil, génère un code à partager avec une personne de confiance : elle pourra suivre l'essentiel sans avoir accès à tout ton suivi.",
    guide_s6_titre: 'Toujours à portée de main',
    guide_s6_texte: "Cycle, Repas, Rendez-vous, Analyses, Bien-être, Profil — toute l'app est à un appui de cette barre, en bas de chaque écran.",
    guide_btn_passer: 'Passer',
    guide_btn_suivant: 'Suivant',
    guide_btn_fin: "C'est parti !",

    /* ---- Cycle ---- */
    cycle_titre: 'Cycle',
    cycle_regles: 'Règles',
    cycle_bilan: 'Bilan',
    cycle_phase_menstruelle: 'Phase menstruelle',
    cycle_phase_folliculaire: 'Phase folliculaire',
    cycle_phase_ovulatoire: 'Phase ovulatoire',
    cycle_phase_luteale: 'Phase lutéale',
    cycle_regles_dans: 'Règles dans environ',
    cycle_jours: 'jours',
    cycle_jour: 'jour',
    cycle_aucun_cycle: 'Appuie sur « Règles » au premier jour de tes règles pour démarrer le suivi.',

    /* ---- Bilan ---- */
    bilan_titre: 'Bilan du jour',
    bilan_bienetre: 'Comment tu te sens ?',
    bilan_douleur: 'Douleur (0 = aucune, 10 = insupportable)',
    bilan_regles: 'Règles',
    bilan_flux: 'Flux',
    bilan_digestion: 'Digestion',
    bilan_transit: 'Transit',
    bilan_sommeil: 'Sommeil',
    bilan_humeur: 'État émotionnel',
    bilan_medicaments: 'Médicaments pris',
    bilan_notes: 'Notes libres',
    bilan_enregistrer: 'Enregistrer le bilan',
    bilan_enregistre: 'Bilan enregistré ✓',

    /* ---- SOS ---- */
    sos_titre: 'Mode SOS',
    sos_respiration: 'Respiration guidée',
    sos_sms: 'Envoyer un SMS d\'urgence',
    sos_eva: 'Niveau de douleur actuel',
    sos_enregistrer: 'Enregistrer cette crise',

    /* ---- Profil ---- */
    profil_titre: 'Profil',
    profil_compte: 'Compte',
    profil_email: 'Adresse e-mail',
    profil_age: 'Âge',
    profil_cycles: 'Nombre de cycles',
    profil_objectifs: 'Objectifs',
    profil_modifier: '⚙️ Modifier mes informations',
    profil_guide: '🌸 Revoir le guide',
    profil_partenaire: 'Espace partenaire',
    profil_code_devoiler: 'Dévoiler le code associé',
    profil_code_masquer: 'Masquer le code',
    profil_code_copier: 'Copier le code',
    profil_nouveau_code: 'Générer un nouveau code',
    profil_nouveau_code_info: "En cas de séparation ou de changement de partenaire, génère un nouveau code : l'ancien sera immédiatement désactivé.",
    profil_export_pdf: '📄 Exporter en PDF',
    profil_export_json: '💾 Sauvegarder mes données',
    profil_import: '📂 Importer une sauvegarde',
    profil_suggestion: 'Une suggestion, un bug ?',
    profil_soutenir: 'Soutenir MiEndo',
    profil_soutenir_texte: "MiEndo est gratuite, sans pub et sans revente de données. Si elle t'aide, tu peux soutenir son développement 💗",
    profil_cafe: '☕ Offrir un café',
    profil_deconnexion: 'Se déconnecter',
    profil_supprimer: 'Supprimer mon compte et toutes mes données',

    /* ---- Paramètres ---- */
    params_titre: 'Paramètres',
    params_perso: 'Informations personnelles',
    params_naissance: 'Date de naissance',
    params_objectifs: 'Objectifs',
    params_contraception: 'Contraception',
    params_cycle: 'Cycle',
    params_duree_cycle: 'Durée moyenne du cycle (jours)',
    params_duree_regles: 'Durée des règles (jours)',
    params_sos: 'Personne de confiance (SOS)',
    params_sos_nom: 'Nom',
    params_sos_tel: 'Numéro de téléphone',
    params_sos_msg: 'Message pré-rempli',
    params_affichage: 'Affichage',
    params_sombre: 'Mode sombre',
    params_police: 'Taille du texte',
    params_langue: 'Langue',
    params_enregistrer: 'Enregistrer',
    params_enregistre: 'Enregistré ✓',

    /* ---- Partenaire ---- */
    partenaire_titre: 'Espace partenaire',
    partenaire_intro: "Saisis le code partagé par ta moitié pour suivre les informations importantes.",
    partenaire_placeholder: 'CODE',
    partenaire_btn: 'Accéder',
    partenaire_phase: 'Phase actuelle',
    partenaire_jour: 'Jour du cycle',
    partenaire_regles: 'Prochaines règles (estimation)',
    partenaire_douleur: "Douleur aujourd'hui",
    partenaire_bienetre: 'Bien-être du jour',
    partenaire_historique: 'Douleur — 7 derniers jours',
    partenaire_aider: 'Comment aider en ce moment',
    partenaire_message: 'Lui envoyer une pensée',
    partenaire_message_placeholder: 'Un petit mot doux, un encouragement…',
    partenaire_envoyer: 'Envoyer 💗',
    partenaire_changer: 'Utiliser un autre code',
    partenaire_note: "Ces informations sont partagées volontairement. Les jours difficiles, ta présence et ta patience comptent plus que tout 💗",

    /* ---- Bien-être hub ---- */
    bienetre_titre: 'Bien-être',
    bienetre_phase: 'Ta phase aujourd\'hui',
    bienetre_phase_desc: 'Explication de ta phase actuelle et conseils adaptés, dont le mode crise',
    bienetre_articles: 'Conseils & articles',
    bienetre_articles_desc: 'Nutrition, intimité, gestion de la crise, fertilité — sources scientifiques',
    bienetre_blog: 'Communauté',
    bienetre_blog_desc: 'Questions, témoignages et échanges entre utilisatrices',
    bienetre_endo: "Comprendre l'endométriose",
    bienetre_endo_desc: 'Mécanismes, diagnostic, traitements médicamenteux et chirurgicaux',
    bienetre_action: 'En action',
    bienetre_action_desc: 'Yoga, recettes anti-inflammatoires, respiration et sons relaxants',
    bienetre_mouvement: 'Cycle & mouvement',
    bienetre_mouvement_desc: 'Compare tes phases de cycle à ton activité physique',

    /* ---- Analyses ---- */
    analyses_titre: 'Analyses',
    analyses_resume: 'Résumé',
    analyses_douleur_cycle: 'Douleur au fil du cycle',
    analyses_douleur_phase: 'Douleur moyenne par phase',
    analyses_impact: 'Impact sur ton quotidien',
    analyses_aliments: 'Aliments des jours douloureux',
    analyses_symptomes: 'Tes symptômes les plus fréquents',
    analyses_par_phase: 'Par phase du cycle',
    analyses_tendance: 'Ta douleur dans le temps',

    /* ---- Messages génériques ---- */
    erreur_connexion: 'Connexion impossible, réessaie.',
    chargement: 'Chargement…',
    enregistrement: 'Enregistrement…',
    retour: '‹',
  },

  en: {
    /* ---- Navigation ---- */
    nav_cycle: 'Cycle',
    nav_repas: 'Meals',
    nav_rdv: 'Appointments',
    nav_analyses: 'Analytics',
    nav_bienetre: 'Wellness',
    nav_profil: 'Profile',

    /* ---- Index / Connexion ---- */
    connexion_titre: 'Sign in',
    connexion_email: 'Email address',
    connexion_mdp: 'Password',
    connexion_btn: 'Sign in',
    connexion_google: 'Continue with Google',
    connexion_creer: 'Create an account',
    connexion_deja: 'Already have an account? Sign in',
    connexion_mdp_oublie: 'Forgot password?',
    connexion_legal: 'By continuing, you agree to our',
    connexion_legal_lien: 'privacy policy',

    /* ---- Onboarding ---- */
    onboarding_titre: 'Welcome!',
    onboarding_sous_titre: 'A few questions to personalise your tracking',
    onboarding_naissance: 'Date of birth',
    onboarding_contraception: 'Current contraception',
    onboarding_objectifs: 'Your goals',
    onboarding_obj_enceinte: 'Get pregnant',
    onboarding_obj_cycle: 'Track my cycle',
    onboarding_obj_douleurs: 'Understand my pain',
    onboarding_consentement: 'I have read and accept the',
    onboarding_btn: "Let's go!",

    /* ---- Guide ---- */
    guide_badge: 'Beta coming soon',
    guide_s1_titre: 'Welcome to MiEndo',
    guide_s1_texte: 'An app designed to track your cycle, pain and wellbeing — built with and for people with endometriosis.',
    guide_s2_titre: 'The Cycle screen',
    guide_s2_texte: 'The ring shows where you are in your cycle. The Period button starts your period, Log opens your daily tracker, and ⚠️ takes you to SOS mode during a flare.',
    guide_s3_titre: 'Your daily log',
    guide_s3_texte: 'Pain, mood, digestion, sleep, medications… The more you fill in your log, the more accurate your Analytics become.',
    guide_s4_titre: 'Wellness',
    guide_s4_texte: 'Phase-based advice, sourced articles, interactive yoga, anti-inflammatory recipes, and a supportive community.',
    guide_s5_titre: 'Partner space',
    guide_s5_texte: 'Generate a code in your Profile to share with someone you trust — they can follow the essentials without seeing everything.',
    guide_s6_titre: 'Always within reach',
    guide_s6_texte: 'Cycle, Meals, Appointments, Analytics, Wellness, Profile — the whole app is one tap away from the bottom bar.',
    guide_btn_passer: 'Skip',
    guide_btn_suivant: 'Next',
    guide_btn_fin: "Let's go!",

    /* ---- Cycle ---- */
    cycle_titre: 'Cycle',
    cycle_regles: 'Period',
    cycle_bilan: 'Log',
    cycle_phase_menstruelle: 'Menstrual phase',
    cycle_phase_folliculaire: 'Follicular phase',
    cycle_phase_ovulatoire: 'Ovulatory phase',
    cycle_phase_luteale: 'Luteal phase',
    cycle_regles_dans: 'Period in about',
    cycle_jours: 'days',
    cycle_jour: 'day',
    cycle_aucun_cycle: 'Tap "Period" on the first day of your period to start tracking.',

    /* ---- Bilan ---- */
    bilan_titre: "Today's log",
    bilan_bienetre: 'How are you feeling?',
    bilan_douleur: 'Pain (0 = none, 10 = unbearable)',
    bilan_regles: 'Period',
    bilan_flux: 'Flow',
    bilan_digestion: 'Digestion',
    bilan_transit: 'Bowel',
    bilan_sommeil: 'Sleep',
    bilan_humeur: 'Mood',
    bilan_medicaments: 'Medications taken',
    bilan_notes: 'Free notes',
    bilan_enregistrer: 'Save log',
    bilan_enregistre: 'Log saved ✓',

    /* ---- SOS ---- */
    sos_titre: 'SOS Mode',
    sos_respiration: 'Guided breathing',
    sos_sms: 'Send an emergency SMS',
    sos_eva: 'Current pain level',
    sos_enregistrer: 'Log this flare',

    /* ---- Profil ---- */
    profil_titre: 'Profile',
    profil_compte: 'Account',
    profil_email: 'Email address',
    profil_age: 'Age',
    profil_cycles: 'Cycle count',
    profil_objectifs: 'Goals',
    profil_modifier: '⚙️ Edit my information',
    profil_guide: '🌸 View guide again',
    profil_partenaire: 'Partner space',
    profil_code_devoiler: 'Reveal partner code',
    profil_code_masquer: 'Hide code',
    profil_code_copier: 'Copy code',
    profil_nouveau_code: 'Generate a new code',
    profil_nouveau_code_info: 'If your relationship changes, generate a new code — the old one will be immediately deactivated.',
    profil_export_pdf: '📄 Export as PDF',
    profil_export_json: '💾 Back up my data',
    profil_import: '📂 Import a backup',
    profil_suggestion: 'A suggestion or bug?',
    profil_soutenir: 'Support MiEndo',
    profil_soutenir_texte: 'MiEndo is free, ad-free and never sells your data. If it helps you, consider supporting its development 💗',
    profil_cafe: '☕ Buy a coffee',
    profil_deconnexion: 'Sign out',
    profil_supprimer: 'Delete my account and all my data',

    /* ---- Paramètres ---- */
    params_titre: 'Settings',
    params_perso: 'Personal information',
    params_naissance: 'Date of birth',
    params_objectifs: 'Goals',
    params_contraception: 'Contraception',
    params_cycle: 'Cycle',
    params_duree_cycle: 'Average cycle length (days)',
    params_duree_regles: 'Period length (days)',
    params_sos: 'Trusted contact (SOS)',
    params_sos_nom: 'Name',
    params_sos_tel: 'Phone number',
    params_sos_msg: 'Pre-filled message',
    params_affichage: 'Display',
    params_sombre: 'Dark mode',
    params_police: 'Text size',
    params_langue: 'Language',
    params_enregistrer: 'Save',
    params_enregistre: 'Saved ✓',

    /* ---- Partenaire ---- */
    partenaire_titre: 'Partner space',
    partenaire_intro: 'Enter the code shared by your partner to follow the key information.',
    partenaire_placeholder: 'CODE',
    partenaire_btn: 'Access',
    partenaire_phase: 'Current phase',
    partenaire_jour: 'Cycle day',
    partenaire_regles: 'Next period (estimate)',
    partenaire_douleur: "Today's pain",
    partenaire_bienetre: "Today's wellbeing",
    partenaire_historique: 'Pain — last 7 days',
    partenaire_aider: 'How to help right now',
    partenaire_message: 'Send a kind thought',
    partenaire_message_placeholder: 'A sweet note, some encouragement…',
    partenaire_envoyer: 'Send 💗',
    partenaire_changer: 'Use a different code',
    partenaire_note: 'This information is shared voluntarily. On hard days, your presence and patience matter most 💗',

    /* ---- Bien-être hub ---- */
    bienetre_titre: 'Wellness',
    bienetre_phase: "Today's phase",
    bienetre_phase_desc: 'Explanation of your current phase and tailored advice, including crisis mode',
    bienetre_articles: 'Advice & articles',
    bienetre_articles_desc: 'Nutrition, intimacy, crisis management, fertility — scientific sources',
    bienetre_blog: 'Community',
    bienetre_blog_desc: 'Questions, experiences and exchanges between users',
    bienetre_endo: 'Understanding endometriosis',
    bienetre_endo_desc: 'Mechanisms, diagnosis, drug treatments and surgery',
    bienetre_action: 'In action',
    bienetre_action_desc: 'Yoga, anti-inflammatory recipes, breathing and relaxing sounds',
    bienetre_mouvement: 'Cycle & movement',
    bienetre_mouvement_desc: 'Compare your cycle phases with your physical activity',

    /* ---- Analyses ---- */
    analyses_titre: 'Analytics',
    analyses_resume: 'Summary',
    analyses_douleur_cycle: 'Pain throughout your cycle',
    analyses_douleur_phase: 'Average pain by phase',
    analyses_impact: 'Impact on your daily life',
    analyses_aliments: 'Foods on painful days',
    analyses_symptomes: 'Your most frequent symptoms',
    analyses_par_phase: 'By cycle phase',
    analyses_tendance: 'Your pain over time',

    /* ---- Messages génériques ---- */
    erreur_connexion: 'Connection failed, please try again.',
    chargement: 'Loading…',
    enregistrement: 'Saving…',
    retour: '‹',
  }
};

/* Fonction de traduction principale */
window.t = function(cle) {
  const langue = window.MIENDO_LANGUE || localStorage.getItem('miendo_langue') || 'fr';
  const dico = window.MIENDO_I18N[langue] || window.MIENDO_I18N['fr'];
  return dico[cle] || window.MIENDO_I18N['fr'][cle] || cle;
};

/* Met à jour tous les éléments portant un attribut data-i18n */
window.appliquerTraductions = function() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const cle = el.getAttribute('data-i18n');
    const valeur = window.t(cle);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = valeur;
    } else {
      el.textContent = valeur;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = window.t(el.getAttribute('data-i18n-placeholder'));
  });
};
