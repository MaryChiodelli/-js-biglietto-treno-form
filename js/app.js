const inputNameElement = document.getElementById('user-name');
const inputKmElement = document.querySelector('input[name="user-km"]');
const selectAgeElement = document.querySelector('select[name="user-age"]');
const sectionTicketElement = document.querySelector('.ticket');
const tableElement = document.querySelector('.ticket-info');

console.dir(sectionTicketElement);

const buttonElement = document.querySelector('button');

const PRICE_PER_KM = 0.21;
const DISCOUNT_UNDER_18 = 0.2;
const DISCOUNT_OVER_65 = 0.4;

buttonElement.addEventListener('click', function () {
    const userName = inputNameElement.value;
    const userKm = parseFloat(inputKmElement.value);
    
    if ( userName === '' || userName === ' ' || userKm <= 0 ) {
        alert('I dati inseriti non sono corretti.')
    } else {
        // calcolare il prezzo del biglietto base
        const basePrice = userKm * PRICE_PER_KM;
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
            ticketTipe = 'Biglietto Standard';
        }
    
        sectionTicketElement.style.display = 'block';
    
        tableElement.innerHTML = `
        <td>${userName}</td>
        <td>${ticketTipe}</td>
        <td>5</td>
        <td>92911</td>
        <td>${finalPrice.toFixed(2)} €</td>`;
    }
});