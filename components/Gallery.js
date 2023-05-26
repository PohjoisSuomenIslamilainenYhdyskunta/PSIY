import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

export default function Gallery(props) {
    return (
        <div id="gallery" className="mx-auto py-5 px-4 max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-4xl">Gallery</h2>
                <Carousel>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        style={{
                            maxHeight: '70vh',
                            objectFit: 'contain',
                            paddingLeft: '10%',
                            paddingRight: '10%',
                            paddingBottom: '2vh',
                            paddingTop: '2vh'
                        }}
                        src={props.data.gallery.img_1}
                        alt='First slide'
                    />
                    <Carousel.Caption>
                        <h3>{props.data.gallery.header_1}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        style={{
                            maxHeight: '70vh',
                            objectFit: 'contain',
                            paddingLeft: '10%',
                            paddingRight: '10%',
                            paddingBottom: '2vh',
                            paddingTop: '2vh'
                        }}
                        src={props.data.gallery.img_2}
                        alt='Second slide'
                    />
                    <Carousel.Caption>
                        <h3>{props.data.gallery.header_2}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        style={{
                            maxHeight: '70vh',
                            objectFit: 'contain',
                            paddingLeft: '10%',
                            paddingRight: '10%',
                            paddingBottom: '2vh',
                            paddingTop: '2vh'
                        }}
                        src={props.data.gallery.img_3}
                        alt='Third slide'
                    />
                    <Carousel.Caption>
                        <h3>{props.data.gallery.header_3}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        style={{
                            maxHeight: '70vh',
                            objectFit: 'contain',
                            paddingLeft: '10%',
                            paddingRight: '10%',
                            paddingBottom: '2vh',
                            paddingTop: '2vh'
                        }}
                        src={props.data.gallery.img_4}
                        alt='Fourth slide'
                    />
                    <Carousel.Caption>
                        <h3>{props.data.gallery.header_4}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>   
    )
}