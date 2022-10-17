export const setActiveLink = (title) => {
  localStorage.setItem("activeLink", title);
};

export const activeLink = localStorage.getItem("activeLink");

export const links =
  [
    {
      title: "Home",
      link: ""
    },
    {
      title: "About Us",
      link: "about-us"
    },
    {
      title: "Our Projects",
      link: "projects"
    },
    {
      title: "Contact Us",
      link: "contact",
    }
  ]

export const active = "active"
export const inactive = "inactive"
export const inactiveAni = "inactiveAni"