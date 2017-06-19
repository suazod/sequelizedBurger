
var db = require('../models');

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbBurger) {
      res.render("index", dbBurger);
    });
});

app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
});

app.put("/:id", function(req, res) {
    db.Burger.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

};
