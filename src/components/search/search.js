function makeSearch(element) {
  const input = element.querySelector('input');

  function handleInput() {
    if (/^[a-zA-Z]*$/.test(input.value)) {
      input.classList.remove('search_invalid');
    } else {
      input.classList.add('search_invalid');
      input.value = 'Invalid';
    }
  }

  input.addEventListener('input', handleInput);
  handleInput();
}

document.querySelectorAll('.search').forEach(makeSearch);
