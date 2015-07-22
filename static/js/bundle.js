(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// An object containing common aspect ratios
var aspectRatios =
{
    '16:9': 16/9,
    '16:10': 16/10,
    '4:3': 4/3,
    '5:4': 5/4
};

// Function to calculate the closest aspect ratio based on your screen size
function closestRatio()
{
    var current = $(window).width().inner / $(window).height().inner;
    var closest = {};

    // Loop through common aspect ratios to see which is closest
    for(var ratio in aspectRatios)
    {
        var difference = Math.abs(current - aspectRatios[ratio]);

        if(closest.difference === undefined || closest.difference > difference)
        {
            closest.ratio = ratio;
            closest.difference = difference;
        }
    }

    return closest.ratio;
}

$(document).ready(function()
{
    closestRatio();

    $(window).on('resize', function()
    {
        closestRatio();
    });
});

},{}],2:[function(require,module,exports){
// Code for the timeline

$(document).ready(function()
{
    $('.timeline').dragondrop();
});

},{}],3:[function(require,module,exports){
require('./interface/timeline');
require('./interface/aspect-ratio');

},{"./interface/aspect-ratio":1,"./interface/timeline":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvaW50ZXJmYWNlL2FzcGVjdC1yYXRpby5qcyIsInN0YXRpYy9qcy9pbnRlcmZhY2UvdGltZWxpbmUuanMiLCJzdGF0aWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tbW9uIGFzcGVjdCByYXRpb3NcbnZhciBhc3BlY3RSYXRpb3MgPVxue1xuICAgICcxNjo5JzogMTYvOSxcbiAgICAnMTY6MTAnOiAxNi8xMCxcbiAgICAnNDozJzogNC8zLFxuICAgICc1OjQnOiA1LzRcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgY2xvc2VzdCBhc3BlY3QgcmF0aW8gYmFzZWQgb24geW91ciBzY3JlZW4gc2l6ZVxuZnVuY3Rpb24gY2xvc2VzdFJhdGlvKClcbntcbiAgICB2YXIgY3VycmVudCA9ICQod2luZG93KS53aWR0aCgpLmlubmVyIC8gJCh3aW5kb3cpLmhlaWdodCgpLmlubmVyO1xuICAgIHZhciBjbG9zZXN0ID0ge307XG5cbiAgICAvLyBMb29wIHRocm91Z2ggY29tbW9uIGFzcGVjdCByYXRpb3MgdG8gc2VlIHdoaWNoIGlzIGNsb3Nlc3RcbiAgICBmb3IodmFyIHJhdGlvIGluIGFzcGVjdFJhdGlvcylcbiAgICB7XG4gICAgICAgIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoY3VycmVudCAtIGFzcGVjdFJhdGlvc1tyYXRpb10pO1xuXG4gICAgICAgIGlmKGNsb3Nlc3QuZGlmZmVyZW5jZSA9PT0gdW5kZWZpbmVkIHx8IGNsb3Nlc3QuZGlmZmVyZW5jZSA+IGRpZmZlcmVuY2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsb3Nlc3QucmF0aW8gPSByYXRpbztcbiAgICAgICAgICAgIGNsb3Nlc3QuZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvc2VzdC5yYXRpbztcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgIGNsb3Nlc3RSYXRpbygpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBjbG9zZXN0UmF0aW8oKTtcbiAgICB9KTtcbn0pO1xuIiwiLy8gQ29kZSBmb3IgdGhlIHRpbWVsaW5lXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICAkKCcudGltZWxpbmUnKS5kcmFnb25kcm9wKCk7XG59KTtcbiIsInJlcXVpcmUoJy4vaW50ZXJmYWNlL3RpbWVsaW5lJyk7XG5yZXF1aXJlKCcuL2ludGVyZmFjZS9hc3BlY3QtcmF0aW8nKTtcbiJdfQ==
