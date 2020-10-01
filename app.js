'use strict';

// use for comments or /* ... */ for multiple lines

// adding date 
let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

console.log('Here\'s a hidden message');