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
 	return list;
 } 

 function isEmpty(list){
 	return (list.length === 0);
 } 

 function isFull(list){
	return (list.length === MAX_ELEM_LIST);
 } 

 function size(list){
 	return list.length;
 } 

 function add(list,elem){
	 elem = parseInt(elem);
	 var listTemp = create();
 	if (isNaN(elem)) {
 		throw "The element is not a number";
 	}
 	if (!isFull(list)){
		list.push(elem);
 	} else {
 		throw "The list is Full. You can't put the element in it";
 	}
 	return size(list);
 } 

 function addAt(list,elem,index){
	index = parseInt(index);
	elem = parseInt(elem);
	if (isNaN(elem)) {
		throw "The element is not a number";
	}
	if (index > list.length) {
		throw "The index is out of range";
	}
	if (!isFull(list)){
		list.splice(index, 0, elem);
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
	if (index > list.length) {
		throw "The index is out of range";
	}
 	if (!isEmpty(list)){ 			
 		elem = list[index];
 	} else {
 		throw "The list is empty. You can't get any element";
 	} 	
 	return elem;
 } 

 function toString(list){
 	var str = "";
 	if (!isEmpty(list)){
 		for (var i=0; i<list.length-1;i++){
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
	 		position = list.indexOf(elem);		 		
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
			position = list.lastIndexOf(elem);		 		
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
 		list.splice(0, list.length);		 		 		
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
 		last = list[list.length-1]; 		
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
	if (index > list.length) {
		throw "The index is out of range";
	}
	else if (!isNaN(list[index])) {
		elem = list[index];
		list.splice(index, 1);
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
	if (isNaN(index)) {
		throw "The index is not a number";
	}
    if (isEmpty(list)){
         throw "The list is Empty. You can't set any element in it";
	}
	if (index > list.length) {
		throw "The index is out of range";
	}
	if (!isNaN(list[index])) {
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
