<?php

$url = "https://api.github.com/search/repositories?q=" . urlencode("portfolio project in:readme user:rahulnshah");

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
   "Accept: application/json",
   //hide this 
   "Authorization: token " . getenv("myscriptvar"),
   "User-Agent: rahulnshah",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
echo $resp; //string

?>

