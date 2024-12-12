let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");

let lightBackground = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png";
let darkBackground = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png";

function changeTheme(event) {
    if (event.key === "Enter") {
        let themeUserInputVal = themeUserInputEl.value;

        if (themeUserInputVal === "Light") {
            bgContainerEl.style.backgroundImage = lightBackground;
            headingEl.style.color = "#014d40";
        } else if (themeUserInputVal === "dark") {
            bgContainerEl.style.backgroundImage = darkBackground;
            headingEl.style.color = "#ffffff";
        } else {
            alert("Enter the valid theme");
        }
    }
}

themeUserInputEl.addEventListener("keydown", changeTheme);