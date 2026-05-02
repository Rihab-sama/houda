import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProgramHero from '../sections/program-details/ProgramHero';
import ProgramCurriculum from '../sections/program-details/ProgramCurriculum';
import Testimonials from '../sections/home/Testimonials';
import ProgramCTA from '../sections/program-details/ProgramCTA';

import programsData from '../data/programs.json';
import coursesData from '../data/courses.json';

const ProgramDetails = () => {
    const { slug } = useParams();
    
    // Combiner et chercher l'item correspondant
    const allItems = [...programsData, ...coursesData];
    const data = allItems.find(item => item.slug === slug);

    // Défilement vers le haut au chargement
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!data) {
        return <div style={{ padding: '200px', textAlign: 'center', color: 'var(--purple-deep)' }}>برنامج غير موجود</div>;
    }

    return (
        <main className="program-details-page">
            <ProgramHero data={data.hero} />
            <ProgramCurriculum data={data.curriculum} />
            <Testimonials isCompact={true} />
            <ProgramCTA />
        </main>
    );
};

export default ProgramDetails;
