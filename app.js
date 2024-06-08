const shareEl = document.getElementById('share');
const popupEl = document.getElementById('popup');
const hideEl = document.getElementById('hide');

shareEl.addEventListener('click', (e) =>{
    popupEl.style.display = 'flex';
    shareEl.style.background = '#525c6a';
    hideEl.style.cursor = 'pointer';
});
// hide the popup when clicked 
hideEl.addEventListener('click', (e) =>{
    popupEl.style.display = 'none';
});