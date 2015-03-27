
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <?php
      require "db.php";   
    ?>
    <title>Phone Book Application</title>
    <link href='http://fonts.googleapis.com/css?family=Nunito:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" charset="utf-8"> 
    
  </head>
  
  <body>
    <div id="parentContainer">
      <div id="listContact">
        <h2>Phone Book Directory</h2>
        <table>
          <thead>
            <th scope="col">Last Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Delete</th>
          </thead>
          
          <tbody id="table-body">
            
         
            
          </tbody>
        </table>
        
      </div>
      
      <div id="addContact">
        <h2>Add a Contact</h2>
        <div id="error"></div>
        <form name="new-contact" method="POST" action="saveContact.php" id="new-contact">
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required>
          </div>
          
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required>
          </div>
          
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" required>
          </div>
          
          <div class="form-group">
            <input type="submit" value="Submit">
          </div>
          
        </form>
      </div>
    </div>
    
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
  </body>

</html>