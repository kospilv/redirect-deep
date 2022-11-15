window.addEventListener('load', () => {
    const { location } = window;
    const { search } = location;
    const params = new URLSearchParams(search);
    const flowRunId = params.get('flowRunId');
    const redirectTo = params.get('redirectTo');

    console.log('flowRunId', flowRunId);

    if (redirectTo) {
        // location.assign(redirectTo);

        const main = document.querySelector('main');
        const linkEl = doceument.createElement('a');
        const linkText = document.createTextNode("Deep link");
        
        linkEl.appendChild(linkText);
        main.appendChild(linkEl);
        linkEl.attr('href', redirectTo);
    }
});