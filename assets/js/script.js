window.onload = function(){
    const d = new Date();
    let time = d.getTime();
    let srcImage = `assets/img/logo.gif?${time}`;
    console.log(srcImage);
    $("#pictureLoad").attr("src", srcImage);
    setTimeout(function(){
        $("#loader").addClass("removeIt");
    }, 2000);
}