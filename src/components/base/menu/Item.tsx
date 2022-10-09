import { useState } from 'react';
import type { MouseEvent } from 'react';
import { useRouter } from 'next/router';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { MuiIcons, IconType } from '@config/menu';

interface MainMenuProps extends ListItemProps {
  iconName: IconType;
  label: string;
  link?: string;
  openDrawer?: boolean;
  onClick?: (evt: MouseEvent) => void;
  disabled?: boolean;
}

export function MenuItem({
  link = '#',
  iconName,
  openDrawer,
  label,
  onClick,
  disabled = false,
  ...props
}: MainMenuProps): JSX.Element {
  const route = useRouter();
  const [open, setOpen] = useState(true);
  const DynamicIcon = MuiIcons[iconName];

  const handleClick = (evt: MouseEvent) => {
    console.log(evt);
  };

  const handleCollapseClick = (evt: MouseEvent) => {
    evt.stopPropagation();
    setOpen(!open);
    onClick?.(evt);
  };

  return (
    <Link href={!disabled ? link : ''} passHref>
      <ListItem
        button
        selected={route.pathname === link}
        onClick={handleClick}
        disabled={disabled}
        sx={openDrawer ? { paddingLeft: (theme) => theme.spacing(6) } : {}}
      >
        <ListItemIcon sx={{ minWidth: 36 }}>
          <DynamicIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary={label} />
        {onClick && (
          <div onClick={handleCollapseClick}>
            {open ? <MuiIcons.ExpandLess /> : <MuiIcons.ExpandMore />}
          </div>
        )}
      </ListItem>
    </Link>
  );
}
