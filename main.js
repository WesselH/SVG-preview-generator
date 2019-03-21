function setup() {
 addEventListener();
 setupPage();
}

function setupPage() {

    for (let i = 0; i < document.querySelectorAll('.category').length; i++) {
        TweenMax.set(document.querySelectorAll('.category')[i], {height: document.querySelector('.category-name').offsetHeight+2});
    }
}

function addEventListener() {
    for (let i = 0; i < document.querySelectorAll('.category-exp-col-button').length; i++) {
        document.querySelectorAll('.category-exp-col-button')[i].addEventListener("click", handleExpandButtonClick, false);
        document.querySelectorAll('.category-name')[i].addEventListener("click", handleExpandButtonClick, false);
    }
}
function handleExpandButtonClick(e) {
    console.log(e.target.parentElement.querySelector('.category-name'));
    
    if(e.target.parentElement.querySelector('.category-exp-col-button').classList.contains('active')){
        TweenMax.set(e.target.parentElement.querySelector('.category-exp-col-button'), {className:"-=active"});
        TweenMax.to(e.target.parentElement, 0.5, {height: e.target.parentElement.querySelector('.category-name').offsetHeight});
    }

    else{
        TweenMax.set(e.target.parentElement.querySelector('.category-exp-col-button'), {className:"+=active"});
        TweenLite.set(e.target.parentElement, {height:"auto"})
        TweenLite.from(e.target.parentElement, 0.5, {height:e.target.parentElement.querySelector('.category-name').offsetHeight})
    }


}

setup();
