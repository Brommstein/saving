//Main class to hold store and server info
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ryanconley/bookmarks';
const store = [];

function getInput() {
    $('.creation').submit(function (event) {
        event.preventDefault();

        /*let title = $(event.currentTarget).find('#title').val();
        console.log(title);
        let url = $(event.currentTarget).find('#url').val();
        console.log(url);
        let desc = $(event.currentTarget).find('#desc').val();
        console.log(desc);
        //Need to fix rating
        let rating = $(event.currentTarget).find('#rating').val();
        console.log(rating);*/

        console.log(handleSubmit(event));

        /*
        let ratingNum = 1;
        if(rating === 'twoStar'){
            ratingNum = 2;
        }
        if(rating === 'threeStar'){
            ratingNum = 3;
        }
        if(rating === 'fourStar'){
            ratingNum = 4;
        }
        if(rating === 'fiveStar'){
            ratingNum = 5;
        }

        store.addTo({
            title: title,
            url: url,
            desc: desc,
            rating: ratingNum
        })
        */
    });
}


export default {
    store,
    getInput,

}