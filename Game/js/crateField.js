import { createCards } from "./cards.js";
import { createMenu } from "./createMenu.js";

export const createField = (lvl) => {
	const main = document.querySelector("main");
	main.classList.add("null");


	console.log(lvl);
	let lvlText;

	switch (lvl) {
		case 8:
			lvlText = "Лёгкий уровень";
			break;
		case 12:
			lvlText = "Средний уровень";
			break;
		case 16:
			lvlText = "Сложный уровень";
			break;
	}

	const game = document.querySelector(".game");
	game.style.display = "block";

	const level = game.querySelector(".lvl");
	level.textContent = lvlText;

	const menu = game.querySelector(".btn");
	menu.addEventListener('click', () => {
		createMenu();
	})

	const cards = createCards(lvl);
	console.log(cards);

	const gameCards = game.querySelector(".game-cards");
	gameCards.innerHTML = "";
	let prev = null;
	cards.forEach(el => {

		const card = document.createElement('div');
		card.classList.add('card');
		card.style.backgroundImage = `url(${el.back})`;
		gameCards.appendChild(card);

		card.addEventListener('click', () => {
			console.log(prev);
			console.log(card);
			card.classList.add("rotate");
			card.style.backgroundImage = `url(${el.img})`;
			if (prev == null) {
				prev = card;
			}
			else {
				if (prev.style.backgroundImage == card.style.backgroundImage) {
					prev = null;
				}
				else {
					card.classList.remove("rotate");
					card.style.backgroundImage = `url(${el.back})`;
					prev.classList.remove("rotate");
					prev.style.backgroundImage = `url(${el.back})`;
					prev = null;
				}
			}
		})
	})

}





