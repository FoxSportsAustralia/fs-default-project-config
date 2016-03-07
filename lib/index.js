var fs = require('fs');
var path = require('path');

/**
 * Copy named files from a directory to a new location
 *
 * @param  {Array}  from    Array of files to copy to target directory
 * @param  {String} destDir directory path to copy files to (no trailing slash)
 *
 * @return {String}         Success or failure message
 */
exports.copyConfig = function(from, destDir) {
    if (!Array.isArray(from)) {
        return 'ERR: Filenames not provided as an array';
    }

    from.forEach(function(fileName) {
        try {
            var destFileName = path.join(destDir, path.basename(fileName))

            console.log('src: ', fileName);
            console.log('dest: ', destFileName);

            var readFile = fs.readFileSync(fileName);

            fs.writeFileSync(destFileName, readFile);
        } catch (ex) {
            return 'ERR: ' + ex.message;
        }
    });

    return 'SUCCESS!: ' + from.length + ' file(s) copied successfully';
};
