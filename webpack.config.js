import path from 'path'

const { NODE_ENV } = process.env

const filename = `react-bsm${NODE_ENV === 'production' ? '.min' : ''}.js`

module.exports = {
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  devtool: NODE_ENV === 'production' ? undefined : false,
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename,
    library: 'ReactBSM',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  optimization: {
    minimize: NODE_ENV === 'production',
  },
}
