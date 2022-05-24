import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar"
import grafica from "./components/itemListContainer/rtx3050.webp";

function App() {
  const producto = {
    nombre: "Rtx 3050",
    descripcion: "Placa de video",
    precio: "$75000",
    imagen: grafica
  };

  return (
    <div className="App">
      <Navbar />
      <section className="cards-contenedor">
        
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio}/>
        
        
        
      </section>
    </div>
  );
}

export default App;
