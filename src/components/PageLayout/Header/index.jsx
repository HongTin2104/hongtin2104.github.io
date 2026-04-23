import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Layout } from 'antd';
import 'font-awesome/less/font-awesome.less';
import style from './header.module.less';
import '../../../styles/global.less';
import { useWindowSize } from '../../../utils/hooks';

const NAV_LINKS = [
  { to: '/', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const RESUME_LINK = {
  to: '/resume',
  label: 'Resume',
};

const Header = () => {
  const [menu, setMenu] = useState(false);

  const [width] = useWindowSize();
  const toggleMenu = () => {
    if (width !== 0 && width <= 768) {
      setMenu((currentState) => !currentState);
    }
  };

  return (
    <div style={{ background: 'transparent' }}>
      <div
        className={style.circleMenu}
        role="button"
        tabIndex="0"
        onKeyDown={toggleMenu}
        onClick={toggleMenu}
      >
        <div className={`${style.hamburger} ${menu ? style.menuIcon : null}`}>
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.hamburgerText}>MENU</div>
        </div>
      </div>
      <Layout
        className={`${style.navWrap} ${menu ? null : style.hidden} ${
          menu ? style.openMenu : null
        }`}
      >
        <div className={style.backgroundDiv}>
          <ul className={style.nav}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to} className={style.navItem}>
                <Link
                  to={to}
                  onClick={toggleMenu}
                  activeClassName={style.anchorActive}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className={style.navItem}>
              <Link
                to={RESUME_LINK.to}
                onClick={toggleMenu}
                activeClassName={style.anchorActive}
              >
                {RESUME_LINK.label}
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
};

export default Header;
