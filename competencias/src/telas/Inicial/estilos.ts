import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export const Conteiner = styled.View`
  flex: 1;
  background-color: #000;
`

export const Titulo = styled.Text`
  background-color: #660708;
  color: #F5F3F4;
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  text-align: center;
`

export const Subtitulo = styled.Text`
  background-color: #660708;
  color: #F7788D;
  font-size: 18px;
  font-weight: 400;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  text-align: center;
`

export const ConteinerAdicionar = styled.View`
      width: 100%;
      flex-direction: row;
      margin-top: 24px;
      margin-bottom: 24px;
`

export const Campo = styled.TextInput.attrs({
      placeholder: 'Informe a competência',
      placeholderTextColor: '#0565B3'
})`
      flex: 1;
      height: 56px;
      background-color: #00193A;
      color: #fff;
      border-radius: 5px;
      padding: 16px;
      font-size: 18px;
      margin-right: 12px;
      border-width: 2px;
      border-color: #034780;
`

export const Botao = styled.TouchableOpacity`
      width: 56px;
      height: 56px;
      background-color: #034780;
      border-radius: 5px;
      align-items: center;
      justify-content: center;
`

export const ListaVazia = styled.Text`
      color: #F7788D;
      font-size: 16px;
      text-align: center;
`

export const Lista = styled.FlatList``

export const Icone = styled(AntDesign)`
      color: #F5F3F4;
      font-size: 28px;
`
