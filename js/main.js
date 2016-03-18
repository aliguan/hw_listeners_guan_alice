formsub.addEventListener( 'submit', function( evt ) {
    evt.preventDefault();
    console.log( 'The firstName is: ' +
    document.getElementById( 'formsub' ).elements.namedItem( 'firstName' ).value );
    console.log( 'The lastName is: ' +
    document.getElementById( 'formsub' ).elements.namedItem( 'lastName' ).value );
    console.log( 'The email is: ' +
    document.getElementById( 'formsub' ).elements.namedItem( 'email' ).value );
    console.log( 'The message is: ' +
    document.getElementById( 'formsub' ).elements.namedItem( 'message' ).value );
} );
