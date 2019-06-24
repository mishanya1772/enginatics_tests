const elements = {
  listOfNamesLibrary: $$('td:nth-child(1) > div > a'),
  moreLink: $$('.morelink').get(0),
  lessLink: $$('.morelink.less').get(0),
  flipSwitchLabel: $('.flipswitch-label'),
  backToLibraryButton: $('div > div.back > a'),
  firstCategoriesInTable: $$('td:nth-child(3) > a:nth-child(1)').get(0),
  categoriesInCategoriesField: $$('li.select2-selection__choice').get(0),
  categoryFilterField: $('ul > li > input'),
  firstItemInCategoryFilter: $$('li:nth-child(1) > div').get(0),
  deleteButtonForCategoryField: $('.select2-selection__clear'),
  allXLSDocuments: $$('center > a:nth-child(1)'),
  allXMLDocuments: $$('center > a:nth-child(2)'),
  showEntries: $('label > select'),
  paginationThirdPage: $('span > a:nth-child(3)'),
};


module.exports = elements;
