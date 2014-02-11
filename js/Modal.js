
var Dialog = function () {
    // Constructor
    this.init();
}

Dialog.prototype = {

    modalString: "<p>Your session is about to expire. Would you like to extend your session?</p><input id='affirm' value='Yes' type='button'/><input id='deny' value='No' type='button'/>",

    timeoutLength: 10000,

    init: function () {

        // Add html to dialog box
        document.getElementById('modal').innerHTML = this.modalString;
       
        //Preserve the context for the click events
        var closure = this;

        // Add on-click events for each button
        document.getElementById('deny').addEventListener('click', function() { closure.onPressNo() });
        document.getElementById('affirm').addEventListener('click', function() { closure.onPressYes() });

        // Start the timeout
        this.startTimeout();
    },

    // Make the dialog box visible
    showModal: function () {
        document.getElementById('dialogbox').style.display = "";
    },

    // Make the dialog box not visible
    hideModal: function () {
        document.getElementById('dialogbox').style.display = "none";
    },

    // Event for no, redirects to Google
    onPressNo: function () {
        window.location.assign("http://www.google.com");
    },

    // Event for yes, resets the timeout
    onPressYes: function () {
        this.hideModal();
        this.startTimeout();
    },

    // Sets a timeout for the page and calls a dialog once time is reached
    startTimeout: function () {
        var closure = this;
        setTimeout(function () {
            closure.showModal();
        }, this.timeoutLength);
    }
}