//Committees Page
//Primarily focuses on styling with CSS and linking to each individual committee page

import wixLocation from 'wix-location';

$w.onReady(function () {

	//Committees header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
	const committees = $w("#committees-header").text;
	$w("#committees-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${committees}</p>`;

	//Linking membership and outreach header to the appropriate page
	//Oswald 22 ppint bold and centered
	//OVERRIDES THE STYLING ON EDIT PAGE
	const membership = $w("#membership-link").text;
    $w("#membership-link").html = `<p style="text-align: center;font-size: 22px;font-family: 'Oswald', sans-serif; font-weight: bold; text-decoration: underline;">${membership}</p>`;

	$w("#membership-link").onClick(() => {
        wixLocation.to("/membership-and-outreach-committee"); 
    });

	//Linking higher education header to the appropriate page
	//Oswald 22 ppint bold and centered
	//OVERRIDES THE STYLING ON EDIT PAGE
	const higher = $w("#higher-edu-link").text;
    $w("#higher-edu-link").html = `<p style="text-align: center;font-size: 22px;font-family: 'Oswald', sans-serif; font-weight: bold; text-decoration: underline;">${higher}</p>`;

	$w("#higher-edu-link").onClick(() => {
        wixLocation.to("/higher-education-committee"); 
    });

	//Linking K-12 header to the appropriate page
	//Oswald 22 ppint bold and centered
	//OVERRIDES THE STYLING ON EDIT PAGE
	const k_12 = $w("#k-12-link").text;
    $w("#k-12-link").html = `<p style="text-align: center;font-size: 22px;font-family: 'Oswald', sans-serif; font-weight: bold; text-decoration: underline;">${k_12}</p>`;

	$w("#k-12-link").onClick(() => {
        wixLocation.to("/k-12-education-committee"); 
    });

	//Linking research header to the appropriate page
	//Oswald 22 ppint bold and centered
	//OVERRIDES THE STYLING ON EDIT PAGE
	const research = $w("#research-link").text;
    $w("#research-link").html = `<p style="text-align: center;font-size: 22px;font-family: 'Oswald', sans-serif; font-weight: bold; text-decoration: underline;">${research}</p>`;

	$w("#research-link").onClick(() => {
        wixLocation.to("/research-committee"); 
    });

	//Linking nominating header to the appropriate page
	//Oswald 22 ppint bold and centered
	//OVERRIDES THE STYLING ON EDIT PAGE
	const nominating = $w("#nominating-committee").text;
    $w("#nominating-committee").html = `<p style="text-align: center;font-size: 22px;font-family: 'Oswald', sans-serif; font-weight: bold; text-decoration: underline;">${nominating}</p>`;

	$w("#nominating-committee").onClick(() => {
        wixLocation.to("/nomination-committee"); 
    });

	//Linking DDE header to the appropriate page
	//Oswald 22 ppint bold and centered
	//OVERRIDES THE STYLING ON EDIT PAGE
	const DDE = $w("#DDE-link").text;
    $w("#DDE-link").html = `<p style="text-align: center;font-size: 22px;font-family: 'Oswald', sans-serif; font-weight: bold; text-decoration: underline;">${DDE}</p>`;

	$w("#DDE-link").onClick(() => {
        wixLocation.to("/dde-committee"); 
    });

});