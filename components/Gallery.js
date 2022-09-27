import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

export default function Gallery(props) {
    return (
        <div id="gallery" className="bg-white">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:px-7">Gallery</h2>
                <Carousel>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        style={{
                            height: 500,
                            paddingLeft: 200,
                            paddingRight: 200,
                            paddingBottom: 20,
                            paddingTop: 20
                        }}
                        src={props.data.gallery.img_1}
                        alt='First slide'
                    />
                    <Carousel.Caption>
                        <h3>{props.data.gallery.header_1}</h3>
                        <p>{props.data.gallery.des_1}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        style={{
                            height: 500,
                            paddingLeft: 200,
                            paddingRight: 200,
                            paddingBottom: 20,
                            paddingTop: 20
                        }}
                        src={props.data.gallery.img_2}
                        alt='Second slide'
                    />
                    <Carousel.Caption>
                        <h3>{props.data.gallery.header_2}</h3>
                        <p>{props.data.gallery.des_2}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        style={{
                            height: 500,
                            paddingLeft: 200,
                            paddingRight: 200,
                            paddingBottom: 20,
                            paddingTop: 20
                        }}
                        src={props.data.gallery.img_3}
                        alt='Third slide'
                    />
                    <Carousel.Caption>
                        <h3>{props.data.gallery.header_3}</h3>
                        <p>{props.data.gallery.des_3}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>   
    )
}