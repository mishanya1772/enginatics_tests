const elements = {
  popularPostsForm: $$('.popular-publications__content > a'),
  blogArchiveRecentEventsForums: $$('details:nth-child(1) > ul > li > a'),
  firstPopularPostOnForm: $('.popular-publications__content > a:nth-child(1)'),
  searchField: $$('#bbp_search').get(1),
  headerOfSearchPage: $('#post-0 > div > h1'),
  allTopics: $$('li.bbp-topic-title > a'),
  allCategories: $$('.bbp-reply-entry > p > a'),
};


module.exports = elements;
