//President Bio Page
//Focuses on styling header

$w.onReady(function () {

	//President elect header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
	const pres_elect = $w("#pres-elect-header").text;
	$w("#pres-elect-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${pres_elect}</p>`;

	//creates back button
	$w("#back").link = "/about";
	$w("#back").target = "_self";
	
});