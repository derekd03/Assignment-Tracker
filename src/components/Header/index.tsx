import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import useAssignmentsStore from "../store/useAssignmentsStore";

export function Header() {
  const { newAssignment, setNewAssignment, addAssignment } = useAssignmentsStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAssignment.trim()) {
      addAssignment(newAssignment);
    }
  };

  return (
    <header className={styles.header}>
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
          disabled={!newAssignment.trim()}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
