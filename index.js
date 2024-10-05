const xlsx = require('xlsx');
const express = require('express');

const app = express();

const file = './arquivos/alunos_ra.xlsx';

const PORT = 3000;

const _ = require('lodash');

app.get('/', (req, res) => {

    const wb = xlsx.readFile(file)
    const ws = wb.Sheets["Sheet1"]
    const data = xlsx.utils.sheet_to_json(ws)

    const spec = {}
    const _u = _.noConflict()

    for(let i = 0; i < data.length; i++) {
        _u.set(spec, `${i}.Dados do Aluno`, data[i])
    }

    res.send(spec)
})

app.listen(PORT, () => {
    console.log("App rodando na porta " + PORT);
})