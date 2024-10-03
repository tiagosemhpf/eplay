import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam maiores
      expedita enim, dolores similique molestias tempora, accusantium nobis
      reiciendis repellat temporibus iure deleniti. Ad unde maiores, id
      perferendis laboriosam natus.
    </Descricao>
  </Card>
)

export default Product
