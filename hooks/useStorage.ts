
import { useState, useEffect } from 'react';
import { HistoryItem, Skill } from '@/types/course';

const HISTORY_KEY = 'app_history';
const SKILLS_KEY = 'app_skills';
const COMPLETED_COURSES_KEY = 'completed_courses';
const COMPLETED_EXERCISES_KEY = 'completed_exercises';

export function useStorage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [completedCourses, setCompletedCourses] = useState<Set<string>>(new Set());
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    try {
      const historyData = localStorage.getItem(HISTORY_KEY);
      const skillsData = localStorage.getItem(SKILLS_KEY);
      const coursesData = localStorage.getItem(COMPLETED_COURSES_KEY);
      const exercisesData = localStorage.getItem(COMPLETED_EXERCISES_KEY);

      if (historyData) {
        setHistory(JSON.parse(historyData));
      }
      if (skillsData) {
        setSkills(JSON.parse(skillsData));
      }
      if (coursesData) {
        setCompletedCourses(new Set(JSON.parse(coursesData)));
      }
      if (exercisesData) {
        setCompletedExercises(new Set(JSON.parse(exercisesData)));
      }
    } catch (error) {
      console.log('Error loading data:', error);
    }
  };

  const addToHistory = (item: Omit<HistoryItem, 'id' | 'timestamp'>) => {
    const newItem: HistoryItem = {
      ...item,
      id: Date.now().toString(),
      timestamp: Date.now(),
    };

    const updatedHistory = [newItem, ...history].slice(0, 50);
    setHistory(updatedHistory);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
  };

  const markCourseCompleted = (courseId: string) => {
    const updated = new Set(completedCourses);
    updated.add(courseId);
    setCompletedCourses(updated);
    localStorage.setItem(COMPLETED_COURSES_KEY, JSON.stringify([...updated]));
  };

  const markExerciseCompleted = (exerciseId: string, skillName: string, subject: 'math' | 'physics') => {
    const updated = new Set(completedExercises);
    updated.add(exerciseId);
    setCompletedExercises(updated);
    localStorage.setItem(COMPLETED_EXERCISES_KEY, JSON.stringify([...updated]));

    updateSkill(skillName, subject);
  };

  const updateSkill = (skillName: string, subject: 'math' | 'physics') => {
    const existingSkillIndex = skills.findIndex(s => s.name === skillName);
    let updatedSkills = [...skills];

    if (existingSkillIndex >= 0) {
      const skill = updatedSkills[existingSkillIndex];
      updatedSkills[existingSkillIndex] = {
        ...skill,
        exercisesCompleted: skill.exercisesCompleted + 1,
        progress: Math.min(100, ((skill.exercisesCompleted + 1) / skill.totalExercises) * 100),
      };
    } else {
      const newSkill: Skill = {
        id: Date.now().toString(),
        name: skillName,
        subject,
        progress: 10,
        exercisesCompleted: 1,
        totalExercises: 10,
      };
      updatedSkills.push(newSkill);
    }

    setSkills(updatedSkills);
    localStorage.setItem(SKILLS_KEY, JSON.stringify(updatedSkills));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  };

  return {
    history,
    skills,
    completedCourses,
    completedExercises,
    addToHistory,
    markCourseCompleted,
    markExerciseCompleted,
    clearHistory,
  };
}
