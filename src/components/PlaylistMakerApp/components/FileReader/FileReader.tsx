import Paper from '@mui/material/Paper';
import { Input } from '@mui/material';

export const FileReader = ({setFileContents}: {setFileContents: (str: string) => void}) => {
    
    return (<Paper>
        <Input type='file' />
    </Paper>)
};