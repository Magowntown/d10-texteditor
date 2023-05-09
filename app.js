function bolden() {
document.getElementById('boldBtn').addEventListener('click', toggleBold);

function toggleBold() {
    const textarea = document.getElementById('textBox');
    const isBold = getComputedStyle(textarea).getPropertyValue('font-weight');
    if (isBold) {
        textarea.style.fontWeight = 'normal';
    } else {
        textarea.style.fontWeight = 'bold';
    }
}
}