// Set the date we're counting down to
const weddingDate = new Date("Oct 16, 2021 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = weddingDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Output the result in an element
  document.getElementById("count").innerHTML = days + " Days until the wedding!";


  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "Wedding!";
  }
}, 1000);
