import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';

// tutorial1.js
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

// tutorial2.js
var CommentList = React.createClass({
    render: function() {
        // tutorial4.js - adding component properties
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});
// tutorial4.js - using props
var Comment = React.createClass({
    render: function() {
        var md = new Remarkable();
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {md.render(this.props.children.toString())}
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('root')
);
