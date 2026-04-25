//Additional Resources Page
//Contains links to member only "Additional Resources"

$w.onReady(function () {
    const colorBlue = "#87aade";

    //Online Teaching Resources linking and styling: Questrial 18 centered
    //Links text to correct resource pdf
    //OVERRIDES THE STYLING ON EDIT PAGE
    const teaching_resources = $w("#teaching-resources").text;
    $w("#teaching-resources").html = `<p style="text-align: center; font-family: 'questrial', sans-serif; font-size: 18px;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_ca85e61c7586467a9fcb54a3606829ec.pdf?online-teaching-resources.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${teaching_resources}</a></p>`;

    //Forensic Labs for High School Teachers linking and styling: Questrial 18 centered
    //Links text to correct resource pdf
    //OVERRIDES THE STYLING ON EDIT PAGE
    const labs = $w("#labs").text;
    $w("#labs").html = `<p style="text-align: center; font-family: 'questrial', sans-serif; font-size: 18px;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_47cd51f5e7ef4568bdec74db8158a70e.pdf?forensic-labs-for-high-school-teachers.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${labs}</a></p>`;

    //List of US Forensic Programs linking and styling: Questrial 18 centered
    //Links text to correct resource pdf
    //OVERRIDES THE STYLING ON EDIT PAGE
    const programs = $w("#program-list").text;
    $w("#program-list").html = `<p style="text-align: center; font-family: 'questrial', sans-serif; font-size: 18px;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_313b69cc480f4e729cfca0fef87c46fa.xlsx?us-forensic-science-programs-feb-2019.xlsx" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${programs}</a></p>`;

    //Engaging with ASCLD FRC linking and styling: Questrial 18 centered
    //Links text to correct resource pdf
    //OVERRIDES THE STYLING ON EDIT PAGE
    const ascld = $w("#ascld").text;
    $w("#ascld").html = `<p style="text-align: center; font-family: 'questrial', sans-serif; font-size: 18px;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_81d7f8f83a434456b9a8d09e34cbb4b0.pdf?ASCLD-FRC-presentation.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${ascld}</a></p>`;

    //Creates back button link
    $w("#back").link = "/member-resources";
	$w("#back").target = "_self";
});
