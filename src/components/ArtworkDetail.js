import * as React from "react";
import PropTypes from "prop-types";

import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import moment from "moment";

const basicInfoToDisplay = [
  {
    title: "Creation date",
    id: "creation_date",
  },
  {
    title: "Technique",
    id: "technique",
  },
  {
    title: "Department",
    id: "department",
  },
  {
    title: "Current location",
    id: "current_location",
  },
  {
    title: "Culture",
    id: "culture",
  },
  {
    title: "Measurements",
    id: "measurements",
  },
  {
    title: "Description",
    id: "wall_description",
  },
  {
    title: "Fun fact",
    id: "fun_fact",
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ArtworkInformation({ artwork }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{ height: "calc( 100vh - 70px )" }}
    >
      <Grid
        item
        xs={12}
        md={7}
        style={{ overflow: "auto" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid container justifyContent="center" alignItems="center">
          <img src={artwork.images.web.url} alt="piece of artwork" />
        </Grid>
      </Grid>
      <Grid item xs={12} md={5}>
        <Grid
          container
          direction="column"
          style={{
            height: "calc( 100vh - 70px )",
            overflow: "auto",
            backgroundColor: "white",
          }}
        >
          <div>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h4"
              style={{ margin: "15px" }}
            >
              {artwork.title}
            </Typography>
            <div>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow
                      key={"creators"}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="left">
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
                          {artwork.creators.length > 1 ? "Creators" : "Creator"}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        {artwork.creators
                          .map((creator) => creator.description)
                          .join(" | ")}
                      </TableCell>
                    </TableRow>
                    {basicInfoToDisplay.map((info) => (
                      <TableRow
                        key={info.title}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" align="left">
                          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
                            {info.title}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">
                          {artwork[info["id"]]}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow
                      key={"last_updated"}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="left">
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
                          Last update
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        {moment(
                          artwork.updated_at,
                          "YYYY-MM-DD hh:mm:ss"
                        ).fromNow()}
                      </TableCell>
                    </TableRow>
                    <TableRow
                      key={"original_source"}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="left">
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
                          Original source
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <a
                          href={artwork.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {artwork.url}
                        </a>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function ArtworkDetail({ open, handleClose, artwork }) {
  if (!artwork) {
    return <></>;
  }

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar
        sx={{ position: "sticky" }}
        style={{ backgroundColor: "#ff452b" }}
      >
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
        </Toolbar>
      </AppBar>
      <ArtworkInformation artwork={artwork} />
    </Dialog>
  );
}

ArtworkDetail.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  artwork: PropTypes.object.isRequired,
};
