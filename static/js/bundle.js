(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Menu = require('../plugins/menu');

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

// Helper functions
var helpers =
{
    // Aspect ratio specific functions
    ratio:
    {
        // Function to calculate the closest aspect ratio based on your screen size
        closest: function()
        {
            var current = $(window).width() / $(window).height();
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
        },

        // Function to update the canvas based on the current aspect ratio
        update: function()
        {
            // Find the largest box within the current aspect ratio that fits onto the screen
            var width = $(window).width();
            var height = $(window).height();
            var ratio = options.aspectRatios[options.aspectRatio];
            var canvas = {};

            // Check if the box will fit within the available height
            if(width / ratio <= height)
            {
                canvas.width = width + 'px';
                canvas.height = width / ratio + 'px';
            }

            // Otherwise, make the box fit within the available width
            else
            {
                canvas.width = height * ratio + 'px';
                canvas.height = height + 'px';
            }

            // Center the canvas
            canvas.top = (height - parseFloat(canvas.height)) / 2 + 'px';
            canvas.left = (width - parseFloat(canvas.width)) / 2 + 'px';

            $('.canvas').style(canvas);
        }
    },

    zoom:
    {
        update: function()
        {
            var scale = options.zoom / 100;
            $('.canvas').transform('scale', scale, scale);
        }
    }
};

$(document).ready(function()
{
    var menu = new Menu({title: 'Options', selector: '.templates .options', class: 'option-menu'});
    $('.option-menu').dragondrop({handle: '.title'});

    // Determine the closest aspect ratio on page load
    options.aspectRatio = helpers.ratio.closest();
    helpers.ratio.update();
    
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

    $('.options .aspect-ratio').on('change', function()
    {
        options.aspectRatio = $(this).value();
        helpers.ratio.update();
    });

    $('.options .zoom').on('input', function()
    {
        options.zoom = $(this).value();
        helpers.zoom.update();
    });
});

},{"../plugins/menu":4}],2:[function(require,module,exports){
// Code for the timeline
var Menu = require('../plugins/menu');

$(document).ready(function()
{
    var menu = new Menu({title: 'Timeline', selector: '.templates .timeline', class: 'timeline-menu'});
    $('.timeline-menu').dragondrop({handle: '.title'});
});

},{"../plugins/menu":4}],3:[function(require,module,exports){
require('./interface/timeline');
require('./interface/options');

},{"./interface/options":1,"./interface/timeline":2}],4:[function(require,module,exports){
// General purpose plugin for creating menu windows
var Menu = function(options)
{
    this.title = options.title || 'Menu';
    this.selector = options.selector || false;
    this.class = options.class;

    // Initialize the menu
    this.init();
    this.events();
}

Menu.prototype.init = function()
{
    // Clone the menu template
    this.template = $('.templates .menu').clone();
    $(this.template).find('.title').text(this.title);

    if(this.class)
    {
        $(this.template).addClass(this.class);
    }

    if(this.selector)
    {
        this.template.appendChild($(this.selector).el[0]);
    }

    // Restore this menu to its original position / state (minimized, etc.) from local storage

    $('.viewport').el[0].appendChild(this.template);
}

// Bind specific events for this menu
Menu.prototype.events = function()
{
    var menu = this;
    
    $(this.template).on('click', '.minimize', function()
    {
        menu.minimize();
    });

    $(this.template).on('click', '.close', function()
    {
        menu.close();
    });
}

// Minimize this menu to the bottom of the screen
Menu.prototype.minimize = function()
{

}

// Restore a minimized menu to its original position
Menu.prototype.restore = function()
{

}

// Resize a menu
Menu.prototype.resize = function()
{

}

// Save the position / state of the menu in local storage
Menu.prototype.save = function()
{

}

// Close a menu
Menu.prototype.close = function()
{
    this.template.remove();
}

module.exports = Menu;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvaW50ZXJmYWNlL29wdGlvbnMuanMiLCJzdGF0aWMvanMvaW50ZXJmYWNlL3RpbWVsaW5lLmpzIiwic3RhdGljL2pzL21haW4uanMiLCJzdGF0aWMvanMvcGx1Z2lucy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgTWVudSA9IHJlcXVpcmUoJy4uL3BsdWdpbnMvbWVudScpO1xuXG52YXIgb3B0aW9ucyA9XG57XG4gICAgLy8gQ29tbW9uIGFzcGVjdCByYXRpb3NcbiAgICBhc3BlY3RSYXRpb3M6XG4gICAge1xuICAgICAgICAnMTY6OSc6IDE2LzksXG4gICAgICAgICcxNjoxMCc6IDE2LzEwLFxuICAgICAgICAnNDozJzogNC8zLFxuICAgICAgICAnNTo0JzogNS80XG4gICAgfVxufTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uc1xudmFyIGhlbHBlcnMgPVxue1xuICAgIC8vIEFzcGVjdCByYXRpbyBzcGVjaWZpYyBmdW5jdGlvbnNcbiAgICByYXRpbzpcbiAgICB7XG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgY2xvc2VzdCBhc3BlY3QgcmF0aW8gYmFzZWQgb24geW91ciBzY3JlZW4gc2l6ZVxuICAgICAgICBjbG9zZXN0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gJCh3aW5kb3cpLndpZHRoKCkgLyAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgY2xvc2VzdCA9IHt9O1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggY29tbW9uIGFzcGVjdCByYXRpb3MgdG8gc2VlIHdoaWNoIGlzIGNsb3Nlc3RcbiAgICAgICAgICAgIGZvcih2YXIgcmF0aW8gaW4gb3B0aW9ucy5hc3BlY3RSYXRpb3MpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhjdXJyZW50IC0gb3B0aW9ucy5hc3BlY3RSYXRpb3NbcmF0aW9dKTtcblxuICAgICAgICAgICAgICAgIGlmKGNsb3Nlc3QuZGlmZmVyZW5jZSA9PT0gdW5kZWZpbmVkIHx8IGNsb3Nlc3QuZGlmZmVyZW5jZSA+IGRpZmZlcmVuY2UpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0LnJhdGlvID0gcmF0aW87XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3QuZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xvc2VzdC5yYXRpbztcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNhbnZhcyBiYXNlZCBvbiB0aGUgY3VycmVudCBhc3BlY3QgcmF0aW9cbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGxhcmdlc3QgYm94IHdpdGhpbiB0aGUgY3VycmVudCBhc3BlY3QgcmF0aW8gdGhhdCBmaXRzIG9udG8gdGhlIHNjcmVlblxuICAgICAgICAgICAgdmFyIHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHJhdGlvID0gb3B0aW9ucy5hc3BlY3RSYXRpb3Nbb3B0aW9ucy5hc3BlY3RSYXRpb107XG4gICAgICAgICAgICB2YXIgY2FudmFzID0ge307XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBib3ggd2lsbCBmaXQgd2l0aGluIHRoZSBhdmFpbGFibGUgaGVpZ2h0XG4gICAgICAgICAgICBpZih3aWR0aCAvIHJhdGlvIDw9IGhlaWdodClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpZHRoIC8gcmF0aW8gKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIG1ha2UgdGhlIGJveCBmaXQgd2l0aGluIHRoZSBhdmFpbGFibGUgd2lkdGhcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBoZWlnaHQgKiByYXRpbyArICdweCc7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENlbnRlciB0aGUgY2FudmFzXG4gICAgICAgICAgICBjYW52YXMudG9wID0gKGhlaWdodCAtIHBhcnNlRmxvYXQoY2FudmFzLmhlaWdodCkpIC8gMiArICdweCc7XG4gICAgICAgICAgICBjYW52YXMubGVmdCA9ICh3aWR0aCAtIHBhcnNlRmxvYXQoY2FudmFzLndpZHRoKSkgLyAyICsgJ3B4JztcblxuICAgICAgICAgICAgJCgnLmNhbnZhcycpLnN0eWxlKGNhbnZhcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgem9vbTpcbiAgICB7XG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2NhbGUgPSBvcHRpb25zLnpvb20gLyAxMDA7XG4gICAgICAgICAgICAkKCcuY2FudmFzJykudHJhbnNmb3JtKCdzY2FsZScsIHNjYWxlLCBzY2FsZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgdmFyIG1lbnUgPSBuZXcgTWVudSh7dGl0bGU6ICdPcHRpb25zJywgc2VsZWN0b3I6ICcudGVtcGxhdGVzIC5vcHRpb25zJywgY2xhc3M6ICdvcHRpb24tbWVudSd9KTtcbiAgICAkKCcub3B0aW9uLW1lbnUnKS5kcmFnb25kcm9wKHtoYW5kbGU6ICcudGl0bGUnfSk7XG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGNsb3Nlc3QgYXNwZWN0IHJhdGlvIG9uIHBhZ2UgbG9hZFxuICAgIG9wdGlvbnMuYXNwZWN0UmF0aW8gPSBoZWxwZXJzLnJhdGlvLmNsb3Nlc3QoKTtcbiAgICBoZWxwZXJzLnJhdGlvLnVwZGF0ZSgpO1xuICAgIFxuICAgIC8vIExvb3AgdGhyb3VnaCBjb21tb24gYXNwZWN0IHJhdGlvcyB0byBidWlsZCBvcHRpb25zIG1lbnVcbiAgICBmb3IodmFyIHJhdGlvIGluIG9wdGlvbnMuYXNwZWN0UmF0aW9zKVxuICAgIHtcbiAgICAgICAgdmFyIG9wdGlvbiA9ICc8b3B0aW9uPicrcmF0aW8rJzwvb3B0aW9uPic7XG4gICAgICAgIFxuICAgICAgICBpZihvcHRpb25zLmFzcGVjdFJhdGlvID09IHJhdGlvKVxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb24gPSAnPG9wdGlvbiBzZWxlY3RlZD4nK3JhdGlvKyc8L29wdGlvbj4nXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJCgnLm9wdGlvbnMgLmFzcGVjdC1yYXRpbycpLmFwcGVuZChvcHRpb24pO1xuICAgIH1cblxuICAgICQoJy5vcHRpb25zIC5hc3BlY3QtcmF0aW8nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgb3B0aW9ucy5hc3BlY3RSYXRpbyA9ICQodGhpcykudmFsdWUoKTtcbiAgICAgICAgaGVscGVycy5yYXRpby51cGRhdGUoKTtcbiAgICB9KTtcblxuICAgICQoJy5vcHRpb25zIC56b29tJykub24oJ2lucHV0JywgZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgb3B0aW9ucy56b29tID0gJCh0aGlzKS52YWx1ZSgpO1xuICAgICAgICBoZWxwZXJzLnpvb20udXBkYXRlKCk7XG4gICAgfSk7XG59KTtcbiIsIi8vIENvZGUgZm9yIHRoZSB0aW1lbGluZVxudmFyIE1lbnUgPSByZXF1aXJlKCcuLi9wbHVnaW5zL21lbnUnKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgIHZhciBtZW51ID0gbmV3IE1lbnUoe3RpdGxlOiAnVGltZWxpbmUnLCBzZWxlY3RvcjogJy50ZW1wbGF0ZXMgLnRpbWVsaW5lJywgY2xhc3M6ICd0aW1lbGluZS1tZW51J30pO1xuICAgICQoJy50aW1lbGluZS1tZW51JykuZHJhZ29uZHJvcCh7aGFuZGxlOiAnLnRpdGxlJ30pO1xufSk7XG4iLCJyZXF1aXJlKCcuL2ludGVyZmFjZS90aW1lbGluZScpO1xucmVxdWlyZSgnLi9pbnRlcmZhY2Uvb3B0aW9ucycpO1xuIiwiLy8gR2VuZXJhbCBwdXJwb3NlIHBsdWdpbiBmb3IgY3JlYXRpbmcgbWVudSB3aW5kb3dzXG52YXIgTWVudSA9IGZ1bmN0aW9uKG9wdGlvbnMpXG57XG4gICAgdGhpcy50aXRsZSA9IG9wdGlvbnMudGl0bGUgfHwgJ01lbnUnO1xuICAgIHRoaXMuc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yIHx8IGZhbHNlO1xuICAgIHRoaXMuY2xhc3MgPSBvcHRpb25zLmNsYXNzO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgbWVudVxuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuZXZlbnRzKCk7XG59XG5cbk1lbnUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2xvbmUgdGhlIG1lbnUgdGVtcGxhdGVcbiAgICB0aGlzLnRlbXBsYXRlID0gJCgnLnRlbXBsYXRlcyAubWVudScpLmNsb25lKCk7XG4gICAgJCh0aGlzLnRlbXBsYXRlKS5maW5kKCcudGl0bGUnKS50ZXh0KHRoaXMudGl0bGUpO1xuXG4gICAgaWYodGhpcy5jbGFzcylcbiAgICB7XG4gICAgICAgICQodGhpcy50ZW1wbGF0ZSkuYWRkQ2xhc3ModGhpcy5jbGFzcyk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5zZWxlY3RvcilcbiAgICB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUuYXBwZW5kQ2hpbGQoJCh0aGlzLnNlbGVjdG9yKS5lbFswXSk7XG4gICAgfVxuXG4gICAgLy8gUmVzdG9yZSB0aGlzIG1lbnUgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uIC8gc3RhdGUgKG1pbmltaXplZCwgZXRjLikgZnJvbSBsb2NhbCBzdG9yYWdlXG5cbiAgICAkKCcudmlld3BvcnQnKS5lbFswXS5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlKTtcbn1cblxuLy8gQmluZCBzcGVjaWZpYyBldmVudHMgZm9yIHRoaXMgbWVudVxuTWVudS5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24oKVxue1xuICAgIHZhciBtZW51ID0gdGhpcztcbiAgICBcbiAgICAkKHRoaXMudGVtcGxhdGUpLm9uKCdjbGljaycsICcubWluaW1pemUnLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBtZW51Lm1pbmltaXplKCk7XG4gICAgfSk7XG5cbiAgICAkKHRoaXMudGVtcGxhdGUpLm9uKCdjbGljaycsICcuY2xvc2UnLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBtZW51LmNsb3NlKCk7XG4gICAgfSk7XG59XG5cbi8vIE1pbmltaXplIHRoaXMgbWVudSB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW5cbk1lbnUucHJvdG90eXBlLm1pbmltaXplID0gZnVuY3Rpb24oKVxue1xuXG59XG5cbi8vIFJlc3RvcmUgYSBtaW5pbWl6ZWQgbWVudSB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb25cbk1lbnUucHJvdG90eXBlLnJlc3RvcmUgPSBmdW5jdGlvbigpXG57XG5cbn1cblxuLy8gUmVzaXplIGEgbWVudVxuTWVudS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxue1xuXG59XG5cbi8vIFNhdmUgdGhlIHBvc2l0aW9uIC8gc3RhdGUgb2YgdGhlIG1lbnUgaW4gbG9jYWwgc3RvcmFnZVxuTWVudS5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKClcbntcblxufVxuXG4vLyBDbG9zZSBhIG1lbnVcbk1lbnUucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMudGVtcGxhdGUucmVtb3ZlKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWVudTtcbiJdfQ==
