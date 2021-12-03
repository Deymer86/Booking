import React from 'react'
import { Container, Row, Stack, Image, Dropdown } from 'react-bootstrap'
import imagen from '../assets/img/logo.png'

const HomeUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    //console.log(user.id)
    return (
        <>
            <Container>
                <Row>
                    <Stack gap={3} className="align-items-center">
                        <Image src={imagen} />

                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Selecciona Una de las Mesas Disponibles
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/results">Mesa #1</Dropdown.Item>
                                <Dropdown.Item href="/results">Mesa #5</Dropdown.Item>
                                <Dropdown.Item href="/results">Mesa #7</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <h3></h3>
                    </Stack>
                </Row>
            </Container>
        </>
    )
}

export default HomeUser
