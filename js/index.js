/* See: http://web.archive.org/web/20140213105950/http://itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript */
function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    var speed = Math.round(distance / 100);
    //if (distance < 100) speed = 40;
    if (speed >= 20) speed = 30;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
        }
        return;
    }
    for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
    }

}


/*  
    Fade in section on scroll down
*/

// handle intersect
var callback = function(entries, observer) {
    
    entries.forEach(function(entry) {
        
        console.log(entry);
        
        // if section enters viewport, fade it in
        if(entry.intersectionRatio !== 0) {
            entry.target.classList.add('show');
            console.log("classlist entering viewport", entry.target.classList);
        } else {
            entry.target.classList.remove('show');
            console.log("classlist exiting viewport", entry.target.classList);
        }
    })
};

var observer =  new IntersectionObserver(callback, { });

const main = document.getElementById('main');

// declare target
var sections = main.getElementsByClassName('section');

// set entries
for(var section of sections) {
    observer.observe(section);
}