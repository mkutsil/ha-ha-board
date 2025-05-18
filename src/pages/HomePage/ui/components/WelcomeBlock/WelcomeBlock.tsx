import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';

const WelcomeBlock = () => {
	 	const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{ mb: '50px' }}>
            <Box
					 			sx={{ 
                    display: 'flex',
						 				flexWrap: 'wrap',
						  			justifyContent: 'center',
                    gap: matches? '10px' : 0
                }}
					 >
                <Typography textAlign="center" variant={matches? 'h4' : 'h5'}>
                    Welcome to{' '}
                </Typography>
                <Typography textAlign="center" variant="h4" gutterBottom>
                    <Box component="span" sx={{ color: '#EDBB27', fontWeight: 'bold' }}>HaHa</Box>
                    <Box component="span" sx={{ color: '#2D8DD0', fontWeight: 'bold' }}>Board</Box>
                </Typography>
            </Box>

            <Typography textAlign="center" variant={matches? 'h5' : 'h6'}>
                Laugh out loud with random jokes — and don’t forget to save your favorites!
            </Typography>
        </Box>
    );
};

export default WelcomeBlock;