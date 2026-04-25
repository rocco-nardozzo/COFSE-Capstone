//Secretary Bio Page
//Focuses on styling header

$w.onReady(function () {

	//Secretary header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
	const secretary = $w("#secretary-header").text;
	$w("#secretary-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${secretary}</p>`;

	//create back button
	$w("#back").link = "/about";
	$w("#back").target = "_self";

});