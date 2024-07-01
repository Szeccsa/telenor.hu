// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// Function to check the cookie and hide the banner if it exists
function checkBannerCookie() {
    const banner = document.getElementById('topBanner');
    const overlay = document.getElementById('overlay');
    const bannerCookie = getCookie('bannerClosed');
    if (bannerCookie === "true") {
        banner.style.display = 'none';
        overlay.style.display = 'none';
    }
}

// Add event listener to the close button
document.getElementById('closeButton').addEventListener('click', function () {
    setCookie('bannerClosed', 'true', 365);
    document.getElementById('topBanner').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

// Check the cookie on page load
window.onload = checkBannerCookie;
