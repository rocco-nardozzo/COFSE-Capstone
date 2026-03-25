// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    const colorBlue = "#87aade";

    const zoom = $w("#zoom").text;
    $w("#zoom").html = `<p style="text-align: center;"><a href="https://us02web.zoom.us/rec/component-page?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&hasValidToken=false&clusterId=us02&action=play&filePlayId=&componentName=recording-register&meetingId=EHQJNqKjJNo0uVmtgFA8cX2p6cMTGGzWa9yj_0Z7NRWriSdD5u8vQfeyTA4EzYS3.DuUaeiymnVTdnPyz&originRequestUrl=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2F7XaH8C9O4bsD51I5QxDuzoD1WkbP4p73UshicdcX3TArHU87ZD2IahGgqdRm7T9q.b00GDXLTGweJfdHh" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${zoom}</a></p>`;

    const adams = $w("#adams").text;
    $w("#adams").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_b18cc84a98b540148cc5d1a1bc594319.pdf?FEPAC-Adams_AAFS-2020.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${adams}</a></p>`;

    const okafor = $w("#okafor").text;
    $w("#okafor").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_343b3af25af84d8588e5a948462c75a0.pdf?Impact-of-FYSE-on-Student-Success-and-Retention_AAFS-2020.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${okafor}</a></p>`;

    const bertram = $w("#bertram").text;
    $w("#bertram").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_eaec0103879643bc9b10d04bff47d002.pdf?Field-Studies-Bertram-White_AAFS-2020.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${bertram}</a></p>`;

    const brodeur = $w("#brodeur").text;
    $w("#brodeur").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_13ca9534e7344f25a24504e089f8a0b0.pdf?Brodeur-AAFS-Workshop-2020.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${brodeur}</a></p>`;

    const nowak = $w("#nowak").text;
    $w("#nowak").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_2d17739c9f5945fb88ad6bc713a20827.pdf?Casework-Scholarly-Research-AAFA-2020.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${nowak}</a></p>`;

    const ridolfi = $w("#ridolfi").text;
    $w("#ridolfi").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_a8cf3b60c96c4982a236f3e2affbf8d1.pdf?Creativity-in-Project-Based-Learning-Ridolfi.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${ridolfi}</a></p>`;

    const mccoy = $w("#mccoy").text;
    $w("#mccoy").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_2792f02d061d4d45b8148d2e5a9daf1e.pdf?Student-Transformative-Learning-Record-McCoy-AAFS-2020.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${mccoy}</a></p>`;

    const windschitl = $w("#windschitl").text;
    $w("#windschitl").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_24f614a6eb824638ae3d95aab1fbf71d.pdf?Principles-of-Learning-WINDSCHITL-AAFS-2018.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${windschitl}</a></p>`;

    const haddad = $w("#haddad").text;
    $w("#haddad").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_6b1c9ee00b3045c4835b3060300295f1.pdf?Flipped-Classroom-AAFS_2018.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${haddad}</a></p>`;

    const williams = $w("#williams").text;
    $w("#williams").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_9afe12a482404cc7a9873fcc8021860f.pdf?Directed-Experimentation-WILLIAMS-AAFS-2018.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${williams}</a></p>`;

    const rushton = $w("#rushton").text;
    $w("#rushton").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_7753fc1f9c874b6095133723b6b99d39.pdf?Game-Based-Learning-RUSHTON-AAFS-2018.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${rushton}</a></p>`;

    const londino = $w("#londino").text;
    $w("#londino").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_1970fa11b6e344e1b0df535413da37c4.pdf?Large-Lecture-Teaching-LONDINO-SMOLAR-AAFS-2018.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${londino}</a></p>`;

    const mccoy_porterfield = $w("#mccoy-poterfield").text;
    $w("#mccoy-poterfield").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_0bb7c7beed144e1da68caf6100146999.pdf?Service-Based-Learning-MCCOY-and-PORTERFIELD-AAFS-2018.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${mccoy_porterfield}</a></p>`;

    const brundage = $w("#brundage").text;
    $w("#brundage").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_f8fbdf9dfb2249b8aa1617f60c9501a0.pdf?Teaching-Scientific-Writing-BRUNDAGE-AAFS-2018.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${brundage}</a></p>`;

    const quarino = $w("#quarino").text;
    $w("#quarino").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_2462bbdeabba4ff8a34885facfa6ddca.pdf?Assessment-Criteria_AAFS-2014.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${quarino}</a></p>`;

    const scott = $w("#scott").text;
    $w("#scott").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_de03acb3bc9042baada8a8c3527c0f60.pdf?Curriculum-Mapping_AAFS-2014.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${scott}</a></p>`;

    const rushton2 = $w("#rushton2").text;
    $w("#rushton2").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_837427093b9f4e3db800614678c7c38f.pdf?Course-Design_AAFS-2014.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${rushton2}</a></p>`;

    const deluca = $w("#deluca").text;
    $w("#deluca").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_c85d62b2688549dc9de2cb7ad743cae3.pdf?Delivery-Methods_AAFS-2014.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${deluca}</a></p>`;

    const adamowicz = $w("#adamowicz").text;
    $w("#adamowicz").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_afbf3ca181754df09341e3d4898eea29.pdf?Global-Learning_AAFS-2014.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${adamowicz}</a></p>`;

    const cunningham = $w("#cunningham").text;
    $w("#cunningham").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_60ee88f69ec341d183473e5cd5053022.pdf?Improving-Practitioners-Relations_AAFS-2014.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${cunningham}</a></p>`;

    const deluca_staton = $w("#deluca-staton").text;
    $w("#deluca-staton").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_23e3ba40d23a4cbeb02b35fb5009046a.pdf?Benefits-of-Crime-Scene-House_AAFS-2014.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${deluca_staton}</a></p>`;

    const quarino2 = $w("#quarino2").text;
    $w("#quarino2").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_a90408daee124a4eb843fa4ed23d59c8.pdf?Research_AAFS-2014.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${quarino2}</a></p>`;

    const mazzanti = $w("#mazzanti").text;
    $w("#mazzanti").html = `<p style="text-align: center;"><a href="https://fbf59b14-1a92-4ba9-a7e6-89c702f37f2b.usrfiles.com/ugd/fbf59b_7d4073f59e0e44cebfe4fee1de753cdb.pdf?UG-vs-Grad_AAFS-2014.pdf" target="_blank" style="color: ${colorBlue}; font-weight: bold;">${mazzanti}</a></p>`;
});
