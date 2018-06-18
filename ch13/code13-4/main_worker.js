onmessage = function( event ) {
    var res = calcFibonacci( event.data );
    postMessage( res );
}
function calcFibonacci( n ) {
    if( n <= 0 ) return 0;
    if( n === 1 ) return 1;
    if( n === 2 ) return 2;
    var a = 1;
    var b = 1;
    var c;
    for( var i = 3; i <= n; i++ ) {
        c = a + b;
        a = b;
        b = c; 
    }
    return c;
}
