const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'tamplete'), err => {
  if (err) throw new Error();
  console.log("Done!  - Folder Created :)");
})


fs.mkdir(path.join(__dirname, 'notes'), err => {
  if (err) throw new Error();

  console.log("Done ;)");
})

fs.writeFile(path.join(__dirname, 'notes', 'note.txt'), 'Lesson NodeJS', err => {
  if (err) throw new Error();
  console.log('Create file  Done :)');

  fs.appendFile(path.join(__dirname, 'notes', 'note.txt'), ' and microservis project', err => {
    if (err) throw new Error();
    console.log('File was changet done :) !');
    // Esy 
    fs.readFile(path.join(__dirname, 'notes', 'note.txt'), 'utf-8', (err, data) => {
      if (err) throw new Error();

      console.log(data);
    })
  })
})

//<Buffer 4c 65 73 73 6f 6e 20 4e 6f 64 65 4a 53>
fs.readFile(path.join(__dirname, 'notes', 'note.txt'), (err, data) => {
  if (err) throw new Error();

  console.log(data);
},


  // Midil
  fs.readFile(path.join(__dirname, 'notes', 'note.txt'), (err, data) => {
    if (err) throw new Error();

    console.log(Buffer.from(data).toString());
  })


)
