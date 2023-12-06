const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

const PORT = 3001;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "34.39.139.12",
  user: "root",
  password: "12345678",
  database: "citec",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados");
  }
});

app.post("/register", (req, res) => {
  const { email, senha, nome } = req.body;
  console.log(`Nome: ${nome}`);

  // Verifique se email, senha e nome foram fornecidos
  if (!email || !senha || !nome) {
    return res
      .status(400)
      .json({ error: "Email, senha e nome são necessários" });
  }

  db.query(
    "INSERT INTO usuario (email_usuario, senha_usuario, nome_usuario) VALUES (?, ?, ?)",
    [email, senha, nome],
    (err, result) => {
      if (err) {
        console.error("Erro ao executar a consulta:", err);
        return res.status(500).json({ error: "Erro no servidor" });
      }

      if (result.affectedRows === 0) {
        return res.status(500).json({ error: "Falha ao registrar o usuário" });
      }

      return res.status(200).json({ message: "Registro bem-sucedido" });
    }
  );
});

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  // Verifique se email e senha foram fornecidos
  if (!email || !senha) {
    return res.status(400).json({ error: "Email e senha são necessários" });
  }

  db.query(
    "SELECT * FROM usuario WHERE email_usuario = ? AND senha_usuario = ?",
    [email, senha],
    (err, result) => {
      if (err) {
        console.error("Erro ao executar a consulta:", err);
        return res.status(500).json({ error: "Erro no servidor" });
      }

      if (result.length === 0) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      return res.status(200).json({ message: "Login bem-sucedido" });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
