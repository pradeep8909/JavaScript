var array = [10,-234,3242,32,43,232]
//Program to find the max number within an array
var max = array[0]
array.forEach(function(element){
	if (element > max){
		max = element;
}
}
)
console.log(max)