import { useState, useEffect, Key } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ReturnToTop from "../Icons/ReturnToTop";
import Loading from "./Loading";
import { useMediaQuery } from "@mui/material";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Filter() {
  const [data, setData] = useState<any[]>([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getFotos = async () => {
      setLoading(true);

      const response = await fetch(
        "https://dasilva-fotografie-api.vercel.app/fotos",
        { mode: "cors" }
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);

        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getFotos();
  }, []);

  const [visible, setVisible] = useState(2);

  const filterFoto = (cat: string) => {
    const updatedList = data.filter((x) => x.type === cat);
    setFilter(updatedList);
  };

  const matches = useMediaQuery("(max-width:576px)");

  // const ShowFotos = (props: any) => {
  //   function filterProduct(arg0: string): void {
  //     throw new Error("Function not implemented.");
  //   }

  return (
    <div className="filter-container">
      <div className="gallery-images container">
        <header className="navbar-container-vertical">
          <h1>Filter by Category:</h1>
          <nav className="menu sub-menu">
            <button onClick={() => setFilter(data)}><h3>All</h3></button>
            <button onClick={() => filterFoto("animals")}><h3>Animals</h3></button>
            <button onClick={() => filterFoto("flowers")}><h3>Flowers</h3></button>
            <button onClick={() => filterFoto("food")}><h3>Food</h3></button>
            <button onClick={() => filterFoto("landscape")}><h3>Landscape</h3></button>
            <button onClick={() => filterFoto("moon")}><h3>Moon</h3></button>
            <button onClick={() => filterFoto("portrait")}><h3>Portrait</h3></button>
            <button onClick={() => filterFoto("product")}><h3>Product</h3></button>
            <button onClick={() => filterFoto("event")}><h3>Event</h3></button>
          </nav>
          <ReturnToTop />
        </header>
        {loading ? (
          <Loading />
        ) : (
          filterFoto.length > 0 && (
            <ImageList
              sx={{
                maxWidth: "95vw",
                padding: "0 1rem",
                margin: "0 auto"
              }}
              variant="masonry"
              cols={matches ? 1 : 2}
              gap={8}
              rowHeight={"auto"}
              className="image-list-grid"
            >
              {filter.map(
                (
                  foto: {
                    key: Key | null | undefined;
                    rows: number;
                    cols: number;
                    name: string;
                    image: string;
                  },
                  index
                ) => (
                  <ImageListItem
                    key={index}
                    cols={foto.cols || 1}
                    rows={foto.rows || 1}
                    className="photo"
                  >
                    <img
                      {...srcset(foto.image, 121, foto.rows, foto.cols)}
                      alt={foto.name}
                      loading="lazy"
                    />
                    <h4>{foto.name}</h4>
                  </ImageListItem>
                )
              )}
            </ImageList>
          )
        )}
      </div>
    </div>
  );
}

export default Filter;
