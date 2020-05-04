module.exports = {
  '**/!templates/*.ts': ['npm run format'],
  '**/!templates/*.js': ['npm run format'],
  '*.md': ['prettier --parser markdown --write'],
};
