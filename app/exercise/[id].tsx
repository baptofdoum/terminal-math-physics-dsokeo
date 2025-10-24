
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { exercises } from '@/data/exercises';
import { useStorage } from '@/hooks/useStorage';

export default function ExerciseDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { addToHistory, markExerciseCompleted, completedExercises } = useStorage();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const exercise = exercises.find(e => e.id === id);

  if (!exercise) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Exercice non trouvé</Text>
          <TouchableOpacity
            style={[commonStyles.button, { marginTop: 16 }]}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Retour</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const isCompleted = completedExercises.has(exercise.id);

  const handleSubmit = () => {
    if (!selectedAnswer) {
      Alert.alert('Attention', 'Veuillez sélectionner une réponse');
      return;
    }

    const correct = selectedAnswer === exercise.correctAnswer;
    setIsCorrect(correct);
    setShowExplanation(true);

    if (correct && !isCompleted) {
      markExerciseCompleted(exercise.id, exercise.skill, exercise.subject);
      addToHistory({
        type: 'exercise',
        itemId: exercise.id,
        title: exercise.title,
        subject: exercise.subject,
        completed: true,
      });
    } else if (!correct) {
      addToHistory({
        type: 'exercise',
        itemId: exercise.id,
        title: exercise.title,
        subject: exercise.subject,
        completed: false,
      });
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
  };

  React.useEffect(() => {
    if (!isCompleted) {
      addToHistory({
        type: 'exercise',
        itemId: exercise.id,
        title: exercise.title,
        subject: exercise.subject,
        completed: false,
      });
    }
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen
        options={{
          title: exercise.title,
          headerBackTitle: 'Retour',
        }}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.card}>
          <View style={styles.exerciseHeader}>
            <View style={[
              styles.subjectBadge,
              { backgroundColor: exercise.subject === 'math' ? colors.primary : colors.secondary }
            ]}>
              <IconSymbol
                name={exercise.subject === 'math' ? 'function' : 'bolt.fill'}
                size={20}
                color="#ffffff"
              />
              <Text style={styles.subjectText}>
                {exercise.subject === 'math' ? 'Mathématiques' : 'Physique'}
              </Text>
            </View>
            {isCompleted && (
              <View style={styles.completedBadge}>
                <IconSymbol name="checkmark.circle.fill" size={24} color={colors.success} />
              </View>
            )}
          </View>

          <View style={styles.skillBadge}>
            <IconSymbol name="star.fill" size={16} color={colors.accent} />
            <Text style={styles.skillText}>{exercise.skill}</Text>
          </View>
        </View>

        <View style={commonStyles.card}>
          <Text style={styles.questionLabel}>Question :</Text>
          <Text style={styles.questionText}>{exercise.question}</Text>
        </View>

        {exercise.options && (
          <View style={styles.optionsSection}>
            <Text style={styles.sectionTitle}>Choisissez votre réponse :</Text>
            {exercise.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrectAnswer = option === exercise.correctAnswer;
              const showCorrect = showExplanation && isCorrectAnswer;
              const showIncorrect = showExplanation && isSelected && !isCorrectAnswer;

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    isSelected && styles.optionButtonSelected,
                    showCorrect && styles.optionButtonCorrect,
                    showIncorrect && styles.optionButtonIncorrect,
                  ]}
                  onPress={() => !showExplanation && setSelectedAnswer(option)}
                  disabled={showExplanation}
                >
                  <View style={styles.optionContent}>
                    <View style={[
                      styles.optionRadio,
                      isSelected && styles.optionRadioSelected,
                      showCorrect && styles.optionRadioCorrect,
                      showIncorrect && styles.optionRadioIncorrect,
                    ]}>
                      {(isSelected || showCorrect) && (
                        <View style={[
                          styles.optionRadioInner,
                          showCorrect && { backgroundColor: colors.success },
                          showIncorrect && { backgroundColor: colors.error },
                        ]} />
                      )}
                    </View>
                    <Text style={[
                      styles.optionText,
                      showCorrect && { color: colors.success, fontWeight: '600' },
                      showIncorrect && { color: colors.error },
                    ]}>
                      {option}
                    </Text>
                  </View>
                  {showCorrect && (
                    <IconSymbol name="checkmark.circle.fill" size={24} color={colors.success} />
                  )}
                  {showIncorrect && (
                    <IconSymbol name="xmark.circle.fill" size={24} color={colors.error} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {!showExplanation ? (
          <TouchableOpacity
            style={[commonStyles.button, styles.submitButton]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Valider ma réponse</Text>
          </TouchableOpacity>
        ) : (
          <>
            <View style={[
              commonStyles.card,
              styles.resultCard,
              { backgroundColor: isCorrect ? colors.success + '15' : colors.error + '15' }
            ]}>
              <View style={styles.resultHeader}>
                <IconSymbol
                  name={isCorrect ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
                  size={32}
                  color={isCorrect ? colors.success : colors.error}
                />
                <Text style={[
                  styles.resultTitle,
                  { color: isCorrect ? colors.success : colors.error }
                ]}>
                  {isCorrect ? 'Bravo ! Réponse correcte' : 'Réponse incorrecte'}
                </Text>
              </View>
            </View>

            <View style={commonStyles.card}>
              <Text style={styles.explanationTitle}>Explication :</Text>
              <Text style={styles.explanationText}>{exercise.explanation}</Text>
            </View>

            <TouchableOpacity
              style={[commonStyles.button, styles.resetButton]}
              onPress={handleReset}
            >
              <IconSymbol name="arrow.clockwise" size={20} color="#ffffff" />
              <Text style={styles.buttonText}>Réessayer</Text>
            </TouchableOpacity>
          </>
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
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: colors.text,
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
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 6,
  },
  subjectText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
  },
  completedBadge: {
    marginLeft: 'auto',
  },
  skillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  skillText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  questionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 8,
  },
  questionText: {
    fontSize: 17,
    color: colors.text,
    lineHeight: 26,
    fontWeight: '500',
  },
  optionsSection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.border,
  },
  optionButtonSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primary + '10',
  },
  optionButtonCorrect: {
    borderColor: colors.success,
    backgroundColor: colors.success + '10',
  },
  optionButtonIncorrect: {
    borderColor: colors.error,
    backgroundColor: colors.error + '10',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionRadio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionRadioSelected: {
    borderColor: colors.primary,
  },
  optionRadioCorrect: {
    borderColor: colors.success,
  },
  optionRadioIncorrect: {
    borderColor: colors.error,
  },
  optionRadioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  optionText: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  submitButton: {
    marginTop: 24,
  },
  resultCard: {
    marginTop: 24,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  explanationText: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 24,
  },
  resetButton: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
    backgroundColor: colors.accent,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
