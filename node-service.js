var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'API iavante',
  description: 'API de iavante',
  script: 'C:/Users/diego/servidor/iAvante-servidor-sequelize/src/index.js',
  // execPath: 'C:/Users/diego/servidor/iAvante-servidor-sequelize/daemon/apiiavante.exe'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start',function(){
  console.log(svc.name+' started!\nVisit http://127.0.0.1:3003 to see it in action.');
});

// Install the script as a service.
svc.install();
