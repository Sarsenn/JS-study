
let celsia = parseInt(prompt('Сколько градусов на улице?'));
alert(`Температура в градусах Фаренгейта: ${(celsia * 9/5 + 32)}`);
alert(`Температура в градусах Кельвина:${celsia + 273.15}`);


let desposite = parseInt(prompt('Сколько положите на депозит?'));
const RATE = 0.5
const year = 365;
const year2 = 365 * 2;
const year3 = 365 * 3;
alert(`За год вы накопите: ${(50000 * 0.5 * year)/360}`)
