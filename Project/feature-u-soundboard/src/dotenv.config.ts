export default {
  skipPreflightCheck: process.env.SKIP_PREFLIGHT_CHECK,
  disableEslintPlugin: process.env.DISABLE_ESLINT_PLUGIN,

  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0ClientID: process.env.AUTH0_CLIENT_ID,
  auth0Secret: process.env.AUTH0_SECRET,
};
