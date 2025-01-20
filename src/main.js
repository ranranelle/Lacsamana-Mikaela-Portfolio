import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
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

      ${/* Model 2 commented out
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
      */""} 

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
// createThreeScene("#model1", "/3DModels/project1/cube.obj");
// createThreeScene("#model2", "/3DModels/project2/tree.obj");
// createThreeScene("#model3", "/3DModels/project3/cottage.obj");
