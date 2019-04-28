const faviconsContext = require.context(
    '!!file-loader?name=favicon/[name].[ext]!.',
    true,
    /favicons\/[^\.]+\.(svg|png|ico|xml|json)$/
  );
  
  faviconsContext.keys().forEach(faviconsContext);