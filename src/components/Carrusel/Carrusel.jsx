import React, { useEffect, useState } from "react";
import './Carrusel.css';

const data = [
    {nombre: 'Cafetera',precio: 500, img:'cafetera.jpg'},
    {nombre: 'Control Xbox', precio: 1000, img:'control-videojuego.jpg'},
    {nombre: 'Playera Sport', precio: 700, img:'playera-sport.jpg'},
    {nombre: 'Reloj Dama', precio: 2500, img:'reloj-formal.jpg'},
    {nombre: 'Reloj Smart', precio: 5000, img:'reloj.jpg'},
    {nombre: 'Tenis Hummel', precio: 2000, img:'tenis-hummel.jpg'},
    {nombre: 'Audifonos', precio: 4000, img:'audifonos.jpg'},
    {nombre: 'Versace', precio: 3000, img:'perfume-versace.jpg'},
    {nombre: 'Gafas de Sol', precio: 7000, img:'gafas-rayban.jpg'},
    {nombre: 'Mac Book', precio: 40000, img:'mac-book.jpg'}
]

const Carrusel = () => {
    
    const [indexImagenInicial, setIndexImagenInicial] = useState(0);
    const [arrayProducto, setArrayProducto] = useState([]);

    const longitudArrayProductos = data.length;

    const actual = () => {
        const inicial = indexImagenInicial;
        const final = Math.min(indexImagenInicial + 5, longitudArrayProductos);
        return setArrayProducto(data.slice(inicial, final));
    }

    const siguiente = () => { 
        setIndexImagenInicial(indexImagenInicial + 5 === longitudArrayProductos ? 0 : indexImagenInicial + 1);  
        const final = Math.min(indexImagenInicial + 5, longitudArrayProductos);
        return setArrayProducto(data.slice(indexImagenInicial, final));
    }

    const anterior = () => {
        setIndexImagenInicial(indexImagenInicial === 0 ? longitudArrayProductos - 5 : indexImagenInicial - 1);
        const final = Math.min(indexImagenInicial + 5, longitudArrayProductos);
        return setArrayProducto(data.slice(indexImagenInicial, final));
    }

    console.log(indexImagenInicial, longitudArrayProductos)

    useEffect(() => {
        actual();
    },[])

    //Auto-Play
    /* useEffect(() => {
        const intervalo = setInterval(() => {
            siguiente();
        }, "3000");

        return () => clearInterval(intervalo);
    }); */

    return(
        <div className="container">
            <button>
                <span onClick={anterior} className="material-icons cursor-pointer text-gray-600 mx-2">
                    chevron_left
                </span>
            </button>
            {  arrayProducto.map((producto,idx) => {
                    return  <div >
                                <img
                                    key={idx}
                                    src={require(`../../assets/images/${producto.img}`)} 
                                    alt={producto.nombre}
                                />
                            </div>
                })
            }
            <button>
                <span onClick={siguiente} className="material-icons cursor-pointer text-gray-600 mx-2">
                    chevron_right
                </span>
            </button>
        </div>
    );
};

export default Carrusel;