import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faGear, faCamera } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  { title: 'Dashboard',   icon: <FontAwesomeIcon icon={faHouseUser} />, path: '/mydashboard' },
  {
    title: 'Settings',
    icon:  <FontAwesomeIcon icon={faGear} />,
    children: [
      { title: 'My Details', path: '/mysettings/mydetails' },
      { title: 'Account',    path: '/mysettings/account'   }
    ]
  },
  { title: 'My Bookings', icon: <FontAwesomeIcon icon={faCamera} />,  path: '/mybookings' }
];

export default function Sidebarmenu() {
  const { pathname } = useLocation();
  const navigate    = useNavigate();

  return (
    <nav className="flex flex-col w-[15rem] text-primary-dark">
      {menuItems.map((item, idx) => {
        if (!item.children) {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                [
                  'flex gap-2 py-3 px-2 border-t border-primary-dark cursor-pointer w-full',
                  idx > 0 && 'border-b',
                  isActive
                    ? 'bg-primary-dark text-secondary-light'
                    : 'bg-white text-primary-dark'
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          );
        }

        const defaultChild = item.children[0].path;
        const isSettingsActive = pathname.startsWith('/mysettings/');

        return (
          <React.Fragment key={item.title}>
            <div
              onClick={() => navigate(defaultChild)}
              className={[
                'flex gap-2 py-3 px-2 border-t border-primary-dark cursor-pointer w-full',
                idx > 0 && 'border-b',
                isSettingsActive
                  ? 'bg-primary-dark text-secondary-light'
                  : 'bg-white text-primary-dark'
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </div>

       
            <ul className="flex flex-col">
              {item.children.map((child, cIdx) => (
                <li
                  key={child.path}
                  className={`${cIdx === 0 ? 'border-b' : ''} border-primary-dark m-0`}
                >
                  <NavLink
                    to={child.path}
                    end
                    className={({ isActive }) =>
                      [
                        'block pl-8 py-2 text-xs w-full cursor-pointer',
                        isActive
                          ? 'bg-ternary-medium text-primary-dark font-semibold'
                          : 'bg-ternary-light text-primary-dark'
                      ].join(' ')
                    }
                  >
                    {child.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
