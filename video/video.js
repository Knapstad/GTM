window.dataLayer = window.dataLayer || [];
players = document.querySelectorAll("video");
players.forEach(add_listeners);

function add_listeners(player){
    var v25=false;
    var v50=false;
    var v75=false;
    var v90=false;

    if(player.title){
        var vid_title= player.title;
    } else {
        vid_title = document.title;
    }

    player.addEventListener("play",function(){
        window.dataLayer.push({
            event: "Video",
            eventCategory: "Video",
            eventAction: "Play",
            eventLabel: vid_title,
            eventValue: Math.round(player.currentTime)
        }

        )
    });
    player.addEventListener("pause",function(){
        if(player.currentTime/player.duration<0.98){
        window.dataLayer.push({
            event: "Video",
            eventCategory: "Video",
            eventAction: "Pause",
            eventValue: Math.round(player.currentTime),
            eventLabel: vid_title
        }

        )};
    });
    player.addEventListener("ended",function(){

        window.dataLayer.push({
            event: "Video",
            eventCategory: "Video",
            eventAction: "Ended",
            eventLabel: vid_title,
            eventValue: Math.round(player.currentTime)
        }

        )
    });
    player.addEventListener("timeupdate",function(){
        if(player.currentTime/player.duration>=0.25&&!v25){
        window.dataLayer.push({
            event: "Video",
            eventCategory: "Video",
            eventAction: "Milestone",
            eventLabel: "25%",
            eventValue: Math.round(player.currentTime)
        });
        v25 = true;
        };
        if(player.currentTime/player.duration>=0.50&&!v50){
            window.dataLayer.push({
                event: "Video",
                eventCategory: "Video",
                eventAction: "Milestone",
                eventLabel: "50%",
                eventValue: Math.round(player.currentTime)
            });
            v50 = true;
            };
        if(player.currentTime/player.duration>=0.75&&!v75){
            window.dataLayer.push({
                event: "Video",
                eventCategory: "Video",
                eventAction: "Milestone",
                eventLabel: "75%",
                eventValue: Math.round(player.currentTime)
            });
            v75 = true;
            };
        if(player.currentTime/player.duration>=0.90&&!v90){
            window.dataLayer.push({
                event: "Video",
                eventCategory: "Video",
                eventAction: "Milestone",
                eventLabel: "90%",
                eventValue: Math.round(player.currentTime)
            });
            v90 = true;
            };
    })
}