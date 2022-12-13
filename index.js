window.addEventListener("DOMContentLoaded", (event) => {
    changeBGColor();

    console.log('document.referrer', document.referrer);
});
window.addEventListener('load', () => {
    const { location } = window;
    const { search } = location;
    const params = new URLSearchParams(search);
    const flowRunId = params.get('flowRunId');
    const redirectTo = params.get('redirectTo');

    console.log('flowRunId', flowRunId);

    if (redirectTo) {
        setTimeout(() => window.location = redirectTo, 500);
        // location.assign(redirectTo);
        // const main = document.querySelector('main');
        // const linkEl = document.createElement('a');
        // const linkText = document.createTextNode(redirectTo);
        
        // linkEl.appendChild(linkText);
        // main.appendChild(linkEl);
        // linkEl.setAttribute('href', redirectTo);
    }
});

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

function getTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
}

function changeBGColor() {
    if (getTheme() !== 'dark') {
        document.body.style.backgroundColor = 'white';
    }
}