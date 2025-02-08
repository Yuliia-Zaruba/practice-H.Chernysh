import { STORAGE_KEY, USER_DATA } from './constans';
import { refs } from './refs';
const { email, password, button } = refs.loginForm;

export function onLoginFormSubmit(evt) {
  evt.preventDefault();
  if (
    email.value !== USER_DATA.email ||
    password.value !== USER_DATA.password
  ) {
    alert('Wrong data!');
    return;
  }

  if (button.textContent === 'Logout') {
    button.textContent = 'Login';
    email.disabled = false;
    password.disabled = false;
    localStorage.removeItem(STORAGE_KEY);
    evt.target.reset();
    return;
  }

  const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON, stringify(userData));

  button.textContent = 'Logout';
  email.disabled = true;
  password.disable = true;
}

export function initPage() {
  try {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!storageData) {
      return;
    }

    email.value = storageData.email;
    password.value = storageData.password;
    button.textContent = 'Logout';
    email.disabled = true;
    password.disable = true;
  } catch (err) {
    console.log(err);
  }
}
