var btnAdd = document.getElementsByClassName('addList')[0];

btnAdd.addEventListener('click', add);

function add(){
	var table = document.getElementById('table');
	var formList = document.createElement('div');
	var input = document.createElement('input');
	var btnSave = document.createElement('button');
	input.setAttribute('placeholder','Añadir una lista...');

	formList.appendChild(input);
	formList.appendChild(btnSave);
	table.appendChild(formList);
}



//var inName = document.