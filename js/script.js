let list =  document.querySelector('.tab-link'),
    listItems = document.querySelectorAll('.tab-link .tabs__nav-btn'),
    headers = document.querySelectorAll('.header__space');


function showTab (i){
    headers.forEach(elem => {
        elem.classList.remove('active');
    });
    headers[i].classList.add('active')
}


listItems.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        showTab(index)
    })
})

