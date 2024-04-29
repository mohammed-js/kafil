const navigations = [
  {
    icon: "fa-shopping-cart",
    title: "Actions",
    href: "/",
  },
  {
    icon: "fa-trophy",
    title: "Contests",
    href: "#contests",
  },
  {
    icon: "fa-shopping-bag",
    title: "Projects",
    href: "#projects",
  },
  {
    icon: "fa-image",
    title: "Portfolios",
    href: "#portfolios",
  },
  {
    icon: "fa-image",
    title: "Freelancers",
    href: "#freelancers",
  },
  {
    icon: "fa-comments",
    title: "Forum",
    href: "#freelancers",
  },
];

const middleSectionContainer = document.getElementById(
  "middle_section_container"
);

navigations.forEach((navigation) => {
  const buttonElement = document.createElement("div");
  // Assuming you want to uncomment these styles later
  const styles = {
    display: "flex",
    gap: "10px",
  };
  for (const [key, value] of Object.entries(styles)) {
    buttonElement.style[key] = value;
  }

  // Create and set innerHTML for each navigation item
  buttonElement.innerHTML = `
      <a class=${
        isActive(navigation.href)
          ? "header_button_container_active"
          : "header_button_container"
      } href="${navigation.href}">
        <i class="fas ${navigation.icon}"></i>
        <div>${navigation.title}</div>
      </a>
    `;

  // Append the button element to the middle section container
  middleSectionContainer.appendChild(buttonElement);
});

//* dropdown (burger)
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction_burger() {
  document.getElementById("myDropdown_burger").classList.toggle("show_burger");
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn_burger")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content_burger");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show_burger")) {
//         openDropdown.classList.remove("show_burger");
//       }
//     }
//   }
// };

//* dropdown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
function handleClick(event) {
  event.stopPropagation();
  // Your additional logic here
}
