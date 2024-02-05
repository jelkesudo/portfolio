window.onload = function(){
    const d = new Date();
    let time = d.getTime();
    let srcImage = `assets/img/logo.gif?${time}`;
    $(document.body).css("overflow","hidden");
    $("#pictureLoad").attr("src", srcImage);
    setTimeout(function(){
        $("#loader").addClass("fadeOut");
        setTimeout(function() {
            $("#loader").css("display", "none");
        }, 500);
    $(document.body).css("overflow","visible");

    }, 2000);
}