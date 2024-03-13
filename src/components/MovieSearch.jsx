import React, { useState } from "react";

function MovieSearch() {
    const [movieName, setMovieName] = useState("");
    const [movieDetails, setMovieDetails] = useState(null);

    const handleSearch = async () => {
        // try {
        const response = await fetch(
            `https://www.omdbapi.com/?t=${movieName}&apikey=c012ba83`
        );
        const data = await response.json();
        console.log(data)
        setMovieDetails(data);
    }
    //  catch (error) {
    //     console.error("Can't find movie", error.message);
    // }
// };

return (
    <div style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/05/52/90/10/360_F_552901001_iVDRtsrQOjVvyH3foTMEYW2t0YalwYCL.jpg')`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}
    >
        <div
            style={{
                padding: "50px",
                borderRadius: "10px",
            }}
        >
            <input
                type="text"
                placeholder="Enter movie name..."
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                style={{
                    marginRight: "10px",
                    padding: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                }}
            />
            <button
                onClick={handleSearch}
                style={{
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "orange",
                    color: "#fff",
                    cursor: "pointer",
                }}
            >
                Search
            </button>
        </div>

        {
            movieDetails && (
                <div
                    style={{
                        margin: "20px",
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        borderRadius: "10px",
                        padding: "20px",
                        maxWidth: "300px",
                    }}
                >
                    <img
                        src={movieDetails.Poster}
                        alt={movieDetails.Title}
                        style={{ width: "100%", height: "250px" }}
                    />
                    <h2>{movieDetails.Title}</h2>
                    <p>Year: {movieDetails.Year}</p>
                    <p>Released: {movieDetails.Released}</p>
                    <p>Runtime: {movieDetails.Runtime}</p>
                    <p>Genre: {movieDetails.Genre}</p>
                    <p>Director: {movieDetails.Director}</p>
                    <p>Actors: {movieDetails.Actors}</p>
                </div>
            )}
    </div>
);
}

export default MovieSearch;
