const fs = require('fs');

//fs.mkdir('Dogs'); // makes  directory named 'Dogs'  does not wait till it finishes, just moves on to the next line
//fs.mkdirSync('Cats'); //  makes  directory named 'Cats', does not moves on till the folder is created
const folderName = process.argv[2] || 'Project';

// Create the folder
fs.mkdirSync(folderName);

// Write content to the files
try {
    fs.writeFileSync(`${folderName}/index.html`, 'my html');
    fs.writeFileSync(`${folderName}/app.css`, 'my css');
    fs.writeFileSync(`${folderName}/app.js`, 'my javaScript');

    console.log(`Folder '${folderName}' and files created.`);

} catch (e) {
    console.log('SOMETHING WENT WRONG!!!');
    console.log(e);
}