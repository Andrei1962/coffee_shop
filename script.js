let burger = document.querySelector('#burger')  
let nav = document.querySelector('#nav')   
burger.addEventListener('click', () => {  
  nav.classList.toggle('navigation__active');
  burger.classList.toggle('header__burger_active');    
})

let btnForm = document.querySelector('#submit')  
let success = document.querySelector('#success') 
let error = document.querySelector('#error')  
let inputName = document.querySelector('#name')
let inputEmail = document.querySelector('#email')
let textareaMessage = document.querySelector('#message') 

btnForm.addEventListener('click', (event) => {
  event.preventDefault()

  if (inputName.value === "" || inputEmail.value === "" || textareaMessage.value === "") {
    error.classList.add('form__fields-error_active')  
    setTimeout(() => {
      error.classList.remove('form__fields-error_active')
    }, 1000)                                                      
  } else {
    success.classList.add('wrapper-success_active')      
    error.classList.remove('form__fields-error_active')   /*удаляем класс*/
    inputName.value = ''                            /* значение по id обнуляем */
    inputEmail.value = ''       
    textareaMessage.value = ''
    setTimeout(() => {
      success.classList.remove('wrapper-success_active');
    },3000)
  }
})