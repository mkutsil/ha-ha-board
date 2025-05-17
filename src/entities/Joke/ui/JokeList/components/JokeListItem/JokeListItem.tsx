import type { Joke } from '../../../../model/types/joke';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Card,  Collapse, Box, Typography,  ButtonGroup, Button } from '@mui/material';
import JokeListItemSkeleton from '../JokeListItemSkeleton/JokeListItemSkeleton';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

interface JokeListItemProps extends Joke {
    onSaveJoke: (id: number) => void;
    onRefresh: (id: number) => void;
}

const JokeListItem = (props: JokeListItemProps) => {

    const { 
        id,
        type,
        setup,
        punchline,
        isSaved,
        isLoading,
        onSaveJoke,
        onRefresh
		 } = props;

    const [ isHover, hoverBind ] = useHover();

    if(isLoading) return <JokeListItemSkeleton/>;
		
    return (
        <Card 
            key={id}
            sx={{ 
                padding: '20px',
                width: '250px', 
                height: '310px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                transition: 'box-shadow 0.3s ease',
                // background: isSaved ? '#1a76d226': '',
                '&:hover':{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }
               
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

                <Box 
                    sx={{
                        display: 'flex',
                        gap: '5px'
                    }}
                >
                    <Typography variant="body2">
                        {id}
                    </Typography>

                    <Box
                        sx={{
                            cursor: 'pointer'
                        }}
                        onClick={() => {onSaveJoke(id);}}
                    >
                        {isSaved ? (
                            <TurnedInIcon color='info' />
                        ) : (
                            <TurnedInNotIcon color='info' />
                        )}
                    </Box>
                   
                </Box>
               
            </Box>
										
            <Box 
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
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
                </Box>
                <Collapse in={isHover}>
                    <Box
                        sx={{
                            width: 'max-content',
                            margin: 'auto',
                        }}
                    >
                        <ButtonGroup  
                            variant="contained" 
                            aria-label="Basic button group"
                        >
                            <Button
                                size='small'
                                onClick={() => {onSaveJoke(id);}}
                            >
                                {isSaved? 'Delete' : 'Add'}
                            </Button>
                            <Button
                                size='small'
                                onClick={() => {onRefresh(id);}}
                            >
                                Refresh
                            </Button>
                        </ButtonGroup>
                    </Box>						
                            
                </Collapse>
            </Box>
        </Card>
				
    );
};

export default JokeListItem;
