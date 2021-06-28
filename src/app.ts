const changeClassName = (input: HTMLInputElement): void => {
  input.classList.add('invalid');
  input.classList.remove('valid');
};

const setErrMessage = (input: HTMLInputElement, errMessage: string): void => {
  const errContainer = input.nextElementSibling
    .nextElementSibling as HTMLSpanElement;
  errContainer.dataset.error = errMessage;
};

const saveLoggedUser = () => {
  if (localStorage.getItem('isLogged')) {
    let isLogged: boolean = JSON.parse(localStorage.getItem('isLogged'));
    isLogged = true;
    localStorage.setItem('isLogged', JSON.stringify(isLogged));
  } else {
    localStorage.setItem('isLogged', JSON.stringify(true));
  }
};

if (localStorage.getItem('isLogged')) {
  console.log('logged');
} else {
  console.log('logged out');
}
