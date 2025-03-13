import React from 'react';
import '../globals.css';
import { Eb, Gc, Jp, Opg, Sb } from './projects/index';

interface ProjectsProps {
    // Define your component props here
}

const Projects: React.FC<ProjectsProps> = () => {
    // Component logic goes here

    return (
        <>
            <h1>
                Projects
            </h1>
            <div className="grid"  >
            <Gc/>
            <Opg/>
            <Jp/>
            <Eb/>
            <Sb/>
            </div>
        </>
    );
};

export default Projects;