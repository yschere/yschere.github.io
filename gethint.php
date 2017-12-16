<?php
// Array with names
$names[] = "Anna";
$names[] = "Brittany";
$names[] = "Cinderella";
$names[] = "Tiana";
$names[] = "Diana";
$names[] = "Eva";
$names[] = "Fiona";
$names[] = "Gunda";
$names[] = "Gambino";
$names[] = "Hege";
$names[] = "Inga";
$names[] = "Johanna";
$names[] = "Kitty";
$names[] = "Olette";
$names[] = "Linda";
$names[] = "Nina";
$names[] = "Ophelia";
$names[] = "Petunia";
$names[] = "Amanda";
$names[] = "Raquel";
$names[] = "Titus";
$names[] = "Cindy";
$names[] = "Doris";
$names[] = "Xavier";
$names[] = "Eve";
$names[] = "Evita";
$names[] = "Sunniva";
$names[] = "Tove";
$names[] = "Unni";
$names[] = "Violet";
$names[] = "Liza";
$names[] = "Elizabeth";
$names[] = "Ellen";
$names[] = "Wenche";
$names[] = "Marcus";
$names[] = "Vicky";

$q = $_REQUEST["q"];

$hint = "";

if ($q !== "") {
  $q = strtolower($q);
  $len = strlen($q);
  foreach($names as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

echo $hint === "" ? "no suggestion" : $hint;
?>
