import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Card, Container, Collapse, Box, Typography, Grid, ButtonGroup, Button } from '@mui/material';

interface JokeType {
    id: string;
    type: string;
    setup: string;
    punchline: string;
}

const mockJoke: JokeType = {
    id: '1',
    type: 'General',
    setup: 'Sint quidem et rerum odit placeat.',
    punchline: 'Similique eum incidunt ab tempore qui labore. Suscipit numquam dolor aspernatur. Aperiam in exercitationem. Eos quam tempore. Adipisci dolores quia.'
};

const mockJokeArray = new Array(10)
    .fill(0)
    .map((item, index) => ({
        ...mockJoke,
        id: String(index + item)
    }));

const HomePage = () => {
    const [ isHover, hoverBind ] = useHover();
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Welcome to HaHaBoard
            </Typography>

            <Grid container spacing={2}>
                {mockJokeArray.map((item) => (
                    <Card 
                        key={item.id}
                        sx={{ 
                            padding: '20px',
                            width: '250px', 
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            cursor: 'pointer',

                        // height: '150px'
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
                                    {item.type}
                                </Typography>
                            </Box>

                            <Typography variant="body2">
                                {item.id}
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
                                    {item.setup}
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
                                    {item.punchline}
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
                ))}
            </Grid>
        
        </Container>
    );};

export default HomePage;