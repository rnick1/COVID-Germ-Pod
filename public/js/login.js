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
