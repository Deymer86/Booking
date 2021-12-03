import React from 'react'
import {Carousel} from 'react-bootstrap'
import imagen1 from '../assets/img/landing1.jpg'
import imagen2 from '../assets/img/landing2.jpg'
import imagen3 from '../assets/img/landing3.jpg'
import ButtonLogin from './ButtonLogin'

const MainImg = () => {
    const estilo ={
        backgroundColor: "rgb(0,0,0,0.5)"
    }
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={estilo}>
                        <h1>Bienvenido a Booking Restaurant</h1>
                        <h2>Realiza tu Reservación</h2>
                        <ButtonLogin />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen2}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={estilo}>
                        <h1>Celebra con nosotros tus fechas especiales.</h1>
                        <h2>Realiza tu Reservación</h2>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={estilo}>
                        <h1>Vive nuestra experiencia gastronomica</h1>
                        <h2>Realiza tu Reservación</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default MainImg
