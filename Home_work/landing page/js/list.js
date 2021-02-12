const acItem = document.getElementsByClassName('accordion');
const accTab = document.getElementsByClassName('accordion_title');

for (i = 0; i < accTab.length; i++) {
    accTab[i].addEventListener('click', onClick, false);
}

function onClick() {
    const accClass = this.parentNode.className;
	

    for (i = 0; i < acItem.length; i++) {
        acItem[i].className = 'accordion close';
    }

    if (accClass == 'accordion close') {
        this.parentNode.className = 'accordion open';
    }

    if (accClass == 'accordion open') {
        this.parentNode.className  = 'accordion close';
        /*       return;*/
    }
}
