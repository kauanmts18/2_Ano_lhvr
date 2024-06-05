class User {
  index(req, res) {
    res.render("home");
  }
}

const user = new User();
module.exports = user;
