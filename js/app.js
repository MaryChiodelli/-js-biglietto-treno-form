const inputNameElement = document.getElementById('user-name');
const inputKmElement = document.querySelector('input[name="user-km"]');
const selectAgeElement = document.querySelector('select[name="user-age"]');
const tableElement = document.querySelector('.ticket-info');

console.log(tableElement);

const buttonElement = document.querySelector('button');

const PRICE_PER_KM = 0.21;
const DISCOUNT_UNDER_18 = 0.2;
const DISCOUNT_OVER_65 = 0.4;

buttonElement.addEventListener('click', function () {
    // calcolare il prezzo del biglietto base
    const basePrice = parseFloat(inputKmElement.value) * PRICE_PER_KM;
    let finalPrice;
    let ticketTipe;

    if (selectAgeElement.value === 'under-18') {
        // applicare sconto del 20%
        finalPrice = basePrice * (1 - DISCOUNT_UNDER_18);
        ticketTipe = 'Biglietto Ridotto under 18';
    } else if (selectAgeElement.value === 'over-65') {
        // applicare sconto del 40%
        finalPrice = basePrice * (1 - DISCOUNT_OVER_65);
        ticketTipe = 'Biglietto Ridotto over 65';
    } else {
        finalPrice = basePrice;
        ticketTipe = 'Biglietto Standard'
    }

    tableElement.innerHTML = `
    <td>${inputNameElement.value}</td>
    <td>${ticketTipe}</td>
    <td>5</td>
    <td>92911</td>
    <td>${finalPrice} €</td>`;
});