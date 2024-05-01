const express = require("express")
const app = express()

app.get("/produtos", (req, res) => {
    res.send("Listando Produtos");
})

app.post("/produtos", (req, res) => {
    res.send("Inserindo Produto");
})

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.send("Buscando o produto com id "+id);
})

app.put("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.send("Atualizando o produto com id "+id);
})

app.delete("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.send("Deletando o produto com id "+id);
})


app.listen(3000, () => {
    console.log("Servidor foi iniciado na porta 3000");
})
