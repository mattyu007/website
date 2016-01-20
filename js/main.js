'use strict';

window.addEventListener('load', function() {
    var quotes = [
        'Probably.',
        'Nyeh heh heh.',
        // 'SO hyped for the destruction of humanity.', /* Catty is too extreme for most people. */
        '“Because one day… I’m going to befriend one of them.”'
    ];
    
    document.getElementById('random-quote').title =
        quotes[Math.floor(Math.random() * quotes.length)];
});