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
  return (!isNaN(parseFloat(num)) && isFinite(num)).trim();
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");
  screenPrice = prompt("Сколько будет стоить данная работа?");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    }

    let priceAll;
    do {
      priceAll = prompt("Сколько это будет стоить?");
    } while (!isNumber(priceAll));
    sum += +priceAll;
  }

  return sum;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

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

function getFullPrice() {
  return screenPrice + allServicePrices;
}

function getTitle(str) {
  let text = str.trim();
  let result = text.slice(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  return result;
}

function getServicePercentPrices() {
  return fullPrice - fullPrice * (rollback / 100);
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice));

console.log(screens.toLowerCase().split(", "));

console.log(servicePercentPrice);
