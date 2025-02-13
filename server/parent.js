const express = require("express");
const cors = require('cors');
const { fork } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.get("/calculate", (req, res) => {
    const { num1, num2, operation } = req.query;
    
    if (!num1 || !num2 || !operation) {
        return res.status(400).json({ error: "Missing parameters" });
    }
    
    const child = fork("./child.js");
    child.send({ num1: Number(num1), num2: Number(num2), operation });

    child.on("message", (result) => {
        res.json({ result });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
