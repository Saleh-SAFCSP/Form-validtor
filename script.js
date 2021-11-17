const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const check1 = checkLength(username, 3);
  const check2 = checkLength(password, 6);
  const check3 = checkLength(password2, 6);
  const check4 = checkMatch(password, password2);

  if (check1 && check2 && check3 && check4) {
    Swal.fire({
      icon: 'success',
      title: 'Register without any issue',
      heightAuto: false,
    });
  }
});

const checkLength = (input, length) => {
  if (input.value.length < length) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${input.id} is less than ${length}`,
      heightAuto: false,
    });
    return false;
  } else {
    return true;
  }
};

const checkMatch = (input1, input2) => {
  if (input1.value != input2.value) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Your password dosn't match`,
      heightAuto: false,
    });

    return false;
  } else {
    return true;
  }
};
