const { XMLParser } = require('fast-xml-parser');
const fs = require('fs');
const f = fs.readFileSync('configuration.xml');

const parser = new XMLParser({
  ignoreAttributes: false,
});
const xmlData = parser.parse(f);

const config = {};

for (const feature of xmlData.configuration.feature) {
  config[feature['@_name']] = feature['@_enabled'] === 'true';
}

fs.writeFileSync('src/feature_config.json', JSON.stringify(config));
