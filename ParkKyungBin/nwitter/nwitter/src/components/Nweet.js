import React, { useState } from "react";
import { dbService } from "fbase";
import { doc, deleteDoc, updateDoc }from"firebase/firestore";

const Nweets = ({nweetObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const NweetTextRef =doc(dbService, "nweets", `${nweetObj.id}`);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if (ok) {
            await deleteDoc(NweetTextRef );
        }
    }
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewNweet(value);
    }

    const onUpdateClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if (ok) {
            await updateDoc(NweetTextRef, {text: newNweet} );
        }
        setEditing(false);
    }
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
    }
    return (
    <div>
        {editing ? (
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Edit your nweet" value={newNweet} required onChange={onChange} />
                    <input type="submit" value="Update Nweet" onClick={onUpdateClick}  />
                </form>
                <button onClick={toggleEditing}>Cancel</button>
            </div>
            ) : ( 
            <div>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
                <div>
                    <button onClick={onDeleteClick}>Delete Nweet</button>
                    <button onClick={toggleEditing}>Edit Nweet</button>
                </div>
            )}
            </div>
            )
        }
    </div>
    )
}

export default Nweets;