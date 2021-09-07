const db = require('../db/dbConfig');

const getAllCodeSnippets = async () => {
    try {
        const allCode = await db.any('SELECT * FROM code_snippets');
        return allCode;
    } catch (e) {
        return e;
    }
};

const getCodeSnippet = async (id) => {
    try {
        const oneCode = await db.one('SELECT * FROM code_snippets WHERE id=$1', id);
        return oneCode;
    } catch (e) {
        return e;
    }
};

module.exports = {
    getAllCodeSnippets,
    getCodeSnippet,
};