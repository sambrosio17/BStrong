$(document).ready(function () {



    $(document).scroll(() => {

        var y = $(this).scrollTop();
        if (y > 100) {
            $("#top").fadeIn();
        } else {
            $("#top").fadeOut();
        }


    });

    $("#top").click(() => {

        scroll({
            top: 0,
            behavior: "smooth"
        });

    });

});


const scrollToSection = (sectID) => {

    var top = document.getElementById("#" + sectID).offsetTop;

    scroll({
        top: top,
        behavior: "smooth"
    });
}