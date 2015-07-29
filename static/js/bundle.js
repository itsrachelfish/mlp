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
    console.log(closestRatio());

    $(window).on('resize', function()
    {
        closestRatio();
    });
});

},{}],2:[function(require,module,exports){
// An object containing common aspect ratios
var aspectRatios =
{
    '16:9': 16/9,
    '16:10': 16/10,
    '4:3': 4/3,
    '5:4': 5/4
};

$(document).ready(function()
{
    // Loop through common aspect ratios to build options menu
    for(var ratio in aspectRatios)
    {
        $('.aspect-ratio').append('<option>'+ratio+'</option>');
    }
});

},{}],3:[function(require,module,exports){
// Code for the timeline

$(document).ready(function()
{
    $('.timeline').dragondrop();
});

},{}],4:[function(require,module,exports){
require('./interface/timeline');
require('./interface/aspect-ratio');
require('./interface/options');

},{"./interface/aspect-ratio":1,"./interface/options":2,"./interface/timeline":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvaW50ZXJmYWNlL2FzcGVjdC1yYXRpby5qcyIsInN0YXRpYy9qcy9pbnRlcmZhY2Uvb3B0aW9ucy5qcyIsInN0YXRpYy9qcy9pbnRlcmZhY2UvdGltZWxpbmUuanMiLCJzdGF0aWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIEFuIG9iamVjdCBjb250YWluaW5nIGNvbW1vbiBhc3BlY3QgcmF0aW9zXG52YXIgYXNwZWN0UmF0aW9zID1cbntcbiAgICAnMTY6OSc6IDE2LzksXG4gICAgJzE2OjEwJzogMTYvMTAsXG4gICAgJzQ6Myc6IDQvMyxcbiAgICAnNTo0JzogNS80XG59O1xuXG4vLyBGdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIGNsb3Nlc3QgYXNwZWN0IHJhdGlvIGJhc2VkIG9uIHlvdXIgc2NyZWVuIHNpemVcbmZ1bmN0aW9uIGNsb3Nlc3RSYXRpbygpXG57XG4gICAgdmFyIGN1cnJlbnQgPSAkKHdpbmRvdykud2lkdGgoKS5pbm5lciAvICQod2luZG93KS5oZWlnaHQoKS5pbm5lcjtcbiAgICB2YXIgY2xvc2VzdCA9IHt9O1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNvbW1vbiBhc3BlY3QgcmF0aW9zIHRvIHNlZSB3aGljaCBpcyBjbG9zZXN0XG4gICAgZm9yKHZhciByYXRpbyBpbiBhc3BlY3RSYXRpb3MpXG4gICAge1xuICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGN1cnJlbnQgLSBhc3BlY3RSYXRpb3NbcmF0aW9dKTtcblxuICAgICAgICBpZihjbG9zZXN0LmRpZmZlcmVuY2UgPT09IHVuZGVmaW5lZCB8fCBjbG9zZXN0LmRpZmZlcmVuY2UgPiBkaWZmZXJlbmNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjbG9zZXN0LnJhdGlvID0gcmF0aW87XG4gICAgICAgICAgICBjbG9zZXN0LmRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb3Nlc3QucmF0aW87XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICBjb25zb2xlLmxvZyhjbG9zZXN0UmF0aW8oKSk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGNsb3Nlc3RSYXRpbygpO1xuICAgIH0pO1xufSk7XG4iLCIvLyBBbiBvYmplY3QgY29udGFpbmluZyBjb21tb24gYXNwZWN0IHJhdGlvc1xudmFyIGFzcGVjdFJhdGlvcyA9XG57XG4gICAgJzE2OjknOiAxNi85LFxuICAgICcxNjoxMCc6IDE2LzEwLFxuICAgICc0OjMnOiA0LzMsXG4gICAgJzU6NCc6IDUvNFxufTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgIC8vIExvb3AgdGhyb3VnaCBjb21tb24gYXNwZWN0IHJhdGlvcyB0byBidWlsZCBvcHRpb25zIG1lbnVcbiAgICBmb3IodmFyIHJhdGlvIGluIGFzcGVjdFJhdGlvcylcbiAgICB7XG4gICAgICAgICQoJy5hc3BlY3QtcmF0aW8nKS5hcHBlbmQoJzxvcHRpb24+JytyYXRpbysnPC9vcHRpb24+Jyk7XG4gICAgfVxufSk7XG4iLCIvLyBDb2RlIGZvciB0aGUgdGltZWxpbmVcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQoJy50aW1lbGluZScpLmRyYWdvbmRyb3AoKTtcbn0pO1xuIiwicmVxdWlyZSgnLi9pbnRlcmZhY2UvdGltZWxpbmUnKTtcbnJlcXVpcmUoJy4vaW50ZXJmYWNlL2FzcGVjdC1yYXRpbycpO1xucmVxdWlyZSgnLi9pbnRlcmZhY2Uvb3B0aW9ucycpO1xuIl19
