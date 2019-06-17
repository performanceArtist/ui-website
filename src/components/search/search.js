export default function updateSearch() {
  const elements = document.querySelectorAll('.search input');

  function handleInput() {
    if (/^[a-zA-Z]*$/.test(this.value)) {
      this.classList.remove('search_invalid');
    } else {
      this.classList.add('search_invalid');
      this.value = 'Invalid';
    }
  }

  Array.prototype.forEach.call(elements, element => {
    element.addEventListener('input', handleInput);
  });

  Array.prototype.forEach.call(elements, element => {
    handleInput.call(element);
  });
}
