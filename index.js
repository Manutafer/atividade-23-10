const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World")

app.get('/sobre', (req, res) => {
    res.send('Me chamo Manuella, tenho 17 anos, sou jovem aprendiz da intelbras e faço back-end.');
});

})
app.listen(port, () => {
    console.log("Servidor rodando em: http://localhost:" + port)
})