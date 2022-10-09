import { Fragment } from 'react';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { useUiState } from '@hooks/useUiState';
import { MenuList } from '@config/menu';
import { MenuItem } from './Item';

export default function MainMenuList(): JSX.Element {
  const [open, setOpen] = useState(true);
  const { openMainDrawer } = useUiState();

  const handleCollapseClick = (evt: MouseEvent) => {
    evt.stopPropagation();
    setOpen(!open);
  };

  return (
    <>
      {Object.values(MenuList).map((menu) => {
        if (menu.icon) {
          if (!menu?.sub) {
            return (
              <MenuItem
                key={menu.path}
                link={menu.path}
                iconName={menu.icon}
                label={menu.label}
                disabled={!menu.permission}
              />
            );
          } else {
            return (
              <Fragment key={menu.path}>
                <MenuItem
                  iconName={menu.icon}
                  label={menu.label}
                  onClick={handleCollapseClick}
                  disabled={!menu.permission}
                />
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List dense component="div" disablePadding>
                    {Object.values(menu.sub).map((sub) => {
                      if (sub.icon) {
                        return (
                          <MenuItem
                            key={sub.path}
                            link={sub.path}
                            iconName={sub.icon}
                            label={sub.label}
                            openDrawer={openMainDrawer}
                            disabled={!sub.permission}
                          />
                        );
                      }
                    })}
                  </List>
                </Collapse>
              </Fragment>
            );
          }
        }
      })}
    </>
  );
}
