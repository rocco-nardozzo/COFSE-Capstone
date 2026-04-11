// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    const colorBlue = "#87aade";

    const teaching_resources = $w("#teaching-resources").text;
    $w("#teaching-resources").html = `<p style="text-align: center; font-family: 'questrial', sans-serif; font-size: 18px;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_ca85e61c7586467a9fcb54a3606829ec.pdf?online-teaching-resources.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${teaching_resources}</a></p>`;

    const labs = $w("#labs").text;
    $w("#labs").html = `<p style="text-align: center; font-family: 'questrial', sans-serif; font-size: 18px;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_47cd51f5e7ef4568bdec74db8158a70e.pdf?forensic-labs-for-high-school-teachers.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${labs}</a></p>`;

    const programs = $w("#program-list").text;
    $w("#program-list").html = `<p style="text-align: center; font-family: 'questrial', sans-serif; font-size: 18px;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_313b69cc480f4e729cfca0fef87c46fa.xlsx?us-forensic-science-programs-feb-2019.xlsx" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${programs}</a></p>`;

    const ascld = $w("#ascld").text;
    $w("#ascld").html = `<p style="text-align: center; font-family: 'questrial', sans-serif; font-size: 18px;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_81d7f8f83a434456b9a8d09e34cbb4b0.pdf?ASCLD-FRC-presentation.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${ascld}</a></p>`;

    $w("#back").link = "/member-resources";
	$w("#back").target = "_self";
});
