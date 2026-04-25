//DDE Page
//Primarily focuses on styling with CSS

import wixLocation from 'wix-location';
$w.onReady(function () {
    
    //DDE header styling: Oswald 42 point centered
    //OVERRIDES THE STYLING ON EDIT PAGE
    const dde_header = $w("#Main-DDE-header").text;
	$w("#Main-DDE-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${dde_header}</p>`;

    //Misison header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const mission = $w("#mission-header").text;
    $w("#mission-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${mission}</p>`;

    //Chapter header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const chapter = $w("#chapter-header").text;
    $w("#chapter-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${chapter}</p>`;

    //Student Membership header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const student = $w("#student-header").text;
    $w("#student-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${student}</p>`;

    //Cnstitution header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const constitution = $w("#constitution-header").text;
    $w("#constitution-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${constitution}</p>`;

    //Medallions header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const medallions = $w("#medallions-header").text;
    $w("#medallions-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${medallions}</p>`;

    //Updates header styling: Oswald 24 point centered and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const updates = $w("#updates-header").text;
    $w("#updates-header").html = `<p style="text-align: center;font-size: 24px;font-family: 'Oswald', sans-serif; font-weight: bold;">${updates}</p>`;

    //link color
    const colorBlue = "#87aade";

    //all code below replaces templates in Wix editor with links to appropriate pdfs and websites
    //styling: light blue and bold
    //OVERRIDES THE STYLING ON EDIT PAGE
    const chapters_link = `<a href="/international-chapter" target="_self" style="color: ${colorBlue}; font-weight: bold;">chapters</a>`;
    const apply_link = `<a href="/membership-form" target="_self" style="color: ${colorBlue}; font-weight: bold;">here</a>`;
    let content = $w("#par1").html;
    content = content.split("{chapters}").join(chapters_link);
    content = content.split("{here}").join(apply_link);
    $w("#par1").html = content;

    const review_book = `<a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_d3a4a3b45bcc4c33b78deee098e6cf8b.pdf?Delta-Delta-Epsilon-Chapter-Summaries-2019.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">DDE Chapter Review Booklet</a>`;
    let p3_content = $w("#par3").html;
    p3_content = p3_content.split("{Review}").join(review_book);
    $w("#par3").html = p3_content;

    const student_app = `<a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_e914335c0188482ea9e2bf916b70b928.pdf?DDE-Student-Membership-Form.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">here</a>`;
    let p4_content = $w("#par4").html;
    p4_content = p4_content.split("{here}").join(student_app);
    $w("#par4").html = p4_content;

    const constitution_1 = `<a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_13c68ed5e5a94d0894740e0b607293ef.pdf?2021-CONSTITUTION-of-Delta-Delta-Epsilon.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">Constitution</a>`;
    let p5_content = $w("#par5").html;
    p5_content = p5_content.split("{Constitution}").join(constitution_1);

    const alpha_bylaws = `<a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_e9c8fd39885f4263955077a92aa71913.pdf?Alpha-CHAPTER-of-Delta-Delta-Epsilon-BYLAWS.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">Alpha Chapter By-Laws</a>`;
    p5_content = p5_content.split("{Bylaws}").join(alpha_bylaws);
    $w("#par5").html = p5_content;

    const medallion = `<a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_cae4dbc4656747c3babc8296e7bfd2d0.pdf?Delta-Delta-Epsilon-Medallion-Information-Nov-2025.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">here</a>`;
    let med_content = $w("#medallion").html;
    med_content = med_content.split("{here}").join(medallion);
    $w("#medallion").html = med_content;

    const dde_link = `<a href="/dde-committee" target="_self" style="color: ${colorBlue}; font-weight: bold;">DDE Committee</a>`;
    let dde_content = $w("#update-1").html;
    dde_content = dde_content.split("{DDE Committee}").join(dde_link);
    $w("#update-1").html = dde_content;

    const grant = `<a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_10c557ea26804e489e6a0e0f377e18d4.docx?DDE-Student-Grant-Application.docx" target="_blank" style="color: ${colorBlue}; font-weight: bold;">DDE Student Grant Application</a>`;
    const emailString = "elaw@uco.edu";
    const emailLink = `<a href="mailto:${emailString}" style="color: ${colorBlue}; font-weight: bold;">${emailString}</a>`;

    let content_update = $w("#update-2").html;

    if (content_update) {
        content_update = content_update.split("{Grant}").join(grant);
        content_update = content_update.split("{elaw@uco.edu}").join(emailLink);

        $w("#update-2").html = content_update;
    }
});
