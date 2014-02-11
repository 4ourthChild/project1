
var Dialog = function () {
    // Constructor
    this.init();
}

Dialog.prototype = {

    modalString: "<p>Your session is about to expire. Would you like to extend your session?</p><input value='Yes' type='button'/><input id='deny' value='No' type='button'/>",

    timeoutLength: 1000,

    init: function () {

        // Create Header String
        var modalContainer = document.getElementById('modal');

        var modalHTML = "<p>Your session is about to expire. Would you like to extend your session?</p><input id='affirm' value='Yes' type='button'/><input id='deny' value='No' type='button'/>";
        modalContainer.innerHTML = modalHTML;
       
        document.getElementById('dialogbox').style.display = "none";
        var deny = document.getElementById('deny');
        var affirm = document.getElementById('affirm');

        var closure = this;
        deny.addEventListener('click', function() { closure.onPressNo() });
        affirm.addEventListener('click', function() { closure.onPressYes() });

        this.startTimeout();
    },

    // Create HTML Modal 
    showModal: function () {
        document.getElementById('dialogbox').style.display = "";
    },

    hideModal: function () {
        document.getElementById('dialogbox').style.display = "none";
    },

    onPressNo: function () {
        window.location.assign("http://www.google.com");
    },

    onPressYes: function () {
        this.hideModal();
        this.startTimeout();
    },

    startTimeout: function () {
        var closure = this;
        setTimeout(function () {
            closure.showModal();
            // if() {
            //     closure.onPressYes();
            // }else {
            //     closure.onPressNo();
            // }
        }, this.timeoutLength);
    },

    bind: function (fn, context) {
        return function () {
            return fn.apply(context, arguments);
        }
    }

}


// Don't Erase these

// baseUrl = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json'
// key = '&apikey=kej36g99ry7adxc2f37g7tqq';