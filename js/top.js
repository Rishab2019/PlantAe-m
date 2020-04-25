window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("returntotop").style.display = "block";
    } else {
        document.getElementById("returntotop").style.display = "none";
    }
}
function topFunction() {
            jQuery('html,body').animate({
                scrollTop: 0
            }, 800);
}
