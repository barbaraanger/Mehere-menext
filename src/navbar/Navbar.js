import React from "react";

class Navbar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a href="/" class="navbar-item">
              Home
            </a>

            <a href="/" class="navbar-item">
              Documentation
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a href="/" class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a href="/" class="navbar-item">
                  About
                </a>
                <a href="/" class="navbar-item">
                  Jobs
                </a>
                <a href="/" class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider" />
                <a href="/" class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
