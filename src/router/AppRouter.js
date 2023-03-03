import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { IndexScreen } from '../components/initialPages/IndexScreen'
import { Project1Screen } from '../components/initialPages/projects/Project1Screen'
import { Project2Screen } from '../components/initialPages/projects/Project2Screen'
import { Project3Screen } from '../components/initialPages/projects/Project3Screen'
import { Project4Screen } from '../components/initialPages/projects/Project4Screen'
import { Project5Screen } from '../components/initialPages/projects/Project5Screen'
import { Project6Screen } from '../components/initialPages/projects/Project6Screen'
import { Project7Screen } from '../components/initialPages/projects/Project7Screen'
import { ProjectsScreen } from '../components/initialPages/ProjectsScreen'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<IndexScreen />} />
        <Route path='proyectos' element={<ProjectsScreen />} />

        <Route path="proyecto1" element={<Project1Screen />} />
        <Route path="proyecto2" element={<Project2Screen />} />
        <Route path="proyecto3" element={<Project3Screen />} />
        <Route path="proyecto4" element={<Project4Screen />} />
        <Route path="proyecto5" element={<Project5Screen />} />
        <Route path="proyecto6" element={<Project6Screen />} />
        <Route path="proyecto7" element={<Project7Screen />} />
       
      </Routes>
    </>
  )
}
