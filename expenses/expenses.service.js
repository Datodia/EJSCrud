const { readFile, writeFile } = require("../utils/utils")


const getAllExepnses =  async (req, res) => {
    const expenses = await readFile('expenses.json', true)
    res.json(expenses)
}

const getExpenseById =  async (req, res) => {
    const id = Number(req.params.id)
    const expenses = await readFile('expenses.json', true)
    const expense = expenses.find(el => el.id === id)
    if(!expense) {
        return res.status(404).json({message: 'user not found'})
    }
    res.json(expense)
}

const createExpense = async (req, res) => {
    console.log(req.body, "req, body")
    const {category, price} = req.body
    console.log(category, price)
    if(!category || !price || price < 0) {
        return res.status(400).json({message: 'category and price is required'})
    }
    const expenses = await readFile('expenses.json', true)
    const lastId = expenses[expenses.length - 1]?.id || 0
    const newExpense = {
        id: lastId + 1,
        category,
        price
    }
    expenses.push(newExpense)
    await writeFile('expenses.json', expenses, true)
    res.status(201).json(newExpense)
}


const deleteExpenseById = async (req, res) => {
    const id = Number(req.params.id)
    const expenses = await readFile('expenses.json', true)
    const index = expenses.findIndex(el => el.id === id)
    if(index === -1){
        return res.status(404).json({message: 'expenses not found'})
    }
    const deletedExpense = expenses.splice(index, 1)
    await writeFile('expenses.json', expenses, true)
    res.json(deletedExpense)
}

const updateExpenseById = async (req, res) => {
    const id = Number(req.params.id)
    const {category, price} = req.body
    const expenses = await readFile('expenses.json', true)
    const index = expenses.findIndex(el => el.id === id)
    if(index === -1){
        return res.status(404).json({message: 'expenses not found'})
    }
    if(category) expenses[index].category = category
    if(price) expenses[index].price = price
    await writeFile('expenses.json', expenses, true)
    res.json(expenses[index])
}

module.exports = {getAllExepnses, getExpenseById, createExpense, deleteExpenseById, updateExpenseById}