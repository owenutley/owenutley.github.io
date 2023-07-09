// This is a little script to add padding under the navigation bar on the home page
const script = () => {
    console.log("move has been invoked")
    let navbarHeight = document.getElementById(".navbar").style.height;
    document.getElementById(".top-padding").style.paddingTop = navbarHeight;
    console.log(navbarHeight, " is the navbar height")
    
}

const container = document.querySelector('.scroll-lock');

container.addEventListener('scroll', function() {
  const scrollPosition = container.scrollTop;
  
  // Determine the positions where you want to lock scrolling
  const lockPosition1 = 200; // Adjust the position as needed
  const lockPosition2 = 500; // Adjust the position as needed
  
  // Lock scrolling when reaching the specified positions
  if (scrollPosition >= lockPosition1 && scrollPosition <= lockPosition2) {
    container.scrollTop = lockPosition1;
  }
});