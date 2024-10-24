"use strict"
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let form = document.getElementById("form");
// let btn = document.getElementById('btn');

let currentUser
form.addEventListener("submit", function(e){
    e.preventDefault();
    if(email.value == "" || pass.value == ""){
      // alert('please enter email and password')
      email.style.borderColor = "red"
      pass.style.borderColor = "red"
    }
    const getUsers=JSON.parse(localStorage.getItem("users"))|| [];
    // const eachData = JSON.stringify([email.value,pass.value])
    const mail=email.value.trim()
    const password=pass.value.trim()
   
    // console.log(getUsers);
  currentUser=getUsers?.find(user=>mail===user.email);
  
  if(!currentUser)return
  if(currentUser.email.value !== email && currentUser.password !==password){
    // console.log("please enter the correct email or password")
    alert('Invalid Email or Password')
      email.style.borderColor = "red"
      pass.style.borderColor = "red"
  }
  
  else{
    alert("Successful Login")
  }
})