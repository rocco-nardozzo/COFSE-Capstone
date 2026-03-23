// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixLocation from 'wix-location';

$w.onReady(function () {

	const resources = $w("#resources-header").text;
	$w("#resources-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${resources}</p>`;

	$w("#meetings").onClick(() => {
		wixLocation.to("/annual-meetings");
	});

	$w("#presentations").onClick(() => {
		wixLocation.to("/presentations");
	});

	$w("#workshops").onClick(() => {
		wixLocation.to("/workshops");
	});

	$w("#directory").onClick(() => {
		wixLocation.to("/member-directory");
	});

	$w("#additional-resources").onClick(() => {
		wixLocation.to("/additional-resources");
	});

	$w("#dues").onClick(() => {
		wixLocation.to("/membership-dues");
	});
});