const membersList = document.querySelector('.members__list');
const spanElement = document.querySelector('.members__indicator');
const totalMembers = 6;
let currentIndex = 0;

function showCards() {
	const members = document.querySelectorAll('.member');
	const cardsPerScreen = window.innerWidth <= 767 ? 1 : 3;

	for (let i = 0; i < members.length; i++) {
		if (i >= currentIndex && i < currentIndex + cardsPerScreen) {
			members[i].style.display = 'flex';
		} else {
			members[i].style.display = 'none';
		}
	}

	spanElement.textContent = `${currentIndex + cardsPerScreen} / ${totalMembers}`;
}

function changeCards(direction) {
		const addIndex = window.innerWidth <= 767 ? 1 : 3;
	if (direction === 'next') {
		currentIndex = (currentIndex + addIndex) % totalMembers;
	} else if (direction === 'prev') {
		currentIndex = (currentIndex - addIndex + totalMembers) % totalMembers;
	}
	showCards();
}

document.querySelector('.members__prev').addEventListener('click', () => {
	changeCards('prev');
});

document.querySelector('.members__next').addEventListener('click', () => {
	changeCards('next');
});

showCards();
setInterval(() => {
	changeCards('next');
}, 4000);