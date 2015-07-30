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
    $('.options').dragondrop();
    
    // Loop through common aspect ratios to build options menu
    for(var ratio in aspectRatios)
    {
        $('.options .aspect-ratio').append('<option>'+ratio+'</option>');
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvaW50ZXJmYWNlL2FzcGVjdC1yYXRpby5qcyIsInN0YXRpYy9qcy9pbnRlcmZhY2Uvb3B0aW9ucy5qcyIsInN0YXRpYy9qcy9pbnRlcmZhY2UvdGltZWxpbmUuanMiLCJzdGF0aWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBBbiBvYmplY3QgY29udGFpbmluZyBjb21tb24gYXNwZWN0IHJhdGlvc1xudmFyIGFzcGVjdFJhdGlvcyA9XG57XG4gICAgJzE2OjknOiAxNi85LFxuICAgICcxNjoxMCc6IDE2LzEwLFxuICAgICc0OjMnOiA0LzMsXG4gICAgJzU6NCc6IDUvNFxufTtcblxuLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBjbG9zZXN0IGFzcGVjdCByYXRpbyBiYXNlZCBvbiB5b3VyIHNjcmVlbiBzaXplXG5mdW5jdGlvbiBjbG9zZXN0UmF0aW8oKVxue1xuICAgIHZhciBjdXJyZW50ID0gJCh3aW5kb3cpLndpZHRoKCkuaW5uZXIgLyAkKHdpbmRvdykuaGVpZ2h0KCkuaW5uZXI7XG4gICAgdmFyIGNsb3Nlc3QgPSB7fTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBjb21tb24gYXNwZWN0IHJhdGlvcyB0byBzZWUgd2hpY2ggaXMgY2xvc2VzdFxuICAgIGZvcih2YXIgcmF0aW8gaW4gYXNwZWN0UmF0aW9zKVxuICAgIHtcbiAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhjdXJyZW50IC0gYXNwZWN0UmF0aW9zW3JhdGlvXSk7XG5cbiAgICAgICAgaWYoY2xvc2VzdC5kaWZmZXJlbmNlID09PSB1bmRlZmluZWQgfHwgY2xvc2VzdC5kaWZmZXJlbmNlID4gZGlmZmVyZW5jZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2xvc2VzdC5yYXRpbyA9IHJhdGlvO1xuICAgICAgICAgICAgY2xvc2VzdC5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbG9zZXN0LnJhdGlvO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgY29uc29sZS5sb2coY2xvc2VzdFJhdGlvKCkpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBjbG9zZXN0UmF0aW8oKTtcbiAgICB9KTtcbn0pO1xuIiwiLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgY29tbW9uIGFzcGVjdCByYXRpb3NcbnZhciBhc3BlY3RSYXRpb3MgPVxue1xuICAgICcxNjo5JzogMTYvOSxcbiAgICAnMTY6MTAnOiAxNi8xMCxcbiAgICAnNDozJzogNC8zLFxuICAgICc1OjQnOiA1LzRcbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICAkKCcub3B0aW9ucycpLmRyYWdvbmRyb3AoKTtcbiAgICBcbiAgICAvLyBMb29wIHRocm91Z2ggY29tbW9uIGFzcGVjdCByYXRpb3MgdG8gYnVpbGQgb3B0aW9ucyBtZW51XG4gICAgZm9yKHZhciByYXRpbyBpbiBhc3BlY3RSYXRpb3MpXG4gICAge1xuICAgICAgICAkKCcub3B0aW9ucyAuYXNwZWN0LXJhdGlvJykuYXBwZW5kKCc8b3B0aW9uPicrcmF0aW8rJzwvb3B0aW9uPicpO1xuICAgIH1cbn0pO1xuIiwiLy8gQ29kZSBmb3IgdGhlIHRpbWVsaW5lXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICAkKCcudGltZWxpbmUnKS5kcmFnb25kcm9wKCk7XG59KTtcbiIsInJlcXVpcmUoJy4vaW50ZXJmYWNlL3RpbWVsaW5lJyk7XG5yZXF1aXJlKCcuL2ludGVyZmFjZS9hc3BlY3QtcmF0aW8nKTtcbnJlcXVpcmUoJy4vaW50ZXJmYWNlL29wdGlvbnMnKTtcbiJdfQ==
