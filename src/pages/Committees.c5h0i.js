//Committees Page
//Primarily focuses on styling with CSS and linking to each individual committee page

import wixLocation from 'wix-location';

$w.onReady(function () {

	//Committees header styling
	const committees = $w("#committees-header").text;
	$w("#committees-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-seriff;">${committees}</p>`;

	//Linking membership and outreach header to the appropriate page
	$w("#membership-link").onClick(() => {
        wixLocation.to("/membership-and-outreach-committee"); 
    });

	//Linking higher education header to the appropriate page
	$w("#higher-edu-link").onClick(() => {
        wixLocation.to("/higher-education-committee"); 
    });

	////Linking K-12 header to the appropriate page
	$w("#k-12-link").onClick(() => {
        wixLocation.to("/k-12-education-committee"); 
    });

	//Linking research header to the appropriate page
	$w("#research-link").onClick(() => {
        wixLocation.to("/research-committee"); 
    });

	//Linking nominating header to the appropriate page
	$w("#nominating-committee").onClick(() => {
        wixLocation.to("/nomination-committee"); 
    });

	//Linking DDE header to the appropriate page
	$w("#DDE-link").onClick(() => {
        wixLocation.to("/dde-committee"); 
    });

});