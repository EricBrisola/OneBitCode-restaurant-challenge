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
      order.textContent = 'Item: ' + el.item + ' | Quantity: ' + el.quantity
      order.setAttribute('class', 'order-items')
      order.setAttribute('data', i)
      orders.appendChild(order) 

      const delButton = document.createElement('button')
      delButton.textContent = 'Delete'
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
  itemToDelete.remove()

  let index = document.querySelector('data')
  allOrders.splice(index, 1)
  updateOrders()
}

function updateOrders() {
  localStorage.setItem('orders', JSON.stringify(allOrders))
}

renderOrders()

