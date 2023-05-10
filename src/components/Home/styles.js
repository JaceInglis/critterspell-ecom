import { styled } from "@mui/material/styles" 

export const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Styles = (theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    content: {
        margin: '10% 20% 0',
        textAlign: 'center'
    },
    title: {
        marginTop: '5%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '65px'
        }
    }
})