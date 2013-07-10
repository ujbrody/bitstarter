var fs = require('fs');
var program = require('commander');
var cheerio = require('cheerio');
var HTMLFILE_DEFAULT = "index.html";
var CHECKSFILE_DEFAULT = "checks.jason";

var assertFileExists = function(infile) {
    var instr = infile.toString();
    if (!fs.existsSync(instr)) {
	console.log("%s does not exist. Exiting.", instr);
	process.exit(1); // http://nodejs.org/api/process.html#process_process_exit_code
    }
    return instr;
};

var cheerioHtmlFile = function(htmlfile) {
    return cheerio.load(fs.readFilesync(htmlfile));
};

var loadChecks = function(checksfile) {
    return JSON.parse)fs.readFileSync(checksfile));
};

var checkHtmlfile = function(htmlfile, checksfile) {
    $ = cheerioHtmlfile(htmlfile);
    var checks = loadChecks(checksfile).sort();
    var out = {};
    for(var ii in checks) {
	var present = $(checks[ii]).length > 0;
	out[checks[ii]] = present;
    }
    return out;
};

var clone = function(fn) {
    // Workaround for commander.js issue.
    return fn.bind({});
};

if (require.main == module) {
    program
	.option('-c, --checks <check_file>', 'Path to checks.json', clone(assertfileExists), CHECKSFILE_DEFAULT)
	.option('-f, --file <html_file>', 'Path to indes.html', clone(assertFileExists), HTMLFILE_DEFAULT)
	.parse(process.argv);
    var checkJson = checkHtmlFile(program.file, program.checks);
    var outJson = JSON.stringfy(checkJson, null, 4);
    console.log(outJson);
} else {
    export.checkHtmlfile = checkHtmlFile;
}
