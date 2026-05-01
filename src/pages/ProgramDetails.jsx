import React, { useEffect } from 'react';
import ProgramHero from '../sections/program-details/ProgramHero';
import ProgramCurriculum from '../sections/program-details/ProgramCurriculum';
import ProgramCTA from '../sections/program-details/ProgramCTA';

const ProgramDetails = () => {
    // Défilement vers le haut au chargement
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="program-details-page">
            <ProgramHero />
            <ProgramCurriculum />
            <ProgramCTA />
        </main>
    );
};

export default ProgramDetails;
