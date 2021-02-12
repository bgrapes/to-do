import React from 'react'
import styled from 'styled-components'
import { CheckCircle, XCircle } from '@styled-icons/bootstrap'

const Item = styled.div`
  display: flex;
  margin: .2rem 0rem;
  padding: .5rem 0rem;
  align-items: center;
  color: #354f52;
`

const ItemTitle = styled.span`
  display: block;
  padding-left: 1rem;

  &.done {
    opacity: .6;
    text-decoration: line-through;
    text-decoration-color: #000;
  }
`

const Actions = styled.div`
  display: flex;
  margin-left: .5rem;
`

const Button = styled.button`
  display: flex;
  background: none;
  color: inherit;
  opacity: .5;
  border: none;
  padding: .3rem;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transition: 0.3s;

  &:hover {
    opacity: .8;
  }
`

const Checkbox = styled.input`
  margin: 0rem;
`

const ItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

const List = ({ item, categories, markAsDone, removeItem }) => {
  return (
    <Item
      key={item.key}
      categoryColor={
        categories.filter(category => {
          return category.key === item.category
        })[0].color
      }
    >
      <Checkbox
        className="form-check-input"
        type="checkbox"
        value=""
        aria-label="Mark as done"
        onChange={() => markAsDone(item.key)}
        checked={item.done}
      />
      <ItemGroup>
        <ItemTitle className={item.done && 'done'}>{item.title}</ItemTitle>
        <Actions>
          <Button onClick={() => removeItem(item.key)}><XCircle size="20" /></Button>
        </Actions>
      </ItemGroup>
    </Item>
  )
}

export default List