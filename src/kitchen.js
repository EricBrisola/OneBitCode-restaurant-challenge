//getting orders from local storage
let allOrders = JSON.parse(localStorage.getItem('orders')) || []

//function created to render the orders from allOrders variable in a list way
const renderOrders = () => 
{
  let i = 0
  const orders = document.querySelector('#orders-list')
  const ordersTitle = document.querySelector('#orders-title')
  if(allOrders.length == 0)
  {
    ordersTitle.textContent = 'No orders made'
  }
  else
  {
    allOrders.forEach((el) => 
    {
      const order = document.createElement('li')
      const paragraph = document.createElement('p')

      paragraph.textContent = 'n.º '+ el.table + ' | item: ' + el.item + ' | Quantity: ' + el.quantity

      order.appendChild(paragraph)
      order.setAttribute('class', 'order-items')
      order.setAttribute('data', i)
      orders.appendChild(order) 

      const delButton = document.createElement('button')
      delButton.textContent = 'X'
      delButton.setAttribute('class', 'delBtnStyle')
      delButton.addEventListener('click', deleteItemBtn)

      const doneButton = document.createElement('button')
      doneButton.textContent = '✓'
      doneButton.setAttribute('class', 'doneBtnStyle')
      doneButton.addEventListener('click', crossOutItem)

      const spanButtons = document.createElement('span')
      spanButtons.setAttribute('class', 'spanButtons')
      spanButtons.appendChild(delButton)
      spanButtons.appendChild(doneButton)

      //order.appendChild(delButton)
      order.appendChild(spanButtons)
      i++
    })
  }
}

// function to delete an order from the list
function deleteItemBtn (btn)
{
  const itemToDelete = btn.currentTarget.parentNode.parentNode

  let index = itemToDelete.getAttribute('data')
  itemToDelete.remove()
  allOrders.splice(index, 1)
  updateOrders()
  updateIndexes()
}

// function to cross out an order from the list
function crossOutItem (btn){
  const itemToCrossOut = btn.currentTarget.parentNode.parentNode.firstChild
  itemToCrossOut.classList.toggle("crossedOut")
}

// function to update the orders in the local storage
function updateOrders () {
  localStorage.setItem('orders', JSON.stringify(allOrders))
}

// function to update the indexes of the orders after deleting one
function updateIndexes () {
  let newIndex = 0
  const allOrdersList = document.querySelectorAll('li')
  allOrdersList.forEach((element) => 
  {
    const eachOrderIndex = element.getAttribute('data')
    element.removeAttribute('data')
    element.setAttribute('data', newIndex)
    //element.setAttribute
    console.log(eachOrderIndex)
    newIndex++
  })
  console.log(allOrdersList)
}

renderOrders()


