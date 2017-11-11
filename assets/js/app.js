var btnAdd = document.getElementsByClassName('addList')[0];

btnAdd.addEventListener('click', add);

function add(){
	var table = document.getElementById('table');
	document.getElementsByClassName('addList')[0].style.display = 'none';
	var formList = document.createElement('div');
	var input = document.createElement('input');
	var btnSave = document.createElement('button');
	var icon = document.createElement('icon');
	input.setAttribute('placeholder','Añadir una lista...');
	input.setAttribute('id','textList');
	btnSave.setAttribute('id','btnSave');
	btnSave.textContent = 'Guardar';
	icon.setAttribute('class', 'fa fa-times');
	formList.setAttribute('class','formList');

	formList.appendChild(input);
	formList.appendChild(btnSave);
	formList.appendChild(icon);
	table.appendChild(formList);

	var boton = document.getElementById('btnSave');
	boton.onclick = newList;

	//función que habilita el boton, guarda el comentario y lo muestra en un div nuevo;
	
};

function newList(){	
		var textList = document.getElementById('textList').value;
		document.getElementById('textList').value = '';

		if(textList.length == 0 || textList == null){
			return;
		}

		//obteniendo y creando nodos;
		var putList = document.getElementById('putList')
		var nameList = document.createElement('div');
		var addNameList = document.createElement('p');
		var placeTextList = document.createTextNode(textList);
		nameList.setAttribute('class','readyList');

		// agregando nodos hijos a nodos padres;
		addNameList.appendChild(placeTextList);
		nameList.appendChild(addNameList);
		putList.appendChild(nameList);

		
	};