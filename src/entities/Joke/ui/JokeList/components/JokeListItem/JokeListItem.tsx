import type { Joke } from '../../../../model/types/joke';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Card, Box, Typography } from '@mui/material';
import JokeListItemSkeleton from '../JokeListItemSkeleton/JokeListItemSkeleton';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import './JokeListItem.css';
import JokeListItemFooter from './components/JokeListItemFooter/JokeListItemFooter';
import JokeListItemInfoBlock from './components/JokeListItemInfoBlock/JokeListItemInfoBlock';

interface JokeListItemProps extends Joke {
    onToggleSave: () => void;
    onRefresh: () => void;
    matches: boolean;
}

const JokeListItem = (props: JokeListItemProps) => {

    const { 
        id,
        type,
        setup,
        punchline,
        isSaved,
        isLoading,
        matches,
        onToggleSave,
        onRefresh
    } = props;

    const [ isHover, hoverBind ] = useHover();

    if(isLoading) return <JokeListItemSkeleton/>;
		
    return (
        <Card 
            key={id}
            className='card-container'
            {...hoverBind}
        >
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >

                <JokeListItemInfoBlock
                    label="Type"
                    text={type}
                />

                <Box className="card-header-container">
                    <Typography variant="body2">
                        {id}
                    </Typography>

                    <Box
                        sx={{
                            cursor: 'pointer'
                        }}
                        onClick={onToggleSave}
                    >
                        {isSaved ? (
                            <TurnedInIcon color='info' />
                        ) : (
                            <TurnedInNotIcon color='info' />
                        )}
                    </Box>
                </Box>
            </Box>
										
            <Box className="card-content-container">
                <Box className="card-content-info-container">
                        
                    <JokeListItemInfoBlock
                        label="Setup"
                        text={setup}
                    />

                    <JokeListItemInfoBlock
                        label="Punchline"
                        text={punchline}
                    />

                </Box>
                <JokeListItemFooter
                    isSaved={isSaved}
                    isHover={matches? isHover : !matches}
                    onToggleSave={onToggleSave}
                    onRefresh={onRefresh}
                />
            </Box>
        </Card>
				
    );
};

export default JokeListItem;
