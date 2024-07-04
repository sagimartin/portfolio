import React from 'react';

function ProjectDescription({ description }) {
    return description.split('\n').map((line, index) => (
        line.trim() === "" ? <br key={index} /> : <p key={index}>{line}</p>
    ));
}

export default ProjectDescription;