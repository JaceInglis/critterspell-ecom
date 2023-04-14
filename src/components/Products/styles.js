import { styled } from "@mui/material/styles"

export const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const styles = {
    title: {
        marginTop: '5%'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    products: {
        marginTop: '3%'
    }
}