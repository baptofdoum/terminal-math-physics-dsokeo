
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { exercises } from '@/data/exercises';
import { useStorage } from '@/hooks/useStorage';

export default function ExercisesScreen() {
  const router = useRouter();
  const { completedExercises } = useStorage();
  const [selectedSubject, setSelectedSubject] = useState<'all' | 'math' | 'physics'>('all');

  const filteredExercises = selectedSubject === 'all'
    ? exercises
    : exercises.filter(e => e.subject === selectedSubject);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return colors.success;
      case 'medium': return colors.highlight;
      case 'hard': return colors.error;
      default: return colors.textSecondary;
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Facile';
      case 'medium': return 'Moyen';
      case 'hard': return 'Difficile';
      default: return difficulty;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'Exercices',
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
        {filteredExercises.map((exercise) => {
          const isCompleted = completedExercises.has(exercise.id);
          
          return (
            <TouchableOpacity
              key={exercise.id}
              style={commonStyles.card}
              onPress={() => router.push(`/exercise/${exercise.id}`)}
            >
              <View style={styles.exerciseHeader}>
                <View style={[
                  styles.subjectBadge,
                  { backgroundColor: exercise.subject === 'math' ? colors.primary : colors.secondary }
                ]}>
                  <IconSymbol
                    name={exercise.subject === 'math' ? 'function' : 'bolt.fill'}
                    size={16}
                    color="#ffffff"
                  />
                  <Text style={styles.subjectText}>
                    {exercise.subject === 'math' ? 'Math' : 'Physique'}
                  </Text>
                </View>
                {isCompleted && (
                  <View style={styles.completedIcon}>
                    <IconSymbol name="checkmark.circle.fill" size={24} color={colors.success} />
                  </View>
                )}
              </View>

              <Text style={styles.exerciseTitle}>{exercise.title}</Text>
              <Text style={styles.exerciseQuestion} numberOfLines={2}>
                {exercise.question}
              </Text>

              <View style={styles.exerciseFooter}>
                <View style={styles.skillBadge}>
                  <IconSymbol name="star.fill" size={14} color={colors.accent} />
                  <Text style={styles.skillText}>{exercise.skill}</Text>
                </View>

                <View style={[
                  styles.difficultyBadge,
                  { backgroundColor: getDifficultyColor(exercise.difficulty) + '20' }
                ]}>
                  <Text style={[
                    styles.difficultyText,
                    { color: getDifficultyColor(exercise.difficulty) }
                  ]}>
                    {getDifficultyLabel(exercise.difficulty)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        {filteredExercises.length === 0 && (
          <View style={styles.emptyState}>
            <IconSymbol name="pencil" size={64} color={colors.textSecondary} />
            <Text style={styles.emptyTitle}>Aucun exercice disponible</Text>
            <Text style={styles.emptyText}>
              Essayez de changer le filtre pour voir plus d&apos;exercices.
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
  exerciseHeader: {
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
  exerciseTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 6,
  },
  exerciseQuestion: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  exerciseFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  skillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flex: 1,
  },
  skillText: {
    fontSize: 13,
    color: colors.text,
    fontWeight: '500',
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
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
