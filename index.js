module.exports = async function (context, req) {
    context.log('Hello World');

   context.res = {
        status: 200
        body: "OK"
    };
}
