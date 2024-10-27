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
  completedCount: number;
}) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCount} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment.title}
            completed={assignment.completed}
            onDelete={() => onDeleteAssignment(index)}
            onComplete={() => onCompleteAssignment(index)}
          />
        ))}
      </div>
    </section>
  );
}
