'use strict';

const movieEl = document.getElementById('movie');

const selectSeatEl = document.getElementById('selectSeat');

const totalSeatEl = document.getElementById('totalSeat');

const totalCostEl = document.getElementById('totalCost');

// Global variable

let TicketPrice = Number(movieEl.value);
let TotalCost = 0;
let totalSeat = 0;

// function

function UpdateCountAndPrice(){
    totalSeatEl.textContent = totalSeat;
    totalCostEl.textContent = TotalCost;

}

// Add event listeners

movieEl.addEventListener('change', (e) => {
    TicketPrice = Number(movieEl.value);
})

selectSeatEl.addEventListener('click', (e) => {
    if (!e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        totalSeat = document.querySelectorAll('.row .seat.selected').length;

        TotalCost = TicketPrice * totalSeat;

        UpdateCountAndPrice()
    }
})