var Results = React.createClass({
    addPost(post) {
        this.props.addPost(post);
    },

    removePost(post) {
        this.props.removePost(post);
    },

    render() {
        var posts = this.props.posts.map((post) => {
            return (
                <Post post={post} key={post.id} addPost={this.props.addPost} removePost={this.props.removePost} remove={this.props.remove} />
            )
        });

        return (
            <div>
                {posts}
            </div>
        )
    }
});