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

Raddish.prototype.ajax = function(url, method, options) {
    if(!options && method) {
        options = method;
        method = 'GET';
    }

    var xhr = new XMLHttpRequest();
    xhr.onload = options.success;
    xhr.open(method, url, true);
    xhr.send(options.payload ? options.payload : {});
};

Raddish.prototype.getDownloads = function(element) {
    var self = this,
        now = moment().format('YYYY-MM-DD'),
        prev = moment().subtract(1, 'months').format('YYYY-MM-DD');

    this.ajax('http://npm-stat.com/downloads/range/' + prev + ':' + now + '/raddish', {
        success: function(xhr) {
            var json = JSON.parse(xhr.currentTarget.response),
                total= 0;

            for(var index in json.downloads) {
                total += json.downloads[index].downloads;
            }

            element.innerHTML = total;
        }
    });
};

Raddish.prototype.getLatestVersion = function(element) {
    var self = this;

    this.ajax('https://registry.npmjs.org/raddish/latest?callback=dummy', {
        success: function(xhr) {
            var json = JSON.parse(xhr.currentTarget.response),
                version = json.version;

            element.innerHTML = version;
        }
    });
};