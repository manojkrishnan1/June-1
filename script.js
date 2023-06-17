/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  console.log('All the employees who have the profession of developer using the map function.')
  arr.map((element)=>{
    if(element.profession == 'developer')
    console.log(element.name);
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  console.log('All the employees who have the profession of developer using the forEach function.')
  arr.forEach((element)=>{
    if(element.profession == 'developer')
    console.log(element.name);
  })
}

function addData() {
  //Write your code here, just console.log
  let susan = {id:4,name:"susan",age:"20",profession:"intern"};
  console.log('New employee '+susan.name+' is added')
  arr.push(susan);
  arr.forEach((element)=>{
    console.log('ID:'+element.id+' Name:'+element.name+' Age:'+element.age+' Profession:'+element.profession)
  })
}

function removeAdmin() {
  //Write your code here, just console.log
  let removeElements = [];  //Empty array to capture the indices of Objects(Employees) in arr whose profession is admin
  arr.forEach((element,index)=>{
    if(element.profession == 'admin'){
      removeElements.push(index); //capturing the indices of Object(Employees) whose profession is admin
    }
  })
  for(let i in removeElements){
    arr.splice(removeElements[i],1);  //Removing Objects(Employees) whose profession is admin using splice  
  }
  console.log('Employees with profession as admin were removed. New List is as follows')
  arr.forEach((element)=>{
    console.log('ID:'+element.id+' Name:'+element.name+' Age:'+element.age+' Profession:'+element.profession)
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let newEmployees = [
    { id: 11, name: "Kareem", age: "22", profession: 'Chief Engineer'},
    { id: 12, name: "Akbar", age: "26", profession: 'Manager'},
    { id: 13, name: "Ghazi", age: "21", profession: 'Analyst'},
  ];

  //concatenating arr and newEmployees
  let result = arr.concat(newEmployees);

  console.log('3 New employees were added. The New List is as follows')
  result.forEach((element)=>{
    console.log('ID:'+element.id+' Name:'+element.name+' Age:'+element.age+' Profession:'+element.profession)
  })

}
