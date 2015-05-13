/**
 * The website of raddish also needs some JS.
 * Here we go.
 *
 * So what do we need?
 * - Getting the latest version from GitHub
 * - Get the total downloads of last month
 * - Get the latest push of the development repo.
 */
function Raddish() {

}

Raddish.prototype.getDownloads = function(element) {
    var self = this,
        now = moment().format('YYYY-MM-DD'),
        prev = moment().subtract(1, 'years').format('YYYY-MM-DD');

    jQuery.ajax('http://npm-stat.com/downloads/range/' + prev + ':' + now + '/raddish', {
        success: function(json) {
            var total = 0;

            for(var index in json.downloads) {
                total += json.downloads[index].downloads;
            }

            element.html(total);
        }
    });
};

Raddish.prototype.getLatestVersion = function(element) {
    var self = this;

    jQuery.ajax('https://jsonp.afeld.me/?url=https%3A%2F%2Fregistry.npmjs.org%2Fraddish%2Flatest', {
        dataType: 'jsonp',
        crossDomain: true,
        success: function(data) {
            element.html(data.version);
        },
        error: function() {
            console.log(arguments);
        }
    });
};