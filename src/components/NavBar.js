import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const activeCssClassnameHome = 'text-white';
const cssClassnameHome =
  'inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-white text-4xl font-bold cursive tracking-widest';

const activeCssClassname = 'text-white bg-blue-700';
const cssClassname =
  'inline-flex items-center py-3 px-3 my-4 rounded text-blue-200 hover:text-white';

export default function NavBar() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName={activeCssClassnameHome}
            className={cssClassnameHome}
          >
            Charlie
          </NavLink>
          <NavLink
            to="/posts"
            activeClassName={activeCssClassname}
            className={cssClassname}
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName={activeCssClassname}
            className={cssClassname}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName={activeCssClassname}
            className={cssClassname}
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/Fendrium"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/charlienvp/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
