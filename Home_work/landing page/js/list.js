let acItem = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acItem.length; i++) {
    acItem[i].addEventListener("click", function (){
        this.classList.toggle("active");
        let accText = this.nextElementSibling;
        if (accordion_text.style.maxHeight){
            accordion_text.style.maxHeight = null;
        } else {
            accordion_text.style.maxHeight = accordion_text.scrollHeight + "px";
        }
    });
}