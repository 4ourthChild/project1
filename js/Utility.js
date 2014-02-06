
Clock = function () {}

Clock.prototype = {

    // Reset the timer on the page
    refresh: function () {
        clock.timeout();
    },

    // Redirect the page to Google if they don't refresh the session
    stop: function () {
        window.location.assign("http://www.google.com");
    },

    // For every 10 seconds, ask if the session needs to be refreshed
    timeout: function () {
        setTimeout(function () {
            if(confirm("Your session is about to expire. Would you like to extend your session?")) {
                clock.refresh();
            }else {
                clock.stop();
            }
        }, timeoutLength);
    }
}

