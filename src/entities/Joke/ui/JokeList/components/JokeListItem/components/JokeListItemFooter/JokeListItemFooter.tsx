import type { Joke } from '../../../../../../model/types/joke';
import { Collapse, Box, ButtonGroup, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

interface JokeListItemFooterProps extends Pick<Joke, 'isSaved'> {
	isHover: boolean;	
	onToggleSave: () => void;
	onRefresh: () => void;
}

const JokeListItemFooter = (props: JokeListItemFooterProps) => {

    const { 
        isSaved,
        isHover,
        onToggleSave,
        onRefresh
		 } = props;
		
    return (
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
                        onClick={onToggleSave}
                    >
                        {isSaved? <BookmarkRemoveIcon/> : <BookmarkAddIcon/>}
                    </Button>
                    <Button
                        size='small'
                        onClick={onRefresh}
                    >
                        <RefreshIcon/>
                    </Button>
                </ButtonGroup>
            </Box>						
        </Collapse>
    );
};

export default JokeListItemFooter;
