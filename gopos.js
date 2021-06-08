/* Animated scroll to element position with jQuery */
// Usage: gopos(object / "id" / "class", top position, speed);

function gopos(obj, top, speed) {

    var elem,
        toppos;

    if(speed === "") {
        speed = "slow";
    }

    if($.type(obj) === "object") {
        elem = obj;
    }
    else {

        if ($("#" + obj).length) {
            elem = $("#" + obj);
        } else if ($("." + obj).length) {
            elem = $("." + obj);
        }

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
