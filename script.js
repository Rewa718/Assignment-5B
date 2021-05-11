// connect buttons with functions
document.getElementById('buttonarea')
.addEventListener("click", myArea)
document.getElementById('buttoncircumference').addEventListener('click', myCircumference)
document.getElementById('entradius').addEventListener('click', myEquation)

function myArea () {
  const entradius = parseInt(document.getElementById('entradius').value)

  // calculate area of circle
  const ans = 3.14 * entradius ** 2
   document.getElementById('displayText').innerText = 'Area is'
  document.getElementById('displayans').innerText = ans
 
}

function myCircumference () {
   const entradius = parseInt(document.getElementById('entradius').value)

  // calculate circumference of circle
  const ans = 2 * 3.14 * entradius
  document.getElementById('displayText').innerText = 'Circumference is'
  document.getElementById('displayans').innerText = ans

}

function myEquation () {
   document.getElementById('displayText').innerText = 'A = πr^2 '
  document.getElementById('displayans').innerText = 'C = 2πr'
  
}