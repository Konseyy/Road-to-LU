import React from 'react';

const entries = [
  [['2000.12.5'], 'lorem ipsum dolor sit amet consectetur adipiscing elit'],
  [
    ['2000.12.5'],
    'lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit',
  ],
  [['2000.12.5'], 'lorem ipsum dolor sit amet consectetur adipiscing elit'],
  [['2000.12.5'], 'lorem ipsum dolor sit amet consectetur adipiscing elit'],
  [['2000.12.5'], 'lorem ipsum dolor sit amet consectetur adipiscing elit'],
];

const Timeline = () => {
  return (
    <section className="timeline" id="timeline">
      <h1>Timeline</h1>
      <div className="timelineEntries">
        {entries.map((entry, idx) => {
          return (
            <div className={`row ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
              <div>{entry[1]}</div>
              <div className="date">
                <span>{entry[0]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
