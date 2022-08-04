let students = ["Alexandre.C","Benoît","Donatien","Hugo","Myriam","Nicolas","Vlad","Quentin R","Quentin F","Steven","Julian","Maxence","Thomas","Amandine", "Tristan"];

const main = document.querySelector('main');
const button = document.querySelector('button');

button.addEventListener('click', createGroups);

function createGroups () {
	let studentsCopy = students;
	let groups = [];

	main.innerHTML = null;

	for (let i = 0; i < 5; i++) {
		let groupContainer = document.createElement('section')
		let groupNb = document.createElement('h2');
		groupNb.textContent = `Groupe n°${i+1} :`;
		groupContainer.appendChild(groupNb);
		groups.push(groupContainer);
	}

	let groupPos = 0;

	while (studentsCopy.length) {
		let index = Math.floor(Math.random() * studentsCopy.length);
		let groupMember = document.createElement('div');
		groupMember.textContent = studentsCopy[index];
		studentsCopy = studentsCopy.slice(0, index).concat(studentsCopy.slice(index+1, studentsCopy.length))
		groups[groupPos].appendChild(groupMember);
		groupPos = (groupPos + 1) % 5;
	}

	groups.forEach(element => {
		main.appendChild(element);
	})
}

createGroups();