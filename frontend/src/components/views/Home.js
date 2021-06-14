
import { Typography, CssBaseline, Container } from '@material-ui/core';
import TabsPanel from '../TabsPanel';
import useStyles from '../../style'
import AppCss from '../../App.css'


const Home = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Container className={classes.container}>
                <Typography className={classes.header}>Spacious</Typography>
                <TabsPanel />
            </Container>
        </>
    )
}

export default Home