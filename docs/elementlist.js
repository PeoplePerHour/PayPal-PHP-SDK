
var ApiGen = ApiGen || {};
ApiGen.elements = [["c","PayPal\\Api\\Address"],["c","PayPal\\Api\\Agreement"],["c","PayPal\\Api\\AgreementDetails"],["c","PayPal\\Api\\AgreementStateDescriptor"],["c","PayPal\\Api\\AgreementTransaction"],["c","PayPal\\Api\\AgreementTransactions"],["c","PayPal\\Api\\AlternatePayment"],["c","PayPal\\Api\\Amount"],["c","PayPal\\Api\\Authorization"],["c","PayPal\\Api\\BankAccount"],["c","PayPal\\Api\\BankAccountsList"],["c","PayPal\\Api\\BankToken"],["c","PayPal\\Api\\BaseAddress"],["c","PayPal\\Api\\Billing"],["c","PayPal\\Api\\BillingAgreementToken"],["c","PayPal\\Api\\BillingInfo"],["c","PayPal\\Api\\CancelNotification"],["c","PayPal\\Api\\Capture"],["c","PayPal\\Api\\CarrierAccount"],["c","PayPal\\Api\\CarrierAccountToken"],["c","PayPal\\Api\\CartBase"],["c","PayPal\\Api\\ChargeModel"],["c","PayPal\\Api\\Cost"],["c","PayPal\\Api\\CountryCode"],["c","PayPal\\Api\\CreateProfileResponse"],["c","PayPal\\Api\\Credit"],["c","PayPal\\Api\\CreditCard"],["c","PayPal\\Api\\CreditCardHistory"],["c","PayPal\\Api\\CreditCardList"],["c","PayPal\\Api\\CreditCardToken"],["c","PayPal\\Api\\CreditFinancingOffered"],["c","PayPal\\Api\\Currency"],["c","PayPal\\Api\\CurrencyConversion"],["c","PayPal\\Api\\CustomAmount"],["c","PayPal\\Api\\Details"],["c","PayPal\\Api\\Error"],["c","PayPal\\Api\\ErrorDetails"],["c","PayPal\\Api\\ExtendedBankAccount"],["c","PayPal\\Api\\ExternalFunding"],["c","PayPal\\Api\\FlowConfig"],["c","PayPal\\Api\\FmfDetails"],["c","PayPal\\Api\\FundingDetail"],["c","PayPal\\Api\\FundingInstrument"],["c","PayPal\\Api\\FundingOption"],["c","PayPal\\Api\\FundingSource"],["c","PayPal\\Api\\FuturePayment"],["c","PayPal\\Api\\HyperSchema"],["c","PayPal\\Api\\Image"],["c","PayPal\\Api\\Incentive"],["c","PayPal\\Api\\InputFields"],["c","PayPal\\Api\\InstallmentInfo"],["c","PayPal\\Api\\InstallmentOption"],["c","PayPal\\Api\\Invoice"],["c","PayPal\\Api\\InvoiceAddress"],["c","PayPal\\Api\\InvoiceItem"],["c","PayPal\\Api\\InvoiceSearchResponse"],["c","PayPal\\Api\\Item"],["c","PayPal\\Api\\ItemList"],["c","PayPal\\Api\\Links"],["c","PayPal\\Api\\Measurement"],["c","PayPal\\Api\\MerchantInfo"],["c","PayPal\\Api\\MerchantPreferences"],["c","PayPal\\Api\\Metadata"],["c","PayPal\\Api\\NameValuePair"],["c","PayPal\\Api\\Notification"],["c","PayPal\\Api\\OpenIdAddress"],["c","PayPal\\Api\\OpenIdError"],["c","PayPal\\Api\\OpenIdSession"],["c","PayPal\\Api\\OpenIdTokeninfo"],["c","PayPal\\Api\\OpenIdUserinfo"],["c","PayPal\\Api\\Order"],["c","PayPal\\Api\\OverrideChargeModel"],["c","PayPal\\Api\\Patch"],["c","PayPal\\Api\\PatchRequest"],["c","PayPal\\Api\\Payee"],["c","PayPal\\Api\\Payer"],["c","PayPal\\Api\\PayerInfo"],["c","PayPal\\Api\\Payment"],["c","PayPal\\Api\\PaymentCard"],["c","PayPal\\Api\\PaymentCardToken"],["c","PayPal\\Api\\PaymentDefinition"],["c","PayPal\\Api\\PaymentDetail"],["c","PayPal\\Api\\PaymentExecution"],["c","PayPal\\Api\\PaymentHistory"],["c","PayPal\\Api\\PaymentInstruction"],["c","PayPal\\Api\\PaymentOptions"],["c","PayPal\\Api\\PaymentTerm"],["c","PayPal\\Api\\Payout"],["c","PayPal\\Api\\PayoutBatch"],["c","PayPal\\Api\\PayoutBatchHeader"],["c","PayPal\\Api\\PayoutItem"],["c","PayPal\\Api\\PayoutItemDetails"],["c","PayPal\\Api\\PayoutSenderBatchHeader"],["c","PayPal\\Api\\Phone"],["c","PayPal\\Api\\Plan"],["c","PayPal\\Api\\PlanList"],["c","PayPal\\Api\\PotentialPayerInfo"],["c","PayPal\\Api\\Presentation"],["c","PayPal\\Api\\PrivateLabelCard"],["c","PayPal\\Api\\ProcessorResponse"],["c","PayPal\\Api\\RecipientBankingInstruction"],["c","PayPal\\Api\\RedirectUrls"],["c","PayPal\\Api\\Refund"],["c","PayPal\\Api\\RefundDetail"],["c","PayPal\\Api\\RelatedResources"],["c","PayPal\\Api\\Sale"],["c","PayPal\\Api\\Search"],["c","PayPal\\Api\\ShippingAddress"],["c","PayPal\\Api\\ShippingCost"],["c","PayPal\\Api\\ShippingInfo"],["c","PayPal\\Api\\Tax"],["c","PayPal\\Api\\Terms"],["c","PayPal\\Api\\Transaction"],["c","PayPal\\Api\\TransactionBase"],["c","PayPal\\Api\\Transactions"],["c","PayPal\\Api\\Webhook"],["c","PayPal\\Api\\WebhookEvent"],["c","PayPal\\Api\\WebhookEventList"],["c","PayPal\\Api\\WebhookEventType"],["c","PayPal\\Api\\WebhookEventTypeList"],["c","PayPal\\Api\\WebhookList"],["c","PayPal\\Api\\WebProfile"],["c","PayPal\\Auth\\OAuthTokenCredential"],["c","PayPal\\Cache\\AuthorizationCache"],["c","PayPal\\Common\\ArrayUtil"],["c","PayPal\\Common\\PayPalModel"],["c","PayPal\\Common\\PayPalResourceModel"],["c","PayPal\\Common\\PayPalUserAgent"],["c","PayPal\\Common\\ReflectionUtil"],["c","PayPal\\Converter\\FormatConverter"],["c","PayPal\\Core\\PayPalConfigManager"],["c","PayPal\\Core\\PayPalConstants"],["c","PayPal\\Core\\PayPalCredentialManager"],["c","PayPal\\Core\\PayPalHttpConfig"],["c","PayPal\\Core\\PayPalHttpConnection"],["c","PayPal\\Core\\PayPalLoggingLevel"],["c","PayPal\\Core\\PayPalLoggingManager"],["c","PayPal\\Exception\\PayPalConfigurationException"],["c","PayPal\\Exception\\PayPalConnectionException"],["c","PayPal\\Exception\\PayPalInvalidCredentialException"],["c","PayPal\\Exception\\PayPalMissingCredentialException"],["c","PayPal\\Handler\\IPayPalHandler"],["c","PayPal\\Handler\\OauthHandler"],["c","PayPal\\Handler\\RestHandler"],["c","PayPal\\Rest\\ApiContext"],["c","PayPal\\Rest\\IResource"],["c","PayPal\\Security\\Cipher"],["c","PayPal\\Transport\\PayPalRestCall"],["c","PayPal\\Validation\\ArgumentValidator"],["c","PayPal\\Validation\\JsonValidator"],["c","PayPal\\Validation\\NumericValidator"],["c","PayPal\\Validation\\UrlValidator"]];
