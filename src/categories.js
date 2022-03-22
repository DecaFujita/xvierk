import ImgHero from "./components/ImgHero";
import ImgExplorer from './components/ImgExplorer';
import ImgNomad from './components/ImgNomad';
import ImgStranger from './components/ImgStranger';
import ImgHostile from './components/ImgHostile';

const categories = [
    {
        id: 'cat1',
        title: 'The Hero',
        body: 'Congrats! Without question your brand has taken huge steps towards the Human Centricity. But remember, this a journey not a destination: keep exploring how to optimize Human Centricity and integrate new data sources and use cases.',
        img: ImgHero
    },
    {   
        id: 'cat2',
        title: 'The Explorer',
        body: 'Wow! Your company is in the correct way to become Human Centric. Stay focus on profitability with some relevant use cases and don’t forget to apply the human touch in every touch-point, product or service. Take advantage of test & learn and agile methodologies. Pillars such as Innovation and CX are now more important than any other phase before.',
        img: ImgExplorer
    },
    {   
        id: 'cat3',
        title: 'The Nomad',
        body: 'Well done! Your company has been made some initial efforts to reach Human Centricity. Now the focus should be on avoiding silos and work new integrations to make the project more holistic. Well-tuned work methodologies, agile processes, performance measurement and internal communication is key on this phase.',
        img: ImgNomad
    },
    {   id: 'cat4',
        title:'Stranger',
        body: 'Your journey has already started and now is time to create the core of the project: make more holistic MarTech strategies, set the fundamentals of modern end-to-end relationships and insights discovery supported by consistent measurement plans, create the internal engagement plan, extend a new Customer obsession mindset throughout the company and humanize every detail starting from the most basic use cases.',
        img: ImgStranger
    },
    {   
        id: 'cat5',
        title:'Hostile',
        body: 'Your brand is far away of being a human centric company but never It is too late to start. A first assessment is highly recommended to define the Human Centric vision that will be our North start for the following years.',
        img: ImgHostile
    },
];

export default categories;
