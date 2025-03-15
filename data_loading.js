document.getElementById("load-local-button").addEventListener("click", localLoadProjectCards);
const exampleProjects = [
  {
    title: "FreshFridge",
    info: "In my ECE 196 Engineering Hands-On Project course, I was lead programmer for our team project. I worked with two electrical engineers to develop a product called FreshFridge that involved hardware and software connections to support our communities. We developed a storage container that could detect the spoilage of food using gas sensors, and deliver the sensors determinations in real time to the website I developed.",
    smallPicSrc: "images/freshfridge/projectpic.jpg",
    largePicSrc: "images/freshfridge/projectpic.jpg",
    alt: "Screenshot of the FreshFridge project page displaying the health status of a banana.",
    contentLink: "https://alexpazcodesucsd.github.io/FreshFridge/"
  },
  {
    title: "FreshFridge2",
    info: "In my ECE 196 Engineering Hands-On Project course, I was lead programmer for our team project. I worked with two electrical engineers to develop a product called FreshFridge that involved hardware and software connections to support our communities. We developed a storage container that could detect the spoilage of food using gas sensors, and deliver the sensors determinations in real time to the website I developed.",
    smallPicSrc: "images/freshfridge/projectpic.jpg",
    largePicSrc: "images/freshfridge/projectpic.jpg",
    alt: "Screenshot of the FreshFridge project page displaying the health status of a banana.",
    contentLink: "https://alexpazcodesucsd.github.io/FreshFridge/"
  }
];

localStorage.setItem("projects", JSON.stringify(exampleProjects));

function renderProjectCards(projectArray) {
  const container = document.getElementById("project-card-container");
  container.innerHTML = ""; // Clear any existing cards

  projectArray.forEach(project => {
    const card = document.createElement("project-card");

    // Set attributes on the card based on project object properties
    if (project.title) card.setAttribute("title", project.title);
    if (project.info) card.setAttribute("info", project.info);
    if (project.smallPicSrc) card.setAttribute("small-pic-src", project.smallPicSrc);
    if (project.largePicSrc) card.setAttribute("large-pic-src", project.largePicSrc);
    if (project.alt) card.setAttribute("alt", project.alt);
    if (project.contentLink) card.setAttribute("content-link", project.contentLink);

    // Append the card to the container
    container.appendChild(card);
  });
}

function localLoadProjectCards() {
  const projects = localStorage.getItem("projects");
  if(!projects){
    alert("Projects was not found in local storage.");
    return;
  }

  try {
    const projectParsed = JSON.parse(projects);
    renderProjectCards(projectParsed);
  }

  catch (err) {
    console.error("JSON was invalid.", err);
  }
}
