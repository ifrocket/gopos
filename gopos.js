/* Go to element position */
function gopos(obj, top, speed) {

    var elem,
        toppos;

    if(speed == "") {
        speed = "slow";
    }

    if($("#" + obj).length > 0) {
        elem = $("#" + obj);
    }
    else if($("." + obj).length > 0) {
        elem = $("." + obj);
    }
    else if(obj.length > 0) {
        elem = obj;
    }
    else {
        return false;
    }

    if(top) {
        toppos = elem.offset().top - top;
    }
    else {
        toppos = elem.offset().top;
    }

    $("html, body").animate({
        scrollTop : toppos
    }, speed, function() {
        // Animation complete
    });

}
