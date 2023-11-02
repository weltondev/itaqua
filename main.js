const open = document.querySelector("#open");
const close = document.querySelector("#close");
const modal = document.querySelector("main dialog");

open.addEventListener('click', ()=>{
    modal.showModal();
});

close.addEventListener('click', ()=> {
    modal.close();
});