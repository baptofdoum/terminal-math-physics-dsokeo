
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { courses } from '@/data/courses';
import { useStorage } from '@/hooks/useStorage';

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { addToHistory, markCourseCompleted, completedCourses } = useStorage();
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set());

  const course = courses.find(c => c.id === id);
  const isCompleted = course ? completedCourses.has(course.id) : false;

  // Move useEffect before any conditional returns
  useEffect(() => {
    if (course) {
      addToHistory({
        type: 'course',
        itemId: course.id,
        title: course.title,
        subject: course.subject,
        completed: isCompleted,
      });
    }
  }, [course, isCompleted, addToHistory]);

  if (!course) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Cours non trouvé</Text>
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

  const toggleChapter = (chapterId: string) => {
    const newExpanded = new Set(expandedChapters);
    if (newExpanded.has(chapterId)) {
      newExpanded.delete(chapterId);
    } else {
      newExpanded.add(chapterId);
    }
    setExpandedChapters(newExpanded);
  };

  const handleMarkComplete = () => {
    markCourseCompleted(course.id);
    addToHistory({
      type: 'course',
      itemId: course.id,
      title: course.title,
      subject: course.subject,
      completed: true,
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen
        options={{
          title: course.title,
          headerBackTitle: 'Retour',
        }}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.card}>
          <View style={styles.courseHeader}>
            <View style={[
              styles.subjectBadge,
              { backgroundColor: course.subject === 'math' ? colors.primary : colors.secondary }
            ]}>
              <IconSymbol
                name={course.subject === 'math' ? 'function' : 'bolt.fill'}
                size={20}
                color="#ffffff"
              />
              <Text style={styles.subjectText}>
                {course.subject === 'math' ? 'Mathématiques' : 'Physique'}
              </Text>
            </View>
            {isCompleted && (
              <View style={styles.completedBadge}>
                <IconSymbol name="checkmark.circle.fill" size={24} color={colors.success} />
                <Text style={styles.completedText}>Complété</Text>
              </View>
            )}
          </View>

          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseDescription}>{course.description}</Text>

          <View style={styles.courseInfo}>
            <View style={styles.infoItem}>
              <IconSymbol name="clock" size={18} color={colors.textSecondary} />
              <Text style={styles.infoText}>{course.duration}</Text>
            </View>
            <View style={styles.infoItem}>
              <IconSymbol name="list.bullet" size={18} color={colors.textSecondary} />
              <Text style={styles.infoText}>
                {course.chapters.length} chapitre{course.chapters.length > 1 ? 's' : ''}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.chaptersSection}>
          <Text style={styles.sectionTitle}>Chapitres</Text>
          {course.chapters.map((chapter, index) => {
            const isExpanded = expandedChapters.has(chapter.id);
            
            return (
              <View key={chapter.id} style={commonStyles.card}>
                <TouchableOpacity
                  style={styles.chapterHeader}
                  onPress={() => toggleChapter(chapter.id)}
                >
                  <View style={styles.chapterNumber}>
                    <Text style={styles.chapterNumberText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.chapterTitle}>{chapter.title}</Text>
                  <IconSymbol
                    name={isExpanded ? 'chevron.up' : 'chevron.down'}
                    size={20}
                    color={colors.textSecondary}
                  />
                </TouchableOpacity>

                {isExpanded && (
                  <View style={styles.chapterContent}>
                    <Text style={styles.chapterText}>{chapter.content}</Text>
                    
                    {chapter.examples && chapter.examples.length > 0 && (
                      <View style={styles.examplesSection}>
                        <Text style={styles.examplesTitle}>Exemples :</Text>
                        {chapter.examples.map((example, idx) => (
                          <View key={idx} style={styles.exampleItem}>
                            <Text style={styles.exampleBullet}>•</Text>
                            <Text style={styles.exampleText}>{example}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {!isCompleted && (
          <TouchableOpacity
            style={[commonStyles.button, styles.completeButton]}
            onPress={handleMarkComplete}
          >
            <IconSymbol name="checkmark.circle" size={20} color="#ffffff" />
            <Text style={styles.buttonText}>Marquer comme complété</Text>
          </TouchableOpacity>
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
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  completedText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.success,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 16,
  },
  courseInfo: {
    flexDirection: 'row',
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  chaptersSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  chapterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chapterNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chapterNumberText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  chapterTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  chapterContent: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  chapterText: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 24,
  },
  examplesSection: {
    marginTop: 16,
    padding: 12,
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  examplesTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  exampleItem: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingLeft: 8,
  },
  exampleBullet: {
    fontSize: 15,
    color: colors.accent,
    marginRight: 8,
    fontWeight: '700',
  },
  exampleText: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  completeButton: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 24,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
