#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

var lib = require('../lib/index.js');
var resourcesFolder = path.join(__dirname, '../resources');
var targetFiles = fs.readdirSync(resourcesFolder);

console.log('----------------------------');
console.log('---Deploying config files---');
console.log('----------------------------');
console.log(
    'Copy Completed: ',
    lib.copyConfig(
        targetFiles.map(function(file) {
            return path.join(resourcesFolder, file);
        }),
        path.join(process.cwd())
    )
);
