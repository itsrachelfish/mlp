$(document).ready(function()
{
    var src = $('.viewport').data('src');
    
    if(src)
    {
        fetch(src).then(function(response)
        {
            response.json().then(function(document)
            {
                $(window).trigger('mlp-doc', document);
            });
        });
    }
});
