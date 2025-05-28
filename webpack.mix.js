// webpack.mix.js
let mix = require('laravel-mix');

mix.postCss('src/styles/main.css', 'build', [
    require('postcss-for')
]);