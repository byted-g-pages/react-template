const pkg = require('./package.json');

const isSg = process.env.ZONE === 'sg';

// 这里是国内域名
let publicPath = `//s3.pstatp.com/toutiao/fe/long_cache/${pkg.name}/`;

if (isSg) {
  publicPath = `//s16b.tiktokcdn.com/toutiao/fe/long_cache/sg/${pkg.name}/`;
}

module.exports = {
  version: 2,
  // 项目类型，用于快速创建页面和组件
  type: 'react',
  // 标示是多页面还是单页面应用:single/multi
  mode: 'multi',
  // 资源根地址，例如: //7.ur.cn/fudao/pc/
  publicPath,
  // webpack-dev-server配置
  devServer: {
    port: 8081,
  },
  dist: './dist',
  // 配置额外的入口文件，会在每一个page中引用
  // 可以将每个页面都会用到的模块添加到这里
  initEntry: ['./src/common/vendor'],
  // 如果要禁用默认的./src/pages/作为页面根目录，可以自定义入口
  // entry:{
  // // 可以是目录(查找目录下面的index.{js|jsx})
  //  index:'./src/pages/index/index',
  //  example:['./src/pages/example/index']
  // },
  babel: {
    // 配置需要babel解析的路径
    include: [],
    exclude: [],
  },
  filenames: ({ mode }) => {
    const useHash = mode === 'production';
    return {
      js: useHash ? 'cdn/js/[name]_[contenthash:8].js' : 'cdn/js/[name].js',
      css: useHash ? 'cdn/css/[name]_[contenthash:8].css' : 'cdn/css/[name].css',
      font: useHash ? 'cdn/fonts/[name]_[hash:8].[ext]' : 'cdn/fonts/[path]_[name].[ext]',
      image: useHash ? 'cdn/images/[name]_[hash:8].[ext]' : 'cdn/images/[path]_[name].[ext]',
      file: useHash ? 'cdn/files/[name]_[hash:8].[ext]' : 'cdn/files/[path]_[name].[ext]',
      chunk: useHash ? 'cdn/js/[name]_[chunkhash:8].js' : 'assets/js/[name].js',
    };
  },
  // 修改webpack配置文件
  chainWebpack(configChain, { type, mode }) {
    if (type === 'web') {
      // 前端代码
      if (mode === 'production') {
        // 生产模式
      } else if (mode === 'development') {
        // 开发模式
      }
    } else if (type === 'node') {
      // SSR代码
      if (mode === 'production') {
        // 生产模式
      } else if (mode === 'development') {
        // 开发模式
      }
    }
  },
  // 添加a8k插件
  plugins: [],
};
