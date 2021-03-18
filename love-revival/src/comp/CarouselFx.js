import React from 'react';
import Carousel from 'react-elastic-carousel';
import carouselImg1 from '../images/IMG_8753.png';
import carouselImg2 from '../images/IMG_8708.png';
import carouselImg3 from '../images/IMG_8733.png';

function CarouselFx() {
    const breakPoints = [
        {width: 1, itemToShow: 1},
        {width: 550, itemToShow: 2, itemsToScroll: 2 },
        {width: 768, itemToShow: 3},
        {width: 1200, itemToShow: 4},
        {width: 1440, itemToShow: 5}
    ];

    state = {
        items: [
          {id: 1, url: 'item #1'},
          {id: 3, url: 'item #3'},
          {id: 2, url: 'item #2'},
          {id: 4, url: 'item #4'},
          {id: 5, url: 'item #5'}
        ]
      }
      const { items } = this.state;
    return (
        <>
            <Carousel breakPoints={breakPoints}>
                {items.map(item => <div key={item.id}>{item.url}</div>)}
            </Carousel>
        </>
    )
}

export default CarouselFx
