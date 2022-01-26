const form = document.querySelector('form');
const input = document.querySelector('input');

input.addEventListener('change', () => {
    form.submit();
});