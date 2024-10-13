import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

export function Assignment({
  title,
  completed,
  onDelete,
  onComplete,
}: {
  title: string;
  completed: boolean;
  onDelete: () => void;
  onComplete: () => void;
}) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={onComplete}>
        {completed ? (
          <BsCheckCircleFill size={20} color="light blue" />
        ) : (
          <div className={styles.emptyCheck} />
        )}
      </button>

      <p
        style={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "#999" : "#FFF", // Dim text color when completed
          opacity: completed ? 0.6 : 1, // Add opacity for a more subtle dimming effect
        }}
      >
        {title}
      </p>

      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
