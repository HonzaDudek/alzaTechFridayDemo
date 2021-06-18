module.exports = {
  target: 'serverless',
  webpack: (cfg) => {
    cfg.module.rules.push(
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',

        },
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
    );
    return cfg;
  },
};
