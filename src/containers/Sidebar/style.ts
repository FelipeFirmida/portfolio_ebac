import styled from 'styled-components'
import { P } from '../Paragrafo/style'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  font-size: 10px;
  padding: 8px;
  border-radius: 12px;
  font-weight: bold;
  color: #eee;
  background-color: #282a35;
  cursor: pointer;
  border: none;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
