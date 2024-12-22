
const { Router } = require('express')
const { getAllExepnses, getExpenseById, createExpense, deleteExpenseById, updateExpenseById } = require('./expenses.service')

const expenseRouter = Router()

expenseRouter.get('/', getAllExepnses)
expenseRouter.get('/:id', getExpenseById)
expenseRouter.post('/', createExpense)
expenseRouter.delete('/:id', deleteExpenseById)
expenseRouter.put('/:id', updateExpenseById)

module.exports = expenseRouter
