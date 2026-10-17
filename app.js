// Load the biography from aboutme.txt.
async function loadBiography() {
    const response = await fetch("aboutme.txt");

    if (!response.ok) {
        throw new Error("Could not load biography");
    }

    const biography = await response.text();

    document.getElementById("bio").textContent = biography;
}

// Display the biography or an error message.
loadBiography().catch(() => {
    document.getElementById("bio").textContent =
        "Unable to load biography. Please check the web server.";
});

// Handle the button click.
const learnButton = document.getElementById("learnButton");
const statusText = document.getElementById("status");

learnButton.addEventListener("click", () => {
    statusText.textContent =
        "HTML defines structure, CSS controls appearance, " +
        "and JavaScript adds behavior.";

    learnButton.textContent = "Fact Shown";
});
