const faviconsContext = require.context(
  '!!file-loader?name=favicon/[name].[ext]!.',
  true,
  /static\/favicons\/[^.]+\.(svg|png|ico|xml|json)$/
);

faviconsContext.keys().forEach(faviconsContext);
