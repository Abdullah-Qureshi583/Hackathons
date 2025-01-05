const addNewLanField = (): void => {
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

  const addLanBtn = document.querySelector(".addLanBtn") as HTMLElement;
  const laContainer = document.querySelector("#la") as HTMLElement;

  laContainer.insertBefore(container, addLanBtn);
};

function addNewEdField(): void {
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

  const addEdBtn = document.querySelector(".addEdBtn") as HTMLElement;
  const edContainer = document.querySelector("#ed") as HTMLElement;

  edContainer.insertBefore(container, addEdBtn);
}

const addNewExpField = (): void => {
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

  const expContainer = document.querySelector(".exp") as HTMLElement;
  expContainer.appendChild(container);
};

function addNewSKField(): void {
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

  const skillsContainer = document.querySelector(".skills") as HTMLElement;
  skillsContainer.appendChild(container);
}

const editResume = (): void => {
  const resume = document.querySelector(".resume") as HTMLElement;
  const form = document.querySelector(".form") as HTMLElement;

  resume.classList.add("hide");
  form.classList.remove("hide");
};

function generateResume(): void {
  const resume = document.querySelector(".resume") as HTMLElement;
  const form = document.querySelector(".form") as HTMLElement;

  resume.classList.remove("hide");
  form.classList.add("hide");

  const fullNameElement = document.getElementById("fullName") as HTMLElement;
  const nameField = document.getElementById("nameField") as HTMLInputElement;
  fullNameElement.innerHTML = nameField.value;

  const jobTitleElement = document.getElementById("jobTitle") as HTMLElement;
  const jobField = document.getElementById("jobField") as HTMLInputElement;
  jobTitleElement.innerHTML = jobField.value;

  const phoneLi = document.querySelector(".phoneLi") as HTMLElement;
  const contactField = document.getElementById(
    "contactField"
  ) as HTMLInputElement;
  if (contactField.value.trim() !== "") {
    phoneLi.classList.remove("hide");
    const userContact = document.getElementById("userContact") as HTMLElement;
    userContact.innerHTML = contactField.value;
  } else {
    phoneLi.classList.add("hide");
  }

  const gmailLi = document.querySelector(".gmailLi") as HTMLElement;
  const gmailField = document.getElementById("gmailField") as HTMLInputElement;
  if (gmailField.value.trim() !== "") {
    gmailLi.classList.remove("hide");
    const userGmail = document.getElementById("userGmail") as HTMLElement;
    userGmail.innerHTML = gmailField.value;
  } else {
    gmailLi.classList.add("hide");
  }

  const addressLi = document.querySelector(".addressLi") as HTMLElement;
  const addressField = document.getElementById(
    "addressField"
  ) as HTMLInputElement;
  if (addressField.value.trim() !== "") {
    addressLi.classList.remove("hide");
    const userAddress = document.getElementById("userAddress") as HTMLElement;
    userAddress.innerHTML = addressField.value;
  } else {
    addressLi.classList.add("hide");
  }

  const birthLi = document.querySelector(".birthLi") as HTMLElement;
  const birthField = document.getElementById("birthField") as HTMLInputElement;
  if (birthField.value.trim() !== "") {
    birthLi.classList.remove("hide");
    const userBirthday = document.getElementById("userBirthday") as HTMLElement;
    userBirthday.innerHTML = birthField.value;
  } else {
    birthLi.classList.add("hide");
  }

  const infoLis = Array.from(
    document.querySelectorAll(".info li")
  ) as HTMLLIElement[];
  const infoHeading = document.querySelector(".infoHeading") as HTMLElement;
  let hasVisibleItem = false;

  infoLis.forEach((li) => {
    if (!li.classList.contains("hide")) {
      hasVisibleItem = true;
    }
  });

  infoHeading.innerHTML = hasVisibleItem ? "Contact Info" : "";

  const languages = Array.from(
    document.getElementsByClassName("laField")
  ) as HTMLInputElement[];
  let lanF = "";
  for (const e of languages) {
    if (e.value.trim() !== "") {
      lanF += `<li><span>${e.value}</span></li>`;
    }
  }
  const lanElement = document.getElementById("lan") as HTMLElement;
  lanElement.innerHTML = lanF;
  const languageHeading = document.querySelector(
    ".languageHeading"
  ) as HTMLElement;
  languageHeading.innerHTML = lanF !== "" ? "Languages" : "";

  const educationF = Array.from(
    document.getElementsByClassName("edField")
  ) as HTMLInputElement[];
  let resEdu = "";
  for (const e of educationF) {
    if (e.value.trim() !== "") {
      resEdu += `<li><span>${e.value}</span></li>`;
    }
  }
  const educationElement = document.getElementById("education") as HTMLElement;
  educationElement.innerHTML = resEdu;
  const educationHeading = document.querySelector(
    ".educationHeading"
  ) as HTMLElement;
  educationHeading.innerHTML = resEdu !== "" ? "Education" : "";

  const abValue = (
    document.getElementById("objectiveField") as HTMLInputElement
  ).value;
  const aboutHeading = document.querySelector(".aboutHeading") as HTMLElement;
  const objectiveT = document.getElementById("objectiveT") as HTMLElement;
  if (abValue.trim() !== "") {
    aboutHeading.innerHTML = "About";
    objectiveT.innerHTML = abValue;
  }

  const wes = Array.from(
    document.getElementsByClassName("weField")
  ) as HTMLTextAreaElement[];
  let str = "";
  for (const e of wes) {
    if (e.value.trim() !== "") {
      str += `<li class="squar"><span>${e.value}</span></li>`;
    }
  }
  const weT = document.getElementById("weT") as HTMLElement;
  weT.innerHTML = str;
  const expHeading = document.querySelector(".expHeading") as HTMLElement;
  expHeading.innerHTML = str !== "" ? "Experiences" : "";

  const aqs = Array.from(
    document.getElementsByClassName("skField")
  ) as HTMLInputElement[];
  let str1 = "";
  for (const e of aqs) {
    if (e.value.trim() !== "") {
      str1 += `<li class="squar"><span>${e.value}</span></li>`;
    }
  }
  const skillsElement = document.getElementById("skills") as HTMLElement;
  skillsElement.innerHTML = str1;
  const skillsHeading = document.querySelector(".skillsHeading") as HTMLElement;
  skillsHeading.innerHTML = str1 !== "" ? "Skills" : "";

  const fileInput = document.getElementById("imgField") as HTMLInputElement;
  const profileImg = document.getElementById("profileImg") as HTMLImageElement;

  if (fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImg.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
}

document.querySelector(".addEdBtn")?.addEventListener("click",()=>{
    addNewEdField()
})
document.querySelector(".addLanBtn")?.addEventListener("click",()=>{
    addNewLanField()
})
document.querySelector(".addExpBtn")?.addEventListener("click",()=>{
    addNewExpField()
})
document.querySelector(".addSkBtn")?.addEventListener("click",()=>{
    addNewSKField()
})

document.querySelector(".generateResume")?.addEventListener("click",()=>{
    generateResume()
})
document.querySelector(".editBtn")?.addEventListener("click",()=>{
    editResume()
})


