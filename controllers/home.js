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

  const pythonProcess = cp.spawn('python',["./cnn/model.py", "./cnn/try.pkl", "./uploads/testImg.JPG"]); //python3 <list of arguments>

  pythonProcess.stdout.on('data', (data) =>
  {
    res.send(data);
    console.log(`Model returned:\n${data}`); 
  });

  pythonProcess.stderr.on('data', (data) =>
  {   
      console.log(`ERROR IN CHILD PROCESS: ${data}`); 
  });


  pythonProcess.on('exit', (code) => {
      console.log(`child process exited with code ${code}`);
  });
};
