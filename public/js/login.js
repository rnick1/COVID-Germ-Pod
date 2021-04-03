<<<<<<< HEAD
const loginFormHandler = async (event) => 
  event.preventDefault();

  const email = document.querySelector('#emailplaceholder').value.trim();
  const password = document.querySelector('#passwordplaceholder').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Incorrect email or password combination. Please try again.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
=======
const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('password-login').value.trim();

    if(email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {'Content-Type': 'application/json' },
        });

        if(response.ok) {
            // if successful, redirect to profile page
            document.location.replace('/profile');
        } else {
            alert(response.statusText)
        }
    }
}

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(name && password) {
        const response = await fetch ('/api/users', {
            method: 'POST',
            body: JSON.stringify({name, email, password }),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('.profile');
        } else {
            alert(response.statusText);
        }
    }

}

document
    .querySelector('login-form')
    .addEventListener('submit', loginFormHandler);
document
    .querySelector('signup-form')
    .addEventListener('submit', signupFormHandler);
>>>>>>> 575925f5aa54666b14706ee9841ca77e675c8f24
