import React from "react";
import { Modal, Backdrop, Fade, TextField, Button, Grid } from "@material-ui/core";
import { gql, useMutation } from '@apollo/client';
import useStyles from "../../style";
import Loader from '../Loader'


const ADD_PLANET = gql`
    mutation createPlanet($name: String!, $description:String!, $code: String!, $pictureUrl: String! ){
        createPlanet(planetInfo:{
            name:$name
            description:$description
            code:$code
            pictureUrl:$pictureUrl
        }){
            name
        }
    }
`

function AddPlanet() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [pictureUrl, setPictureUrl] = React.useState('');
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [code, setCode] = React.useState('');

    const [addPlanet, { loading, error }] = useMutation(ADD_PLANET);

    const fnMap = {
        "pictureUrl": setPictureUrl,
        "name": setName,
        "description": setDescription,
        "code": setCode,
    }

    const handleClose = () => {
        setOpen(false)
        window.location = '/'
    }

    const handleChange = (event) => {
        fnMap[event.target.name](event.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault()
        addPlanet({
            variables: {
                code,
                pictureUrl,
                description,
                name
            }
        })
    }


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
                        <h2 id="transition-modal-title" className={classes.planetModalHeading}>Planet</h2>
                        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField id="standard-basic" label="Image" name="pictureUrl" value={pictureUrl} onChange={handleChange} helperText="Paste the URL of a JPG or PNG of max 20 kb" fullWidth className={classes.input} />

                            <TextField id="standard-basic" label="Name" name="name" value={name} onChange={handleChange} fullWidth className={classes.input} />
                            <TextField id="standard-basic" label="Code" name="code" value={code} onChange={handleChange} helperText="Must follow AA-AAA-11 format" fullWidth className={classes.input} />

                            <TextField
                                id="outlined-multiline-flexible"
                                label="Description"
                                multiline
                                rows={4}
                                fullWidth
                                name="description"
                                value={description} onChange={handleChange}
                                className={classes.input}
                            />
                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                            >
                                <Grid item xs={6} md={2}>
                                    <Button type="cancel" variant="contained" mr={2} onClick={handleClose} className={classes.planetModalCancelBtn}>Cancel</Button>
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <Button type="submit" variant="contained" ml={2} className={classes.planetModalSubmitlBtn}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}

export default AddPlanet