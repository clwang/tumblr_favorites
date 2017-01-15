var Post = React.createClass({
    render() {
        var type = this.props.post.type;
        let tumblrPost = null;
        if (type == "photo") {
            var photo_urls = this.props.post.photos[0].alt_sizes
            tumblrPost = <img className='tumblr-image' src={photo_urls[0].url} />
        } else {
            tumblrPost = <h1>{type}</h1>
        }

        return (
            <div className="post">
                {tumblrPost}
                <button className='btn btn-success add-btn'>+ Add</button>
            </div>
        )
    }
});