var Post = React.createClass({

    favorite(post) {
        this.props.addPost(post);
    },

    remove(post) {
        this.props.removePost(post);
    },

    render() {
        var type = this.props.post.type;
        let tumblrPost = null;
        let button = null;

        if (type == "photo") {
            var photo_urls = this.props.post.photos[0].alt_sizes
            tumblrPost = <img className='tumblr-image' src={photo_urls[0].url} />
        } else if (type == "text") {
            tumblrPost = <p>{this.props.post.summary}</p>;
        } else if (type == "quote") {
            tumblrPost = <quote>{this.props.post.text}</quote>
        } else {
            tumblrPost = <h1>{type}</h1>
        }

        if (this.props.remove) {
            button = <button onClick={this.remove.bind(this, this.props.post)} className='btn btn-danger remove-btn'>- Remove</button>
        } else {
            button = <button onClick={this.favorite.bind(this, this.props.post)} className='btn btn-success add-btn'>+ Add</button>
        }

        return (
            <div className="post">
                {tumblrPost}
                {button}
            </div>
        )
    }
});