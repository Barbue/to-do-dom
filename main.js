/*
To-Do List DOM notes
* Users have the ability to add new to-do items
- form
-text input box and submit (get input from the user and add it to the list when they click submit)
-document.createElement to create the list items
--appendChild to add to our list

* Users have the ability to view to-do items
-list to keep track of our to-do items
-querySelectorAll(or bubbling) can be utilized to access the array of the individual list items

HTML
-empty list
-form
-buttons
-text input

JS
-list items


* Allow users to clear all to-do items

*/

//Queries 
let wholeList = document.querySelectorAll('#list li');
let formList = document.querySelector('#toDO');
let text = document.querySelector('#enteredText');
let add = document.querySelector('#add');
let removeCompltd = document.querySelector('#removeCompleted');
let removeAll = document.querySelector('#removeAll');
let ulList = document.querySelector('#list')


 formList.addEventListener('submit', function(event){
    event.preventDefault();
let item = document.createElement('li');
item.innerText = text.value
ulList.appendChild(item)
text.value = "";
item.addEventListener('click', function(){
item.style.textDecoration = "line-through"
item.style.color = "black"
item.style.backgroundColor = 'green'




})
})

removeAll.addEventListener('click', function(){

wholeList = document.querySelectorAll('#list li');

for(let i = 0; i < wholeList.length; i++){
    wholeList[i].remove();
}
});

removeCompltd.addEventListener('click', function(){
    wholeList = document.querySelectorAll('#list li');

     for(let i = 0; i < wholeList.length; i++){
     if(wholeList[i].style.textDecoration === "line-through"){
        wholeList[i].remove();
}
}
});





  

























