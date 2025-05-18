import { Card, Box, Skeleton } from '@mui/material';

const CardSkeleton = () => (
    <Card
        sx={{
            padding: '20px',
            width: '250px', 
            height: '310px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}
    >
        <Skeleton variant="rectangular"  height={20} />

        <Box>
            <Skeleton variant="rectangular"  height={20} />

            <Skeleton variant="rectangular"  height={40} />
        </Box>

        <Box>
            <Skeleton variant="rectangular"  height={20} />

            <Skeleton variant="rectangular"  height={20} />
        </Box>

    </Card>
);

export default CardSkeleton;