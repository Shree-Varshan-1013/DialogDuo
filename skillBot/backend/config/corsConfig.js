const whiteList = ['http://localhost:5173'];

const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
        } else {
        callback(new Error('Not allowed by the CORS'));
        }
    }
};

module.exports = corsOptions;
