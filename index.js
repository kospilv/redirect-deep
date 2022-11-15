window.addEventListener('load', () => {
    const { location } = window;
    const { search } = location;
    const params = new URLSearchParams(search);
    const flowRunId = params.get('flowRunId');
    const redirectTo = params.get('redirectTo');

    console.log('flowRunId', flowRunId);

    if (redirectTo) {
        // setTimeout(() => window.location = redirectTo, 500);
        // location.assign(redirectTo);
        const main = document.querySelector('main');
        const linkEl = document.createElement('a');
        const linkText = document.createTextNode(redirectTo);
        
        linkEl.appendChild(linkText);
        main.appendChild(linkEl);
        linkEl.setAttribute('href', redirectTo);
    }
});