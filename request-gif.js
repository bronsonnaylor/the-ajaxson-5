
var ajaxson5 = new Vue({
    el: '#mount-point',
    data: function () {
        return {
            tagValue: null,
            errorMessage: null,
            loading: false,
            imgSrc: null,
            validate: ""
        };
    },
    methods: {
        fetchGif: function() {
            if (this.validate !== "5") {
                this.errorMessage = "Begone, Peasant!";
                imgSrc = null;
                return
            }
            this.errorMessage = null;
            var searchQuery = this.tagValue;
            var api_key = "dc6zaTOxFJmzC";
            var tag = "Jackson 5 " + searchQuery;
            fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`)
                .then(response => response.ok ? response.json() : Promise.reject(response))
                .then(results => {
                    console.log("we received a response!");
                    console.log(results);
                    this.imgSrc = results.data.image_url;
                    this.errorMessage = null;
                    this.loading = false;
                })
                .catch(err => {
                    this.loading = false;
                    this.errorMessage = 'Sorry, could not load GIF. Try again!';
                });
            this.loading = true;
        },
    },
});
