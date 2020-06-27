import React, { Component } from 'react'
import devgrub from '../assets/images/devgrub.png';
import violin from '../assets/images/violin.jpg';
import evverest from '../assets/images/evverest.png';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';

class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Farnam Homayounfar',
                    subTitle: 'Personal Website',
                    imgSrc: devgrub,
                    link: 'http://farnamh.ir',
                    selected: false
                }, {
                    id: 1,
                    title: 'Farnam Homayounfar',
                    subTitle: 'YouTube channel',
                    imgSrc: violin,
                    link: 'https://www.youtube.com/channel/UCvkri7_xsRQDdB5EMg0egdA',
                    selected: false
                }, {
                    id: 2,
                    title: 'Github Profile',
                    subTitle: 'My Github Repositories',
                    imgSrc: evverest,
                    link: 'https://github.com/homfarnam',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id)
        let items = [...this.state.items]
        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        })

        this.setState({ items })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item}
                click={
                    (e => this.handleCardClick(item.id, e)
                    )}
                key={
                    item.id
                }
            />
        })
    }

    render() {
        return (
            <Container fluid={true} >
                <Row className='justify-content-around' > {this.makeItems(this.state.items)}
                </Row >
            </Container>
        )
    }
}

export default Carousel
