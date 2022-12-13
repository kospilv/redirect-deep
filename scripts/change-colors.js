export const getTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
}

export const changeBGColor = () => {
    if (getTheme() !== 'dark') {
        document.body.style.backgroundColor = 'white';
    }
}