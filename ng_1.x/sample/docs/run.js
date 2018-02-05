const fs = require( 'fs' );

var rmdfile = /.+\.md$/;
fs.readdir( './', function ( e, list ) {
    var filedata = [];
    list.filter( f => rmdfile.test( f ) )
        .sort( ( a, b ) => parseInt( a ) - parseInt( b ) )
        .forEach( fname => {
            filedata.push( fs.readFileSync( fname ).toString() );
        });
    fs.writeFile( 'readme.md', filedata.join( '\r\n' ), () => console.log( 'finished' ) );
});
