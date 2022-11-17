import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const ConteinerExcluir = styled.View`
        width: 100%;
        flex-direction: row;
        margin-bottom: 12px;
`

export const Descricao = styled.Text`
        flex: 1;
        height: 56px;
        background-color: #262626;
        color: #fff;
        border-radius: 5px;
        padding: 16px;
        font-size: 18px;
        margin-right: 12px;
`

export const Botao = styled.TouchableOpacity`
        width: 56px;
        height: 56px;
        background-color: #7A0213;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
`

export const Icone = styled(MaterialIcons)`
        color: #F5F3F4;
        font-size: 32px;
`