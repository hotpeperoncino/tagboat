/*
var async = require('async');

var Connection = require('ssh2');

var Sshc = function() {
  this.c = new Connection();
  this.c.on('connect', function() {
//    console.log('Connection :: connect');
  });
  this.c.on('ready', function() {
//    console.log('Connection :: ready');
    this.c.exec(this.cmd, function(err, stream) {
      if (err) throw err;
      stream.on('data', function(data, extended) {
//	console.log((extended === 'stderr' ? 'STDERR: ' : 'STDOUT: ') + data);
      });
      stream.on('end', function() {
//	console.log('Stream :: EOF');
      });
      stream.on('close', function() {
//	console.log('Stream :: close');
      });
      stream.on('exit', function(code, signal) {
//	console.log('Stream :: exit :: code: ' + code + ', signal: ' + signal);
	c.end();
      });
    });
  });
  this.c.on('error', function(err) {
//    console.log('Connection :: error :: ' + err);
  });
  this.c.on('end', function() {
//    console.log('Connection :: end');
  });
  this.c.on('close', function(had_error) {
//    console.log('Connection :: close');
    this.cb();
  });
// require('fs').readFileSync('/here/is/my/key')
  this.doconnect = function (ipaddr, uname, keystr, cmd, cb) {
    this.cmd = cmd;
    this.cb = cb;
    this.c.connect({
      host: ipaddr,
      port: 22,
      username: uname,
      privateKey: keystr
    });
  }
}

function connect2srv(ipaddr, uname, cmd) {
  var ssh  = new Sshc();
  ssh.doconnect(ipaddr, uname, cmd);
}

var execqueue = async.queue(function (task , callback) {
//  console.log("exec queued");
  var machines=db.getColletion('machines');
  async.each(task.nodes, function(mid, cb){
    machines.findOne({id: mid}, function(err, doc){
      connect2srv(doc.ipaddr, "share", task.command);
    })
  });
}, 1);
*/

module.exports = function (app, db) {
 
    app.get('/', function (req, res) {
        res.send('default 1s')
    });
    app.get('/about', function (req, res) {
        res.send('holla');
    });

};
