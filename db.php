<?php
	
	@mysql_connect("localhost","root","") or die("Connection not available");
	@mysql_select_db("phonebook") or die("Database Connection not available");
	
	
	$results=array();
	$contacts=array();

	$query=mysql_query("SELECT lastName, firstName, phone FROM contacts order by lastName") or die(mysql_error());
	while($res=mysql_fetch_array($query))
	{
 		$contacts['lastName']=$res['lastName'];
 		$contacts['firstName']=$res['firstName'];
 		$contacts['phone']=$res['phone'];
 		array_push($results,$contacts);
	}
	
	$fp = fopen('data/results.json', 'w');
	fwrite($fp, json_encode($results));
	fclose($fp);

	
?>