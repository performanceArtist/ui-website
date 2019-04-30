export default function updateSearch() {
  document.querySelector('.search input').addEventListener('input', function () {
    if (/^[a-zA-Z]*$/.test(this.value)) {
      this.style.backgroundColor = '';
      this.style.color = '';
    } else {
      this.style.backgroundColor = '#d28847';
      this.style.color = 'white';
      this.value = 'Invalid';
    }
  });
}
