//<script src="myscripts.js"></script>


(function() {
    text = "";
    state = 0;
})();


window.onload = init;

//displat text in container
function displayText() {

    $("#container1").html(text );
    
}

//get button ID
    function init() {
    var button = document.getElementById("addButton");/*gets the ID button from form*/
    button.onclick = handleButtonClick;    /*creates the button function*/  
      message();
    displayText();    
    }

function handleNameState(name) {
    //var index;    

    state = 1;
    
    var valid = "false";
    
     text = text + "you: "+ name +"<br>";
    
    var intro = ["Hello", "Hi"];
    
    for (index = 0; index < intro.length; index++) {
        
        var ri = Math.floor(Math.random() * intro.length);   
    }
    
   
    if(name != "")
        {
            
            text = text + "<b><u>Chatbot:</u></b>" + '&nbsp;' + '&nbsp;' + intro [ri] + "   " +name + "  today date and time is  " + Date() + "<br>";
         
            text = text + " <b><u>Chatbot:</u></b>" + '&nbsp;' + '&nbsp;' + "Do you know how to calculate  the  distance between two points " + "<br>";
        }
        
        else  
        {
            text = text + "<b><u>Chatbot:</u></b>" + '&nbsp;' + '&nbsp;' + "Sorry nothing entered " + "<br>"; 
            
            
           // $("#container1").html(text).empty();
            
            //handleNameState();
           
          
        }
    
           
    }   

 

function knowDistance (){
    
        state =2;
        
var say = document.getElementById('nameInput').value;
   var Array = ['Yes', 'Yeah', 'Yh', 'yes' , 'yeah', 'yh', 'yup', 'Yup'];
      
  //  x.indexOf("*yes*")

   if(Array.indexOf(say) == -1) //returns the index of the selected element 
       // if(say == ("*y*"))
    {
        
         DontKnowDistance();
         
    }
    
  else 
    {
       //  text = text + "you: " +  say +  "<br>";  
        text = text + "you: " +  say +  "<br>";  
         text = text + "<b><u>Chatbot:</u></b>" + "Great we are done ";
        

        
     //  document.getElementById("Quiz").disabled = false;
    }
    
}

    
    
 function DontKnowDistance (){
     state=3;
     
     var a = document.getElementById('nameInput').value;
     var Array1 = ['Nope', 'no', 'Nahh', 'No' , 'nah', 'nope'];
    
   if(Array1.indexOf(a) == -1) //returns the index of the selected element 
    // if(a == ("*n*"))
    {
        
        text = text + "" + "<br>";
    }
    else
    {
         text = text + "you: " +  a +  "<br>"; 
        text = text + "<b><u>Chatbot:</u></b>" + '&nbsp;' + '&nbsp;' + " Do you want me to explain." + "<br>";
      
    }

}


function ShowImage (){
    state = 4;
     var i = document.getElementById('nameInput').value;
    var myImage = document.getElementById('image1');
    var hiddenform = document.getElementById("form");
    
    
     var newArray = ['ok', 'ohk', 'okay', 'yes','Yes' , 'I get it'];
    
   if(newArray.indexOf(i) == -1) //returns the index of the selected element 
  //  if (i == ("*o*" + "*y*"))
    {
        text = text + "" + "<br>";
    }
    else  
    {
        text = text + "you: " +  i +  "<br>"; 
       text = text + "<b><u>Chatbot:</u></b>" + '&nbsp;' + '&nbsp;' + " The distance formula is derived from the Pythagorean theorem. To find the distance between two points (x^1,y^1) and                              (x2,y2), all that you need to do is use the coordinates of these ordered pairs and apply the formula pictured below." + "<br>"
       
       text = text + "<b><u>Chatbot:</u></b>" + '&nbsp;' + '&nbsp;' + "lets do an example together. As you can see  in the picture right handside show A and B. From the picture tell me what is x and y equal of A and B?  In the below form." + "<br>";
       
       i = myImage.src="Images/FirstImage.png";
        hiddenform.style.display=  "block";
    }

}

function Validateform (){
    
    state = 5;
    var input1 =  document.getElementById("nameInput1").value;  
    var input2 =  document.getElementById("nameinput2").value;
    var input3 =  document.getElementById("nameinput3").value;
       var input4 =  document.getElementById("nameinput4").value;
    
    
    if (input1 != "" &&  input2 !=""  &&  input3 !=""  &&  input4 != "")
    {
      if(input1 == "2" &&  input2 =="1"  &&  input3 =="5"  &&  input4 == "5")
      {
          text = text + "<b><u>Chatbot:</u></b>" + '&nbsp;' + '&nbsp;' +"correct you know the basics. Do you want to move on to next stage  " + "<br>";
          
      }
        else
        {
             text = text + "<b><u>Chatbot:</u></b>" + '&nbsp;' + '&nbsp;' + "chaeck the picture again" + "<br>";
            ShowImage();
        }
    }
    else
    {
        alert("all feild should have number enterd");
    }
    
    
}







function showAnotherImage(){
    state = 6;
     var o = document.getElementById('nameInput').value;
    var myImage2 = document.getElementById('image2');
     var hiddenform = document.getElementById("form");
      var hiddenform1= document.getElementById("Subtract");
    
    
      var Array1 = ['Yes', 'Yeah', 'Yh', 'yes' , 'yeah', 'yh', 'yup', 'Yup', 'ok', 'okay'];
    
   if(Array1.indexOf(o) == -1) //returns the index of the selected element 
    {
        text = text + "" + "<br>";
    }
    else
    {
         text = text + "you: " +  o +  "<br>"; 
        text = text + "<b><u>Chatbot:</u></b>" + '&nbsp;' + '&nbsp;' +  "Now you see in the picture that from point A and B are connected.To calculate the width and height you need to subtract the first number of point A to the first number of point B. You do  the same procedure to the second number as well. Subtract and write the answer in the feild" + "<br>";
        
       i = myImage2.src="Images/SecondImage.png";
           hiddenform.style.display= "none";
          hiddenform1.style.display= "block";
    }
    
    
}


function minus(){
    
    
      state = 7;
  
    
    var input1 =  document.getElementById("w").value;  
    var input2 =  document.getElementById("q").value;
   
  
    
    
    
    if (input1 != "" &&  input2 !=""  )
    {
      if(input1 == "4" &&  input2 =="3"     ||  input1 =="3"  &&  input2 == "4")
      {
          text = text +"<b><u>Chatbot:</u></b>"+ "correct you know the basics. Do you want to move on to next stage  " + "<br>";
          
          
      }
        else
        {
             text = text + "<b><u>Chatbot:</u></b>" + '&nbsp;' + '&nbsp;' +"chaeck the picture again" + "<br>";
            //ShowImage();
        }
    }
    else
    {
        
        alert("all feild should have number enterd");
    
         
    }
  
}







function thirdImage(){
      state = 8;
       var hiddenform1= document.getElementById("Subtract");
     var hiddenform2= document.getElementById("pythogoras");
    var hiddenform3= document.getElementById("solution");
    var hiddenform4= document.getElementById("container2");
    var myImage3 = document.getElementById('image3');
      var o = document.getElementById('nameInput').value;
    
     var Array1 = ['Yes', 'Yeah', 'Yh', 'yes' , 'yeah', 'yh', 'yup', 'Yup', 'ok', 'okay', 'yh i see that'];
    
   if(Array1.indexOf(o) == -1) //returns the index of the selected element 
    {
        text = text + "" + "<br>";
    }
    else
    {
         text = text + "you: " +  o +  "<br>"; 
        text = text + "<b><u>Chatbot:</u></b>" + '&nbsp;' + '&nbsp;' +  "In a third Image you see a triangle width and height are marked. To calculate distance between A and B. You needed  to take width and height of a triangle and power each number by ^2. Put the height and width in feild below image which will show you the solution to calculate distance. <br> You can enter any 2 points on the right hand side to find their distance <br> If you understood try our <a href= 'quiz.html' target= '_blank'>Try Quiz click here</a><br>"; 
        
        
        
       i = myImage3.src="Images/ThirdImage.png";
            hiddenform1.style.display= "none";
            hiddenform2.style.display= "block";
            hiddenform3.style.display= "block";
            hiddenform4.style.display= "block";
    }
    
}









function solve(form) {
 
var x = document.getElementById('container2');

a = parseInt(form.a.value);
b = parseInt(form.b.value);
//form.c.value = Math.sqrt(a*a + b*b);
    
    
d = a*a;
e = b*b;
f = d+e;
g = Math.sqrt(f);    
    

 
    x.innerHTML += "A =" +a;
    x.innerHTML += "<br>"; 
    x.innerHTML += "B =" +b;
    x.innerHTML += "    ";
     
    x.innerHTML += "<br>"; 
    x.innerHTML += "A*A =" + d;
    x.innerHTML += "<br>";
    x.innerHTML += "B*B =" + e;
     x.innerHTML += "<br>";
     x.innerHTML += "a<sup>2</sup> + b<sup>2</sup>=  " + f;
     x.innerHTML += "<br>";
     x.innerHTML += "&radic;a<sup>2</sup> + b<sup>2</sup> = " + g;
    
 }








//handle click
    function handleButtonClick() {  
    var input = document.getElementById("nameInput");

     
   if (state==0) {
       // create intro statement
      handleNameState(input.value);  
            
    }
    else if (state==1) {
        //create knowledge
      knowDistance(input.value);  
    }
     else if (state==2) {
        //create knowledge
        DontKnowDistance(input.value);  
    }
        else if(state==3){
        ShowImage(input.value);
            
        }
        else if (state == 4){
           Validateform(input.value);
    
        }
        else if (state == 5){
            showAnotherImage(input.value);
            
        }
         else if (state == 6){
            minus(input.value);
            
        }
         else if (state == 7){
            thirdImage(input.value);
            
        }
         
    displayText();
    
    }


function message(){   
    text = text + "Chatbot: " +  "Hello, What is your name? <br>";
    //var ai_message = $("#reply").html();
    //ai_message = "hey, What is your name";
    //$("#reply").html(ai_message);     
}






