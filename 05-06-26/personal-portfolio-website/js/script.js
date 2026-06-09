function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

(function () {
'use strict'

var forms = document.querySelectorAll('.needs-validation')

Array.prototype.slice.call(forms)
.forEach(function (form) {

form.addEventListener('submit', function (event) {

if (!form.checkValidity()) {
event.preventDefault()
event.stopPropagation()
}

form.classList.add('was-validated')

}, false)

})

})();

arr=[1,2,3,4,5]
console.log(...arr)