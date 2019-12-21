import React, { Component } from 'react';
export const MyContext = React.createContext();

export default class index extends Component {
    state = {
        books: [],
        currentlyReading: [],
        wantToRead: [],
        read: [],
        addbooks:books=>{
            const currentlyReading = books.filter(book=>book.shelf==='currentlyReading');
            const read= books.filter(book=>book.shelf==='read');
            const wantToRead= books.filter(book=>book.shelf==='wantToRead');
            this.setState({books,currentlyReading,read,wantToRead});
            console.log(currentlyReading,read,wantToRead);
        },
        moveBook:(book,newshelf,allshelfs)=>{
            console.log(newshelf);
            const newBook = this.state.books.map(allBooks=>{
                const foundID=allshelfs[newshelf].find(
                    bookID=>bookID===allBooks.id
                )
                if(foundID){
                    allBooks.shelf=newshelf;
                }
                return allBooks;
            });
            this.state.addbooks(newBook);
        }
    }
    render() {
        return (
            <MyContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
