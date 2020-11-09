import React, { Component } from 'react'
import './Articles.css'


class Articles extends Component {

    render() {

        return (
            <div className = "articles">
                <h3><a className="title" href="http://localhost:3000/" style={{ textDecoration: 'none' }}>{this.props.title}</a></h3>
                <p>{this.props.content}</p>
                <div className="orange">
                    <a className="comments" href="http://localhost:3000/" style={{ textDecoration: 'none' }}>{this.props.comments} Comments</a>
                    <a className="likes" href="http://localhost:3000/" style={{ textDecoration: 'none' }}>{this.props.likes} Likes</a>
                </div>
            </div>
        )

    }

}

export default Articles