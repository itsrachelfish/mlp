var timeline =
{
    // Function for drawing the tick marks on a canvas
    drawTick: function(context, start, length)
    {
        context.beginPath();
        context.moveTo(start[0], start[1]);
        context.lineTo(start[0], start[1] + length);
        context.stroke();
    },
    
    // Function to generate the ticks on each layer
    drawTicks: function(layer, canvas, duration)
    {
        // Make sure the canvas fits into the available space
        var size = $(layer).size();

        // Remove the border size
        size.width -= parseFloat($(layer).style('border-left-width')) + parseFloat($(layer).style('border-right-width'));
        size.height -= parseFloat($(layer).style('border-top-width')) + parseFloat($(layer).style('border-bottom-width'));

        $(layer).find('canvas').attr('width', size.width);
        $(layer).find('canvas').attr('height', size.height);

        // Clear the canvas and draw new ticks
        var context = canvas.getContext('2d');

        // Make sure the canvas is cleared
//        context.fillStyle = 'rgba(255, 255, 255, 1)';
//        context.fillRect(0, 0, size.width, size.height);
//        context.fill();

//        context.globalAlpha = 0.1;
//        context.clearRect(0, 0, size.width, size.height);

        for(var i = 0, l = duration + 1; i < l; i++)
        {
            var offset = (size.width / duration) * i;
            
            if(i % 10)
            {
                timeline.drawTick(context, [offset, size.height], -5);
            }
            else
            {
                timeline.drawTick(context, [offset, size.height], -10);
            }
        }
    },

    hover:
    {
        draw: function(canvas, position)
        {
            // Start by clearning the canvas
            timeline.hover.clear(canvas);

            var context = canvas.getContext('2d');
            position -= 2;

            context.beginPath();
            context.moveTo(position, 0);
            context.lineTo(position, canvas.height);
            context.lineWidth = 3;
            
            context.strokeStyle = "rgb(255, 175, 100)";
            context.stroke();
        },

        clear: function(canvas)
        {
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    },
};

module.exports = timeline;
