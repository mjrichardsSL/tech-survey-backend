module.exports = async function (context, req) {
    const status = 200;
    const responseBody = {};

    const headers = {
        "Content-Type":"application/json",
        "Charset":"UTF-8"
    };
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
    context.headers = headers;
    context.res = {
        // status: 200, /* Defaults to 200 */
        status: status,
        body: responseBody
    };
}