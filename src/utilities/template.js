const ejs = require('ejs');
const fs = require('fs');
const prettier = require('prettier');

const defaultOptions = {
  prettier: {
    singleQuote: true,
    trailingComma: 'es5',
    parser: 'babylon',
  },
};

function renderTemplate(filepath, data, options = defaultOptions) {
  const template = fs.readFileSync(filepath, 'utf8');
  const compiled = ejs.compile(template, { filename: filepath });
  const code = compiled(data);
  return options.prettier === false ? code : prettier.format(code, options.prettier);
}

exports.renderTemplate = renderTemplate;
