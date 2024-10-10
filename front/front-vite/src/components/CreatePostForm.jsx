import { useState } from 'react';
import axios from 'axios';
import './CreatePostForm.css';

const CreatePostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!title || !content) {
            setShowModal(true);
            return;
        }

        console.log('Creating post...', title, content);
        
        try {
            const response = await axios.post('http://node_back:8181/notas/', {
                Title: title,
                contenido: content,
            });
            console.log('Post created:', response.data);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type="submit">Create Post</button>
            </form>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>Both fields are required!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreatePostForm;