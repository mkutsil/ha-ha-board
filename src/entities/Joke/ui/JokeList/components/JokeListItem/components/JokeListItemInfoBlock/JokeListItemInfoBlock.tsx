import {  Box, Typography } from '@mui/material';

interface JokeListItemInfoBlockProps {
	label: string;	
	text: string;
}

const JokeListItemInfoBlock = (props: JokeListItemInfoBlockProps) => {

    const { 
        label,
        text
    } = props;
		
    return (
        <Box>
            <Typography 
                component='span'
                variant="body2"
                sx={{ fontWeight: 700, pr: '5px' }}
            >
                {label}: 
            </Typography>

            <Typography 
                component='span'
                variant="body2"
            >
                {text}
            </Typography>
        </Box>
    );
};

export default JokeListItemInfoBlock;
