module.exports = {
  '**/!templates/*.ts': ['npm run format', 'git add'],
  '**/!templates/*.js': ['npm run format', 'git add'],
  '*.md': ['prettier --parser markdown --write', 'git add'],
};
