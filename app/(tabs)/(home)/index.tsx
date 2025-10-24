
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useStorage } from '@/hooks/useStorage';

export default function HomeScreen() {
  const router = useRouter();
  const { history, skills } = useStorage();

  const recentHistory = history.slice(0, 3);
  const topSkills = skills.sort((a, b) => b.progress - a.progress).slice(0, 3);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'Terminale S SI',
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
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Bienvenue ! 👋</Text>
          <Text style={styles.subtitle}>Continuez votre apprentissage</Text>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity
            style={[styles.actionCard, { backgroundColor: colors.primary }]}
            onPress={() => router.push('/(tabs)/courses')}
          >
            <IconSymbol name="book.fill" size={32} color="#ffffff" />
            <Text style={styles.actionTitle}>Cours</Text>
            <Text style={styles.actionSubtitle}>Mathématiques & Physique</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionCard, { backgroundColor: colors.secondary }]}
            onPress={() => router.push('/(tabs)/exercises')}
          >
            <IconSymbol name="pencil" size={32} color="#ffffff" />
            <Text style={styles.actionTitle}>Exercices</Text>
            <Text style={styles.actionSubtitle}>Pratiquez vos compétences</Text>
          </TouchableOpacity>
        </View>

        {topSkills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Vos compétences</Text>
            {topSkills.map((skill) => (
              <View key={skill.id} style={commonStyles.card}>
                <View style={styles.skillHeader}>
                  <View>
                    <Text style={styles.skillName}>{skill.name}</Text>
                    <Text style={styles.skillSubject}>
                      {skill.subject === 'math' ? 'Mathématiques' : 'Physique'}
                    </Text>
                  </View>
                  <View style={styles.progressCircle}>
                    <Text style={styles.progressText}>{Math.round(skill.progress)}%</Text>
                  </View>
                </View>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${skill.progress}%`, backgroundColor: colors.accent }
                    ]}
                  />
                </View>
                <Text style={styles.skillProgress}>
                  {skill.exercisesCompleted} / {skill.totalExercises} exercices
                </Text>
              </View>
            ))}
          </View>
        )}

        {recentHistory.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Récemment consulté</Text>
              <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
                <Text style={styles.seeAllText}>Tout voir</Text>
              </TouchableOpacity>
            </View>
            {recentHistory.map((item) => (
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
                      {new Date(item.timestamp).toLocaleDateString('fr-FR')}
                    </Text>
                  </View>
                  {item.completed && (
                    <View style={styles.completedBadge}>
                      <IconSymbol name="checkmark.circle.fill" size={20} color={colors.success} />
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}

        {recentHistory.length === 0 && topSkills.length === 0 && (
          <View style={styles.emptyState}>
            <IconSymbol name="book.fill" size={64} color={colors.textSecondary} />
            <Text style={styles.emptyTitle}>Commencez votre apprentissage</Text>
            <Text style={styles.emptyText}>
              Explorez les cours et exercices pour développer vos compétences en mathématiques et physique.
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
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  contentContainerWithTabBar: {
    paddingBottom: 100,
  },
  header: {
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  actionCard: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 12,
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.8)',
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
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  skillSubject: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.background,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  skillProgress: {
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
  completedBadge: {
    marginLeft: 8,
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
