var date = new Date();
console.log(date)
var today = date.getDay();
console.log(today)
var res;
switch(today){
    case 0:
        res = 'sunday';
        break;
    case 1:
        res = 'monday';
        break;
    case 2:
        res = 'tuesday';
        break;
    case 3:
        res = 'wednesday';
        break;
    case 4:
        res = 'thursday';
        break;
    case 5:
        res = 'friday';
        break;
    case 6:
        res = 'saturday';
        break;
}
console.log(res)
var guess = prompt('What day is today?')
if (guess === res){
    alert('You Won!')
}else{
    alert('You lost!')
}