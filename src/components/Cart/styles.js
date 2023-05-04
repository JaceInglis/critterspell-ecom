import { styled } from "@mui/material/styles";

export const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)


export const Styles = (theme) => ({
    title: {
        marginTop: '5%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '35px'
        }
    },
    cardDetails: {
        marginTop: '10%',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    items: {
        marginTop: '3%'
    },
    emptyButton: {
        minWidth: 150,
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '5px',
        }
    },
    checkoutButton: {
        minWidth: 150

    },
    subtotal: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
        }
    },
    buttons: {
        [theme.breakpoints.down('sm')]: {
            width: 150,
        }
    }
})