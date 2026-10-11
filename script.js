/*
const body = document.body;
const main = document.querySelector("main");
const div = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    console.log("Button par click hua");
});

main.addEventListener("click", (e) => {
    console.log("Main par click event chala");
}, {
    capture: true
});

body.addEventListener("click", () => {
    console.log("Body par click event chala");
});

div.addEventListener("click", () => {
    console.log("Div par click event chala");
});

*/
/*
const body = document.body;
const main = document.querySelector("main");
const div = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    console.log("Button par click hua");
});

main.addEventListener("click", (e) => {
    console.log("Main par click event chala");
}, {
    capture: true
});

body.addEventListener("click", () => {
    console.log("Body par click event chala");
});

div.addEventListener("click", () => {
    console.log("Div par click event chala");
});

*/

const form = document.querySelector("form");

const inputs = document.querySelectorAll("input");
const user = document.querySelector(".users")
let ab1 = inputs[0];
let ab2 = inputs[1];
let ab3 = inputs[2];
let edit= document.querySelector(".edit")
let del =document.querySelector(".del")
ab1.classList.add("my-input");
ab2.classList.add("my-input2");
ab3.classList.add("mydp")


let userData = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "age": 22,
    "gender": "Male",
    "image": "https://i.pravatar.cc/150?img=12"
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "priya.verma@example.com",
    "age": 24,
    "gender": "Female",
    "image": "https://i.pravatar.cc/150?img=47"
  },
  {
    "id": 3,
    "name": "Rahul Kumar",
    "email": "rahul.kumar@example.com",
    "age": 21,
    "gender": "Male",
    "image": "https://i.pravatar.cc/150?img=13"
  },
  {
    "id": 4,
    "name": "Ananya Singh",
    "email": "ananya.singh@example.com",
    "age": 23,
    "gender": "Female",
    "image": "https://i.pravatar.cc/150?img=44"
  },
  {
    "id": 5,
    "name": "Vikash Gupta",
    "email": "vikash.gupta@example.com",
    "age": 26,
    "gender": "Male",
    "image": "https://i.pravatar.cc/150?img=14"
  },
  {
    "id": 6,
    "name": "Neha Kumari",
    "email": "neha.kumari@example.com",
    "age": 20,
    "gender": "Female",
    "image": "https://i.pravatar.cc/150?img=45"
  },
  {
    "id": 7,
    "name": "Rohan Mishra",
    "email": "rohan.mishra@example.com",
    "age": 25,
    "gender": "Male",
    "image": "https://i.pravatar.cc/150?img=15"
  },
  {
    "id": 8,
    "name": "Sneha Yadav",
    "email": "sneha.yadav@example.com",
    "age": 22,
    "gender": "Female",
    "image": "https://i.pravatar.cc/150?img=46"
  },
  {
    "id": 9,
    "name": "Amit Raj",
    "email": "amit.raj@example.com",
    "age": 28,
    "gender": "Male",
    "image": "https://i.pravatar.cc/150?img=16"
  },
  {
    "id": 10,
    "name": "Pooja Singh",
    "email": "pooja.singh@example.com",
    "age": 27,
    "gender": "Female",
    "image": "https://i.pravatar.cc/150?img=48"
  }
]
console.log(userData.id)

 const userd= () =>{
    user.innerHTML =""
    
    userData.forEach((elem ,index) =>{
       
        user.innerHTML+=`
          <div class="users_card">
          <div class="img_box">
          <img src="${elem.image}" alt="">
          <p>User Name: <b>${elem.name}</b></p>
          <p>Age: ${elem.age}</p>
          <button class="edit" onclick="edita(${index})">Edit</button>
          <button class="del" onclick="delc(${index})">Delete</button>
     
     </div>
    </div>
     `
})}


userd()

form.addEventListener("submit", (event) => {
     event.preventDefault();

    if(ab1.value.trim() == "" && ab2.value.trim() == ""){
        event.preventDefault();
        return
    };

    userData.unshift({
        name:ab1.value, 
        age:ab2.value,
        image:ab3.value

    })
     userd()
    
    

    form.reset()
});


//delete funtion
const delc=function (index){
   userData.splice(index,1)
   userd()
}

//edit
const edita=function(index){
    const elem = userData[index]
    const card = user.children[index]

    card.innerHTML=`
    <div>
    <input type="text" id="ditname" value="${elem.name}">
    <input type="text" id="diage" value="${elem.age}" >
    <input type="url" id="imge" value="${elem.image}" >
    <button onclick="savein(${index})">save</button>
    <button onclick="userd()">cancle</button>
    </div>

    `

}

function savein(index){
    const name=document.querySelector("#ditname").value.trim()
    const age=document.querySelector("#diage").value.trim()
    const imgee=document.querySelector("#imge").value.trim()

    if(name === "" || age === "" || imgee === ""){
        alert("please input tha value")
        return
    }

    userData[index].name =name
    userData[index].age=age
    userData[index].image =imgee

      userd()
}