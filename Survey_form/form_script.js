document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    console.log("Survey Submitted:", data);
    alert("Thank you for your feedback!");
});