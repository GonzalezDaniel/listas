"use strict";

/* Page functions */
 var NUMBERS_LIST = create(); function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function addNumber(num){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	add(NUMBERS_LIST,num);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

function addNumberAtPosition(num, index){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	addAt(NUMBERS_LIST,num, index);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

function removeIndex(index){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	remove(NUMBERS_LIST, index);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

function removeByElement(num){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	removeElement(NUMBERS_LIST, num);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

function setNumber(num, index){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	set(NUMBERS_LIST, num, index);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* list Functions */
 var MAX_ELEM_LIST = 5; 
 function create(){
 	var list = [];
 	for (var i=0; i<MAX_ELEM_LIST; i++){
 		list[i] = Number.NaN;
 	}
 	return list;
 } 

 function isEmpty(list){
 	var isEmpty = false;
 	if (isNaN(list[0])){
 		isEmpty = true;
 	}
 	return isEmpty;
 } 

 function isFull(list){
 	var isFull = false;
 	if (!isNaN(list[MAX_ELEM_LIST-1])){
 		isFull = true;
 	}
 	return isFull;
 } 

 function size(list){
 	var length = 0;
 	while (length<MAX_ELEM_LIST && !isNaN(list[length])){
 		length++;
 	}
 	return length;
 } 

 function add(list,elem){
	 elem = parseInt(elem);
	 var listTemp = create();
 	if (isNaN(elem)) {
 		throw "The element is not a number";
 	}
 	if (!isFull(list)){
		list[size(list)] = elem;
 	} else {
 		throw "The list is Full. You can't put the element in it";
 	}
 	return size(list);
 } 

 function addAt(list,elem,index){
	index = parseInt(index);
	elem = parseInt(elem);
	var listTemp = [];
	if (isNaN(elem)) {
		throw "The element is not a number";
	}
	if (!isFull(list)){
		for(var i = 0; i<size(list)+1; i++){
			if(i < index){
				listTemp[i] = list[i];
			}
			else if(i > index){
				listTemp[i+1] = list[i];
			}
			else if(i == index){
				listTemp[i] = elem;
				listTemp[i+1] = list[i];
			}
		}

		for(var i = 0; i<size(listTemp)+1; i++){
				list[i] = listTemp[i];
		}
	} else {
		throw "The list is Full. You can't put the element in it";
	}
	return size(list);
} 

 function get(list,index){
	index = parseInt(index);
	 var elem = 0;
	 if (isNaN(index)) {
		throw "The index is not a number";
	}
 	if (!isEmpty(list)){ 			
 		elem = list[index];
 	} else {
 		throw "The list is empty. You can't poll any element";
 	} 	
 	return elem;
 } 

 function toString(list){
 	var str = "";
 	if (!isEmpty(list)){
 		var length = size(list);	
 		for (var i=0; i<length-1;i++){
 			str = str + list[i] + " - ";
 		} 		 		
 		str = str + list[i]; 		
 	} 	
 	return str;
 } 

 function indexOf(list,elem){
 	var position = -1;
 	elem = parseInt(elem);
 	if (!isNaN(elem)) {
	 	if (!isEmpty(list)){
	 		var length = size(list);	
	 		var i=0;
	 		while (i<length && position === -1){
	 			if (list[i] === elem) {
	 				position = i;
	 			}
	 			i++;
	 		} 		 		
	 	} 	
 	} else{
 		throw "The element is not a number";
 	}
 	return position;
 } 

 function lastIndexOf(list,elem){
	var position = -1;
	elem = parseInt(elem);
	if (!isNaN(elem)) {
		if (!isEmpty(list)){
			var length = size(list);	
			var i=length;
			while (i>=0 && position === -1){
				if (list[i] === elem) {
					position = i;
				}
				i--;
			} 		 		
		} 	
	} else{
		throw "The element is not a number";
	}
	return position;
} 

 function capacity(list){
 	return MAX_ELEM_LIST;
 } 

 function clear(list){
 	var elem = Number.NaN;
 	if (!isEmpty(list)){
 		var length = size(list);	
 		for (var i=0; i<length;i++){
 			list[i] = Number.NaN;
 		} 		 		 		
 	} 	
 } 

 function firstElement(list){
 	var first;
 	if (!isEmpty(list)){
 		first = list[0]; 		
 	} else {
 		throw "The list is empty.";
 	}
 	return first;
 } 

 function lastElement(list){
 	var last;
 	if (!isEmpty(list)){
 		last = list[size(list)-1]; 		
 	} else {
 		throw "The list is empty.";
 	}
 	return last;
 } 

 function remove(list,index){
	index = parseInt(index);
	var elem;
	if (isNaN(index)) {
		throw "The index is not a number";
	}
     if (isEmpty(list)){
         throw "The list is Empty. You can't remove any element in it";
	}
	else if (!isNaN(list[index])) {
		for(var i = 0; i<size(list)-1; i++){
			if(i > index){
				list[i] = list[i+1];
			}
            else if(i == index){
				elem = list[i];
				list[i] = list[i+1];
			}
		}
		list[i] = Number.NaN;
	} else {
		throw "The index is already empty";
	}
	return elem;
}

function removeElement(list,elem){
	elem = parseInt(elem);
	var elem;
	if (isNaN(elem)) {
		throw "The elem is not a number";
	}
     if (isEmpty(list)){
         throw "The list is Empty. You can't remove any element in it";
	}
	else {
		var position = -1;
		position = list.indexOf(elem);
		if(position !== -1){
			remove(list, position);
		}
		else{throw "The element is not in the list";}
	}
	return position;
}

function set(list, elem, index){
	index = parseInt(index);
	elem = parseInt(elem);
	var temp;
	if (isNaN(elem)) {
		throw "The elem is not a number";
	}
	else if (isNaN(index)) {
		throw "The index is not a number";
	}
    else if (isEmpty(list)){
         throw "The list is Empty. You can't set any element in it";
	}
	else if (!isNaN(list[index])) {
		temp = list[index];
		list[index] = elem;
	} else {
		throw "The index is already empty";
	}
	return temp;
}

 function testlist(){
 	//var list = create (); 	
 	var list=[]; 	
 	console.log ("Capacidad: " + capacity(list));
 	console.log("Es vacía: " + isEmpty(list));
 	console.log("Longitud: " + size(list));

 	try {
	 	for (var i=0; i<MAX_ELEM_LIST; i++){
	 		console.log("Nº de elementos: " + add(list,i*10));
	 	}
	 	add(list,i); //It will generate an exception.
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("The full list: " + toString(list));	 	
 	console.log ("The first element list: " + firstElement(list));
 	console.log ("The last element list: " + lastElement(list));

 	console.log ("is 40 in list: " + indexOf(list,40));	 	
 	console.log ("is -40 in list: " + indexOf(list,-40));	 	
 	//clear(list);

 	try {
	 	while (true){
	 		console.log ("Unnonsumed Element: " + firstElement(list));
	 		console.log ("Consumed Element: " + remove(list, 0));
	 		console.log ("The list: " + toString(list));	 	 		 	
	 	}
 	} catch (err) {
 		console.log(err); //When the list is empty, an exception will be catched.
 	}

 	console.log ("The list: " + toString(list));	 	
 } 
window.onload = testlist;
