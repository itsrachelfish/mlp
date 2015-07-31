(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var options =
{
    // Common aspect ratios
    aspectRatios:
    {
        '16:9': 16/9,
        '16:10': 16/10,
        '4:3': 4/3,
        '5:4': 5/4
    }
};

// Function to calculate the closest aspect ratio based on your screen size
function closestRatio()
{
    var current = $(window).width().inner / $(window).height().inner;
    var closest = {};

    // Loop through common aspect ratios to see which is closest
    for(var ratio in options.aspectRatios)
    {
        var difference = Math.abs(current - options.aspectRatios[ratio]);

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
    $('.options').dragondrop();

    // Determine the closest aspect ratio on page load
    options.aspectRatio = closestRatio();
    
    // Loop through common aspect ratios to build options menu
    for(var ratio in options.aspectRatios)
    {
        var option = '<option>'+ratio+'</option>';
        
        if(options.aspectRatio == ratio)
        {
            option = '<option selected>'+ratio+'</option>'
        }
    
        $('.options .aspect-ratio').append(option);
    }
});

},{}],2:[function(require,module,exports){
// Code for the timeline

$(document).ready(function()
{
    $('.timeline').dragondrop();
});

},{}],3:[function(require,module,exports){
require('./interface/timeline');
require('./interface/options');

},{"./interface/options":1,"./interface/timeline":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvaW50ZXJmYWNlL29wdGlvbnMuanMiLCJzdGF0aWMvanMvaW50ZXJmYWNlL3RpbWVsaW5lLmpzIiwic3RhdGljL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgb3B0aW9ucyA9XG57XG4gICAgLy8gQ29tbW9uIGFzcGVjdCByYXRpb3NcbiAgICBhc3BlY3RSYXRpb3M6XG4gICAge1xuICAgICAgICAnMTY6OSc6IDE2LzksXG4gICAgICAgICcxNjoxMCc6IDE2LzEwLFxuICAgICAgICAnNDozJzogNC8zLFxuICAgICAgICAnNTo0JzogNS80XG4gICAgfVxufTtcblxuLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBjbG9zZXN0IGFzcGVjdCByYXRpbyBiYXNlZCBvbiB5b3VyIHNjcmVlbiBzaXplXG5mdW5jdGlvbiBjbG9zZXN0UmF0aW8oKVxue1xuICAgIHZhciBjdXJyZW50ID0gJCh3aW5kb3cpLndpZHRoKCkuaW5uZXIgLyAkKHdpbmRvdykuaGVpZ2h0KCkuaW5uZXI7XG4gICAgdmFyIGNsb3Nlc3QgPSB7fTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBjb21tb24gYXNwZWN0IHJhdGlvcyB0byBzZWUgd2hpY2ggaXMgY2xvc2VzdFxuICAgIGZvcih2YXIgcmF0aW8gaW4gb3B0aW9ucy5hc3BlY3RSYXRpb3MpXG4gICAge1xuICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGN1cnJlbnQgLSBvcHRpb25zLmFzcGVjdFJhdGlvc1tyYXRpb10pO1xuXG4gICAgICAgIGlmKGNsb3Nlc3QuZGlmZmVyZW5jZSA9PT0gdW5kZWZpbmVkIHx8IGNsb3Nlc3QuZGlmZmVyZW5jZSA+IGRpZmZlcmVuY2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsb3Nlc3QucmF0aW8gPSByYXRpbztcbiAgICAgICAgICAgIGNsb3Nlc3QuZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvc2VzdC5yYXRpbztcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQoJy5vcHRpb25zJykuZHJhZ29uZHJvcCgpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBjbG9zZXN0IGFzcGVjdCByYXRpbyBvbiBwYWdlIGxvYWRcbiAgICBvcHRpb25zLmFzcGVjdFJhdGlvID0gY2xvc2VzdFJhdGlvKCk7XG4gICAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNvbW1vbiBhc3BlY3QgcmF0aW9zIHRvIGJ1aWxkIG9wdGlvbnMgbWVudVxuICAgIGZvcih2YXIgcmF0aW8gaW4gb3B0aW9ucy5hc3BlY3RSYXRpb3MpXG4gICAge1xuICAgICAgICB2YXIgb3B0aW9uID0gJzxvcHRpb24+JytyYXRpbysnPC9vcHRpb24+JztcbiAgICAgICAgXG4gICAgICAgIGlmKG9wdGlvbnMuYXNwZWN0UmF0aW8gPT0gcmF0aW8pXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvbiA9ICc8b3B0aW9uIHNlbGVjdGVkPicrcmF0aW8rJzwvb3B0aW9uPidcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAkKCcub3B0aW9ucyAuYXNwZWN0LXJhdGlvJykuYXBwZW5kKG9wdGlvbik7XG4gICAgfVxufSk7XG4iLCIvLyBDb2RlIGZvciB0aGUgdGltZWxpbmVcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQoJy50aW1lbGluZScpLmRyYWdvbmRyb3AoKTtcbn0pO1xuIiwicmVxdWlyZSgnLi9pbnRlcmZhY2UvdGltZWxpbmUnKTtcbnJlcXVpcmUoJy4vaW50ZXJmYWNlL29wdGlvbnMnKTtcbiJdfQ==
