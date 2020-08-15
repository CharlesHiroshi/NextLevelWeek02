import React, { useState, useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'

function TeacherList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  const [teachers, setTeachers] = useState([])

  const [favorites, setFavorites] = useState<number[]>([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => { return teacher.id })
        setFavorites(favoritedTeachersIds)
      }
    })
  }

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible)
  }

  async function handleFiltersSubmit() {
    loadFavorites()
    const response = await api.get('classes', {
      params: { subject, week_day, time }
    })
    setIsFilterVisible(false)
    setTeachers(response.data)
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}><Feather name="filter" size={20} color="#FFF" /></BorderlessButton>
      )}>
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput style={styles.input} value={subject} onChangeText={text => setSubject(text)} placeholder="Matéria" placeholderTextColor="#C1BCCC" />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput style={styles.input} value={week_day} onChangeText={text => setWeekDay(text)} placeholder="Dia da Semana" placeholderTextColor="#C1BCCC" />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput style={styles.input} value={time} onChangeText={text => setTime(text)} placeholder="Horário" placeholderTextColor="#C1BCCC" />
              </View>
            </View>
            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView style={styles.teacherList} contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}>
        {teachers.map((teacher: Teacher) => { return <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)} /> })}
      </ScrollView>
    </View>
  )
}

export default TeacherList