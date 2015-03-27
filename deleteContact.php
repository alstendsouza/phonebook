<?php
	
	@mysql_connect("localhost","root","") or die("Connection not available");
	@mysql_select_db("phonebook") or die("Database Connection not available");
	
	
	$arr = $_POST['val'];

	$query=mysql_query("DELETE FROM contacts WHERE phone = '$arr'")or die(mysql_error());
	
?>