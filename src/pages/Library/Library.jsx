import React from "react";
import "./Library.css";

const libraryResources = [

  {
    title: "CUSAT Library Home",
    description: "Main portal for CUSAT library & digital library",
    url: "http://library.cusat.ac.in/",
  },

  {
    title: "CUSAT DCA Library",
    description: "DCA CUSAT library ",
    url: "https://dca.cusat.ac.in/Library/",
  },
  {
    title: "OPAC / Library Catalog",
    description: "Search for books, journals, etc.",
    url: "http://opac.cusat.ac.in/",
  },
  {
    title: "Union Catalog",
    description: "Combined catalog across CUSAT libraries",
    url: "https://unionopac.cusat.ac.in/",
  },
  {
    title: "CUSAT Library Page / Digital Library Info",
    description: "Library section of the CUSAT official site",
    url: "https://cusat.ac.in/library.php",
  },
  {
    title: "SMS Library & E-Gateway",
    description: "Remote login & e-resource gateway for SMS",
    url: "https://smscusatlib.weebly.com/",
  },
  {
    title: "School of Legal Studies Library",
    description: "Library for the Law School",
    url: "https://sls.cusat.ac.in/slslibrary",
  },
  {
    title: "Ship Technology Library (DST)",
    description: "Library for Naval Architecture / Ship Technology",
    url: "https://sites.google.com/view/shiptechnologylibrarycusat/home",
  },
  {
    title: "Instrumentation Dept Library Info",
    description: "Department library for Instrumentation (Blog / Info)",
    url: "https://doilibrary.blogspot.com/",
  },
];

const LibraryPage = () => {
  return (
    <div className="library-page-container">
      <h1>CUSAT Library & Digital Resources</h1>
      <p>
        Explore CUSAT’s library catalogs, departmental libraries, and e-resources.
      </p>

      <div className="library-section">
        <h2>Key Resources</h2>
        <ul className="resource-list">
          {libraryResources.map((res, idx) => (
            <li key={idx} className="resource-item">
              <a href={res.url} target="_blank" rel="noopener noreferrer">
                <h3>{res.title}</h3>
              </a>
              <p>{res.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="library-notes">
        <h2>Highlights & Info</h2>
        <ul>
          <li>
            The library uses <strong>Koha</strong> as its automation system.  [oai_citation:9‡Library Technology Reports](https://librarytechnology.org/libraries/search.pl?OrgName=Cochin+University+of+Science+and+Technology&utm_source=chatgpt.com)
          </li>
          <li>
            Non-members (public) may use the library on working days (9:30 a.m. to 3:30 p.m.) by paying a fee.  [oai_citation:10‡library.cusat.ac.in](https://library.cusat.ac.in/index.php/about-lib?catid=2&id=25%3Afaq&view=article&utm_source=chatgpt.com)
          </li>
          <li>
            CUSAT library subscribes to e-journals and provides gateway access (UGC-INFONET etc.).  [oai_citation:11‡School of Management Studies Library](https://smscusatlib.weebly.com/useful-links.html?utm_source=chatgpt.com)
          </li>
          <li>
            The “Library Handbook” PDF contains catalog and usage instructions.  [oai_citation:12‡library.cusat.ac.in](https://library.cusat.ac.in/images/cusatlibraryhb.pdf?utm_source=chatgpt.com)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LibraryPage;