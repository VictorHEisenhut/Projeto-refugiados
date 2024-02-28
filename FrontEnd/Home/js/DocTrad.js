const translations = {
  pt: {
    homeLink: 'Home',
    documentsLink: 'Documentos',
    placesLink: 'Locais',
    languageLink: 'Idioma',
    donateLink: 'Doe',
    abrigo_trd: 'Abrigos',
    consulados_trd: 'Consulados',
    posto_trd: 'Posto de saúde',
    Hdocumentos_trad: 'Documentos',
    Pdocumentos_trad: 'Neste espaço, você tem a oportunidade de criar novos documentos ou editar aqueles já existentes.',
    logout: 'Sair',
    login: 'Entrar',
    btn_alterar: 'Modificar Conta',
    btn_alterar_trad: 'Confirmar Conta',
    mensagemConfirmEditar: 'Você tem certeza que deseja editar suas informações?',
    btn_alterar_sim: 'Sim',
    btnConfirmEditarClose: 'Não',
    btnDelete: 'Deletar',
    btnDoacoesModalClose: 'Fechar',
  },
  en: {
    homeLink: 'Home',
    documentsLink: 'Documents',
    placesLink: 'Places',
    languageLink: 'Language',
    donateLink: 'Donate',
    abrigo_trd: 'Shelters',
    consulados_trd: 'Consulates',
    posto_trd: 'Health Center',
    Hdocumentos_trad: 'Documents',
    Pdocumentos_trad: 'In this space, you have the opportunity to create new documents or edit existing ones.',
    logout: 'Logout',
    login: 'Login',
    btn_alterar: 'Modify Account',
    btn_alterar_trad: 'Confirm Account',
    mensagemConfirmEditar: 'Are you sure you want to edit your information?',
    btn_alterar_sim: 'Yes',
    btnConfirmEditarClose: 'No',
    btnDelete: 'Delete',
    btnDoacoesModalClose: 'Close',
  },
  es: {
    homeLink: 'Inicio',
    documentsLink: 'Documentos',
    placesLink: 'Lugares',
    languageLink: 'Idioma',
    donateLink: 'Donar',
    abrigo_trd: 'Refugios',
    consulados_trd: 'Consulados',
    posto_trd: 'Centro de salud',
    Hdocumentos_trad: 'Documentos',
    Pdocumentos_trad: 'En este espacio, tienes la oportunidad de crear nuevos documentos o editar los existentes.',
    logout: 'Cerrar sesión',
    login: 'Iniciar sesión',
    btn_alterar: 'Modificar Cuenta',
    btn_alterar_trad: 'Confirmar Cuenta',
    mensagemConfirmEditar: '¿Estás seguro de que deseas editar tu información?',
    btn_alterar_sim: 'Sí',
    btnConfirmEditarClose: 'No',
    btnDelete: 'Eliminar',
    btnDoacoesModalClose: 'Cerrar',
  },
  fr: {
    homeLink: 'Accueil',
    documentsLink: 'Documents',
    placesLink: 'Lieux',
    languageLink: 'Langue',
    donateLink: 'Don',
    abrigo_trd: 'Abris',
    consulados_trd: 'Consulats',
    posto_trd: 'Centre de santé',
    Hdocumentos_trad: 'Documents',
    Pdocumentos_trad: 'Dans cet espace, vous avez la possibilité de créer de nouveaux documents ou de modifier ceux qui existent déjà.',
    logout: 'Déconnexion',
    login: 'Connexion',
    btn_alterar: 'Modifier le Compte',
    btn_alterar_trad: 'Confirmer le Compte',
    mensagemConfirmEditar: 'Êtes-vous sûr de vouloir modifier vos informations?',
    btn_alterar_sim: 'Oui',
    btnConfirmEditarClose: 'Non',
    btnDelete: 'Supprimer',
    btnDoacoesModalClose: 'Fermer',
  },
  ar: {
    homeLink: 'الصفحة الرئيسية',
    documentsLink: 'وثائق',
    placesLink: 'أماكن',
    languageLink: 'اللغة',
    donateLink: 'تبرع',
    abrigo_trd: 'الملاجئ',
    consulados_trd: 'القنصليات',
    posto_trd: 'مركز الصحة',
    Hdocumentos_trad: 'وثائق',
    Pdocumentos_trad: 'في هذا المكان، لديك الفرصة لإنشاء وثائق جديدة أو تحرير تلك الموجودة بالفعل.',
    logout: 'تسجيل الخروج',
    login: 'تسجيل الدخول',
    btn_alterar: 'تعديل الحساب',
    btn_alterar_trad: 'تأكيد الحساب',
    mensagemConfirmEditar: 'هل أنت متأكد أنك تريد تحرير معلوماتك؟',
    btn_alterar_sim: 'نعم',
    btnConfirmEditarClose: 'لا',
    btnDelete: 'حذف',
    btnDoacoesModalClose: 'إغلاق',
  }
  };
  
  function changeLanguage(lang) {
    const elements = Object.keys(translations[lang]);
    elements.forEach(element => {
      document.getElementById(element).innerText = translations[lang][element];
    });
  }