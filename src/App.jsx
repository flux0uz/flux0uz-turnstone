import React from 'react'
import Turnstone from './lib'
import { fruits } from './data'

const styles = {
  highlightedItem: 'highlightedItem'
}

const App = () => {
  return (
    <>
      <label htmlFor="autocomplete">Search:</label>&nbsp;
      <Turnstone
        autoFocus={true}
        clearButton={true}
        data={fruits}
        dataSearchType={'startswith'}
        debounceWait={0}
        id={'autocomplete'}
        itemGroupsAreImmutable={true}
        maxItems={10}
        noItemsMessage={'No matching fruit found'}
        placeholder={'Type something fruity'}
        styles={styles}
      />
    </>
  )
}

export default App
