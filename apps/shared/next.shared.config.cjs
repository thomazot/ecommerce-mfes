// Configuração compartilhada para Next.js e Jest (CommonJS)

module.exports = {
  images: {
    domains: ['via.placeholder.com', 'fakestoreapi.com'],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {
            // SVGR options se necessário
          },
        },
      ],
    });
    return config;
  },
  // ...outras configurações compartilhadas...
}; 