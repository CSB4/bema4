// Wyedytuj tresc Tutaj:
    var cookieMessage = "Centrum Stomatologiczne Bema 4 korzysta z plików cookies w celach statystycznych. Warunki przechowywania plików cookies można określić w ustawieniach przeglądarki internetowej.";

// ######################
// ###########
// ###

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function displayNotification(c_action) {

    var message = "<div class='cookiewarning' onclick=\"doAccept()\">";
    message += cookieMessage ;
    message += " <a href=\"#\" /></a>";
    message += "</div>";

    setTimeout(function(){
        document.body.innerHTML += message;
     }, 100);
}

function doAccept() {
    setCookie("jsCookieCheck", null, 365);
    var warning = document.querySelector(".cookiewarning");
    warning.className = warning.className + " closed";

    setTimeout(function(){
        warning.outerHTML = "";
        delete warning;
     }, 1000);
}


function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString() + "; path=/");
    document.cookie = c_name + "=" + c_value;
}

function checkCookie(c_action) {

    var cookieName = "jsCookieCheck";
    var cookieNameNo = "jsNoCookieCheck";
    var cookieChk = getCookie(cookieName);
    var cookieChkNo = getCookie(cookieNameNo);
    if (cookieChk != null && cookieChk != "") {

        setCookie(cookieName, cookieChk, 365);
    }
    else if (cookieChkNo != null && cookieChkNo != "") {

        setCookie(cookieNameNo, cookieChkNo, 365);
    }
    else {
        displayNotification(c_action);
    }
}