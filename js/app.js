/*----------------ajax call to results.json---------- */
var showContacts = function(){
var xhr = new XMLHttpRequest(); // create ajax object

xhr.onreadystatechange = function(){
  if(xhr.readyState === 4)
  {
    var contacts = JSON.parse(xhr.responseText);
    var contactList = "";
   
    for(var i=0; i<contacts.length;i++)
    {
      contactList += '<tr>';
      contactList += '<td>' + contacts[i].lastName + '</td>';
      contactList += '<td>' + contacts[i].firstName + '</td>';
      contactList += '<td>' + contacts[i].phone + '</td>';
      contactList += '<td><button class="delete">Delete</button></td>'
      contactList += '</tr>';

    }
    document.getElementById('table-body').innerHTML = contactList;
   }
    
    
};
xhr.open('GET','data/results.json'); // open request
xhr.send(); // send request

}

showContacts();
/*---------------------------------------------------------------*/
/* Delet functionality*/
$(document).on('click', '.delete', function(){
  $(this).parent().parent().remove();
  $.ajax('deleteContact.php', {
    data: 'val=' +$(this).parent().prev().text(),
    type: "POST"
  });
  

});
/*--------------Submit Functionality------------------------------------------------*/

$("#new-contact").on("submit", function(evt){
  evt.preventDefault();
  var url = $(this).attr("action");
  
  var formData = $(this).serialize();
  
  var lastName = $("#lastName").val();
  var firstName =$("#firstName").val();
  var phone =$("#phone").val();
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  if(!lastName.match(letters))
  {
    $("#error").css("display","block");
    $("#error").text("Please enter a valid Last Name");
  }
  else if(!firstName.match(letters)){
    $("#error").css("display","block");
    $("#error").text("Please enter a valid First Name");
  }
  else if(!(phone.match(numbers) && phone.length==10))
  {
    $("#error").css("display","block");
    $("#error").text("Please enter a valid Phone Number (10 digit)");
  }
  else
  {
    $.ajax(url, {
      data:formData,
      type:"POST",
      success: function(response)
      {
          $("#error").css("display","block");
          $("#error").css("background-color","#2ECC71");
          $("#error").css("border","2px solid #26A65B");
          $("#error").text("Success !! Contact Added");
          $("input[type=text]").val("");
          
      }

    }).complete(function(){

      setTimeout(function(){location.reload();},1000);
    });
     
  
}
  
  
});


/*-----------------------------------------------------------------------------------*/
