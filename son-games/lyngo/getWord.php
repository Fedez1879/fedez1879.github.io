<?php

if(isset($_GET['word'])){
	$source = ("https://sapere.virgilio.it/parole/correttore-ortografico/".$_GET['word']);

	$doc = new DOMDocument();
	$doc->loadHTMLFile($source);
	$xpath = new DOMXpath($doc);
	$nodeList = $xpath->query("//div[@class='feedback']");
	$node = $nodeList->item(0);
	die(json_encode(['corretta' => $node->nodeValue == 'Parola corretta!']));
}

function getWord(){
	$source = ("https://www.palabrasaleatorias.com/parole-casuali.php?fs=1&fs2=0&Submit=Nuova+parola");

	$doc = new DOMDocument();
	$doc->loadHTMLFile($source);
	$xpath = new DOMXpath($doc);
	$elements = $xpath->query("*//div");
	foreach ($elements as $element) {
	    $nodes = $element->childNodes;
	    foreach ($nodes as $node) {
	        $word = $node->textContent;
	    }
	};
	return $word;
}

do{
	$word = getWord();
} while (strlen($word) > 8);

die(json_encode(['word' => trim($word)]));