import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header';
import { Assignments } from '../components/Assignments';
import useAssignmentsStore from '../components/store/useAssignmentsStore';

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

// Define the structure of an assignment
interface Assignment {
  title: string;
  completed: boolean;
}

function HomeComponent() {

  const {
    assignments,
    deleteAssignment,
    completeAssignment,
    completedCount,
  } = useAssignmentsStore();

  return (
    <div>
      <Header />
      <Assignments
        assignments={assignments}
        onDeleteAssignment={deleteAssignment}
        onCompleteAssignment={completeAssignment}
        completedCount={completedCount()}
      />
    </div>
  );
}
