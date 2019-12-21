import React, { Component } from 'react';
import Shelf from '../shelf';
import {getAll} from '../../BooksAPI';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    async componentDidMount(){
        try{
            const books = await getAll();
            console.log(books);
            this.props.addbooks(books);
        }
        catch(err){
            console.log(err);
        }
    }
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf title='Currently Reading' books={this.props.currentlyReading} moveBook={this.props.moveBook} />
                    <Shelf title='Want To Read' books={this.props.wantToRead} moveBook={this.props.moveBook} />
                    <Shelf title='Read' books={this.props.read} moveBook={this.props.moveBook} />
                </div>
                <div className="open-search">
                    <Link to={"/search"}>
                    <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}
