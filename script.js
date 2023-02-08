"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let price = 0;

    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    }

    do {
      price = prompt("Сколько это будет стоить?");
    } while (!isNumber(price));
    sum += +price;
  }

  return sum;
};

function getFullPrice() {
  return +screenPrice + allServicePrices;
}

function getServicePercentPrices() {
  return fullPrice - fullPrice * (rollback / 100);
}

function getTitle(str) {
  let text = str.trim();
  let result = text.slice(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  return result;
}
const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price <= 30000 && price > 15000) {
    return "Даем скидку в 5%";
  } else if (price <= 15000 && price > 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);

console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice));

console.log(servicePercentPrice);
