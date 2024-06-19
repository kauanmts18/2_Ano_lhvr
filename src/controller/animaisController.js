const Animal = [];

class Animais{
  index(req, res) {
    console.log(animais);
    res.render("animais", { animais });
  }
  store(req, res) {
    console.log(req.body);
    const { nome, especie, filo } = req.body;
    animais.push({ nome, especie, filo });
    console.log(animais);

    res.redirect("/animais");
  }

  removeStore(req, res) {
    const { nome, especie, filo } = req.body;
    let index = animais.findIndex(
      (animal) =>
        animal.nome === nome &&
        animal.especie === especie &&
        animal.filo === filo 
        
    );
    if (index === -1) {
      //se nao tiver usuario no array
      return res.status(404).send("Animal nao encontrado");
    }
    animais.splice(index, 1); //remove um o elemento do array
    res.redirect("/animais");
    // console.log(index);
  }
}

const animais= new Animais();

module.exports = animais;
