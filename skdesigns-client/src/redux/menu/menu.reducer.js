const INITIAL_STATE = {
    sections: [{
        title: 'HATS',
        imgUrl: `https://image.freepik.com/free-photo/summer-women-s-clothes-flat-lay-fashion-photo-blue-jeans-sun-hat-wooden-background-copy-space_78677-1080.jpg`,
        id: 1,
        linkUrl : 'shop/hats'
    },{
        title: 'JACKETS',
        imgUrl: `https://img.freepik.com/free-photo/brown-woolen-coat-wooden-background_134398-411.jpg?size=626&ext=jpg`,
        id: 2,
        linkUrl: 'shop/jackets'
    },{
        title: 'SNEAKERS',
        imgUrl: `https://t3.ftcdn.net/jpg/01/90/65/48/240_F_190654818_ezc3Q7pfBd7n7GV2QF8ANCAZMLr3rJ9L.jpg
        `,
        id: 3,
        linkUrl: 'shop/sneakers'
    },{
        title: 'WOMEN',
        imgUrl: `https://mocah.org/uploads/posts/1112499-face-sunlight-women-model-portrait-long-hair-brunette-looking-at-viewer-photography-necklace-dress-smiling-fashion-hair-spring-Person-girl-beauty-smile-woman-lady-photo.jpg`,
        // imgUrl: `https://mocah.org/uploads/posts/1124172-face-women-outdoors-women-model-portrait-long-hair-blue-eyes-nature-brunette-photography-smiling-skirt-fashion-Aurela-Skandaj-emotion-Person-singing-child-girl-beauty-s.jpg`,
        id: 4,
        linkUrl: 'shop/womens'
    },{
        title: 'MEN',
        imgUrl: `https://www.thestatesman.com/wp-content/uploads/2019/05/mens-fashion.jpg`,
        id: 5,
        linkUrl: 'shop/mens'
    }]
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: return state
    }
}

export default menuReducer;