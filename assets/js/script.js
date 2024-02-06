window.onload = function(){
    const d = new Date();
    let time = d.getTime();
    let srcImage = `assets/img/logo.gif?${time}`;

    $(document.body).css("overflow","hidden");
    $("#pictureLoad").attr("src", srcImage);
    setTimeout(function () {
        let loader = $("#loader");
        let landingMessage = $("#landingMessage");
        let centerGif = $("#centerGif");
    
        loader.addClass("fadeOut");
        setTimeout(function () {
            loader.hide();
            landingMessage.addClass("slideUpShow").css("opacity", "1");
            setTimeout(function(){
                centerGif.addClass("fadeIn").css("display", "block");
            }, 500);
        }, 500);
    
        $(document.body).css("overflow", "visible");
    }, 2000);
    ajaxCallBack("assets/data/timeline.json", function(result){
        printTimeline(result);
    });
}

function printTimeline(data){
    let html = "";
    for(let d of data){
        let temp = printSimpleTimelineUnit(d);
        if(d.hasOwnProperty("image")){
            temp = printImageTimelineUnit(d)
        }
        html += temp;
    }
    $("#printTimeline").html(html);
}

function printSimpleTimelineUnit(d){
    return `<li class="event">
    <h3>${d.title}</h3>
    <p>${d.description}</p>
  </li>`;
}

function printImageTimelineUnit(d){
    return `<li class="event">
    <div class="project">
      <div class="imageProject">
        <img src="assets/img/${d.image}" alt="portfolio">
      </div>
      <div class="descriptionProject">
        <div class="title"><h3>${d.title}</h3></div>
        <div class="description"><p>${d.description}</p></div>
        <a href="${d.href}" target="_blank"><div class="linkButton fj-w50 fj-mx-auto">Go to page</div></a>
      </div>
    </div>
  </li>`;
}

function ajaxCallBack(u, s){
    $.ajax({
        url: u,
        method: "GET",
        data: "",
        dataType: "json",
        success: s,
        error: function(xhr){
            console.error(xhr);
        }
    });
}

