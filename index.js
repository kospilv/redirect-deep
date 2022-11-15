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
        
        linkEl.attr('href', redirectTo);
        main.appendChild(linkEl);
    }
});