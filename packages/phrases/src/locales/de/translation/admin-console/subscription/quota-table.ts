const quota_table = {
  quota: {
    title: 'Grundlagen',
    base_price: 'Grundpreis',
    mau_limit: 'MAU-Limit',
    included_tokens: 'Inkludierte Tokens',
  },
  application: {
    title: 'Anwendungen',
    total: 'Gesamtzahl der Anwendungen',
    m2m: 'Maschine-zu-Maschine',
    third_party: 'Drittanbieter-Apps',
  },
  resource: {
    title: 'API-Ressourcen',
    resource_count: 'Ressourcenanzahl',
    scopes_per_resource: 'Berechtigungen pro Ressource',
  },
  branding: {
    title: 'Benutzeroberfläche und Branding',
    custom_domain: 'Benutzerdefinierte Domain',
    custom_css: 'Benutzerdefiniertes CSS',
    logo_and_favicon: 'Logo und Favicon',
    bring_your_ui: 'Bringe deine Benutzeroberfläche',
    dark_mode: 'Dunkler Modus',
    i18n: 'Internationalisierung',
  },
  user_authn: {
    title: 'Benutzerauthentifizierung',
    omni_sign_in: 'Omni-Anmeldung',
    password: 'Passwort',
    passwordless: 'Passwortlos - E-Mail und SMS',
    email_connector: 'E-Mail-Connector',
    sms_connector: 'SMS-Connector',
    social_connectors: 'Social-Connectors',
    standard_connectors: 'Standard-Connectors',
    built_in_email_connector: 'Integrierter E-Mail-Connector',
    mfa: 'Multi-Faktor-Authentifizierung',
    sso: 'Unternehmens-SSO',

    impersonation: 'Stellvertretung',
  },
  user_management: {
    title: 'Benutzerverwaltung',
    user_management: 'Benutzerverwaltung',
    roles: 'Rollen',
    machine_to_machine_roles: 'Maschine-zu-Maschine Rollen',
    scopes_per_role: 'Berechtigungen pro Rolle',
  },
  organizations: {
    title: 'Organisation',
    organizations: 'Organisationen',
    organization: 'Organisation',
    organization_count: 'Anzahl der Organisationen',
    allowed_users_per_org: 'Benutzer pro Organisation',
    invitation: 'Einladung (Management-API)',
    org_roles: 'Organisationsrollen',
    org_permissions: 'Organisationsberechtigungen',
    just_in_time_provisioning: 'Bedarfsgesteuerte Bereitstellung',
  },
  support: {
    /** UNTRANSLATED */
    title: 'Support',
    community: 'Gemeinschaft',
    customer_ticket: 'Support-Ticket',
    premium: 'Premium',
    email_ticket_support: 'E-Mail-Ticket-Support',
    soc2_report: 'SOC2-Bericht',
    hipaa_or_baa_report: 'HIPAA/BAA-Bericht',
  },
  developers_and_platform: {
    title: 'Entwickler und Plattform',
    hooks: 'Webhooks',
    audit_logs_retention: 'Auditprotokolle Aufbewahrung',
    jwt_claims: 'JWT-Ansprüche',
    tenant_members: 'Mandantenmitglieder',
  },
  unlimited: 'Unbegrenzt',
  contact: 'Kontakt',
  monthly_price: '${{value, number}}/Monat',
  days_one: '{{count, number}} Tag',
  days_other: '{{count, number}} Tage',
  add_on: 'Zusatzleistung',
  tier: 'Stufe{{value, number}}: ',

  million: '{{value, number}} Millionen',
  mau_tip:
    'MAU (monatlich aktive Benutzer) bezeichnet die Anzahl der eindeutigen Benutzer, die in einem Abrechnungszyklus mindestens einen Token mit Logto ausgetauscht haben.',
  tokens_tip:
    'Alle Arten von Tokens, die von Logto ausgegeben wurden, einschließlich Zugriffstoken, Aktualisierungstoken, usw.',
  mao_tip:
    'MAO (Monthly Active Org) bezeichnet die Anzahl der einzigartigen Organisationen, die in einem Abrechnungszyklus mindestens einen MAU (Monthly Active User) haben.',
  third_party_tip:
    'Verwenden Sie Logto als Ihren OIDC-Identitätsanbieter für Anmeldungen von Drittanbieter-Apps und Berechtigungsvergaben.',
  included: '{{value, number}} inklusive',
  included_mao: '{{value, number}} MAO enthalten',
  extra_quota_price: 'Dann ${{value, number}} pro Monat / je danach',
  per_month_each: '${{value, number}} pro Monat / je',
  extra_mao_price: 'Dann ${{value, number}} pro MAO',
  per_month: '${{value, number}} pro Monat',
  per_member: 'Dann ${{value, number}} pro Mitglied',
};

export default Object.freeze(quota_table);
