var Results = React.createClass({
    render() {
        var posts = this.props.posts.map((post) => {
            return (
                <Post post={post} key={post.id} />
            )
        });

        return (
            <div>
                {posts}
            </div>
        )
    }
});