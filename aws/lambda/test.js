const lambda = require('./app.js').handler

// HTTP
function createHTTPEvent(data) {
    return {
        body: JSON.stringify(data),
    }
}
const event1 = createHTTPEvent({
    hoge: "piyo",
})

async function main() {
    const ret = await lambda(event1);
    console.log(JSON.stringify(ret))
}
main()