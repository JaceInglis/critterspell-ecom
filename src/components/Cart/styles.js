import { styled } from "@mui/material/styles"

export const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

export const styles = {
    title: {
        marginTop: '5%'
    },
    cardDetails: {
        marginTop: '10%',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    items: {
        marginTop: '3%'
    }
}