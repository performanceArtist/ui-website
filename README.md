# ui-website

## Usage

Clone this repository and run the following commands.

To install dependencies:

```
npm install
```

To start the development server on port 5000(can be set in webpack.config)

```shell
npm start
```

Development build

```shell
npm dev
```

Production build

```
npm build
```

## Directory structure

All code resides in `src` directory, except for config files. Build results go into `dist` directory.

`src` files:

* layout.pug - main layout file, used in every page.
* main.scss - contains imports for component/composite css.
* styles.js - imports main.scss, as well as other common css files, such as font and plugin's css.
* scripts.js - exports js functions to work with ui.
* favicons.js - loads favicons with file-loader.

`src` folders:

* components - components used independently.
* composite - composite components (they use pug mixins from components folder).
* favicons - favicon files generated with this [service](https://realfavicongenerator.net/). 
* partials - scss partials - layout css, mixins and variables(defaults.scss)
* plugins - jQuery plugins that weren't installed through npm.
* static - static files. Fonts, images, etc.
* views - website pages 