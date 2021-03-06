const { getRocketValues } = require('@d4kmor/cli');

const defaultValues = getRocketValues();

module.exports = {
  ...defaultValues,
  name: 'Rocket',
  shortDesc: 'Rocket is the way to build fast static websites with a sprinkle of javascript',
  githubUrl: 'https://github.com/dakmor/rocket',
  helpUrl: 'https://github.com/daKmoR/rocket/issues',
  logoAlt: 'Rocket Logo',
  iconColorMaskIcon: '#3f93ce',
  iconColorMsapplicationTileColor: '#1d3557',
  iconColorThemeColor: '#1d3557',
};
