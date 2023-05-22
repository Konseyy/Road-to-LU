import react from './assets/react.svg';

interface Section {
  id: string;
  title: string;
  content: JSX.Element;
  image: string;
}
export const sections: Section[] = [
  {
    id: 'aboutme',
    title: 'About Me',
    content: (
      <>
        <p>
          I am a software engineer with a passion for building things. I have a background in computer science and have worked in a variety
          of industries including finance, healthcare, and education.
        </p>
        <p>
          I am currently working as a software engineer at a startup called <a href="https://www.heydoctor.com/">HeyDoctor</a> where I am
          building a telemedicine platform that allows patients to connect with doctors online.
        </p>
      </>
    ),

    image: react,
  },
  {
    id: 'aboutme2',
    title: 'About Me 2',
    content: (
      <>
        <p>
          I am a software engineer with a passion for building things. I have a background in computer science and have worked in a variety
          of industries including finance, healthcare, and education.
        </p>
        <p>
          I am currently working as a software engineer at a startup called <a href="https://www.heydoctor.com/">HeyDoctor</a> where I am
          building a telemedicine platform that allows patients to connect with doctors online.
        </p>
      </>
    ),
    image: react,
  },
  {
    id: 'aboutme3',
    title: 'About Me 3',
    content: (
      <>
        <p>
          I am a software engineer with a passion for building things. I have a background in computer science and have worked in a variety
          of industries including finance, healthcare, and education.
        </p>
        <p>
          I am currently working as a software engineer at a startup called <a href="https://www.heydoctor.com/">HeyDoctor</a> where I am
          building a telemedicine platform that allows patients to connect with doctors online.
        </p>
      </>
    ),
    image: react,
  },
  {
    id: 'aboutme4',
    title: 'About Me 4',
    content: (
      <>
        <p>
          I am a software engineer with a passion for building things. I have a background in computer science and have worked in a variety
          of industries including finance, healthcare, and education.
        </p>
        <p>
          I am currently working as a software engineer at a startup called <a href="https://www.heydoctor.com/">HeyDoctor</a> where I am
          building a telemedicine platform that allows patients to connect with doctors online.
        </p>
      </>
    ),
    image: react,
  },
];
