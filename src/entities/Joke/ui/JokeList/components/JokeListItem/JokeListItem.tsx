import type { Joke } from '../../../../model/types/joke';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Card,  Collapse, Box, Typography,  ButtonGroup, Button } from '@mui/material';

const JokeListItem = (props: Joke) => {

    const { 
        id,
        type,
        setup,
        punchline
		 } = props;

    const [ isHover, hoverBind ] = useHover();
		
    return (
        <Card 
            key={id}
            sx={{ 
                padding: '20px',
                width: '250px', 
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                cursor: 'pointer',
            }}
            {...hoverBind}
        >
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >

                <Box>
                    <Typography 
                        component='span'
                        variant="body2"
                        sx={{ fontWeight: 700, pr: '5px' }}
                    >
                        Type:  
                    </Typography>

                    <Typography 
                        component='span'
                        variant="body2"
                    >
                        {type}
                    </Typography>
                </Box>

                <Typography variant="body2">
                    {id}
                </Typography>
            </Box>
										
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.2s',
                    gap: isHover? '5px' : '20px',
                }}
            >
                <Box>
                    <Typography 
                        variant="body2"
                        sx={{ fontWeight: 700 }}
                    >
                        Setup:  
                    </Typography>

                    <Typography 
                        variant="body2"
                    >
                        {setup}
                    </Typography>
                </Box>

                <Box>
                    <Typography 
                        variant="body2"
                        sx={{ fontWeight: 700 }}
                    >
                        Punchline:  
                    </Typography>

                    <Typography 
                        variant="body2"
                    >
                        {punchline}
                    </Typography>
												
                </Box>
                <Collapse in={isHover}>
														
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button
                            size='small'
                        >
                            Delete
                        </Button>
                        <Button
                            size='small'
                        >
                            Add
                        </Button>
                        <Button
                            size='small'
                        >
                            Refresh
                        </Button>
                    </ButtonGroup>
                </Collapse>
            </Box>
        </Card>
				
    );
};

export default JokeListItem;
