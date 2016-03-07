#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

var lib = require('../lib/index.js');
var resourcesFolder = path.join(__dirname, '../resources');
var targetFiles = fs.readdirSync(resourcesFolder);

var npmDependencies = [
    "grunt-eslint@^17.1.0",
    "grunt-sass-lint@^0.1.0"
];

try {
    var packageDetails = require(process.cwd() + '/package.json');

    if (packageDetails.name === 'fs-default-project-config') {
        console.error('Run from the wrong directory!');
        process.exit(1);
    }
} catch (e) {
    console.error('No existing project found in this folder. If you wish to update a project, please npm init first.');
    process.exit(1);
}

console.log('----------------------------');
console.log('-Installing Common Packages-');
console.log('----------------------------');
lib.installDependencies(npmDependencies);

console.log('----------------------------');
console.log('---Deploying config files---');
console.log('----------------------------');
lib.copyConfig(
    targetFiles.map(function(file) {
        return path.join(resourcesFolder, file);
    }),
    path.join(process.cwd()),
    function() {
        console.error('All configs successfully copied');
    },
    function () {
        console.error('An error was encountered while trying to update the config files. See above for details.');
        process.exit(1);
    }
);
