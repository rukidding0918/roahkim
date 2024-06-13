const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '..', 'public', 'images');

function renameFilesAndDirectories(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const newFileName = file.replace(/\s+/g, '_'); // 공백을 밑줄로 대체
    const newFilePath = path.join(dir, newFileName);

    if (filePath !== newFilePath) {
      fs.renameSync(filePath, newFilePath);
    }

    if (fs.statSync(newFilePath).isDirectory()) {
      renameFilesAndDirectories(newFilePath); // 재귀적으로 디렉토리를 순회
    }
  });
}

renameFilesAndDirectories(directoryPath);
console.log('File and directory names have been updated');
