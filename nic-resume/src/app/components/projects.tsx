import React from 'react';
import '../globals.css';
import { Jp } from './projects/index';

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
            <Jp/>
            
            </div>
        </>
    );
};

export default Projects;