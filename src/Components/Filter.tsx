import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


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
      <header className="navbar-container-vertical">
        {/* <Camera /> */}
        <nav className="">
          <button onClick={() => setFilter(data)}>All</button>
          <button onClick={() => filterFoto("animals")}>Animals</button>
          <button onClick={() => filterFoto("flowers")}>Flowers</button>
          <button onClick={() => filterFoto("food")}>Food</button>
          <button onClick={() => filterFoto("landscape")}>Landscape</button>
          <button onClick={() => filterFoto("moon")}>Moon</button>
          <button onClick={() => filterFoto("portrait")}>Portrait</button>
          <button onClick={() => filterFoto("product")}>Product</button>
        </nav>
      </header>

      <div className="gallery-images container">
        <Row xs={2} md={4} lg={6}>
          {filterFoto.length > 0 && (
            <Col xs={6} md={4} lg={true}>
              {filter.map(
                (foto: { name: string; image: string | undefined }, index) => (
                  <div className="gallery-images" key={index}>
                    <Image src={foto.image} />
                    <h4>{foto.name}</h4>
                  </div>
                )
              )}
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
}

export default Filter;
