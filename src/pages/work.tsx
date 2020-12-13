import { graphql } from 'gatsby'
import React from 'react'
import { Drawer } from '../components/drawer/drawer'
import { Grid } from '../components/grid'
import Navigation from '../components/navigation'
import { Work } from '../components/work'
import Layout from '../Layout'

const WorkPage = () => {
  return (
    <>
      <Layout viewportLimit="1920px">
        <Work />
      </Layout>
    </>
  )
}

export default WorkPage
