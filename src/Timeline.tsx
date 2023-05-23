import React from 'react';
import { languageContext, translations } from './language';
import AnimatedSvg from './AnimatedSvg';

const entries: {
  date: string;
  lv: string;
  en: string;
}[] = [
  {
    date: '2000.12.5',
    lv: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    en: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    date: '2000.12.5',
    lv: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    en: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    date: '2000.12.5',
    lv: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    en: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    date: '2000.12.5',
    lv: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    en: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    date: '2000.12.5',
    lv: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    en: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
];

const Timeline = () => {
  const { language } = React.useContext(languageContext);
  return (
    <section className="timeline" id="timeline">
      <AnimatedSvg
        style={{
          width: '40%',
          aspectRatio: 1,
          maxWidth: '300px',
          marginBottom: '3.5rem',
        }}
      >
        <svg viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="clock">
            <circle id="Ellipse 5" cx="72.5" cy="72.5" r="72" />
            <rect id="Rectangle 34" x="71.5" y="2.5" width="1" height="14" />
            <rect id="Rectangle 46" x="71.5" y="26.5" width="1" height="46" />
            <rect id="Rectangle 47" x="97.3013" y="88.2614" width="1" height="30.0394" transform="rotate(123.474 97.3013 88.2614)" />
            <rect id="Rectangle 35" x="106.549" y="133.807" width="1" height="14" transform="rotate(150 106.549 133.807)" />
            <rect id="Rectangle 36" x="132.307" y="109.683" width="1" height="14" transform="rotate(120 132.307 109.683)" />
            <rect id="Rectangle 37" x="37.549" y="132.307" width="1" height="14" transform="rotate(-150 37.549 132.307)" />
            <rect id="Rectangle 38" x="25.8073" y="102.683" width="1" height="14" transform="rotate(60 25.8073 102.683)" />
            <rect id="Rectangle 39" x="13.683" y="34.549" width="1" height="14" transform="rotate(-60 13.683 34.549)" />
            <rect id="Rectangle 40" x="36.683" y="12.183" width="1" height="14" transform="rotate(-30 36.683 12.183)" />
            <rect id="Rectangle 41" x="131.807" y="34.683" width="1" height="14" transform="rotate(60 131.807 34.683)" />
            <rect id="Rectangle 42" x="105.683" y="10.683" width="1" height="14" transform="rotate(30 105.683 10.683)" />
            <rect id="Rectangle 43" x="2.5" y="73.5" width="1" height="15" transform="rotate(-90 2.5 73.5)" />
            <rect id="Rectangle 44" x="142.5" y="72.5" width="1" height="14" transform="rotate(90 142.5 72.5)" />
            <rect id="Rectangle 45" x="71.5" y="128.5" width="1" height="14" />
          </g>
        </svg>
      </AnimatedSvg>
      <h1>{translations[language].timeline}</h1>
      <div className="timelineEntries">
        {entries.map((entry, idx) => {
          return (
            <div className={`row ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
              <div>{entry[language]}</div>
              <div className="date">
                <span>{entry.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
