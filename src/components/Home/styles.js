import { styled } from "@mui/material/styles" 

export const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '0px',
        margin: '0px',
    },
    content: {
        marginBottom: '5%'
    },
}