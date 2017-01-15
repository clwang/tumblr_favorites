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
        $.ajax({
            url: this.generateUrl(blogName, tag),
            method: "GET",
            dataType: "jsonp",
            success: (data) => {
                if (data.response.posts) {
                    this.setState({ posts: data.response.posts });
                } else {
                    this.setState({ posts: data.response})
                }
                
            }
        });
    },

    generateUrl(blogName, tag) {
        var url = "";
        var apiKey = "B0nCoFnWYg6puIc052kEJ43TlEAJ2QbMCdozZbARFEo9G0o4x7";

        if (blogName === "" && tag.length > 0 )  {
            url = "https://api.tumblr.com/v2/tagged?tag=" + tag + "&api_key="
        } else if (blogName.length > 0) {
            var url = "https://api.tumblr.com/v2/blog/" + blogName + ".tumblr.com/posts?tag=" + tag + "&api_key="
        }
        return url + apiKey;
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