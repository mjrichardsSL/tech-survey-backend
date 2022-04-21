module.exports = async function (context, req) {
    const entityType = req.params.entityType || "all";
    const responseBody = {};
    // return all entities if no data type was defined
    const platforms = {
        "platforms": [{
            id: 1,
            name: 'Cloud'
        }]
    };

    const employees = {
        "employees": [{
            id: 1,
            name: 'Mark Richards'
        },
        {
            id: 2,
            name: 'Prashant Yewale'
        }]
    };

    const projects = {
        "projects": [{
            id: 1,
            name: 'Super Awesome Project',
            clientId: 2,
        },
        {
            id: 2,
            name: 'HMRC Project',
            clientId: 1,
        }] 
    };

    const clients = {
        "clients": [{
            id: 1,
            name: 'HMRC'
        },
        {
            id: 2,
            name: 'Morgan Stanley'
        }]};
    
        
    const tech = {
        "tech": [{
            id: 1,
            name: 'C#'
        },
        {
            id: 2,
            name: 'React'
        }]
    }

    if (entityType==="all" || entityType.toLowerCase()==="platforms") {
        Object.assign(responseBody, platforms);
    }
    if (entityType==="all" ||entityType.toLowerCase()==="projects") {
        Object.assign(responseBody, projects);
    }
    if (entityType==="all" ||entityType.toLowerCase()==="clients") {
        Object.assign(responseBody, clients);
    }
    if (entityType==="all" ||entityType.toLowerCase()==="employees") {
        Object.assign(responseBody, employees);
    }
    if (entityType==="all" ||entityType.toLowerCase()==="tech") {
        Object.assign(responseBody, tech);
    }
    context.log.info(`Requesting ${entityType} Reference Data`);
    const status = 200;

    const headers = {
        "Content-Type":"application/json",
        "Charset":"UTF-8"
    };

    context.headers = headers;
    context.res = {
        // status: 200, /* Defaults to 200 */
        status: status,
        body: {
            data: responseBody
        }
    };
}