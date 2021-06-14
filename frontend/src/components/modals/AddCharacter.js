import React from "react";
import { Modal, Backdrop, Fade, TextField, Button, Grid } from "@material-ui/core";
import { gql, useMutation } from '@apollo/client';
import useStyles from "../../style";
import Loader from '../Loader'


const ADD_CHARACTER = gql`
  mutation createCharacter($name: String!, $description:String!, $planet: String!, $pictureUrl: String!){
    createCharacter(characterInfo: {
      name:$name,
      description:$description,
      bornAt:"1991-10-09T00:00:00.00Z",
      planet:$planet,
      pictureUrl:$pictureUrl,
    }) {
      id
      name
      description
      bornAt
      pictureUrl
      }
  }
`

function Character(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [pictureUrl, setPictureUrl] = React.useState('');
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleClose = () => {

        setOpen(false);
        window.location = '/'
    };

    const fnMap = {
        "pictureUrl": setPictureUrl,
        "name": setName,
        "description": setDescription
    }

    const handleChange = (event) => {
        fnMap[event.target.name](event.target.value)
    };

    const [addCharacter, { loading, error }] = useMutation(ADD_CHARACTER);
    if (loading) return <Loader />;
    if (error) return <p>An error has occured, please try again</p>;

    return (
        <>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2
                            id="transition-modal-title"
                            className={classes.planetModalHeading}
                        >
                            Character
                        </h2>
                        <form className={classes.root} noValidate autoComplete="off" onSubmit={e => {
                            e.preventDefault();
                            addCharacter({
                                variables: {

                                    pictureUrl,
                                    name,
                                    description,
                                    planet: 'FN-BBA-22',
                                    bornAt: "1991-10-09T00:00:00.00Z"

                                }
                            });



                            // name = '';
                            // description = '';
                            // pictureUrl = '';

                        }}>
                            <TextField
                                id="standard-basic"
                                label="Image"
                                helperText="Paste the URL of a JPG or PNG of max 20 kb"
                                fullWidth
                                value={pictureUrl}
                                name="pictureUrl"
                                onChange={handleChange}
                                className={classes.input}
                            />
                            <TextField
                                id="standard-basic"
                                label="Name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                fullWidth
                                className={classes.input}
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Description"
                                multiline
                                rows={4}
                                fullWidth
                                name="description"
                                value={description}
                                onChange={handleChange}
                                className={classes.input}
                            />


                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                            >
                                <Grid item xs={6} md={2}>
                                    <Button
                                        type="cancel"
                                        variant="contained"
                                        mr={2}
                                        onClick={handleClose}
                                        className={classes.planetModalCancelBtn}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        ml={2}
                                        className={classes.planetModalSubmitlBtn}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default Character;