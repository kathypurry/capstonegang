const db = require('../db/dbConfig');

const getAllCodeSnippets = async () => {
    try {
        const allCode = await db.any('SELECT * FROM code_snippets');
        return allCode;
    } catch (e) {
        return e;
    }
};

const getCodeSnippet = async (difficulty) => {
    try {
        const oneCode = await db.any('SELECT * FROM code_snippets WHERE difficulty=$1', difficulty);
        return oneCode;
    } catch (e) {
        return e;
    }
};

module.exports = {
    getAllCodeSnippets,
    getCodeSnippet,
};