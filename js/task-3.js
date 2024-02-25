const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', handleInput);
function handleInput (event) {
  const trimmedValue = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedValue || 'Anonymous';
};






