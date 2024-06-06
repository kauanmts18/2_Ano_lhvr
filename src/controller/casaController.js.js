const casas = [];

class Casa {
  index(req, res) {
    console.log(casas);
    res.render("casa", { casas });
  }
  store(req, res) {
    console.log(req.body);
    const { rua, numero, bairro, municipio, cep } = req.body;
    casas.push({ rua, numero, bairro, municipio, cep });
    console.log(casas);

    res.redirect("/casas");
  }

  removeStore(req, res) {
    const { rua, numero, bairro, municipio, cep } = req.body;
    let index = casas.findIndex(
      (casa) =>
        casa.rua === rua &&
        casa.numero === numero &&
        casa.bairro === bairro &&
        casa.municipio === municipio &&
        casa.cep === cep
    );
    if (index === -1) {
      //se nao tiver usuario no array
      return res.status(404).send("Usuario nao encontrado");
    }
    casas.splice(index, 1); //remove um o elemento do array
    res.redirect("/casas");
    // console.log(index);
  }
}

const casa = new Casa();

module.exports = casa;
