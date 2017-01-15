var Main = React.createClass({
    getInitialState() {
        return (
            { posts: [], favorites: [] }
        )
    },

    addPost(post) {
        var state = this.state;
        state.favorites.push(post);
        this.setState(state)
    },

    removePost(post) {
        var state = this.state;
        var favorites = state.favorites;
        for(var i=0; i < favorites.length; i++) {
            if (favorites[i].id === post.id) {
                favorites.splice(i,1);
            }
        }

        this.setState({ favorites: favorites })
    },

    fetchSearchResults(blogName, tag) {
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
                    <Results posts={this.state.posts} remove={false} addPost={this.addPost}  />
                </div>
                <div className="wrapper right">
                    <h1>Favorites:</h1>
                    <Results posts={this.state.favorites} remove={true} removePost={this.removePost} />
                </div>
            </div>
        )
    }
});