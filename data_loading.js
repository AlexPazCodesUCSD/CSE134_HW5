document.getElementById("load-local-button").addEventListener("click", localLoadProjectCards);
document.getElementById("load-remote-button").addEventListener("click", remoteLoadProjectCards);

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
    title: "UC Safe",
    info: "For ENG 10, I worked with a team of 4 on a project to improve campus safety. I was lead programmer and had to work with a raspberry pi and motion sensor. It was a fun introduction to working with both hardware and software. In the end we created our project which attaches to the back of a backpack and alerts you through a buzzer when anyone accelerating towards you, to help prevent accidents.",
    smallPicSrc: "images/eng10/projectpic.jpg",
    largePicSrc: "images/eng10/projectpic.jpg",
    alt: "My project attached to a backpack.",
    contentLink: "https://docs.google.com/presentation/d/1zjePyW6LdVYr4pv8JXGBPzTAW-uqlrWcicdi36-SA8c/edit#slide=id.g2631a98d218_0_115"
  },
  {
    title: "Portfolio Website",
    info: "In COGS 3 I first began my webdev journey. It was recommended by a friend as a perfect intro to developing websites and the class built up to making a portfolio website to show off what we learned. It was fun trying out frameworks and seeing my website look like a genuine website. I have the website linked here if you would like to check it out.",
    smallPicSrc: "images/cogs3/projectpic.jpg",
    largePicSrc: "images/cogs3/projectpic.jpg",
    alt: "A screenshot of my portfolio site.",
    contentLink: "https://alexpazcodesucsd.github.io/"
  },  
  {
    title: "Scratch Lessons",
    info: "Currently, in my EDS 124BR course on Teaching Computational Thinking, I am developing experience explaining and teaching simple to complex introductory concepts in Computer Science using Scratch. I have also taken EDS 124AR where I learned more about teaching CS to K-12 students. I feel passionate about becoming a CS teacher and helping bring CS lessons to all schools. I have linked one of my lessons here.",
    smallPicSrc: "images/scratch/scratchpic.jpg",
    largePicSrc: "images/scratch/scratchpic.jpg",
    alt: "Screenshot of my scratch lesson.",
    contentLink: "https://www.youtube.com/watch?v=5D22etKZ6XY&ab_channel=JorgePaz"
  },
  {
    title: "Web Dev K-12 Lesson",
    info: "For CSE 198, I got to participate in creating and giving lessons to K-12 students at schools. Me and a group of about 5 worked to make a lesson to teach kids from Elementary to High school about web development basics. We learned how tough it is to develop lessons that are not dependent on online activities, as schools do not have reliable internet.",
    smallPicSrc: "images/cse198/webdevlesson.jpg",
    largePicSrc: "images/cse198/webdevlesson.jpg",
    alt: "Screenshot of the Web Dev Lesson I worked on.",
    contentLink: "https://docs.google.com/presentation/d/1zZl2EU3fyOF_q2bUL0EdihWvIRYIfV6bn_356tVDF48/edit#slide=id.p1"
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

async function remoteLoadProjectCards() {
  try {
    const response = await fetch('https://my-json-server.typicode.com/AlexPazCodesUCSD/hw5-myjson-repo/exampleProjects');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const projects = await response.json();
      renderProjectCards(projects);
  }

  catch (err){
    console.error("JSON was invalid.", err);

  }
}
