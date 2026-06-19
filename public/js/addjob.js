document
.getElementById("jobForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const jobData = {

        title:
        document.getElementById("title").value,

        company:
        document.getElementById("company").value,

        location:
        document.getElementById("location").value,

        salary:
        document.getElementById("salary").value

    };

    const response =
    await fetch(
        "http://localhost:5000/jobs",
        {
            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body:
            JSON.stringify(jobData)
        }
    );

    const result =
    await response.json();

    alert("Job Added Successfully");

    console.log(result);

    document
    .getElementById("jobForm")
    .reset();

});