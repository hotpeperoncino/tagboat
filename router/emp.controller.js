module.exports = function (app, db) {
  var empService = require("../any.service")(app, db, 'employees');

    app.get('/employee', function (req, res) {
        empService.get().then(function (obj) {
            res.send(obj.data);
        });
    });
    app.get('/employee/:id', function (req, res) {
        empService.getById(req.params.id).then(function (obj) {
            res.send(obj);
        });
    });
    app.post('/employee', function (req, res) {
        var emp = req.body;
        empService.post(emp).then(function (obj) {
            res.send(obj.data);
        });
    });
    app.delete('/employee/:id', function (req, res) {
        empService.getById(req.params.id).then(function (obj) {
            res.send(obj.data);
        });
    });
};
