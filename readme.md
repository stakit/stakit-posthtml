# stakit-posthtml
PostHTML transforms for Stakit

## Installation
```
npm i stakit-posthtml
```

## Example
```javascript
var stakit = require('stakit')
var posthtml = require('stakit-posthtml')
var minify = require('stakit-posthtml/minify')
var minifier = require('posthtml-minifier')

stakit()
  .transform(posthtml, {
    use: [minifier]
  })
  // or
  .transform(minify)
  .output()
```

The `posthtml-minifier` plugin is included because it's a very common use-case.
