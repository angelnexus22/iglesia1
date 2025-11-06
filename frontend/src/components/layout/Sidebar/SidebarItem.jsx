import { useState } from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarItem = ({ item, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;
  const isActive = location.pathname === item.path;

  const handleClick = () => {
    if (hasChildren) {
      setOpen(!open);
    } else {
      navigate(item.path);
      if (onClose) onClose();
    }
  };

  const handleChildClick = (path) => {
    navigate(path);
    if (onClose) onClose();
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{
          py: 1.25,
          px: 2.5,
          backgroundColor: isActive ? 'primary.light' : 'transparent',
          '&:hover': {
            backgroundColor: isActive ? 'primary.light' : 'action.hover',
          },
          borderLeft: isActive ? '4px solid' : '4px solid transparent',
          borderLeftColor: isActive ? 'primary.main' : 'transparent',
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 40,
            color: isActive ? 'primary.main' : 'text.secondary',
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          primaryTypographyProps={{
            fontSize: '0.875rem',
            fontWeight: isActive ? 600 : 400,
            color: isActive ? 'primary.main' : 'text.primary',
          }}
        />
        {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child, index) => {
              const isChildActive = location.pathname === child.path;
              return (
                <ListItemButton
                  key={index}
                  onClick={() => handleChildClick(child.path)}
                  sx={{
                    pl: 6,
                    py: 1,
                    backgroundColor: isChildActive ? 'action.selected' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                    borderLeft: isChildActive ? '4px solid' : '4px solid transparent',
                    borderLeftColor: isChildActive ? 'primary.main' : 'transparent',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: isChildActive ? 'primary.main' : 'text.secondary',
                    }}
                  >
                    {child.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={child.text}
                    primaryTypographyProps={{
                      fontSize: '0.8125rem',
                      fontWeight: isChildActive ? 600 : 400,
                      color: isChildActive ? 'primary.main' : 'text.primary',
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    path: PropTypes.string,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        path: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  onClose: PropTypes.func,
};

export default SidebarItem;
