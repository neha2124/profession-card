/** @format */
let dev = document.getElementById("map")
let each = document.getElementById("forEach")
let add = document.getElementById("new_data")
let remove = document.getElementById("remove")
let concat = document.getElementById("concat")
let card = document.getElementById("card")
const arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
const newArr = {id:4,name:"susan",age:"20",profession:"intern"}

function updateDom (data){
  card.innerHTML=""
  data.forEach((item)=>{
    let newDiv = document.createElement("div")
    newDiv.innerHTML =`id : ${item.id}  Name : ${item.name} age: ${item.age} profession : ${item.profession}`
   newDiv.classList.add('person')
    card.append(newDiv)
  })
}
updateDom(arr)
function PrintDeveloperswithMap() {
  
  let filter = arr.filter((item) => {
    return item.profession == "developer"
  })
console.log(filter)
updateDom(filter)
  
}

function PrintDeveloperbyForEach() {
  
  let filter = arr.filter((item) => {
    return item.profession == "developer"
  })
console.log(filter)
updateDom(filter)
}

function addData() {
   arr.push(newArr)
  console.log(arr)
  updateDom(arr)
}


function removeAdmin() {
  
  let filter = arr.filter((item) => {
    return item.profession != "admin"
  })
console.log(filter)
updateDom(filter)
}

function concatenateArray() {
  
  let data = arr.concat(newArr)
  console.log(data)
  updateDom(data)
}
dev.addEventListener("click",PrintDeveloperswithMap)
each.addEventListener("click",PrintDeveloperbyForEach)
add.addEventListener("click",addData)
remove.addEventListener("click",removeAdmin)
concat.addEventListener("click",concatenateArray)