'use strict';

window.addEventListener('load', function() {
    var quotes = [
        'Nyeh heh heh.',
        // 'SO hyped for the destruction of humanity.', /* Catty is too extreme for most. */
        '“Because one day… I’m going to befriend one of them.”'
    ];
    
    document.getElementById('intro').title =
        quotes[Math.floor(Math.random() * quotes.length)];
});