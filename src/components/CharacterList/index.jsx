import React from 'react'
import Character from '../Character'
import { connect } from 'react-redux'


const CharacterList = ({ characters }) => (
    <div className=''>
      <h3>Rick and Morty</h3>
      {characters.map(character =>
        <Character
          key={character.id}
          name={character.name}
          image={character.image}
        />
      )}
    </div>
  )
  
  const mapStateToProps = state => {
    return {
      characters: state.characters
    }
  }
  
  export default connect(mapStateToProps)(CharacterList)
  