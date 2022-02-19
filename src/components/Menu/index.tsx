import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, Menu as CMenu, MenuProps, Typography } from '@mui/material';
import { styled } from '@mui/styles';

type Menus = {
  name: string;
  path: string;
};

type Props = {
  menus: Menus[];
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
};

const StyledMenu = styled((props: MenuProps) => (
  <CMenu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(() => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: '.1em',
    minWidth: 180,
    boxShadow: `rgb(255, 255, 255) 0px 0px 0px 0px,
       rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
        rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
         rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiList-root': {
      '& .Delete': {
        color: 'red',
      },
    },
    '& .MuiListItem-root': {
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: 100,
      cursor: 'pointer',
      '& a': {
        textDecoration: 'none',
        color: 'inherit !important',
      },
    },
  },
}));

const Menu: FunctionComponent<Props> = ({ menus, ...rest }) => {
  return (
    <StyledMenu {...rest}>
      {menus.map((menu: { name: string; path: string }) => (
        <ListItem key={menu.name} className={menu.name}>
          <Link to={menu.path}>
            <Typography variant="subtitle2">{menu.name}</Typography>
          </Link>
        </ListItem>
      ))}
    </StyledMenu>
  );
};

export { Menu };
