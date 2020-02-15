/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.postFileUpload = (req, res) => {
  console.log("Request body", req.body)
  console.log("Response body", res.body)
  // console.log(formData)
  req.flash('success', { msg: 'File was uploaded successfully.' });
  // res.redirect('home');
};
