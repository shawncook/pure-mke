<?php

require_once '../vendor/autoload.php';

$i = 0;
$app = function ($request, $response) use (&$i) {
    $i++;
    $text = "This is request number $i.n";
    $headers = array('Content-Type' => 'text/plain');

    $response->writeHead(200, $headers);
    $response->end($text);
};

$loop = ReactEventLoopFactory::create();
$socket = new ReactSocketServer($loop);
$http = new ReactHttpServer($socket);

$http->on('request', $app);

$socket->listen(1337);
$loop->run();

?>
