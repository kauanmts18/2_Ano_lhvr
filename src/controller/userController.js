const users = [];

class User {
  index(req, res) {
    res.render("home", { users });
  }
  store(req, res) {
    console.log(req.body);
    const { nome, email } = req.body; //desestruturando e criando as variaveis nome e email
    users.push({ nome, email }); //adicionando as informacoes no array
    res.redirect("/");
  }
  removeStore(req, res) {
    const { nome, email } = req.body;
    let index = users.findIndex(
      (user) => user.nome == nome && user.email == email
    );
    users.splice(index, 1);
    console.log(index);
    res.redirect("/");
  }
}

const user = new User();
module.exports = user;
