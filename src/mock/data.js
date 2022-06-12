import rtx3050 from "./rtx3050.png";
import rx6600 from "./rx6600.png";
import rtx3060ti from "./3060ti.png";
import rtx3090 from "./rtx3090.png";
import rx6500xt from "./6500xt.png";
import rx6900xt from "./6900xt.png"; 

 export const Productos = [{
      id: 1,    
      nombre: "RTX 3050",
      descripcion: "Placa de video",
      precio: "75000",
      imagen: rtx3050,
      cantidad: 5,
      stock: true,
      inicial: 1,
      oferta:true,
      caracteristica: "The GeForce RTX™ 3050 se construyó con el potente rendimiento gráfico de la arquitectura NVIDIA Ampere. Ofrece Núcleos RT de 2.ª generación y Núcleos Tensor de 3.ª generación, nuevos multiprocesadores de transmisión y memoria G6 de alta velocidad para que puedas disfrutar de los juegos más recientes. Sube al nivel de GeForce RTX."
    },
    {
      id: 2,
      nombre: "RX 6600",
      descripcion: "Placa de video",
      precio: "69000",
      imagen: rx6600,
      cantidad: 0,
      stock: false,
      inicial: 0,
      oferta:false,
      caracteristica: "Juegos épicos en 1080p: La tarjeta gráfica AMD Radeon™ RX 6600, diseñada con la revolucionaria arquitectura AMD RDNA™ 2, nació para ofrecerte la mejor experiencia de juego en 1080p."
    },
    {
      id: 3,
      nombre: "RTX 3060 TI",
      descripcion: "Placa de video",
      precio: "140000",
      imagen: rtx3060ti,
      cantidad: 8,
      stock: true,
      inicial: 1,
      oferta:true,
      caracteristica:"La GeForce RTX™ 3060 Ti y la RTX 3060 te permiten disfrutar de los juegos más recientes con la potencia de Ampere, la segunda generación de la arquitectura RTX de NVIDIA. Logra un rendimiento increíble con los Núcleos Ray Tracing y los Núcleos Tensor mejorados, los nuevos multiprocesadores de streaming y la memoria G6 de alta velocidad."
    },
    {
      id: 4,
      nombre: "RTX 3090",
      descripcion: "Placa de video",
      precio: "300000",
      imagen: rtx3090,
      cantidad: 15,
      stock: true,
      inicial: 1,
      oferta:false,
      caracteristica: "Las GeForce RTX™ 3090 Ti y 3090 son implacables GPUs (BFGPU) con rendimiento de clase TITAN. Impulsadas con tecnología Ampere, la arquitectura RTX de segunda generación de NVIDIA, duplican el ray tracing y el rendimiento de la IA con núcleos de trazado de rayos mejorados, núcleos Tensor y nuevos multiprocesadores de transmisión. Además, cuentan con 24 GB de asombrosa memoria G6X para ofrecer la experiencia de juego definitiva a jugadores y creadores."
    },
    {
      id: 5,
      nombre: "RX 6500 xt",
      descripcion: "Placa de video",
      precio: "65000",
      imagen: rx6500xt,
      cantidad: 6,
      stock: true,
      inicial: 1,
      oferta:true,
      caracteristica: "Presentamos la nueva tarjeta gráfica Radeon™ RX 6500 XT, diseñada con la revolucionaria arquitectura RDNA™ 2 y pensadas para ofrecer un excelente rendimiento de juegos y una gran eficiencia."
    },
    {
      id: 6,
      nombre: "RX 6900 XT",
      descripcion: "Placa de video",
      precio: "230000",
      imagen: rx6900xt,
      cantidad: 2,
      stock: true,
      inicial: 1,
      oferta:false,
      caracteristica: "La tarjeta XT gráfica AMD Radeon™ RX 6800 XT, potenciada con la arquitectura AMD RDNA™ 2 y equipada con 80 potentes unidades de procesamiento mejoradas, 128MB de la flamante tecnología AMD Infinity Cache y 16GB de memoria GDDR6 dedicada, está diseñada para alcanzar velocidades de cuadros ultraaltas y jugar en 4K con una calidad deslumbrante."
    }]

