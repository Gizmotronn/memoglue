import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return (
        <div className="note">
            <span>
                This is the first note
            </span>
            <div className="notes-footer">
                <small>11/07/2021</small>
                <MdDeleteForever />
            </div>
        </div>
    );
};

export default Note;