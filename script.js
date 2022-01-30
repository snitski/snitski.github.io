function toggleMenu()
{
    const sidebar = document.getElementById("sidebar");

    sidebar.setAttribute('class', sidebar.classList.contains('slide-in') ? 'slide-out' : 'slide-in')
}