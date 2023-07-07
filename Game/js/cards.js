const cards = [
	"../img/1.png",
	"../img/2.png",
	"../img/3.png",
	"../img/4.png",
	"../img/5.png",
	"../img/6.png",
	"../img/7.png",
	"../img/8.png",
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



