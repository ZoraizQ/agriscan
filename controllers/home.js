const cp = require('child_process');

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
  console.log('Request', req.file.filename);

  req.flash('success', { msg: 'File was uploaded successfully.' });

  try {
    const pythonProcess = cp.spawn('python3',["./cnn/model.py", "./cnn/", "./uploads/"+req.file.filename]); //python3 <list of arguments>

    pythonProcess.stdout.on('data', (data) =>
      {
        const bufferRes = (new Buffer(data,'utf-8').toString());
        console.log(bufferRes); 
        res.json({diseaseStatus: bufferRes.replace('\n', '').split('_').slice(-2).join(' ')});
      });

    pythonProcess.stderr.on('data', (data) =>
    {   
        console.log(`ERROR IN CHILD PROCESS: ${data}`); 
    });


    pythonProcess.on('exit', (code) => {
        console.log(`child process exited with code ${code}`);
    });
  }
  catch (err) {
    console.log("Error in prediction", err);
  }

};
