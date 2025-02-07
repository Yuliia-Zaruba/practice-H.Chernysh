 // Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабмите
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// Недоступними зміни.

import { initPage, onLoginFormSubmit } from "./handlers";
import { refs } from "./refs";

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними,
// повідомляти про помилку.
document.addEventListener('DOMContentLoaded',)initPage);

refs.onLoginForm.addEventListener('submit', onLoginFormSubmit);



// const USER_DATA = {
//   email: "user@mail.com",
//   password: "secret",
// };

// <form id="login-form">
//       <input type="email" name="email" />
//       <input type="password" name="password" />
//       <button name="button" type="submit">Login</button>
//     </form>
