This repository demonstrates [the issue](https://github.com/WordPress/gutenberg/issues/35980) with the [`CleanWebpackPlugin` webpack plugin](https://www.npmjs.com/package/clean-webpack-plugin) removing build output in multi-process webpack configurations such as [webpack.config.js](webpack.config.js).

See [this GitHub action run](https://github.com/xwp/wp-scripts-webpack-clean-bug/runs/4020021885?check_suite_focus=true) that shows that the `js/dist/modern` output directory is empty after the build:

```
$ find js/dist
js/dist
js/dist/legacy
js/dist/legacy/legacy.js
js/dist/legacy/legacy.asset.php
js/dist/modern
```

even though webpack built both:

```
$ npm run build

> wp-scripts-webpack-clean-bug@ build /home/runner/work/wp-scripts-webpack-clean-bug/wp-scripts-webpack-clean-bug
> wp-scripts build

asset legacy.js 9.01 KiB [emitted] [minimized] (name: legacy)
asset legacy.asset.php 95 bytes [emitted] (name: legacy)
Entrypoint legacy 9.1 KiB = legacy.js 9.01 KiB legacy.asset.php 95 bytes
orphan modules 16.3 KiB [orphan] 1 module
./js/src/legacy.js + 1 modules 16.3 KiB [built] [code generated]
./js/src/modern.js 101 bytes [built] [code generated]
webpack 5.60.0 compiled successfully in 1139 ms

asset modern.asset.php 95 bytes [emitted] (name: modern)
asset modern.js 78 bytes [emitted] [minimized] (name: modern)
Entrypoint modern 173 bytes = modern.js 78 bytes modern.asset.php 95 bytes
./js/src/modern.js 101 bytes [built] [code generated]
webpack 5.60.0 compiled successfully in 696 ms
```