import { create } from 'zustand';

interface Assignment {
  title: string;
  completed: boolean;
}

interface AssignmentsStore {
  assignments: Assignment[];
  newAssignment: string;
  addAssignment: (title: string) => void;
  deleteAssignment: (index: number) => void;
  completeAssignment: (index: number) => void;
  setNewAssignment: (title: string) => void;
  completedCount: () => number;
}

const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: [],
  newAssignment: '',

  addAssignment: (title) =>
    set((state) => ({
      assignments: [...state.assignments, { title, completed: false }],
      newAssignment: '',
    })),

  deleteAssignment: (index) =>
    set((state) => ({
      assignments: state.assignments.filter((_, i) => i !== index),
    })),

  completeAssignment: (index) =>
    set((state) => ({
      assignments: state.assignments.map((assignment, i) =>
        i === index ? { ...assignment, completed: !assignment.completed } : assignment
      ),
    })),

  setNewAssignment: (title) =>
    set(() => ({
      newAssignment: title,
    })),

  completedCount: () => {
    return get().assignments.filter((assignment) => assignment.completed).length;
  },
}));

export default useAssignmentsStore;
