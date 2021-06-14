
import { CssBaseline, Container } from '@material-ui/core';
import CharacterModal from '../CharacterModal';
import useStyles from '../../style'


const CreateCharacter = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Container className={classes.container}>
                <CharacterModal />
            </Container>
        </>
    )
}

export default CreateCharacter