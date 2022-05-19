import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const classes = {
  backgroundColor: "#FEF1F0",
  borderRadius: "20px",
  ".MuiPaper-root.MuiAccordion-root::before": {
    backgroundColor: "#fff",
  },
};

export default function ArtworkCard({ artwork }) {
  return (
    <Card style={{ margin: 20 }}>
      <CardMedia
        component="img"
        width="100%"
        height="auto"
        src={artwork.images.web.url}
        alt="a piece of art at the museum"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {artwork.title}
        </Typography>
        <Accordion elevation={0} disableGutters={true} style={classes}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="body" color="text.secondary">
              Description
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              {artwork.wall_description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
