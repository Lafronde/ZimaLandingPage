function showSchedule(theDay){
    var wrapperSchedule, i;
    wrapperSchedule = document.getElementsByClassName("content-unite-wrapper");

    for(i=0; i<wrapperSchedule.length;i++){
        wrapperSchedule[i].style.display="none";
    }

    document.getElementById(theDay).style.display="block";
}