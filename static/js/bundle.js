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
}

Menu.prototype.init = function()
{
    // Clone the menu template
    var template = $('.templates .menu').clone();
    $(template).find('.title').text(this.title);

    if(this.class)
    {
        $(template).addClass(this.class);
    }

    if(this.selector)
    {
        template.appendChild($(this.selector).el[0]);
    }

    // Restore this menu to its original position / state (minimized, etc.) from local storage

    $('.viewport').append(template);
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

}

module.exports = Menu;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvaW50ZXJmYWNlL29wdGlvbnMuanMiLCJzdGF0aWMvanMvaW50ZXJmYWNlL3RpbWVsaW5lLmpzIiwic3RhdGljL2pzL21haW4uanMiLCJzdGF0aWMvanMvcGx1Z2lucy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBNZW51ID0gcmVxdWlyZSgnLi4vcGx1Z2lucy9tZW51Jyk7XG5cbnZhciBvcHRpb25zID1cbntcbiAgICAvLyBDb21tb24gYXNwZWN0IHJhdGlvc1xuICAgIGFzcGVjdFJhdGlvczpcbiAgICB7XG4gICAgICAgICcxNjo5JzogMTYvOSxcbiAgICAgICAgJzE2OjEwJzogMTYvMTAsXG4gICAgICAgICc0OjMnOiA0LzMsXG4gICAgICAgICc1OjQnOiA1LzRcbiAgICB9XG59O1xuXG4vLyBIZWxwZXIgZnVuY3Rpb25zXG52YXIgaGVscGVycyA9XG57XG4gICAgLy8gQXNwZWN0IHJhdGlvIHNwZWNpZmljIGZ1bmN0aW9uc1xuICAgIHJhdGlvOlxuICAgIHtcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBjbG9zZXN0IGFzcGVjdCByYXRpbyBiYXNlZCBvbiB5b3VyIHNjcmVlbiBzaXplXG4gICAgICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSAkKHdpbmRvdykud2lkdGgoKSAvICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciBjbG9zZXN0ID0ge307XG5cbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBjb21tb24gYXNwZWN0IHJhdGlvcyB0byBzZWUgd2hpY2ggaXMgY2xvc2VzdFxuICAgICAgICAgICAgZm9yKHZhciByYXRpbyBpbiBvcHRpb25zLmFzcGVjdFJhdGlvcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGN1cnJlbnQgLSBvcHRpb25zLmFzcGVjdFJhdGlvc1tyYXRpb10pO1xuXG4gICAgICAgICAgICAgICAgaWYoY2xvc2VzdC5kaWZmZXJlbmNlID09PSB1bmRlZmluZWQgfHwgY2xvc2VzdC5kaWZmZXJlbmNlID4gZGlmZmVyZW5jZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3QucmF0aW8gPSByYXRpbztcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdC5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9zZXN0LnJhdGlvO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgY2FudmFzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGFzcGVjdCByYXRpb1xuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgbGFyZ2VzdCBib3ggd2l0aGluIHRoZSBjdXJyZW50IGFzcGVjdCByYXRpbyB0aGF0IGZpdHMgb250byB0aGUgc2NyZWVuXG4gICAgICAgICAgICB2YXIgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgcmF0aW8gPSBvcHRpb25zLmFzcGVjdFJhdGlvc1tvcHRpb25zLmFzcGVjdFJhdGlvXTtcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSB7fTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGJveCB3aWxsIGZpdCB3aXRoaW4gdGhlIGF2YWlsYWJsZSBoZWlnaHRcbiAgICAgICAgICAgIGlmKHdpZHRoIC8gcmF0aW8gPD0gaGVpZ2h0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2lkdGggLyByYXRpbyArICdweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbWFrZSB0aGUgYm94IGZpdCB3aXRoaW4gdGhlIGF2YWlsYWJsZSB3aWR0aFxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGhlaWdodCAqIHJhdGlvICsgJ3B4JztcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2VudGVyIHRoZSBjYW52YXNcbiAgICAgICAgICAgIGNhbnZhcy50b3AgPSAoaGVpZ2h0IC0gcGFyc2VGbG9hdChjYW52YXMuaGVpZ2h0KSkgLyAyICsgJ3B4JztcbiAgICAgICAgICAgIGNhbnZhcy5sZWZ0ID0gKHdpZHRoIC0gcGFyc2VGbG9hdChjYW52YXMud2lkdGgpKSAvIDIgKyAncHgnO1xuXG4gICAgICAgICAgICAkKCcuY2FudmFzJykuc3R5bGUoY2FudmFzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB6b29tOlxuICAgIHtcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzY2FsZSA9IG9wdGlvbnMuem9vbSAvIDEwMDtcbiAgICAgICAgICAgICQoJy5jYW52YXMnKS50cmFuc2Zvcm0oJ3NjYWxlJywgc2NhbGUsIHNjYWxlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICB2YXIgbWVudSA9IG5ldyBNZW51KHt0aXRsZTogJ09wdGlvbnMnLCBzZWxlY3RvcjogJy50ZW1wbGF0ZXMgLm9wdGlvbnMnLCBjbGFzczogJ29wdGlvbi1tZW51J30pO1xuICAgICQoJy5vcHRpb24tbWVudScpLmRyYWdvbmRyb3Aoe2hhbmRsZTogJy50aXRsZSd9KTtcblxuICAgIC8vIERldGVybWluZSB0aGUgY2xvc2VzdCBhc3BlY3QgcmF0aW8gb24gcGFnZSBsb2FkXG4gICAgb3B0aW9ucy5hc3BlY3RSYXRpbyA9IGhlbHBlcnMucmF0aW8uY2xvc2VzdCgpO1xuICAgIGhlbHBlcnMucmF0aW8udXBkYXRlKCk7XG4gICAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNvbW1vbiBhc3BlY3QgcmF0aW9zIHRvIGJ1aWxkIG9wdGlvbnMgbWVudVxuICAgIGZvcih2YXIgcmF0aW8gaW4gb3B0aW9ucy5hc3BlY3RSYXRpb3MpXG4gICAge1xuICAgICAgICB2YXIgb3B0aW9uID0gJzxvcHRpb24+JytyYXRpbysnPC9vcHRpb24+JztcbiAgICAgICAgXG4gICAgICAgIGlmKG9wdGlvbnMuYXNwZWN0UmF0aW8gPT0gcmF0aW8pXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvbiA9ICc8b3B0aW9uIHNlbGVjdGVkPicrcmF0aW8rJzwvb3B0aW9uPidcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAkKCcub3B0aW9ucyAuYXNwZWN0LXJhdGlvJykuYXBwZW5kKG9wdGlvbik7XG4gICAgfVxuXG4gICAgJCgnLm9wdGlvbnMgLmFzcGVjdC1yYXRpbycpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBvcHRpb25zLmFzcGVjdFJhdGlvID0gJCh0aGlzKS52YWx1ZSgpO1xuICAgICAgICBoZWxwZXJzLnJhdGlvLnVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLm9wdGlvbnMgLnpvb20nKS5vbignaW5wdXQnLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBvcHRpb25zLnpvb20gPSAkKHRoaXMpLnZhbHVlKCk7XG4gICAgICAgIGhlbHBlcnMuem9vbS51cGRhdGUoKTtcbiAgICB9KTtcbn0pO1xuIiwiLy8gQ29kZSBmb3IgdGhlIHRpbWVsaW5lXG52YXIgTWVudSA9IHJlcXVpcmUoJy4uL3BsdWdpbnMvbWVudScpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgdmFyIG1lbnUgPSBuZXcgTWVudSh7dGl0bGU6ICdUaW1lbGluZScsIHNlbGVjdG9yOiAnLnRlbXBsYXRlcyAudGltZWxpbmUnLCBjbGFzczogJ3RpbWVsaW5lLW1lbnUnfSk7XG4gICAgJCgnLnRpbWVsaW5lLW1lbnUnKS5kcmFnb25kcm9wKHtoYW5kbGU6ICcudGl0bGUnfSk7XG59KTtcbiIsInJlcXVpcmUoJy4vaW50ZXJmYWNlL3RpbWVsaW5lJyk7XG5yZXF1aXJlKCcuL2ludGVyZmFjZS9vcHRpb25zJyk7XG4iLCIvLyBHZW5lcmFsIHB1cnBvc2UgcGx1Z2luIGZvciBjcmVhdGluZyBtZW51IHdpbmRvd3NcbnZhciBNZW51ID0gZnVuY3Rpb24ob3B0aW9ucylcbntcbiAgICB0aGlzLnRpdGxlID0gb3B0aW9ucy50aXRsZSB8fCAnTWVudSc7XG4gICAgdGhpcy5zZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IgfHwgZmFsc2U7XG4gICAgdGhpcy5jbGFzcyA9IG9wdGlvbnMuY2xhc3M7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBtZW51XG4gICAgdGhpcy5pbml0KCk7XG59XG5cbk1lbnUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2xvbmUgdGhlIG1lbnUgdGVtcGxhdGVcbiAgICB2YXIgdGVtcGxhdGUgPSAkKCcudGVtcGxhdGVzIC5tZW51JykuY2xvbmUoKTtcbiAgICAkKHRlbXBsYXRlKS5maW5kKCcudGl0bGUnKS50ZXh0KHRoaXMudGl0bGUpO1xuXG4gICAgaWYodGhpcy5jbGFzcylcbiAgICB7XG4gICAgICAgICQodGVtcGxhdGUpLmFkZENsYXNzKHRoaXMuY2xhc3MpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc2VsZWN0b3IpXG4gICAge1xuICAgICAgICB0ZW1wbGF0ZS5hcHBlbmRDaGlsZCgkKHRoaXMuc2VsZWN0b3IpLmVsWzBdKTtcbiAgICB9XG5cbiAgICAvLyBSZXN0b3JlIHRoaXMgbWVudSB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb24gLyBzdGF0ZSAobWluaW1pemVkLCBldGMuKSBmcm9tIGxvY2FsIHN0b3JhZ2VcblxuICAgICQoJy52aWV3cG9ydCcpLmFwcGVuZCh0ZW1wbGF0ZSk7XG59XG5cbi8vIE1pbmltaXplIHRoaXMgbWVudSB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW5cbk1lbnUucHJvdG90eXBlLm1pbmltaXplID0gZnVuY3Rpb24oKVxue1xuXG59XG5cbi8vIFJlc3RvcmUgYSBtaW5pbWl6ZWQgbWVudSB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb25cbk1lbnUucHJvdG90eXBlLnJlc3RvcmUgPSBmdW5jdGlvbigpXG57XG5cbn1cblxuLy8gUmVzaXplIGEgbWVudVxuTWVudS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKVxue1xuXG59XG5cbi8vIFNhdmUgdGhlIHBvc2l0aW9uIC8gc3RhdGUgb2YgdGhlIG1lbnUgaW4gbG9jYWwgc3RvcmFnZVxuTWVudS5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKClcbntcblxufVxuXG4vLyBDbG9zZSBhIG1lbnVcbk1lbnUucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKVxue1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWVudTtcbiJdfQ==
