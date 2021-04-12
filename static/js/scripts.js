                                    //function to display or hide the dayly schedule content
function showSchedule(theDay){
    var wrapperSchedule, zimalinks, i, mystr="";
    wrapperSchedule = document.getElementsByClassName("content-unite-wrapper");
    zimalinks = document.getElementsByClassName("mymenu");

    for(i=0; i<wrapperSchedule.length;i++){
        wrapperSchedule[i].style.display="none";
        zimalinks[i].style.borderBottom="none"
    }

    if(theDay==="cwrapper1")
    {
        mystr="cwrapper10";
    }
    else if(theDay==="cwrapper2")
    {
        mystr="cwrapper21"; 
    }
    else if(theDay==="cwrapper3")
    {
        mystr="cwrapper32";
    }

    document.getElementById(mystr).style.borderBottom="3px solid blue"
    document.getElementById(theDay).style.display="block";
    
}

                                        //Function to go the top of the page
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}