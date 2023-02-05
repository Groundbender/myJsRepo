"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt(
  'Какие типы экранов нужно разработать? (пример: "Простые, Сложные, Интерактивные")'
);
let screenPrice = +prompt("Сколько будет стоить данная работа?");

let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

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

const getAllServicePrices = function (add1, add2) {
  return add1 + add2;
};
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice() {
  return screenPrice + allServicePrices;
}
fullPrice = getFullPrice();

function getTitle(str) {
  let text = str.trim();
  let result = text.slice(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  return result;
}
title = getTitle(title);

function getServicePercentPrices() {
  return fullPrice - fullPrice * (rollback / 100);
}
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));

console.log(screens.toLowerCase().split(", "));

console.log(getServicePercentPrices());
