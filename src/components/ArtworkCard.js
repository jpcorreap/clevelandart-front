import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

export default function ArtworkCard({ artwork, viewDetailHandler }) {
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const [image, setImage] = useState({});
  const handleImageLoaded = () => {
    setImageIsLoading(false);
  };

  useEffect(() => {
    if (artwork) {
      const image = new Image();
      image.onload = handleImageLoaded;
      image.src = artwork.images.web.url;
      setImage(image);
    }
  }, []);

  if (imageIsLoading) {
    return (
      <CustomizedCard elevation={0}>
        <CardContent style={{ padding: 0 }}>
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={150}
            animation="wave"
          />
          <div style={{ padding: "10px" }}>
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={80}
              animation="wave"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </CardContent>
      </CustomizedCard>
    );
  }

  return (
    <CustomizedCard elevation={0}>
      <CardMedia
        component="img"
        width="100%"
        height="auto"
        src={image.src}
        alt="a piece of art at the museum"
      />
      <CardContent style={{ padding: 0 }}>
        <CustomizedAccordion elevation={0} disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ margin: 0, padding: 0 }}
            >
              {artwork.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "#FEF1F0",
              borderRadius: "20px",
              marginBottom: "10px",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {artwork.wall_description}
            </Typography>
          </AccordionDetails>
        </CustomizedAccordion>
      </CardContent>
      <CardActions style={{ padding: "0px 10px 10px 10px" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            size="large"
            variant="contained"
            style={{ borderRadius: "20px", backgroundColor: "#ff452b" }}
            onClick={() => viewDetailHandler(artwork)}
            disableElevation
          >
            View detailed info
          </Button>
          <IconButton aria-label="favorite" size="large">
            <FavoriteIcon style={{ color: "#ff452b" }} />
          </IconButton>
        </Grid>
      </CardActions>
    </CustomizedCard>
  );
}
