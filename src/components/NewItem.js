import React, { useState } from 'react'
import styled from 'styled-components'
import uniqid from 'uniqid'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
`

const Label = styled.span`
  display: block;
`

const StyledFormControl = styled(FormControl)`
  border-radius: 0;  
`

const StyledButton = styled(Button)`
  border-radius: 0;
`

const NewItem = ({ currentList, addItem }) => {
  const [title, setTitle] = useState('')

  const handleKeyPress = e => {
    (e.key === 'Enter') && handleSubmit()
  }

  const handleSubmit = () => {
    if (title === '') return
    const key = uniqid()
    addItem(key, title)
    setTitle('')
    document.querySelector('input[name="newTaskTitle"]').value = ''
  }

  return (
    <Wrapper>
      <InputGroup>
        <StyledFormControl
          name="newTaskTitle"
          placeholder="New task title"
          aria-label="New task title"
          onChange={e => setTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <InputGroup.Append>
          <StyledButton variant="primary"
            onClick={handleSubmit}>Add task</StyledButton>
        </InputGroup.Append>
      </InputGroup>
    </Wrapper>
  )
}

export default NewItem
