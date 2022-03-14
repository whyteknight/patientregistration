let userName = document.querySelector('#username');
let passWord = document.querySelector('#password');
let registerForm = document.querySelector('#registerForm');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    checkLogin();
    
    if (
      !(
        userName.value.trim() === '' ||
        passWord.value.trim() === '' ||
        passWord.value.length < 6
      )
    ) {
      document.getElementById('registerForm').style.display = ('none');
      document.getElementById('patientInfoForm').style.display = ('block');
      alert('Login successfully!');
    }
  });

  function checkLogin() {
    if (userName.value.trim() === '') {
      alert('Username cannot be blank');
    } 

    if (passWord.value.trim() === '') {
      alert('Password cannot be blank.');
    } else if (passWord.value.trim().length < 6) {
      alert('Password must be at least 6 characters.');
    } 
  }

  let firstName = document.querySelector('#firstname');
  let lastName = document.querySelector('#lastname');
  let Address = document.querySelector('#address');
  let birthDate = document.querySelector('#birthdate');
  let Contact = document.querySelector('#contact');
  let btn2 = document.querySelector("#btn2");
  
  
    btn2.addEventListener('click', (event) => {
    event.preventDefault();
    
  {
    if (firstName.value.trim() === '') 
    {
        document.querySelector("#erFirstName").textContent ="First Name must be filled out";
    } 
      else 
      {
        document.querySelector("#erFirstName").textContent ="";
      }

    if (lastName.value.trim() === '') 
    {
        document.querySelector("#erLastName").textContent ="Last Name must be filled out";
    } 
     else 
     {
        document.querySelector("#erLastName").textContent =""; 
     }

    if  (Address.value.trim() === '') 
    {
        document.querySelector("#erAddress").textContent ="Address must be filled out";
    }
      else 
      {
        document.querySelector("#erAddress").textContent ="";
      }

    if (birthDate.value.trim() === '') 
    {
        document.querySelector("#erBirthDate").textContent ="Please enter a valid date format";
    } 
      else 
      {
        document.querySelector("#erBirthDate").textContent ="";
      }

    const regContact = /^(09|\+639)\d{9}$/;
       
    if (!regContact.test(Contact.value)) 
    {
        document.querySelector("#erContact").textContent = "Please enter a valid contact number";
    } 
     else 
     {
        document.querySelector("#erContact").textContent = "";
     }

     var valid = false;
     let radios = document.getElementsByName('gender');

     for (var i=0; i<radios.length; i++)
         if(radios[i].checked) {
             valid = true;
             break;
         }

         if(valid) {
            document.querySelector("#erGender").textContent ="";
         }
         else {
            document.querySelector("#erGender").textContent = "Please select a Gender"; 
         }
      }

      let radios = document.getElementsByName('gender');

      if (
        firstName.value !== '' &&
        lastName.value !== '' &&
        birthDate.value !== '' &&
        Address.value !== '' &&
        Contact.value.length > 10 &&
        radios.checked !== '' 
        ) {
        alert('You have successfully submitted the form.');
        
        addPatientDetail();

        }

});

function yesNoCheck() {
    var chkYes = document.getElementById("medicationYes");
    var medBox1 = document.getElementById("medBox");
    medBox1.disabled = chkYes.checked ? false : true;
    if (!medBox1.disabled) {
        medBox1.focus();
    }
    else {
      medBox1.value = "";
      medBox1.disabled = true;
    }
}    

function resetForm() {
    var elems = document.querySelectorAll("small");
    elems.forEach(itm => {
      document.getElementById(itm.id).innerHTML = ''
    });
  }

      let patientDetails = [];
  
      const addPatientDetail = () => {
     
      let genderChosen = document.querySelectorAll("input[name = 'gender']:checked");
      let genderName = [...genderChosen].map(chosen => chosen.value).join("");
      let medHistoryChosen = document.querySelectorAll("input[name = 'medhistory']:checked");
      let medHistoryName = [...medHistoryChosen].map(medChosen => medChosen.value).join(", ");
      let symptomsChosen = document.querySelectorAll("option[name = 'symptoms']:checked");
      let symptomsName = [...symptomsChosen].map(sympSelected => sympSelected.value).join(", ");

      let patientInfo = {
          firstname: document.getElementById('firstname').value,
          middlename: document.getElementById('middlename').value,
          lastname: document.getElementById('lastname').value,
          address: document.getElementById('address').value,
          birthdate: document.getElementById('birthdate').value,
          contact: document.getElementById('contact').value,
          gender: genderName,
          medicalhistory: medHistoryName,
          symptoms: symptomsName,
          medication: document.getElementById('medBox').value
          }     

  patientDetails.push(patientInfo);
  document.querySelector('#patientInfoForm').reset();
  console.table(patientDetails);

  localStorage.setItem('Patient Details', JSON.stringify(patientDetails)); 
  
  }



  
  

  
 
   

 

 


  