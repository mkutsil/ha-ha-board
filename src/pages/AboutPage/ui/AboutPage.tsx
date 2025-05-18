import {
    Avatar,
    Box,
    Button,
    Container,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MyAvatar from '@/shared/assets/my-avatar.jpeg';

const AboutPage = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Container maxWidth="sm" sx={{ mt: matches? 6 : 1 }}>
            <Stack spacing={3} alignItems="center">
                <Avatar
                    sx={{ 
                        width: matches? 180 : 140, 
                        height: matches? 180 : 140, 
                    }}
                    src={MyAvatar}
                    alt="My Avatar"
                />

                <Typography variant="h4" textAlign="center">
                    Hi! I’m Mykola 👋
                </Typography>

                <Typography variant="body1" textAlign="center">
                    Iʼm a frontend developer with experience in React, TypeScript, Redux Toolkit, and modern web technologies. I build scalable and user-friendly interfaces and enjoy working on architecture.
                </Typography>

                <Typography variant="body1" textAlign="center">
                    This project was created as a test assignment, but I approached it like a real mini product. I wanted to practice API handling, localStorage, MUI, routing, and Redux skills.
                </Typography>

                <Box display="flex" gap={2} mt={2}>
                    <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/mkutsil"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<LinkedInIcon />}
                        href="https://surl.li/uhkrum"
                        target="_blank"
                    >
                        LinkedIn
                    </Button>
                </Box>
            </Stack>
        </Container>
    );
};

export default AboutPage;