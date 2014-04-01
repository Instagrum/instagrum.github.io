
var START_DATE = new Date("March 25, 2014 00:00:00"); // put in the starting date here
var INTERVAL = 1800; // in seconds
var INCREMENT = 603; // increase per tick
var START_VALUE = 0; // initial value when it's the start date
var count = 0;

window.onload = function()
{
var msInterval = INTERVAL * 1000;
var now = new Date();
count = parseInt((now - START_DATE)/msInterval) * INCREMENT + START_VALUE;
document.getElementById('counter').innerHTML = count;
setInterval("count += INCREMENT; document.getElementById('counter').innerHTML = count;", msInterval);
}

function addCommas(nStr)
{
nStr += '';
x = nStr.split('.');
x1 = x[0];
x2 = x.length > 1 ? '.' + x[1] : '';
var rgx = /(\d+)(\d{3})/;
while (rgx.test(x1)) {
x1 = x1.replace(rgx, '$1' + ',' + '$2');
}
return x1 + x2;
}
