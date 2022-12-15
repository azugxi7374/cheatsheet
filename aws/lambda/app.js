exports.handler = async (event, context) => {

    let body, bodyJson;
    try {
        body = event.body;
        bodyJson = JSON.parse(body);
    } catch (e) {
        if (body === undefined) {
            return {
                statusCode: 400,
                body: "body not found.",
            }
        } else {
            return {
                statusCode: 400,
                body: `body is not json. : ${body}`,
            }
        }
    }

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ event, context, bodyJson }),
    };
    return response;
};
