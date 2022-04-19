module.exports = async function (context, req) {
    const projectId = req.params.projectId;
    const lastSurveys = {
        "1": {
            projectId: 2,
            clientId: 1,
            platformId: 1,
            techLeadId: 1,
            accountOwnerId: 1,
            tech: [1,2],
            kimbleUrl: "exampleUrl"
        },
        "2": {
            projectId: 2,
            clientId: 1,
            platformId: 1,
            techLeadId: 1,
            accountOwnerId: 1,
            tech: [1,2],
            kimbleUrl: "exampleUrl2"
        }
    }
    const responseBody = lastSurveys[projectId];

    context.log.info(`Requesting Survey Data`);
    const status = 200;

    const headers = {
        "Content-Type":"application/json",
        "Charset":"UTF-8"
    };

    context.headers = headers;
    context.res = {
        // status: 200, /* Defaults to 200 */
        status: status,
        body: responseBody
    };
}