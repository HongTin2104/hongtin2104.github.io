/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./config');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // Currently no dynamic pages needed as blog functionality was removed.
  return Promise.resolve();
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  // Make the 404 page match any unknown paths during development
  if (page.path.match(/^\/404/)) {
    page.matchPath = `/*`;
    createPage(page);
  }
};
