/*
 * MIT license http://www.opensource.org/licenses/mit-license.php
 */
var loaderUtils = require('loader-utils');
var HEADER = '/* append-loader start */';
var FOOTER = '/* append-loader end */';
module.exports = function(context) {
  this.cacheable && this.cacheable();
  var query = loaderUtils.getOptions(this);
  return context + HEADER + (query.content || '') + FOOTER;
};
