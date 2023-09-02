// Global variables //
const parentCards = document.querySelectorAll('.food-cards')
const orderList = []


// **Order Button 
// **In event listner the anonymous function pick up all items that the customer wants in your Order - Return H4 and Input Number value

const orderBtn = document.getElementById('order-btn')

orderBtn.addEventListener('click', function (){
    const tableNumber = document.getElementById('table-number').value
    if (tableNumber == '' || tableNumber == undefined || tableNumber == null){
        alert('Please enter a valid table number')
        return
    }

    else{
        parentCards.forEach((currentElement) => {
            let numberInputs = currentElement.querySelectorAll("input[type='number']")
        
            numberInputs.forEach((input) => {
                if (input.value !== '' && input.value !== undefined && input.value > 0) 
                {
                    //console.log(input.parentNode.children[1])
                    let item = input.parentNode.children[1].textContent
                    let quantity = input.parentNode.children[3].value
                    const order = {item: item, quantity: quantity, table: tableNumber}
                    //console.log(order)
                    if(localStorage.length < 1)
                    {
                        orderList.push(order)
                        localStorage.setItem("orders", JSON.stringify(orderList))
                        console.log(`local storage vazio, criei agr`)
                    }
                    else
                    {
                        let allOrders = JSON.parse(localStorage.getItem('orders')) || []
                        allOrders.push(order)
                        localStorage.setItem('orders', JSON.stringify(allOrders))
                        console.log(`local storage ja possui itens, soh adicionei mais`)
                    }
                    
                }
            })
        })
        alert('Order Finished !')
        erasingInputFilds()
    
        console.log(orderList)
    }

})


// **Function to clear the input fields after the order is finished
function erasingInputFilds () 
{
    let numberInputs = document.querySelectorAll("input[type='number']")
    document.getElementById('table-number').value = ''
    console.log(numberInputs)

    numberInputs.forEach((el) => {
        if(el.value >= 0)
        {
            el.value = ''
        }
    })
}


// !Warning
// ?Questions
// *Todo / refactor

