let TagList= [];
let List= [];
let username = localStorage.getItem('username')
// creating list for user
let userlist= "ToDo"+username;
let Taglist= "tag" + username;
//function to store Todos in local storage
function Store(){
  localStorage.setItem(userlist, JSON.stringify(List))
  }
  function StoreList(){
    localStorage.setItem(Taglist, JSON.stringify(TagList))
      
    }
//checking if logged in
    if (username == null){
      window.location.href = "index.html";
    }
    else{
     
      document.getElementById('Greet').innerHTML="welcome "+username+ "! "
    }
    // loading up the list
window.onload= function(){
  if ((JSON.parse(localStorage.getItem(userlist)) != null)||(localStorage.getItem(Taglist)) != null ){
    TagList = JSON.parse(localStorage.getItem(Taglist))
    List = JSON.parse(localStorage.getItem(userlist))
    show()
}
}
//adding another Todo if pressed on button
function addToDo(){
let newtd = document.getElementById('newtd').value;
let tag = document.getElementById('tag').value;
//validating content
if (newtd === '') {
    alert('please fill in what you want to do')
}
else{
  List.push(newtd); 
  TagList.push(tag)  
  show()
StoreList()
  Store()}
  document.getElementById("form").reset();

}
// function to show Todos
  function show(){
document.querySelector(".list-group").innerHTML ="";

 for (i= 0; i < List.length; i++)
 {
   document.querySelector(".list-group").innerHTML += "<li class='list-group-item list-group-item-dark'> <a>"+ List[i] +"<br>"+TagList[i]+" </a><br><button class='btn btn-secondary' onclick='check("+i+")'>✔</button>  <button class='btn btn-secondary' onclick='edit("+i+")'>✏</button> <button class='btn btn-secondary' onclick='Tag("+i+")'>🏷</button> <button class='btn btn-secondary' onclick='Del("+i+")'>🗑</button></li>";
 }
}

//function to press when todo is done
function check(index){
  if(List[index].includes('<del>')){
    List[index]= List[index].replace("<del>", "")
    List[index]= List[index].replace("</del> <div style='color:green;'> DONE</div>","")
  }
  else {
    List[index] = "<del>"+List[index]+"</del> <div style='color:green;'> DONE</div>";
  }
  Store()
  show()

}
// delete function
function Del(index) {
    List.splice(index, 1)
    TagList.splice(index,1)
StoreList()
    Store()
      show()
}
// edit function
function edit(index){
  let change = prompt ("Edit your TO-DO",List[index])
  if (change != ''){
  List[index] = change
  }
  else
{alert ("please fill something in")}
  
Store()
show()
}
//add tag function
function Tag(index){
  let change = prompt ("Add Tag",TagList[index])
  if (change != ''){
  TagList[index] = change
  }
  else
{alert ("please fill something in")}
  
StoreList()
show()
}
//searchbar
function filter(){
 let input = document.getElementById("Search");
 let filterValue = input.value.toUpperCase();
let ul = document.getElementById("todos");
 let li = ul.getElementsByTagName("li");
    
    for (i = 0 ; i < li.length ; i++){
        let a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
          li[i].style.display = "";
            
        }else{
            li[i].style.display = "none";
        }
   
    }
   
  }