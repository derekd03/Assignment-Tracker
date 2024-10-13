import { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

// Define the structure of an assignment
interface Assignment {
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  // Function to add a new assignment
  const addAssignment = (newAssignment: string) => {
    setAssignments([...assignments, { title: newAssignment, completed: false }]); // New assignment is not completed
  };

  // Function to delete an assignment
  const deleteAssignment = (index: number) => {
    setAssignments(assignments.filter((_, i) => i !== index));
  };

  // Function to mark an assignment as completed
  const completeAssignment = (index: number) => {
    const updatedAssignments = assignments.map((assignment, i) =>
      i === index ? { ...assignment, completed: !assignment.completed } : assignment
    );
    setAssignments(updatedAssignments);
  };

  // Calculate the number of completed assignments
  const completedCount = assignments.filter((assignment) => assignment.completed).length;

  return (
    <div>
      <Header onAddAssignment={addAssignment} />
      <Assignments
        assignments={assignments}
        onDeleteAssignment={deleteAssignment}
        onCompleteAssignment={completeAssignment}
        completedCount={completedCount}
      />
    </div>
  );
}

export default App;
