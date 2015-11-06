# Brunch with Foo (Fighters)

#### aka [X-Static](https://youtu.be/PUxuhc6Z5kQ)

[Brunch](http://brunch.io) skeleton to create static HTML prototypes via [Jade](http://jade-lang.com), [Sass](http://sass-lang.com), [jQuery](http://jquery.com) and [Bootstrap 4](http://v4-alpha.getbootstrap.com). All served up by the brilliant [Browsersync](http://www.browsersync.io).

### Getting started
1. Install (if you don't have them)
  * [Node.js](http://nodejs.org): `$ brew install node` on OS X
  * [Brunch](http://brunch.io): `$ npm install -g brunch`
1. Create a new project (using this skeleton)
  * `$ brunch new gh:cappadona/brunch-with-foo [optional-output-dir]`
  * `cd` to new project
1. Run
  * `$ npm start` — serve the project via Browsersync
  * `$ brunch build --production` — builds minified project for production
1. Learn
  * `public/` dir is fully auto-generated and is the webroot served by Browsersync
  * Write your code in `app/` dir
  * Jade templates should use `.static.jade` extension and be placed directly in `app/`
    * More config options available; see [jade-brunch-static](https://github.com/bmatcuk/jade-brunch-static)
  * Place static files in `app/assets/` that you want to be copied to `public/`
  * Read the Docs!
      * [Brunch site](http://brunch.io)
      * [Getting started guide](https://github.com/brunch/brunch-guide#readme)
