import Countdownm from "./countdown.js";

const diasPassados = new Countdownm("23 December 2023 23:00:00 GMT-0300");
console.log(diasPassados.year);

let month = 0;

const $ = document.querySelector.bind(document);

function diasMes() {
  diasPassados.total.days >= 29 ? month++ : null;
}
function diaDoMes(mes, ano) {
  let data = new Date(mes, ano, 0);
  return data.getDate();
}

while (month < diasPassados.total.month) {
  diasMes();
}

const meses = document.querySelector(".meses-text");
const mes = document.querySelector(".meses-content");
const ano = document.querySelector(".anos-content");

console.log(diasPassados.year);

const data = new Date();
console.log(diaDoMes(data.getMonth(), data.getFullYear()), "?");
console.log(data.getFullYear());

setInterval(() => {
  $(".anos").innerText = `${
    diasPassados.year <= 1 ? ano.classList.add("hidden") : diasPassados.year
  }`;
  $(".anos-text").innerText = `${diasPassados.year >= 2 ? "anos" : ""}`;

  $(".meses").innerText = `${month <= 1 ? "" : diasPassados.total.month}`;

  $(".meses-text").innerText = `${month >= 2 ? "meses" : ""}`;
  $(".mes-text").innerText = `${month == 0 ? mes.classList.add("hidden") : ""}`;
  $(".dias").innerText = `${
    diasPassados.total.days % diaDoMes(data.getMonth() - 1, data.getFullYear())
  }`;
  $(".dias-text").innerText = `${
    diasPassados.total.days == 1 ? "dia" : "dias"
  }`;
  $(".horas").innerText = `${diasPassados.total.hours}`;
  $(".horas-text").innerText = `${
    diasPassados.total.hours == 1 ? "hora" : "horas"
  }`;
  $(".minutos").innerText = `${diasPassados.total.minutes}`;
  $(".minutos-text").innerText = `${
    diasPassados.total.minutes == 1 ? "minuto" : "minutos"
  }`;
  $(".segundos").innerText = `${diasPassados.total.seconds}`;
  $(".segundos-text").innerText = `${
    diasPassados.total.seconds == 1 ? "segundo" : "segundos"
  }`;
  diasPassados.redirectToPage("https://www.twitch.tv/pazpeaceful");
}, 1000);
