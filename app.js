const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/tabla', function (req, res) {
    //num, id... segun como se lo vayamos a pasar
    let num = req.query.num;
    let tabla = "<table>"
    for (let index = 0; index <= 10; index++) {
        tabla += `<tr><td> ${num} por ${index} = ${index*num} <td><tr>`;
        
    }
    tabla += '</table>';

    //solo se puede hacer una vez
    res.send(tabla)
});

port= 3000;

app.listen(port, () => console.log("Escuchando por el puerto " + port));