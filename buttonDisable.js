let state = {
		btnData: [
				{id: 1, text: 'Кнопка1'},
				{id: 2, text: 'Кнопка2'},
				{id: 3, text: 'Кнопка3'},
				{id: 4, text: 'Кнопка4'},
				{id: 5, text: 'Кнопка5'}
		],
		followingInProgress : [],
		isFetching: false
}
window.state = state;

const btn_container = document.querySelector(".btns_test");

const btnElement = state.btnData.map(b => {
		const newBtn = document.createElement('button');
		newBtn.className = 'newBtn';
		newBtn.id = b.id;
		newBtn.innerHTML = b.text;
		btn_container.appendChild(newBtn);
		newBtn.addEventListener('click', () => {
				toogleIsFetching(true, newBtn.id);
				debugger
				setTimeout(() => {
						toogleIsFetching(false, newBtn.id);
						debugger
						btnClickFunction(b.id)
				}, 3000)
		});
});

const newBtn = document.querySelectorAll('.newBtn');

const btnClickFunction = (id) => {
		console.log(id);
};

let toogleIsFetching = (fething, id) => {
		fething ?
				state.followingInProgress.push(id) :
				state.followingInProgress.filter(u => u != id)
}