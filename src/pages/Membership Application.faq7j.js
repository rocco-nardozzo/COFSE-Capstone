//Members Application Page
//creates COFSE member application form
//ONLY THING THAT MAY NEED CHANGED IS FIRST LINE IF APPLICATION FIELDS CHANGE
//NOTHING ELSE NEEDS MODIFIED
import { saveAndEmail } from 'backend/cofseEmail';


$w.onReady(function () {
    $w("#submit-button").onClick(async () => {
            //ADD or SUBTRACT FIELD BASED ON FIELDS IN APPLICATION FORM AND DATABASE
            //MUST USE SAME NAME AS ID FOR THE INPUT CREATED IN WIX VELO
            const allInputs = ["#email", "#firstName", "#lastName", "#address", "#phone", "#jobTitle", "#employer", "#supervisor", "#supervisorEmail", "#employmentLink", "#aafs", "#memberType", "#engagement", "#experience", "#facebook", "#twitter", "#linkedIn", "#website"];

            let isFormValid = true;
            //@ts-ignore
            let invalidElement = null;

            //check that all required fields are entered properly
            allInputs.forEach(id => {
            // @ts-ignore
                const element = $w(id);
                
                if (!element) return;

                // normal fields
                if (!element.valid) {
                    isFormValid = false;

                    //@ts-ignore
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
                    //@ts-ignore
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

        //create back button
        $w("#back").link = "/membership";
	    $w("#back").target = "_self";
});
