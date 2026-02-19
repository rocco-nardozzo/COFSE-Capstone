//Secretary Bio Page
//Focuses on styling header

$w.onReady(function () {

	//Secretary header styling
	const secretary = $w("#secretary-header").text;
	$w("#secretary-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-seriff;">${secretary}</p>`;

});