let nameIt = document.getElementById('name');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let conPass = document.getElementById('con-pass');

let form = document.getElementById("form")

let checkUser=JSON.parse(localStorage.getItem("users"))||[]

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(nameIt.value == ""){
    nameIt.style.borderColor = "red"
    }
    if(email.value == ""){
        email.style.borderColor = "red"
    }
    if(pass.value == ""){
        pass.style.borderColor = "red"
    }
    if(conPass.value == "" || conPass.value !== pass.value){
        conPass.style.borderColor = "red"
    }
  else{
    //   const eachData = JSON.stringify([nameIt.value,email.value,pass.value,conPass.value])
   const  formData={
        name:nameIt.value,
        email:email.value,
        password:pass.value,
        comfirmPassword:conPass.value
    }
    checkUser.push(formData)
    localStorage.setItem("users", JSON.stringify(checkUser))
   
   nameIt.style.borderColor = "green"
   email.style.borderColor = "green"
   pass.style.borderColor = "green"
   conPass.style.borderColor = "green"
  }
 
})

