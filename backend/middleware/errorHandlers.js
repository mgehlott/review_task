

exports.notFound = (req, res, next) => {
    const error = new Error(`Page not found `);
    res.status(404);
    console.log('not found');
    next(error);
}

exports.mainErrorHanlder = (err, req, res, next) => {

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    console.log(err.message);
    console.log(err);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })

}