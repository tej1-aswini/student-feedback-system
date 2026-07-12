document.getElementById("feedbackForm").addEventListener("submit", function(e){

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value,
        feedback: document.getElementById("feedback").value
    };


    fetch("http://localhost:5000/api/feedback", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    })

    .then(response => response.json())

    .then(result => {

        document.getElementById("message").innerText = result.message;

        document.getElementById("feedbackForm").reset();

    })

    .catch(error => {

        console.log(error);

        document.getElementById("message").innerText =
        "Error submitting feedback";

    });

});

// Display all feedback

fetch("http://localhost:5000/api/feedback")

.then(response => response.json())

.then(data => {

    let output = "";

    data.forEach(item => {

        output += `
        <div class="feedback-card">
            <h3>${item.name}</h3>
            <p>Email: ${item.email}</p>
            <p>Course: ${item.course}</p>
            <p>Feedback: ${item.feedback}</p>
        </div>
        `;

    });

    document.getElementById("feedbackList").innerHTML = output;

});