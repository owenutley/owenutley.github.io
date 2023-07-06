// This is a little script to add padding under the navigation bar on the home page
const script = () => {
    console.log("move has been invoked")
    let navbarHeight = document.getElementById(".navbar").style.height;
    document.getElementById(".top-padding").style.paddingTop = navbarHeight;
    console.log(navbarHeight, " is the navbar height")
    
}