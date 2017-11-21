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
    if (isNaN(elem)) {
        throw "The element is not a number";
    }
    if (isFull(list)){
        throw "The list is Full. You can't put the element in it";
    }
    if(isEmpty(list)){
        list[0]=elem;
        return size(list);
    }
    var i=0;
    var found=false;
    while(i<=size(list)-1 && !found){
        if(list[i]>elem){
            found=true;
        }else{
            i++;
        }
    }
    for(var j=size(list)-1; j>=i;j--){
        list[j+1]=list[j];
    }
    list[i]=elem;
    return size(list);
}

 function get(list,index){
	index = parseInt(index);
	 var elem = 0;
	 if (isNaN(index)) {
		throw "The index is not a number";
	}
	if (index > size(list)) {
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
	 		while (i<length && position === -1 && !(list[i]>elem)){
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
			while (i>=0 && position === -1 && !(list[i]<elem)){
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
	if (index > size(list)) {
		throw "The index is out of range";
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
		position = indexOf(list, elem);
		if(position !== -1){
			remove(list, position);
		}
	}
	return position;
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
