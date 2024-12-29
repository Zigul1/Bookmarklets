
## Bookmarklets collection
(articolo in italiano [qui](https://turbolab.it/browser-455/come-automatizzare-navigazione-browser-bookmarklet-4255)  ![image](https://github.com/user-attachments/assets/fff61062-49ca-4c48-b82e-c1515ac544dc)
)

This is my bookmarklets repository. What is a bookmarklet and how to use it? [Here](https://www.freecodecamp.org/news/what-are-bookmarklets/) is a good explanation with some examples; remember: it's essential that **JavaScript execution** is not blocked in the browser.

The above *Bookmarklets.html* file contains all the bookmarklets in a browser importable file; they can also be saved individually as bookmarks from the *All-bookmarklets.js* file. There's also an Italian version ("-ITA") of the two files.

Most browsers will ask for **permission to read the clipboard** and when it's launched a multitab JS script (like for "AllMaps", "AllImgSearch" and "AISarch"), all the tabs except the first one will be **blocked as pop-up**, so they will need to be authorized.

**Reading the clipboard** allows the bookmarklets to be used also on **non-HTML documents** (like PDFs, Office, etc.), opened **inside or outside the browser**. In this scenario, instead of just selecting the targeted text (most bookmarklets use selected text as input), it's necessary to always **copy** it and then click on the chosen bookmarklet in the browser.


### MAPS

Once __*selected*__ an address or location from the page, clicking on these bookmarklets will open a new tab with the chosen map showing the place (if the syntax of the selection is compatible with the map). The maps available are those by Google (the bookmarklet is called **GMap**), DuckDuckGo (**DDGmap**) and OpenStreetMap (**OSMap**). There's also an "all-in-one" bookmarklet (**AllMaps**) that will try to open all the maps (read above for pop-up behavior).


### IMGSEARCH

After an image *address* is __*copied*__, using the right click (not "copy image", but "copy image address"), these bookmarklets will look for that image in some reverse image search engine. The ones available are those by Google (**G-img**), Bing (**B-img**), Yandex (**Y-img**) and TinEye (**T-img**). The "all-in-one" bookmarklet (**AllImgSearch**) will try to open all the reverse image search sites in different tabs, searching for the same image.


### OTHERS

The **Offline-check** bookmarklet will read the __*current address*__ in the address bar and will open another tab with the results of its online status accordingly to IsItDownRightNow site.

The **WikiSearch** bookmaklet will open another tab with the Wikipedia page corresponding to the __*selected*__ text (if is there any page about it).

The **AISearch** bookmarklet, will append the __*selected*__ text to the prompt "Give me some information about " and will send it to Phind and You.com chatbots; the second tab with you.com could be blocked as pop-up.

The **TubeSearch** bookmarklet will open a small window in which the user can send the __*selected*__ text to YouTube search (if OK is clicked) or to an Invidious instance (if Cancel is clicked).

The (Social) **Front-ends** bookmarklet opens in a new tab the correspondent alternative front-end for the __*copied*__ address; the addresses managed by the bookmarklet are:
- *Youtube*, only video link, no profile or channel (some video may not be available)
- *TikTok*, only profile link, no single post
- *Twitter / X*, only profile link, no single post
- *Instagram*, only profile link, no single post


**@ Firefox users**: instead of being requested to allow clipboard access, when clicking on the bookmarklets you will be asked to paste the link.
