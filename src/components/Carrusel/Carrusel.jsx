import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Carrusel.css';

const data = [
    {nombre: 'Cafetera',precio: 500, img:'cafetera.jpg'},
    {nombre: 'Control Xbox', precio: 1000, img:'control-videojuego.jpg'},
    {nombre: 'Coffe', precio: 700, img:'coffe.jpg'},
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

    useEffect(() => {
        actual();
    },[])


    //Auto-Play
    useEffect(() => {
        const intervalo = setInterval(() => {
            siguiente();
        }, "3000");

        return () => clearInterval(intervalo);
    });
    return(
        <div className="container">
            <button>
                <span onClick={anterior} className="material-icons cursor-pointer text-gray-600 mx-2">
                    chevron_left
                </span>
            </button>
            {  arrayProducto.map((producto,idx) => {
                    return  <Card key={idx} className="text-center" style={{ width: '25rem' }}>
                                <Card.Img variant="top" src={require(`../../assets/images/${producto.img}`)} />
                                <Card.Body>
                                    <Card.Title>{producto.nombre}</Card.Title>
                                    <Card.Subtitle className="mb-2 mt-2">${producto.precio}</Card.Subtitle>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>
                                        <Button variant="primary">Comprar</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
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