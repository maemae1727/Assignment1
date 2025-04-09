document.addEventListener('DOMContentLoaded', function () {
    let currentStep = 1;
    const totalSteps = 5;

    // Variables to store user input
    let userName = '';
    let userPhone = '';
    let adultsCount = 0;
    let childrenCount = 0;

    const steps = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next');
    const previousButtons = document.querySelectorAll('.previous');
    const progressBar = document.getElementById('progress-bar');

    // Update the progress bar
    function updateProgressBar() {
        const progressPercentage = (currentStep / totalSteps) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    // Show the current step and hide others
    function showStep(step) {
        steps.forEach((s, index) => {
            s.style.display = index === step ? 'block' : 'none';
        });
        updateProgressBar();
    }

    // Next buttons
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep - 1);
            }
        });
    });

    // Previous Buttons
    previousButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep - 1);
            }
        });
    });

    showStep(0);


    document.getElementById('name').addEventListener('input', function (event) {
        userName = event.target.value;
    });

    document.getElementById('phone').addEventListener('input', function (event) {
        userPhone = event.target.value;
    });

    document.getElementById('adultPlus').addEventListener('click', function () {
        updateCount('adultCount', 1);
    });

    document.getElementById('adultMinus').addEventListener('click', function () {
        updateCount('adultCount', -1);
    });

    document.getElementById('childPlus').addEventListener('click', function () {
        updateCount('childCount', 1);
    });

    document.getElementById('childMinus').addEventListener('click', function () {
        updateCount('childCount', -1);
    });

    // Prevent negative counts for adults & children
    function updateCount(id, delta) {
        const countElement = document.getElementById(id);
        let count = parseInt(countElement.innerText);
        count += delta;
        countElement.innerText = count < 0 ? 0 : count;

        if (id === 'adultCount') {
            adultsCount = count; // Store updated adult count
        } else if (id === 'childCount') {
            childrenCount = count; // Store updated children count
        }
    }

    document.getElementById('submit').addEventListener('click', function () {
        // Pass the values to Step 5 (Booking Summary)
        document.getElementById('summaryUsers').innerText = `${userName}, ${userPhone}`;
        document.getElementById('summaryAdults').innerText = adultsCount;
        document.getElementById('summaryChildren').innerText = childrenCount;

        // Go to the Booking Summary Step
        currentStep++;
        showStep(currentStep - 1);
    });

    // Save/Print Booking
    document.getElementById('savePrint').addEventListener('click', function () {
        window.print(); // Print the current page
    });

    // "Return" button after booking summary
    document.getElementById('returnButton').addEventListener('click', function () {
        // Go back to the first step of the booking process
        currentStep = 1;
        showStep(0);
    });
});
