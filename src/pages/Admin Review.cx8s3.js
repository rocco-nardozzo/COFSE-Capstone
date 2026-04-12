import wixLocation from 'wix-location';
import { updateApplicationStatus, getApplicationForAdmin } from 'backend/cofseEmail';

$w.onReady(async function () {
    const applicationId = wixLocation.query.id;

    if (!applicationId) {
        $w("#submissionDetails").text = "Submission not found.";
        $w("#approveButton").hide();
        $w("#declineButton").hide();
        return;
    }

    try {
        const data = await getApplicationForAdmin(applicationId);
        
        if (data) {
            const orderedKeys = [
                "email",
                "firstName", 
                "lastName",
                "address", 
                "phone",
                "jobTitle", 
                "employer",
                "supervisor", 
                "employmentLink", 
                "aafs", 
                "memberType", 
                "engagement",
                "experience",
                "facebook", 
                "twitter", 
                "linkedIn", 
                "website"
            ];

            const labelMap = {
                firstName: "First Name",
                lastName: "Last Name",
                jobTitle: "Job Title",
                employmentLink: "Employment Link",
                aafs: "AAFS Member",
                memberType: "Membership Type",
                linkedIn: "LinkedIn Profile"
            };

            let details = `\n`;

            orderedKeys.forEach(key => {
                //@ts-ignore
                const displayLabel =
                    //@ts-ignore
                    labelMap[key] || (key.charAt(0).toUpperCase() + key.slice(1));

                const value = data[key];

                details += `${displayLabel}: ${value}\n\n`;
            });

            if (data.Reviewed && data.Reviewed !== "Pending") {
            $w("#approveButton").hide();
            $w("#declineButton").hide();
            $w("#submissionDetails").text = `Status: ${data.Reviewed}\n${details}`;
            } 
            else {
                $w("#submissionDetails").text = `Waiting Review\n${details}`;
                $w("#approveButton").show();
                $w("#declineButton").show();
            } 
        }
        else {
            $w("#submissionDetails").text = "The application could not be found in the database.";
            $w("#approveButton").hide();
            $w("#declineButton").hide();
        }
    } catch (err) {
        console.error("Load error:", err);
        $w("#submissionDetails").text = "Error loading data.";
    }

    $w("#approveButton").onClick(() => handleUpdate(applicationId, "Accepted", "#approveButton"));
    $w("#declineButton").onClick(() => handleUpdate(applicationId, "Declined", "#declineButton"));
});

//@ts-ignore
async function handleUpdate(id, status, buttonId) {
    $w("#approveButton").disable();
    $w("#declineButton").disable();
    
    const originalLabel = $w(buttonId).label;
    $w(buttonId).label = "Processing...";

    const result = await updateApplicationStatus(id, status);
    
    if (result.success) {
        $w(buttonId).label = `Status: ${status}`;
        setTimeout(() => {
            $w("#approveButton").hide();
            $w("#declineButton").hide();
        }, 2000);
    } else {
        $w(buttonId).label = "Error!";
        $w("#approveButton").enable();
        $w("#declineButton").enable();
    }
}
