// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world
import { saveAndEmail } from 'backend/cofseEmail';


$w.onReady(function () {
    $w("#submit-button").onClick(async () => {
            const allInputs = ["#email", "#firstName", "#lastName", "#address", "#phone", "#jobTitle", "#employer", "#employmentLink", "#aafs", "#memberType", "#engagement", "#facebook", "#twitter", "#linkedIn", "#website"];

            let isFormValid = true;
            let invalidElement = null;

            //check that all required fields are entered properly
            allInputs.forEach(id => {
            // @ts-ignore
                const element = $w(id);
                
                if (element && !element.valid) {
                    isFormValid = false;
                    if (!invalidElement) invalidElement = element;
                    
                    element.updateValidityIndication(); 
                }
            });

            //prevent submission if invalid
            if (!isFormValid) {
                $w("#submit-button").label = "Not Complete";
                setTimeout(() => { $w("#submit-button").label = "Submit"; }, 2000);
                return; 
            }

            $w("#submit-button").disable();
            $w("#submit-button").label = "Submitting...";

            //saves submisison entry to Wix database
            let dataToSave = {};
            allInputs.forEach(id => {
                // @ts-ignore
                const element = $w(id);
                if (element) {
                    const key = id.replace('#', '');
                    dataToSave[key] = element.value;
                }
            });

            //saves submission in collection and sends triggered email
            try {
                const result = await saveAndEmail(dataToSave);

                if (result.success) {
                    $w("#submit-button").label = "Submitted!";
                    console.log("Form saved and email sent");
                } else {
                    throw new Error(result.error);
                }
            } catch (err) {
                console.error("Submission failed:", err);
                $w("#submit-button").enable();
                $w("#submit-button").label = "Try Again";
            }
        });
});
