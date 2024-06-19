const Empreg = [];

class Empregos{
  index(req, res) {
    console.log(Empregos);
    res.render("Empregos", { Empregos });
  }
  store(req, res) {
    console.log(req.body);
    const { nome, salario, funcao } = req.body;
    Empregos.push({ nome, salario, funcao });
    console.log(Empregos);

    res.redirect("/Empregos");
  }

  removeStore(req, res) {
    const { nome, salario, funcao } = req.body;
    let index = Empregos.findIndex(
      (animal) =>
        animal.nome === nome &&
        animal.salario === salario &&
        animal.funcao === funcao 
        
    );
    if (index === -1) {
      //se nao tiver usuario no array
      return res.status(404).send("Emprego nao encontrado");
    }
    Empregos.splice(index, 1); //remove um o elemento do array
    res.redirect("/Empregos");
    // console.log(index);
  }
}

const Empregos= new Empregos();

module.exports = Empregos
