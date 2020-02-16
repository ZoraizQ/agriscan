/**
 * GET /admin
 * Admin page.
 */
// const { google } = require('googleapis');

exports.getAdmin = (req, res) => {
  const unknownUser = !(req.user);

  res.render('admin', {
    title: 'Admin',
    unknownUser,
    google_map_api_key: process.env.GOOGLE_MAP_API_KEY
  });
};

// exports.getGoogleMaps = (req, res) => {
//   res.render('api/google-maps', {
//     title: 'Google Maps API',
//     google_map_api_key: process.env.GOOGLE_MAP_API_KEY
//   });
// };