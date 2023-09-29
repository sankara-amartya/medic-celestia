<script>
        function calculateOutcome() {
            const scoreSelect = document.getElementByClass("quiz");
            const selectedScore = parseInt(answer-button.value);

            const outcome = (selectedScore / 50) * 50;

            const outcomeElement = document.getElementById("outcome");
            outcomeElement.textContent = `Your outcome out of 50 is: ${outcome}`;
        }
    </script>