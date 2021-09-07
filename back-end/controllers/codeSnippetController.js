// DEPENDENCIES
const express = require("express");
const codeSnippet = express.Router({ mergeParams: true });
const {
    getAllCodeSnippets,
    getCodeSnippet,
    createCodeSnippet,
    updateCodeSnippet,
    deleteCodeSnippet,

} = require("../queries/codeSnippet.js");

//INDEX
codeSnippet.get("/", async (req,res) => {
    const allCodeSnippets = await getAllCodeSnippets();
    res.json(allCodeSnippets);
});

//SHOW  
codeSnippet.get("/:id", async (req,res) => {
    const { id } = req.params;
    try {
        const codeSnippet = await getCodeSnippet(id);
        if (codeSnippet.id) {
            res.json(codeSnippet);
    } else {
        console.log(`Database error: ${codeSnippet}`);
        throw `There is no code snippet with ${id}`;
    } 
} catch (e) {
        res.status(404).json({ error: "not found", message: e });
    }
});





module.exports = codeSnippet;