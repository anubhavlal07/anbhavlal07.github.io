    var countdowndate = new Date("Feb 21,2022 20:00:00").getTime(); /*To Set the time of release*/
    var x = setInterval(function(){
        var curr = new Date().getTime();
        var rem = countdowndate - curr;
        var days = Math.floor(rem/(1000*60*60*24));
        var hours = Math.floor((rem%(1000*60*60*24))/(1000*60*60));
        var mins = Math.floor((rem%(1000*60*60))/(1000*60));
        var secs = Math.floor((rem%(1000*60)/1000));
        document.getElementById("launch").innerHTML = days +"d " + hours + "h " + mins + "m " + secs + "s ";
        if(rem<0)
        {
            clearInterval(x);
            document.getElementById("launch").innerHTML = "EXPIRED";
        }
    },1000);