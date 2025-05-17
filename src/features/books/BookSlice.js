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
        deleteBook: (state, action) => {
            state.books = state.books.filter((book) => book.id !== action.payload);
        },
    },
});

export const { showBooks, addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;