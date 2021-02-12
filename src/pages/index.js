import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Header from '../components/Header'
import List from '../components/List'
import NewItem from '../components/NewItem'
import sampleItems from '../data/sampleItems'
import sampleCategories from '../data/sampleCategories'

const localList = JSON.parse(localStorage.getItem('items')) || sampleItems
const localCategories = JSON.parse(localStorage.getItem('categories')) || sampleCategories

function IndexPage() {
  const [list, setList] = useState(localList)
  const [categories, setCategories] = useState(localCategories)

  const addItem = (key, title) => {
    setList([...list, {
      key: key,
      title: title,
      done: false,
      category: 1,
    }])
  }

  const markAsDone = (key) => {
    const itemIndex = list.findIndex(item => item.key === key)
    const item = list[itemIndex]
    item.done = !item.done
    setList([...list])
  }

  const removeItem = (key) => {
    setList(list.filter(item => item.key !== key))
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(list))
    localStorage.setItem('categories', JSON.stringify(categories))
  })

  return (
    <Layout>
      <SEO title="My Tasks" />
      <Header>To-Do</Header>
      <List currentList={list} markAsDone={markAsDone} removeItem={removeItem} categories={categories} />
      <NewItem currentList={list} addItem={addItem} />
    </Layout>
  )
}

export default IndexPage
