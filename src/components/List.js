import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const List = ({ currentList, categories, markAsDone, removeItem }) => {
  return (
    <ListWrapper>
      {currentList.map(item => {
        return (
          <Item
            key={item.key}
            markAsDone={markAsDone}
            removeItem={removeItem}
            item={item}
            categories={categories}
          />
        )}
      )}
    </ListWrapper>
  )
}

export default List