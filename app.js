//Delete button
const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

//Add button
const forms = document.forms;
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const values = addForm.querySelector('input[type="text"]').value;
    // console.log(values);

    //create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deletebtn = document.createElement('span');

     //Add content
     deletebtn.textContent='delete';
     bookName.textContent= values;

     //create classes
    bookName.classList.add('name');
    deletebtn.classList.add('delete');
 
    //Append to document
    li.appendChild(bookName);
    li.appendChild(deletebtn);
    list.appendChild(li);
})
    // hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "inline";
    }
    })

    //searchbar
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup',function(e){
        const search_value=e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach(function(book){
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(search_value) != -1){
                book.style.display = "block";
            }
            else{
                book.style.display = "none";
            }
        })
    })

    





/****************************************************Basics***********************************************************/
    // // getting the element by class name
// var titles = document.getElementsByClassName('title');
// console.log(titles);

// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

// //getting the element by queryselector
// var books= document.querySelector('#book-list li:nth-child(2) .name');
// console.log(books);

// books= document.querySelectorAll('#book-list li .name');
// Array.from(books).forEach (function(book) {
//    console.log(book.textContent);
// })

// //innerHTML
// const booklist = document.querySelector('#book-list');
// booklist.innerHTML += '<p>Append</p>';

// //Nodes
// const banner = document.querySelector('#page-banner');
// console.log('page banner has node type is', banner.nodeType);
// console.log('page banner has node name is', banner.nodeName);
// console.log('page banner has child nodes is', banner.hasChildNodes());
// //Clone the node
// var cln = banner.cloneNode(true);       //cloneNode - creates an copy of a clone, and returns the clone
// //If it is true it ll return the entire element(i.e., parent and chlid)
// //If it is false it ll return the parent elemnt alone
// console.log(cln);

// //Transversing the DOM

// console.log('Parent element of booklist is:',booklist.parentElement);
// //ParentElement and ParentNode are same
// console.log('Parent of Parent element of booklist is:',booklist.parentElement.parentElement);
// //childNodes - contain all nodes include text nodes and comment nodes
// console.log('Child Node is:',booklist.childNodes);
// //children
// console.log('Child node is:',booklist.children);
// //sibling elements
// console.log('Next sibling for booklist is:',booklist.nextSibling);
// console.log('Next element sibling for booklist is:',booklist.nextElementSibling);
// console.log('Previous sibling for booklist is:',booklist.previousSibling);
// console.log('Previous element sibling for booklist is:',booklist.previousElementSibling);


//To enable the delete button
// var btns = document.querySelectorAll('#book-list .delete');
// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const element = e.target.parentElement;
//         element.parentNode.removeChild(element);
//     })
    
// })
