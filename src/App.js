import { Grid } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import ArtworkCard from "./components/ArtworkCard";
import ArtworkDetail from "./components/ArtworkDetail";

const NUMBER_OF_COLUMNS = 4;
const ITEMS_PER_COLUMN = 5;

function App() {
  const [data, setData] = useState(undefined);
  const [page, setPage] = useState(0);
  const [detailedArtwork, setDetailedArtwork] = useState(undefined);

  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= data.length) {
      setLoading(false);
    }
  };

  const handleViewDetail = (artwork) => {
    setDetailedArtwork(artwork);
    handleClickOpen();
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch(
      `https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=20&skip=${
        page * NUMBER_OF_COLUMNS * ITEMS_PER_COLUMN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        console.table(data.data);
        setData(data.data);
        setLoading(false);
      });
  }, [page]);

  if (!data) {
    return <p>Cargando...</p>;
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
          {loading
            ? Array.from(Array(ITEMS_PER_COLUMN).keys()).map(
                (dummy_artwork_index) => (
                  <ArtworkCard
                    key={`artwork_${dummy_artwork_index}`}
                    notifyImageLoaded={imageLoaded}
                    isLoading={loading}
                  />
                )
              )
            : data /*.data*/
                .slice(
                  columnNumber * ITEMS_PER_COLUMN,
                  ITEMS_PER_COLUMN * (columnNumber + 1)
                )
                .map((artwork) => (
                  <ArtworkCard
                    key={`artwork_${artwork.id}`}
                    artwork={artwork}
                    notifyImageLoaded={imageLoaded}
                    isLoading={loading}
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
        {buildArtworksCards()}
        <button onClick={() => setPage((prevPage) => prevPage + 1)}>
          Next
        </button>
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
