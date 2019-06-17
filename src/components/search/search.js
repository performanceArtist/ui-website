export default function updateSearch() {
  const elements = document.querySelector('.search input');

  elements.addEventListener('input', function onSearchInput() {
    if (/^[a-zA-Z]*$/.test(this.value)) {
      this.style.backgroundColor = '';
      this.style.color = '';
    } else {
      this.style.backgroundColor = '#d28847';
      this.style.color = 'white';
      this.value = 'Invalid';
    }
  });

  Array.prototype.forEach.call(elements, element =>
    element.dispatchEvent('input')
  );
}
