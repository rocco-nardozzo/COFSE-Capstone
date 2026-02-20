//President Bio Page
//Focuses on styling header

$w.onReady(function () {

	//President elect header styling
	const pres_elect = $w("#pres-elect-header").text;
	$w("#pres-elect-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${pres_elect}</p>`;
	

});