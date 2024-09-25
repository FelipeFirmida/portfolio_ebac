import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil distinctio
      iure dolor quibusdam dolorum itaque, incidunt quae obcaecati cupiditate
      iusto recusandae natus sapiente, fugit, et quaerat ratione voluptatum
      dolore? Fugit.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=felipefirmida&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=felipefirmida&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
