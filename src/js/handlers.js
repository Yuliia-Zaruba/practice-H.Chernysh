export function onLoginFormSubmit(evt) {
  const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON, String);
}
