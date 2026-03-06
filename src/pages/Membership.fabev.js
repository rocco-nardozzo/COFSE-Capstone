

$w.onReady(function () {
    const colorBlue = "#87aade";

    const membership = $w("#Membership-header").text;
	$w("#Membership-header").html = `<p style="text-align: center;font-size: 42px;font-family: 'Oswald', sans-serif;">${membership}</p>`;

    const full = $w("#full-member").text;
    $w("#full-member").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-weight: bold;">${full}</p>`;

    const associate = $w("#associate-member").text;
    $w("#associate-member").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-weight: bold;">${associate}</p>`;

    const retired = $w("#retired-member").text;
    $w("#retired-member").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-weight: bold;">${retired}</p>`;

    const honorary = $w("#honorary-member").text;
    $w("#honorary-member").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-weight: bold;">${honorary}</p>`;

    const sponsoring = $w("#sponsoring-member").text;
    $w("#sponsoring-member").html = `<p style="text-align: center;font-size: 20px;font-family: 'Oswald', sans-serif; font-weight: bold;">${sponsoring}</p>`;

    const apply_link = `<a href="/membership-application" target="_self" style="color: ${colorBlue}; font-weight: bold;">here</a>`;
    let apply = $w("#apply").html;
    apply = apply.split("{here}").join(apply_link);
    $w("#apply").html = apply;

    const login_link = `<a href="/member-login" target="_self" style="color: ${colorBlue}; font-weight: bold;">here</a>`;
    let login = $w("#login").html;
    login = login.split("{here}").join(login_link);
    $w("#login").html = login;
});
