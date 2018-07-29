(() => {
    var dropdowns = document.getElementsByClassName('show-dropdown');

    Array.from(dropdowns).forEach((ul) => {
        var dropdown = ul.parentElement;
        var dropdownList = ul.nextElementSibling;
        var height = dropdownList.scrollHeight; 

        ul.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('open');

            if (dropdown.classList.contains('open')) {
                dropdownList.style.setProperty('height', height + 'px');
            } else {
                dropdownList.style.setProperty('height', '0');
            }
        });
    });
})();
