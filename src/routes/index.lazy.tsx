import { createLazyFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header';
import { Assignments } from '../components/Assignments';
import { useAssignmentsStore } from '../components/store/useAssignmentsStore';

export const Route = createLazyFileRoute('/' as never)({
  component: Index,
})

// Define the structure of an assignment
interface Assignment {
  title: string;
  completed: boolean;
}

function Index() {

  return (
    <div>
      <Header onAddAssignment={useAssignmentsStore.addAssignment} />
      <Assignments
        assignments={useAssignmentsStore.assignments}
        onDeleteAssignment={useAssignmentsStore.deleteAssignment}
        onCompleteAssignment={useAssignmentsStore.completeAssignment}
        completedCount={useAssignmentsStore.completedCount}
      />
    </div>
  );
}