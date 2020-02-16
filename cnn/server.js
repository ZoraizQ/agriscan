
pythonProcess.stdout.on('data', (data) =>
    {
        console.log(`Model returned:\n${data}`); 
    });

pythonProcess.stderr.on('data', (data) =>
    {   
        console.log(`ERROR IN CHILD PROCESS: ${data}`); 
    });


pythonProcess.on('exit', (code) => {
    console.log(`child process exited with code ${code}`);
  });