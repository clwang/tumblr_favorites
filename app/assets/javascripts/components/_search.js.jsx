var Search = React.createClass({

    fetchResults() {
        var blogName = this.refs.blog_name.value;
        var tag = this.refs.tag.value;
        console.log('the blog search is :', blogName);
        console.log('the blog tag is :', tag);
    },

    render() {
        return (
            <div className="search-wrapper">
                <div className='search-input'>
                    <label htmlFor="blog_name">Blog Name:</label>
                    <br />
                    <input type="text" name="blog_name" ref="blog_name" placeholder="charles.tumblr.com" />
                </div>
                <div className='search-input'>
                    <label htmlFor="tag">Tag: </label>
                    <br />
                    <input type="text" name="tag" ref="tag" placeholder="gif, funny"/>
                </div>
                <br />
                <button className='btn btn-primary submit-btn' onClick={this.fetchResults}>Search</button>
            </div>
        )
    }
});