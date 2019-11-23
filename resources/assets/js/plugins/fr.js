export default {
  navigation: {
    // key : 'singular | plural'
    dashboard: 'Tableau de bord',
    customers: 'Cliente',
    items: 'Articles',
    invoices: 'Factures',
    expenses: 'Les dépenses',
    estimates: 'Estimations',
    payments: 'Paiements',
    reports: 'Rapports',
    settings: 'Paramètres',
    logout: 'Se déconnecter'
  },
  general: {
    view_pdf: 'Voir PDF',
    download_pdf: 'Télécharger le PDF',
    save: 'sauver',
    cancel: 'Annuler',
    update: 'Mise à jour',
    download: 'Télécharger',
    from_date: 'Partir de la date',
    to_date: 'À ce jour',
    from: 'De',
    to: 'À',
    go_back: 'Retourner',
    back_to_login: 'Retour connexion?',
    home: 'Accueil',
    filter: 'Filtre',
    delete: 'Effacer',
    edit: 'Modifier',
    view: 'Vue',
    add_new_item: 'Ajoute un nouvel objet',
    clear_all: 'Tout effacer',
    showing: 'Montrant',
    of: 'de',
    actions: 'Actions',
    subtotal: 'TOTAL',
    discount: 'REMISE',
    fixed: 'Fixée',
    percentage: 'Pourcentage',
    tax: 'IMPÔT',
    total_amount: 'MONTANT TOTAL',
    bill_to: 'facturer',
    ship_to: 'Envoyez à',
    due: 'Dû',
    draft: 'Brouillon',
    sent: 'Envoyée',
    all: 'Tout',
    select_all: 'Tout sélectionner',
    choose_file: 'Cliquez ici pour choisir un fichier',
    choose_template: 'Choisissez un modèle',
    choose: 'Choisir',
    remove: 'Retirer',
    powered_by: 'Alimenté par',
    bytefury: 'Bytefury',
    select_a_status: 'Sélectionnez un statut',
    select_a_tax: 'Sélectionnez une taxe',
    search: 'Chercher',
    are_you_sure: 'Êtes-vous sûr?',
    list_is_empty: 'La liste est vide',
    no_tax_found: 'Aucune taxe trouvée!',
    four_zero_four: '404',
    you_got_lost: 'Oups! Vous vous êtes perdus!',
    go_home: 'Rentrer chez soi',

    setting_updated: 'Réglage mis à jour avec succès',
    select_state: "Sélectionnez l'état",
    select_country: 'Choisissez le pays',
    select_city: 'Sélectionnez une ville',
    street_1: 'Rue 1',
    street_2: 'Rue # 2',
    action_failed: 'Action: échoué'
  },
  dashboard: {
    select_year: 'Sélectionnez lannée',
    cards: {
      due_amount: 'Montant dû',
      customers: 'Les clients',
      invoices: 'Factures',
      estimates: 'Estimations'
    },
    chart_info: {
      total_sales: 'Ventes',
      total_receipts: 'Reçus',
      total_expense: 'Les dépenses',
      net_income: 'Revenu net',
      year: 'Sélectionnez lannée'
    },
    weekly_invoices: {
      title: 'Factures hebdomadaires'
    },
    monthly_chart: {
      title: 'Ventes et dépenses'
    },
    recent_invoices_card: {
      title: 'Factures dues',
      due_on: 'Due On',
      customer: 'Cliente',
      amount_due: 'Montant dû',
      actions: 'Actions',
      view_all: 'Voir tout'
    },
    recent_estimate_card: {
      title: 'Estimations récentes',
      date: 'Date',
      customer: 'Cliente',
      amount_due: 'Montant dû',
      actions: 'Actions',
      view_all: 'Voir tout'
    }
  },
  tax_types: {
    name: 'Nom',
    description: 'La description',
    percent: 'Pour cent',
    compound_tax: 'Taxe composée'
  },
  customers: {
    title: 'Les clients',
    add_customer: 'Ajouter un client',
    contacts_list: 'Liste de clients',
    name: 'Nom',
    display_name: 'Afficher un nom',
    primary_contact_name: 'Nom du contact principal',
    contact_name: 'Nom du contact',
    amount_due: 'Montant dû',
    email: 'Email',
    address: 'Adresse',
    phone: 'Téléphone',
    website: 'Site Internet',
    country: 'Pays',
    state: 'Etat',
    city: 'Ville',
    zip_code: 'Code postal',
    added_on: 'Ajouté le',
    action: 'action',
    password: 'Mot de passe',
    street_number: 'Numéro de rue',
    primary_currency: 'Devise principale',
    add_new_customer: 'Ajouter un nouveau client',
    save_customer: 'Enregistrer le client',
    update_customer: 'Mettre à jour le client',
    customer: 'Client | Les clients',
    new_customer: 'Nouveau client',
    edit_customer: 'Modifier le client',
    basic_info: 'Informations de base',
    billing_address: 'Adresse de facturation',
    shipping_address: 'Adresse de livraison',
    copy_billing_address: 'Copier de la facturation',
    no_customers: 'Pas encore de clients!',
    no_customers_found: 'Aucun client trouvé!',
    list_of_customers: 'Cette section contiendra la liste des clients.',
    primary_display_name: 'Nom daffichage principal',
    select_state: 'Sélectionnez létat',
    select_country: 'Choisissez le pays',
    select_city: 'Sélectionnez une ville',
    select_currency: 'Sélectionnez la devise',
    street_1: 'Rue 1',
    street_2: 'Rue 2',
    select_a_customer: 'Sélectionnez un client',
    type_or_click: 'Tapez ou cliquez pour sélectionner',

    confirm_delete: 'Vous ne pourrez pas récupérer ce client | Vous ne pourrez pas récupérer ces clients',
    created_message: 'Client créé avec succès',
    updated_message: 'Client mis à jour avec succès',
    deleted_message: 'Client supprimé avec succès | Les clients supprimés avec succès'
  },
  items: {
    title: 'Articles',
    items_list: 'Liste darticles',
    name: 'Nom',
    unit: 'Unité',
    description: 'La description',
    added_on: 'Ajouté le',
    price: 'Prix',
    date_of_creation: 'Date de création',
    action: 'action',
    add_item: 'Ajouter un item',
    save_item: 'Enregistrer lélément',
    update_item: 'Mettre à jour lélément',
    item: 'Article | Articles',
    add_new_item: 'Ajoute un nouvel objet',
    new_item: 'Nouvel article',
    edit_item: 'Modifier larticle',
    no_items: 'Aucun article pour le moment!',
    list_of_items: 'Cette section contiendra la liste des éléments.',
    select_a_unit: 'sélectionner lunité',

    item_attached_message: 'Impossible de supprimer un élément déjà utilisé',
    confirm_delete: 'Vous ne pourrez pas récupérer cet article | Vous ne pourrez pas récupérer ces objets',
    created_message: 'Article créé avec succès',
    updated_message: 'Élément mis à jour avec succès',
    deleted_message: 'Élément supprimé avec succès | Éléments supprimés avec succès'
  },
  estimates: {
    title: 'Estimations',
    estimate: 'Estimation | Estimations',
    estimates_list: 'Liste des estimations',
    days: '{jours} jours',
    months: '{mois} mois',
    years: '{années} Année',
    all: 'Toute',
    paid: 'Payé',
    unpaid: 'Non payé',
    customer: 'CLIENTE CLIENT',
    ref_no: 'REF NO.',
    number: 'NOMBRE',
    amount_due: 'MONTANT DÛ',
    partially_paid: 'Partiellement payé',
    total: 'Totale',
    discount: 'Remise',
    sub_total: 'Total partiel',
    estimate_number: 'Numéro destimation',
    ref_number: 'Numéro de ref',
    contact: 'Contact',
    add_item: 'Ajouter un article',
    date: 'Date',
    due_date: 'Date déchéance',
    expiry_date: 'Date dexpiration',
    status: 'Statut',
    add_tax: 'Ajouter une taxe',
    amount: 'Montante',
    action: 'action',
    notes: 'Remarques',
    tax: 'Impôt',
    estimate_template: 'Modèle destimation',
    convert_to_invoice: 'Convertir en facture',
    mark_as_sent: 'Marquer comme envoyé',
    send_estimate: 'Envoyer une estimation',
    record_payment: 'Record de paiement',
    add_estimate: 'Ajouter une estimation',
    save_estimate: 'Sauvegarder lestimation',
    confirm_conversion: 'Vous souhaitez convertir cette estimation en facture?',
    conversion_message: 'Conversion réussie',
    confirm_send_estimate: 'Cette estimation sera envoyée par courrier électronique au client.',
    confirm_mark_as_sent: 'Cette estimation sera marquée comme envoyé',
    confirm_mark_as_accepted: 'Cette estimation sera marquée comme acceptée',
    confirm_mark_as_rejected: 'Cette estimation sera marquée comme Rejetée',
    mark_as_sent_successfully: 'Estimation marquée comme envoyée avec succès',
    send_estimate_successfully: 'Estimation envoyée avec succès',
    errors: {
      required: 'Champ requis'
    },
    accepted: 'Accepté',
    sent: 'Envoyée',
    draft: 'Brouillon',
    declined: 'Diminué',
    new_estimate: 'Nouvelle estimation',
    add_new_estimate: 'Ajouter une nouvelle estimation',
    update_Estimate: 'Mise à jour de lestimation',
    edit_estimate: 'Modifier lestimation',
    items: 'articles',
    Estimate: 'Estimation | Estimations',
    add_new_tax: 'Ajouter une nouvelle taxe',
    no_estimates: 'Aucune estimation pour le moment!',
    list_of_estimates: 'Cette section contiendra la liste des estimations.',
    mark_as_rejected: 'Marquer comme rejeté',
    mark_as_accepted: 'Marquer comme accepté',

    marked_as_accepted_message: 'Estimation marquée comme acceptée',
    marked_as_rejected_message: 'Estimation marquée comme rejetée',
    confirm_delete: 'Vous ne pourrez pas récupérer cette estimation | Vous ne pourrez pas récupérer ces estimations',
    created_message: 'Estimation créée avec succès',
    updated_message: 'Estimation mise à jour avec succès',
    deleted_message: 'Estimation supprimée avec succès | Estimations supprimées avec succès',
    item: {
      title: 'Titre de larticle',
      description: 'La description',
      quantity: 'Quantité',
      price: 'Prix',
      discount: 'Remise',
      total: 'Totale',
      total_discount: 'Remise totale',
      sub_total: 'Total partiel',
      tax: 'Impôt',
      amount: 'Montante',
      select_an_item: 'Tapez ou cliquez pour sélectionner un élément',
      type_item_description: 'Type Item Description (optionnel)'
    }
  },
  invoices: {
    title: 'Factures',
    invoices_list: 'Liste de factures',
    days: '{jours} jours',
    months: '{mois} mois',
    years: '{années} Année',
    all: 'Toute',
    paid: 'Payé',
    unpaid: 'Non payé',
    customer: 'CLIENTE CLIENT',
    paid_status: 'Statut payé',
    ref_no: 'REF NO.',
    number: 'NOMBRE',
    amount_due: 'MONTANT DÛ',
    partially_paid: 'Partiellement payé',
    total: 'Totale Total',
    discount: 'Remise',
    sub_total: 'Total partiel',
    invoice: 'Facture | Factures',
    invoice_number: 'Numéro de facture',
    ref_number: 'Numéro de ref',
    contact: 'Contact',
    add_item: 'Ajouter un article',
    date: 'Date',
    due_date: 'Date déchéance',
    status: 'Statut',
    add_tax: 'Ajouter une taxe',
    amount: 'Montante Montant',
    action: 'action',
    notes: 'Remarques',
    view: 'Vue',
    send_invoice: 'Envoyer une facture',
    invoice_template: 'Modèle de facture',
    template: 'Modèle',
    mark_as_sent: 'Marquer comme envoyé',
    invoice_mark_as_sent: 'Cette facture sera marquée comme envoyé',
    confirm_send: 'Cette facture sera envoyée par courrier électronique au client.',
    invoice_date: 'Date de facturation',
    record_payment: 'Record de paiement',
    add_new_invoice: 'Ajouter une nouvelle facture',
    update_expense: 'Frais de mise à jour',
    edit_invoice: 'Modifier la facture',
    new_invoice: 'Nouvelle facture',
    save_invoice: 'Enregistrer la facture',
    update_invoice: 'Mettre à jour la facture',
    add_new_tax: 'Ajouter une nouvelle taxe',
    no_invoices: 'Aucune facture pour le moment!',
    list_of_invoices: 'Cette section contiendra la liste des factures.',
    select_invoice: 'Sélectionnez facture',
    mark_as_sent_successfully: 'Facture marquée comme envoyée avec succès',
    send_invoice_successfully: 'Facture envoyée avec succès',
    item: {
      title: 'Titre de larticle',
      description: 'La description',
      quantity: 'Quantité',
      price: 'Prix',
      discount: 'Remise',
      total: 'Totale Total',
      total_discount: 'Remise totale',
      sub_total: 'Total partiel',
      tax: 'Impôt',
      amount: 'Montante Montant',
      select_an_item: 'Tapez ou cliquez pour sélectionner un élément',
      type_item_description: 'Type Item Description (optionnel)'
    },
    payment_attached_message: "Un paiement est déjà associé à l'une des factures sélectionnées. Assurez-vous d’effacer d’abord les paiements en pièce jointe afin de procéder à la suppression.",
    confirm_delete: 'Vous ne pourrez pas récupérer cette facture | Vous ne pourrez pas récupérer ces factures',
    created_message: 'Facture créée avec succès',
    updated_message: 'Facture mise à jour avec succès',
    deleted_message: 'Invoice deleted successfully | Invoices deleted successfully',
    marked_as_sent_message: 'Facture supprimée avec succès | Factures supprimées avec succès',
    invalid_due_amount_message: 'Le paiement entré est supérieur au montant total dû pour cette facture. Veuillez vérifier et réessayer'
  },
  credit_notes: {
    title: 'Notes de crédit',
    credit_notes_list: 'Liste des notes de crédit',
    // Fields
    credit_notes: 'Notes de crédit',
    contact: 'Contact',
    date: 'Date',
    amount: 'Montante Montant',
    action: 'action',
    credit_number: 'Numéro de crédit',
    notes: 'Remarques',
    confirm_delete: 'Voulez-vous supprimer cet avoir?',
    item: {
      title: 'Titre de larticle',
      description: 'La description',
      quantity: 'Quantité',
      price: 'Prix',
      discount: 'Remise',
      total: 'Totale Total',
      total_discount: 'Remise totale',
      sub_total: 'Total partiel',
      tax: 'Impôt'
    }
  },
  payments: {
    title: 'Paiements',
    payments_list: 'Liste de paiements',
    record_payment: 'Record de paiement',
    // Fields
    customer: 'Cliente Client',
    date: 'Date',
    amount: 'Montante Montant',
    action: 'action',
    payment_number: 'Numéro de paiement',
    payment_mode: 'Mode de paiement',
    invoice: 'Facture dachat',
    note: 'Remarque',
    add_payment: 'Ajouter un paiement',
    new_payment: 'Nouveau paiement',
    edit_payment: 'Modifier le paiement',
    view_payment: 'Voir le paiement',
    add_new_payment: 'Ajouter un nouveau paiement',
    save_payment: 'Enregistrer le paiement',
    update_payment: 'Mettre à jour le paiement',
    payment: 'Paiement | Paiements',
    no_payments: 'Aucun paiement pour le moment!',
    list_of_payments: 'Cette section contiendra la liste des paiements',
    select_payment_mode: 'Sélectionnez le mode de paiement',

    confirm_delete: 'Vous ne pourrez pas récupérer ce paiement | Vous ne pourrez pas récupérer ces paiements',
    created_message: 'Paiement créé avec succès',
    updated_message: 'Paiement mis à jour avec succès',
    deleted_message: 'Paiement supprimé avec succès | Paiements supprimés avec succès',
    invalid_amount_message: 'Le montant du paiement est invalide'
  },
  expenses: {
    title: 'Les dépenses',
    expenses_list: 'Liste des dépenses',
    // Fields
    expense_title: 'Titre',
    contact: 'Contact',
    category: 'Catégorie',
    from_date: 'Partir de la date',
    to_date: 'À ce jour',
    expense_date: 'Date',
    description: 'La description',
    receipt: 'Le reçu',
    amount: 'Montante Montant',
    action: 'action',
    note: 'Remarque',
    category_id: 'Identifiant de catégorie',
    date: 'Date de dépense',
    add_expense: 'Ajouter une dépense',
    add_new_expense: 'Ajouter une nouvelle dépense',
    save_expense: 'Économiser des dépenses',
    update_expense: 'Frais de mise à jour',
    download_receipt: 'Télécharger le reçu',
    edit_expense: 'Modifier les dépenses',
    new_expense: 'Nouvelle dépense',
    expense: 'Frais | Les dépenses',
    no_expenses: 'Pas de dépenses pour le moment!',
    list_of_expenses: 'Cette section contiendra la liste des dépenses.',

    confirm_delete: 'Vous ne pourrez pas récupérer cette dépense | Vous ne pourrez pas récupérer ces frais',
    created_message: 'Dépense créée avec succès',
    updated_message: 'Dépense mise à jour avec succès',
    deleted_message: 'Dépense supprimée avec succès | Dépenses supprimées avec succès',
    categories: {
      categories_list: 'Liste des catégories',
      title: 'Titre',
      name: 'Nom',
      description: 'La description',
      amount: 'Montante Montant',
      actions: 'Actions',
      add_category: 'ajouter une catégorie',
      new_category: 'Nouvelle catégorie',
      category: 'Catégorie | Les catégories',
      select_a_category: 'choisissez une catégorie'
    }
  },
  login: {
    email: 'Email',
    password: 'Mot de passe',
    forgot_password: 'Mot de passe oublié?',
    or_signIn_with: 'ou Connectez-vous avec:',
    login: 'Sidentifier',
    register: 'Sinscrire',
    reset_password: 'réinitialiser le mot de passe',
    enter_email: 'Entrer email',
    enter_password: 'Entrer le mot de passe',
    retype_password: 'Retaper le mot de passe',
    login_placeholder: 'mail@example.com'
  },
  reports: {
    title: 'rapport',
    from_date: 'Partir de la date',
    to_date: 'À ce jour',
    status: 'Statut',
    paid: 'Payé',
    unpaid: 'Non payé',
    download_pdf: 'Télécharger le PDF',
    view_pdf: 'Voir PDF',
    update_report: 'Rapport de mise à jour',
    report: 'Rapport | Rapports',
    profit_loss: {
      profit_loss: 'Perte de profit',
      to_date: 'À ce jour',
      from_date: 'Partir de la date',
      date_range: 'Sélectionner une plage de dates'
    },
    sales: {
      sales: 'Ventes',
      date_range: 'Sélectionner une plage de dates',
      to_date: 'À ce jour',
      from_date: 'Partir de la date',
      report_type: 'Type de rapport'
    },
    taxes: {
      taxes: 'Les taxes',
      to_date: 'À ce jour',
      from_date: 'Partir de la date',
      date_range: 'Sélectionner une plage de dates'
    },
    errors: {
      required: 'Champ requis'
    },
    invoices: {
      invoice: 'Facture dachat',
      invoice_date: 'Date de facturation',
      due_date: 'Date déchéance',
      amount: 'Montante ',
      contact_name: 'Nom du contact',
      status: 'Statut'
    },
    estimates: {
      estimate: 'Estimation',
      estimate_date: 'Date destimation',
      due_date: 'Date déchéance',
      estimate_number: 'Numéro destimation',
      ref_number: 'Numéro de ref',
      amount: 'Montante',
      contact_name: 'Nom du contact',
      status: 'Statut'
    },
    expenses: {
      expenses: 'Les dépenses',
      category: 'Catégorie',
      date: 'Date',
      amount: 'Montante',
      to_date: 'À ce jour',
      from_date: 'Partir de la date',
      date_range: 'Sélectionner une plage de dates'
    }
  },
  settings: {
    menu_title: {
      account_settings: 'Paramètres du compte',
      company_information: 'Informations sur la société',
      preferences: 'Préférences',
      notifications: 'Les notifications',
      tax_types: 'Types de taxe',
      expense_category: 'Catégories de dépenses',
      update_app: "Mise à jour de l'application"
    },
    title: 'Paramètres',
    setting: 'Paramètres | Paramètres',
    general: 'Générale',
    language: 'La langue',
    primary_currency: 'Devise principale',
    timezone: 'Fuseau horaire',
    date_format: 'Format de date',
    currencies: {
      title: 'Monnaies',
      currency: 'Monnaie | Monnaies',
      currencies_list: 'Liste des devises',
      select_currency: 'Sélectionnez la devise',
      name: 'Nom',
      code: 'Code',
      symbol: 'symbole',
      precision: 'Précision',
      thousand_separator: 'Mille séparateur',
      decimal_separator: 'Séparateur décimal',
      position: 'Position',
      position_of_symbol: 'Position du symbole',
      right: 'Droite',
      left: 'La gauche',
      action: 'action',
      add_currency: 'Ajouter une devise'
    },
    mail: {
      host: 'Mail Host',
      port: 'Port mail',
      driver: 'Pilote de courrier',
      password: 'Mot de passe mail',
      secret: 'Secret',
      mailgun_secret: 'Mailgun Secret',
      mailgun_domain: 'Domaine',
      mailgun_endpoint: 'Mailgun Point Final',
      ses_secret: 'SES Secret',
      ses_key: 'SES clé',
      from_name: 'Nom de messagerie',
      from_mail: 'De ladresse mail',
      username: "Mail Nom d'utilisateur",
      mail_config: 'Configuration du courrier',
      encryption: 'Chiffrement du courrier',
      mail_config_desc: "Les détails ci-dessous seront utilisés pour mettre à jour l'environnement de messagerie. Aussi, vous pouvez modifier les détails à tout moment après la connexion."
    },
    pdf: {
      title: 'Paramètre PDF',
      footer_text: 'Pied de page texte',
      pdf_layout: 'Mise en page PDF'
    },
    company_info: {
      company_info: 'Information dentreprise',
      company_name: 'Nom de la compagnie',
      company_logo: 'Logo dentreprise',
      section_description: 'Informations sur votre entreprise qui figureront sur les factures, estimations et autres documents créés par Crater.',
      phone: 'Téléphone',
      country: 'Pays',
      state: 'Etat',
      city: 'Ville',
      address: 'Adresse',
      zip: 'Zip *: français',
      save: 'sauver',
      updated_message: 'Informations sur la société mises à jour avec succès'
    },
    account_settings: {
      profile_picture: 'Image de profil',
      name: 'Nom',
      email: 'Email',
      password: 'Mot de passe',
      confirm_password: 'Confirmez le mot de passe',
      account_settings: 'Paramètres du compte',
      save: 'sauver',
      section_description: 'Vous pouvez mettre à jour votre nom, votre email et votre mot de passe en utilisant le formulaire ci-dessous.',
      updated_message: 'Paramètres du compte mis à jour avec succès'
    },
    user_profile: {
      name: 'Nom',
      email: 'Email',
      password: 'Mot de passe',
      confirm_password: 'Confirmez le mot de passe'
    },
    notification: {
      title: 'Notification',
      email: 'Envoyer des notifications à',
      description: 'Quelles notifications par courrier électronique souhaitez-vous recevoir lorsque quelque chose change?',
      invoice_viewed: 'Facture consultée',
      invoice_viewed_desc: 'Lorsque votre client visualise la facture envoyée via le tableau de bord du cratère.',
      estimate_viewed: 'Estimation vue',
      estimate_viewed_desc: 'Lorsque votre client visualise le devis envoyé via le tableau de bord du cratère.',
      save: 'sauver',
      email_save_message: 'Email enregistré avec succès',
      invoice_viewed_message: 'Facture consultée',
      estimate_viewed_message: 'Estimation vue',
      please_enter_email: 'S il vous plaît entrer email'
    },
    tax_types: {
      title: 'Types de taxe',
      add_tax: 'Ajouter une taxe',
      description: 'Vous pouvez ajouter ou supprimer des taxes à votre guise. Crater prend en charge les taxes sur les articles individuels ainsi que sur la facture.',
      add_new_tax: 'Ajouter une nouvelle taxe',
      tax_settings: 'Paramètres de taxe',
      tax_per_item: 'Taxe par article',
      tax_name: 'Nom de la taxe',
      compound_tax: 'Taxe composée',
      percent: 'Pour cent',
      action: 'action',
      tax_setting_description: 'Activez cette option si vous souhaitez ajouter des taxes à des postes de facture individuels. Par défaut, les taxes sont ajoutées directement à la facture.',
      created_message: 'Type de taxe créé avec succès',
      updated_message: 'Type de taxe mis à jour avec succès',
      deleted_message: 'Type de taxe supprimé avec succès',
      confirm_delete: 'Vous ne pourrez pas récupérer ce type de taxe',
      already_in_use: 'La taxe est déjà utilisée'
    },
    expense_category: {
      title: 'Catégories de dépenses',
      action: 'action',
      description: 'Des catégories sont requises pour ajouter des entrées de dépenses. Vous pouvez ajouter ou supprimer ces catégories selon vos préférences.',
      add_new_category: 'Ajouter une nouvelle catégorie',
      category_name: 'Nom de catégorie',
      category_description: 'La description',
      created_message: 'Catégorie de dépenses créée avec succès',
      deleted_message: 'La catégorie de dépenses a été supprimée avec succès',
      updated_message: 'Catégorie de dépenses mise à jour avec succès',
      confirm_delete: 'Vous ne pourrez pas récupérer cette catégorie de dépenses',
      already_in_use: 'La catégorie est déjà utilisée'
    },
    preferences: {
      currency: 'Devise',
      language: 'La langue',
      time_zone: 'Fuseau horaire',
      fiscal_year: 'Année financière',
      date_format: 'Format de date',
      discount_setting: 'Réglage de remise',
      discount_per_item: 'Remise par article',
      discount_setting_description: 'Activez cette option si vous souhaitez ajouter une remise à des postes de facture individuels. Par défaut, les remises sont ajoutées directement à la facture.',
      save: 'sauver',
      preference: 'Préférence | Préférences',
      general_settings: 'Préférences par défaut pour le système.',
      updated_message: 'Préférences mises à jour avec succès',
      set_discount_per_item_message: 'Jeu de remise par article',
      select_language: 'Choisir la langue',
      select_time_zone: 'sélectionnez le fuseau horaire',
      select_date_formate: 'sélectionnez Date Formate',
      select_financial_year: 'sélectionner lexercice'
    },
    update_app: {
      title: "Mise à jour de l'application",
      description: "mettre à jour la description de l'application",
      check_update: 'Vérifier les mises à jour',
      avail_update: 'Nouvelle mise à jour disponible',
      next_version: 'Version suivante',
      update: 'Mettre à jour maintenant',
      update_progress: 'Mise à jour en cours...',
      progress_text: "Cela ne prendra que quelques minutes. S'il vous plaît ne pas actualiser l'écran ou fermer la fenêtre avant la fin de la mise à jour",
      update_success: "L'application a été mise à jour avec succès",
      latest_message: 'Pas de mise a jour disponible! Vous êtes sur la dernière version.',
      current_version: 'Version actuelle'
    }
  },
  wizard: {
    account_info: 'Information sur le compte',
    account_info_desc: 'Les détails ci-dessous seront utilisés pour créer le compte administrateur principal. Aussi, vous pouvez modifier les détails à tout moment après la connexion.',
    name: 'Nom',
    email: 'Email',
    password: 'Mot de passe',
    confirm_password: 'Confirmez le mot de passe',
    save_cont: 'Enregistrer continuer',
    company_info: 'Informations sur la société',
    company_info_desc: 'Ces informations seront affichées sur les factures. Notez que vous pouvez éditer ceci plus tard sur la page des paramètres.',
    company_name: 'Nom de la compagnie',
    company_logo: 'Logo dentreprise',
    logo_preview: 'Aperçu du logo',
    preferences: 'Préférences',
    preferences_desc: 'Préférences par défaut pour le système.',
    country: 'Pays',
    state: 'Etat',
    city: 'Ville',
    address: 'Adresse',
    street: 'Street1 ' | 'Rue # 2',
    phone: 'Téléphone',
    zip_code: 'Code postal',
    go_back: 'Retourner',
    currency: 'Devise',
    language: 'La langue',
    time_zone: 'Fuseau horaire',
    fiscal_year: 'Année financière',
    date_format: 'Format de date',
    from_address: "De l'adresse",
    username: "Nom d'utilisateur",
    next: 'Suivant',
    continue: 'Continuer',
    database: {
      database: 'URL du site et base de données',
      connection: 'Connexion à la base de données',
      host: 'Hôte de base de données',
      port: 'Port de base de données',
      password: 'Mot de passe de base de données',
      app_url: 'Application URL',
      username: "Nom d'utilisateur de la base de données",
      db_name: 'Nom de la base de données',
      desc: "Créez une base de données sur votre serveur et définissez les informations d'identification à l'aide du formulaire ci-dessous."
    },
    permissions: {
      permissions: 'Les permissions',
      permission_confirm_title: 'Es-tu sur de vouloir continuer?',
      permission_confirm_desc: 'La vérification de l\'autorisation du dossier a échoué',
      permission_desc: "Vous trouverez ci-dessous la liste des autorisations de dossier requises pour le fonctionnement de l'application. Si la vérification des autorisations échoue, veillez à mettre à jour vos autorisations de dossier."
    },
    mail: {
      host: 'Mail Host',
      port: 'Port mail',
      driver: 'Pilote de courrier',
      password: 'Mot de passe mail',
      secret: 'Secret',
      mailgun_secret: 'Mailgun Secret',
      mailgun_domain: 'Domaine',
      mailgun_endpoint: 'Mailgun Point Final',
      ses_secret: 'SES Secret',
      ses_key: 'SES clé',
      from_name: 'Nom de messagerie',
      from_mail: 'De ladresse mail',
      username: "Mail Nom d'utilisateur",
      mail_config: 'Configuration du courrier',
      encryption: 'Chiffrement du courrier',
      mail_config_desc: "Les détails ci-dessous seront utilisés pour mettre à jour l'environnement de messagerie. Aussi, vous pouvez modifier les détails à tout moment après la connexion."
    },
    req: {
      system_req: 'Configuration requise',
      php_req_version: 'Php (version {version} nécessaire)',
      check_req: 'Vérifier les exigences',
      system_req_desc: 'Crater a quelques exigences de serveur. Assurez-vous que votre serveur dispose de la version PHP requise et de toutes les extensions mentionnées ci-dessous.'
    },
    errors: {
      migrate_failed: 'Migration impossible',
      database_variables_save_error: 'Impossible de se connecter à la base de données avec les valeurs fournies.',
      mail_variables_save_error: 'La configuration du courrier électronique a échoué.',
      connection_failed: 'La connexion à la base de données a échoué'
    },
    success: {
      mail_variables_save_successfully: 'Email configuré avec succès',
      database_variables_save_successfully: 'Base de données configurée avec succès.'
    }
  },
  layout_login: {
    copyright_crater: 'Copyright @ Crater - 2019',
    super_simple_invoicing: 'Super Simple Facturation',
    for_freelancer: 'pour les pigistes et',
    small_businesses: 'Petites entreprises ',
    crater_help: 'Crater vous aide à suivre vos dépenses, à enregistrer vos paiements et à générer de belles',
    invoices_and_estimates: 'factures et devis avec possibilité de choisir plusieurs modèles.'

  },
  validation: {
    invalid_url: 'URL invalide (ex: http://www.crater.com)',
    required: 'Champ requis',
    email_incorrect: 'Adresse Email incorrecte.',
    email_does_not_exist: "L'utilisateur avec un email donné n'existe pas",
    send_reset_link: 'Envoyer le lien de réinitialisation',
    not_yet: 'Pas encore? Envoyer à nouveau',
    password_min_length: 'Le mot de passe doit contenir {nombre} caractères',
    name_min_length: 'Le nom doit avoir au moins {count} lettres.',
    enter_valid_tax_rate: 'Entrez un taux de taxe valide',
    numbers_only: 'Chiffres uniquement.',
    characters_only: 'Caractères seulement.',
    password_incorrect: 'Les mots de passe doivent être identiques',
    password_length: 'Le mot de passe doit comporter 5 caractères.',
    qty_must_greater_than_zero: 'La quantité doit être supérieure à zéro.',
    price_greater_than_zero: 'Le prix doit être supérieur à zéro.',
    payment_greater_than_zero: 'Le paiement doit être supérieur à zéro.',
    payment_greater_than_due_amount: 'Le paiement entré est plus que le montant dû de cette facture.',
    quantity_maxlength: 'La quantité ne doit pas dépasser 20 chiffres.',
    price_maxlength: 'Le prix ne doit pas dépasser 20 chiffres.',
    price_minvalue: 'Le prix doit être supérieur à 0 chiffre',
    amount_maxlength: 'Le montant ne doit pas dépasser 20 chiffres.',
    amount_minvalue: 'Le montant doit être supérieur à 0 chiffre',
    description_maxlength: 'La description ne doit pas dépasser 255 caractères.',
    maximum_options_error: 'Maximum de {max} options sélectionnées. Commencez par supprimer une option sélectionnée pour en sélectionner une autre.',
    notes_maxlength: 'Les notes ne doivent pas dépasser 255 caractères.',
    address_maxlength: "L'adresse ne doit pas dépasser 255 caractères.",
    ref_number_maxlength: 'Le numéro de référence ne doit pas dépasser 255 caractères.'
  }
}
