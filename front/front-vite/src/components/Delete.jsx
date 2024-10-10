import axios from "axios";
import './Delete.css'
const Delete = ( {id} ) => {
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://node_back:8181/notas/${id}`);
            console.log('Post deleted:', response.data);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
}
export default Delete;