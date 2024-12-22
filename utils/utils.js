const fs = require('fs/promises')

const readFile = async (filePath, isParsed) => {
    if(!filePath) return null
    const readData = await fs.readFile(filePath, 'utf-8')
    return isParsed ? JSON.parse(readData) : readData
}

const writeFile = async (filePath, data, isStringify) => {
    if(!filePath || !data) return null
    await fs.writeFile(filePath, isStringify ? JSON.stringify(data) : data)
    console.log('writed successfully')
}

module.exports = {readFile, writeFile}