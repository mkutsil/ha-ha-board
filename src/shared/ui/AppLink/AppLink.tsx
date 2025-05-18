import { NavLink, type LinkProps } from 'react-router-dom';
import { Link as MuiLink, useMediaQuery, useTheme } from '@mui/material';

const AppLink = (props: LinkProps) => {
    const { children, to, className = '' } = props;
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <MuiLink
            component={NavLink}
            underline="none"
            variant={matches? 'h6' : undefined}
            to={to}
            sx={{
                '&.active': {
                    color: '#EDBB27',
                },
            }}
            className={className}
        >
            {children}
        </MuiLink>
    );};

export default AppLink;