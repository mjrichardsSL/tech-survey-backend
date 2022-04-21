
const { Connection, Request, TYPES } = require("tedious");

const config = {
  authentication: {
    options: {
      userName: "tsDbAdmin", 
      password: "PtsDb@999" 
    },
    type: "default"
  },
  server: "sl-technology-stack-db-srv.database.windows.net",
  options: {
    database: "TechnologyStack", 
    encrypt: true
  }
};

// const initConnection = async (context) => {
//     const connection = new Connection(config);  
//     const promise = new Promise((resolve, reject) => {
//         connection.on('connect', (err) => {  
//         if(err) {
//             context.log.info(err);
//             resolve();
//         } else {
//             context.log.info("Connected");  
//             reject();
//         }
//     });  
//     connection.connect();
//     await promise;
//     return connection;
// }

// const createEmployee = async (context, connection, firstName, lastName) => {
//     const storedProcedureName = '[dbo].[CreateEmployee]';
//     const promise = new Promise();
//     const request = new Request(storedProcedureName, (err) => {
//         if (err) {
//             promise.reject();
//             throw err;
//         }

//         context.log.info('Executed CreateEmployee Stored Procedure');
//         promise.resolve();
//     });
//     request.addParameter('FirstName', TYPES.NVARCHAR, firstName);
//     request.addParameter('LastName', TYPES.NVARCHAR, lastName);
//     // Promise request.on('returnValue', (paramName, value, metadata) => {
//     //     console.log(paramName + ' : ' + value);
//     // });
//     connection.callProcedure(request);
//     return promise;
// }

module.exports = async function (context, req) {
    context.log.info("Creating Employee");
    const responseBody = {};

    if (!req.body.name) {
        status = 500;
        responseBody.errorMessage = "No name was provided";
    }
    else {
        Object.assign(responseBody, {
            data: {
                id: parseInt(Math.random() * 100000),
                name: req.body.name
        }});
    };
    // const connection = await initConnection(context);
    // await createEmployee(context, connection, req.body.name, req.body.name);
   //  connection.close();
    const status = 200;

    const headers = {
        "Content-Type":"application/json",
        "Charset":"UTF-8"
    };


    context.headers = headers;
    context.res = {
        
        status: status,
        body: responseBody
    };
}