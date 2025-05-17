const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = { 
    books: [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
        },
        {
            id: 2,
            title: "Brave New World",
            author: "Aldous Huxley",
        },
        {
            id: 3,
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
        },
        {
            id: 4,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
        },
    ],
};

export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => {
            return state;
        },
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id);
            if (isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
    },
});

export const { showBooks, addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;