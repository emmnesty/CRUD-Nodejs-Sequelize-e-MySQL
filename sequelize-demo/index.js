(async () => {
  const database = require("./db");
  const Produto = require("./produto");

  try {
    const resultado = await database.sync();

    /*
      Aqui eu insiro um produto
    */

    const criarProduto = await Produto.create({
      nome: "Monitor Led",
      preco: 40,
      descricao: "Monitor bacana!!!",
    });

    const produto = await Produto.findByPk(1);
    
    console.log(produto); // Só pra lista o conteudo da variavel 
    
    /*
      manipulando o objeto e realizando update() no bd
    */
    produto.descricao = 'Fiz uma alteração';
    await produto.save();

    /*   
      Delete no banco passando o ID
    */
    await produto.destroy(); //OU a de baixo
    // await Produto.destroy({where: {
    //   preco:30
    // }})  




  } catch (error) {
    console.log(error);
  }
})();
