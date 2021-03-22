import styled from 'styled-components';

export  default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 100%;
    color: #fff;
    margin: 15px;
    backgound-image: url(${props => props.imgUrl});
    font-size: 4em;

`;

// export default styled.img`
//     max-width: 100%;
//     max-height: 100%
//     display: block;
// `;

// export default styled.largebox`
//     width: 250px;
//     height: 500px;
     
// `;

// export default styled.smallbox`
//     width: 20px;
//     height: 300px;
// `;