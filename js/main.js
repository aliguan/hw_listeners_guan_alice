/* click picture to change puppy to older heeler */
pup.addEventListener( 'click', function addpic() {
    /* creates new image element and definites var */
    var bigheeler = document.createElement( 'img' );

    /* set path to image */
    bigheeler.src = 'img/bigheeler.jpg';

    /* select the first paragraph and add the picture after that element */
    document.getElementsByClassName( 'para' )[ 0 ].appendChild( bigheeler );
} );

/* listens for click on link */
wikilink.addEventListener( 'click', function( evt ) {
    /* prevents link from opening wikipedia page */
    evt.preventDefault();
    /* changes h1 headings to purple by adding the invert class */
    document.getElementsByTagName( 'h1' )[ 0 ].setAttribute( 'class', 'invert' );
} );
