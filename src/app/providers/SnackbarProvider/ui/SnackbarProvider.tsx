import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from 'react';
import { Alert, Box, Collapse } from '@mui/material';

type SnackbarMessage = {
  key: number;
  message: string;
  severity: SnackbarAlertVariant;
};

type SnackbarContextType = {
  showSnackbar: (message: string, severity?: SnackbarAlertVariant) => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context;
};

export enum SnackbarAlertVariant {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
    const [ alerts, setAlerts ] = useState<SnackbarMessage[]>([]);

    const showSnackbar = (
        message: string,
        severity: SnackbarAlertVariant = SnackbarAlertVariant.INFO
    ) => {
        const newAlert: SnackbarMessage = {
            key: Date.now() + Math.random(),
            message,
            severity,
        };
        setAlerts((prev) => [ ...prev, newAlert ]);

        setTimeout(() => {
            setAlerts((prev) => prev.filter((alert) => alert.key !== newAlert.key));
        }, 4000);
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}

            <Box
                sx={{
                    position: 'fixed',
                    top: 16,
                    right: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    zIndex: 1300, 
                }}
            >
                {alerts.map((alert) => (
                    <Collapse key={alert.key} in>
                        <Alert
                            severity={alert.severity}
                            variant="filled"
                            sx={{ minWidth: '250px', boxShadow: 3 }}
                        >
                            {alert.message}
                        </Alert>
                    </Collapse>
                ))}
            </Box>
        </SnackbarContext.Provider>
    );
};
