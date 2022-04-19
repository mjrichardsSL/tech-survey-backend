module.exports = async function (context, req) {
    const { projectId, clientId, platformId, accountOwnerId, year, month, techLeadId, tech, kimbleUrl} = req.body;

    context.log.info(`Adding New Survey Data`);
    const status = 200;

    // validate here if survey entry already exists, if it does based on project id, year and survey interval passed
    // then reject this request with a http code and error message
    const responseBody = {
        surveyId: 1
    }
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