user = prompt('If you want to find the greatest number among three numbers enter y/yes/Y/Yes if not then you can press any other key.')
if ((user === 'y')||(user === 'Y')||(user === 'Yes')||(user === 'yes')){
    number1 = parseFloat(prompt('Enter the first number'));
    number2 = parseFloat(prompt('Enter the second number'));
    number3 = parseFloat(prompt('Enter the first number'));
    if (number1 > number2){
        if (number1 > number3){
            alert(String(number1) + " is the greatest.")
        }else if (number3 > number1){
            alert(String(number3) + " is the greatest.")
        } 
    }else if (number2 > number3){
        alert(String(number2) + " is the greatest.")
    }else{
        alert(String(number3) + " is the greatest.")
    }
}else{
    alert('Thanks for Playing!\nPress F5 to play again.')
}