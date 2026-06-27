import { useState } from 'react';
import LeadGenHero from '../components/LeadGenHero';
import LeadGenSolution from '../components/LeadGenSolution';
import LeadGenWhatweDo from '../components/LeadGenWhatweDo';
import LeadGenHowitWorks from '../components/LeadGenHowitWorks';
import LeadGenIndustries from '../components/LeadGenIndustries';
import LeadGenWhatMakesDifferent from '../components/LeadGenWhatMakesDifferent';
import LeadGenTrustedClient from '../components/LeadGenTrustedClient';
import LeadGenFrequentlyaskedQuestions from '../components/LeadGenFrequentlyaskedQuestions';
import LeadGenClientTestomonial from '../components/LeadGenClientTestomonial';
import LeadGenGrowth from '../components/LeadGenGrowth';
import LeadGenBottomSection from '../components/LeadGenBottomSection';
import Navbar from '../components/Navbar';

const LeadGeneration = () => {
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    //Newesttt
    return (
        <div className="w-full bg-white">
            <Navbar className="-z-10" setIsDemoOpen={setIsDemoOpen} isDemoOpen={isDemoOpen} />
            <LeadGenHero setIsDemoOpen={setIsDemoOpen} isDemoOpen={isDemoOpen} />
            <div id="solution">
                <LeadGenSolution />
            </div>
            <div id="growth">
                <LeadGenGrowth />
            </div>
            <div id="howitworks">
                <LeadGenHowitWorks />
            </div>
            <div id="whatwedo">
                <LeadGenWhatweDo />
            </div>
            <LeadGenWhatMakesDifferent />
            <div id="industries">
                <LeadGenIndustries />
            </div>
            <LeadGenTrustedClient />
            <LeadGenClientTestomonial />
            <LeadGenFrequentlyaskedQuestions />
            <LeadGenBottomSection />

        </div>
    );
};

export default LeadGeneration;
