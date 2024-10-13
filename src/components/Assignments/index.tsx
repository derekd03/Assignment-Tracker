import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({
  assignments,
  onDeleteAssignment,
  onCompleteAssignment,
  completedCount,
}: {
  assignments: { title: string; completed: boolean }[];
  onDeleteAssignment: (index: number) => void;
  onCompleteAssignment: (index: number) => void;
  completedCount: number; // New prop for the number of completed assignments
}) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span> {/* Show count of assignments */}
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCount} of {assignments.length}</span> {/* Show completed count */}
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment.title}
            completed={assignment.completed}
            onDelete={() => onDeleteAssignment(index)} // Pass delete handler to Assignment
            onComplete={() => onCompleteAssignment(index)} // Pass complete handler to Assignment
          />
        ))}
      </div>
    </section>
  );
}
