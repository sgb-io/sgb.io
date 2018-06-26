import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Content from './components/Content'
import {
    about,
    skills,
    projects,
} from './content'

export const App = () => (
    <div className="container">
        <Header
            face={about.face}
            social={about.social}
        />
        <About
            intros={about.intros}
        />
        <Content
            skills={skills}
            projects={projects}
        />
    </div>
)

export default App
