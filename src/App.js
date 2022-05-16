import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(undefined);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(
      `https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=20&skip=${
        page * 20
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        console.table(data.data);
        setData(data);
      });
  }, [page]);

  if (!data) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid
          container
          xs={12}
          sm={6}
          md={3}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          {data.data.slice(0, 5).map((piece) => (
            <img
              width="100%"
              height="auto"
              src={piece.images.web.url}
              alt="a piece of art at the museum"
            />
          ))}
        </Grid>
        <Grid
          container
          xs={12}
          sm={6}
          md={3}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          {data.data.slice(5, 10).map((piece) => (
            <img
              width="100%"
              height="auto"
              src={piece.images.web.url}
              alt="a piece of art at the museum"
            />
          ))}
        </Grid>
        <Grid
          container
          xs={12}
          sm={6}
          md={3}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          {data.data.slice(10, 15).map((piece) => (
            <img
              width="100%"
              height="auto"
              src={piece.images.web.url}
              alt="a piece of art at the museum"
            />
          ))}
        </Grid>
        <Grid
          container
          xs={12}
          sm={6}
          md={3}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          {data.data.slice(15, 20).map((piece) => (
            <img
              width="100%"
              height="auto"
              src={piece.images.web.url}
              alt="a piece of art at the museum"
            />
          ))}
        </Grid>
      </Grid>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
    </>
  );
}

export default App;
