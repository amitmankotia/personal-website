var Deploy = require('ftp-deploy');
var ftpDeploy = new Deploy();
 
var config = {
    host : "amitmankotia.com",
    user : "u796030882",
    password : "N0bullsh1t",
    port: 21,
    localRoot: __dirname + '/build',
    remoteRoot: "/public_html/",
    include: ['*'],
    deleteRemote: false 
}
ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err)
    else console.log('finished:', res);
});
ftpDeploy.on("uploading", function(data) {
   console.log(data.totalFilesCount)
   console.log(data.transferredFileCount)
   console.log(data.filename)
});
ftpDeploy.on("uploaded", function(data) {
    console.log("uploaded", data); 
});
ftpDeploy.on("log", function(data) {
    console.log("log",data);
});
ftpDeploy.on("upload-error", function(data) {
    console.log("upload-error", data.err);
});