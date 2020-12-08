import React from 'react'
import Layout from '../Layout'
import { About } from '../components/about'
import { Drawer } from '../components/drawer/drawer'

const IndexPage = () => {
  return (
    <Layout viewportLimit="1920px">
      <About />
    </Layout>
  )
}

export default IndexPage
