// Global variables //
const parentCards = document.querySelectorAll('.food-cards')
const orderList = []

// Functions //


// Order Button //
// **In event listner the anonymous function pick up all items that the customer wants in your Order - Return H4 and Input Number value

const orderBtn = document.getElementById('order-btn')

orderBtn.addEventListener('click', function (){
    parentCards.forEach((currentElement) => {
        let numberInputs = currentElement.querySelectorAll("input[type='number']");
        const tableNumber = document.getElementById('table-number').value

        numberInputs.forEach((input) => {
            if (input.value !== '' && input.value !== undefined) {
                //console.log(input.parentNode.children[1])
                let item = input.parentNode.children[1].textContent
                let quantity = input.parentNode.children[2].value
                const order = {item: item, quantity: quantity, table: tableNumber}
                //console.log(order)
                orderList.push(order)
                localStorage.setItem("orders", JSON.stringify(orderList))
            }
        })
    })
    alert('Order Finished !')

    console.log(orderList)
})


// !Warning
// ?Questions
// *Todo / refactor

