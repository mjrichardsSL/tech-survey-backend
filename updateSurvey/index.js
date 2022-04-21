module.exports = async function (context, req) {
    const surveyId = req.params.surveyId;
    const { projectId, clientId, platformId, accountOwnerId, year, month, techLeadId, tech, kimbleUrl} = req.body;
    const responseBody = {};

    context.log.info(`Update Survey Data`);
    const status = 200;

    // validate here if survey entry already exists based on survey id passed, if it doesn't reject the request with different http code

    const headers = {
        "Content-Type":"application/json",
        "Charset":"UTF-8"
    };

    context.headers = headers;
    context.res = {
        // status: 200, /* Defaults to 200 */
        status: status,
        body: { data: responseBody }
    };
}