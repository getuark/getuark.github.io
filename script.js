document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const pages = document.querySelectorAll('.page');
    let currentPage = 1;

    startButton.addEventListener("click", function() {
        changePage(2);
    });

    function changePage(pageNumber) {
        pages.forEach(page => {
            page.style.display = 'none';
        });
        document.getElementById(`page${pageNumber}`).style.display = 'block';
        currentPage = pageNumber;
    }

    window.addEventListener('hashchange', function() {
        const pageNumber = parseInt(location.hash.replace('#page', ''));
        if (!isNaN(pageNumber)) {
            changePage(pageNumber);
        }
    });

    // Mostra la pagina iniziale quando la pagina viene caricata
    if (location.hash && location.hash.startsWith("#page")) {
        const pageNumber = parseInt(location.hash.replace('#page', ''));
        if (!isNaN(pageNumber)) {
            changePage(pageNumber);
        }
    }
});
