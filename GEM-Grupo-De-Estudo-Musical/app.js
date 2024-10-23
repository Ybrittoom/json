const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Configurações do body-parser para lidar com os dados do formulário
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve os arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Função para salvar dados em JSON
function saveToJson(filePath, newData, res) {
    fs.readFile(filePath, 'utf8', (err, data) => { //lendo o arquivo
        if (err) {
            console.log("Erro ao ler o arquivo:", err);
            res.status(500).send('Erro no servidor');
            return;
        }

        const db = data ? JSON.parse(data) : [];//é uma forma de operação condicional em JavaScript, usando o operador ternário.

        // Adiciona os novos dados ao arquivo JSON
        db.push(newData);

        fs.writeFile(filePath, JSON.stringify(db, null, 2), (err) => { //escrevendo os dados no json
            if (err) {
                console.log('Erro ao salvar o arquivo:', err);
                res.status(500).send('Erro no servidor');
                return;
            }

            res.send(`
                <h1>Dados salvos com sucesso!</h1>
                <a href="/">Voltar para a página inicial</a>
            `);
        });
    });
}


// Rota para o formulário de aluno VIOLINO
app.post('/alunoViolino/formulario1', (req, res) => {
    const alunoData = {
        nome: req.body.nome,
        licoes: req.body.licoes,
        TotalLicoes: req.body.TotalLicoes,
        hinosPassados: req.body.hinosPassados,
        TotalHinos: req.body.TotalHinos,
        observacao: req.body.observacao,
        data: req.body.data,
        instrutor: req.body.instrutor
    };
    saveToJson(path.join(__dirname, 'db/violino/alunoViolino.json'), alunoData, res);
});

// Rota para o formulário de professor VIOLINO
app.post('/professorViolino/formulario1', (req, res) => {
    const professorData = {
        nome: req.body.nome,
        codigo: req.body.codigo,
        totalAlunos: req.body.totalAlunos,
        inicio: req.body.inicio,
        fim: req.body.fim,
        data: req.body.data
    };
    saveToJson(path.join(__dirname, 'db/violino/ProfessorViolino.json'), professorData, res);
});

app.post('/alunoViola/formulario2', (req, res) => {
    const alunoData = {
        nome: req.body.nome,
        licoes: req.body.licoes,
        TotalLicoes: req.body.TotalLicoes,
        hinosPassados: req.body.hinosPassados,
        TotalHinos: req.body.TotalHinos,
        observacao: req.body.observacao,
        data: req.body.data,
        instrutor: req.body.instrutor
    };
    saveToJson(path.join(__dirname, 'db/viola/alunoViola.json'), alunoData, res)
    
})

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
