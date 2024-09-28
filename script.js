/* 
 * let handleClick = (event) => {
 *     if(event.target.id !== "sidebar-toggle") 
 *         return;
 *     if(sidebar.classList.length === 0) 
 *         sidebar.classList.add("slide-in");
 *     else if(sidebar.classList.contains("slide-out"))
 *         sidebar.classList.replace("slide-out", "slide-in");
 *     else
 *         sidebar.classList.replace("slide-in", "slide-out");
 * };
 * var sidebar = document.getElementById("sidebar");
 * window.addEventListener("click", handleClick); 
 */

const quicklinks = new Map([
    ['Y', "https://www.youtube.com"],
    ['M', "https://messages.google.com/web/conversations"],
    ['T', "https://web.telegram.org/z/"],
    ['G', "https://mail.google.com/mail/u/0/#inbox"],
    ['D', "https://drive.google.com/drive/u/0/my-drive"],
    ['C', "https://calendar.google.com/calendar?authuser=alexander.snit@stonybrook.edu"],
    ['S', "https://prod.ps.stonybrook.edu/psp/csprods/?cmd=login"],
    ['B', "https://mycourses.stonybrook.edu/d2l/home"],
    ['P', "https://piazza.com/"]
]);


document.onkeydown = (event) => {
    if(!event.shiftKey || !quicklinks.has(event.key)) return;

    var link = document.createElement("a");
    link.target = "_top";
    link.href = quicklinks.get(event.key);
    link.click();
};