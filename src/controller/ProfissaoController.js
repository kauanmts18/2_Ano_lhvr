const profissao = [];

class Profissao{
  index(req, res) {
    console.log (Profissao);
    res.render("Profissao", { Profissao });
  }
  store(req, res) {
    console.log(req.body);
    const { nome, espec, exp } = req.body;
  Profissao.push({ nome, espec, exp });
    console.log (Profissao);

    res.redirect(" Profissao");
  }

  removeStore(req, res) {
    const { nome, espec, exp } = req.body;
    let index = Profissao.findIndex(
      (animal) =>
        animal.nome === nome &&
        animal.espec === espec &&
        animal.exp === exp 
        
    );
    if (index === -1) {
      //se nao tiver usuario no array
      return res.status(404).send("profissao nao encontrado");
    }
  Profissao.splice(index, 1); //remove um o elemento do array
    res.redirect(" Profissao");
    // console.log(index);
  }
}

const Profissaos= new Profissao();

module.exports = Profissaos;
