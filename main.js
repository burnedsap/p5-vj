/*
Code taken from: https://github.com/GeorgeGally/rbvj George Gally
*/

var s1;
let myp5;
//var midi_d1;
var art_location = "art";

var fileref;
var current_file = 0;
var current_set = 0;
var current_bank = 0;

function changeFile( file ) {
    if(myp5){
            myp5.remove();
    }
  current_file = file;
  var loc = current_set + '/' + current_bank + '/' + current_file;
  var filename = 'art/' + loc + '.js';
  loadJS( filename );
  document.location.hash = loc;
  //console.log("File: " + loc);
}
function changeSet( set ) {
  current_set = set;
  current_bank = 0;
  console.log( "changeSet: " + current_bank );
  // reset
  changeFile( 0 );
}


function changeBank( bank ) {
  current_bank = bank;
  console.log( "changeBank: " + current_bank );
  changeFile( 0 );
}

function loadJS( filename ) {
  if ( fileref != undefined ) document.getElementsByTagName( "head" )[ 0 ].removeChild( fileref );
  fileref = document.createElement( 'script' );
  fileref.setAttribute( "type", "text/javascript" );
  fileref.setAttribute( "src", filename );
  document.getElementsByTagName( "head" )[ 0 ].appendChild( fileref );
     myp5 = new p5(s1);
}
