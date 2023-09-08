import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Gallery from "./ImagesFetched/Gallery";
import { Container } from "react-bootstrap";
import FilterIcon from "../Icons/FilterIcon";
import Camera from "../Icons/Camera";

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

  // const ShowFotos = (props: any) => {
  //   function filterProduct(arg0: string): void {
  //     throw new Error("Function not implemented.");
  //   }

  return (
    <div className="filter-container">
      <div className="gallery-images container">
        <header className="navbar-container-vertical">
          <nav className="menu sub-menu">
            <button onClick={() => setFilter(data)}>All</button>
            <button onClick={() => filterFoto("animals")}>Animals</button>
            <button onClick={() => filterFoto("flowers")}>Flowers</button>
            <button onClick={() => filterFoto("food")}>Food</button>
            <button onClick={() => filterFoto("landscape")}>Landscape</button>
            <button onClick={() => filterFoto("moon")}>Moon</button>
            <button onClick={() => filterFoto("portrait")}>Portrait</button>
            <button onClick={() => filterFoto("product")}>Product</button>
          </nav>
          <ReturnToTop />
        </header>

        {filterFoto.length > 0 && (
          <ImageList
            sx={{ width: "80vw", height: "auto" }}
            variant="quilted"
            cols={4}
            rowHeight={"auto"}
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
                </ImageListItem>
              )
            )}
          </ImageList>
        )}
      </div>
    </div>
  );
}

export default Filter;
