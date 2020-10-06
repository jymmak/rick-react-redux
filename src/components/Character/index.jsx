import React, { Component } from 'react'

class Character extends Component {
  render() {
    return (
      <div className='card_content'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <div className='card'>
                <img src={this.props.image} alt={this.props.name} />
                <div className='card-body'>
                  <h5 className='card-title'>{this.props.name}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Character
