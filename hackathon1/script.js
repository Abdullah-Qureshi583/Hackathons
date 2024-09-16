const addNewLanField = () => {
    const container = document.createElement("div");
    container.setAttribute("class", "form-control");
    const newLang = document.createElement("input");
    newLang.setAttribute("class", "laField");
    newLang.setAttribute("placeholder", "Enter here");
    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-solid fa-x");
    deleteIcon.style.cursor = "pointer";
    deleteIcon.addEventListener("click", () => {
        container.remove();
    });
    container.appendChild(newLang);
    container.appendChild(deleteIcon);
    const addLanBtn = document.querySelector(".addLanBtn");
    const laContainer = document.querySelector("#la");
    laContainer.insertBefore(container, addLanBtn);
};
function addNewEdField() {
    const container = document.createElement("div");
    container.setAttribute("class", "form-control");
    const newEd = document.createElement("input");
    newEd.setAttribute("class", "edField");
    newEd.setAttribute("placeholder", "Enter here");
    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-solid fa-x");
    deleteIcon.style.cursor = "pointer";
    deleteIcon.addEventListener("click", () => {
        container.remove();
    });
    container.appendChild(newEd);
    container.appendChild(deleteIcon);
    const addEdBtn = document.querySelector(".addEdBtn");
    const edContainer = document.querySelector("#ed");
    edContainer.insertBefore(container, addEdBtn);
}
const addNewExpField = () => {
    const container = document.createElement("div");
    container.setAttribute("class", "form-control");
    const newExp = document.createElement("textarea");
    newExp.setAttribute("class", "weField");
    newExp.setAttribute("rows", "3");
    newExp.setAttribute("placeholder", "Enter Experience");
    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-solid fa-x");
    deleteIcon.style.cursor = "pointer";
    deleteIcon.addEventListener("click", () => {
        container.remove();
    });
    container.appendChild(newExp);
    container.appendChild(deleteIcon);
    const expContainer = document.querySelector(".exp");
    expContainer.appendChild(container);
};
function addNewSKField() {
    const container = document.createElement("div");
    container.setAttribute("class", "form-control");
    const newSkill = document.createElement("input");
    newSkill.setAttribute("class", "skField");
    newSkill.setAttribute("placeholder", "Enter here");
    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-solid fa-x");
    deleteIcon.style.cursor = "pointer";
    deleteIcon.addEventListener("click", () => {
        container.remove();
    });
    container.appendChild(newSkill);
    container.appendChild(deleteIcon);
    const skillsContainer = document.querySelector(".skills");
    skillsContainer.appendChild(container);
}
const editResume = () => {
    const resume = document.querySelector(".resume");
    const form = document.querySelector(".form");
    resume.classList.add("hide");
    form.classList.remove("hide");
};
function generateResume() {
    const resume = document.querySelector(".resume");
    const form = document.querySelector(".form");
    resume.classList.remove("hide");
    form.classList.add("hide");
    const fullNameElement = document.getElementById("fullName");
    const nameField = document.getElementById("nameField");
    fullNameElement.innerHTML = nameField.value;
    const jobTitleElement = document.getElementById("jobTitle");
    const jobField = document.getElementById("jobField");
    jobTitleElement.innerHTML = jobField.value;
    const phoneLi = document.querySelector(".phoneLi");
    const contactField = document.getElementById("contactField");
    if (contactField.value.trim() !== "") {
        phoneLi.classList.remove("hide");
        const userContact = document.getElementById("userContact");
        userContact.innerHTML = contactField.value;
    }
    else {
        phoneLi.classList.add("hide");
    }
    const gmailLi = document.querySelector(".gmailLi");
    const gmailField = document.getElementById("gmailField");
    if (gmailField.value.trim() !== "") {
        gmailLi.classList.remove("hide");
        const userGmail = document.getElementById("userGmail");
        userGmail.innerHTML = gmailField.value;
    }
    else {
        gmailLi.classList.add("hide");
    }
    const addressLi = document.querySelector(".addressLi");
    const addressField = document.getElementById("addressField");
    if (addressField.value.trim() !== "") {
        addressLi.classList.remove("hide");
        const userAddress = document.getElementById("userAddress");
        userAddress.innerHTML = addressField.value;
    }
    else {
        addressLi.classList.add("hide");
    }
    const birthLi = document.querySelector(".birthLi");
    const birthField = document.getElementById("birthField");
    if (birthField.value.trim() !== "") {
        birthLi.classList.remove("hide");
        const userBirthday = document.getElementById("userBirthday");
        userBirthday.innerHTML = birthField.value;
    }
    else {
        birthLi.classList.add("hide");
    }
    const infoLis = Array.from(document.querySelectorAll(".info li"));
    const infoHeading = document.querySelector(".infoHeading");
    let hasVisibleItem = false;
    infoLis.forEach((li) => {
        if (!li.classList.contains("hide")) {
            hasVisibleItem = true;
        }
    });
    infoHeading.innerHTML = hasVisibleItem ? "Contact Info" : "";
    const languages = Array.from(document.getElementsByClassName("laField"));
    let lanF = "";
    for (const e of languages) {
        if (e.value.trim() !== "") {
            lanF += `<li><span>${e.value}</span></li>`;
        }
    }
    const lanElement = document.getElementById("lan");
    lanElement.innerHTML = lanF;
    const languageHeading = document.querySelector(".languageHeading");
    languageHeading.innerHTML = lanF !== "" ? "Languages" : "";
    const educationF = Array.from(document.getElementsByClassName("edField"));
    let resEdu = "";
    for (const e of educationF) {
        if (e.value.trim() !== "") {
            resEdu += `<li><span>${e.value}</span></li>`;
        }
    }
    const educationElement = document.getElementById("education");
    educationElement.innerHTML = resEdu;
    const educationHeading = document.querySelector(".educationHeading");
    educationHeading.innerHTML = resEdu !== "" ? "Education" : "";
    const abValue = document.getElementById("objectiveField").value;
    const aboutHeading = document.querySelector(".aboutHeading");
    const objectiveT = document.getElementById("objectiveT");
    if (abValue.trim() !== "") {
        aboutHeading.innerHTML = "About";
        objectiveT.innerHTML = abValue;
    }
    const wes = Array.from(document.getElementsByClassName("weField"));
    let str = "";
    for (const e of wes) {
        if (e.value.trim() !== "") {
            str += `<li class="squar"><span>${e.value}</span></li>`;
        }
    }
    const weT = document.getElementById("weT");
    weT.innerHTML = str;
    const expHeading = document.querySelector(".expHeading");
    expHeading.innerHTML = str !== "" ? "Experiences" : "";
    const aqs = Array.from(document.getElementsByClassName("skField"));
    let str1 = "";
    for (const e of aqs) {
        if (e.value.trim() !== "") {
            str1 += `<li class="squar"><span>${e.value}</span></li>`;
        }
    }
    const skillsElement = document.getElementById("skills");
    skillsElement.innerHTML = str1;
    const skillsHeading = document.querySelector(".skillsHeading");
    skillsHeading.innerHTML = str1 !== "" ? "Skills" : "";
    const fileInput = document.getElementById("imgField");
    const profileImg = document.getElementById("profileImg");
    if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImg.src = e.target?.result;
        };
        reader.readAsDataURL(file);
    }
}
document.querySelector(".addEdBtn")?.addEventListener("click", () => {
    addNewEdField();
});
document.querySelector(".addLanBtn")?.addEventListener("click", () => {
    addNewLanField();
});
document.querySelector(".addExpBtn")?.addEventListener("click", () => {
    addNewExpField();
});
document.querySelector(".addSkBtn")?.addEventListener("click", () => {
    addNewSKField();
});
document.querySelector(".generateResume")?.addEventListener("click", () => {
    generateResume();
});
document.querySelector(".editBtn")?.addEventListener("click", () => {
    editResume();
});
export {};
