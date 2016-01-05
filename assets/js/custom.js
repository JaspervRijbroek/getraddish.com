/**
 * Some custom javascript to get bootstrap to work with Zepto.
 * This is done so I can do a test run with Zepto.
 *
 * The only thing I have to think about is how I show the menu and make parts of it active.
 */

(function(i,s,r){
    i['GoogleAnalyticsObject']=r;
    i[r]=i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    };
    i[r].l = 1 * new Date();
})(window,document,'ga');

ga('create', 'UA-32550863-5', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');