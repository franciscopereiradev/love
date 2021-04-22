var countDownDate = new Date("April 17, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML ='From the first time you spoke to me, I know it was you! ';
    document.getElementById("demo2").innerHTML ='I love you more than everything on this universe';
    document.getElementById("demo3").innerHTML =`And it's with you that I want to spend the rest of my life`;
  } else{
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("demo2").innerHTML ='Just wait a little bit!'
  }
}, 1000);

export default function Register(){
    return(

        <div class='pageLanding'>
            <title>LoveYou ❤ | Error 261</title>
            <div class='main'>
                <div class='circle1'></div>
                <div class='circle2'></div>
                <div class='glassLogin'></div>

            </div>
            <div class='countdown' >
            <p>Error 261 - Yup, was on this day whens all started</p>
            {/* <p>Just wait a litle bit</p> */}
            <p id='demo'></p>
            <p id='demo2'></p>
            <p id='demo3'></p>
            {/* <p>From the first time you spoke to me, I know it was you!</p> */}
            {/* <p>I love you more than everything on this universe</p>
            <p>And it's with you that I want to spend the rest of my life</p> */}
            </div>
        </div>
    )
}