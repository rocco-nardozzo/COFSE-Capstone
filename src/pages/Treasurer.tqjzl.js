//Treasurer Bio Page
//Focuses on styling header

$w.onReady(function () {

	//Treasurer header styling
	const treasurer = $w("#treasurer-header").text;
	$w("#treasurer-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${treasurer}</p>`;

	$w("#back").link = "/about";
	$w("#back").target = "_self";

});