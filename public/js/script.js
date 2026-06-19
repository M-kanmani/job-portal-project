let allJobs = [];

// Load Jobs
async function loadJobs() {

    try {

        const response =
        await fetch("http://localhost:5000/jobs");

        allJobs =
        await response.json();

        displayJobs(allJobs);

    } catch (error) {

        console.log(error);

    }

}

// Display Jobs
function displayJobs(jobs) {

    let html = "";

    jobs.forEach(job => {

        html += `
        <div class="job-card">

            <h3>${job.title}</h3>

            <p>
                <strong>Company:</strong>
                ${job.company}
            </p>

            <p>
                <strong>Location:</strong>
                ${job.location}
            </p>

            <p>
                <strong>Salary:</strong>
                ₹${job.salary}
            </p>

            <button
            onclick="applyJob(
            '${job.title}',
            '${job.company}'
            )">
            Apply
            </button>

            <button
            onclick="deleteJob(
            '${job._id}'
            )">
            Delete
            </button>

            <hr>

        </div>
        `;

    });

    document.getElementById("jobs").innerHTML = html;

}

// Search Jobs
function searchJobs() {

    const keyword =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const filteredJobs =
    allJobs.filter(job =>
        job.title
        .toLowerCase()
        .includes(keyword)
    );

    displayJobs(filteredJobs);

}

// Apply Job
async function applyJob(
    jobTitle,
    company
) {

    const userEmail =
    prompt("Enter Your Email");

    if (!userEmail) {

        alert("Email Required");
        return;

    }

    try {

        const response =
        await fetch(
            "http://localhost:5000/applications/apply",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({
                    userEmail,
                    jobTitle,
                    company
                })

            }
        );

        const result =
        await response.json();

        alert("Applied Successfully");

        console.log(result);

    } catch (error) {

        console.log(error);

        alert("Application Failed");

    }

}

// Delete Job
async function deleteJob(id) {

    const confirmDelete =
    confirm("Are you sure you want to delete this job?");

    if (!confirmDelete) {
        return;
    }

    try {

        const response =
        await fetch(
            `http://localhost:5000/jobs/${id}`,
            {
                method: "DELETE"
            }
        );

        const result =
        await response.json();

        alert(result.message);

        loadJobs();

    } catch (error) {

        console.log(error);

        alert("Delete Failed");

    }

}

// Initial Load
loadJobs();

function logout(){

    alert("Logged Out Successfully");

    window.location.href =
    "login.html";

}

function toggleTheme(){

    console.log("Dark Mode Clicked");

    document.body.classList.toggle("dark");

}