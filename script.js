var amain = document.getElementById("amain");
var aabout = document.getElementById("aabout");
var acontact = document.getElementById("acontact");

var main = document.getElementById("main");
var about = document.getElementById("about");
var contact = document.getElementById("contact");

amain.addEventListener("click", function(){
    amain.style.backgroundColor = '#3B5948'
    amain.style.width = 110+"%";
    amain.style.padding = 15+"px";

    aabout.style.width = 100+"%";
    aabout.style.padding = 10+"px";
    aabout.style.backgroundColor ="#1B261D";

    acontact.style.width = 100+"%";
    acontact.style.padding = 10+"px";
    acontact.style.backgroundColor ="#1B261D";

    main.style.display ='inline-block'
    about.style.display="none"
    contact.style.display="none"
})

aabout.addEventListener("click", function(){
    aabout.style.backgroundColor = '#3B5948'
    aabout.style.width = 110+"%";
    aabout.style.padding = 15+"px";

    amain.style.width = 100+"%";
    amain.style.padding = 10+"px";
    amain.style.backgroundColor ="#1B261D";

    acontact.style.width = 100+"%";
    acontact.style.padding = 10+"px";
    acontact.style.backgroundColor ="#1B261D";

    main.style.display ='none'
    about.style.display="inline-block"
    contact.style.display="none"
})

acontact.addEventListener("click", function(){
    acontact.style.backgroundColor = '#3B5948'
    acontact.style.width = 110+"%";
    acontact.style.padding = 15+"px";

    aabout.style.width = 100+"%";
    aabout.style.padding = 10+"px";
    aabout.style.backgroundColor ="#1B261D";

    amain.style.width = 100+"%";
    amain.style.padding = 10+"px";
    amain.style.backgroundColor ="#1B261D";

    main.style.display ='none'
    about.style.display="none"
    contact.style.display="inline-block"
})