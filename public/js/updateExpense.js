const form = document.querySelector('form')

const id = location.pathname.split('/')[2]

form.addEventListener('submit', async  (e) => {
    e.preventDefault()
    const newExpense = {
        category: form.category.value,
        price: form.price.value
    }

    const res = await fetch(`http://localhost:3000/expenses/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newExpense)
    })

    if(res.status === 200){
        form.category.value = ''
        form.price.value = ''
        setTimeout(() => {
            location.href = '/expense-list'
        }, 1000)
    }
})