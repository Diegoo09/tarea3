<?php

header('Content-type: application/json');
  header('Access-Control-Allow-Origin:*');

  $json=file_get_contents('php://input');
  $data=json_decode($json);

  $archivo = fopen("datos.json", "w");
   
  fwrite($archivo,$json);

  var_dump($data);

  echo json_encode($variable);
  

/*
header('Content-type:application/json');
header('Acces-Control-Allow-Origin:*');

$nota=$_Post["nota"];
$estado=$_Post["seleccionEstado"];
$descripcion=$_Post["descipcion"];

$datos = array(
    'est' => 'ok',
    'nota' => $nota, 
    'estado' => $estado, 
    'descipcion' => $descripcion
);

$json_string = json_encode($datos);
echo $json_string;

    


$json=file_get_contents('php://input');
$data=json_decode($json);

$archivo=fopen("datos.json","w");

fwrite($archivo,$json);
$variable="ok";

echo json_encode($variable);
*/
?>