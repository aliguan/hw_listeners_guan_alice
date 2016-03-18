var x = 1;

headline.addEventListener( 'click', function addHTML() {
    var newParagraph = document.createElement( 'p' );
    newParagraph.innerText = 'This is click number ' + x;
    document.getElementsByClassName( 'container' )[ 0 ].appendChild( newParagraph );
    x++;
} );
