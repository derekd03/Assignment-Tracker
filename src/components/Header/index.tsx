import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

export function Header({ onAddAssignment }: { onAddAssignment: (title: string) => void }) {

  const [newAssignment, setNewAssignment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(newAssignment.trim()) {
      onAddAssignment(newAssignment);
      setNewAssignment("");
    }
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input 
        placeholder="Add a new assignment" 
        type="text"
        value={newAssignment}
        onChange={(e) => setNewAssignment(e.target.value)} 
        required
        />
        <button 
        type="submit" 
        disabled={!newAssignment.trim()} // Disable button if input is whitespace
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
