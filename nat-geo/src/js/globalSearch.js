function globalSearch() {
    const searchModal = document.querySelector('.ng-c-gobal-search-modal');
    const searchForm = document.querySelector('.ng-c-gobal-search__form');
    const searchModalClose = document.querySelector('.ng-c-gobal-search__close-btn');
    const searchModalMenu = document.querySelector('.ng-js-globalsearch');
    const searchInput = document.querySelector('.ng-c-gobal-search__input');
    const searchSubmit = document.querySelector('.ng-c-gobal-search__submit-btn');

    searchModalMenu.addEventListener('click', function() {
        searchModal.classList.add('open');
    });

    searchModalClose.addEventListener('click', function() {
        searchModal.classList.remove('open');
        searchForm.reset();
        searchSubmit.style.visibility = 'hidden';
    });

    searchInput.addEventListener('input', function(e) {
        if(!e.currentTarget.value) {
            searchSubmit.style.visibility = 'hidden';
        } else {
            searchSubmit.style.visibility = 'visible';
        }

        // console.log(e.currentTarget.value);
    });
}

export default globalSearch;