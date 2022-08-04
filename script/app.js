let students = ["Alexandre.C","Benoît","Donatien","Hugo","Myriam","Nicolas","Vlad","Quentin R","Quentin F","Steven","Julian","Maxence","Thomas","Amandine", "Tristan"];

const main = document.querySelector('main');

let groups = [];
for (let i = 0; i < 5; i++) {
	let groupContainer = document.createElement('section')
	let groupNb = document.createElement('h2');
	groupNb.textContent = `Groupe n°${i+1} :`;
	groupContainer.appendChild(groupNb);
	groups.push(groupContainer);
}

let groupPos = 0;

while (students.length) {
	let index = Math.floor(Math.random() * students.length);
	console.log(index);
	let groupMember = document.createElement('div');
	groupMember.textContent = students[index];
	students = students.slice(0, index).concat(students.slice(index+1, students.length))
	groups[groupPos].appendChild(groupMember);
	groupPos = (groupPos + 1) % 5;
}

groups.forEach(element => {
	main.appendChild(element);
})