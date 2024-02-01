const firstapea = document.querySelector(".firstapea");
const paper = document.querySelector(".paper");
const stone = document.querySelector(".stone");
const scisor = document.querySelector(".scisor");
const secondapea = document.querySelector(".secondapea");
const group1 = document.querySelector(".group1");
const group2 = document.querySelector(".group2");
const group3 = document.querySelector(".group3");
const eclipse6 = document.querySelector(".eclipse6");
const frame4 = document.querySelector(".frame4");
const x = document.querySelector(".x");
const rules = document.querySelector(".rules");

const eclipse4 = document.querySelector(".eclipse4");
const eclipse3 = document.querySelector(".eclipse3");
const eclipse5 = document.querySelector(".eclipse5");

const eclipse8 = document.querySelector(".eclipse8");
const eclipse7 = document.querySelector(".eclipse7");
const ellipse6 = document.querySelector(".ellipse6");

// Get the input field and the div
var inputField = document.getElementById('myInput');
var inputField2 = document.getElementById('myInput2');

var storedValue = localStorage.getItem('inputValue2');
if (storedValue) {
    // If there's a stored value, set it as the value of the input field
    inputField2.value = storedValue;
}
var storedValue = localStorage.getItem('inputValue');
if (storedValue) {
    // If there's a stored value, set it as the value of the input field
    inputField.value = storedValue;
}

const buttonnext = document.querySelector(".buttonnext");

x.addEventListener('click', function() {
        $(frame4).hide();
        $(eclipse6).hide();
        $(x).hide();
        
    });
    rules.addEventListener('click', function() {
        $(frame4).show();
        $(eclipse6).show();
        $(x).show();
        
    });


$(document).ready(function(){
        
        $(secondapea).hide();
        $(buttonnext).hide();   
    });


$(document).ready(function(){
    $(paper).click(function(){
        $(firstapea).hide();
        $(secondapea).show();
    });
});


$(document).ready(function(){
    $(stone).click(function(){
        $(firstapea).hide();
        $(secondapea).show();
    });
});


$(document).ready(function(){
    $(scisor).click(function(){
        $(firstapea).hide();
        $(secondapea).show();
    });
});

function sentImage(clickedImage) {

    
        // Array of class names
        var classNames = ['paper', 'stone', 'scisor'];
        // Get a random index
        var randomIndex = Math.floor(Math.random() * classNames.length);
        // Get the randomly selected class name
        var randomClass = classNames[randomIndex];
        // Get the div element with the random class
        var randomClass2 = document.querySelector('.' + randomClass);
        // Get the div where we want to set the content
        var targetDiv = document.getElementById('randomDiv');
        // Set the content of the target div to the content of the randomly selected div
        targetDiv.src = randomClass2.src;
        
    // Get the source of the clicked image
    var src = clickedImage.src;
    
    // Get the fourth image element
    var fourthImage = document.querySelector('.paper20');
    var fifthImage = document.querySelector('.group20');
    
    var eleventhImage = document.querySelector('.group11');

    
    // Set the source of the fourth image to the clicked image's source
    fourthImage.src = src;
    if(clickedImage==paper){
        fifthImage.src = group1.src;
    }
    if(clickedImage==stone){
        fifthImage.src = group2.src;
    }
    if(clickedImage==scisor){
        fifthImage.src = group3.src;
    }
// set the random img
    

if(randomClass2==paper){
    eleventhImage.src = group1.src;
}
if(randomClass2==stone){
    eleventhImage.src = group2.src;
}
if(randomClass2==scisor){
    eleventhImage.src = group3.src;
}



// check the result
const winmsg = document.querySelector(".winmsg");
const losemsg = document.querySelector(".losemsg");
const tiemsg = document.querySelector(".tiemsg");
const common = document.querySelector(".common");
const playagain = document.querySelector(".buttonPA");
const replay = document.querySelector(".buttonRP");


$(document).ready(function(){
 
    $(winmsg).hide();
    $(losemsg).hide();
    $(tiemsg).hide();
    $(common).hide();
    $(playagain).hide();
    $(replay).hide();

    $(eclipse4).show();
        $(eclipse3).show();
        $(eclipse5).show();
    $(eclipse8).show();
        $(eclipse7).show();
        $(ellipse6).show();
    
});
if((clickedImage == paper && randomClass2 == stone) || (clickedImage == stone && randomClass2 == scisor) || (clickedImage == scisor && randomClass2 == paper)){
    
    var storedValue = localStorage.getItem('inputValue2');
if (storedValue) {
    // If there's a stored value, set it as the value of the input field
    inputField2.value = storedValue;
}
    var currentValue = parseInt(inputField2.value);
    // Increase the value by 1
    var newValue2 = currentValue + 1;
    // Set the new value back to the input field
    inputField2.value = newValue2;
    localStorage.setItem('inputValue2', newValue2);


    $(document).ready(function(){
        
        $(winmsg).show();
        $(common).show();
        $(playagain).show();
        $(buttonnext).show();
        $(eclipse8).hide();
        $(eclipse7).hide();
        $(ellipse6).hide();
    });
    $(document).ready(function(){
        $(playagain).click(function(){
            $(firstapea).show();
            $(secondapea).hide();
        });
    });
}


if((clickedImage == stone && randomClass2 == paper) || (clickedImage == scisor && randomClass2 == stone) || (clickedImage == paper && randomClass2 == scisor)){
    
    var storedValue = localStorage.getItem('inputValue');
if (storedValue) {
    // If there's a stored value, set it as the value of the input field
    inputField.value = storedValue;
}

    var currentValue = parseInt(inputField.value);
    // Increase the value by 1
    var newValue = currentValue + 1;
    // Set the new value back to the input field
    inputField.value = newValue;
    localStorage.setItem('inputValue', newValue);

    $(document).ready(function(){
 
        $(losemsg).show();
        $(common).show();
        $(playagain).show();
        $(buttonnext).hide();
        $(eclipse4).hide();
        $(eclipse3).hide();
        $(eclipse5).hide();

    });
    $(document).ready(function(){
        $(playagain).click(function(){
            $(firstapea).show();
            $(secondapea).hide();
        });
    });
}

if((clickedImage == paper && randomClass2 == paper) || (clickedImage == stone && randomClass2 == stone) || (clickedImage == scisor && randomClass2 == scisor)){
  $(replay).hide();

  $(document).ready(function(){
    $(tiemsg).show();
    $(replay).show();
    $(buttonnext).hide();
    $(eclipse4).hide();
        $(eclipse3).hide();
        $(eclipse5).hide();
    $(eclipse8).hide();
        $(eclipse7).hide();
        $(ellipse6).hide();

    
    $(document).ready(function(){
        $(replay).click(function(){
            $(firstapea).show();
            $(secondapea).hide();
        });
    });
});
}

  }

