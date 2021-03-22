import React from 'react';
import Carousel from 'react-elastic-carousel';
// import Item from '../comp/Item';
import '../styles/carouselfx.scss';
import styled from 'styled-components';
import carouselImg1 from '../images/IMG_8753.png';
import carouselImg2 from '../images/IMG_8708.png';
import carouselImg3 from '../images/IMG_8733.png';
import carouselImg4 from '../images/IMG_7063.png';
import carouselImg5 from '../images/IMG_6932.png';
import carouselImg6 from '../images/IMG_6930.png';
import carouselImg7 from '../images/IMG_6979.png';
import carouselImg8 from '../images/IMG_6983.png';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 100%;
    margin: 5px;
    background-color: red;
    color: #fff;
    font-size: 4em;
    backgound-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
`;

const Image = styled.img`
    max-width: 300px;
    max-height: 500px;
    display: block;
    margin: 15px;
`;

// const Largebox = styled.div`
//     width: 250px;
//     height: 500px;
     
// `;

// const Smallbox = styled.div`
//     width: 20px;
//     height: 300px;
// `;
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 5 },
];

function CarouselFx() {
    
    //  let divStyles = { display: 'flex', overflow: 'hidden', height: '250px',
    //  width: '300px', margin: '15px'};
     let divvStyle = {'font-family': 'sans-serif',
        display: 'flex', 'align-items': 'center', 'justify-content': 'center', height: '100vh'};
    // state = {
    //     items: [
    //       {id: 1, alt: 'image1', url: {carouselImg1}},
    //       {id: 3, alt: 'image2', url: {carouselImg2}},
    //       {id: 2, alt: 'image3', url: {carouselImg3}},
    //       {id: 4, alt: 'image4', url: {carouselImg4}},
    //       {id: 5, alt: 'image5', url: {carouselImg5}}
    //     ]
    //   }
    //   const { items } = this.state;
    return (
        <>
            {/* <Carousel breakPoints={breakPoints}>
                {items.map(item => <div key={item.id}>{item.url}</div>)}
            </Carousel> */}
            {/* <Carousel breakPoints={breakPoints}>
                {items.map(item => <img key={item.id} src={item.url} alt={item.alt}> </img>)}
            </Carousel> */}
            <div style={divvStyle}>
                <Carousel breakPoints={breakPoints}>
                    <Wrapper>1</Wrapper>
                    <Wrapper>2</Wrapper>
                    <Wrapper>3</Wrapper>
                    <Wrapper>4</Wrapper>
                    <Wrapper>5</Wrapper>
                    <Wrapper>6</Wrapper>
                    <Wrapper>7</Wrapper>
                    <Wrapper>8</Wrapper>
                </Carousel>
            </div>
            <div style={divvStyle}>
                <Carousel itemsToScroll={1} itemsToShow={3}>
                    <Wrapper img={carouselImg1}/>
                    <Wrapper img={carouselImg2}/>
                    <Wrapper img={carouselImg3}/>
                    <Wrapper img={carouselImg4}/>
                    <Wrapper img={carouselImg5}/>
                    <Wrapper img={carouselImg6}/>
                    <Wrapper img={carouselImg7}/>
                    <Wrapper img={carouselImg8}/>
                </Carousel>
            </div>
            <div style={divvStyle}>
                <Carousel itemsToScroll={1} itemsToShow={3}>
                        <Image src={carouselImg1}/>
                        <Image src={carouselImg2}/>   
                        <Image src={carouselImg3}/>             
                        <Image src={carouselImg4}/>  
                        <Image src={carouselImg5}/>
                        <Image src={carouselImg6}/>
                        <Image src={carouselImg7}/>
                        <Image src={carouselImg8}/>
                </Carousel>
            </div>
            
            
        </>
    )
}

export default CarouselFx
