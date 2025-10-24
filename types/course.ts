
export interface Course {
  id: string;
  title: string;
  subject: 'math' | 'physics';
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  chapters: Chapter[];
  completed?: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  completed?: boolean;
}

export interface Exercise {
  id: string;
  courseId: string;
  subject: 'math' | 'physics';
  title: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  skill: string;
  completed?: boolean;
  userAnswer?: string;
}

export interface HistoryItem {
  id: string;
  type: 'course' | 'exercise';
  itemId: string;
  title: string;
  subject: 'math' | 'physics';
  timestamp: number;
  completed: boolean;
}

export interface Skill {
  id: string;
  name: string;
  subject: 'math' | 'physics';
  progress: number;
  exercisesCompleted: number;
  totalExercises: number;
}
