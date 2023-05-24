import React from 'react';
import { languageContext, translations } from './language';
import AnimatedSvg from './AnimatedSvg';

const entries: {
  date: string;
  lv: string;
  en: string;
}[] = [
  {
    date: '2009',
    lv: 'Šajā dzīves posmā es vēl nezināju, ko vēlos darīt nākotnē, biju tikai sīkais, kuram patika spēlēt videospēles un skatīties multfilmas. Taču es biju arī tāds, kuram patika apgūt jaunas lietas, man vienmēr interesēja mēģināt izprast, kā lietas darbojas, šajā vecumā es pirmo reizi saskāros ar programmēšanu.',
    en: "At this point in my life I was still a kid, I didn't know what I wanted to do in life, I was just a kid who liked to play video games and watch cartoons. But I was also a kid who liked to learn new things, I was always curious about how things work, this was when I had my first encounter with programming.",
  },
  {
    date: '2013',
    lv: 'Kopā ar draugiem spēlējot populāro spēli "Minecraft", es vēlējos izveidot savu serveri. Lai to izdarītu, man bija jāapgūst dažas tīkla un skriptu veidošanas pamatprasmes, ko ar grutībām iemācījos. Man veiksmīgi izdevās izveidot savu serveri, tas bija liels sasniegums. Šī bija pirmā reize, kad es jutu, ka varu paveikt kaut ko praktisku ar šo savu jaunatrasto interesi.',
    en: 'While playing the popular game "Minecraft" with some friends, I wanted to make my own server. This required me to learn some basic networking and scripting skills, which I did. I managed to make my own server and I was very proud of myself. This was the first time I felt like I could do something practical with this new interest of mine.',
  },
  {
    date: '2015',
    lv: 'Es ieguvu savu pirmo personālo datoru un beidzot man bija iespēja to jaukt un salikt kopā cik vien gribu, šo iespēju izmantoju vairākas reizes. Tā rezultātā es daudz iemācījos par datora komponentēm, un to darbību, kā arī ieguvu vispārēju interesi par citiem IT aspektiem ko pirms tam nepazinu.',
    en: 'I got my first personal computer, and finally had the opportunity of dissasembling and reassembling it, which I did multiple times. I also started learning about the hardware that makes up the system and how it works, getting interested in the other aspects of IT in the process.',
  },
  {
    date: '2018',
    lv: 'Vasarā pirms vidusskolas sākšanas man nebija daudz ko darīt. Nolēmu mēģināt iziet C++ kursu, ko atradu internetā, pabeidzu to dažu nedēļu laikā un jutos tā, ka būtu atklājis jaunu hobiju.',
    en: "The summer before starting high school I didn't have much to do. I decided to take on a C++ course that I found online, finished the course in a few weeks and felt like I discovered a new hobby.",
  },
  {
    date: '2020',
    lv: 'Pēc vidusskolā pabeigtā programmēšanas pamatkursa izpētīju citus iespējamos karjeras virzienus, līdz visbeidzot nolēmu iestāties Latvijas Universitātes Datorzinātnes programmā. Šis priekš manis bija liels lēmums, jo pirms tam es nekad pat īsti nebiju apsvēris iespēju pārcelties no savas pilsētas citur, lai iegūtu augstāko izglītību.',
    en: 'After taking a basic programming course in high school and exploring other potential career paths, I decided to enroll in the Computer Science program at the University of Latvia. This was a big decision for me as before I never even really considered moving out of my home town for higher education.',
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
