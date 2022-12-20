const PROD_API_ENDPOINT_URL = 'https://www.avito.ru/web/1/flower/flowButtonClick';
const STAGING_API_ENDPOINT_URL = 'https://staging-www.k.avito.ru/web/1/flower/flowButtonClick';
const WEBVIEW_REDIRECT_DELAY = 600;
const DESKTOP_REDIRECT_DELAY = 300;

export const callApiMethod = (url, data) => {
    return fetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
};

export const redirect = (redirectTo, delay) => {
    const redirectHandler = () => window.location = redirectTo;

    setTimeout(redirectHandler, delay ?? 0);
};

export const main = async (env) => {
    const { location } = window;
    const url = new URL(location.href);
    const redirectUrl = url.searchParams.get('redirectUrl');
    const transitionId = url.searchParams.get('transitionId');
    const flowRunId = url.searchParams.get('flowRunId');
    const sendReaction = url.searchParams.get('sendReaction');
    const isWebview = /Android|iPhone/i.test(navigator.userAgent);

    const data = {
        transitionId: transitionId != null ? Number(transitionId) : undefined,
        flowRunId: flowRunId != null ? Number(flowRunId) : undefined,
        sendReaction: sendReaction != null ? sendReaction === 'true' : undefined,
    };

    if (redirectUrl) {
        redirect(redirectUrl, isWebview ? WEBVIEW_REDIRECT_DELAY : DESKTOP_REDIRECT_DELAY);
    }

    if (flowRunId) {
        try {
            const url = env === 'prod' ? PROD_API_ENDPOINT_URL : STAGING_API_ENDPOINT_URL;

            await callApiMethod(url, data);
        } catch (e) {
            console.log(e);
        }
    }
};