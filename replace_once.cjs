const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

const replaceInFiles = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            replaceInFiles(filePath);
        } else if (filePath.endsWith('.jsx')) {
            let content = fs.readFileSync(filePath, 'utf8');
            // Regex to match viewport={{ once: true ... }} mostly
            const newContent = content.replace(/viewport=\{\{\s*once:\s*true/g, 'viewport={{ once: false');
            
            if (content !== newContent) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log(`Updated: ${filePath}`);
            }
        }
    });
};

replaceInFiles(directoryPath);
console.log('Done!');
