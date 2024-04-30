let tablinks = document.querySelectorAll(".tab-links");
let tabcontains = document.querySelectorAll(".tab-contains");

function opentab(tabname,event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontain of tabcontains) {
        tabcontain.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxBZI2mmTAo2ktpLWC2cp_UoZ4EAkh4FhYx2_2TvGSfSx_1qpR6yuWUgVkijWZfTeqeEQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
        
        
        // console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })