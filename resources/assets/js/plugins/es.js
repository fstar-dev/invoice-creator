export default {
  navigation: {
    // key : 'singular | plural'
    dashboard: 'Tablero',
    customers: 'Clientes',
    items: 'Artículos',
    invoices: 'Facturas',
    expenses: 'Gastos',
    estimates: 'Estimadas',
    payments: 'Pagos',
    reports: 'Informes',
    settings: 'Configuraciones',
    logout: 'Cerrar sesión'
  },
  general: {
    view_pdf: 'Ver PDF',
    download_pdf: 'Descargar PDF',
    save: 'Salvar',
    cancel: 'Cancelar',
    update: 'Actualizar',
    download: 'Descargar',
    from_date: 'Partir de la fecha',
    to_date: 'Hasta la fecha',
    from: 'De',
    to: 'A',
    go_back: 'Regresa',
    back_to_login: '¿Atrás para iniciar sesión?',
    home: 'Casa',
    filter: 'Filtrar',
    delete: 'Eliminar',
    edit: 'Editar',
    view: 'Ver',
    add_new_item: 'Agregar ítem nuevo',
    clear_all: 'Limpiar todo',
    showing: 'Demostración',
    of: 'de',
    actions: 'Comportamiento',
    subtotal: 'TOTAL PARCIAL',
    discount: 'DESCUENTO',
    fixed: 'Fija',
    percentage: 'Porcentaje',
    tax: 'IMPUESTO',
    total_amount: 'CANTIDAD TOTAL',
    bill_to: 'Cobrar a',
    ship_to: 'Envie a',
    due: 'Debida',
    draft: 'Sequía',
    sent: 'Expedida',
    all: 'Todas',
    select_all: 'Seleccionar todo',
    choose_file: 'Haga clic aquí para elegir un archivo.',
    choose_template: 'Elige una plantilla',
    choose: 'Escoger',
    remove: 'Eliminar',
    powered_by: 'Energizado por',
    bytefury: 'Bytefury',
    select_a_status: 'Selecciona un estado',
    select_a_tax: 'Selecciona un impuesto',
    search: 'Buscar',
    are_you_sure: '¿Estás seguro?',
    list_is_empty: 'La lista esta vacía.',
    no_tax_found: '¡No se encontraron impuestos!',
    four_zero_four: '404',
    you_got_lost: 'Whoops! ¡Te perdiste!',
    go_home: 'Vete a casa',

    setting_updated: 'Configuración actualizada con éxito',
    select_state: 'Seleccione estado',
    select_country: 'Seleccionar país',
    select_city: 'Ciudad selecta',
    street_1: 'Calle 1',
    street_2: 'Calle # 2',
    action_failed: 'Accion: Fallida'
  },
  dashboard: {
    select_year: 'Seleccione año',
    cards: {
      due_amount: 'Monto adeudado',
      customers: 'Clientes',
      invoices: 'Facturas',
      estimates: 'Estimadas'
    },
    chart_info: {
      total_sales: 'Ventas',
      total_receipts: 'Ingresos',
      total_expense: 'Gastos',
      net_income: 'Lngresos netos',
      year: 'Seleccione año'
    },
    weekly_invoices: {
      title: 'Facturas semanales'
    },
    monthly_chart: {
      title: 'Gastos de venta'
    },
    recent_invoices_card: {
      title: 'Facturas adeudadas',
      due_on: 'Debido a',
      customer: 'Cliente',
      amount_due: 'Monto adeudado',
      actions: 'Comportamiento',
      view_all: 'Ver todo'
    },
    recent_estimate_card: {
      title: 'Estimaciones recientes',
      date: 'Fecha',
      customer: 'Cliente',
      amount_due: 'Monto adeudado',
      actions: 'Comportamiento',
      view_all: 'Ver todo'
    }
  },
  tax_types: {
    name: 'Nombre',
    description: 'Descripción',
    percent: 'Por ciento',
    compound_tax: 'Impuesto compuesto'
  },
  customers: {
    title: 'Clientes',
    add_customer: 'Agregar cliente',
    contacts_list: 'Lista de clientes',
    name: 'Nombre',
    display_name: 'Nombre para mostrar',
    primary_contact_name: 'Nombre de contacto primario',
    contact_name: 'Nombre de contacto',
    amount_due: 'Monto adeudado',
    email: 'Email',
    address: 'Habla a',
    phone: 'Teléfono',
    website: 'Sitio web',
    country: 'País',
    state: 'Estado',
    city: 'Ciudad',
    zip_code: 'Código postal',
    added_on: 'Añadido',
    action: 'Acción',
    password: 'Contraseña',
    street_number: 'Número de calle',
    primary_currency: 'Moneda primaria',
    add_new_customer: 'Agregar nuevo cliente',
    save_customer: 'Guardar cliente',
    update_customer: 'Actualizar cliente',
    customer: 'Cliente | Clientes',
    new_customer: 'Nuevo cliente',
    edit_customer: 'Editar cliente',
    basic_info: 'Información básica',
    billing_address: 'Dirección de Envio',
    shipping_address: 'Dirección de Envío',
    copy_billing_address: 'Copia de facturación',
    no_customers: '¡Aún no hay clientes!',
    no_customers_found: 'No se encontraron clientes!',
    list_of_customers: 'Esta sección contendrá la lista de clientes.',
    primary_display_name: 'Nombre de visualización principal',
    select_state: 'Seleccione estado',
    select_country: 'Seleccionar país',
    select_city: 'Ciudad selecta',
    select_currency: 'Seleccione el tipo de moneda',
    street_1: 'Calle 1',
    street_2: 'Calle 2',
    select_a_customer: 'Selecciona un cliente',
    type_or_click: 'Escriba o haga clic para seleccionar',

    confirm_delete: 'No podrá recuperar este cliente | No podrá recuperar estos clientes',
    created_message: 'Cliente creado con éxito',
    updated_message: 'Cliente actualizado con éxito',
    deleted_message: 'Cliente eliminado correctamente | Clientes eliminados exitosamente'
  },
  items: {
    title: 'Artículos',
    items_list: 'Lista de artículos',
    name: 'Nombre',
    unit: 'Unidad',
    description: 'Descripción',
    added_on: 'Añadido',
    price: 'Precio',
    date_of_creation: 'Fecha de creación',
    action: 'Acción',
    add_item: 'Añadir artículo',
    save_item: 'Guardar artículo',
    update_item: 'Actualizar elemento',
    item: 'Artículo | Artículos',
    add_new_item: 'Agregar ítem nuevo',
    new_item: 'Nuevo artículo',
    edit_item: 'Editar elemento',
    no_items: '¡Aún no hay artículos!',
    list_of_items: 'Esta sección contendrá la lista de artículos.',
    select_a_unit: 'seleccione unidad',

    item_attached_message: 'No se puede eliminar un elemento que ya está en uso.',
    confirm_delete: 'No podrá recuperar este artículo | No podrás recuperar estos elementos',
    created_message: 'Artículo creado con éxito',
    updated_message: 'Artículo actualizado con éxito',
    deleted_message: 'Elemento eliminado con éxito | Elementos eliminados correctamente'
  },
  estimates: {
    title: 'Estimadas',
    estimate: 'Estimación | Estimados',
    estimates_list: 'Lista de estimaciones',
    days: '{días} días',
    months: '{meses} Mes',
    years: '{años} Año',
    all: 'Todas',
    paid: 'Pagada',
    unpaid: 'No pagado',
    customer: 'CLIENTE',
    ref_no: 'NÚMERO DE REFERENCIA.',
    number: 'NÚMERO',
    amount_due: 'CANTIDAD DEBIDA',
    partially_paid: 'Parcialmente pagado',
    total: 'Total',
    discount: 'Descuento',
    sub_total: 'Subtotal',
    estimate_number: 'Numero Estimado',
    ref_number: 'Número de referencia',
    contact: 'Contacto',
    add_item: 'Agregar un artículo',
    date: 'Fecha',
    due_date: 'Fecha de vencimiento',
    expiry_date: 'Fecha de caducidad',
    status: 'Estado',
    add_tax: 'Agregar impuesto',
    amount: 'Cantidad',
    action: 'Acción',
    notes: 'Notas',
    tax: 'Impuesto',
    send_estimate: 'Enviar presupuesto',
    estimate_template: 'Plantilla de estimación',
    convert_to_invoice: 'Convertir a factura',
    mark_as_sent: 'Marcar como enviado',
    record_payment: 'Registro de pago',
    add_estimate: 'Agregar presupuesto',
    save_estimate: 'Guardar estimación',
    confirm_conversion: '¿Quiere convertir esta estimación en factura?',
    conversion_message: 'Conversión exitosa',
    confirm_send_estimate: 'Esta estimación se enviará por correo electrónico al cliente',
    confirm_mark_as_sent: 'Esta estimación se marcará como enviada',
    confirm_mark_as_accepted: 'Esta estimación se marcará como Aceptada',
    confirm_mark_as_rejected: 'Esta estimación se marcará como Rechazada',
    mark_as_sent_successfully: 'Estimación marcada como enviada correctamente',
    send_estimate_successfully: 'Estimación enviada con éxito',
    errors: {
      required: 'Se requiere campo'
    },
    accepted: 'Aceptada',
    sent: 'Expedida',
    draft: 'Sequía',
    declined: 'Rechazada',
    new_estimate: 'Nueva estimación',
    add_new_estimate: 'Añadir nuevo presupuesto',
    update_Estimate: 'Actualizar presupuesto',
    edit_estimate: 'Editar estimación',
    items: 'artículos',
    Estimate: 'Estimación | Estimados',
    add_new_tax: 'Agregar nuevo impuesto',
    no_estimates: '¡Aún no hay estimaciones!',
    list_of_estimates: 'Esta sección contendrá la lista de estimaciones.',
    mark_as_rejected: 'Marcar como rechazado',
    mark_as_accepted: 'Marcar como aceptado',

    marked_as_accepted_message: 'Estimación marcada como aceptada',
    marked_as_rejected_message: 'Estimación marcada como rechazada',
    confirm_delete: 'No podrá recuperar esta estimación | No podrá recuperar estas estimaciones',
    created_message: 'Estimación creada con éxito',
    updated_message: 'Estimación actualizada con éxito',
    deleted_message: 'Estimación eliminada con éxito | Estimaciones eliminadas exitosamente',
    item: {
      title: 'Título del artículo',
      description: 'Descripción',
      quantity: 'Quantity',
      price: 'Precio',
      discount: 'Descuento',
      total: 'Total',
      total_discount: 'Descuento total',
      sub_total: 'Subtotal',
      tax: 'Impuesto',
      amount: 'Cantidad',
      select_an_item: 'Escriba o haga clic para seleccionar un elemento',
      type_item_description: 'Tipo Elemento Descripción (opcional)'
    }
  },
  invoices: {
    title: 'Facturas',
    invoices_list: 'Lista de facturas',
    days: '{días} días',
    months: '{meses} Mes',
    years: '{años} Año',
    all: 'Todas',
    paid: 'Pagada',
    unpaid: 'No pagado',
    customer: 'CLIENTE',
    paid_status: 'ESTADO PAGADO',
    ref_no: 'NÚMERO DE REFERENCIA.',
    number: 'NÚMERO',
    amount_due: 'CANTIDAD DEBIDA',
    partially_paid: 'Parcialmente pagado',
    total: 'Total',
    discount: 'Descuento',
    sub_total: 'Subtotal',
    invoice: 'Factura | Facturas',
    invoice_number: 'Numero de factura',
    ref_number: 'Número de referencia',
    contact: 'Contacto',
    add_item: 'Agregar un artículo',
    date: 'Fecha',
    due_date: 'Fecha de vencimiento',
    status: 'Estado',
    add_tax: 'Agregar impuesto',
    amount: 'Cantidad',
    action: 'Acción',
    notes: 'Notas',
    view: 'Ver',
    send_invoice: 'Enviará la factura',
    invoice_template: 'Plantilla de factura',
    template: 'Modelo',
    mark_as_sent: 'Marcar como enviado',
    invoice_mark_as_sent: 'Esta factura se marcará como enviada',
    confirm_send: 'Estas facturas se enviarán por correo electrónico al cliente.',
    invoice_date: 'Fecha de la factura',
    record_payment: 'Registro de pago',
    add_new_invoice: 'Añadir nueva factura',
    update_expense: 'Gastos de actualización',
    edit_invoice: 'Editar factura',
    new_invoice: 'Nueva factura',
    save_invoice: 'Guardar factura',
    update_invoice: 'Actualizar factura',
    add_new_tax: 'Agregar nuevo impuesto',
    no_invoices: '¡Aún no hay facturas!',
    list_of_invoices: 'Esta sección contendrá la lista de facturas.',
    select_invoice: 'Seleccionar factura',
    mark_as_sent_successfully: 'Factura marcada como enviada con éxito',
    send_invoice_successfully: 'Factura enviada exitosamente',
    item: {
      title: 'Título del artículo',
      description: 'Descripción',
      quantity: 'Cantidad',
      price: 'Precio',
      discount: 'Descuento',
      total: 'Total',
      total_discount: 'Descuento total',
      sub_total: 'Subtotal',
      tax: 'Impuesto',
      amount: 'Cantidad',
      select_an_item: 'Escriba o haga clic para seleccionar un elemento',
      type_item_description: 'Tipo Elemento Descripción (opcional)'
    },
    payment_attached_message: 'Una de las facturas seleccionadas ya tiene un pago adjunto. Asegúrese de eliminar primero los pagos adjuntos para continuar con la eliminación',
    confirm_delete: 'No podrá recuperar esta factura | No podrá recuperar estas facturas',
    created_message: 'Factura creada exitosamente',
    updated_message: 'Factura actualizada exitosamente',
    deleted_message: 'Factura eliminada con éxito | Facturas borradas exitosamente',
    marked_as_sent_message: 'Factura marcada como enviada con éxito',
    invalid_due_amount_message: 'El pago ingresado es mayor que el monto total adeudado por esta factura. Por favor verifique y vuelva a intentar'
  },
  credit_notes: {
    title: 'Notas de credito',
    credit_notes_list: 'Lista de notas de crédito',
    // Fields
    credit_notes: 'Notas de credito',
    contact: 'Contacto',
    date: 'Fecha',
    amount: 'Cantidad',
    action: 'Acción',
    credit_number: 'Número de crédito',
    notes: 'Notas',
    confirm_delete: '¿Desea eliminar esta nota de crédito?',
    item: {
      title: 'Título del artículo',
      description: 'Descripción',
      quantity: 'Cantidad',
      price: 'Precio',
      discount: 'Descuento',
      total: 'Total',
      total_discount: 'Descuento total',
      sub_total: 'Subtotal',
      tax: 'Impuesto'
    }
  },
  payments: {
    title: 'Pagos',
    payments_list: 'Lista de pagos',
    record_payment: 'Registro de pago',
    // Fields
    customer: 'Cliente',
    date: 'Fecha',
    amount: 'Cantidad',
    action: 'Acción',
    payment_number: 'Numero de pago',
    payment_mode: 'Modo de pago',
    invoice: 'Factura',
    note: 'Nota',
    add_payment: 'Agregar pago',
    new_payment: 'Nuevo pago',
    edit_payment: 'Editar pago',
    view_payment: 'Ver pago',
    add_new_payment: 'Agregar nuevo pago',
    save_payment: 'Guardar pago',
    update_payment: 'Actualizar pago',
    payment: 'Pago | Pagos',
    no_payments: '¡Aún no hay pagos!',
    list_of_payments: 'Esta sección contendrá la lista de pagos.',
    select_payment_mode: 'Seleccionar modo de pago',

    confirm_delete: 'No podrá recuperar este pago | No podrá recuperar estos pagos',
    created_message: 'Pago creado con éxito',
    updated_message: 'Pago actualizado con éxito',
    deleted_message: 'Pago eliminado con éxito | Pagos eliminados exitosamente',
    invalid_amount_message: 'El importe del pago no es válido.'
  },
  expenses: {
    title: 'Gastos',
    expenses_list: 'Lista de gastos',
    // Fields
    expense_title: 'Título',
    contact: 'Contacto',
    category: 'Categoría',
    from_date: 'Partir de la fecha',
    to_date: 'Hasta la fecha',
    expense_date: 'Fecha',
    description: 'Descripción',
    receipt: 'Recibo',
    amount: 'Cantidad',
    action: 'Acción',
    note: 'Nota',
    category_id: 'Categoria ID',
    date: 'Fecha de gastos',
    add_expense: 'Añadir gastos',
    add_new_expense: 'Añadir nuevo gasto',
    save_expense: 'Ahorre gastos',
    update_expense: 'Gastos de actualización',
    download_receipt: 'Descargar recibo',
    edit_expense: 'Editar gasto',
    new_expense: 'Nuevo gasto',
    expense: 'Gastos | Gastos',
    no_expenses: 'No hay gastos todavía!',
    list_of_expenses: 'Esta sección contendrá la lista de gastos.',

    confirm_delete: 'No podrá recuperar este gasto | No podrá recuperar estos gastos',
    created_message: 'Gastos creados exitosamente',
    updated_message: 'Gastos actualizados con éxito',
    deleted_message: 'Gastos eliminados con éxito | Gastos eliminados exitosamente',
    categories: {
      categories_list: 'Lista de categorías',
      title: 'Título',
      name: 'Nombre',
      description: 'Descripción',
      amount: 'Cantidad',
      actions: 'Comportamiento',
      add_category: 'añadir categoría',
      new_category: 'Nueva categoría',
      category: 'Categoría | Categorias',
      select_a_category: 'Seleccione una categoría'
    }
  },
  login: {
    email: 'Email',
    password: 'Contraseña',
    forgot_password: '¿Se te olvidó tu contraseña?',
    or_signIn_with: 'o Inicie sesión con:',
    login: 'Iniciar sesión',
    register: 'Registro',
    reset_password: 'Restablecer la contraseña',
    enter_email: 'Ingrese correo electrónico',
    enter_password: 'Introducir la contraseña',
    retype_password: 'Retype Password',
    login_placeholder: 'mail@example.com'
  },
  reports: {
    title: 'Reporte',
    from_date: 'Partir de la fecha',
    to_date: 'Hasta la fecha',
    status: 'Estado',
    paid: 'Pagada',
    unpaid: 'No pagado',
    download_pdf: 'Descargar PDF',
    view_pdf: 'Ver PDF',
    update_report: 'Informe de actualización',
    report: 'Informe | Informes',
    profit_loss: {
      profit_loss: 'Pérdida de beneficios',
      to_date: 'Hasta la fecha',
      from_date: 'Partir de la fecha',
      date_range: 'Seleccionar rango de fechas'
    },
    sales: {
      sales: 'Ventas',
      date_range: 'Seleccionar rango de fechas',
      to_date: 'Hasta la fecha',
      from_date: 'Partir de la fecha',
      report_type: 'Tipo de informe'
    },
    taxes: {
      taxes: 'Impuestos',
      to_date: 'Hasta la fecha',
      from_date: 'Partir de la fecha',
      date_range: 'Seleccionar rango de fechas'
    },
    errors: {
      required: 'Se requiere campo'
    },
    invoices: {
      invoice: 'Factura',
      invoice_date: 'Fecha de la factura',
      due_date: 'Fecha de vencimiento',
      amount: 'Cantidad',
      contact_name: 'Nombre de contacto',
      status: 'Estado'
    },
    estimates: {
      estimate: 'Estimar',
      estimate_date: 'Fecha estimada',
      due_date: 'Fecha de vencimiento',
      estimate_number: 'Numero Estimado',
      ref_number: 'Número de referencia',
      amount: 'Cantidad',
      contact_name: 'Nombre de contacto',
      status: 'Estado'
    },
    expenses: {
      expenses: 'Gastos',
      category: 'Categoría',
      date: 'Fecha',
      amount: 'Cantidad',
      to_date: 'Hasta la fecha',
      from_date: 'Partir de la fecha',
      date_range: 'Seleccionar rango de fechas'
    }
  },
  settings: {
    menu_title: {
      account_settings: 'Configuraciones de la cuenta',
      company_information: 'Información de la empresa',
      preferences: 'Preferencias',
      notifications: 'Notificaciones',
      tax_types: 'Tipos de impuestos',
      expense_category: 'Categorías de gastos',
      update_app: 'Actualizar aplicación'
    },
    title: 'Configuraciones',
    setting: 'Configuraciones | Configuraciones',
    general: 'General',
    language: 'Idioma',
    primary_currency: 'Moneda primaria',
    timezone: 'Zona horaria',
    date_format: 'Formato de fecha',
    currencies: {
      title: 'Monedas',
      currency: 'Moneda | Monedas',
      currencies_list: 'Lista de monedas',
      select_currency: 'Seleccione el tipo de moneda',
      name: 'Nombre',
      code: 'Código',
      symbol: 'Símbolo',
      precision: 'Precisión',
      thousand_separator: 'Mil separadores',
      decimal_separator: 'Separador decimal',
      position: 'Posición',
      position_of_symbol: 'Posición del símbolo',
      right: 'Derecho',
      left: 'Izquierda',
      action: 'Acción',
      add_currency: 'Agregar moneda'
    },
    mail: {
      host: 'Host de correo',
      port: 'Puerto de correo',
      driver: 'Conductor de correo',
      secret: 'Secreto',
      password: 'Contraseña de correo',
      username: 'Nombre de usuario de correo',
      mailgun_secret: 'Mailgun Secreto',
      mailgun_domain: 'Domino',
      mailgun_endpoint: 'Mailgun Punto Final',
      ses_secret: 'SES Secreto',
      ses_key: 'SES llave',
      from_name: 'Del nombre del correo',
      from_mail: 'Desde la dirección de correo',
      mail_config: 'Configuración de correo',
      encryption: 'Cifrado de correo',
      mail_config_desc: 'Los detalles a continuación se utilizarán para actualizar el entorno de correo. También puede cambiar los detalles en cualquier momento después de iniciar sesión.'
    },
    pdf: {
      title: 'Configuración de PDF',
      footer_text: 'Texto de pie de página',
      pdf_layout: 'Diseño PDF'
    },
    company_info: {
      company_info: 'Información de la compañía',
      company_name: 'nombre de empresa',
      company_logo: 'Logo de la compañía',
      section_description: 'Información sobre su empresa que se mostrará en las facturas, estimaciones y otros documentos creados por Crater.',
      phone: 'Teléfono',
      country: 'País',
      state: 'Estado',
      city: 'Ciudad',
      address: 'Habla a',
      zip: 'Código Postal',
      save: 'Salvar',
      updated_message: 'Información de la empresa actualizada con éxito'
    },
    account_settings: {
      profile_picture: 'Foto de perfil',
      name: 'Nombre',
      email: 'Email',
      password: 'Contraseña',
      confirm_password: 'Confirmar contraseña',
      account_settings: 'Configuraciones de la cuenta',
      save: 'Salvar',
      section_description: 'Puede actualizar su nombre, correo electrónico y contraseña utilizando el siguiente formulario.',
      updated_message: 'Configuración de la cuenta actualizada correctamente'
    },
    user_profile: {
      name: 'Nombre',
      email: 'Email',
      password: 'Contraseña',
      confirm_password: 'Confirmar contraseña'
    },
    notification: {
      title: 'Notificación',
      email: 'Enviar notificaciones a',
      description: '¿Qué notificaciones por correo electrónico le gustaría recibir cuando algo cambia?',
      invoice_viewed: 'Factura vista',
      invoice_viewed_desc: 'Cuando su cliente ve la factura enviada a través del panel de control del cráter.',
      estimate_viewed: 'Estimación vista',
      estimate_viewed_desc: 'Cuando su cliente ve la estimación enviada a través del panel de control del cráter.',
      save: 'Salvar',
      email_save_message: 'Correo electrónico guardado con éxito',
      please_enter_email: 'Por favor, introduzca su correo electrónico'
    },
    tax_types: {
      title: 'Tipos de impuestos',
      add_tax: 'Agregar impuesto',
      description: 'Puede agregar o eliminar impuestos a su gusto. Crater admite impuestos sobre artículos individuales, así como sobre la factura.',
      add_new_tax: 'Agregar nuevo impuesto',
      tax_settings: 'Configuraciones de impuestos',
      tax_per_item: 'Impuesto por artículo',
      tax_name: 'Nombre fiscal',
      compound_tax: 'Impuesto compuesto',
      percent: 'Por ciento',
      action: 'Acción',
      tax_setting_description: 'Habilítelo si desea agregar impuestos a artículos de factura individuales. Por defecto, los impuestos se agregan directamente a la factura.',
      created_message: 'Tipo de impuesto creado con éxito',
      updated_message: 'Tipo de impuesto actualizado correctamente',
      deleted_message: 'Tipo de impuesto eliminado correctamente',
      confirm_delete: 'No podrá recuperar este tipo de impuesto',
      already_in_use: 'El impuesto ya está en uso.'
    },
    expense_category: {
      title: 'Categorías de gastos',
      action: 'Acción',
      description: 'Se requieren categorías para agregar entradas de gastos. Puede Agregar o Eliminar estas categorías según su preferencia.',
      add_new_category: 'Añadir nueva categoria',
      category_name: 'nombre de la categoría',
      category_description: 'Descripción',
      created_message: 'Categoría de gastos creada con éxito',
      deleted_message: 'Categoría de gastos eliminada correctamente',
      updated_message: 'Categoría de gastos actualizada con éxito',
      confirm_delete: 'No podrá recuperar esta categoría de gastos',
      already_in_use: 'La categoría ya está en uso.'
    },
    preferences: {
      currency: 'Moneda',
      language: 'Idioma',
      time_zone: 'Zona horaria',
      fiscal_year: 'Año financiero',
      date_format: 'Formato de fecha',
      discount_setting: 'Ajuste de descuento',
      discount_per_item: 'Descuento por artículo',
      discount_setting_description: 'Habilítelo si desea agregar Descuento a artículos de factura individuales. Por defecto, los descuentos se agregan directamente a la factura.',
      save: 'Salvar',
      preference: 'Preferencia | Preferencias',
      general_settings: 'Preferencias predeterminadas para el sistema.',
      updated_message: 'Preferencias actualizadas exitosamente',
      select_language: 'seleccione el idioma',
      select_time_zone: 'selecciona la zona horaria',
      select_date_formate: 'seleccione formato de fecha',
      select_financial_year: 'seleccione año financiero'
    },
    update_app: {
      title: 'Actualizar aplicación',
      description: 'actualizar la descripción de la aplicación',
      check_update: 'Buscar actualizaciones',
      avail_update: 'Nueva actualización disponible',
      next_version: 'Próxima versión',
      update: 'Actualizar',
      update_progress: 'Actualización en progreso...',
      progress_text: 'Solo tomará unos minutos. No actualice la pantalla ni cierre la ventana antes de que finalice la actualización.',
      update_success: '¡La aplicación ha sido actualizada! Espere mientras la ventana de su navegador se vuelve a cargar automáticamente.',
      latest_message: '¡Actualización no disponible! Estás en la última versión.',
      current_version: 'Versión actual'
    }
  },
  wizard: {
    account_info: 'Información de la cuenta',
    account_info_desc: 'Los detalles a continuación se utilizarán para crear la cuenta principal de administrador. También puede cambiar los detalles en cualquier momento después de iniciar sesión.',
    name: 'Nombre',
    email: 'Email',
    password: 'Contraseña',
    confirm_password: 'Confirmar contraseña',
    save_cont: 'Guardar Continuar',
    company_info: 'Información de la empresa',
    company_info_desc: 'Esta información se mostrará en las facturas. Tenga en cuenta que puede editar esto más adelante en la página de configuración.',
    company_name: 'nombre de empresa',
    company_logo: 'Logo de la compañía',
    logo_preview: 'Vista previa del logotipo',
    preferences: 'Preferencias',
    preferences_desc: 'Preferencias predeterminadas para el sistema.',
    country: 'País',
    state: 'Estado',
    city: 'Ciudad',
    address: 'Habla a',
    street: 'Calle1 ' | 'Calle # 2',
    phone: 'Teléfono',
    zip_code: 'Código postal',
    go_back: 'Regresa',
    currency: 'Moneda',
    language: 'Idioma',
    time_zone: 'Zona horaria',
    fiscal_year: 'Año financiero',
    date_format: 'Formato de fecha',
    from_address: 'De la Dirección',
    username: 'Nombre de usuario',
    next: 'Próximo',
    continue: 'Hacer continuación',
    database: {
      database: 'URL del sitio y base de datose',
      connection: 'Conexión de base de datos',
      host: 'Database Host',
      port: 'Host de base de datos',
      password: 'Contraseña de base de datos',
      app_url: 'URL de la aplicación',
      username: 'Nombre de usuario de la base de datos',
      db_name: 'Nombre de la base de datos',
      desc: 'Cree una base de datos en su servidor y establezca las credenciales utilizando el siguiente formulario.'
    },
    permissions: {
      permissions: 'Permisos',
      permission_confirm_title: 'Estás seguro de que quieres continuar?',
      permission_confirm_desc: 'Error de verificación de permisos de carpeta',
      permission_desc: 'A continuación se muestra la lista de permisos de carpeta necesarios para que la aplicación funcione. Si la verificación de permisos falla, asegúrese de actualizar los permisos de su carpeta.'
    },
    mail: {
      host: 'Host de correo',
      port: 'Puerto de correo',
      driver: 'Conductor de correo',
      secret: 'Secreto',
      password: 'Contraseña de correo',
      username: 'Nombre de usuario de correo',
      mailgun_secret: 'Mailgun Secreto',
      mailgun_domain: 'Domino',
      mailgun_endpoint: 'Mailgun Punto Final',
      ses_secret: 'SES Secreto',
      ses_key: 'SES llave',
      from_name: 'Del nombre del correo',
      from_mail: 'Desde la dirección de correo',
      mail_config: 'Configuración de correo',
      encryption: 'Cifrado de correo',
      mail_config_desc: 'Los detalles a continuación se utilizarán para actualizar el entorno de correo. También puede cambiar los detalles en cualquier momento después de iniciar sesión.'
    },
    req: {
      system_req: 'Requisitos del sistema',
      php_req_version: 'Php (versión {version} necesario)',
      check_req: 'Consultar requisitos',
      system_req_desc: 'Crater tiene algunos requisitos de servidor. Asegúrese de que su servidor tenga la versión de php requerida y todas las extensiones mencionadas a continuación.'
    },
    errors: {
      migrate_failed: 'La migración falló',
      database_variables_save_error: 'No se puede conectar a la base de datos con los valores proporcionados.',
      mail_variables_save_error: 'La configuración del correo electrónico ha fallado.',
      connection_failed: 'Conexión de base de datos fallida'
    },
    success: {
      mail_variables_save_successfully: 'Correo electrónico configurado correctamente',
      database_variables_save_successfully: 'Base de datos configurada con éxito.'
    }
  },
  layout_login: {
    copyright_crater: 'Copyright @ Crater - 2019',
    super_simple_invoicing: 'Facturación super simple',
    for_freelancer: 'para autónomos y',
    small_businesses: 'Pequeñas empresas',
    crater_help: 'Crater te ayuda a rastrear gastos, registrar pagos y generar hermosos',
    invoices_and_estimates: 'facturas y presupuestos con capacidad para elegir múltiples plantillas.'

  },
  validation: {
    invalid_url: 'URL no válida (por ejemplo, http://www.crater.com)',
    required: 'Se requiere campo',
    email_incorrect: 'Email incorrecto.',
    email_does_not_exist: ' Usuario con correo electrónico dado no existe',
    send_reset_link: 'Enviar restablecer enlace',
    not_yet: '¿Aún no? Envialo de nuevo',
    password_min_length: 'La contraseña debe contener {count} caracteres',
    name_min_length: 'El nombre debe tener al menos {count} letras.',
    enter_valid_tax_rate: 'Ingrese una tasa impositiva válida',
    numbers_only: 'Solo numeros.',
    characters_only: 'Solo personajes.',
    password_incorrect: 'Las contraseñas deben ser idénticas',
    password_length: 'La contraseña debe tener 5 caracteres de longitud.',
    qty_must_greater_than_zero: 'La cantidad debe ser mayor que cero.',
    price_greater_than_zero: 'El precio debe ser mayor que cero.',
    payment_greater_than_zero: 'El pago debe ser mayor que cero.',
    payment_greater_than_due_amount: 'El pago ingresado es mayor al monto adeudado de esta factura.',
    quantity_maxlength: 'La cantidad no debe ser mayor de 20 dígitos.',
    price_maxlength: 'El precio no debe ser mayor de 20 dígitos.',
    price_minvalue: 'El precio debe ser mayor que 0 dígitos',
    amount_maxlength: 'La cantidad no debe ser mayor de 20 dígitos.',
    amount_minvalue: 'La cantidad debe ser mayor que 0 dígitos',
    description_maxlength: 'La descripción no debe tener más de 255 caracteres.',
    maximum_options_error: 'Máximo de {max} opciones seleccionadas. Primero elimine una opción seleccionada para seleccionar otra.',
    notes_maxlength: 'Las notas no deben tener más de 255 caracteres.',
    address_maxlength: 'La dirección no debe tener más de 255 caracteres.',
    ref_number_maxlength: 'El número de referencia no debe tener más de 255 caracteres.'
  }
}
