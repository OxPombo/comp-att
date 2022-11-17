import { 
    ConteinerExcluir,
    Descricao,
    Botao,
    Icone 
} from './estilos'

export function Conhecimento({ nome, excluir }){
    return(
        <ConteinerExcluir>
            <Descricao>{nome}</Descricao>
            <Botao onPress={excluir}>
                <Icone name="delete" />
            </Botao>
        </ConteinerExcluir>
    )
}
