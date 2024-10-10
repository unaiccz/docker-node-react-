import { useState, useEffect } from 'react';
import axios from 'axios';
import Delete from './Delete';
import './Notes.css';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchNotes = async () => {
        try {
            const response = await axios.get('http://node_back:8181/notas');
            setNotes(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotes(); // Fetch notes initially
        const interval = setInterval(fetchNotes, 3000); // Fetch notes every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="notes-container">
            <h1 className="notes-title">Notes</h1>
            <ul className="notes-list">
                {notes.map(note => (
                    <li key={note.id} className="note-card">
                        <div className="note-header">

                            <span className="note-id">{note.id}</span>
                            <h2 className="note-title">{note.Title}</h2>
                        </div>
                        <div className="note-body">
                            <p className="note-content">{note.contenido}</p>
                            <br />
                        <Delete id={note.id} />

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notes;