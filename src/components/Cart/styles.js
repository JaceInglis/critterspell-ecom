import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

export const Offset = styled(Box)(({ theme }) => theme.mixins.toolbar)

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