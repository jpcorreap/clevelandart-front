import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomizedCard = styled((props) => <Card {...props} />)(() => ({
  margin: "20px 10px 20px 10px",
  borderRadius: "0px 0px 20px 20px",
}));

const CustomizedAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(() => ({
  backgroundColor: "transparent",
  padding: "0px 8px 0px 8px",

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export default function ArtworkCard({ artwork }) {
  return (
    <CustomizedCard elevation={0}>
      <CardMedia
        component="img"
        width="100%"
        height="auto"
        src={artwork.images.web.url}
        alt="a piece of art at the museum"
      />
      <CardContent style={{ padding: 0 }}>
        <CustomizedAccordion elevation={0} disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ padding: "0px", margin: "0px" }}
          >
            <Typography gutterBottom variant="h6" component="div">
              {artwork.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "#FEF1F0", borderRadius: "20px" }}
          >
            <Typography variant="body2" color="text.secondary">
              {artwork.wall_description}
            </Typography>
          </AccordionDetails>
        </CustomizedAccordion>
      </CardContent>
      <CardActions>
        <Button size="small">More details</Button>
        <Button size="small">Save in favorites</Button>
      </CardActions>
    </CustomizedCard>
  );
}
