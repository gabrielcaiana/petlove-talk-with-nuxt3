module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84b1826a970a86ffba5aeaad0612a85f'),
  },
});
