import React from 'react';

export default ({ attributes, cb, blocked }) => {


  return Object.keys(attributes).map((attr, i) => {
    if (blocked.includes(attr)) { return null}
    
    if ( typeof attributes[attr] === 'object') {
      // attributes are nested
      return Object.keys(attributes[attr]).map((subAttr, i) => {

        return (
          <li key={`command${i}`}>
          <button onClick={() => cb(subAttr, + 1, attr)}>
            { subAttr } +
          </button>
          <button onClick={() => cb(subAttr, - 1, attr)}>
            { subAttr } -
          </button>
        </li>
      )
      })
    }

    return (
      <li key={`command${i}`}>
        <button onClick={() => cb(attr, + 1)}>
          { attr } +
        </button>
        <button onClick={() => cb(attr, - 1)}>
          { attr } -
        </button>
      </li>
    )
  })
}