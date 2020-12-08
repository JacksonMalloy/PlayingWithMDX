import React from 'react'
import Layout from '../Layout'
import { About } from '../components/about'
import { Drawer } from '../components/drawer/drawer'
import Navigation from '../components/navigation'
import { Grid } from '../components/grid'

const IndexPage = () => {
  return (
    <Layout viewportLimit="1920px">
      <Drawer />
      <Grid>
        <About />
        <Navigation />
      </Grid>
    </Layout>
  )
}

export default IndexPage
