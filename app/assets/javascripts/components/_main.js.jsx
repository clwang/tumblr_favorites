var Main = React.createClass({
    getInitialState() {
        return (
            { posts: [] }
        )
    },

    fetchSearchResults(blogName, tag) {
        console.log('fetch results b');
        var url = "https://api.tumblr.com/v2/blog/" + blogName + ".tumblr.com/posts?api_key="
        var apiKey = "B0nCoFnWYg6puIc052kEJ43TlEAJ2QbMCdozZbARFEo9G0o4x7"
        $.ajax({
            url: url + apiKey,
            method: "GET",
            dataType: "jsonp",
            success: (data) => {
                this.setState({ posts: data.response.posts })
            }
        });
    },

    render() {
        return (
            <div>
                <div className="wrapper left">
                    <Search fetchSearchResults={this.fetchSearchResults} />
                </div>
                <div className="wrapper right">

                </div>
            </div>
        )
    }
});