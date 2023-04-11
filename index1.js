/* У нас есть элементы, в которых записаны цены айтимов из корзины. Нужно записать их все в переменные. */
let feed1 = document.getElementById("feed_price1");
let feed2 = document.getElementById("feed_price2");
let feed3 = document.getElementById("feed_price3");
let feed4 = document.getElementById("feed_price4");
let feed5 = document.getElementById("feed_price5");
let feed6 = document.getElementById("feed_price6");
/* Взять значение из них (метод innerHTML) */
/* Сложить значения переменных */
/* Привести значение переменных к числу (вспомним про унарный плюс) */
let totalsam =
	+feed1.innerHTML +
	+feed2.innerHTML +
	+feed3.innerHTML +
	+feed4.innerHTML +
	+feed5.innerHTML +
	+feed6.innerHTML;

/* Вставить полученное значение в элемент (предварительно найти его и записать в переменную) */
let total = document.querySelector(".total");

document.addEventListener("DOMContentLoaded", () => {
	total.innerHTML = totalsam;
});

/* Создать функцию, которая будет вычитать 20%  от общей стоимости */
function sailsam() {
	const discont1 = feed1.innerHTML * 0.8;
	feed1.innerHTML = discont1;
	console.log(discont1);
	const discont2 = feed2.innerHTML * 0.8;
	feed2.innerHTML = discont2;
	const discont3 = feed3.innerHTML * 0.8;
	feed3.innerHTML = discont3;
	const discont4 = feed4.innerHTML * 0.8;
	feed4.innerHTML = discont4;
	const discont5 = feed5.innerHTML * 0.8;
	feed5.innerHTML = discont5;
	const discont6 = feed6.innerHTML * 0.8;
	feed6.innerHTML = discont6;
	const disconttotal =
		+discont1 + +discont2 + +discont3 + +discont4 + +discont5 + +discont6;
	console.log(disconttotal);
	total.innerHTML = disconttotal;
}

/* Добавить метод onclick или addEventListener на кнопку ”Использовать купон на 20%” */
/* Добавила в HTML onClick="this.disabled='true'", чтобы кнопка сработала только один раз. По-другому не получалось. */
function buttonResult() {
	const button = document.getElementById("buttontotal");
	button.addEventListener("click", sailsam);
}
buttonResult();
