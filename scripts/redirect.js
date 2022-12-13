export const PROD_API_ENDPOINT_URL = 'https://webhook.site/5a17aea5-8ca3-433e-99f2-6a1e39fe5706';
export const STAGING_API_ENDPOINT_URL = 'https://webhook.site/5a17aea5-8ca3-433e-99f2-6a1e39fe5706';
export const REDIRECT_DELAY = 500;

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

export const redirect = (redirectTo) => {
    const redirectHandler = () => window.location = redirectTo;

    setTimeout(redirectHandler, REDIRECT_DELAY);
};

export const main = async (env) => {
    const { location } = window;
    const { search } = location;
    const params = new URLSearchParams(search);
    const redirectTo = params.get('redirectTo');
    const transitionId = params.get('transitionId');
    const flowRunId = params.get('flowRunId');
    const sendReaction = params.get('sendReaction');

    const data = {
        transitionId: transitionId != undefined ? Number(transitionId) : undefined,
        flowRunId: flowRunId != undefined ? Number(flowRunId) : undefined,
        sendReaction: flowRunId != undefined ? sendReaction === 'true' : undefined,
    };

    if (redirectTo) {
        redirect(redirectTo);
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