# DesignThingy Bootstrap Boilerplate

[![Build Status](https://travis-ci.com/designthingy/designthingy-bootstrap-boilerplate.svg?branch=master)](https://travis-ci.com/designthingy/designthingy-bootstrap-boilerplate)
[![devDependency Status](https://david-dm.org/designthingy/designthingy-bootstrap-boilerplate/dev-status.svg)](https://david-dm.org/designthingy/designthingy-bootstrap-boilerplate#info=devDependencies)
[![Dependency Status](https://david-dm.org/designthingy/designthingy-bootstrap-boilerplate.svg)](https://david-dm.org/designthingy/designthingy-bootstrap-boilerplate)
[![License: MIT](https://img.shields.io/github/license/designthingy/designthingy-bootstrap-boilerplate?color=blue)](https://github.com/designthingy/designthingy-bootstrap-boilerplate/blob/master/LICENSE)

A painless front-end bootstrap boilerplate by DesignThingy for building fast, robust, and adaptable static websites.

## Table of Contents

1. [Features](#features)
2. [Author](#author)
3. [Contributors](#contributor)
4. [Installation](#installation)
5. [Grunt tasks and live development](#grunt-tasks-and-live-development)
    - [Tasks](#tasks)
    - [Live development](#live-development)
6. [Usage](#usage)
7. [Copyright](#copyright)

## Features

- **Technologies**: Full support for HTML5, JavaScript (ES6, babel), CSS (Sass and PostCSS) and SVG (svg4everybody)
- **Local Development Server**: Built-in server with real time monitoring (browserSync and Watch)
- **ES6 Ready**: Built-in Babel support
- **Minification**: Automatically minify your css and js files with source map in development process
- **Autoprefixing**: Convert your SCSS files to CSS with vendor prefixes
- **Linting**: Built-in support for eslint and stylelint for testing
- **SVG**: Support SVG4Everybody that adds [SVG External Content](http://css-tricks.com/svg-sprites-use-better-icon-fonts/##Browser+Support) support to all browsers
- **Bootstrap Theming**: Support Bootstrap theming
- **Fontawesome**: Build-in fontawesome support
- **SCSS module pattern support**

## Author

[DesignThingy](https://designthingy.co)

## Contributors

[Shashikant Yadav](https://twitter.com/kantbtrue)
[Saurabh Yadav](https://twitter.com/savydv)

## Installation

### Prerequisites

DesignThingy Bootstrap Boilerplate requires following packages installed on your machine.
- [Node JS](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [NPM](https://www.npmjs.com/)
    - Grunt CLI
    ```bash
    # install grunt cli globally
    npm install -g grunt-cli
    ```

### [Clone or download the Git Repo](https://github.com/designthingy/designthingy-bootstrap-boilerplate)

```bash
# Clone the repo into the current directory
git clone https://github.com/designthingy/designthingy-bootstrap-boilerplate.git
# Navigate to the newly cloned directory
cd designthingy-bootstrap-boilerplate
# remove .git folder
rm -rf .git
# Initialize a local Git repository(optional)
git init
```
### Install dependencies

```bash
npm install
```
### Run the development server

```bash
npm start
```

## Grunt tasks and live development

### Tasks

| Tasks     | Description                                                                         |
|-----------|-------------------------------------------------------------------------------------|
| Default   | `grunt dev` or `npm start` Build and run the local server (development ready)       |
| Build     | `grunt build`              Build the project (production ready)                     |
| Preview   | `grunt prev`               Preview the project on local server                      |
| Test      | `grunt test` or `npm test` Run tests on JS and SCSS files                           |

### Live development

You can live test your changes using `npm start` or `grunt dev` (install [node](https://nodejs.org/en/) if you haven't) on a local server.

## Usage

Add all your JS, IMAGES, SCSS (style.scss and bootstrap-override.scss required), SVG and HTML files in the `src` folder and you will get the output in `build` folder.

### SVG sprite

To generate SVG sprite, add all your svg icons in a `src\svg` folder. You will see a `svg-sprite.svg` in `build\assets\svg` folder.

## Copyright

Copyright [current year]. All rights reserved.
