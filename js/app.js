const inputKmElement = document.querySelector('input[name="user-km"]');
const selectAgeElement = document.querySelector('select[name="user-age"]');

const buttonElement = document.querySelector('button');
console.log(inputKmElement, selectAgeElement, buttonElement);

buttonElement.addEventListener('click', function () {
    console.log(inputKmElement.value, selectAgeElement.value);
});