import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/7002287?s=460&u=d489a70c068e635a55935c8d210ab1f9fa6365e8&v=4' }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Charles Hiroshi</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>I am a systems analyst, enthusiastic about new technologies.{'\n'}{'\n'} I really like Javascript and Python. My skills are Node, Django, React, React Native.</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>Preço/Hora {'   '}<Text style={styles.priceValue}>¥1800</Text></Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>{/* <Image source={heartOutlineIcon} /> */}<Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}><Image source={whatsappIcon} /><Text style={styles.contactButtonText}>Entrar em contato</Text></RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem