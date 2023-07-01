const registrationHandler = async event => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      const {
        message
      } = await response.json();
      // eslint-disable-next-line no-undef
      showAlert({
        target: 'registration-alert',
        message,
        type: 'danger',
      });
    }
  }
};

document
  .querySelector('.registration-form')
  .addEventListener('submit', registrationHandler);