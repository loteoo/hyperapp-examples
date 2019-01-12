import {h} from 'hyperapp'

import './style.css'

// Components
import {Search} from '../Search'
import {PillButton} from '../../theme/PillButton'
import {Github} from '../../theme/Icons'

// View
export const Header = ({state}) => (
  <header>
    <nav>
      <a href="https://github.com/loteoo/hyperapp-examples" target="_blank" title="Source code"><Github /></a>
    </nav>
    <h1>Hyperapp real-world examples</h1>
    <h2>A curated list of live Hyperapp projects</h2>
    <Search search={state.search} />
    <div class="actions">
      <PillButton href="#projects" big>See projects</PillButton>
      <PillButton href="#submit" big green>Share a project</PillButton>
    </div>
  </header>
)
