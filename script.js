'use strict';

// const heading = document.querySelector('h1');
// const thirdItem = document.querySelector('ul').lastElementChild;
//
//
// thirdItem.innerHTML = 'Jacques';
//
// // ---------- Selecting by Tag name ----------
// const tag = document.getElementsByTagName('li');
// tag[2].style.color = 'purple';
// console.log(tag[0]);
// console.log(tag.length);
//
// // ---------- Selecting by Class name ----------
//
// const classBtn = document.getElementsByClassName('btn');
// console.log(classBtn);
//
// // ---------- Selecting by ID name ----------
//
// const id = document.getElementById('title');
// id.style.color = 'green';
// id.innerHTML = 'Bye Bye';
//
// // ---------- Selecting by querySelector ----------
//
// // Element: h1
// const elementQuery = document.querySelector('h1');
//
// // ID: #title
// const idQuery = document.querySelector('#title');
//
// // Class: .item
// const classQuery = document.querySelector('.item');
//
// // Attributes
// const attriQuery = document.querySelector('li a');
//
// // Combining
// const comb = document.querySelector('li.item');
//
// const google = document.querySelector('.item a');
// google.style.color = 'yellow';
//
// const btn = document.querySelector('.btn');
//
// btn.style.backgroundColor = 'yellow';

// ---------- Adding ClassList ----------

// const heading = document.querySelector('h1');
// heading.classList.add('huge');

// ---------- Changing the Content of elements ----------

// const heading = document.querySelector('h1');
// heading.innerHTML = '<em>Good Bye</em>';

// ---------- Changing or Adding Attributes to elements ----------

const google = document.querySelector('a');

console.log(google.getAttribute('href'));
google.setAttribute('href', 'https://www.jacquestill.com');
console.log(google.getAttribute('href'));
