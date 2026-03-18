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
            let details = "";
            for (const key in data) {
                if (!key.startsWith('_') && key !== 'title' && key !== 'Reviewed') {
                    details += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${data[key]}\n\n`;
                }
            }
            $w("#submissionDetails").text = details;
        } else {
            $w("#submissionDetails").text = "The application could not be found.";
        }
    } catch (err) {
        console.error("Load error:", err);
        $w("#submissionDetails").text = "Error loading data.";
    }

    $w("#approveButton").onClick(() => handleUpdate(applicationId, "Accepted", "#approveButton"));
    $w("#declineButton").onClick(() => handleUpdate(applicationId, "Declined", "#declineButton"));
});

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
