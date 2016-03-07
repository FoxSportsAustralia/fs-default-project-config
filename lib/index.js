var fs = require('fs');
var path = require('path');
var exec = require('child_process').execSync;

exports.installDependencies = function(npmDependencies) {
    npmDependencies.forEach(function(packagePath) {
        var command = 'npm install ' + packagePath + ' --save-dev';
        console.log(command);
        console.log(exec(command));
    });
}

/**
 * Copy named files from a directory to a new location
 *
 * @param  {Array}      targetFileArr   Array of files to copy to target directory
 * @param  {String}     destDir         directory path to copy files to (no trailing slash)
 * @param  {Function}   onSuccess       onSuccess callback
 * @param  {Function}   onError         onError callback
 *
 * @return {void}
 */
exports.copyConfig = function(targetFileArr, destDir, onSuccess, onError) {
    if (!Array.isArray(targetFileArr)) {
        return 'ERR: Filenames not provided as an array';
    }

    var hasErrors = targetFileArr.reduce(function(allSuccessful, fileName) {
        try {
            var destFileName = path.join(destDir, path.basename(fileName))

            console.log('src: ', fileName);
            console.log('dest: ', destFileName);

            var readFile = fs.readFileSync(fileName);

            fs.writeFileSync(destFileName, readFile);
        } catch (ex) {
            console.error('ERR: ' + ex.message);

            return allSuccessful = false;
        }
    }, true);

    if (hasErrors) {
        onError();
    } else {
        onSuccess();
    }
};
