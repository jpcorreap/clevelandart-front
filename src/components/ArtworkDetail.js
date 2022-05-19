import { Grid } from "@mui/material";
import moment from "moment";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

function ArtworkInformation({ artwork }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={12} md={7} style={{ backgroundColor: "orange" }}>
        <img
          src={artwork.images.web.url}
          width={"100%"}
          height={"auto"}
          alt="piece of artwork"
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <Grid container direction="column">
          <div style={{ padding: 10 }}>
            <h1>{`${artwork.title} (${artwork.creation_date})`}</h1>
            <h3>Technique</h3>
            <p>{artwork.technique}</p>
            <h3>Department</h3>
            <p>{artwork.department}</p>
            <h3>Culture</h3>
            <p>{artwork.culture}</p>
            <h3>Current location</h3>
            <p>{artwork.current_location}</p>
            <h3>Measurements</h3>
            <p>{artwork.measurements}</p>
            <h3>Description</h3>
            <p>{artwork.wall_description}</p>
            <h3>Creators:</h3>
            <ul>{artwork.creators.map((creator) => creator.description)}</ul>
            <h3>Fun fact:</h3>
            <p>{artwork.fun_fact}</p>
            <h3>Original source:</h3>
            <p>{artwork.url}</p>
            <h3>Downloads:</h3>
            <h3>Last update:</h3>
            <p>{moment(artwork.updated_at, "YYYY-MM-DD hh:mm:ss").fromNow()}</p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ArtworkDetail({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  artwork,
}) {
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {artwork.title}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <ArtworkInformation artwork={artwork} />
      </Dialog>
    </div>
  );
}
