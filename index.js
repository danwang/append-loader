/*
 * MIT license http://www.opensource.org/licenses/mit-license.php
 */
var loaderUtils = require('loader-utils');
var HEADER = '/* append-loader start */';
var FOOTER = '/* append-loader end */';
module.exports = function(content) {
  this.cacheable();
  var options = loaderUtils.getOptions(this);
  return content + HEADER + (options.content || '') + FOOTER;
};
