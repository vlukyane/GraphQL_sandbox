const movies = [
    { id: '1', name: 'Pulp Fiction', genre: 'Crime', directorId: '1', },
    { id: '2', name: '1984', genre: 'Sci-Fi', directorId: '2', },
    { id: '3', name: 'V for vendetta', genre: 'Sci-Fi-Triller', directorId: '3', },
    { id: '4', name: 'Snatch', genre: 'Crime-Comedy', directorId: '4', },
    { id: '5', name: 'Reservoir Dogs', genre: 'Crime', directorId: '1' },
    { id: '6', name: 'The Hateful Eight', genre: 'Crime', directorId: '1' },
    { id: '7', name: 'Inglourious Basterds', genre: 'Crime', directorId: '1' },
    { id: '7', name: 'Lock, Stock and Two Smoking Barrels', genre: 'Crime-Comedy', directorId: '4' },
];
const directors = [
    { id: '1', name: 'Quentin', age: 55 },
    { id: '2', name: 'Michael', age: 72 },
    { id: '3', name: 'James', age: 51 },
    { id: '4', name: 'Guy', age: 50 }
];

module.exports = {
    movies,
    directors
};
