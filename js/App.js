
var App = function () {
    // Constructor
    this.init();
}

App.prototype = {

    init: function () {

        // Create Header String
        var header = " <nav>"+
                    "<ul>" +
                        "<a href='index.html'><li>Brooke Frandsen</li></a>"+
                        "<a href='index.html'><li>Angular JS</li></a>" +
                        "<a href='aboutme.html'><li>About Brooke</li></a>" +
                    "</ul>" +
                "</nav>";
        
        // Add header html to header div                
        var head = document.getElementById('heading');
        head.innerHTML = header;

        // Create Footer String
        var footer =  "<p>&copy; 4ourthChild &nbsp;|&nbsp;  Brooke Frandsen" +
          "&nbsp;|&nbsp;  brookefrandsen@gmail.com</p>";
        
        // Get footer and add html
        var footerInfo = document.getElementById('footer');
        footerInfo.innerHTML = footer;

    }
}


// Don't Erase these

// baseUrl = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json'
// key = '&apikey=kej36g99ry7adxc2f37g7tqq';