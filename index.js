var { inlineSource } = require('inline-source')
class HtmlWebpackInlinePlugin {
  apply(compiler) {
    // 访问compilation对象
    compiler.hooks.compilation.tap('HtmlWebpackInlinePlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'HtmlWebpackInlinePlugin', // 你的插件名或标识符
        (htmlPluginData, cb) => {
          inlineSource(htmlPluginData.html).then((html)=>{
            htmlPluginData.html = html
          })
          cb(null, htmlPluginData);
        }
      );
    });
  }
}

module.exports = HtmlWebpackInlinePlugin
