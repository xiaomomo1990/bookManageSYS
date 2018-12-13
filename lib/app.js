//服务
import Express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

//文件
import {routers} from '../RESTful_API/apis/index.js';
import {dbConfig} from '../RESTful_API/db/config.js';
import {dbHandel} from '../RESTful_API/db/dbHandel.js';
import {env} from '../RESTful_API/env.config.js';

let app = Express();
let router = Express.Router();
let port = 3030;

global.userPath = './User';
global.dbHandel = dbHandel;

console.log('mongodb://' + dbConfig[env].host + ':' + dbConfig[env].port + '/' + dbConfig[env].database)

global.db = mongoose.connect('mongodb://' + dbConfig[env].host + ':' + dbConfig[env].port + '/' + dbConfig[env].database, {
    user: dbConfig[env].username,
    pass: dbConfig[env].password
},{ useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("数据库连接成功!")
});


app.use(bodyParser.urlencoded({ limit: '100mb',extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'who am i ?',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    saveUninitialized: true,
    resave: true
}));


routers.forEach(function(Router) {
    app.use('/api', Router);
});

app.listen(port);

console.log('server listening on port: ' + port);

module.exports = app;

