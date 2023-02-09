"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttons = document.getElementsByClassName("handler_btn");
const addButton = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNum = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector(
  ".rollback>.main-controls__range>input"
);
const spanRange = document.querySelector(
  ".rollback>.main-controls__range>.range-value"
);
const inputs = document.getElementsByClassName("total-input");
let screens = document.querySelectorAll(".screen");

console.log(title);
console.log(buttons);
console.log(addButton);
console.log(otherItemsNum);
console.log(otherItemsPercent);
console.log(inputRange);
console.log(spanRange);
console.log(inputs[0]);
console.log(inputs[1]);
console.log(inputs[2]);
console.log(inputs[3]);
console.log(inputs[4]);
console.log(screens);

// const appData = {
//   title: "",
//   screens: [],
//   screenPrice: 0,
//   adaptive: true,
//   rollback: 10,
//   allServicePrices: 0,
//   fullPrice: 0,
//   servicePercentPrice: 0,
//   services: {},
//   start: function () {
//     appData.asking();
//     appData.addPrices();
//     appData.getFullPrice();
//     appData.getServicePercentPrices();
//     appData.getTitle(appData.title);
//     appData.logger();
//   },
//   isNumber: function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
//   },
//   isString: function (str) {
//     return isFinite(str);
//   },
//   asking: function () {
//     // appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
//     do {
//       appData.title = prompt(
//         "Как называется ваш проект?",
//         "Калькулятор верстки"
//       );
//     } while (appData.isString(appData.title));

//     for (let i = 0; i < 2; i++) {
//       let name;
//       do {
//         name = prompt("Какие типы экранов нужно разработать?");
//       } while (appData.isString(name));
//       let price = 0;

//       do {
//         price = prompt("Сколько будет стоить данная работа?");
//       } while (!appData.isNumber(price));

//       appData.screens.push({ id: i, name: name, price: price });
//     }

//     for (let i = 0; i < 2; i++) {
//       let name;
//       do {
//         name = prompt("Какой дополнительный тип услуги нужен?");
//       } while (appData.isString(name));
//       let price = 0;

//       do {
//         price = prompt("Сколько это будет стоить?");
//       } while (!appData.isNumber(price));

//       appData.services[name] = +price;
//     }

//     appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//   },
//   addPrices: function () {
//     for (let screen of appData.screens) {
//       appData.screenPrice += +screen.price;
//     }
//     for (let key in appData.services) {
//       appData.allServicePrices += appData.services[key];
//     }
//   },

//   getFullPrice: function () {
//     appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
//   },

//   getServicePercentPrices: function () {
//     appData.servicePercentPrice =
//       appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
//   },

//   getTitle: function (str) {
//     let text = str.trim();
//     let result =
//       text.slice(0, 1).toUpperCase() + str.substring(1).toLowerCase();
//     appData.title = result;
//   },

//   getRollbackMessage: function (price) {
//     if (price > 30000) {
//       return "Даем скидку в 10%";
//     } else if (price <= 30000 && price > 15000) {
//       return "Даем скидку в 5%";
//     } else if (price <= 15000 && price > 0) {
//       return "Скидка не предусмотрена";
//     } else {
//       return "Что-то пошло не так";
//     }
//   },

//   logger: function () {
//     console.log(appData.fullPrice);
//     console.log(appData.servicePercentPrice);
//     console.log(appData.screens);
//   },
// };

// appData.start();
