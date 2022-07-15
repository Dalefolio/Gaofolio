var front = document.querySelector('.face-front');
var back = document.querySelector('.face-back');
var flip = document.querySelector('.book-content');
var page = document.querySelectorAll('.book');
var pageCover = document.querySelectorAll('#pageCover');

var contZindex = 2;
var customZindex = 1;

for (var i = 0; i < page.length; i++) {
    page[i].style.zIndex = customZindex;
    customZindex--;

    page[i].addEventListener('click', function (e) {

        var tgt = e.target;
        var pageThis = this;

        pageThis.style.zIndex = contZindex;
        contZindex++;

        if (tgt.getAttribute('class') == 'face-front') {
            pageThis.style.zIndex = contZindex;
            contZindex += 20;
            setTimeout(function () {
                pageThis.style.transform = 'rotateY(-180deg)';
            }, 500);
        }
        if (tgt.getAttribute("class") == 'face-back') {
            pageThis.style.zIndex = contZindex;
            contZindex += 20;

            setTimeout(function () {
                pageThis.style.transform = 'rotateY(0deg)';
            }, 500);
        }

        if (tgt.getAttribute('id') == 'pageCover') {
            flip.classList.remove("trnsf-reset");
            flip.classList.add("trnsf");
        }
        if (tgt.getAttribute('id') == 'trsf') {
            flip.classList.remove("trnsf");
            flip.classList.add("trnsf-reset");
        }

    });
}
