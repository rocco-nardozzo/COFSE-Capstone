//Treasurer Bio Page
//Focuses on styling header

$w.onReady(function () {

	//treasurer header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
	const treasurer = $w("#treasurer-header").text;
	$w("#treasurer-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${treasurer}</p>`;

	//create back button
	$w("#back").link = "/about";
	$w("#back").target = "_self";

});