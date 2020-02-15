const graph = require('fbgraph');
const { google } = require('googleapis');
const Quickbooks = require('node-quickbooks');

Quickbooks.setOauthVersion('2.0');

/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
  res.render('api/index', {
    title: 'API Examples'
  });
};

/**
 * GET /api/facebook
 * Facebook API example.
 */
exports.getFacebook = (req, res, next) => {
  const token = req.user.tokens.find((token) => token.kind === 'facebook');
  graph.setAccessToken(token.accessToken);
  graph.get(`${req.user.facebook}?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`, (err, profile) => {
    if (err) { return next(err); }
    res.render('api/facebook', {
      title: 'Facebook API',
      profile
    });
  });
};

/**
 * GET /api/upload
 * File Upload API example.
 */

exports.getFileUpload = (req, res) => {
  res.render('api/upload', {
    title: 'File Upload'
  });
};

exports.postFileUpload = (req, res) => {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/api/upload');
};

exports.getGoogleMaps = (req, res) => {
  res.render('api/google-maps', {
    title: 'Google Maps API',
    google_map_api_key: process.env.GOOGLE_MAP_API_KEY
  });
};

exports.getGoogleDrive = (req, res) => {
  const token = req.user.tokens.find((token) => token.kind === 'google');
  const authObj = new google.auth.OAuth2({
    access_type: 'offline'
  });
  authObj.setCredentials({
    access_token: token.accessToken
  });

  const drive = google.drive({
    version: 'v3',
    auth: authObj
  });

  drive.files.list({
    fields: 'files(iconLink, webViewLink, name)'
  }, (err, response) => {
    if (err) return console.log(`The API returned an error: ${err}`);
    res.render('api/google-drive', {
      title: 'Google Drive API',
      files: response.data.files,
    });
  });
};