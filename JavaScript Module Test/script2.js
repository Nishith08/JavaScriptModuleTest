const eclipse6 = document.querySelector(".eclipse6");
const frame4 = document.querySelector(".frame4");
const x = document.querySelector(".x");
const rules = document.querySelector(".rules");
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
