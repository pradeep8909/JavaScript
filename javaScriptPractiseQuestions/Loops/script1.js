var number = parseInt(prompt('Enter a number to get the Multiplication Table'));
if (!isNaN(number)){
  ul = "<ul>"
  for(var i = 1; i<21; i++){
    var res = "<li>"+ number + " * " + i + " = " + (number*i) + "</li>";
    ul += res
  }
  ul += '</ul>'
  document.write(ul)
}else{
  alert('Please Enter a Valid Number');
}
