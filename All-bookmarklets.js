// Maps

//Google - GMap in Bookmarks.html repository file
javascript: (function () { const input = document.createElement('input'); input.setAttribute('value', window.getSelection().toString()); document.body.appendChild(input); input.select(); document.execCommand('copy'); document.body.removeChild(input); navigator.clipboard.readText() .then((text) => { let place = text.replace(/ /g, "+"); let gmAddress = "https://www.google.com/maps/place/" + place; window.open(gmAddress, "_blank"); }); })();

// DuckDuckGo - DDGmap
javascript: (function () { const input = document.createElement('input'); input.setAttribute('value', window.getSelection().toString()); document.body.appendChild(input); input.select(); document.execCommand('copy'); document.body.removeChild(input); navigator.clipboard.readText() .then((text) => { let place = text.replace(/ /g, "+"); let ddgAddress = "https://duckduckgo.com/?hps=1&q=" + place + "&iaxm=maps"; window.open(ddgAddress, "_blank"); }); })();

// OpenStreetMap - OSMap
javascript: (function () { const input = document.createElement('input'); input.setAttribute('value', window.getSelection().toString()); document.body.appendChild(input); input.select(); document.execCommand('copy'); document.body.removeChild(input); navigator.clipboard.readText() .then((text) => { let place = text.replace(/ /g, "+"); let osAddress = "https://www.openstreetmap.org/search?query=" + place; window.open(osAddress, "_blank"); }); })();

// This is the all-in-one bookmarklet the will try to open the 3 maps - AllMaps
javascript: (function () { const input = document.createElement('input'); input.setAttribute('value', window.getSelection().toString()); document.body.appendChild(input); input.select(); document.execCommand('copy'); document.body.removeChild(input); navigator.clipboard.readText() .then((text) => { let place = text.replace(/ /g, "+"); let gmAddress = "https://www.google.com/maps/place/" + place; window.open(gmAddress, "_blank"); let ddgAddress = "https://duckduckgo.com/?hps=1&q=" + place + "&iaxm=maps"; window.open(ddgAddress, "_blank"); let osAddress = "https://www.openstreetmap.org/search?query=" + place; window.open(osAddress, "_blank"); }); })();


// ImgSearch

// Google - G-img
javascript: (function () { navigator.clipboard.readText() .then((text) => { let gSearch = "https://lens.google.com/uploadbyurl?url=" + text ; window.open(gSearch, "_blank"); });})();

// Bing - B-img
javascript: (function () { navigator.clipboard.readText() .then((text) => { let bSearch = "https://www.bing.com/images/searchbyimage?FORM=IRSBIQ&cbir=sbi&imgurl=" + text; window.open(bSearch, "_blank"); });})();

// Yandex - Y-img
javascript: (function () { navigator.clipboard.readText() .then((text) => { let ySearch = "https://yandex.com/images/search?source=collections&&url=" + text + "&rpt=imageview"; window.open(ySearch, "_blank"); });})();

// TinyEye - T-img
javascript: (function () { navigator.clipboard.readText() .then((text) => { let tSearch = "https://tineye.com/search/?url=" + text + "&rpt=imageview"; window.open(tSearch, "_blank"); });})();

// This is the all-in-one bookmarklet - AllImgSearch
javascript: (function () { navigator.clipboard.readText() .then((text) => { let bSearch = "https://www.bing.com/images/searchbyimage?FORM=IRSBIQ&cbir=sbi&imgurl=" + text; window.open(bSearch, "_blank"); let ySearch = "https://yandex.com/images/search?source=collections&&url=" + text + "&rpt=imageview"; window.open(ySearch, "_blank"); let gSearch = "https://lens.google.com/uploadbyurl?url=" + text ; window.open(gSearch, "_blank"); let tSearch = "https://tineye.com/search/?url=" + text + "&rpt=imageview"; window.open(tSearch, "_blank"); });})();



// Others


// Offline-check
javascript: (function () { let addr = window.location.href; checkAddr = "https://www.isitdownrightnow.com/" + addr.split("https://")[1].split("/")[0] + ".html"; window.open(checkAddr, "_blank"); }) ();


// WikiSearch
javascript: (function () { const input = document.createElement('input'); input.setAttribute('value', window.getSelection().toString()); document.body.appendChild(input); input.select(); document.execCommand('copy'); document.body.removeChild(input); navigator.clipboard.readText() .then((text) => { let topic = text.replace(/ /g, "_"); let wAddress = "https://en.wikipedia.org/wiki/" + topic; window.open(wAddress, "_blank"); }); })();


// AISearch
javascript: (function () { const input = document.createElement('input'); input.setAttribute('value', window.getSelection().toString()); document.body.appendChild(input); input.select(); document.execCommand('copy'); document.body.removeChild(input); navigator.clipboard.readText() .then((text) => { let topic = text.replace(/ /g, "+"); let intro = "Give me some information about "; let phAddress = "https://www.phind.com/search?q=" + intro + topic; window.open(phAddress, "_blank"); let yAddress = "https://you.com/search?q=" + intro + topic + "&fromSearchBar=true&tbm=youchat&chatMode=default"; window.open(yAddress, "_blank"); }); })();


// TubeSearch
javascript: (function () { const input = document.createElement('input'); input.setAttribute('value', window.getSelection().toString()); document.body.appendChild(input); input.select(); document.execCommand('copy'); document.body.removeChild(input); navigator.clipboard.readText() .then((text) => {
userChoice = confirm("Click OK for YouTube, Cancel for Invidious"); if (userChoice) { yTube = "https://www.youtube.com/results?search_query=" + text ; window.open(yTube, "_blank"); } else { iTube = "https://inv.nadeko.net/search?q=" + text ; window.open(iTube, "_blank"); } }) })();


// Front-ends
javascript: (function () { navigator.clipboard.readText() .then(function (text) { if (text.includes("/shorts/")) { let videoId = text.split("shorts/")[1].split("&")[0]; let altAddress = "https://yewtu.be/watch?v=" + videoId; window.open(altAddress, "_blank"); } else if (text.includes("youtube.com")) { let videoId = text.split("v=")[1].split("&")[0]; let altAddress = "https://yewtu.be/watch?v=" + videoId; window.open(altAddress, "_blank"); } else if (text.includes("youtu.be")) { let videoId = text.split(".be/")[1].split("&")[0]; let altAddress = "https://yewtu.be/watch?v=" + videoId; window.open(altAddress, "_blank"); } else if (text.includes("twitter.com") || text.includes("x.com")) { let xAcc = text.split(".com")[1].split("&")[0]; let altAddress = "https://xcancel.com/" + xAcc.substring(1); window.open(altAddress, "_blank"); } else if (text.includes("instagram.com")) { let instAcc = text.split(".com")[1].split("&")[0]; let altAddress = "https://www.picuki.com/profile/" + instAcc; window.open(altAddress, "_blank"); } else if (text.includes("tiktok.com")) { let ttAcc = text.split(".com")[1].split("&")[0]; let altAddress = "https://urlebird.com/user/" + ttAcc.substring(1) + "/"; window.open(altAddress, "_blank"); } else { alert("No alternative link found"); } }) })();


// More details at: https://github.com/Zigul1/Bookmarklets
