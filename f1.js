//Get All Value
let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');

// Form Refresh State
if (localStorage.getItem("name") === null) {
    alert("You need to log in")
  }
  
else {
    alert("You are already logged in")  
}
//Reset Btn
resetBtn.addEventListener('click', (e) => {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('message');
    alert("Your History is deleted");
});

//Now Start SendBtn
sendBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    //Set Value And LocalStorage
    
    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);
  
    alert("Your details are recorded");
});
