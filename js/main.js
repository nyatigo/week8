var signs = [

{ image:"img/aries.jpg",
  name: "Aries",
  p:"you're a goat",
  dates:"Mar 20 – Apr 20"
},
{ 
  image:"img/scorpio.jpg",
  name:"scorpio",
  p:"stay dangerous",
  dates:"Oct 23 – Nov 22"
},
{
  
  image:"img/taurus.jpg",
  name:"Taurus",
  p:"hahahaaa cowboy",
  dates:"Apr 20 – May 21"
},
{
  
  image:".img/gemini.jpg",
  name:"Gemini",
  p:"man up",
  dates:"May 21 – Jun 21"
},
{
  
  image:"img/cancer.jpg",
  name:"Cancer",
  p:"stay strong",
  dates:"Jun 21 – Jul 23"
  
}


];



function fun(){

var input = document.getElementById("name").value

var name = document.getElementById("call")
var image = document.getElementById("img")
var h5 = document.getElementById("dates")
var p = document.getElementById("para")

for(var i = 0; i < signs.length; i++ ){

  if(input == signs[i].name){
    name.innerHTML = signs[i].name
    image.src = signs[i].image
    h5.innerHTML = signs[i].dates
    p.innerHTML = signs[i].p


  }

  else{
    console.log("error");

    return;
  }
}


}














//var input = document.getElementById("name");
//var image = document.getElementByI("img").src;
//var h5 = document.getElementById("dates");
//var p = document.getElementById("para");


//function fun(){
  //for( var i = 0; i < signs.length; i++){
    //if(input.value == signs[i].name){
      //image.image = signs[i].image 
      //h5.innerText = signs[i].dates
      //p.innerText = signs[i].p
      
//
    //};
  //};
//};

//function fun(){
  //var x = document.getElementById("img").src = image
//}

