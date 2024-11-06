const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

const minifyJsFiles = async (dir) => {
    fs.readdirSync(dir).forEach(async file => {
        const filePath = path.join(dir, file);

        if (fs.statSync(filePath).isDirectory()) {
            minifyJsFiles(filePath); // Recursively minify files in subdirectories
        } else if (path.extname(file) === '.js') {
            const originalJs = fs.readFileSync(filePath, 'utf8');
            const minifiedJs = await minify(originalJs);

            fs.writeFileSync(filePath, minifiedJs.code, 'utf8');
            console.log(`Minified ${filePath}`);
        }
    });
};

minifyJsFiles('dist/assets/scripts');
