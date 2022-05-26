import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar"
import { ItemCount } from "./components/ItemCount/ItemCount";
import grafica from "./components/itemListContainer/rtx3050.webp";
import grafica2 from "./components/itemListContainer/rx6600.jpg";


function App() {
  const producto = {
    nombre: "RTX 3050",
    descripcion: "Placa de video",
    precio: "$75000",
    imagen: grafica,
    cantidad: 5,
    stock: true,
    inicial: 1
  };

  const producto2 = {
    nombre: "RX 6600",
    descripcion: "Placa de video",
    precio: "$69000",
    imagen: grafica2,
    cantidad: 0,
    stock: false,
    inicial: 0
  };

  return (
    <div className="App">
      <Navbar />
      <section className="cards-contenedor">
        
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio} contador={<ItemCount nombre={producto.nombre} cantidad={producto.cantidad} stock={producto.stock} inicial={producto.inicial}/>}/>
        <ItemListContainer nombre={producto2.nombre} imagen={producto2.imagen} descripcion={producto2.descripcion} precio={producto2.precio} contador={<ItemCount nombre={producto2.nombre} cantidad={producto2.cantidad} stock={producto2.stock} inicial={producto2.inicial}/>}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio} contador={<ItemCount nombre={producto.nombre} cantidad={producto.cantidad} stock={producto.stock} inicial={producto.inicial}/>}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio} contador={<ItemCount nombre={producto.nombre} cantidad={producto.cantidad} stock={producto.stock} inicial={producto.inicial}/>}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio} contador={<ItemCount nombre={producto.nombre} cantidad={producto.cantidad} stock={producto.stock} inicial={producto.inicial}/>}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio} contador={<ItemCount nombre={producto.nombre} cantidad={producto.cantidad} stock={producto.stock} inicial={producto.inicial}/>}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio} contador={<ItemCount nombre={producto.nombre} cantidad={producto.cantidad} stock={producto.stock} inicial={producto.inicial}/>}/>
        <ItemListContainer nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio} contador={<ItemCount nombre={producto.nombre} cantidad={producto.cantidad} stock={producto.stock} inicial={producto.inicial}/>}/>
        
        
        
      </section>
    </div>
  );
}

export default App;
