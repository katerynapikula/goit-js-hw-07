document.querySelector('.login-form').addEventListener('submit', handleSubmit);
function  handleSubmit(event) {
    event.preventDefault(); 
    
     const formElements = event.currentTarget.elements;

  const email = formElements.email.value.trim(); 
  const password = formElements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return; 
  }

  const formData = { 
    email,
    password,
  };

  console.log(formData);

  event.currentTarget.reset(); 
};


 