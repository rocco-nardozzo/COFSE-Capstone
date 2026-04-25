//Member Resources page
//contains links to the different member only pages

import wixLocation from 'wix-location';

$w.onReady(function () {

	//Resources header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
	const resources = $w("#resources-header").text;
	$w("#resources-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${resources}</p>`;

	//creates links to each members only page
	$w("#meetings").onClick(() => {
		wixLocation.to("/annual-meetings");
	});

	$w("#presentations").onClick(() => {
		wixLocation.to("/presentations");
	});

	$w("#workshops").onClick(() => {
		wixLocation.to("/workshops");
	});

	$w("#additional-resources").onClick(() => {
		wixLocation.to("/additional-resources");
	});

	$w("#dues").onClick(() => {
		wixLocation.to("/membership-dues");
	});
});