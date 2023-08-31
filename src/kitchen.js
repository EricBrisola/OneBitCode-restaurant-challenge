let allOrders = JSON.parse(localStorage.getItem('orders')) || []
console.log(allOrders)

const renderOrders = () => 
{
  const orders = document.querySelector('#orders-list')
  const ordersTitle = document.querySelector('#orders-title')
  console.log(ordersTitle.textContent)
  if(allOrders.length == 0)
  {
    ordersTitle.textContent = 'No orders made'
  }
  else
  {
    allOrders.forEach((el) => 
    {
      const order = document.createElement('li')
      const delButton = document.createElement('button')
      order.textContent = 'Table: '+ el.table  + ' | item: ' + el.item + ' | Quantity: ' + el.quantity
      order.setAttribute('class', 'order-items')
      orders.appendChild(order)
      //delButton.setAttribute('textContent', 'delete') 
      delButton.textContent = 'Delete'
      delButton.setAttribute('class', 'delBtnStyle')
      order.appendChild(delButton)
    })
  }
}

renderOrders()