import React from "react";

const Cv = () => {
  const items = [
    {
      text: "Content Creator & Social Media Manager at Asian Football Confederation",
      time: "Jul 2018 — Present",
    },
    {
      text: "Sport Photographer at DeFodi Images - FIFA Women's World Cup 2023",
      time: "Jul 2023 — Aug 2023",
    },
    {
      text: "First Digital Content Creator / FIFA World Cup Qatar 2022 at Host Broadcast Services (HBS)",
      time: "Nov 2022 — Dec 2022",
    },
    {
      text: "Photo Editor & Photographer at Football Bartar TV Show",
      time: "Jan 2019 — Nov 2021",
    },
    {
      text: "Photo Editor and Photographer at Gol Daily Newspaper",
      time: "Nov 2018 — Dec 2019",
    },
    {
      text: "Photojournalist at Hamshahri Daily Newspaper",
      time: "Nov 2014 — Nov 2018",
    },
  ];

  return (
    <section className="cv-history mt-16">
      <ul className="cv-list">
        {items.map((item, index) => {
          return (
            <li className="cv-list__item" key={`cv-item-${index}`}>
              <div className="container">
                <p className="cv-list__item-text text-lg">{item.text}</p>
                <span className="cv-list__item-time text-grey text-[16px]">{item.time}</span>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="container flex flex-col md:flex-row items-center gap-1.5 md:gap-5 mt-[120px] mb-[120px] md:mt-[43px] md:mb-0">
        <p className="font-instrument-serif text-3xl leading-10 text-black text-center md:text-left">
          To see my full work experience and tournaments I attended
        </p>
        <a
          className="donwload-cv font-instrument-serif text-3xl leading-10 text-dark-yellow decoration-1 underline underline-offset-[5px]"
          href="/cv.pdf"
          download="/cv.pdf"
        >
          Download my CV
        </a>
      </div>
    </section>
  );
};

export default Cv;
