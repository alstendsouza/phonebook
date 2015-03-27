//ajax call to contacts.json

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
xhr.open('GET','data/contacts.json'); // open request
xhr.send(); // send request


/*---------------------------------------------------------------*/

$(document).on('click', '.delete', function(){
  $(this).parent().parent().remove();
});
/*---------------------------------------------------------------*/

$("#new-contact").on("submit", function(evt){
  evt.preventDefault();
  
  var lastName = $("#lastName").val();
  var firstName =$("#firstName").val();
  var phone =$("#phone").val();
  var letters = /^[A-Za-z]+$/;
  if(!lastName.match(letters))
  {
    $("#error").css("display","block");
    $("#error").text("Please enter a valid Last Name");
  }
  else if(!firstName.match(letters)){
    $("#error").css("display","block");
    $("#error").text("Please enter a valid First Name");
  }
  else if(phone.length !== 10)
  {
    $("#error").css("display","block");
    $("#error").text("Please enter a valid Phone Number (10 digit)");
  }
  else
  {
      $("#error").css("display","block");
      $("#error").css("background-color","#2ECC71");
      $("#error").css("border","2px solid #26A65B");
      $("#error").text("Success !! Thank you");
  }
  
});


