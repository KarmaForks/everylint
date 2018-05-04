let config = {}

/* "stylelint-config-standard" is optional, so, check it */
try {
  require.resolve('stylelint-config-standard')
  config = {extends: 'stylelint-config-standard'}
}
catch (error) {}

module.exports = config
