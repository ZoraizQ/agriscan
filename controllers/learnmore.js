/**
 * GET /learnmore
 * Contact form page.
 */
exports.getLearnmore = (req, res) => {
  const unknownUser = !(req.user);

  res.render('learnmore', {
    title: 'Learn More',
    unknownUser,
  });
};
