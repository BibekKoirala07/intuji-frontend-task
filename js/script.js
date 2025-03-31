renderLeftSidebar();
renderRecentTransaction();
renderSavingPlans();
renderOverViewData();
import renderLeftSidebar from "./leftSidebar.js";
import renderOverViewData from "./overview.js";
import renderRecentTransaction from "./recentTransaction.js";
import renderSavingPlans from "./savingPlans.js";

let leftDrawerBoolean = false;
let rightDrawerBoolean = false;

// renderLaptopLeftSidebar();

const leftSidebar = document.getElementById("left-sidebar");
const rightSidebar = document.getElementById("right-sidebar");
const leftDrawer = document.getElementById("left-drawer");
const rightDrawer = document.getElementById("right-drawer");
const overlay = document.getElementById("overlay");
const leftSidebarCloseButton = document.getElementById(
  "left-sidebar-close-button"
);

console.log(leftSidebarCloseButton);
document.addEventListener("click", function (event) {
  if (event.target.closest("#left-sidebar-close-button")) {
    leftSidebar.classList.remove("left-sidebar-open");
    overlay.classList.remove("overlay-active");
    document.body.classList.toggle("sidebar-open");
  }
});

leftSidebarCloseButton.addEventListener("click", () => {
  // console.log("here");
  leftSidebar.classList.remove("left-sidebar-open");
  overlay.classList.remove("overlay-active");
  document.body.classList.toggle("sidebar-open");
});

leftDrawer.addEventListener("click", () => {
  // console.log("here", leftSidebar, overlay);
  leftSidebar.classList.toggle("left-sidebar-open");
  overlay.classList.toggle("overlay-active");
  document.body.classList.toggle("sidebar-open"); // This line is crucial
  console.log("Body class:", document.body.classList.contains("sidebar-open"));
});

overlay.addEventListener("click", () => {
  // console.log("here");
  leftSidebar.classList.remove("left-sidebar-open");
  overlay.classList.remove("overlay-active");
  document.body.classList.remove("sidebar-open");
});
