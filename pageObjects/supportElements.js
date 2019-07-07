const elements = {
  privacyPoliceLink: $('span > a:nth-child(2)'),
  licenceAgreementForm: $('.fade.modal-1.EULA.in'),
  licenceAgreementLink: $('span > label > span > a:nth-child(1)'),
  firstNameIsRequiredNotif: $(':nth-child(2) > span > span'),
  lastNameIsRequiredNotif: $(':nth-child(3) > span > span'),
  emailIsRequiredNotif: $(':nth-child(4) > span > span'),
  companyNameIsRequiredNotif: $(':nth-child(6) > span > span'),
  mainErrorValidation: $('div > span.fusion-alert-content'),
  sendButton: $('.col-lg-3 > input'),

  firstNameIsRequiredField: $(':nth-child(2) > span > input'),
  lastNameIsRequiredField: $(':nth-child(3) > span > input'),
  emailIsRequiredField: $(':nth-child(4) > span > input'),
  companyNameIsRequiredField: $(':nth-child(6) > span > input'),
};

module.exports = elements;
