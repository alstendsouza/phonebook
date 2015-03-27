<?php
	@mysql_connect("localhost","root","") or die("Connection not available");
	@mysql_select_db("phonebook") or die("Database Connection not available");
	$arr = $_POST;

	$query = ("INSERT INTO contacts(lastName,firstName,phone)
                VALUES (
                    '".$arr['lastName']."',
                    '".$arr['firstName']."',
                    '".$arr['phone']."'
                )");
	mysql_query($query);

?>