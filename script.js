let handleClick = (event) => {
    if(event.target.id !== "sidebar-toggle") 
        return;
    if(sidebar.classList.length === 0) 
        sidebar.classList.add("slide-in")
    else if(sidebar.classList.contains("slide-out")) 
        sidebar.classList.replace("slide-out", "slide-in");
    else
        sidebar.classList.replace("slide-in", "slide-out");
}
var sidebar = document.getElementById("sidebar");
window.addEventListener("click", handleClick);