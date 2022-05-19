import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import ArtworkCard from "./components/ArtworkCard";
import ArtworkDetail from "./components/ArtworkDetail";
import Pagination from "./components/Pagination";

const NUMBER_OF_COLUMNS = 4;
const ITEMS_PER_COLUMN = 5;

function App() {
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [page, setPage] = useState(0);
  const [data, setData] = useState(undefined);
  const [detailedArtwork, setDetailedArtwork] = useState(undefined);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsFetchingData(true);
    fetch(
      `https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=20&skip=${
        page * NUMBER_OF_COLUMNS * ITEMS_PER_COLUMN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setIsFetchingData(false);
      });
  }, [page]);

  const handleViewDetail = (artwork) => {
    setDetailedArtwork(artwork);
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  const buildArtworksCards = () => {
    const columns = [];
    for (
      let columnNumber = 0;
      columnNumber < NUMBER_OF_COLUMNS;
      columnNumber++
    ) {
      const column = (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          justifyContent="space-between"
          alignItems="center"
        >
          {isFetchingData
            ? Array.from(Array(ITEMS_PER_COLUMN).keys()).map(
                (dummy_artwork_index) => (
                  <ArtworkCard
                    key={`artwork_${dummy_artwork_index}`}
                    isLoading={true}
                  />
                )
              )
            : data
                .slice(
                  columnNumber * ITEMS_PER_COLUMN,
                  ITEMS_PER_COLUMN * (columnNumber + 1)
                )
                .map((artwork) => (
                  <ArtworkCard
                    key={`artwork_${artwork.id}`}
                    artwork={artwork}
                    viewDetailHandler={handleViewDetail}
                  />
                ))}
        </Grid>
      );

      columns.push(column);
    }

    return columns;
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        style={{ backgroundColor: "#e9e9e9" }}
      >
        <Grid container direction="column">
          <Grid container style={{ backgroundColor: "#ff452b" }}>
            <Pagination
              count={data?.length ? data.length : 0}
              page={page}
              handleChangePage={handleChangePage}
              rowsPerPage={NUMBER_OF_COLUMNS * ITEMS_PER_COLUMN}
            />
          </Grid>
          <Grid container>{buildArtworksCards()}</Grid>
        </Grid>
      </Grid>
      <ArtworkDetail
        artwork={detailedArtwork}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default App;
