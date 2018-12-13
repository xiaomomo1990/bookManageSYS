'use strict';
import md5 from "md5";
let safeWord = '谜之安全文本'; // 哈哈哈

// api 权限控制
module.exports = function (Router) {
    Router.get('/*', function(req, res, next) {
        if (req.session.isLogin) {
            next();
        } else {
            var resData = {
                iserro: 1,
                msg: '请登录！',
                data: ''
            };
            res.send(resData);
        }
    });

    //
    // Router.get('/insert', function (req, res, next) {
    //     if (req.session.isLogin) {
    //         next();
    //     } else {
    //         var resData;
    //         var user = global.dbHandel.getModel('user');
    //
    //         user.create({
    //             username: "admin",
    //             password: md5(safeWord + "admin"),
    //             type: 1
    //         }).then((err, doc)=> {
    //             console.log(doc);
    //             if (err) {
    //                 res.send(err);
    //             } else {
    //                 resData = {
    //                     iserro: 0,
    //                     msg: '创建成功！',
    //                     data: {
    //                         _id: doc._id
    //                     }
    //                 }
    //                 res.send(resData);
    //             }
    //         });
    //
    //         // user.create({
    //         //     username:"admin",
    //         //     password:"admin"
    //         // }, function(err, doc) {
    //         //     console.log(doc);
    //         //     if (err) {
    //         //         res.send(err);
    //         //     } else {
    //         //         resData = {
    //         //             iserro: 0,
    //         //             msg: '创建成功！',
    //         //             data: {
    //         //                 _id: doc._id
    //         //             }
    //         //         }
    //         //         res.send(resData);
    //         //     }
    //         // });
    //
    //     }
    // });
    return Router
};
