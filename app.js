const express = require("express")
const app = express()

app.use(express.json()) // for parsing application/json


let listaProdutos = [
    {
        id: 1,
        nome: "arroz",
        categoria: "alimento",
        preco: 5.80
    },
    {
        id: 2,
        nome: "leite",
        categoria: "bebida",
        preco: 4.25
    }
];

let produto2 = {
    id: 2,
    nome: "leite",
    categoria: "bebida",
    preco: 4.25
};


app.get("/produtos", (req, res) => {
    res.json(listaProdutos)
})

app.post("/produtos", (req, res) => {
    let produto = req.body;
    if(produto && produto.nome && produto.preco) {
        produto.id=3;
        res.status(201).json(produto);
    }
    else {
        res.status(400).json({erro:"Nome e preco obrigatorios"});
    }
})

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;
    if(id == 2) {
        res.json(produto2);
    }
    else{ 
        res.status(404).json({erro: "Produto nao encontrado"})
    }
})

app.put("/produtos/:id", (req, res) => {
    const id = req.params.id;
    let produto = req.body;

    if(id == 2) {
        if(produto && produto.nome && produto.preco) {
            //Só retorna o produto, mas aqui faria a logica de atualizar
            res.json(produto);
        }
        else {
            res.status(400).json({erro:"Nome e preco obrigatorios"});
        }
    }
    else{ 
        res.status(404).json({erro: "Produto nao encontrado"})
    }

})

app.delete("/produtos/:id", (req, res) => {
    const id = req.params.id;
    if(id == 2) {
        //Logica semelhante ao Buscar Por Id, mas teria que deletar
        res.json(produto2);
    }
    else{ 
        res.status(404).json({erro: "Produto nao encontrado"})
    }
})


app.listen(3000, () => {
    console.log("Servidor foi iniciado na porta 3000");
})
