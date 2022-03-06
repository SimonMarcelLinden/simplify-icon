module.exports = {
  name: 'simplify-icon',
    inputDir: './src/icons', // (required)
    outputDir: './dist/fonts', // (required)
    fontTypes: ['ttf', 'woff', 'woff2', 'eot', 'svg'],
    assetTypes: ['ts', 'css', 'scss', 'sass', 'json', 'html'],
    fontsUrl: '.',
    tag: 'i',
    prefix: 'si',
    formatOptions: {
      // Pass options directly to `svgicons2svgfont`
      woff: {
        // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
        metadata: '...'
      },
      json: {
        // render the JSON human readable with two spaces indentation (default is none, so minified)
        indent: 2
      },
      ts: {
        // select what kind of types you want to generate (default `['enum', 'constant', 'literalId', 'literalKey']`)
        types: ['constant', 'literalId'],
        // render the types with `'` instead of `"` (default is `"`)
        singleQuotes: true
      }
    },
    templates: {
      css: './templates/css.hbs',
      scss: './templates/scss.hbs',
      sass: './templates/sass.hbs',
      html: './templates/html.hbs'
    },
    // Customize generated icon IDs (unavailable with `.json` config file)
    // getIconId: ({
    //   basename, // `string` - Example: 'foo';
    //   relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
    //   absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
    //   relativeFilePath, // `string` - Example: 'foo.svg'
    //   index // `number` - Example: `0`
    // }) => [index, basename].join('_') // '0_foo'
  };