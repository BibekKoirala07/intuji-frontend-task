const links = [
  {
    icon: "dashboard",
    name: "Dashboard",
    isActive: true,
    click: () => console.log("Dashboard clicked"),
  },
  {
    icon: "schedule",
    name: "Schedule",
    isActive: false,
    click: () => console.log("Schedule clicked"),
  },
  {
    icon: "message",
    name: "Message",
    isActive: false,
    click: () => console.log("Message clicked"),
  },
  {
    icon: "analytics",
    name: "Analytics",
    isActive: false,
    click: () => console.log("Analytics clicked"),
  },
  {
    icon: "group",
    name: "Team",
    isActive: false,
    click: () => console.log("Team clicked"),
  },
  {
    icon: "person",
    name: "Profile",
    isActive: false,
    click: () => console.log("Profile clicked"),
  },
  {
    icon: "settings",
    name: "Settings",
    isActive: false,
    click: () => console.log("Settings clicked"),
  },
  {
    icon: "help",
    name: "Help",
    isActive: false,
    click: () => console.log("Help clicked"),
  },
  {
    icon: "logout",
    name: "Logout",
    isActive: false,
    click: () => console.log("Logout clicked"),
  },
];

const leftSidebaar = document.querySelector(".left-sidebar");

const renderLeftSidebar = () => {
  leftSidebaar.innerHTML = `
      <div class="left-sidebar-close">
        <div class="left-sidebar-close-button" id="left-sidebar-close-button">
          <span class="material-symbols-outlined cursor-pointer"> close </span>
        </div>
      </div>
    `;

  leftSidebaar.innerHTML += `
      <div class="left-sidebar-image ">
          <span class="material-symbols-outlined bg-img radius-xs"> image </span>
      </div>
    `;
  leftSidebaar.innerHTML += `
      <div class="left-sidebar-links">
         <div class="left-sidebar-links-upper-part">
         ${links
           .slice(0, 5)
           .map((each, index) => {
             const iconClass = each.isActive
               ? "material-symbols-outlined yellow"
               : "material-symbols-outlined";
             return `
             <div id="${each.name}" class="left-sidebar-link ${
               each.isActive ? "isActive text-yellow font-bold" : ""
             }" data-name="${each.name}">
               <span class="${iconClass}">${each.icon}</span>
               <p class="text-sm ${
                 each.isActive ? "font-semibold" : "font-light"
               } primary">${each.name}</p>
             </div>
             `;
           })
           .join("")}
        
            <hr class="primary" />

            ${links
              .slice(5, 7)
              .map((each, index) => {
                return `
               <div id="${each.name}" class="left-sidebar-link ${
                  each.isActive ? "isActive text-yellow" : ""
                }" data-name="${each.name}">
              <span class="material-symbols-outlined ${
                each.isActive && "yellow"
              }">${each.icon}</span>
              <p class="text-sm ${each.isActive && "font-semibold"} primary">${
                  each.name
                }</p>
            </div>
              `;
              })
              .join("")}
      
          </div>

          <div class="left-sidebar-links-lower-part">
            ${links
              .slice(7, 9)
              .map((each, index) => {
                return `
               <div id="${each.name}" class="left-sidebar-link ${
                  each.isActive ? "isActive" : ""
                }" data-name="${each.name}">
              <span class="material-symbols-outlined ${
                each.isActive && "text-yellow font-bold"
              }">${each.icon}</span>
              <p class="text-sm ${
                each.isActive && "font-semibold text-yellow"
              }">${each.name}</p>
            </div>
              `;
              })
              .join("")}
          </div>
        </div>
        `;

  document.querySelectorAll(".left-sidebar-link").forEach((link) => {
    link.addEventListener("click", () => {
      const linkName = link.getAttribute("data-name");

      links.forEach((each) => {
        if (each.name === linkName) {
          each.isActive = true;
        } else {
          each.isActive = false;
        }
      });

      renderLeftSidebar();
    });
  });
};

export default renderLeftSidebar;
