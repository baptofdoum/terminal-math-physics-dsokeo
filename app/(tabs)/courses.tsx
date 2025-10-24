
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { courses } from '@/data/courses';
import { useStorage } from '@/hooks/useStorage';

export default function CoursesScreen() {
  const router = useRouter();
  const { completedCourses } = useStorage();
  const [selectedSubject, setSelectedSubject] = useState<'all' | 'math' | 'physics'>('all');

  const filteredCourses = selectedSubject === 'all'
    ? courses
    : courses.filter(c => c.subject === selectedSubject);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return colors.success;
      case 'intermediate': return colors.highlight;
      case 'advanced': return colors.error;
      default: return colors.textSecondary;
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Débutant';
      case 'intermediate': return 'Intermédiaire';
      case 'advanced': return 'Avancé';
      default: return difficulty;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'Cours',
            headerLargeTitle: true,
          }}
        />
      )}

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedSubject === 'all' && styles.filterButtonActive
          ]}
          onPress={() => setSelectedSubject('all')}
        >
          <Text style={[
            styles.filterText,
            selectedSubject === 'all' && styles.filterTextActive
          ]}>
            Tous
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedSubject === 'math' && styles.filterButtonActive
          ]}
          onPress={() => setSelectedSubject('math')}
        >
          <Text style={[
            styles.filterText,
            selectedSubject === 'math' && styles.filterTextActive
          ]}>
            Mathématiques
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedSubject === 'physics' && styles.filterButtonActive
          ]}
          onPress={() => setSelectedSubject('physics')}
        >
          <Text style={[
            styles.filterText,
            selectedSubject === 'physics' && styles.filterTextActive
          ]}>
            Physique
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar
        ]}
        showsVerticalScrollIndicator={false}
      >
        {filteredCourses.map((course) => {
          const isCompleted = completedCourses.has(course.id);
          
          return (
            <TouchableOpacity
              key={course.id}
              style={commonStyles.card}
              onPress={() => router.push(`/course/${course.id}`)}
            >
              <View style={styles.courseHeader}>
                <View style={[
                  styles.subjectBadge,
                  { backgroundColor: course.subject === 'math' ? colors.primary : colors.secondary }
                ]}>
                  <IconSymbol
                    name={course.subject === 'math' ? 'function' : 'bolt.fill'}
                    size={16}
                    color="#ffffff"
                  />
                  <Text style={styles.subjectText}>
                    {course.subject === 'math' ? 'Math' : 'Physique'}
                  </Text>
                </View>
                {isCompleted && (
                  <View style={styles.completedIcon}>
                    <IconSymbol name="checkmark.circle.fill" size={24} color={colors.success} />
                  </View>
                )}
              </View>

              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>

              <View style={styles.courseFooter}>
                <View style={styles.courseInfo}>
                  <IconSymbol name="clock" size={16} color={colors.textSecondary} />
                  <Text style={styles.courseInfoText}>{course.duration}</Text>
                </View>

                <View style={styles.courseInfo}>
                  <IconSymbol name="list.bullet" size={16} color={colors.textSecondary} />
                  <Text style={styles.courseInfoText}>
                    {course.chapters.length} chapitre{course.chapters.length > 1 ? 's' : ''}
                  </Text>
                </View>

                <View style={[
                  styles.difficultyBadge,
                  { backgroundColor: getDifficultyColor(course.difficulty) + '20' }
                ]}>
                  <Text style={[
                    styles.difficultyText,
                    { color: getDifficultyColor(course.difficulty) }
                  ]}>
                    {getDifficultyLabel(course.difficulty)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        {filteredCourses.length === 0 && (
          <View style={styles.emptyState}>
            <IconSymbol name="book.fill" size={64} color={colors.textSecondary} />
            <Text style={styles.emptyTitle}>Aucun cours disponible</Text>
            <Text style={styles.emptyText}>
              Essayez de changer le filtre pour voir plus de cours.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  filterTextActive: {
    color: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  subjectBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
  },
  subjectText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
  },
  completedIcon: {
    marginLeft: 'auto',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 6,
  },
  courseDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  courseFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
  },
  courseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  courseInfoText: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginLeft: 'auto',
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
});
