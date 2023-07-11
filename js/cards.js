const cards = [
	"../img/ёжик.png",
	"../img/карыч.png",
	"../img/копатыч.png",
	"../img/лосяш.png",
	"../img/нюша.png",
	"../img/нюша2.png",
	"../img/пин.png",
	"../img/совунья.png",
	"../img/рубашка.png",
];

const back = [
	"../img/back.png",
	"../img/back2.png",
];

export class Card {
	img;
	back = cards[8];
	status = false;
	constructor(img) {
		this.img = img;
	}
}

export const createCards = (lvl) => {
	const array = [];
	for (let i = 0; i < lvl / 2; i++) {
		array.push(new Card(cards[i]));
		array.push(new Card(cards[i]));
	}

	for (let i = 0; i < lvl; i++) {
		let a = array[i];
		let r = Math.floor(Math.random() * (lvl - 1));
		array[i] = array[r];
		array[r] = a;
	}
	return array;
}
