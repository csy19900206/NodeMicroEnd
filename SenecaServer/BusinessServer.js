// var seneca = require('seneca')()
// var server = require('express')()
// var Web = require('seneca-web')

// var config = {
// 	routes:{
// 		prefix:'/ningning-api',
// 		pin:{role:'api',cmd:'ningningrun'},

// 		map:{
// 			ningningrun : {GET:true}
// 		}
// 	}
// };

// seneca.use(Web,{adapter :'express',context:server})
// seneca.act('role:web',config)
// seneca.add('role:api,cmd:ningningrun', () => {
// 	done(null,{canRun:"ningning"});
// })

// server.listen(9900);
var Seneca  = require("seneca");
var Express = require("express");
var Web     = require("seneca-web");

var seneca = Seneca();
var server = Express();

var config = {
    routes:{
        prefix : "/ningning-api",
        pin: "role:api,cmd:*",
        map:{
            ningningrun: {
                GET: true
            }
        }
    }
};

seneca.use(Web, { adapter: require('seneca-web-adapter-express'), context: server })
seneca.act("role:web", config);
seneca.add("role:api,cmd:ningningrun", ningningrun);

server.listen(3000);


function ningningrun(args, done){

    done(null, {
        action: "ningningRun!"
    });
}