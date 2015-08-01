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
    var menu = new Menu({title: 'Options', selector: '.options', class: 'option-menu'});
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
    var menu = new Menu({title: 'Timeline', selector: '.timeline', class: 'timeline-menu'});
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
}

Menu.prototype.init = function()
{
    // Clone the menu template
    var template = $('.menu-template').clone();
    $(template).removeClass('menu-template');
    $(template).find('.title').text(this.title);

    if(this.class)
    {
        $(template).addClass(this.class);
    }

    if(this.selector)
    {
        template.appendChild($(this.selector).el[0]);
    }

    $('.viewport').append(template);
}

module.exports = Menu;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvaW50ZXJmYWNlL29wdGlvbnMuanMiLCJzdGF0aWMvanMvaW50ZXJmYWNlL3RpbWVsaW5lLmpzIiwic3RhdGljL2pzL21haW4uanMiLCJzdGF0aWMvanMvcGx1Z2lucy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgTWVudSA9IHJlcXVpcmUoJy4uL3BsdWdpbnMvbWVudScpO1xuXG52YXIgb3B0aW9ucyA9XG57XG4gICAgLy8gQ29tbW9uIGFzcGVjdCByYXRpb3NcbiAgICBhc3BlY3RSYXRpb3M6XG4gICAge1xuICAgICAgICAnMTY6OSc6IDE2LzksXG4gICAgICAgICcxNjoxMCc6IDE2LzEwLFxuICAgICAgICAnNDozJzogNC8zLFxuICAgICAgICAnNTo0JzogNS80XG4gICAgfVxufTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uc1xudmFyIGhlbHBlcnMgPVxue1xuICAgIC8vIEFzcGVjdCByYXRpbyBzcGVjaWZpYyBmdW5jdGlvbnNcbiAgICByYXRpbzpcbiAgICB7XG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgY2xvc2VzdCBhc3BlY3QgcmF0aW8gYmFzZWQgb24geW91ciBzY3JlZW4gc2l6ZVxuICAgICAgICBjbG9zZXN0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gJCh3aW5kb3cpLndpZHRoKCkgLyAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgY2xvc2VzdCA9IHt9O1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggY29tbW9uIGFzcGVjdCByYXRpb3MgdG8gc2VlIHdoaWNoIGlzIGNsb3Nlc3RcbiAgICAgICAgICAgIGZvcih2YXIgcmF0aW8gaW4gb3B0aW9ucy5hc3BlY3RSYXRpb3MpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhjdXJyZW50IC0gb3B0aW9ucy5hc3BlY3RSYXRpb3NbcmF0aW9dKTtcblxuICAgICAgICAgICAgICAgIGlmKGNsb3Nlc3QuZGlmZmVyZW5jZSA9PT0gdW5kZWZpbmVkIHx8IGNsb3Nlc3QuZGlmZmVyZW5jZSA+IGRpZmZlcmVuY2UpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0LnJhdGlvID0gcmF0aW87XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3QuZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xvc2VzdC5yYXRpbztcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNhbnZhcyBiYXNlZCBvbiB0aGUgY3VycmVudCBhc3BlY3QgcmF0aW9cbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGxhcmdlc3QgYm94IHdpdGhpbiB0aGUgY3VycmVudCBhc3BlY3QgcmF0aW8gdGhhdCBmaXRzIG9udG8gdGhlIHNjcmVlblxuICAgICAgICAgICAgdmFyIHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHJhdGlvID0gb3B0aW9ucy5hc3BlY3RSYXRpb3Nbb3B0aW9ucy5hc3BlY3RSYXRpb107XG4gICAgICAgICAgICB2YXIgY2FudmFzID0ge307XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBib3ggd2lsbCBmaXQgd2l0aGluIHRoZSBhdmFpbGFibGUgaGVpZ2h0XG4gICAgICAgICAgICBpZih3aWR0aCAvIHJhdGlvIDw9IGhlaWdodClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpZHRoIC8gcmF0aW8gKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIG1ha2UgdGhlIGJveCBmaXQgd2l0aGluIHRoZSBhdmFpbGFibGUgd2lkdGhcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBoZWlnaHQgKiByYXRpbyArICdweCc7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENlbnRlciB0aGUgY2FudmFzXG4gICAgICAgICAgICBjYW52YXMudG9wID0gKGhlaWdodCAtIHBhcnNlRmxvYXQoY2FudmFzLmhlaWdodCkpIC8gMiArICdweCc7XG4gICAgICAgICAgICBjYW52YXMubGVmdCA9ICh3aWR0aCAtIHBhcnNlRmxvYXQoY2FudmFzLndpZHRoKSkgLyAyICsgJ3B4JztcblxuICAgICAgICAgICAgJCgnLmNhbnZhcycpLnN0eWxlKGNhbnZhcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgem9vbTpcbiAgICB7XG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2NhbGUgPSBvcHRpb25zLnpvb20gLyAxMDA7XG4gICAgICAgICAgICAkKCcuY2FudmFzJykudHJhbnNmb3JtKCdzY2FsZScsIHNjYWxlLCBzY2FsZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgdmFyIG1lbnUgPSBuZXcgTWVudSh7dGl0bGU6ICdPcHRpb25zJywgc2VsZWN0b3I6ICcub3B0aW9ucycsIGNsYXNzOiAnb3B0aW9uLW1lbnUnfSk7XG4gICAgJCgnLm9wdGlvbi1tZW51JykuZHJhZ29uZHJvcCh7aGFuZGxlOiAnLnRpdGxlJ30pO1xuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBjbG9zZXN0IGFzcGVjdCByYXRpbyBvbiBwYWdlIGxvYWRcbiAgICBvcHRpb25zLmFzcGVjdFJhdGlvID0gaGVscGVycy5yYXRpby5jbG9zZXN0KCk7XG4gICAgaGVscGVycy5yYXRpby51cGRhdGUoKTtcbiAgICBcbiAgICAvLyBMb29wIHRocm91Z2ggY29tbW9uIGFzcGVjdCByYXRpb3MgdG8gYnVpbGQgb3B0aW9ucyBtZW51XG4gICAgZm9yKHZhciByYXRpbyBpbiBvcHRpb25zLmFzcGVjdFJhdGlvcylcbiAgICB7XG4gICAgICAgIHZhciBvcHRpb24gPSAnPG9wdGlvbj4nK3JhdGlvKyc8L29wdGlvbj4nO1xuICAgICAgICBcbiAgICAgICAgaWYob3B0aW9ucy5hc3BlY3RSYXRpbyA9PSByYXRpbylcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uID0gJzxvcHRpb24gc2VsZWN0ZWQ+JytyYXRpbysnPC9vcHRpb24+J1xuICAgICAgICB9XG4gICAgXG4gICAgICAgICQoJy5vcHRpb25zIC5hc3BlY3QtcmF0aW8nKS5hcHBlbmQob3B0aW9uKTtcbiAgICB9XG5cbiAgICAkKCcub3B0aW9ucyAuYXNwZWN0LXJhdGlvJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIG9wdGlvbnMuYXNwZWN0UmF0aW8gPSAkKHRoaXMpLnZhbHVlKCk7XG4gICAgICAgIGhlbHBlcnMucmF0aW8udXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcub3B0aW9ucyAuem9vbScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIG9wdGlvbnMuem9vbSA9ICQodGhpcykudmFsdWUoKTtcbiAgICAgICAgaGVscGVycy56b29tLnVwZGF0ZSgpO1xuICAgIH0pO1xufSk7XG4iLCIvLyBDb2RlIGZvciB0aGUgdGltZWxpbmVcbnZhciBNZW51ID0gcmVxdWlyZSgnLi4vcGx1Z2lucy9tZW51Jyk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICB2YXIgbWVudSA9IG5ldyBNZW51KHt0aXRsZTogJ1RpbWVsaW5lJywgc2VsZWN0b3I6ICcudGltZWxpbmUnLCBjbGFzczogJ3RpbWVsaW5lLW1lbnUnfSk7XG4gICAgJCgnLnRpbWVsaW5lLW1lbnUnKS5kcmFnb25kcm9wKHtoYW5kbGU6ICcudGl0bGUnfSk7XG59KTtcbiIsInJlcXVpcmUoJy4vaW50ZXJmYWNlL3RpbWVsaW5lJyk7XG5yZXF1aXJlKCcuL2ludGVyZmFjZS9vcHRpb25zJyk7XG4iLCIvLyBHZW5lcmFsIHB1cnBvc2UgcGx1Z2luIGZvciBjcmVhdGluZyBtZW51IHdpbmRvd3NcbnZhciBNZW51ID0gZnVuY3Rpb24ob3B0aW9ucylcbntcbiAgICB0aGlzLnRpdGxlID0gb3B0aW9ucy50aXRsZSB8fCAnTWVudSc7XG4gICAgdGhpcy5zZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IgfHwgZmFsc2U7XG4gICAgdGhpcy5jbGFzcyA9IG9wdGlvbnMuY2xhc3M7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBtZW51XG4gICAgdGhpcy5pbml0KCk7XG59XG5cbk1lbnUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2xvbmUgdGhlIG1lbnUgdGVtcGxhdGVcbiAgICB2YXIgdGVtcGxhdGUgPSAkKCcubWVudS10ZW1wbGF0ZScpLmNsb25lKCk7XG4gICAgJCh0ZW1wbGF0ZSkucmVtb3ZlQ2xhc3MoJ21lbnUtdGVtcGxhdGUnKTtcbiAgICAkKHRlbXBsYXRlKS5maW5kKCcudGl0bGUnKS50ZXh0KHRoaXMudGl0bGUpO1xuXG4gICAgaWYodGhpcy5jbGFzcylcbiAgICB7XG4gICAgICAgICQodGVtcGxhdGUpLmFkZENsYXNzKHRoaXMuY2xhc3MpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc2VsZWN0b3IpXG4gICAge1xuICAgICAgICB0ZW1wbGF0ZS5hcHBlbmRDaGlsZCgkKHRoaXMuc2VsZWN0b3IpLmVsWzBdKTtcbiAgICB9XG5cbiAgICAkKCcudmlld3BvcnQnKS5hcHBlbmQodGVtcGxhdGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1lbnU7XG4iXX0=
