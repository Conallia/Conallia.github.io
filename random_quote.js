const d = new Date().toDateString();
var quote = ["Linux is the best", "änvlok śakśioź?", "Vim is the best text editor", "KDE is kool", "I love minesweeper", "As of loading this page, the date is " +d, "Tu parles le Français?", "日本語で話せますか？", "I made this with javascript", "/ʋ/ is the better /w/"];

var randNum = Math.floor(Math.random() * quote.length);

document.getElementById("quote").innerHTML = quote[randNum];
