"use strict";

const title = document.getElementsByTagName("h1")[0];

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

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
const checks = document.querySelectorAll("input[type=checkbox]");
const cmsCheck = document.querySelector("#cms-open");

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
    this.addTitle();
    startBtn.addEventListener("click", this.start);
    startBtn.addEventListener("click", this.blockInputs);

    buttonPlus.addEventListener("click", this.addScreenBlock);
    inputRange.addEventListener("input", this.getRollback);
    resetBtn.addEventListener("click", this.reset);
    cmsCheck.addEventListener("click", this.getCmsBlock);
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
    total.value = this.screenPrice;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },

  isString: function (str) {
    return isFinite(str);
  },

  addScreens: function () {
    const screens = document.querySelectorAll(".screen");
    let flag = true;
    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      if (input.value !== "" && select.value !== "") {
        if (flag) {
          this.screens.push({
            id: index,
            name: selectName,
            price: +select.value * +input.value,
            count: +input.value,
          });
        }
        flag = true;
      } else {
        flag = false;
        this.screens.splice(0);
      }
    });
    console.log(this.screens);
  },
  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    screens = document.querySelectorAll(".screen");
    const cloneScreen = screens[0].cloneNode(true);
    cloneScreen.querySelector("input").value = "";
    screens[screens.length - 1].after(cloneScreen);
    // document
    //   .querySelector(".screen")
    //   .insertAdjacentElement("afterend", cloneScreen);
    // console.log(screens.length);
    // console.log(screens);
    startBtn.addEventListener("click", () => {
      cloneScreen.querySelector("input").disabled = true;
      cloneScreen.querySelector("select").disabled = true;
    });
    resetBtn.addEventListener("click", () => {
      cloneScreen.querySelector("input").disabled = false;
      cloneScreen.querySelector("select").disabled = false;
      cloneScreen.innerHTML = "";
    });
  },

  addPrices: function () {
    this.rollback = Number(inputRange.value);

    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }
    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.servicePercentPrice =
      this.fullPrice - this.fullPrice * (this.rollback / 100);

    let screenNum = 0;
    screenNum = this.screens.reduce(
      (accum, currentValue) => accum + Number(currentValue.count),
      0
    );
    totalCount.value = screenNum;
    console.log(screenNum);
  },

  logger: function () {
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
    console.log(this.screens);
  },
  getRollback: function () {
    inputRangeValue.textContent = inputRange.value + "%";
    totalCountRollback.value =
      appData.fullPrice - appData.fullPrice * (inputRange.value / 100);
  },
  blockInputs: function () {
    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      select.disabled = true;
      input.disabled = true;
    });
    startBtn.style.display = "none";
    resetBtn.style.display = "block";
  },
  reset: function () {
    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      select.disabled = false;
      input.disabled = false;
      select.value = "";
      input.value = "";
    });
    document.querySelectorAll("input[type=checkbox]").forEach((check) => {
      check.checked = false;
    });
    startBtn.style.display = "block";
    resetBtn.style.display = "none";

    document.querySelectorAll(".total-input").forEach((item) => {
      item.value = "0";
    });
    document.querySelector(".hidden-cms-variants").style.display = "none";
    document.querySelector(
      ".hidden-cms-variants>.main-controls__input"
    ).style.display = "none";
    document.querySelector(
      ".hidden-cms-variants>.main-controls__select>select"
    ).value = "";
    inputRange.value = "0";
    inputRangeValue.textContent = inputRange.value;
    appData.screens = [];
    appData.screenPrice = 0;
    appData.adaptive = true;
    appData.rollback = 0;
    appData.servicePricesPercent = 0;
    appData.servicePricesNumber = 0;
    appData.fullPrice = 0;
    appData.servicePercentPrice = 0;
    appData.servicesPercent = {};
    appData.servicesNumber = {};
  },

  getCmsBlock: function () {
    const cmsVariants = document.querySelector(".hidden-cms-variants");
    const cmsSelect = document.querySelector(
      ".hidden-cms-variants>.main-controls__select>select"
    );
    if (cmsCheck.checked) {
      cmsVariants.style.display = "flex";
    } else {
      cmsVariants.style.display = "none";
    }
    cmsVariants.addEventListener("change", () => {
      let totalSum;
      if (cmsSelect.value === "other") {
        document.querySelector(
          ".hidden-cms-variants>.main-controls__input"
        ).style.display = "block";
      } else {
        document.querySelector(
          ".hidden-cms-variants>.main-controls__input"
        ).style.display = "none";
      }
      if (cmsSelect.value === "50") {
        totalSum =
          appData.fullPrice + appData.fullPrice * Number(cmsSelect.value / 100);
        console.log(totalSum);
      }
    });
  },
};

// console.log(appData);
// console.log(startBtn);

appData.init();

// console.dir(startBtn);
// console.dir(resetBtn);
// console.log(otherItemsPercent);
// console.log(otherItemsNumber);

console.log(screens.length);
