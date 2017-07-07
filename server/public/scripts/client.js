console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // load existing koalas on page load
  getKoalas();

  // add koala button click
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    var objectToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val()
    };
    // call saveKoala with the new obejct
    saveKoala( objectToSend );
  }); //end addButton on click

  $('#viewKoalas').on('click', '.deleteBtn', function(){
    var koalaToDelete = $(this).data('buttonid');
    deleteKoalas(koalaToDelete);
  });

  // mark ready for transfer button
  $('#viewKoalas').on('click', '.transferBtn', function() {
    var koalaToTransfer = $(this).data('transferid');
    transferKoala(koalaToTransfer);
  })

}); // end doc ready

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    url: '/koalas',
    type: 'GET',
    success: function( koalas ){
      console.log( 'got some koalas: ', koalas);
      appendToDom(koalas);
    } // end success
  }); //end ajax
  // display on DOM with buttons that allow edit of each
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  $.ajax({
    url: '/koalas',
    type: 'POST',
    data: newKoala,
    success: function( data ){
      console.log( 'got some koalas: ', data );
      getKoalas();
    } // end success
  }); //end ajax
}

function appendToDom(koalas){
  $('#viewKoalas').empty();
  var koalaList = koalas.koalas;



  for (var i = 0; i < koalaList.length; i++) {
      var koala = koalaList[i];
    $tr = $('<tr></tr>');
    $tr.append('<td>' + koala.name + '</td>');
    $tr.append('<td>' + koala.age + '</td>');
    $tr.append('<td>' + koala.gender + '</td>');
    $tr.append('<td>' + koala.ready_for_transfer + '</td>');
    $tr.append('<td>' + koala.notes + '</td>');
    if (!koala.ready_for_transfer) {
      $tr.append('<td><button class="transferBtn" data-transferid="' + koala.id + '">Mark Ready For Transfer</button></td>');
    } else {
      $tr.append('<td></td>');
    }
    $tr.append('<td><button class="deleteBtn" data-buttonid="' + koala.id + '">DELETE</button></td>');
    $('#viewKoalas').append($tr);
  }

}

function transferKoala(koala) {
  $.ajax({
    type: 'PUT',
    url: '/koalas/' + koala,
    data: koala,
    success: getKoalas
  });
}

function deleteKoalas(koalaToDelete){

    $.ajax({
      type: 'DELETE',
      url: '/koalas/' + koalaToDelete,
      data: koalaToDelete,
      success: getKoalas
    });

}
