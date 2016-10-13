# homeworkx
var variable1 = Math.round(Math.random()*10);

function guess(guess) {  
	
  console.log("variable "+variable1+" guess "+guess);
  if (variable1 == guess) {
  	console.log("congrats!!!");
  }

}


guess(3);
