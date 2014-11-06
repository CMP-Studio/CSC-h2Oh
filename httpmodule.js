function _recall(text){
setTimeout (this.getNewMessages(0),1000 );
//!! this won't re-call the getNewMessages function...
}
 
exports.getNewMessages= function (lastmessId) {
 
var url = "http://waterservices.usgs.gov/nwis/iv/?format=json&sites=03049640&modifiedSince=PT30M";
var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        _dosomething();
    },
    timeout:5000
});
 
xhr.open("GET",url);
xhr.send();
 
}