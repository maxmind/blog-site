import { CreateWebpackConfigArgs, GatsbyNode } from 'gatsby';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig']= (
  props: CreateWebpackConfigArgs,
) => {
  const IS_DEVELOP = props.stage === 'develop';
  const IS_PRODUCTION = !IS_DEVELOP;
  const IS_SSR = props.stage.includes('html');

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: IS_PRODUCTION,
    },
  };

  const sassRule = {
    test: /\.s(a|c)ss$/,
    use: IS_SSR
      ? [
        props.loaders.null(),
      ]
      : [
        props.loaders.miniCssExtract(),
        props.loaders.css({
          camelCase: true,
          importLoaders: 2,
        }),
        {
          loader: 'postcss-loader',
        },
        sassLoader,
      ],
  };

  const sassRuleModules = {
    test: /\.module\.s(a|c)ss$/,
    use: [
      !IS_SSR && props.loaders.miniCssExtract({
        modules: true,
      }),
      props.loaders.css({
        camelCase: true,
        importLoaders: 2,
        modules: true,
      }),
      {
        loader: 'postcss-loader',
      },
      sassLoader,
    ].filter(Boolean),
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let configRules: any = [];

  switch (props.stage) {
  case 'develop':
  case 'build-javascript':
  case 'build-html':
  case 'develop-html': {
    configRules = configRules.concat([
      {
        oneOf: [
          sassRuleModules,
          sassRule,
        ],
      },
    ]);
    break;
  }
  }

  const config = props.getConfig();
  const miniCssExtractPluginIndex = config.plugins.findIndex(
    (plugin: any) => plugin.constructor.name === 'MiniCssExtractPlugin'
  );

  if (miniCssExtractPluginIndex > -1) {
    // remove miniCssExtractPlugin from plugins list
    config.plugins.splice(miniCssExtractPluginIndex, 1);

    // re-add mini-css-extract-plugin
    if (props.stage === 'build-javascript') {
      config.plugins.push(props.plugins.extractText({
        chunkFilename: '[name].[contenthash].css',
        filename: '[name].[contenthash].css',
        ignoreOrder: true,
      }));
    } else {
      config.plugins.push(props.plugins.extractText({
        chunkFilename: '[id].css',
        filename: '[name].css',
        ignoreOrder: true,
      }));
    }
  }
  props.actions.replaceWebpackConfig(config);

  props.actions.setWebpackConfig({
    module: {
      rules: configRules,
    },
  });
};
