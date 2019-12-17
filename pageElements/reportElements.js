const elements = {
  usernameField: $('div.back > a'),
  categoryOnDescForm: $$('.reports-container__content > a:nth-child(2)').get(0),
  etrmLibraryFilter: $('div.checkbox_container > div > div > div'),
  etrmLibraryMark: $$('td > pre > a').get(0),
  xlsFile: $('.no_padding.text-center > a:nth-child(1)'),
  xmlFile: $('.no_padding.text-center > a:nth-child(2)'),
  askAQuestionButton: $('.col-sm-12.rightpadding_5 > a'),
  submitButton: $('#bbp_reply_submit'),
  relatedBlitzReportsLinks: $$('.reports-container__content.content-list > a'),

};

module.exports = elements;
