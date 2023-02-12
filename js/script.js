"use strict";

const title = document.getElementsByTagName("h1")[0];

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[0];

const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");
const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];
let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    // appData.blockStart();
    appData.addTitle();
    startBtn.addEventListener("click", appData.start);

    buttonPlus.addEventListener("click", appData.addScreenBlock);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.addScreens();
    appData.addServices();

    appData.addPrices();
    // appData.getServicePercentPrices();
    // appData.logger();
    appData.showResult();
  },
  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
  },

  isString: function (str) {
    return isFinite(str);
  },

  addScreens: function () {
    const screens = document.querySelectorAll(".screen");
    let flag = true;
    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      if (input.value !== "" && select.value !== "") {
        if (flag) {
          appData.screens.push({
            id: index,
            name: selectName,
            price: +select.value * +input.value,
            count: +input.value,
          });
        }
        flag = true;
      } else {
        flag = false;
        appData.screens.splice(0);
      }
    });
    console.log(appData.screens);
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    cloneScreen.querySelector("input[type='text']").value = "";
    //  screens[screens.length - 1].after(cloneScreen)
    document
      .querySelector(".screen")
      .insertAdjacentElement("afterend", cloneScreen);
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;

    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);

    let screenNum = 0;
    screenNum = appData.screens.reduce(
      (accum, currentValue) => accum + Number(currentValue.count),
      0
    );
    totalCount.value = screenNum;
    console.log(screenNum);
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
  // blockStart: function () {
  //   let select = document.querySelector("select[name='views-select']");
  //   let input = document.querySelector("input[type=text]");

  //   function checkFilled() {
  //     if (select.value === "" || input.value === "") {
  //       startBtn.disabled = true;
  //     } else {
  //       startBtn.disabled = false;
  //     }
  //   }
  //   select.addEventListener("change", function () {
  //     checkFilled();
  //   });
  //   input.addEventListener("change", function () {
  //     checkFilled();
  //   });
  // },
};

inputRange.addEventListener("input", function () {
  inputRangeValue.textContent = inputRange.value;
  appData.rollback = inputRange.value;
});
console.log(appData);
console.log(startBtn);

appData.init();

console.log(screens.length);
