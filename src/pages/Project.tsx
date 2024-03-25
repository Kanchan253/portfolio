import React from 'react'
import Layout from '../layout/Layout'
import { useParams } from 'react-router-dom'
const Project = () => {
    const { projectName } = useParams()
  return (
    <Layout>
        <h1>{projectName}</h1>
    <div>Project</div>
    </Layout>
  )
}

export default Project