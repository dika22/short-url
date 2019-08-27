'use strict';

module.exports = function(app) {
    let todoList = require('./controller/UrlController');
    let todoListUser = require('./controller/UserController');

    /*Login app*/    
    // app.route('/v1/api/aladin/login')
        // .post(todoList.login);
    // /*Register User*/
    app.route('/v1/api/aladin/adduser')
        .post(todoListUser.addUser);

    /*add url*/
    app.route('/v1/api/aladin/addurl')
        .post(todoList.addUrl);
    /*klik url*/
    app.route('/v1/api/aladin/klikurl')
        .post(todoList.clickUrl);
    /*update url*/
    app.route('/v1/api/aladin/updateurl')
        .post(todoList.updateUrl);    
    /*hapus url*/
    app.route('/v1/api/aladin/hapusurl')
        .post(todoList.hapusUrl);         
};		