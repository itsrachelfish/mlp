var create =
{
    // Function to generate unique IDs for objects
    id: function()
    {
        var id = parseInt($('body').data('objects') || 0);
        id++;

        $('body').data('objects', id);
        return 'object-' + id;
    },
    
    text: function(options)
    {
        // Get text template
        var template = $('.templates .object.text').clone();
        var id = create.id();

        $(template).attr('id', id);
        $('#' + options.layer).append(template);

        return id;
    }
};

module.exports = create;
