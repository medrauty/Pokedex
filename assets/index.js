function toggleBulbasaur() {
    var bulbasaurBtn = document.getElementById('bulbasaur-btn');
    bulbasaurBtn.classList.toggle('active')

    var popupBulbasaur = document.getElementById('popup-bulbasaur');
    popupBulbasaur.classList.toggle('bulbasaur')
}

function toggleIvysaur() {
    var ivysaurBtn = document.getElementById('ivysaur-btn');
    ivysaurBtn.classList.toggle('active')

    var popupIvysaur = document.getElementById('popup-ivysaur');
    popupIvysaur.classList.toggle('ivysaur')
}
