//-------------------------------------------functions----------------------------------//
const resetInputs = () => 
{
  // reset both user and password inputs after a sucesseful or a failed login
  document.querySelector('#admin').value = ''
  document.querySelector('#password').value = ''
}

const login = () => 
{
  //checks if user and password inputs match with the expected values and redirects it to the kitchen page
  const userID = document.querySelector('#admin').value
  const userPassword = document.querySelector('#password').value
  const kitchenPage = 'kitchen.html'
  const loginInputs = document.querySelectorAll('.login-inputs')

  if(userID === 'admin' && userPassword === 'admin')
  {
    window.location.href = kitchenPage
    resetInputs()
  }
  else
  {
    //changing inputs colors if they're incorrect
    loginInputs.forEach((el) => el.classList.toggle('login-inputs-incorrect'))
    setTimeout(() => alert('incorrect user or password'), 500)
    resetInputs()
  }
}

//adding click event on sign in button
const signInBtn = document.querySelector('#login-btn')
signInBtn.addEventListener('click', login)