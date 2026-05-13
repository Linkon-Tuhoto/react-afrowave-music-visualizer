import { audio, image } from "framer-motion/client";

export async function fetchSongs(query = "afrobeats"){
    const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=200`);
    const data = await response.json();
    return data.results.map(song => ({
        id: song.trackId,
        title: song.trackName,
        artist: song.artistName,
        album: song.collectionName,
        image: song.artworkUrl100.replace('100x100', '300x300'),
        audio: song.previewUrl,
    }));
}