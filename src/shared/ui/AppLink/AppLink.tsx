import { NavLink, type LinkProps } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

const AppLink = (props: LinkProps) => {
    const { children, to } = props;
    return (
        <MuiLink
            component={NavLink}
            underline="none"
            variant="h5"
            to={to}
            sx={{
                '&.active': {
                    fontWeight: 'bold',
                }
            }}
        >
            {children}
        </MuiLink>
    );};

export default AppLink;