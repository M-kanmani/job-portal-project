async function loadApplications() {

    const email =
    document.getElementById("email").value;

    const response =
    await fetch(
        "http://localhost:5000/applications"
    );

    const applications =
    await response.json();

    const filtered =
    applications.filter(app =>
        app.userEmail === email
    );

    let html = "";

    filtered.forEach(app => {

        html += `
        <div>

            <h3>${app.jobTitle}</h3>

            <p>
                Company:
                ${app.company}
            </p>

            <p>
                Applied By:
                ${app.userEmail}
            </p>

            <hr>

        </div>
        `;

    });

    document
    .getElementById("applications")
    .innerHTML = html;

}