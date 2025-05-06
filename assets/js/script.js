function toggleTheme() {
    document.body.classList.toggle('light');

    const theme = document.getElementById('value');

    if (theme.textContent === 'DARK MODE') {
        theme.textContent = 'LIGHT MODE';
    } else {
        theme.textContent = 'DARK MODE';
    }

}
