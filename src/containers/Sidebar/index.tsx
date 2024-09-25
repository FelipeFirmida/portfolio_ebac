import Avatar from '../Avatar'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './style'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Felipe Firmida</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        felipefirmida
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Full-Stack
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
