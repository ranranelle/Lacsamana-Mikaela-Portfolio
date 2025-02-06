import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const interops = [
  "./interop/interop1.png",
  "./interop/interop2.png",
  "./interop/interop3.png",
  "./interop/interop4.png",
  "./interop/interop5.png",
  "./interop/interop6.png",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      01: CADAVRE EXQUIS
        <div class="three-model">
        <a href="./YIPPIE/traversalpng.png" target="_blank">
          <img src=" ./YIPPIE/traversalpng.png" id="model1" alt="Model 1 image" />
        </a>

        </div>
        <div id="images-description">
          <div id="images">
  <a href="./YIPPIE/cadavre123.png" target="_blank">
    <img src="./YIPPIE/cadavre123.png" alt="cube1" />
  </a>
  <a href="./YIPPIE/cadavre456.png" target="_blank">
     <img src="./YIPPIE/cadavre456.png" alt="cube1" />
  </a>
  <a href="./YIPPIE/cadavre789.png" target="_blank">
    <img src="./YIPPIE/cadavre789.png" alt="cube1" />
  </a>
  <a href="./YIPPIE/cadavre1011.png" target="_blank">
    <img src="./YIPPIE/cadavre1011.png" alt="cube1" />
    </a>
           
</div>
          <h4 id="description">People often find themselves lost within their journey of self-discovery, venturing into the unknown in search of deeper understanding. In this process, they must open themselves up, confronting parts of themselves they never knew existed. True growth and self-awareness are not always evident in grand achievements or outward appearances, but are felt within, with inner truths that reveal themselves gradually. By embracing the unseen parts of ourselves, we unlock our truest selves.</h4>
        </div>
      </div>


      02: INTEROPERABILITY
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
      <a href="./interop/interop1.png" target="_blank">
    <img src="./interop/interop1.png" alt="interop1" />
  </a>
  <a href="./interop/interop2.png" target="_blank">
     <img src="./interop/interop2.png" alt="interop2" />
  </a>
  <a href="./interop/interop3.png" target="_blank">
    <img src="./interop/interop3.png" alt="interop3" />
  </a>
  <a href="./interop/interop4.png" target="_blank">
    <img src="./interop/interop4.png" alt="interop4" />
  <a href="./interop/interop5.png" target="_blank">
    <img src="./interop/interop5.png" alt="interop5" />
  <a href="./interop/interop6.png" target="_blank">
    <img src="./interop/interop6.png" alt="interop6" />
    </a>
    
          </div>
          <h4 id="description">Project 2 explores the interoperability between Rhino and Blender, providing comprehension between the two softwares. By analyzing the geometric changes and outcomes within three different models, we gain a deeper understanding of how these programs interpret and manage forms. This exploration enhances our comprehension of their capabilities and approaches to modeling.</h4>
        </div>
      </div>

      ${/* Model 3 commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
 createThreeScene("#model1", "/3DModels/project2/Pavilion.obj");
 createThreeScene("#model2", "/3DModels/project2/third.obj");
 createThreeScene("#model3", "/3DModels/project2/torus.obj");
