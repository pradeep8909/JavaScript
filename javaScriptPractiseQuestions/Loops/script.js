for(var i = 0; i < 101; i++){
  if(i%2 === 0){
    div = '<div class = "even"><ul>'
    div += '<li>'+ i + " is even</li>"
    div += '</div></ul>'
  }
}
document.write(div)
