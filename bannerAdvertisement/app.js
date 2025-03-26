document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 1;

    // Show the current step and hide others
    function showStep(step) {
        const steps = document.querySelectorAll('.step');
        steps.forEach((s, index) => {
            s.style.display = index === step - 1 ? 'block' : 'none';
        });
    }

    // Button click for Next Step
    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', function() {
            currentStep++;
            showStep(currentStep);
        });
    });

    // Button click for Previous Step
    document.querySelectorAll('.previous').forEach(button => {
        button.addEventListener('click', function() {
            currentStep--;
            showStep(currentStep);
        });
    });

    // Handle "Return" button after booking summary
    document.getElementById('returnButton').addEventListener('click', function() {
        // Go back to the first step of the booking process
        currentStep = 1;
        showStep(currentStep);
    });

    // Update count for adults
    document.getElementById('adultPlus').addEventListener('click', function() {
        updateCount('adultCount', 1);
    });

    document.getElementById('adultMinus').addEventListener('click', function() {
        updateCount('adultCount', -1);
    });

    // Update count for children
    document.getElementById('childPlus').addEventListener('click', function() {
        updateCount('childCount', 1);
    });

    document.getElementById('childMinus').addEventListener('click', function() {
        updateCount('childCount', -1);
    });

    // Prevent negative counts for adults and children
    function updateCount(id, delta) {
        const countElement = document.getElementById(id);
        let count = parseInt(countElement.innerText);
        count += delta;
        countElement.innerText = count < 0 ? 0 : count; // Prevent negative values
    }

    // Handle form submission
    document.getElementById('submit').addEventListener('click', function() {
        const users = `${document.getElementById('name').value}, ${document.getElementById('phone').value}`;
        document.getElementById('summaryUsers').innerText = users;
        currentStep++;
        showStep(currentStep);
    });

    // Handle saving or printing the booking summary
    document.getElementById('savePrint').addEventListener('click', function() {
        window.print();
    });

    // Show the first step initially
    showStep(currentStep);
});
