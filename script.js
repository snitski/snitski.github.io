const quicklinks = new Map([
    ['Y', "https://www.youtube.com"],
    ['S', "https://web.stremio.com/"],
    ['N', "https://news.ycombinator.com/"],

    ['G', "https://mail.google.com/mail/u/0/#inbox"],
    ['F', "https://fastmail.com/mail/Inbox/"],
    ['T', "https://tasks.google.com/u/0"],

    ['C', "https://calendar.google.com/calendar/u/0"],
]);


document.onkeydown = (event) => {
    if(!event.shiftKey || !quicklinks.has(event.key)) return;

    var link = document.createElement("a");
    link.target = "_top";
    link.href = quicklinks.get(event.key);
    link.click();
};