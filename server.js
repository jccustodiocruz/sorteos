const express = require('express');
const path = require('path');

const app = express();

app.use('/js', express.static(path.resolve(__dirname, 'front', 'js')));

app.get("/*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "front", "index.html"));
})

app.listen(3000, () => console.log('Server corriendo en puerto 3000'));