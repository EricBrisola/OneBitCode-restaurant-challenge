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
      order.textContent = 'n.º '+ el.table + ' | item: ' + el.item + ' | Quantity: ' + el.quantity
      order.setAttribute('class', 'order-items')
      order.setAttribute('data', i)
      orders.appendChild(order) 

      const delButton = document.createElement('button')
      delButton.textContent = 'X'
      delButton.setAttribute('class', 'delBtnStyle')
      delButton.addEventListener('click', deleteItemBtn)
      order.appendChild(delButton)
      i++
    })
  }
}

function deleteItemBtn (btn)
{
  const itemToDelete = btn.currentTarget.parentNode
  
  let index = itemToDelete.getAttribute('data')
  itemToDelete.remove()
  allOrders.splice(index, 1)
  updateOrders()
  updateIndexes()
}

function updateOrders () {
  localStorage.setItem('orders', JSON.stringify(allOrders))
}


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


