
(function () {
var byeSpeaker={};
var helloSpeaker={};
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {

	byeSpeaker.speak=function(name){
		console.log("Goodbye " + name);
	}
	helloSpeaker.speak=function(name){
		console.log("Hello " + name);
	}

  var firstLetter = names[i].charAt(0).toLowerCase();

  
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();