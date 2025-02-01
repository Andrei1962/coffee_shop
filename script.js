const burger = document.getElementById("burger");               /* создаем элемент по id    */

/* по клику - addEventListener("click") - меняет класс - classList.toggle("header__burger_active") -  */
burger.addEventListener("click", burger.classList.toggle("header__burger_active"));

const nav = document.getElementById("nav");
nav.addEventListener("click", nav.classList.toggle("navigation__active"));

const submit = document.getElementById("submit");
/* по клику сбрасываем отправку формы - preventDefault */
submit.addEventListener("click", submit.preventDefault());

const error = document.getElementById("error");
error.addEventListener("/*click*/", error.classList.add("form__fields-error_active"));
error.addEventListener("click", error.preventDefault());

const success = document.getElementById("success");
success.addEventListener("click", success.preventDefault());

const name = document.getElementById("name");
name.addEventListener("click", name.preventDefault());
name.setAttribute('required', '');

const message = document.getElementById("message");
message.addEventListener("click", message.preventDefault());
message.setAttribute('required', '');

const email = document.getElementById("email");
email.addEventListener("click", email.preventDefault());
email.setAttribute('required', '');

if (name.trim() === " " && email.trim() === " " && message.trim() === " ") {
  error.classList.add("form__fields-error_active");
}
else {
  success.classList.add("wrapper-success_active");/* устанавливаем класс*/
  error.classList.remove("form__fields-error_active");/*удаляем класс*/
  document.getElementById('name').value = '';/* значение по id обнуляем */
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
function greet() {
  success.classList.remove("wrapper-success_active");
}
const timeoutID = setTimeout(greet, 3000);