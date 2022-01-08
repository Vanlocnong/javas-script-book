<?php

$stateAbbrev = trim($_POST['state']);

if ($stateAbbrev == "WI") {
	print json_encode("Wisconsin");
}

?>
