
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useStorage } from '@/hooks/useStorage';

export default function ProfileScreen() {
  const { history, skills, completedCourses, completedExercises, clearHistory } = useStorage();

  const mathSkills = skills.filter(s => s.subject === 'math');
  const physicsSkills = skills.filter(s => s.subject === 'physics');

  const handleClearHistory = () => {
    Alert.alert(
      'Effacer l\'historique',
      'Êtes-vous sûr de vouloir effacer tout l\'historique ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Effacer',
          style: 'destructive',
          onPress: () => {
            clearHistory();
            Alert.alert('Succès', 'L\'historique a été effacé.');
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'Profil',
            headerLargeTitle: true,
          }}
        />
      )}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS !== 'ios' && styles.contentContainerWithTabBar
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.card}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <IconSymbol name="person.circle.fill" size={80} color={colors.primary} />
            </View>
            <Text style={styles.userName}>Élève Terminale S SI</Text>
            <Text style={styles.userSubtitle}>Mathématiques & Physique</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={[commonStyles.card, styles.statCard]}>
            <IconSymbol name="book.fill" size={32} color={colors.primary} />
            <Text style={styles.statNumber}>{completedCourses.size}</Text>
            <Text style={styles.statLabel}>Cours complétés</Text>
          </View>

          <View style={[commonStyles.card, styles.statCard]}>
            <IconSymbol name="pencil" size={32} color={colors.secondary} />
            <Text style={styles.statNumber}>{completedExercises.size}</Text>
            <Text style={styles.statLabel}>Exercices réussis</Text>
          </View>

          <View style={[commonStyles.card, styles.statCard]}>
            <IconSymbol name="star.fill" size={32} color={colors.highlight} />
            <Text style={styles.statNumber}>{skills.length}</Text>
            <Text style={styles.statLabel}>Compétences</Text>
          </View>
        </View>

        {mathSkills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Compétences en Mathématiques</Text>
            {mathSkills.map((skill) => (
              <View key={skill.id} style={commonStyles.card}>
                <View style={styles.skillRow}>
                  <Text style={styles.skillName}>{skill.name}</Text>
                  <Text style={styles.skillProgress}>{Math.round(skill.progress)}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${skill.progress}%`, backgroundColor: colors.primary }
                    ]}
                  />
                </View>
                <Text style={styles.skillDetail}>
                  {skill.exercisesCompleted} / {skill.totalExercises} exercices
                </Text>
              </View>
            ))}
          </View>
        )}

        {physicsSkills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Compétences en Physique</Text>
            {physicsSkills.map((skill) => (
              <View key={skill.id} style={commonStyles.card}>
                <View style={styles.skillRow}>
                  <Text style={styles.skillName}>{skill.name}</Text>
                  <Text style={styles.skillProgress}>{Math.round(skill.progress)}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${skill.progress}%`, backgroundColor: colors.secondary }
                    ]}
                  />
                </View>
                <Text style={styles.skillDetail}>
                  {skill.exercisesCompleted} / {skill.totalExercises} exercices
                </Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Historique</Text>
            {history.length > 0 && (
              <TouchableOpacity onPress={handleClearHistory}>
                <Text style={styles.clearText}>Effacer</Text>
              </TouchableOpacity>
            )}
          </View>

          {history.length === 0 ? (
            <View style={commonStyles.card}>
              <Text style={styles.emptyText}>Aucun historique pour le moment</Text>
            </View>
          ) : (
            history.map((item) => (
              <View key={item.id} style={commonStyles.card}>
                <View style={styles.historyItem}>
                  <View style={[
                    styles.historyIcon,
                    { backgroundColor: item.type === 'course' ? colors.primary : colors.secondary }
                  ]}>
                    <IconSymbol
                      name={item.type === 'course' ? 'book.fill' : 'pencil'}
                      size={20}
                      color="#ffffff"
                    />
                  </View>
                  <View style={styles.historyContent}>
                    <Text style={styles.historyTitle}>{item.title}</Text>
                    <Text style={styles.historySubtitle}>
                      {item.subject === 'math' ? 'Mathématiques' : 'Physique'} • {' '}
                      {new Date(item.timestamp).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </Text>
                  </View>
                  {item.completed && (
                    <IconSymbol name="checkmark.circle.fill" size={20} color={colors.success} />
                  )}
                </View>
              </View>
            ))
          )}
        </View>
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
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatarContainer: {
    marginBottom: 12,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  userSubtitle: {
    fontSize: 15,
    color: colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  clearText: {
    fontSize: 14,
    color: colors.error,
    fontWeight: '600',
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  skillProgress: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.background,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  skillDetail: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  historyContent: {
    flex: 1,
  },
  historyTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  historySubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  emptyText: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingVertical: 20,
  },
});
