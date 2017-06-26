# Test Kitchen

This is a practice repo to learn about Webpack 2/3, SASS, and React Components.

It basically follows the Webpack 2/3 [documentation guides](https://webpack.js.org/guides/), but modified to use current version ES syntax in the Webpack config files.

At the time of this writing, the [Babel documentation](http://babeljs.io/docs/plugins/preset-env/) recommends using the **env** preset for this purpose.

*in .baberc*

```
{
  "presets": ["env"]
}
```
and the config files need to end in `.babel.js`, instead of just `.js`

## Getting started

Clone (or fork and clone) the repo. Then, from inside the cloned directory, run

```
yarn install
```

To build the */dist* directory, run

```
yarn run build
```


