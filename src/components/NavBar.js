import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // const linkElements = links.map((link) => {
  //   return (
  //     <div>
  //       <a href="#home" key={link}>{link}</a>
  //     <a href="#about" key={link.about}>About</a>
  //     <a href="#projects" key={link.projects}>Projects</a>
  //     </div>
  //   );
  // });

  return (
    <nav>
      <a href="#home" key={links.home}>
        home
      </a>
      <a href="#about" key={links.about}>
        About
      </a>
      <a href="#projects" key={links.projects}>
        Projects
      </a>
    </nav>
  );
}

export default NavBar;
