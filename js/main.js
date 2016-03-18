/* click picture to change puppy to older heeler */
pup.addEventListener( 'click', function addpic() {
    /* creates new image element and definites var */
    var bigheeler = document.createElement( 'img' );

    /* set path to image */
    bigheeler.src = 'img/bigheeler.jpg';

    /* select the first paragraph and add the picture after that element */
    document.getElementsByClassName( 'para' )[ 0 ].appendChild( bigheeler );
} );
