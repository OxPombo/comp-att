import { useState } from 'react';
import { Alert } from 'react-native';
import { Conhecimento } from '../../compenentes/Conhecimento';
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

import { 
  Conteiner,
  Titulo,
  Subtitulo,
  ConteinerAdicionar,
  Campo,
  Botao,
  Icone,
  Lista,
  ListaVazia 
} from './estilos'

interface tipoCompetencia {
  codigo: string
  descricao: string
  nivel?: string
}

export function Inicial() {

  const [competencias, setCompetencias] = useState<tipoCompetencia[]>([])
  const [descricao, setDescricao] = useState<string>()

  function adicionarCompetencia(){

    const novaCompetencia : tipoCompetencia = {
      codigo: String(uuid()), 
      descricao: descricao
    }

    // O find() pesquisa a descricão nas competencias já armazenadas
    // Se não encontrar, ou seja, ainda não existe, retorna undefined (tipo obtido pela função typeof())
    if(typeof(competencias.find( 
      competenciaArmazenada => competenciaArmazenada.descricao === novaCompetencia.descricao 
    )) !== "undefined"){
      setDescricao('')
      return Alert.alert('Duplicidade', 'Competência já informada!')
    }

    setCompetencias([...competencias, novaCompetencia])
    setDescricao('')

    console.log(novaCompetencia)
  }

  function excluirCompetencia(competencia : tipoCompetencia){

    Alert.alert('Confirmação', `Confirma exclusão de ${competencia.descricao}?`, [ 
      {
        text: 'Sim',
        onPress: () => setCompetencias(
          competencias.filter( competenciaArmazenada => competenciaArmazenada.codigo !== competencia.codigo)
        )
      }, 
      {
        text: 'Não'
      } 
    ])

  }

  return (
    <Conteiner>
      <Titulo>Competências</Titulo>
      <Subtitulo>Seus conhecimentos</Subtitulo>

      <ConteinerAdicionar>
        <Campo 
          onChangeText={setDescricao}
          value={descricao}
        />

        <Botao onPress={adicionarCompetencia}>
          <Icone name="check" />
        </Botao>
      </ConteinerAdicionar>

      <Lista 
        data={competencias}
        keyExtractor={ item => item.codigo }
        renderItem={ ({ item }) => (
          <Conhecimento 
            nome={ item.descricao }
            excluir={ () => excluirCompetencia(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={ () => (
          <ListaVazia>Nenhuma competência informada</ListaVazia>
        )}
      />
    </Conteiner>
  );
}