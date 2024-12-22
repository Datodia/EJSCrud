
const form = document.querySelector('form')

form.addEventListener('submit', async  (e) => {
    e.preventDefault()

    const newExpense = {
        category: form.category.value,
        price: form.price.value
    }

    const res = await fetch('http://localhost:3000/expenses', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newExpense)
    })

    if(res.status === 201){
        form.category.value = ''
        form.price.value = ''
        setTimeout(() => {
            location.href = '/expense-list'
        }, 1000)
    }
})
