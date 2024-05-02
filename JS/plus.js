document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tarkista").addEventListener("click", function () {

        var forms = document.querySelectorAll('.form form');
        var correctCount = 0;
        var incorrectCount = 0;


        forms.forEach(function (form, index) {
            var selectedOption = form.querySelector('input[type="radio"]:checked');
            if (selectedOption && selectedOption.value === "right") {
                correctCount++;
            } else {

                incorrectCount++;
            }
        });

        document.getElementById("correctCount").textContent = correctCount;
        document.getElementById("incorrectCount").textContent = incorrectCount;
    });
});
