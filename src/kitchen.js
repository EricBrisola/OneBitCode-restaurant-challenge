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
    allOrders.forEach(element => 
      {
        
      })
  }
}

renderOrders()