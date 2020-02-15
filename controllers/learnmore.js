/**
 * GET /learnmore
 * Learn More page.
 */
exports.getLearnmore = (req, res) => {
  const unknownUser = !(req.user);

  res.render('learnmore', {
    title: 'Learn More',
    unknownUser,
  });
};

exports.postLearnmore = (req, res) => {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/learnmore');
};
