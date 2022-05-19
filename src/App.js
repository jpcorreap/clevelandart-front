import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import ArtworkCard from "./components/ArtworkCard";

const data = [
  {
    id: 94979,
    accession_number: "1915.534",
    share_license_status: "CC0",
    tombstone:
      "Nathaniel Hurd, c. 1765. John Singleton Copley (American, 1738-1815). Oil on canvas; framed: 90.5 x 78 x 6.5 cm (35 5/8 x 30 11/16 x 2 9/16 in.); unframed: 76.2 x 64.8 cm (30 x 25 1/2 in.). The Cleveland Museum of Art, Gift of the John Huntington Art and Polytechnic Trust 1915.534",
    current_location: "204 Colonial American",
    title: "Nathaniel Hurd",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "c. 1765",
    creation_date_earliest: 1760,
    creation_date_latest: 1770,
    creators: [
      {
        id: 2409,
        description: "John Singleton Copley (American, 1738-1815)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography: null,
        name_in_original_language: null,
        birth_year: "1738",
        death_year: "1815",
      },
    ],
    culture: ["America, 18th century"],
    technique: "oil on canvas",
    support_materials: [],
    department: "American Painting and Sculpture",
    collection: "American - Painting",
    type: "Painting",
    measurements:
      "Framed: 90.5 x 78 x 6.5 cm (35 5/8 x 30 11/16 x 2 9/16 in.); Unframed: 76.2 x 64.8 cm (30 x 25 1/2 in.)",
    dimensions: {
      framed: {
        height: 0.905,
        width: 0.78,
        depth: 0.065,
      },
      unframed: {
        height: 0.762,
        width: 0.648,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Gift of the John Huntington Art and Polytechnic Trust",
    copyright: null,
    inscriptions: [],
    exhibitions: {
      current: [
        {
          id: 317001,
          title: "Inaugural Exhibition",
          description:
            "<i>Inaugural Exhibition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (co-organizer) (June 6-September 20, 1916).",
          opening_date: "1916-06-06T05:00:00",
        },
        {
          id: 312517,
          title:
            "The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition",
          description:
            "<i>The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 26-October 12, 1936).",
          opening_date: "1936-06-26T04:00:00",
        },
        {
          id: 312341,
          title: "The Silver Jubilee Exhibition",
          description:
            "<i>The Silver Jubilee Exhibition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 23-September 28, 1941).",
          opening_date: "1941-06-23T04:00:00",
        },
        {
          id: 304248,
          title: "Style, Truth and the Portrait",
          description:
            "<i>Style, Truth and the Portrait</i>. The Cleveland Museum of Art (October 2-November 19, 1963).",
          opening_date: "1963-10-02T04:00:00",
        },
        {
          id: 444647,
          title: "The Face of Liberty",
          description:
            "<i>The Face of Liberty</i>. Amon Carter Museum, Fort Worth, TX (organizer) (December 23, 1975-February 8, 1976).",
          opening_date: "1975-12-23T05:00:00",
        },
        {
          id: 417433,
          title: "John Singleton Copley's America",
          description:
            "<i>John Singleton Copley's America</i>. Museum of Fine Arts, Boston (June 7-August 27, 1995); The Metropolitan Museum of Art (organizer) (September 26, 1995-January 7, 1996); Museum of Fine Arts, Houston (February 4-April 28, 1996).",
          opening_date: "1995-06-07T04:00:00",
        },
        {
          id: 222076,
          title: "Nathaniel Hurd",
          description:
            "<i>Nathaniel Hurd</i>. Memorial Art Gallery of the University of Rochester, NY (November 22, 1999-April 10, 2000).",
          opening_date: "1999-11-22T00:00:00",
        },
        {
          id: 180609,
          title: "CMA @ Oberlin - American Portraits",
          description:
            "<i>CMA @ Oberlin - American Portraits</i>. Allen Memorial Art Museum, Oberlin, OH (August 29-December 17, 2006).",
          opening_date: "2006-08-29T00:00:00",
        },
      ],
      legacy: [
        "Cleveland, Cleveland Museum of Art, The Inaugural Exhibition (6 June-20 September, 1916); cat. p. 255.<br><br>Boston, Museum of Fine Arts, Boston, One Hundred Colonial Portraits (19 June-21 September 1930), cat. no. 50.<br><br>Cleveland, Cleveland Museum of Art, Catalogue of the Twentieth Anniversary Exhibition of the Cleveland Museum of Art: The Official Art Exhibit of the Great Lakes Exposition (26 June-4 October, 1936), illus. plate II, cat. no. 23, pp. 21-22.<br><br>New York, Metropolitan Museum of Art, An Exhibition of Paintings by John Singleton Copley: In Commemoration of the Two-Hundredth Anniversary of His Birth (22 December, 1936-14 February, 1937), illus. 16. <br><br>Baltimore, Baltimore Museum of Art, Two Hundred Years of American Painting, (15 January-28 February, 1938), no. 2.<br><br>New Haven, Yale University Gallery of Fine Arts, Masterpieces of New England Silver 1650-1800, (18 June-10 September, 1939), ill. no. 224, p. 94.<br><br>Flint, Mich., Flint Institute of Arts, Art Marches On: The Opening and Dedicating Exhibition of the New Flint Institute of Arts (14 November-31 December, 1941), illus no. 53, p. 30.<br><br>Oberlin, Ohio, The Dudley P. Allen Memorial Art Museum, The Arts in the Americas in the Eighteenth Century (1946), cat. no. 1 (see Bulletin of the Allen Memorial Art Museum, Oberlin College, vol. III, no. 3 (May, 1946).<br><br>Dallas, The Dallas Museum of Fine Arts, Survey of American Painting from 1700 to the Present (5 October - 3 November 1946); cat. 200 Years of American Painting.<br><br>Denver, The Denver Art Museum, American Heritage: An Exhibitions of Paintings and Crafts 1770-1790 (7 March-11 April 1948), ill. p. 9.<br><br>Denver, The Denver Art Museum, Portraiture Through the Ages (9 January - 15 February 1950).<br><br>Milwaukee, Milwaukee Art Institute, Silver and American Tradition (13 February - 19 March 1953).<br><br>Houston, Museum of Fine Arts, Houston, George Washington's World (15 January - 14 February 1954), cat. no. 5. <br><br>Boston, Museum of Fine Arts, Boston, Colonial Silversmiths, Masters and Apprentices (13 November - 30 December 1956).<br><br>Jewett Art Center, Wellesley College, Massachusetts, Four Boston Masters (10 April-11 May, 1959), cat. no. 8, repr. p. 25; traveled to Boston, Museum of Fine Arts (19 May - 26 June 1959).<br><br>Cleveland, The Cleveland Museum of Art, Style, Truth and the Portrait (1 October -10 November, 1963), ill. cat. no. 29.<br><br>New York, The Gallery at The Better Living Center, New York World's Fair, Four Centuries of American Masterpieces (22 May-18 October 1964), p. 18, illus. p. 18; (arranged by the Skowhegan School of Painting and Sculpture).<br><br>Washington, DC, National Gallery of Art, John Singleton Copley, 1738-1815 (18 September - 31 October 1965), pp. 45-9, illus. p. 47; traveled to New York, Metropolitan Museum of Art (20 November 1965 - 2 January 1966); traveled to Boston, Museum of Fine Arts (22 January - 6 February 1966).<br><br>Fort Worth, Amon Carter Museum of Western Art, The Face of Liberty: Founders of the United States (23 December 1975 - 8 February 1976), illus. colorplate 16.<br><br>Cleveland, The Cleveland Museum of Art, Silver in American Life (24 June - 16 August 1981); exhibited in gallery but not in catalogue.<br><br>Boston, Museum of Fine Arts, John Singleton Copley in America (7 June - 27 August 1995), traveled to New York, Metropolitan Museum of Art (26 September 1995 - 7 January 1996), traveled to Houston, Museum of Fine Arts (4 February - 28 April 1996), did not travel to Milwaukee, Milwaukee Art Museum; cat. no. 21, p. 57, 93, 119, 208-11, 248, 300, 312.<br><br>Rochester, New York, Memorial Art Gallery of the University of Rochester, ABOUT FACE: Copley's Portrait of Nathaniel Hurd, Colonial Silversmith and Engraver, (1 November 1999-1 March 2000), see Porticus journal.",
      ],
    },
    provenance: [
      {
        description:
          "Benjamin Hurd [1739-1781], Halifax, Nova Scotia, by descent to his son, John Hurd",
        citations: [],
        footnotes: [],
        date: "-1781",
      },
      {
        description:
          "John Hurd, Halifax, Nova Scotia, by descent to his two daughters",
        citations: [],
        footnotes: [],
        date: "1781-",
      },
      {
        description:
          "Daughters of John Hurd [d. by 1860], Halifax, Nova Scotia, to Mrs. Thomas Barry",
        citations: [],
        footnotes: [],
        date: "-by 1860",
      },
      {
        description:
          "Mrs. Thomas Barry [d. 1869], Halifax, Nova Scotia, by gift to Walter Wesselhoeft",
        citations: [],
        footnotes: [],
        date: "By 1860-1869",
      },
      {
        description:
          "Walter Wesselhoeft [1838-1920], Cambridge, MA, consigned to the Copley Gallery",
        citations: [],
        footnotes: [],
        date: "1869-1915",
      },
      {
        description:
          "(Copley Gallery, Boston, MA, sold to the Cleveland Museum of Art)",
        citations: [],
        footnotes: [],
        date: "1915",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, Ohio",
        citations: [],
        footnotes: [],
        date: "1915-",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: ["350.1915"],
    fun_fact:
      "The artist Copley’s in-laws were consignees for the cargo dumped during the Boston Tea Party.",
    digital_description: null,
    wall_description:
      "Hurd was a prominent silversmith and engraver in Boston, and the warm gaze and unforced smile in his portrait by Copley suggest the friendship between the two artists. Hurd's open-collared shirt, as well as the rakishly tilted turban that covers his shaved head in place of a ceremonial powdered wig, create an air of informality that is unusual for a portrait of this time.",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1915.534-nathaniel-hurd",
      ],
    },
    citations: [
      {
        citation:
          "Perkins, Augustus Thorndike. <em>A Sketch of the Life and a List of Some of the Works of John Singleton Copley</em>. Boston: Priv. Print, 1873.",
        page_number: "Mentioned: p. 17, 75-6",
        url: null,
      },
      {
        citation:
          "Bayley, Frank W. <em>The Life and Works of John Singleton Copley: Founded on the Work of Augustus Thorndike Perkins</em>. Boston, MA: Taylor Press, 1915.",
        page_number: "Mentioned: p. 151-152",
        url: null,
      },
      {
        citation:
          'W. H. D. "The Fine Arts: Fine Portrait by Copley." <em>The Boston Transcript, </em>October, 1915.',
        page_number: null,
        url: null,
      },
      {
        citation:
          "<em>The American Art News. </em>14:23 (March 11, 1916): 1-10.",
        page_number: "Reproduced: p. 5",
        url: null,
      },
      {
        citation:
          "\"Clevel'd Gets Early Am'ns.\" <em>The American Art News. </em>14:24 (March 18, 1916): 1-8.",
        page_number: "Mentioned: p. 1",
        url: null,
      },
      {
        citation:
          '"The Inauguration." <em>The Bulletin of the Cleveland Museum of Art</em>. 3:2 (July, 1916): 1-24.',
        page_number: "Reproduced: opposite p. 1",
        url: null,
      },
      {
        citation:
          'Bell, Hamilton. "Early American Portraits at the Cleveland Museum of Art." <em>The American Magazine of Art</em>. 7:12 (October, 1916).',
        page_number: "Mentioned: p. 484-5; Reproduced: p. 485",
        url: null,
      },
      {
        citation:
          'Cleveland Museum of Art. <em>An Appreciation of Copley\'s "Nathaniel Hurd": John Huntington Collection</em>. Cleveland, OH: Cleveland Museum of Art, 1918.',
        page_number: null,
        url: null,
      },
      {
        citation:
          '"Special Exhibition Cabinet." <em>The Bulletin of the Cleveland Museum of Art</em>. 5:1. (January 1918).',
        page_number: "Mentioned: p. 3",
        url: "www.jstor.org/stable/25136158",
      },
      {
        citation:
          "Dunlap, William. <em>A History of the Rise and Progress of the Arts of Design in the United States</em>. 1. Boston: C.E. Goodspeed &amp; Co, 1918.",
        page_number: "Mentioned: p. 172-4; Reproduced: opposite p. 173",
        url: null,
      },
      {
        citation:
          '"Report of the Museum\'s Second Year." <em>The Bulletin of the Cleveland Museum of Art</em> 5, no. 6/7 (1918): 69-79.',
        page_number: "Mentioned: p. 71",
        url: "www.jstor.org/stable/25136208",
      },
      {
        citation:
          "Clearwater, Alphonso Trumpbour, and C. Louise Avery. <em>American Silver of the 17th and 18th Centuries: A Study Based on the Clearwater Collection. </em>New York: Metropolitan Museum of Art, 1920.",
        page_number: "Reproduced: fig. 101",
        url: null,
      },
      {
        citation:
          '"Early Portrait Study by Copley." <em>Art News. </em>22:19 (February 16, 1923).',
        page_number: "Reproduced: p. 9",
        url: null,
      },
      {
        citation:
          'L. P. "Portrait of Nathaniel Hurd by Copley." <em>The Bulletin of the Cleveland Museum of Art</em>. 10:3 (March 1923).',
        page_number: "Mentioned: p. 39-40",
        url: null,
      },
      {
        citation:
          '"When Copley Portrayed an Early Craftsman." <em>Art News.</em> (June 9, 1923).',
        page_number: "Reproduced: p. 4",
        url: null,
      },
      {
        citation:
          "National Collection of Fine Arts (U.S.), Washington Loan Exhibition Committee. <em>Exhibition of Early American Paintings, Miniatures and Silver</em>. Washington, D.C.: National Gallery of Art, 1925.",
        page_number: "Reproduced: p. 80",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art</em>. Cleveland, OH: The Cleveland Museum of Art, 1925.",
        page_number: "Mentioned: p. 7-8; Reproduced: p. 8",
        url: "https://archive.org/details/CMAHandbook_80839/page/n10",
      },
      {
        citation:
          "Dow, George Francis. <em>The Arts &amp; Crafts in New England, 1704-1775; Gleanings from Boston Newspapers Relating to Painting, Engraving, Silversmiths, Pewterers, Clockmakers, Furniture, Pottery, Old Houses, Costume, Trades and Occupations, &amp; C...</em> Topsfield, MA: Wayside Press, 1927.",
        page_number: "Mentioned: p. 8; Reproduced: frontispiece",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art</em>. Cleveland, OH: The Cleveland Museum of Art, 1928.",
        page_number: "Reproduced: p. 8",
        url: "https://archive.org/details/CMAHandbook1928/page/n12",
      },
      {
        citation:
          "<em>Handbook of the Cleveland Museum of Art. </em>Cleveland: Cleveland Museum of Art, 1928.",
        page_number: "Reproduced: p. 8",
        url: "https://archive.org/details/CMAHandbook1928#page=12",
      },
      {
        citation:
          "Bayley, Frank W. <em>Five Colonial Artists of New England: Joseph Badger, Joseph Blackburn, John Singleton Copley; Robert Feke, John Smibert</em>. Boston, MA: Privately Printed, 1929.",
        page_number: "Reproduced: fig. 229",
        url: null,
      },
      {
        citation:
          'Bolton, Theodore and Harry Lorin Binsse. "John Singleton Copley." <em>The Antiquarian. </em>15:6 (December, 1930).',
        page_number: "Reproduced: p. 80-81",
        url: null,
      },
      {
        citation:
          "Stark, Harold. <em>Art in America from 1600 to 1865; An Illustrated Guide for a National Radio Broadcast from February 3 to May 19, 1934</em>. Chicago, IL: University of Chicago Press, 1934.",
        page_number: "Reproduced: p. 19",
        url: null,
      },
      {
        citation:
          "Cahill, Holger, and Alfred H. Barr, Jr., eds. <em>Art in America: A Complete Survey</em>. New York, NY: Reynal &amp; Hitchcock, 1935.",
        page_number: "Mentioned: p. 17; Reproduced: p. 18",
        url: null,
      },
      {
        citation:
          'Milliken, William. "Special Number for the 20th Anniversary Exhibition of the Cleveland Museum of Art: Official Art Exhibit of the Great Lakes Exposition." <em>The Art News.</em> (June 13, 1936).',
        page_number: "Reproduced: p. 14",
        url: null,
      },
      {
        citation:
          'Burroughs, Louise. "John Singleton Copley." <em>Bulletin of the Metropolitan Museum of Art.</em> 31:12 (December 1936).',
        page_number: "Mentioned: p. 254",
        url: null,
      },
      {
        citation:
          'Frankfurter, Alfred M. "J. S. Copley, American Master." <em>Art News.</em> 35:13 (December 26, 1936).',
        page_number: "Reproduced: p. 12",
        url: null,
      },
      {
        citation:
          'Jewell, Edward Alden. "Copley: Metropolitan Opens Bicentennial Show." <em>The New York Times, </em>December 27, 1936.',
        page_number: "Mentioned: p. 9",
        url: null,
      },
      {
        citation:
          "Parker, Barbara Neville, and Anne Bolling Wheeler. <em>John Singleton Copley; American Portraits in Oil, Pastel, and Miniature</em>. Boston, MA: Museum of Fine Arts, 1938.",
        page_number: "Reproduced: p. 118-9, pl. 61A",
        url: null,
      },
      {
        citation:
          "French, Hollis. <em>Jacob Hurd and His Sons Nathaniel &amp; Benjamin: Silversmiths 1702-1781. </em>Cambridge, MA: Riverside Press for the Walpole Society, 1939.",
        page_number: "Reproduced: frontispiece; Mentioned: pp. 138-40",
        url: null,
      },
      {
        citation:
          "Hagen, Oskar. <em>The Birth of the American Tradition in Art</em>. New York: Charles Scribner's Sons, 1940.",
        page_number: "Reproduced: p. 89; Mentioned: pp. 102-105",
        url: null,
      },
      {
        citation:
          'Foote, Helen S. "A Collection of Early American Silver Gift of Hollis French." <em>The</em> <em>Bulletin of the Cleveland Museum of Art.</em> 27:9 (November, 1940).',
        page_number: "Mentioned: p. 135",
        url: null,
      },
      {
        citation:
          "Flint Institute of Arts. <em>Art Marches on!: The Opening and Dedicating Exhibition of the New Flint Institute of Arts</em>. Flint, MI: The Institute, 1941.",
        page_number: "Reproduced and Mentioned: p. 30, fig. 50",
        url: null,
      },
      {
        citation:
          '"Cleveland\'s First 25 Years." <em>ARTnews. </em>40:11 (September, 1941).',
        page_number: "Mentioned: p. 13, 25; Reproduced: p. 13",
        url: null,
      },
      {
        citation:
          "Walker, John, and Macgill James. <em>Great American Paintings from Smibert to Bellows, 1729-1924</em>. London: Oxford University Press, 1943.",
        page_number: "Reproduced: no. 10",
        url: null,
      },
      {
        citation: '"Cleveland Museum." <em>Life</em> (September 20, 1943).',
        page_number: "Reproduced: p. 68",
        url: null,
      },
      {
        citation:
          'King, Winnifred. "Their Hands." <em>The Christian Science Monitor. </em>November 20, 1943.',
        page_number: null,
        url: null,
      },
      {
        citation:
          "Adams, James Truslow. <em>Album of American History</em>. volume 1. New York, NY: Charles Scribner's Sons, 1944.",
        page_number: "Reproduced: p. 345",
        url: null,
      },
      {
        citation:
          "<em>Paintings in the Cleveland Museum of Art.</em> [Cleveland]: The Cleveland Museum of Art, 1945.",
        page_number: "Reproduced: p. 12",
        url: "https://archive.org/details/CMAPaintings1945/page/n20",
      },
      {
        citation:
          '"The Arts in America in the Eighteenth Century." <em>Bulletin of the Allen Memorial Art Museum, Oberlin College</em>. 3:3 (May, 1946).',
        page_number: "Mentioned: p. 67, 90, 99; Reproduced: p. 66",
        url: null,
      },
      {
        citation:
          "Phillips, John Marshall. <em>American Silver</em>. New York, NY: Chanticleer Press, 1949.",
        page_number: "Mentioned: p. 82-6; Reproduced: p. 83",
        url: null,
      },
      {
        citation:
          "Barker, Virgil. <em>American Painting: History and Interpretation</em>. New York, NY: The Macmillan Company, 1950.",
        page_number: "Mentioned: p. 144, 147-8; Reproduced: p. 145",
        url: null,
      },
      {
        citation:
          '"A bird\'s-eye view of early American painting." <em>Antiques.</em> 62 (November 1952).',
        page_number: "Reproduced: p. 402",
        url: null,
      },
      {
        citation:
          "Milliken, William Mathewson. <em>The Cleveland Museum of Art</em>. New York: H.N. Abrams, 1958.",
        page_number: "Mentioned: p. 60",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland, OH: The Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 529",
        url: "https://archive.org/details/CMAHandbook1958/page/n96",
      },
      {
        citation:
          '"Portraits of American Craftsmen." <em>Antiques. </em>76. (October 1959).',
        page_number: "Reproduced: p. 321",
        url: null,
      },
      {
        citation:
          "Larkin, Oliver W. <em>Art and Life in America</em>. New York, NY: Holt, Rinehart and Winston, 1960.",
        page_number: "Reproduced: pl. 1",
        url: null,
      },
      {
        citation:
          "<em>Kindlers Malerei Lexicon</em>. volume 1. Zurich, Switzerland: 1964.",
        page_number: "Reproduced: p. 776",
        url: null,
      },
      {
        citation:
          "Museum of Fine Arts, Saint Petersburg. <em>Inaugural Exhibition, February 7 Through March 7, 1965</em>. Saint Petersburg, FL: 1965.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 161",
        url: "https://archive.org/details/CMAHandbook1966/page/n184",
      },
      {
        citation:
          "Prown, Jules David. <em>John Singleton Copley: In America 1738-1774</em>. Cambridge, MA: Harvard University Press, 1966.",
        page_number: "Mentioned: p. 52-55; Reproduced: no. 177",
        url: null,
      },
      {
        citation:
          "Wright, Louis B., George B. Tatum, John W. McCoubrey, and Robert C. Smith. <em>The Arts In America: The Colonial Period</em>. New York, NY: Charles Scribner's Sons, 1966.",
        page_number: "Reproduced: p. 204",
        url: null,
      },
      {
        citation:
          "Wilson, Patricia Boyd. <em>The Christian Science Monitor.</em> January 19, 1966.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Myers, Bernard S. <em>Art and Civilization</em>. New York: McGraw-Hill Book Company, 1967.",
        page_number: "Mentioned: p. 319-320; Reproduced: p. 319",
        url: null,
      },
      {
        citation:
          "Cirker, Hayward, and Blanche Cirker. <em>Dictionary of American Portraits: 4045 Pictures of Important Americans from Earliest Times to the Beginning of the Twentieth Century</em>. New York, NY: Dover Publications, Inc., 1967",
        page_number: "Reproduced: p. 322",
        url: null,
      },
      {
        citation:
          "McLanathan, Richard B. K. <em>The American Tradition in the Arts</em>. New York: Harcourt, Brace &amp; World, 1968.",
        page_number: "Mentioned: p. 91-2",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 161",
        url: "https://archive.org/details/CMAHandbook1969/page/n184",
      },
      {
        citation:
          "Plate, Robert. <em>John Singleton Copley: America's First Great Artist. </em>New York, NY: David McKay Co, 1969.",
        page_number: "Mentioned: p. 27, 48",
        url: null,
      },
      {
        citation:
          "Novak, Barbara. <em>American Painting of the Nineteenth Century: Realism, Idealism, and the American Experience</em>. New York, NY: Praeger Publishers, 1969.",
        page_number: "Mentioned: p. 24-5; Reproduced: p. 24",
        url: null,
      },
      {
        citation:
          "Glubok, Shirley, and Gerard Nook. The Art of Colonial America. New York, NY: The Macmillan Company, 1970.",
        page_number: "Reproduced: p. 25",
        url: null,
      },
      {
        citation:
          'Mooz, Ralph Peter. "The Art of Robert Feke." Ph.D. dissertation, University of Pennsylvania, 1970.',
        page_number: "Mentioned: p. 177",
        url: null,
      },
      {
        citation:
          "Lee, Sherman E. Introduction to <em>The Cleveland Museum of Art</em>. Hannover: Knorr &amp; Hirth, 1970.",
        page_number: "Mentioned: p. 64; Reproduced: no. 29",
        url: null,
      },
      {
        citation:
          'Neumeyer, Alfred. "Nordamerikanische Kunst." <em>Die Kunst des 18</em>. <em>Jahrhunderts</em>. ed. Harald Keller. Berlin: Propylaen Verlag, 1971.',
        page_number: "Reproduced: p. 431, pl. 68",
        url: null,
      },
      {
        citation:
          "Fales, Martha Gandy. <em>Early American Silver</em>. New York: E.P. Dutton &amp; Co, 1973.",
        page_number: "Mentioned: p. 94, 239, 319",
        url: null,
      },
      {
        citation:
          "Adler, Mortimer Jerome, ed. <em>The Revolutionary Years: Britannica's Book of the American Revolution</em>. Chicago, IL: Encyclopedia Britannica, Inc., 1976.",
        page_number: "Reproduced: p. 245",
        url: null,
      },
      {
        citation:
          "Wilmerding, John. <em>American Art</em>. Harmondsworth, England: Penguin Books, 1976.",
        page_number: "Mentioned: p. 38",
        url: null,
      },
      {
        citation:
          "Montgomery, Charles F., and Patricia E. Kane. <em>American Art, 1750-1800: Towards Independence</em>. Boston, MA: Published for Yale University Art Gallery, New Haven, and the Victoria and Albert Museum, London, by the New York Graphic Society, 1976.",
        page_number: "Reproduced: p. 132",
        url: null,
      },
      {
        citation:
          '"American Image." <em>Plain Dealer</em>. Section 5 - 8. (January 18, 1976).',
        page_number: "Mentioned and Reproduced: Section 5 - 8",
        url: null,
      },
      {
        citation:
          "Brown, Milton W. <em>American Art to 1900: Painting, Sculpture, Architecture</em>. New York: H.N. Abrams, 1977.",
        page_number: "Mentioned: p. 101-2; Reproduced: no. 164, p. 102",
        url: null,
      },
      {
        citation:
          'Johnson, Mark M. "Portrait Painting - An Image of Man." <em>Arts and Activities. </em>82 (September 1977).',
        page_number: "Mentioned: p. 34; Reproduced: p. 36",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 198",
        url: "https://archive.org/details/CMAHandbook1978/page/n218",
      },
      {
        citation:
          "Ward, Barbara McLean, and Gerald W. R. Ward, eds. <em>Silver in American Life: Selections from the Mabel Brady Garvan and Other Collections at Yale University.</em> New York: American Federation of Arts, 1979.",
        page_number: "Mentioned and Reproduced: p. 76",
        url: null,
      },
      {
        citation:
          'Boros, Ethel. "Early American Silver." <em>Plain Dealer.</em> (September 22, 1979).',
        page_number: "Mentioned: p. 34-5; Reproduced: p. 34",
        url: null,
      },
      {
        citation:
          'Emlen, Robert P. "Wedding Silver for the Browns: A Rhode Island Family Patronizes a Boston Goldsmith." <em>The American Art Journal</em>. 56:2 (Spring 1984).',
        page_number: "Reproduced: p. 8",
        url: null,
      },
      {
        citation:
          "Janson, H. W. <em>History of Art</em>. Third edition. New York, NY: Prentice Hall &amp; Harry Abrams, 1986.",
        page_number: "Mentioned: p. 20; Reproduced: p. 21",
        url: null,
      },
      {
        citation:
          'Buchanan, Penelope D. "John Singleton Copley: Portrait of Nathaniel Hurd." <em>Art Education</em>. 40:1 (January 1987).',
        page_number: "Mentioned: p. 27-8; Reproduced: p. 28",
        url: null,
      },
      {
        citation:
          "<em>Handbook of The Cleveland Museum of Art</em>. Cleveland, OH: The Cleveland Museum of Art, 1991.",
        page_number: "Reproduced: p. 114",
        url: null,
      },
      {
        citation:
          "Turner, Evan H., ed. <em>Object Lessons: Cleveland Creates an Art Museum</em>. Cleveland, OH: Cleveland Museum of Art, 1991.",
        page_number: "Mentioned: p. 45; Reproduced: p. 46",
        url: null,
      },
      {
        citation:
          "Chong, Alan. <em>European &amp; American Painting in the Cleveland Museum of Art: A Summary Catalogue</em>. Cleveland, OH: Cleveland Museum of Art, 1993.",
        page_number: "Reproduced: p. 43",
        url: null,
      },
      {
        citation:
          "Kissick, John. <em>Art, Context and Criticism</em>. Madison, WI: Brown &amp; Benchmark, 1993.",
        page_number: "Reproduced: p. 352",
        url: null,
      },
      {
        citation:
          "Cunningham, Lawrence S., and John J. Reich. <em>Culture and Values: a Survey of the Western Humanities</em>. Second edition. Fort Worth, IN: Holt, Rinehart, and Winston, 1994.",
        page_number: "Reproduced: p. 282",
        url: null,
      },
      {
        citation:
          "Janson, H. W. <em>History of Art</em>. Fifth edition. New York, NY: Prentice Hall &amp; Harry Abrams, 1995.",
        page_number: "Reproduced: p. 42, pl. 26",
        url: null,
      },
      {
        citation:
          "Barratt, Carrie Rebora. <em>John Singleton Copley in America</em>. New York: Metropolitan Museum of Art, distributed by H.N. Abrams, 1995.",
        page_number: "Reproduced: p. 209",
        url: null,
      },
      {
        citation:
          "Kissick, John. <em>Art, Context and Criticism</em>. Second edition. Madison, WI: Brown &amp; Benchmark, 1996.",
        page_number: "Reproduced: p. 382",
        url: null,
      },
      {
        citation:
          "Kane, Patricia E., Francis Hill Bigelow, John Marshall Phillips, and Jeannine J. Falino. <em>Colonial Massachusetts Silversmiths and Jewelers: A Biographical Dictionary Based on the Notes of Francis Hill Bigelow &amp; John Marshall Phillips</em>. New Haven, CT: Yale University Art Gallery, 1997.",
        page_number: "Reproduced: p. 615",
        url: null,
      },
      {
        citation:
          'Rather, Susan. "Carpenter, Tailor, Shoemaker, Artist: Copley and Portrait Painting around 1770." <em>The Art Bulletin.</em> 79:2 (June 1997).',
        page_number: "Mentioned: p. 284-5; Reproduced: p. 285",
        url: null,
      },
      {
        citation:
          "Ohlig, Rudolf, and Hildegard Hogen. <em>Der Glanz der Residenzen: Renaissance und Barock in Europa, Schwarzafrika und Altamerika</em>. Leipzig: F.A. Brockhaus, 1998.",
        page_number: "Reproduced: p. 424",
        url: null,
      },
      {
        citation:
          'Ward, Gerald W. R. "Nathaniel Hurd." <em>American National Biography,</em> v. 2. ed. Garraty, John A., and Mark C. Carnes. New York, NY: Oxford University Press, 1999.',
        page_number: "Mentioned; p. 556-7",
        url: null,
      },
      {
        citation:
          "Fortune, Brandon Brame, and Deborah Jean Warner. <em>Franklin and His Friends: Portraying the Man of Science in Eighteenth-Century America</em>. Washington, D.C.: Smithsonian National Portrait Gallery, 1999.",
        page_number: "Reproduced: p. 62, fig. 4-14",
        url: null,
      },
      {
        citation:
          "May, Sally Ruth, Jane Takac, and Barbara J. Bradley. <em>Knockouts: A Pocket Guide</em>. Cleveland, OH: Cleveland Museum of Art, 2001.",
        page_number: "Reproduced: p. 44",
        url: null,
      },
      {
        citation:
          "Kammen, Michael et al. Seeing America: Painting and Sculpture from the Collection of the Memorial Art Gallery of the University of Rochester. Rochester, N.Y.: University of Rochester Press, 2006.",
        page_number: "Reproduced: p. 22",
        url: null,
      },
      {
        citation:
          "Ward, Gerald W. R. <em>Paul Revere: Sons of Liberty Bowl. </em>Boston: MFA Publications, Museum of Fine Arts, Boston, 2016.",
        page_number: "Reproduced: p. 11",
        url: null,
      },
      {
        citation:
          "Rather, Susan. <em>The American School: Artists and Status in the Late-Colonial and Early National Era</em>. New Haven, CT : Yale University Press, 2016.",
        page_number: "Mentioned & Reproduced: pp. 41-42, fig. 30",
        url: null,
      },
      {
        citation:
          "Ripley, Elizabeth. <em>Copley; A Biography</em>. Philadelphia: J. B. Lippincott Company, 1967.",
        page_number: "Mentioned: p. 24; Reproduced: p. 25",
        url: null,
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1915.534",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1915.534/1915.534_web.jpg",
        filename: "1915.534_web.jpg",
        filesize: "402404",
        width: "748",
        height: "893",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1915.534/1915.534_print.jpg",
        filename: "1915.534_print.jpg",
        filesize: "5904910",
        width: "2849",
        height: "3400",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1915.534/1915.534_full.tif",
        filename: "1915.534_full.tif",
        filesize: "76080612",
        width: "4609",
        height: "5500",
      },
    },
    updated_at: "2022-01-07 22:37:35.736000",
  },
  {
    id: 92937,
    accession_number: "1922.1133",
    share_license_status: "CC0",
    tombstone:
      "Stag at Sharkey's, 1909. George Bellows (American, 1882-1925). Oil on canvas; framed: 110 x 140.5 x 8.5 cm (43 5/16 x 55 5/16 x 3 3/8 in.); unframed: 92 x 122.6 cm (36 1/4 x 48 1/4 in.). The Cleveland Museum of Art, Hinman B. Hurlbut Collection 1922.1133",
    current_location: "208 American Gilded Age and Realism",
    title: "Stag at Sharkey's",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1909",
    creation_date_earliest: 1909,
    creation_date_latest: 1909,
    creators: [
      {
        id: 3005,
        description: "George Bellows (American, 1882-1925)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography:
          "An accomplished athlete, George Bellows (1882–1925) was an especially appropriate artist to address the subject of sports. Born and raised in Columbus, Ohio, he played baseball and basketball as a youth, developing sufficient ability to letter in both at Ohio State University. According to some accounts, scouts for the Cincinnati Reds took notice of his shortstop talents. However, Bellows’s first love, art, ultimately intervened, and after his junior year he relocated to New York to study painting. In a remarkably short period he became the leading artist of his generation, a reputation fueled through boxing subjects such as <em>Stag at Sharkey’s.</em> In his later years he developed recreational passions for tennis and billiards, which he routinely played with friends. Bellows’s life was cut short at the age of 42, due to complications after his appendix ruptured.",
        name_in_original_language: null,
        birth_year: "1882",
        death_year: "1925",
      },
    ],
    culture: ["America, 20th century"],
    technique: "oil on canvas",
    support_materials: [],
    department: "American Painting and Sculpture",
    collection: "American - Painting",
    type: "Painting",
    measurements:
      "Framed: 110 x 140.5 x 8.5 cm (43 5/16 x 55 5/16 x 3 3/8 in.); Unframed: 92 x 122.6 cm (36 1/4 x 48 1/4 in.)",
    dimensions: {
      framed: {
        height: 1.1,
        width: 1.405,
        depth: 0.085,
      },
      unframed: {
        height: 0.92,
        width: 1.226,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Hinman B. Hurlbut Collection",
    copyright: null,
    inscriptions: [
      {
        inscription:
          'signed upper left:  Geo Bellows, / Copyrighted 190[9]; inscribed on back:  Geo Bellows / 146 E. 19th St. N.Y. / "Club Night" / 67.',
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 315560,
          title: "Memorial Exhibition of the Work of George Bellows",
          description:
            "<i>Memorial Exhibition of the Work of George Bellows</i>. Metropolitan Museum of Art (organizer) (co-organizer) (October 12-November 22, 1925).",
          opening_date: "1925-10-12T05:00:00",
        },
        {
          id: 354980,
          title: "The George Wesley Bellows Memorial Exhibition",
          description:
            "<i>The George Wesley Bellows Memorial Exhibition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (February 16-March 22, 1926).",
          opening_date: "1926-02-16T05:00:00",
        },
        {
          id: 315582,
          title: "The George Bellows Exhibition",
          description:
            "<i>The George Bellows Exhibition</i>. Columbus Museum of Art, Columbus, OH (organizer) (co-organizer) (January 22-March 1, 1931).",
          opening_date: "1931-01-22T05:00:00",
        },
        {
          id: 315601,
          title: "Olympic Competition and Exhibition of Art",
          description:
            "<i>Olympic Competition and Exhibition of Art</i>. Natural History Museum of Los Angeles, Los Angeles, CA (organizer) (co-organizer) (July 30, 1932-August 31, 1931).",
          opening_date: "1932-07-30T04:00:00",
        },
        {
          id: 315604,
          title: "American Painting & Sculpture 1862-1932",
          description:
            "<i>American Painting & Sculpture 1862-1932</i>. Museum of Modern Art, NY (organizer) (co-organizer) (October 31, 1932-January 31, 1933).",
          opening_date: "1932-10-31T05:00:00",
        },
        {
          id: 315608,
          title: "Century of Progress: Exhibition of Paintings and Sculpture",
          description:
            "<i>Century of Progress: Exhibition of Paintings and Sculpture</i>. Art Institute of Chicago (organizer) (co-organizer) (June 1-November 1, 1933).",
          opening_date: "1933-06-01T04:00:00",
        },
        {
          id: 315619,
          title: "A Loan Exhibition of American Paintings Since 1900",
          description:
            "<i>A Loan Exhibition of American Paintings Since 1900</i>. William Rockhill Nelson Gallery (co-organizer) (December 10, 1933-January 31, 1934).",
          opening_date: "1933-12-10T05:00:00",
        },
        {
          id: 312517,
          title:
            "The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition",
          description:
            "<i>The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 26-October 12, 1936).",
          opening_date: "1936-06-26T04:00:00",
        },
        {
          id: 312462,
          title: "Exhibition of American Painting from 1860 Until Today",
          description:
            "<i>Exhibition of American Painting from 1860 Until Today</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 23-October 4, 1937).",
          opening_date: "1937-06-23T04:00:00",
        },
        {
          id: 315639,
          title: "Trois Siècles d'art aux Etats-Unis",
          description:
            "<i>Trois Siècles d'art aux Etats-Unis</i>. Galerie national du Jeu de Paume, Paris, France (organizer) (co-organizer) (May 24-July 31, 1938).",
          opening_date: "1938-05-24T04:00:00",
        },
        {
          id: 315643,
          title:
            "Life in America: A Special Loan Exhibition of Paintings Held During the Period of the New York World's Fair",
          description:
            "<i>Life in America: A Special Loan Exhibition of Paintings Held During the Period of the New York World's Fair</i>. The Metropolitan Museum of Art, New York, NY (organizer) (co-organizer) (April 24-October 29, 1939).",
          opening_date: "1939-04-24T05:00:00",
        },
        {
          id: 315650,
          title:
            "An Exhibition of Great Paintings in Aid of the Canadian Red Cross and of Small Pictures by Members of The Ontario Society of Artists",
          description:
            "<i>An Exhibition of Great Paintings in Aid of the Canadian Red Cross and of Small Pictures by Members of The Ontario Society of Artists</i>. Art Gallery of Ontario, Ontario M5T 1G4, Canada (organizer) (co-organizer) (November 15-December 15, 1940).",
          opening_date: "1940-11-15T05:00:00",
        },
        {
          id: 312341,
          title: "The Silver Jubilee Exhibition",
          description:
            "<i>The Silver Jubilee Exhibition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 23-September 28, 1941).",
          opening_date: "1941-06-23T04:00:00",
        },
        {
          id: 315655,
          title: "Sport in American Art",
          description:
            "<i>Sport in American Art</i>. Museum of Fine Arts, Boston, Boston, MA (organizer) (co-organizer) (October 10-December 10, 1944).",
          opening_date: "1944-10-10T04:00:00",
        },
        {
          id: 315676,
          title: "George Bellows: Paintings, Drawings, and Prints",
          description:
            "<i>George Bellows: Paintings, Drawings, and Prints</i>. The Art Institute of Chicago, Chicago, IL (organizer) (co-organizer) (January 31-March 10, 1946).",
          opening_date: "1946-01-31T05:00:00",
        },
        {
          id: 315679,
          title:
            "American Paintings: From the Eighteenth Century to the Present Day",
          description:
            "<i>American Paintings: From the Eighteenth Century to the Present Day</i>. Tate Modern, London, United Kingdom of Great Britain and Northern Ireland (organizer) (co-organizer) (June 1-July 31, 1946).",
          opening_date: "1946-06-01T04:00:00",
        },
        {
          id: 315684,
          title: "Sport in Art",
          description:
            "<i>Sport in Art</i>. Albright-Knox Art Gallery, Buffalo, NY (organizer) (co-organizer) (January 24-February 22, 1948).",
          opening_date: "1948-01-24T05:00:00",
        },
        {
          id: 315689,
          title: "The Ring and the Glove",
          description:
            "<i>The Ring and the Glove</i>. Addison Gallery of American Art, Andover, MA (co-organizer) (September 17-November 14, 1948).",
          opening_date: "1948-09-17T04:00:00",
        },
        {
          id: 315693,
          title: "Milestones of American Painting in Our Century",
          description:
            "<i>Milestones of American Painting in Our Century</i>. Montréal Museum of Fine Arts, Montreal, Quebec, Canada (March 15-April 15, 1948); Colorado Springs Fine Arts Center, CO (May 5-June 25, 1948); The Institute of Contemporary Art, Boston, Boston, MA (organizer) (co-organizer) (January 20-March 1, 1949); Fine Arts Museums of San Francisco, de Young Museum, San Francisco, CA (July 10-August 25, 1949); Los Angeles County Museum of Art, Los Angeles, CA (September 7-October 16, 1949); The Cleveland Museum of Art, Cleveland, OH (November 3-December 18, 1949).",
          opening_date: "1949-01-20T05:00:00",
        },
        {
          id: 315703,
          title: "Aspects of New York City Life",
          description:
            "<i>Aspects of New York City Life</i>. The Century Association (organizer) (co-organizer) (March 1-April 30, 1950).",
          opening_date: "1950-03-01T05:00:00",
        },
        {
          id: 311898,
          title: "35th Anniversary Exhibition",
          description:
            "<i>35th Anniversary Exhibition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 20-September 30, 1951).",
          opening_date: "1951-06-20T04:00:00",
        },
        {
          id: 315706,
          title: "Exhibition of Sporting Art",
          description:
            "<i>Exhibition of Sporting Art</i>. The Century Association (organizer) (co-organizer) (January 13-March 28, 1954).",
          opening_date: "1954-01-13T05:00:00",
        },
        {
          id: 300857,
          title: "Art: The International Language",
          description:
            "<i>Art: The International Language</i>. The Cleveland Museum of Art (October 2-November 4, 1956).",
          opening_date: "1956-10-02T04:00:00",
        },
        {
          id: 315754,
          title: "George Bellows: A Retrospective Exhibition",
          description:
            "<i>George Bellows: A Retrospective Exhibition</i>. National Gallery of Art (organizer) (co-organizer) (January 19-February 24, 1957).",
          opening_date: "1957-01-19T05:00:00",
        },
        {
          id: 315758,
          title: "Paintings by George Bellows",
          description:
            "<i>Paintings by George Bellows</i>. Columbus Museum of Art, Columbus, OH (organizer) (co-organizer) (March 21-April 21, 1957).",
          opening_date: "1957-03-21T05:00:00",
        },
        {
          id: 315762,
          title: "Four Centuries of American Art",
          description:
            "<i>Four Centuries of American Art</i>. Minneapolis Institute of Arts, MN (organizer) (co-organizer) (November 27, 1963-January 19, 1964).",
          opening_date: "1963-11-27T05:00:00",
        },
        {
          id: 315769,
          title: "200 Years of American Painting",
          description:
            "<i>200 Years of American Painting</i>. Saint Louis Art Museum, St. Louis, MO (organizer) (co-organizer) (April 1-May 31, 1964).",
          opening_date: "1964-04-01T05:00:00",
        },
        {
          id: 315797,
          title: "The Painters' America: Rural and Urban Life, 1810-1910",
          description:
            "<i>The Painters' America: Rural and Urban Life, 1810-1910</i>. Whitney Museum of American Art, New York, NY (organizer) (co-organizer) (September 18-November 10, 1974); Museum of Fine Arts, Houston, Houston, TX (December 5, 1974-January 19, 1975); Oakland Museum of California, Oakland, CA (February 10-March 30, 1975).",
          opening_date: "1974-09-18T04:00:00",
        },
        {
          id: 302330,
          title: "Heritage and Horizon: American Painting 1776 - 1976",
          description:
            "<i>Heritage and Horizon: American Painting 1776 - 1976</i>. Albright-Knox Art Gallery, Buffalo, NY (organizer) (March 7-April 11, 1976); The Detroit Institute of Arts, Detroit, MI (May 2-June 13, 1976); The Toledo Museum of Art, Toledo, OH (July 4-August 15, 1976); The Cleveland Museum of Art, Cleveland, OH (September 8-October 24, 1976).",
          opening_date: "1976-03-07T05:00:00",
        },
        {
          id: 315829,
          title: "George Wesley Bellows: Paintings, Drawings, and Prints",
          description:
            "<i>George Wesley Bellows: Paintings, Drawings, and Prints</i>. Columbus Museum of Art, Columbus, OH (organizer) (co-organizer) (April 1-May 8, 1979); Virginia Museum of Fine Arts, Richmond, VA (June 29-August 5, 1979); Des Moines Art Center, Des Moines, IA (September 17-October 28, 1979); Worcester Art Museum, Worcester, MA (November 16-December 28, 1979).",
          opening_date: "1979-04-01T05:00:00",
        },
        {
          id: 315863,
          title: "Bellows: The Boxing Pictures",
          description:
            "<i>Bellows: The Boxing Pictures</i>. National Gallery of Art (organizer) (co-organizer) (September 5, 1982-January 2, 1983).",
          opening_date: "1982-09-05T04:00:00",
        },
        {
          id: 316624,
          title: "The Paintings of George Bellows",
          description:
            "<i>The Paintings of George Bellows</i>. Whitney Museum of American Art, New York, NY (February 16-May 10, 1992); Columbus Museum of Art, Columbus, OH (October 11, 1992-January 3, 1993); Amon Carter Museum, Fort Worth, TX (February 20-May 9, 1993).",
          opening_date: "1992-02-16T05:00:00",
        },
        {
          id: 316631,
          title:
            "Metropolitan Lives: The Ashcan Artists and Their New York, 1897-1917",
          description:
            "<i>Metropolitan Lives: The Ashcan Artists and Their New York, 1897-1917</i>. National Museum of American Art, Washington, DC (co-organizer) (November 17, 1995-March 17, 1996).",
          opening_date: "1995-11-17T05:00:00",
        },
        {
          id: 218347,
          title:
            "The American Century: Art and Culture 1900-2000 (Part 1: 1900-1950)",
          description:
            "<i>The American Century: Art and Culture 1900-2000 (Part 1: 1900-1950)</i>. Whitney Museum of American Art, New York, NY (organizer) (April 22-September 5, 1999).",
          opening_date: "1999-04-22T00:00:00",
        },
        {
          id: 177291,
          title: "George Bellows (1882-1925)",
          description:
            "<i>George Bellows (1882-1925)</i>. National Gallery of Art, Landover, MD (organizer) (June 10-October 8, 2012); The Metropolitan Museum of Art, New York, NY (November 13, 2012-February 18, 2013); Royal Academy of Arts, London, United Kingdom of Great Britain and Northern Ireland (March 16-June 9, 2013).",
          opening_date: "2012-06-10T00:00:00",
        },
        {
          id: 222001,
          title: "George Bellows and the American Experience",
          description:
            "<i>George Bellows and the American Experience</i>. Columbus Museum of Art, Columbus, OH (organizer) (August 23, 2013-January 4, 2014).",
          opening_date: "2013-08-23T00:00:00",
        },
        {
          id: 200468,
          title: "Stag at Sharkey’s: George Bellows and the Art of Sports",
          description:
            "<i>Stag at Sharkey’s: George Bellows and the Art of Sports</i>. The Cleveland Museum of Art (organizer) (May 14-September 18, 2016).",
          opening_date: "2016-05-14T00:00:00",
        },
      ],
      legacy: [
        'Columbus, The Columbus Gallery of Fine Arts, The George Bellows Exhibition (22 January-1 March 1931), see Bulletin of The Columbus Gallery of Fine Arts (January, 1931), vol. 1, no. 1, cat. no. 269, illus. p. I, 15.<br>Chicago, The Art Institute of Chicago, Century of Progress: Exhibition of Paintings and Sculpture (1 June-1 November 1933), illus. cat. no. 434, listed p. 60. <br><br>Cleveland, The Cleveland Museum of Art, The Twentieth Anniversary Exhibition of The Cleveland Museum of Art; The Official Art Exhibit of The Great Lakes Exposition (26 June-4 October 1936)<br><br>New York, Whitney Museum of American Art, New York Realists, 1900-1914 (9 February-5 March 1937), cat. no. 8, illus., listed p. 12. <br><br>Philadelphia, The Philadelphia Museum, Art in the United States: Painting, Sculpture, Prints, Crafts (20 June-13 September 1942), illus.<br><br>Buffalo, The Buffalo Fine Arts Academy, Albright Art Gallery, Sport in Art (24 January-22 February 1948), no. 5. <br><br>Andover, MA, Addison Gallery of American Art, Phillips Academy, The Ring and the Glove (17 September-14 November 1948), see Bellows: The Boxing Pictures p. 76: the exhibition originated at the Museum of the City of New York, Stag was only shown at Addison and did not appear in the catalogue.<br><br>Boston, Institute of Contemporary Art, Milestones of American Painting in Our Century (20 January-1 March 1949); traveled to: Montreal, Art Association of Montreal (15 March-15 April 1949); Colorado Springs, Colorado Springs Fine Arts Center (5 May-25 June 1949); San Francisco, M. H. de Young Museum (10 July-25 August 1949); Los Angeles, Los Angeles County Museum (7 September-16 October 1949); Cleveland, The Cleveland Museum of Art (3 November-18 December 1949); cat. no. 3, listed p. 29, pp. 38-39, illus. p. 39.<br><br>Boston, The Institute of Contemporary Art; traveled to: Louisville, J. B. Speed Memorial Gallery; San Francisco, M. H. de Young Musuem; Buffalo, Albright Gallery; Montreal, Art Association of Montreal; Cleveland, The Cleveland Museum of Art; notes that the exhibition toured from 1 January-31 December, but does not give specific dates.<br><br>New York, The Century Association, Aspects of New York City Life (1 March-30 April 1950), listed in catalogue.<br><br>New York, The Century Association, Exhibition of Sporting Art (13 January-28 March 1954), listed in catalogue.<br><br>Columbus, The Columbus Gallery of Fine Arts, Paintings by George Bellows (21 March-21 April 1957), cat. no. 11, illus. front cover.<br><br>Brooklyn, The Brooklyn Museum, Triumph of Realism: An Exhibition of European and American Realist Paintings 1850-1910 (3 October-19 November 1967), see Bellows: The Boxing Pictures p. 76: not in catalogue and did not go on tour.<br><br>New York, Whitney Museum of American Art, The Painters\' America: Rural and Urban Life, 1810-1910 (20 September-10 November 1974); traveled to: Houston, The Museum of Fine Arts (5 December 1974-19 January 1975); Oakland, The Oakland Museum (10 February-30 March 1975), cat. no. 6, illus. p. 132, fig. 154.<br><br>Buffalo, Albright-Knox Art Gallery, Heritage and Horizon: American Painting 1776-1976 (6 March-11 April 1976); traveled to: Detroit, The Detroit Institute of Arts (5 May-13 June 1976); Toledo, The Toledo Museum of Art (4 July-15 August 1976); Cleveland, The Cleveland Museum of Art (8 September-10 October 1976); cat. no. 38, illus.<br><br>Washington, D.C., National Gallery of Art, Bellows: The Boxing Pictures (5 September-2 January 1983), illus. cat. no. 2, plate 4, also included E. A. Carmean, Jr.\'s essay "Bellows: The Boxing Paintings," pp. 27-47, illus. in article p. 32, fig. 28; listed p. 74 with small illus.<br><br>Los Angeles, Los Angeles County Museum of Art, The Paintings of George Bellows (16 February-10 May 1992); traveled to: New York, Whitney Museum of American Art (5 June-30 August 1992); Columbus, Columbus Museum of Art (11 October 1992-3 January 1993); Fort Worth, Amon Carter Museum (20 February-9 May 1993); illus. figs. 16, 17 in Michael Quick\'s essay "Technique and Theory: The Evolution of George Bellows\' Painting Style," and fig. 9 in Marianne Doezema\'s "The \'Real\' New York;" cat. not numbered.<br><br>Washington, D. C., National Museum of American Art, Metropolitan Lives: The Ashcan Artists and Their New York, 1897-1917 (17 November 1995-17 March 1996), illus. fig. 179, p. 164, also included pp. 46-48, 81-88, 156-158, 163-171, 208-210, 215-217, 220, 223. (Not in CMA library: OCLC 921076645)<br><br>New York, Whitney Museum of American Art, The American Century: Art &amp; Culture 1900-1950 (23 April-22 August 1999)<br><br>The Cleveland Museum of Art (06/21/2005 - 09/11/2005); "CMA Highlights"<br><br>National Gallery of Art, Washington, DC (6/10/2012 - 10/8/2012),Metropolitan Museum of Art, NY (11/13/2012 - 2/18/2013), and the Royal Academy of Arts, London, UK (3/16/2013): "George Bellows (1882-1925)", ex. cat. no. 17, p, 82, detail on cover and inside cover. (Not in CMA library: OCLC 801141298)',
        "Philadelphia, The Pennsylvania Academy of the Fine Arts, The One Hundred and Fifth Annual Exhibition of The Pennsylvania Academy of the Fine Arts (23 January-20 March 1910), cat. no. 323, listed p. 37 as Club Night.",
        "New York, Galleries 29-31 West Thirty-Fifth St., Exhibition of Independent Artists (1-27 April 1910), cat. no 20 as Club Night.",
        "New York, Madison Gallery, (early 1911), see Bellows: The Boxing Pictures p. 75.",
        "Syracuse, Syracuse Museum of Fine Arts, Summer Exhibition of Paintings by American Artists (10 May-1 October 1911), no. 1 as Club Night; see Bulletin of Syracuse Museum of Fine Arts (October, 1911.",
        "Chicago, Marshall Filed (1911), see Bellows: The Boxing Pictures p. 75.",
        "Curtis Studios (1911), see Bellows: The Boxing Pictures p. 75.",
        "Cedar Rapids, IA, The Cedar Rapids Art Association, Art Gallery, Public Library, Iowa, Fifth Annual Art Exhibition (5-14 February 1913), no. 2.",
        "Rochester, NY, Rochester Industrial Exposition (7-19 September 1914), no. 6 as Club Night; see Bellows: The Boxing Pictures p. 75.",
        "Chicago, The Art Institute of Chicago, Paintings by George Bellows (10 December 1914-3 January 1915), no. 16 as Club Night; see Bulletin of The Art Institute of Chicago (1 January 1915), vol. IX, no. 1, p. 2-4, 8.",
        "Detroit, Detroit Museum of Art, Exhibition of Paintings by George Bellows (6-29 January 1915), no. 16 as Club Night; see Bulletin of The Detroit Museum of Art (January, 1915), vol. IX, no. 1, pp. 2, 4.",
        "Los Angeles, Los Angeles Museum of History, Science, and Art, Paintings by George Bellows (7-28 February 1915), no. 16 as Club Night.",
        "Minneapolis, The Minneapolis Institute of Art, Paintings by Lester D. Boronda; Paintings by George Bellows (4-31 May 1915), no. 37 as Club Night; see Bulletin of The Minneapolis Institute of Arts (May, 1915), vol. IV, no. 5, p. 46.",
        "Muskegon, MI, Hackley Art Gallery, Exhibition of Oil Paintings by George Bellows (9 June-August 1915), as Club Night.",
        "Worcester, MA, Worcester Art Museum, Exhibition of Paintings by George Bellows, New York City (5-26 September 1915), no. 13 as Club Night.",
        "Cincinnati, Cincinnati Art Museum, Special Exhibition of Paintings by Mr. George Bellows (October, 1915), no. 4 as Club Night.",
        "New York, Sponsored by The Junior Art Patrons of America, Fine Arts Building, First Retrospective Exhibition of American Art (7-21 May 1921), cat. no. 10, listed p. 13, not illus.",
        "",
      ],
    },
    provenance: [
      {
        description:
          "(Marie Sterner, New York, sold to the Cleveland Museum of Art)",
        citations: [],
        footnotes: [
          "Marie Sterner, owner of the Marie Sterner Gallery in New York, was Bellows' dealer.",
        ],
        date: "By 1922",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, OH",
        citations: [],
        footnotes: [],
        date: "1922-",
      },
    ],
    find_spot: null,
    related_works: [
      {
        id: 103801,
        description:
          "A Stag at Sharkey's, 1916. George Bellows (American, 1882-1925). Lithograph; image: 26.7 x 20 cm (10 1/2 x 7 7/8 in.). The Cleveland Museum of Art, Gift of Charles T. Brooks 1921.909",
        relationship: null,
      },
    ],
    former_accession_numbers: ["1059.1922", "1133.1922"],
    fun_fact:
      "George Bellows was raised in Columbus, Ohio, and attended Ohio State University where he played baseball and basketball.",
    digital_description: null,
    wall_description:
      "Bellows was no stranger to Sharkey’s Athletic Club, a raucous saloon with a backroom boxing ring, located near his studio. Founded by Tom “Sailor” Sharkey, an ex-fighter who had also served in the US Navy, the club attracted men seeking to watch or participate in matches. Because public boxing was illegal in New York at the time, a private event had to be arranged in order for a bout to take place. Participation was usually limited to members of a particular club, but whenever an outsider competed, he was given temporary membership and known as a “stag.” Although boxing had its share of detractors who considered it uncouth at best or barbaric at worst, its proponents—among them President Theodore Roosevelt—regarded it a healthy manifestation of manliness. Around the time Bellows painted <em>Stag at Sharkey’s, </em>boxing was moving from a predominantly working-class enterprise to one with greater genteel appeal. For some contemporaries, boxing was a powerful analogy for the notion that only the strongest and fittest would flourish in modern society.",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1922.1133-stag-at-sharkey-s",
      ],
    },
    citations: [
      {
        citation:
          'Milliken, William M. "The Second Exhibition of Contemporary American Painting." <em>The Bulletin of the Cleveland Museum of Art.</em> 9:6 (June, 1922). 95-102.',
        page_number: "Mentioned: p. 95-96; Reproduced: p. 106",
        url: "https://www.jstor.org/stable/25136578",
      },
      {
        citation:
          'Glasier, Jessie C. "Museum Gets Prize-Winning Canvases: Bellows Subject, Kent Landscape Are Acquisitions." <em>The Plain Dealer </em>(Cleveland, OH), June 18, 1922.',
        page_number: "Reproduced: p. 3",
        url: null,
      },
      {
        citation:
          '"Cleveland Museum Acquires Typical Pictures by Bellows and Kent." <em>American Art News.</em> 20:37 (24 June 1922). pp. 1-10.',
        page_number: "Reproduced: p. 6",
        url: null,
      },
      {
        citation:
          'Milliken, William M. "Two Examples of Modern Painting: The Maine Coast, by Rockwell Kent." <em>The Bulletin of the Cleveland Museum of Art.</em> 9:10 (December, 1922). pp. 171-175.',
        page_number: "Reproduced: front cover",
        url: null,
      },
      {
        citation:
          "<em>Memorial Exhibition of the Work of George Bellows. </em>New York, NY: Metropolitan Museum of Art, 1925.",
        page_number: "Mentioned: p. 18, 24; Reproduced: p. 48",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art</em>. Cleveland, OH: The Cleveland Museum of Art, 1925.",
        page_number: "Reproduced: p. 36",
        url: "https://archive.org/details/CMAHandbook_80839/page/n38",
      },
      {
        citation:
          'Cortissoz, Royal. "Paintings and Prints by George Bellows: The Memorial Exhibition at the Metropolitan." <em>New York Herald Tribune</em> (New York, NY), October 11, 1925.',
        page_number: null,
        url: null,
      },
      {
        citation:
          "Isham, Samuel, and Royal Cortissoz. <em>The History of American Painting</em>. New York, NY: Macmillan Company, 1927.",
        page_number: "Mentioned: p. 576-579; Reproduced: p. 568",
        url: null,
      },
      {
        citation:
          "Mather, Frank Jewett, Charles Rufus Morey, and W. J. Henderson. <em>The Pageant of America: The American Spirit in Art</em>. New Haven, CT: Yale University Press, 1927.",
        page_number:
          "Mentioned: p. 138-139, 153-154; Reproduced: p. 153, fig. 249",
        url: null,
      },
      {
        citation:
          '"Un Artiste Americain." <em>L\'illustration.</em> 85 (September, 1927). pp. 308-31.',
        page_number: "Reproduced: p. 310",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art</em>. Cleveland, OH: The Cleveland Museum of Art, 1928.",
        page_number: "Reproduced: p. 44",
        url: "https://archive.org/details/CMAHandbook1928/page/n48",
      },
      {
        citation:
          "Bellows, Emma S. <em>The Paintings of George Bellows</em>. New York, NY: A.A. Knopf, 1929.",
        page_number: "Mentioned: p. VIII-XI; Reproduced: fig. 20",
        url: null,
      },
      {
        citation:
          "Kelly, Grace V. \"'Stag at Sharkey's.\" <em>The Plain Dealer </em>(Cleveland, OH), May 9, 1929.",
        page_number: "Mentioned: p. 24",
        url: null,
      },
      {
        citation:
          "Eggers, George W. <em>George Bellows</em>. New York: Whitney Museum of American Art, 1931.",
        page_number: "Mentioned: p. 7-18; Reproduced: p. 42-43",
        url: null,
      },
      {
        citation:
          "Neuhaus, Eugen. <em>The History &amp; Ideals of American Art</em>. Stanford University, CA: Stanford University Press; London: Oxford University Press, 1931.",
        page_number: "Reproduced: p. 339-340",
        url: null,
      },
      {
        citation:
          "Clark, Edna Maria. <em>Ohio Art and Artists</em>. Richmond, VA: Garrett &amp; Massie, 1932.",
        page_number: "p. 205-210",
        url: null,
      },
      {
        citation:
          "<em>American Painting &amp; Sculpture, 1862-1932</em>. New York, NY: Museum of Modern Art, 1932.",
        page_number: "Mentioned: p. 25",
        url: null,
      },
      {
        citation:
          "<em>Olympic Competition and Exhibition of Art: Catalogue of the Exhibition at the Los Angeles Museum of History, Science and Art</em>: Los Angeles, CA: Neuner Printing &amp; Lithograph Co., 1932.",
        page_number: "Mentioned: p. 50; Reproduced: illus. section",
        url: null,
      },
      {
        citation:
          'Mechlin, Leila. "The Olympic Art Exhibition." <em>The American Magazine of Art.</em> 25:3 (September, 1932). p. 136-150.',
        page_number: "Mentioned: p. 148",
        url: null,
      },
      {
        citation:
          "\"Art's Progress in America for 100 Years Shown at World's Fair.\" <em>The Art Diges</em>t. 8:16 (15 May 1933). p. 28-29.",
        page_number: "Mentioned: p. 28-29; Reproduced: 29",
        url: null,
      },
      {
        citation:
          'Frankfurter, Alfred M. "Art in the Century of Progress." <em>The Fine Arts.</em> 20:2 (June, 1933). p. 7-8, 59-61.',
        page_number: "Mentioned: p. 7-8, 59-61; Reproduced: p. 44",
        url: null,
      },
      {
        citation:
          '"A Stag at Sharkey\'s." <em>Chicago Tribune</em> (Chicago, IL), October 22, 1933.',
        page_number: "Reproduced:",
        url: null,
      },
      {
        citation:
          '"The Picture of the Week." <em>The Plain Dealer </em>(Cleveland, OH), November 12 1933.',
        page_number: "Reproduced",
        url: null,
      },
      {
        citation:
          'Pollak, Frances M., and Greta A. Cornell. "George Wesley Bellows-Painter and Graver." <em>The Index of Twentieth Century Artists</em>. 1:6 (March, 1934). p. 92-93.',
        page_number: "Mentioned: p. 92-93",
        url: null,
      },
      {
        citation:
          "Gardner, Helen. <em>Art Through the Ages: An Introduction to Its History &amp; Significance</em>. New York: Harcourt, Brace and Company, 1936.",
        page_number: "Mentioned: p. 687",
        url: null,
      },
      {
        citation:
          "Burroughs, Alan. <em>Limners and Likenesses; Three Centuries of American Painting</em>. Cambridge, MA: Harvard University Press, 1936.",
        page_number: "Mentioned: p. 206-211.",
        url: null,
      },
      {
        citation:
          "<em>Catalogue of the Twentieth Anniversary Exhibition of the Cleveland Museum of Art: The Official Art Exhibit of the Great Lakes Exposition.</em> Cleveland, Ohio: Artcraft Printing Company, 1936.",
        page_number: "Mentioned: p. 129-130",
        url: null,
      },
      {
        citation:
          "<em>Catalogue of an Exhibition of American Painting from 1860 Until Today at the Cleveland Museum of Art</em>. Cleveland, OH: Artcraft Printing Co., 1937.",
        page_number: "Mentioned: p. 11-12",
        url: null,
      },
      {
        citation:
          "<em>Trois siècles d'art aux États-Unis: exposition organisée en collaboration avec le Museum of Modern Art, New-York</em>. Paris, France: Éditions des musées nationaux, 1938.",
        page_number: "Reproduced: illus. fig. 28",
        url: null,
      },
      {
        citation: '"Bellows (1882-1925)." <em>Life, </em>31 October 1938.',
        page_number: "Reproduced",
        url: null,
      },
      {
        citation:
          "<em>Life in America: A Special Loan Exhibition of Paintings Held During the Period of the New York World's Fair, April 24 to October 29</em>. New York, NY: [Scribner Press], 1939.",
        page_number: "Mentioned and Reproduced: p. 211",
        url: null,
      },
      {
        citation:
          "Stites, Raymond S. <em>The Arts and Man</em>. New York, NY: Whittlesey House; London: McGraw-Hill Book Company, Inc., 1940.",
        page_number: "Mentioned: p. 804-806; Reproduced: p. 806",
        url: null,
      },
      {
        citation:
          "<em>An Exhibition of Great Paintings in Aid of the Canadian Red Cross and of Small Pictures by Members of the Ontario Society of Artists</em>. Toronto, Canada: The Art Gallery of Toronto, 1940.",
        page_number: "Reproduced: p. 24",
        url: null,
      },
      {
        citation:
          'McB[ride], H[enry]. "As to the Style in Art." <em>The Sun</em> (New York, NY), January 6, 1940.',
        page_number: null,
        url: null,
      },
      {
        citation:
          'Francis, Henry Sayles. "The Lithographs of George Wesley Bellows." <em>Print Collector\'s Quarterly. </em>27 (April, 1940). p. 138-165.',
        page_number: null,
        url: null,
      },
      {
        citation:
          'Milliken, William M. "Silver Jubilee Exhibition." <em>The Bulletin of the Cleveland Museum of Art</em> 28, no. 6 (1941): 88-111.',
        page_number: "Mentioned: p. 89; Reproduced: p. 111",
        url: "https://www.jstor.org/stable/25140932",
      },
      {
        citation:
          '"Cleveland Offers the Evidence for the First 25 Years." <em>ARTnews.</em> 40:11 (September, 1941). p. 13-25.',
        page_number: "Mentioned: p. 13, 25; Reproduced: p. 25",
        url: null,
      },
      {
        citation:
          "Boswell, Peyton. <em>George Bellows</em>. New York, NY: Crown Publishers, 1942.",
        page_number: "Mentioned: p. 9-30; Reproduced: p. 37",
        url: null,
      },
      {
        citation:
          "Walker, John, and Macgill James. <em>Great American Paintings from Smibert to Bellows, 1729-1924</em>. London: Oxford University Press, 1943.",
        page_number: "Mentioned: p. 1, 17-20; Reproduced: p. 21, fig. 101",
        url: null,
      },
      {
        citation:
          'Boswell, Peyton. "Bellows\' First Patron." <em>Art Digest.</em> 18 (15 January 1943).',
        page_number: null,
        url: null,
      },
      {
        citation:
          "<em>Sport in American Art</em>. Boston, MA: Museum of Fine Arts, Boston, 1944.",
        page_number: "Mentioned: p. 8",
        url: null,
      },
      {
        citation:
          "Edgell, George H. \"Pursuit of Pleasure in Paint: Boston Presents the First Exhibition of 'Sport in American Art.'\" <em>ARTnews.</em> 43:12 (1-14 October, 1944). p. 13-26.",
        page_number: "Mentioned: p. 13-14, 26; Reproduced: p. 15",
        url: null,
      },
      {
        citation:
          "<em>Paintings in the Cleveland Museum of Art. </em>[Cleveland]: The Cleveland Museum of Art, 1945.",
        page_number: "Reproduced: p. 15",
        url: "https://archive.org/details/CMAPaintings1945/page/n23",
      },
      {
        citation:
          'Tunis, John R. "Painter of the Prize Ring Drama: The National Gallery Honors George Bellows, Who Captured Not Only the Color, But Also the Cruelty of the Prize Ring." <em>The New York Times Magazine</em> (New York, NY), 7 January 1945.',
        page_number: "Mentioned: p. 18; Reproduced: p. 19",
        url: null,
      },
      {
        citation:
          'Sweet, Frederick A. "Bellows 23 Years after Dempsey-Firpo." <em>ARTnews.</em> 44:19 (January, 1946). p. 12-28.',
        page_number: "Mentioned: p. 12-13, 27-28",
        url: null,
      },
      {
        citation:
          "<em>American Painting: From the Eighteenth Century to the Present Day</em>. London, England: The Tate Gallery, 1946.",
        page_number: "Mentioned: p. 9",
        url: null,
      },
      {
        citation:
          "<em>George Bellows: Paintings, Drawings and Prints</em>. Chicago, IL: The Art Institute of Chicago, 1946.",
        page_number: "Mentiond: p. 37",
        url: null,
      },
      {
        citation:
          'Bulliet, C. J. "First Full View of George Bellows for Chicago."<em> Art Digest. </em>21 (1 February 1946).',
        page_number: "Mentioned: p. 8",
        url: null,
      },
      {
        citation:
          '"George W. Bellows: An American Master of Realistic Painting Comes Into His Own With Big Memorial Show." <em>Life,</em> March 25, 1946.',
        page_number:
          "Mentioned: p. 75-83; 1917 lithograph Reproduced: p. 76-77",
        url: null,
      },
      {
        citation:
          'Rich, Daniel Catton. "Bellows Revalued." <em>Magazine of Art. </em>39 (April, 1946): p. 145-147.',
        page_number: "Mentioned: p. 145-147",
        url: null,
      },
      {
        citation:
          '"American Art: From the XVIIIth Century to the Present Day: Pictures Now on Exhibition at the Tate Gallery." <em>The Illustrated London News,</em> June 22, 1946.',
        page_number: "Mentioned: p. 688-689; Reproduced: p. 688",
        url: null,
      },
      {
        citation:
          'Sutton, Denys. "La Peinture Américaine à la Tate Gallery." <em>Gazette des Beaux-Arts</em>, June 28, 1946.',
        page_number: null,
        url: null,
      },
      {
        citation:
          'Winchester, Alice. "American Painting in London: A Comment on The Tate Gallery Exhibition." <em>Antiques. </em>51:2 (February, 1947). p. 100-127.',
        page_number: "Mentioned: p. 100-101, 108, 127",
        url: null,
      },
      {
        citation:
          'Dame, Lawrence."Regarding Art: The Stags on Ropes." <em>Boston Herald,</em> October 17, 1948.',
        page_number: null,
        url: null,
      },
      {
        citation:
          "Gardner, Helen. <em>Art Through the Ages</em>. 3rd edition. New York: Harcourt, Brace and Co, 1949.",
        page_number: "Mentioned: p. 395-396; Reproduced: p. 395",
        url: null,
      },
      {
        citation:
          '"Revolt in Boston: Shootin\' Resumes in the Art World." <em>Life,</em> February 21, 1949.',
        page_number: "Reproduced: p. 85",
        url: null,
      },
      {
        citation:
          "<em>Catalogue de reproductions en couleurs de la peinture de 1860 à 1949</em>. Paris: UNESCO, 1949.",
        page_number: "Mentioned: p. 44-45; Reproduced: p. 45",
        url: null,
      },
      {
        citation:
          'Rowland, Benjamin, Jr. "American Painting Since 1900." <em>Phoenix</em>. 4 (April 1949). p. 85-111.',
        page_number: "Reproduced: p. 91",
        url: null,
      },
      {
        citation:
          "Robb, David M. <em>The Harper History of Painting: The Occidental Tradition</em>. New York: Harper, 1951.",
        page_number: "Mentioned: p. 892-896; Reproduced: p. 894, fig. 494",
        url: null,
      },
      {
        citation:
          "Bazin, Germain. <em>History of Modern Painting</em>. New York: Hyperion Press; distributed by Macmillan, 1951.",
        page_number: "Mentioned: p. 285, 287; Reproduced: p. 290",
        url: null,
      },
      {
        citation:
          '"Pittura Americana Moderna." <em>Sele arte</em>. Firenze: Studio italiano di storia dell\'arte, 1952.',
        page_number: "Mentioned: p. 13-16; Reproduced: p. 13",
        url: null,
      },
      {
        citation:
          "Brown, Milton W. <em>American Painting: From the Armory Show to the Depression.</em> Princeton, NJ: Princeton University Press, 1955.",
        page_number: "Mentioned: p. 33-36, 167-172; Reproduced: p. 34",
        url: null,
      },
      {
        citation:
          "Morris, Charles W. <em>Varieties of Human Value</em>. Chicago, IL: University of Chicago Press, 1956.",
        page_number: "Mentioned: p. 144-162; Reproduced: fig. 77",
        url: null,
      },
      {
        citation:
          "Craven, Thomas. <em>The Rainbow Book of Art</em>. Cleveland: World Pub. Co, 1956.",
        page_number: "Mentioned: p. 236-237; Reproduced: p. 233",
        url: null,
      },
      {
        citation:
          "Schulberg, Budd. <em>The Harder They Fall</em>. 2nd edition. New York: Random House Publishing, 1956.",
        page_number: "Reproduced: cover",
        url: null,
      },
      {
        citation:
          "Eliot, Alexander. <em>Three Hundred Years of American Painting</em>. New York: Time Inc, 1957.",
        page_number: "Mentioned: p. 284, 289-293; Reproduced: p. 290",
        url: null,
      },
      {
        citation:
          "<em>George Bellows: A Retrospective Exhibition</em>. Washington, DC: National Gallery of Art, 1957.",
        page_number: "Reproduced: p. 47",
        url: null,
      },
      {
        citation:
          "<em>Paintings by George Bellows at Columbus Gallery of Fine Arts. </em>Columbus, OH: The Columbus Gallery of Fine Arts, 1957.",
        page_number: "Reproduced: cover",
        url: null,
      },
      {
        citation:
          'Huth, John F. "An Artist at Ohio." <em>Pictorial Magazine</em>, <em>The Plain Dealer </em>(Cleveland, OH), January 20, 1957.',
        page_number: "Reproduced: p. 18; Mentioned; pp. 18-19",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland, OH: The Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 550",
        url: "https://archive.org/details/CMAHandbook1958/page/n102",
      },
      {
        citation:
          "Milliken, William Mathewson. <em>The Cleveland Museum of Art Collections</em>. Cleveland, OH: Cleveland Museum of Art, 1960.",
        page_number: "Mentioned: p. 40-42",
        url: null,
      },
      {
        citation:
          "Munro, Eleanor C. <em>The Golden Encyclopedia of Art: Painting, Sculpture, Architecture, and Ornament, from Prehistoric Times to the Twentieth Century</em>. New York: Golden Press, 1961.",
        page_number: "Reproduced: p. 243",
        url: null,
      },
      {
        citation:
          "<em>The Fireside Book of Boxing. </em>Edited by Wilfred Charles Heinz. New York: Simon And Schuster, 1961.",
        page_number: "Reproduced: front cover",
        url: null,
      },
      {
        citation:
          "Chase, Alice Elizabeth. <em>Famous Paintings: An Introduction to Art</em>. New York: Platt &amp; Munk, 1962.",
        page_number: "Reproduced: p. 54-55",
        url: null,
      },
      {
        citation:
          "Selvig, Forrest, ed. <em>Four Centuries of American Art</em>. Minneapolis, MN: The Minneapolis Institute of Arts, 1963.",
        page_number: "Reproduced: p. 23",
        url: null,
      },
      {
        citation:
          "Bazin, Germain. <em>Kindlers Malerei Lexikon: 1000 Malersignaturen, 1200 farbige Reproducktionen, 3000 schwarzweisse Reproduktionen in sechs Bänden</em>. Zurich: Kindler Verlag, 1964.",
        page_number: "Mentioned: p. 302-303; Reproduced: p. 302.",
        url: null,
      },
      {
        citation:
          "<em>200 Years of American Painting, April 1-May 31, 1964</em>. St. Louis, MO: City Art Museum of St. Louis, 1964.",
        page_number: "Mentioned and Reproduced: p. 35",
        url: null,
      },
      {
        citation:
          'Seaver, Edwin. "The Sand Cart, George Bellows (American School 1882-1925)." <em>Book-of-the-Month-Club News</em>, 1965.',
        page_number: null,
        url: null,
      },
      {
        citation:
          "Morgan, Charles H. <em>George Bellows, Painter of America</em>. New York: Reynal, 1965.",
        page_number:
          "Mentioned: p. 9, 69, 98-102, 124-127, 197-199, 217-221, 254-255; Reproduced: pp. 320, 321",
        url: null,
      },
      {
        citation:
          "Laver, James. <em>The Age of Optimism: Manners and Morals 1848-1914</em>. London: Weidenfeld &amp; Nicolson, 1966.",
        page_number: "Reproduced",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 190",
        url: "https://archive.org/details/CMAHandbook1966/page/n214",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 190",
        url: "https://archive.org/details/CMAHandbook1969/page/n214",
      },
      {
        citation:
          "Brown, Milton W. <em>American Painting: From the Armory Show to the Depression.</em> Princeton, NJ: The University Press, 1972.",
        page_number: "Reproduced: P. 34",
        url: "",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 236",
        url: "https://archive.org/details/CMAHandbook1978/page/n256",
      },
      {
        citation:
          "<em>George Wesley Bellows: Paintings, Drawings, and Prints</em>. Columbus, OH: Columbus Museum of Art, 1979.",
        page_number: "Reproduced: p. 23",
        url: null,
      },
      {
        citation:
          'Kitaj, R. B., and Timothy Hyman. "A Return to London" IN <em>Kitaj Paintings, Drawings, Pastels.</em> John Ashebury, Joe Shannon, Jane Livingston, 41. New York, N.Y.: Thames and Hudson, 1983.',
        page_number: "Mentioned: p. 41",
        url: null,
      },
      {
        citation:
          "Ohio Historical Society, and Ohio History Connection. Timeline: A Publication of the Ohio Historical Society. [Columbus, Ohio]: The Society, 1984.",
        page_number: "20",
        url: null,
      },
      {
        citation:
          "Salwen, Peter. <em>Upper West Side Story: A History and Guide. </em>New York: Abbeville Press Publishers, 1989.",
        page_number: "Referenced: p. 181-182, 202",
        url: null,
      },
      {
        citation:
          "Haskell, Barbara. <em>The American Century: Art &amp; Culture, 1900-1950</em>. New York, NY: Whitney Museum of American Art, 1999.",
        page_number: "Mentioned and Reproduced: p. 92-93",
        url: null,
      },
      {
        citation:
          "Christie, Manson &amp; Woods International Inc. American Art. New York: Christie's, December 5, 2013 .",
        page_number: null,
        url: null,
      },
      {
        citation:
          'Fagg, John. "George Bellows." <em>Print Quarterly.</em> 31:1 (March 2014). 107-111.',
        page_number: "Reproduced: p. 110, fig. 106.",
        url: null,
      },
      {
        citation:
          'Gillies, Max. "Exploring Ohio\'s Art." <em>Fine Art Connoisseur. </em>11:5 (September/October 2014).',
        page_number: "Reproduced: p. 100",
        url: null,
      },
      {
        citation:
          "Milan, Wardell, Cay Sophie Rabinowitz, Alvin Hall, Carter E. Foster, and Leslie Hewitt. <em>Wardell Milan: Between Late Summer and Early Fall</em>. New York, NY : Osmos Books, 2015.",
        page_number: "Reproduced: P. 37",
        url: null,
      },
      {
        citation:
          'Brock, Charles. "George Bellows: Reviews and Reflections." In <em>George Bellows Revisited: New Considerations of the Painter\'s Oeuvre.</em> Melissa M. Wolfe, ed. Newcastle upon Tyne, UK: Cambridge Scholars Publishing, 2016.',
        page_number: "Reproduced: p. 7, fig. 1.1. Mentioned 9, 10, 103, 105.",
        url: null,
      },
      {
        citation:
          "Boylan, Alexis L. <em>Ashcan Art, Whiteness, and the Unspectacular Man.</em> New York: Bloomsbury Academic, 2017.",
        page_number: "Reproduced: pl. 4",
        url: null,
      },
      {
        citation:
          "Slayton, Robert A. <em>Beauty in the City: The Ashcan School. </em>Albany: Excelsior Editions, State University of New York Press, 2017.",
        page_number: "Reproduced: p. 143, fig. 8.13",
        url: null,
      },
      {
        citation:
          "Corbett, David Peters. Die Ashcan School: Lebensbilder der New Yorker und iher Stadt. In <em>Es war einmal in Amerika: 300 Jahre US-Amerikanische Kunst, 164-171. </em>Barbara Schaefer and Anita Hachmann, 2018.",
        page_number: "Reproduced; p. 168, abb. 13",
        url: null,
      },
      {
        citation:
          "Johnston, April Nehring. <em>The Making of Cleveland's Artist: The Aesthetic and Cultural Politics of Boundary Crossing in the Industrial Landscape Paintings of Carl Gaertner, 1923-1952.</em> Thesis, Washington University, 2019.",
        page_number: "Mentioned: P. 24",
        url: null,
      },
      {
        citation:
          "Sublette, J. Mark. <em>Maynard Dixon's American West: Along the Distant Mesa</em>. Tucson, AZ: Mark Sublette Medicine Man Gallery, 2018.",
        page_number: "Mentioned and reproduced: p. 267, fig. 318",
        url: null,
      },
      {
        citation:
          '"Punch drunk." <em>Christie\'s magazine</em> (November/December 2019): 108-117.',
        page_number: "Mentioned p. 113-114; Reproduced p. 116-117",
        url: null,
      },
      {
        citation:
          'Pearson, Harry. "Competitive streaks."<em> Apollo</em> 193, no. 698 (June 2021): 60-65.',
        page_number: "Reproduction p.60, fig. 1; mentioned p. 64",
        url: "",
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1922.1133",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1922.1133/1922.1133_web.jpg",
        width: "1194",
        height: "893",
        filename: "1922.1133_web.jpg",
        filesize: "152341",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1922.1133/1922.1133_print.jpg",
        width: "3400",
        height: "2542",
        filename: "1922.1133_print.jpg",
        filesize: "1240178",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1922.1133/1922.1133_full.tif",
        width: "10552",
        height: "7890",
        filename: "1922.1133_full.tif",
        filesize: "249794924",
      },
    },
    updated_at: "2022-03-30 09:00:08.603000",
  },
  {
    id: 110180,
    accession_number: "1928.8",
    share_license_status: "CC0",
    tombstone:
      "The Race Track (Death on a Pale Horse), c. 1896–1908. Albert Pinkham Ryder (American, 1847-1917). Oil on canvas; framed: 84.5 x 102 x 6.5 cm (33 1/4 x 40 3/16 x 2 9/16 in.); unframed: 70.5 x 90 cm (27 3/4 x 35 7/16 in.). The Cleveland Museum of Art, Purchase from the J. H. Wade Fund 1928.8",
    current_location: "207 American Realism",
    title: "The Race Track (Death on a Pale Horse)",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "c. 1896–1908",
    creation_date_earliest: 1896,
    creation_date_latest: 1908,
    creators: [
      {
        id: 3267,
        description: "Albert Pinkham Ryder (American, 1847-1917)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography: null,
        name_in_original_language: null,
        birth_year: "1847",
        death_year: "1917",
      },
    ],
    culture: ["America, 19th century"],
    technique: "oil on canvas",
    support_materials: [],
    department: "American Painting and Sculpture",
    collection: "American - Painting",
    type: "Painting",
    measurements:
      "Framed: 84.5 x 102 x 6.5 cm (33 1/4 x 40 3/16 x 2 9/16 in.); Unframed: 70.5 x 90 cm (27 3/4 x 35 7/16 in.)",
    dimensions: {
      framed: {
        height: 0.845,
        width: 1.02,
        depth: 0.065,
      },
      unframed: {
        height: 0.705,
        width: 0.9,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Purchase from the J. H. Wade Fund",
    copyright: null,
    inscriptions: [
      {
        inscription: 'Signed lower left: "A. P. Ryder"',
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 312517,
          title:
            "The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition",
          description:
            "<i>The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 26-October 12, 1936).",
          opening_date: "1936-06-26T04:00:00",
        },
        {
          id: 312462,
          title: "Exhibition of American Painting from 1860 Until Today",
          description:
            "<i>Exhibition of American Painting from 1860 Until Today</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 23-October 4, 1937).",
          opening_date: "1937-06-23T04:00:00",
        },
        {
          id: 312428,
          title: "Expressionism and Related Movements",
          description:
            "<i>Expressionism and Related Movements</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (January 25-February 28, 1939).",
          opening_date: "1939-01-25T05:00:00",
        },
        {
          id: 312341,
          title: "The Silver Jubilee Exhibition",
          description:
            "<i>The Silver Jubilee Exhibition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 23-September 28, 1941).",
          opening_date: "1941-06-23T04:00:00",
        },
        {
          id: 311898,
          title: "35th Anniversary Exhibition",
          description:
            "<i>35th Anniversary Exhibition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 20-September 30, 1951).",
          opening_date: "1951-06-20T04:00:00",
        },
        {
          id: 314043,
          title: "Art of the United States: 1670-1966",
          description:
            "<i>Art of the United States: 1670-1966</i>. Whitney Museum of American Art (organizer) (September 28-November 27, 1966).",
          opening_date: "1966-09-28T04:00:00",
        },
        {
          id: 302330,
          title: "Heritage and Horizon: American Painting 1776 - 1976",
          description:
            "<i>Heritage and Horizon: American Painting 1776 - 1976</i>. Albright-Knox Art Gallery, Buffalo, NY (organizer) (March 7-April 11, 1976); The Detroit Institute of Arts, Detroit, MI (May 2-June 13, 1976); The Toledo Museum of Art, Toledo, OH (July 4-August 15, 1976); The Cleveland Museum of Art, Cleveland, OH (September 8-October 24, 1976).",
          opening_date: "1976-03-07T05:00:00",
        },
        {
          id: 443572,
          title:
            "Kaleidoscope of American Painting, Eighteenth and Nineteenth Centuries",
          description:
            "<i>Kaleidoscope of American Painting, Eighteenth and Nineteenth Centuries</i>. William Rockhill Nelson Gallery, Kansas City, MO (organizer) (December 1, 1977-January 22, 1978).",
          opening_date: "1977-12-01T05:00:00",
        },
        {
          id: 188842,
          title: "Conserving the Past for the Future",
          description:
            "<i>Conserving the Past for the Future</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (March 4-May 6, 2001).",
          opening_date: "2001-03-04T00:00:00",
        },
        {
          id: 184052,
          title: "Cleveland Collects American Art of the Gilded Age",
          description:
            "<i>Cleveland Collects American Art of the Gilded Age</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (February 23-May 18, 2003).",
          opening_date: "2003-02-23T00:00:00",
        },
      ],
      legacy: [
        "New York, Metropolitan Museum of Art, Loan Exhibition of the Works of Albert P. Ryder (11 March - 14 April 1918), cat. no. 48, pl. 48.",
        "New York, The Metropolitan Museum of Art (1918–1924).",
        "New York, Anderson Galleries, American Art from the Collections of Members of the Associated Dealers in American Painting (8 - 26 February 1927).",
        "Cleveland, Ohio, Cleveland Museum of Art, Memorial Exhibition of Paintings by Thomas Eakins, Albert P. Ryder, and J. Alden Weir (1928).",
        "New York, The Museum of Modern Art, Sixth Loan Exhibition: Winslow Homer, Albert P. Ryder, Thomas Eakins (May 1930), no. 61, p. 61.",
        "New York, The Metropolitan Museum of Art, The Taste of Today in Masterpieces of Painting Before 1900 (10 July - 2 October 1932).",
        "Chicago, Art Institute of Chicago, The Century of Progress Exhibition (1 June - 1 November 1933), no. 475.",
        "Paris, Musée du Jeu de Paume, Trois Siècles d'Art aux États-Unis (May - July 1938), no. 144.<br> New York, The Museum of Modern Art, Art in Our Time: The Tenth Anniversary Exhibition of The Museum of Modern Art (April - October 1939), cat. no. 26, pl. 26.",
        "New York, M. Knoedler &amp; Co., Two American Romantics of the Nineteenth Century: Robert Loftin Newman 1827-1912, Albert Pinkham Ryder 1847 - 1917 (13 November - 2 December 1939), no. 9.",
        "Hartford, Connecticut, Wadsworth Atheneum, Night Scenes (15 February - 7 March 1940), no. 56.",
        "Pittsburgh, Carnegie Institute, Survey of American Painting (24 October - 15 December 1940), cat. no. 205 (not ill.)",
        "London, The Tate Gallery, American Painting: from the Eighteenth Century to the Present Day (Summer 1946), cat. no. 178.",
        "New York, Whitney Museum of American Art, Ryder Centenary Exhibition (18 October - 30 November 1947), no. 31, ill. p. 34.",
        "Philadelphia, Philadelphia Museum of Art, Diamond Jubilee Exhibition: Masterpieces of American Painting (4 November 1950 - 11 February 51); no. 62.",
        "New York, National Academy of Design, The American Tradition Exhibition of Paintings (3 December - 16 December1951), no. 120, ill. p. 44.",
        "Buffalo, New York, Albright Art Gallery, Expressionism in American Painting (10 May - 29 June 1952), no. 4, ill. p. 13.",
        "Frankfurt, Städelsches Kunstinstitut, Hundert Jahre Amerikanische Malerei 1800-1900, An Exhibition Circulated by the American Federation of Arts (14 March - 3 May 1953); traveled to München, Bayerische Staatsgemaldesammlungen (15 May - 28 June 1953); traveled to Hamburg, Kunstalle (18 July - 30 August 1953), cat. no. 78, p. 34, ill. p. 21.",
        "Rome, Galleria Nazionale d'Arte Moderna, Mostra di Pittura Americana del XIX Secolo (19 January - 7 February 1954), cat. no. 53, pl. 19.",
        "New York, Whitney Museum of American Art, American Painting in the Nineteenth Century (1954), cat. no. 53.",
        "Washington, D. C., The Corcoran Gallery, The American Muse (1959), cat. no. 63.",
        "Buffalo, New York, Albright-Knox Art Gallery, Heritage and Horizon: American Painting 1776 - 1976 (6 March - 11 April 1976), cat. no. 26; traveled to Detroit, Detroit Institute of Arts (5 May - 13 June 1976); traveled to Toledo, Toledo Museum of Art (4 July - 15 August 1976); traveled to Cleveland, Cleveland Museum of Art (8 September - 10 October 1976).",
        "Kansas City, Missouri, William Rockhill Nelson Gallery of Art, Kaleidoscope of American Painting, Eighteenth and Nineteenth Centuries (2 December 1977 - 22 January 1978), no. 37, ill. p. 34.",
        "Washington, D.C., National Museum of American Art, The Art of Albert Pinkham Ryder (6 April - 29 July 1990); traveled to Brooklyn, Brooklyn Museum of Art (14 September 1990 - 8 January 1991); exhibition catalog published for the NMAA by the Smithsonian Institution Press, Washington, 1989), p.l 98, fig 86, cat. no. 51, p. 275.",
      ],
    },
    provenance: [
      {
        description:
          "Albert Pinkham Ryder [1847-1914], New York, NY, sold to Louis Lehmeier",
        citations: [],
        footnotes: null,
        date: "c. 1896–1906",
      },
      {
        description: "Louis Lehmeier, returned to the artist",
        citations: [],
        footnotes: [
          "1It is unclear why Lehmeier, an acquaintance of Ryder, returned the painting to the artist.",
        ],
        date: "1906–by 1913",
      },
      {
        description: "Albert Pinkham Ryder, probably sold to Albert T. Sanden",
        citations: [],
        footnotes: null,
        date: "After 1906–by 1913",
      },
      {
        description: "Albert T. Sanden, New York, NY",
        citations: [],
        footnotes: [
          "1Sanden, one of Ryder's closest friends, owned 11 paintings by the artist, most of which he purchased directly from the artist. Since Lehmeier returned this painting to Ryder, it is probable that this painting was one of them.",
        ],
        date: "By 1913–1924",
      },
      {
        description:
          "(Ferargil Galleries, New York, NY, sold to the Cleveland Museum of Art)",
        citations: [],
        footnotes: [
          '1Thomas H. Russell of Ferargil Galleries wrote to Margaret Evans of the Butler Institute of American Art that they had just acquired a group of Ryder paintings, including "The Race Track," known as the "Sanden pictures."',
        ],
        date: "1924",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, Ohio",
        citations: [],
        footnotes: null,
        date: "1928–",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: ["1931.27"],
    fun_fact:
      "Counterclockwise horse racing in the United States was not standardized until the 1920s.",
    digital_description: null,
    wall_description:
      "Ryder’s subject was inspired by a horse race that took place in New York during 1888. One of the artist’s friends wagered $500 on the race and then committed suicide after the horse lost. Medieval symbolism infuses the composition: death appears as a skeleton on horseback holding a scythe with which he cuts down the living, while a snake-a sign of temptation and evil-slithers in the foreground. An intense man, Ryder worked on the painting for several years and was deeply reluctant to part with it.",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1928.8-the-race-track-death",
      ],
    },
    citations: [
      {
        citation:
          "Thomas H. Russell, letter to William Milliken, Feb. 13, 1924, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation: "<em>The Art Digest</em> (Feb. 1, 1928):2.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Thomas H. Russell, letter to Margaret Evans, Feb. 5, 1924, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Thomas H. Russell, letter to “sirs,” Feb. 5, 1924, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Henry S. Francis, letter to Lloyd Goodrich, July 24, 1947, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation: "<em>The Art Digest</em> (Feb. 1, 1928): 2.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Zachary Ross, “Linked by Nervousness: Albert Pinkham Ryder and Dr. Albert T. Sanden,” <em>American Art</em> 17.2 (Summer 2003): 86-96.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Thomas H. Russell, letter to Margaret Evans, Feb. 5, 1924, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Sophie G. Lehmaier, letter to Henry S. Francis, July 23, 1947, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Sophie G. Lehmaier, letter, June 26, 1947, Goodrich, Lloyd and Edith Havens Papers Relating to Albert Pinkham Ryder, #F32, Special Collections, University of Delaware Library.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "W. M. M. “‘The Race Track,’ or ‘Death on a Pale Horse’ by Albert Pinkham Ryder.” <em>The Bulletin of the Cleveland Museum of Art</em> 15, no. 3 (March 1928): 65–71.",
        page_number: "Mentioned: P. 65-71; Reproduced: P. 67",
        url: "http://www.jstor.org/stable/25137113",
      },
      {
        citation:
          "Burroughs, Alan. <em>Limners and Likenesses; Three Centuries of American Painting.</em> Cambridge, Mass: Harvard University Press, 1936.",
        page_number: "Mentioned: P. 155-156",
        url: "",
      },
      {
        citation:
          "Milliken, William M. “American Painting from 1860 until Today.” <em>The Bulletin of the Cleveland Museum of Art</em> 24, no. 6 (June 1937): 96–98.",
        page_number: "Mentioned: P. 97",
        url: "http://www.jstor.org/stable/25137854",
      },
      {
        citation:
          "Kent, Rockwell, ed. <em>World-Famous Paintings.</em> New York: Wise &amp; Co., Inc, 1939.",
        page_number: "Reproduced: pl. 96",
        url: null,
      },
      {
        citation:
          "<em>Paintings in the Cleveland Museum of Art.</em> [Cleveland]: The Cleveland Museum of Art, 1945.",
        page_number: "Reproduced: p. 15",
        url: "https://archive.org/details/CMAPaintings1945/page/n23",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland, OH: The Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 542",
        url: "https://archive.org/details/CMAHandbook1958/page/n100",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 188",
        url: "https://archive.org/details/CMAHandbook1966/page/n212",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 188",
        url: "https://archive.org/details/CMAHandbook1969/page/n212",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 233",
        url: "https://archive.org/details/CMAHandbook1978/page/n253",
      },
      {
        citation:
          'Kitaj, R. B., and Timothy Hyman. "A Return to London" IN <em>Kitaj Paintings, Drawings, Pastels.</em> John Ashebury, Joe Shannon, Jane Livingston, 41. New York, N.Y.: Thames and Hudson, 1983.',
        page_number: "Mentioned: p. 41",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Interpretations: Sixty-Five Works from the Cleveland Museum of Art</em>. Cleveland, Ohio: Cleveland Museum of Art, 1991.",
        page_number: "Mentioned and Reproduced: no. 37",
        url: "",
      },
      {
        citation:
          "Gardner, Helen, Richard G. Tansey and Fred S. Kleiner.<em> Gardner's Art Through the Ages</em>. Fort Worth: Harcourt Brace College Publishers, 1996.",
        page_number: "Reproduced: p. 1009, fig. 26-87",
        url: null,
      },
      {
        citation:
          "Dijkstra, Bram. <em>American Expressionism: Art and Social Change, 1920-1950. </em>New York: H.N. Abrams, in association with the Columbus Museum of Art, 2003.",
        page_number: "Mentioned and Reproduced: P. 67-68, fig. 18",
        url: "",
      },
      {
        citation:
          "Novak, Barbara. <em>Voyages of the Self: Pairs, Parallels, and Patterns in American Art and Literature</em>. Oxford: Oxford University Press, 2007.",
        page_number: "Mentioned and reproduced: P. 114-115, fig. 6.4",
        url: "",
      },
      {
        citation:
          "Novak, Barbara. <em>American Painting of the Nineteenth Century: Realism, Idealism, and the American Experience</em>. Oxford; New York: Oxford University Press, 2007.",
        page_number: "Mentioned and Reproduced: P. 176-177, fig. 12.1",
        url: "",
      },
      {
        citation:
          "Adams, Henry. <em>What's American About American Art?: A Gallery Tour in the Cleveland Museum of Art. </em>Cleveland: Cleveland Museum of Art, 2008.",
        page_number: "Mentioned and reproduced: P. 10, fig. 4, 94-95",
        url: "",
      },
      {
        citation:
          "Wilson, Kristina. <em>The Modern Eye: Stieglitz, MoMA, and the Art of the Exhibition, 1925-1934</em>. New Haven: Yale University Press, 2009.",
        page_number: "Mentioned and Reproduced: P. 123",
        url: "",
      },
      {
        citation:
          "Cleveland Museum of Art, David Franklin, and C. Griffith Mann. <em>Treasures from the Cleveland Museum of Art</em>. Cleveland, OH: Cleveland Museum of Art, 2012.",
        page_number: "Mentioned and reproduced: P. 282-283",
        url: "",
      },
      {
        citation:
          'Kim, Miri. ""Right Matter in the Right Place": The Paintings of Albert Pinkham Ryder." <em>Center 35: Record of Activities and Research Reports </em>(June 2014-May 2015): 112-115.',
        page_number: "Mentioned: p. 114; reproduced: p. 112",
        url: null,
      },
      {
        citation:
          "Moore, John L., Esther Jun, Clodagh Keogh, William H. Robinson, Danni Shen, Enid Shomer, and Reto Thüring. Demise: Rina Banerjee, Esperanza Cortés, Jae Rhim Lee, Brian Maguire, Paolo Pelosini, Levent Tuncer. 2018, 4.",
        page_number: "Mentioned and reproduced: pp. 4-7.",
        url: "",
      },
      {
        citation:
          'Arendsee, M., and M. Steinman-Arendsee. "Take the CAN disability aesthetics tour, at the Cleveland Museum of art." <em>CAN Journal</em> (Winter 2019/20): 76-87.',
        page_number: "Reproduced & mentioned: p. 80",
        url: null,
      },
      {
        citation:
          "McCree, J. Woodrow. Washington Irving's Critique of American Culture: Sketching a Vision of World Citizenship. 2021.",
        page_number: "Mentioned and reproduced: p. 133, fig. 5.1",
        url: "",
      },
      {
        citation:
          "Cleveland Museum of Art, and David Franklin. <em>The Cleveland Museum of Art.</em> London: Scala Arts &amp; Heritage Publishers Ltd, 2012.",
        page_number: "Mentioned and Reproduced: P. 64-65",
        url: "",
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1928.8",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1928.8/1928.8_web.jpg",
        width: "900",
        height: "711",
        filename: "1928.8_web.jpg",
        filesize: "190928",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1928.8/1928.8_print.jpg",
        width: "3400",
        height: "2685",
        filename: "1928.8_print.jpg",
        filesize: "3014421",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1928.8/1928.8_full.tif",
        width: "14577",
        height: "11511",
        filename: "1928.8_full.tif",
        filesize: "503415724",
      },
    },
    updated_at: "2022-05-10 09:00:08.466000",
  },
  {
    id: 137259,
    accession_number: "1962.2",
    share_license_status: "CC0",
    tombstone:
      "Mme L... (Laure Borreau), 1863. Gustave Courbet (French, 1819-1877). Oil on fabric; framed: 112.4 x 93 x 12.1 cm (44 1/4 x 36 5/8 x 4 3/4 in.); unframed: 81 x 61.2 cm (31 7/8 x 24 1/8 in.). The Cleveland Museum of Art, Leonard C. Hanna, Jr. Fund 1962.2",
    current_location: "220 19th Century European",
    title: "Mme L... (Laure Borreau)",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1863",
    creation_date_earliest: 1863,
    creation_date_latest: 1863,
    creators: [
      {
        id: 1600,
        description: "Gustave Courbet (French, 1819-1877)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography:
          "Born into a wealthy farmer's family, Courbet began his training in 1831 at the Petit Séminaire in Ornans where, beginning in 1833, he studied under \"le père Baud,\" who had been a pupil of Gros (q.v.). He was befriended by poet Max Buchon, who would later write the first article on Courbet, claiming that he was the artist for the people. In 1837, hoping that Gustave would become a lawyer, his father sent him to the Collège Royal in Besançon. Despite his father's ambitions, Courbet began to study art at the academy there with Charles-Antoine Flageoulot (1774-1840), a former student of David (q.v.). By 1839 Courbet had moved to Paris to pursue a career in art. He refrained from entering the École des Beaux-Arts, studying instead briefly with Charles de Steuben (1788-1856) and preferring to learn how to paint by copying the works of the Old Masters in the museums. Courbet also wanted to work after life models and enrolled at the Académie Suisse. He began to submit paintings to the Salon, the majority of which were rejected. In 1846-47 Courbet traveled to the Netherlands where he studied the works of Rembrandt and Hals. The following year ten of his paintings were shown at the Salon, and together with his friends Baudelaire, Champfleury, and Buchon he became labeled a \"realist.\" Courbet's paintings shown at the 1851 Salon-Stonebreakers (1849, formerly Dresden Gemäldegalerie, destroyed during World War II), Peasants of Flagey (1850-55, Musée des Beaux-Arts, Besançon), and The Burial at Ornans (1849-50, Musée d'Orsay, Paris)-elicited criticism. Because Courbet represented the peasants as he saw them, without ennobling or idealizing them, his works met with disapproval. Moreover, these representations of peasants appeared at a time when the upper classes felt threatened by social unrest and by the instability of the republic. In 1855 Courbet financed an independent Pavillon du Réalisme near the Universal Exposition, where he showed his Painter's Studio (1854-55, Musée d'Orsay, Paris). He began to travel extensively, including visits to Gent, Brussels, Antwerp, Bruges, Cologne, Mainz, and Strasbourg. He returned to Germany in 1858, and while in Frankfurt, he began to paint the stag hunts he witnessed. The following year he visited the Normandy coast, painting seascapes, some of which became almost abstractions. Courbet turned to still lifes in 1862-63 when visiting the Saintonge area, yet he still continued to create landscapes and portraits. By 1870 he was offered the Legion of Honor but refused it because of his opposition to the imperial government. During the Paris Commune from March to May 1871, Courbet became an active member of the government. As chairman of the Commission for the Protection of the Artistic Monuments of Paris, he suggested the Vendôme Column be dismantled because it was an imperial symbol. The Commune decided instead to topple the column. When the Commune was defeated, Courbet was held responsible for this act of vandalism and was jailed for six months. In 1873 the government decided to rebuild the column at Courbet's expense. Unable to pay and fearful of being arrested, Courbet moved to Switzerland, where he spent the rest of his life in exile.",
        name_in_original_language: null,
        birth_year: "1819",
        death_year: "1877",
      },
    ],
    culture: ["France, 19th century"],
    technique: "oil on fabric",
    support_materials: [],
    department: "Modern European Painting and Sculpture",
    collection: "Mod Euro - Painting 1800-1960",
    type: "Painting",
    measurements:
      "Framed: 112.4 x 93 x 12.1 cm (44 1/4 x 36 5/8 x 4 3/4 in.); Unframed: 81 x 61.2 cm (31 7/8 x 24 1/8 in.)",
    dimensions: {
      framed: {
        height: 1.124,
        width: 0.93,
        depth: 0.121,
      },
      unframed: {
        height: 0.81,
        width: 0.612,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Leonard C. Hanna, Jr. Fund",
    copyright: null,
    inscriptions: [
      {
        inscription: "Signed lower right: Gustave Courbet / . . 63\r\n",
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 302276,
          title: "Year in Review - 1962",
          description:
            "<i>Year in Review - 1962</i>. The Cleveland Museum of Art (organizer) (October 24-November 25, 1962).",
          opening_date: "1962-10-24T04:00:00",
        },
        {
          id: 304248,
          title: "Style, Truth and the Portrait",
          description:
            "<i>Style, Truth and the Portrait</i>. The Cleveland Museum of Art (October 2-November 19, 1963).",
          opening_date: "1963-10-02T04:00:00",
        },
        {
          id: 444095,
          title: "Gustave Courbet",
          description:
            "<i>Gustave Courbet</i>. Musée du Louvre, Paris, France (October 1, 1977-January 2, 1978).",
          opening_date: "1977-10-01T04:00:00",
        },
        {
          id: 220961,
          title: "Courbet, Artist and Entrepeneur",
          description:
            "<i>Courbet, Artist and Entrepeneur</i>. Musée Cantonal des Beaux-Arts, Lausanne, Switzerland (November 21, 1998-February 21, 1999).",
          opening_date: "1998-11-21T00:00:00",
        },
        {
          id: 216847,
          title: "Faces of Impressionism: Portraits from American Collections",
          description:
            "<i>Faces of Impressionism: Portraits from American Collections</i>. The Cleveland Museum of Art (May 28-July 30, 2000).",
          opening_date: "1999-10-10T00:00:00",
        },
        {
          id: 182153,
          title:
            "Monet to Dalí: Modern Masters from the Cleveland Museum of Art",
          description:
            "<i>Monet to Dalí: Modern Masters from the Cleveland Museum of Art</i>. Beijing World Art Museum, China (May 26-August 27, 2006); Mori Art Center (September 16-November 26, 2006); Seoul Art Center, South Korea (December 22, 2006-March 28, 2007); Seoul Olympic Museum of Art, South Korea (April 7-May 20, 2007); Vancouver Art Gallery, Vancouver, Canada (June 9-September 16, 2007); The Cleveland Museum of Art, Cleveland, OH (organizer) (October 21, 2007-January 13, 2008); Frist Art Museum, Nashville, TN (February 15-June 1, 2008); Utah Museum of Fine Arts, Salt Lake City, UT (June 22-September 21, 2008); The Detroit Institute of Arts, Detroit, MI (October 12, 2008-January 18, 2009).",
          opening_date: "2006-05-27T00:00:00",
        },
      ],
      legacy: [
        "<em>Salon.</em> Palais des Champs-Élysées, Paris, France. Salon (1863).",
        "<em>Exposition d'art français du XIXe siècle.</em> Paul Rosenberg, Possibly Paris, France (1917).",
        "<em>Cinquante ans de peinture française</em>. Musée des Arts Décoratifs, Paris, France (1925).",
        "<em>Portraits et figures de femmes. Ingres à Picasso</em>. Galerie de La Renaissance, Paris, France (1928).",
        "<em>Exposition Gustave Courbet</em>. Palais des Beaux-Arts de la ville de Paris (Petit Palais), Paris, France (1929).",
        "<em>Exposition d'oeuvres importantes de Grands Maîtres du dix-neuvième siècle</em>. Galerie Paul Rosenberg, Paris, France (1931).",
        "<em> Loans in Honor of the Opening of the Avery Memorial.</em> Wadsworth Athenaeum. Hartford, CT (1934).",
        "<em>Exposition Gustave Courbet</em>. Paul Rosenberg, Paris, France (1937).",
        "<em>Honderd Jaar Fransche Kunst.</em> Stedelijk Museum. Amsterdam, Netherlands (1938).",
        "<em>Gustave Courbet 1819-1877</em>. London, Rosenberg &amp; Helft Ltd., London, United Kingdom (1938).",
        "<em>Great French Masters of the Nineteenth Century</em>: Corot to Van Gogh. Paul Rosenberg &amp; Co. New York, NY (1942).",
        "<em>French Art of the 19th and 20th Centuries </em>. Rhode Island School of Design Museum of Art, Providence, RI (1942).",
        "<em>Art of the United Nations</em>. M. H. de Young Memorial Museum, San Francisco, CA (1945).",
        "<em>Great French Masters of the 19th Century.</em> Possibly Paul Rosenberg &amp; Co, New York, NY (November, 17 -December 6, 1947).",
        "<em>Exhibition of 19th Century French Paintings. </em>Paul Rosenberg &amp; Co., New York, NY (1954).",
        "<em>Loan Exhibition of Paintings by Gustave Courbet</em>. Paul Rosenberg &amp; Co., New York, NY (1956).",
        "<em>Gustave Courbet 1819-1877</em>. Philadelphia Museum of Art, Philadelphia, PA; (December 17, 1959-February 14, 1960); Museum of Fine Arts, Boston, MA (February 26, 1960-April 14, 1960).",
        "<em>Courbet in Private French Collections</em>. Galerie Claude Aubry, Paris, France (May 5-June 25, 1966).",
        "<em>Gustave Courbet 1819-1877. </em>Villa Medici, Rome, Italy (October 28, 1969-January 6, 1970).",
        "<em>Courbet 1819-1877</em>. Galerie Daber, Paris, France (October 16 to November 15, 1975).",
        "<em>Gustave Courbet 1819-1877</em>. Royal Academy, London, United Kingdom (January 19-March 19, 1977); Grand Palais, Paris, France (October 1, 1977-January 2, 1978).",
        "<em>Courbet und Deutschland.</em> Stadische Galerie,Hamburg, Germany (October 19-December 17, 1978); Stadelsches Kunstinstitut, Frankfurt, Germany (January 17-March 18, 1979).",
        "<em>Courbet Reconsidered</em>. Brooklyn Museum, Brooklyn, NY (November 4, 1988-January 16, 1989); Minneapolis Institute of Arts, Minneapolis, MN (February 18-April 30, 1989).",
      ],
    },
    provenance: [
      {
        description:
          "(Drouot, Paris, France, Artist's estate sale,  December 9, 1881, lot 11, stock number 2070, sold to Durand-Ruel)",
        citations: [],
        footnotes: [],
        date: "1881",
      },
      {
        description:
          "(Durand-Ruel, Paris France, December 10, 1881, sold to Max Flersheim)",
        citations: [],
        footnotes: null,
        date: "1881",
      },
      {
        description:
          "(Paul Rosenberg and Company, New York, NY by 1934, sold to the Cleveland Museum of Art, 1962)",
        citations: [],
        footnotes: null,
        date: "by 1934-1962",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, OH",
        citations: [],
        footnotes: null,
        date: "1962-",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: [],
    fun_fact:
      'Courbet once wrote of Laure Borreau, the sitter in this portrait, "I am in love with a splendid lady, the driving force behind my triumph."',
    digital_description: null,
    wall_description:
      "Painted during Courbet's stay in the Saintonge region of western France, this portrait depicts Laure Borreau, owner of a fabric store and ladies confectionery. As the leader of the Realist movement in France, Courbet aimed to convey his democratic and socialist ideals by portraying ordinary people in a truthful, unidealized manner. While considering himself a radical innovator, Courbet nonetheless exhibited this portrait under the title Mme L... at the Paris Salon of 1863.",
    external_resources: {
      wikidata: [],
      internet_archive: [],
    },
    citations: [
      {
        citation:
          'Hamerton, Philip Gilbert. "The Salon of 1863." <em>The Fine Arts Quarterly Review</em> 1 (1863): 15-262.',
        page_number: "Mentioned: P. 244",
        url: null,
      },
      {
        citation:
          'Mantz, Paul. "Salon de 1863." <em>Gazette des Beaux-Arts</em> 14 (1863): 481-506.',
        page_number: "Mentioned: P. 498-499",
        url: null,
      },
      {
        citation:
          'Burty, Philippe. "Une Lettre de M. Courbet." <em>La Chronique des Arts et de la Curiosité </em>June 7, 1863: 253.',
        page_number: "Mentioned: P. 253",
        url: null,
      },
      {
        citation:
          "<em>Exposition des œuvres de Gustave Courbet: a l'École des beaux-arts (mai 1882): Catalogu</em>e. Paris: Impr. Émile Martinet, 1882.",
        page_number: "Mentioned: Supplement p. 26",
        url: null,
      },
      {
        citation:
          "Estignard, Alexandre. <em>Courbet Sa Vie, Ses Oeuvres.</em> Besançon: Delagrange-Louys, 1896.",
        page_number: "Mentioned: P. 162",
        url: null,
      },
      {
        citation:
          "Riat, Georges, and Paul Vitry. <em>Gustave Courbet, peintre</em>. Paris, France: H. Floury, 1906.",
        page_number: "Reproduced: p. 214",
        url: null,
      },
      {
        citation:
          "Léger, Charles. <em>Courbet, selon les caricatures et les images</em>. Paris, France: P. Rosenberg, 1920.",
        page_number: "Reproduced: p. 119",
        url: null,
      },
      {
        citation: "Léger, Charles. <em>Courbet.</em> Paris: Nilsson, 1925.",
        page_number: "Mentioned: P. 72",
        url: null,
      },
      {
        citation:
          'Alexandre, Arsene. "Portraits et Figures de Femmes." <em>La Renaissance </em>11 (July/August 1928).',
        page_number: "Mentioned and reproduced: P. 261, no. 45",
        url: null,
      },
      {
        citation:
          "Léger, Charles. <em>Courbet</em>. Paris: Éditions G. Crès, 1929.",
        page_number: "Mentioned: P. 95, 98; reproduced: Pl. 35",
        url: null,
      },
      {
        citation:
          "Courthion, Pierre. <em>Courbet</em>. Paris, France: Librairie Floury, 1931.",
        page_number: "Mentioned: p. 31; Reproduced: p. 91, pl. 57",
        url: null,
      },
      {
        citation:
          "Courthion, Pierre. <em>Courbet.</em> Paris: Librairie Floury, 1931.",
        page_number: "Mentioned: P. 34, 91; reproduced: Pl. 57",
        url: null,
      },
      {
        citation:
          "Léger, Charles. <em>Courbet</em>. Paris, France: Braun, 1934.",
        page_number: "Reproduced: p.38",
        url: null,
      },
      {
        citation:
          "Baillods, Jules. <em>Courbet Vivant</em>. Neuchâtel, Switzerland: Delachaux &amp; Niestlé, 1940.",
        page_number: "Mentioned: P. 48",
        url: null,
      },
      {
        citation:
          "Léger, Charles. <em>Courbet et son Temps; Lettres et Documents Inédits.</em> Paris: Éditions Universelles, 1948.",
        page_number: "Mentioned: P. 86",
        url: null,
      },
      {
        citation:
          "Mack, Gerstle. <em>Gustave Courbet</em>. New York, NY: Knopf, 1951.",
        page_number: "Reproduced: p. 170, pl. 37",
        url: null,
      },
      {
        citation: "<em>Les Amis de Gustave Courbet </em>20 (1957): 11.",
        page_number: "Mentioned and reproduced: P. 11",
        url: null,
      },
      {
        citation:
          'Lee, Sherman E. "Year in Review 1962." <em>The Bulletin of The Cleveland Museum of Art XLVIIII</em>, no.9 (November, 1962):198-227.',
        page_number: "Mentioned: p. 229, no. 89",
        url: null,
      },
      {
        citation:
          'Lurie, Ann Tzeutschler. "Gustave Courbet, Madame Boreau.." <em>The Bulletin of The Cleveland Museum of Art XLVIIII</em>, no.4 (April, 1962):66-71.',
        page_number: "Reproduced: cover",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art, “Madame Boreau by Courbet,” April 2, 1962, Cleveland Museum of Art Archives.",
        page_number: null,
        url: "https://archive.org/details/cmapr0926",
      },
      {
        citation:
          "Saisselin, Rémy G. <em>Style, Truth, and the Portrait</em>. Cleveland, OH: Cleveland Museum of Art, 1963.",
        page_number: "Reproduced: p. 76",
        url: null,
      },
      {
        citation:
          "Saisselin, Rémy Gilbert. “Portrait in History: Some Connections between Art and Literature.” <em>Apollo: The International Magazine for Collectors</em> 78 (October 1963): 281–88.",
        page_number: "Reproduced: P. 287",
        url: null,
      },
      {
        citation:
          'Borea, E. "Notiziario: Style, Truth, and the Portrait." <em>Arte Antica e Moderna </em>24 (Ottobre-Dicembre 1963): 7-8.',
        page_number: "Mentioned and reproduced: P. 7-8, no. 16",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 170",
        url: "https://archive.org/details/CMAHandbook1966/page/n194",
      },
      {
        citation:
          "<em>Courbet dans les Collections Privées Françaises ... 5 mai-25 juin 1966, [Galerie] Claude Aubry ... Paris. </em>Paris: Galerie C. Aubry, 1966.",
        page_number: "Reproduced: no. 13",
        url: null,
      },
      {
        citation:
          "Aymar, Gordon Christian. <em>The Art of Portrait Painting; Portraits Through the Centuries As Seen Through the Eyes of a Practicing Portrait Painter</em>. Philadelphia, PA: Chilton Book Co, 1967.",
        page_number: "Reproduced: p. 78, pl. 35",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 170",
        url: "https://archive.org/details/CMAHandbook1969/page/n194",
      },
      {
        citation:
          "Laclotte, Michel, Palma Bucarelli, and Hélène Toussaint. <em>Gustave Courbet (1819-1877)</em>. Rome. Italy: De Luca, 1969.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Bonniot, Roger. <em>Gustave Courbet en Saintonge, 1862-1863</em>. Paris, France: C. Klincksieck, 1973.",
        page_number:
          "Reproduced: fig. 53; mentioned: P. 124, 209, 217-248, 269, 295-299",
        url: null,
      },
      {
        citation:
          "Champa, Kermit Swiler. <em>Studies in Early Impressionism</em>. New Haven, CT: Yale University Press, 1973.",
        page_number: "Reproduced: p. 34, fig. 47",
        url: null,
      },
      {
        citation:
          "Daber, Alfred. <em>Courbet, 1819-1877: </em>Paris, France: Galerie Daber, 1975.",
        page_number: "Reproduced: no. 6",
        url: null,
      },
      {
        citation:
          "Toussaint, Hélène. <em>Gustave Courbet: 1819-1877 : [exposition organisée par la Réunion des musées nationaux et l'Arts Council of Great Britain], Grand Palais, 30 septembre 1977-2 janvier 1978 : [catalogue</em>. Paris, France: Ministère de la culture et de l'environnement, Éditions des musées nationaux, 1977.",
        page_number: "Reproduced: no. 68",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 210",
        url: "https://archive.org/details/CMAHandbook1978/page/n230",
      },
      {
        citation:
          "Fernier, Robert. <em>La vie et l'œuvre de Gustave Courbet: catalogue raisonné</em>. Lausanne, Switzerland: Bibliothèque des Arts, 1978.",
        page_number: "Reproduced: vol. I, no. 358",
        url: null,
      },
      {
        citation:
          "Hofmann, Werner, and Klaus Herding. <em>Courbet und Deutschland: [Hamburger Kunsthalle, 19. Oktober-17. Dezember 1978, Städt. Galerie im Städelschen Kunstinst. Frankfurt am Main, 17. Januar-18. März 1979</em>. Köln, Germany: Du Mont, 1978.",
        page_number: "Reproduced: p. 37, fig. e",
        url: null,
      },
      {
        citation:
          'Heilmeier, Hans. "Von Ingres bis Picasso." <em>Das Kunstblatt</em> (1978): 277-288.',
        page_number: "Reproduced: P. 280",
        url: null,
      },
      {
        citation:
          "Morse, John D. <em>Old Master Paintings in North America: Over 3000 Masterpieces by 50 Great Artists</em>. New York, NY: Abbeville Press, 1979.",
        page_number: "Reproduced: p. 72",
        url: null,
      },
      {
        citation:
          "Abe, Yoshio. Courbet. <em>Kūrube</em>. Tōkyō, Japan: Kōdansha, 1981.",
        page_number: "Reproduced: p. 116, no. 30",
        url: null,
      },
      {
        citation:
          "Foucart, Bruno, <em>Courbet</em>. Norwalk, CT: Easton Press, 1983.",
        page_number: "Reproduced: p. 48; Mentioned: p. 69",
        url: null,
      },
      {
        citation:
          "Courthion, Pierre. <em>L'opera completa di Courbet</em>. Milano, Italy: Rizzoli, 1985.",
        page_number: "Reproduced: no. 341",
        url: null,
      },
      {
        citation:
          "Faunce, Sarah, and Linda Nochlin. <em>Courbet Reconsidered</em>. Brooklyn, NY: Brooklyn Museum, 1988.",
        page_number: "Reproduced: no. 40",
        url: null,
      },
      {
        citation:
          "ten-Doesschate Chu,, Petra. <em>Letters of Gustave Courbet</em>. Chicago, IL: University of Chicago Press, 1992.",
        page_number: "Mentioned: p. 218-219; Reproduced: p. 221, fig. 35",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Masterpieces from East and West</em>. New York, NY: Rizzoli International, 1992.",
        page_number: "Reproduced: P. 140",
        url: null,
      },
      {
        citation:
          "Abe, Yoshio . <em>Kūrube = Gustave Courbet</em>. Tōkyō, Japan: Asahi Shinbunsha, 1993.",
        page_number: "Reproduced: p. 91, pl. 37",
        url: null,
      },
      {
        citation:
          "Chong, Alan. <em>European &amp; American Painting in the Cleveland Museum of Art: A Summary Catalogue. </em>Cleveland, Ohio: Cleveland Museum of Art, 1993.",
        page_number: "Reproduced: P. 45",
        url: null,
      },
      {
        citation:
          'Andreotti, Margherita. "The Joseph Winterbotham Collection." <em>Art Institute of Chicago Museum Studies</em> 20, no. 2 (1994): 111-92.',
        page_number: "Mentioned: P. 112",
        url: "https://www.jstor.org/stable/4112960",
      },
      {
        citation:
          "Kostenevich, A. G. <em>Hidden treasures revealed: impressionist masterpieces and other important French paintings preserved by the State Hermitage Museum, St. Petersburg</em>. New York, NY: Ministry of Culture of the Russian Federation, The State Hermitage Museum, St. Petersburg in association with H.N. Abrams, 1995.",
        page_number: "Reproduced: p. 33",
        url: null,
      },
      {
        citation:
          "Fernier, Jean-Jacques. <em>Courbet, l'amour--: Baltasar Lobo, sculptures : Christian Welter, un regard amoureux</em>. Ornans, France: Musée Gustave Courbet, 1996.",
        page_number: "Reproduced: p. 82",
        url: null,
      },
      {
        citation:
          "ten-Doesschate Chu, Petra, and Jörg Zutter. <em>Courbet: artiste et promoteur de son œuvre</em>. Paris, France: Flammarion, 1998.",
        page_number: "Reproduced: no. 19; p. 26-27",
        url: null,
      },
      {
        citation:
          "D'Argencourt, Louise and Roger Diederen. <em>The Cleveland Museum of Art: Catalogue of Paintings, Part Four; European Paintings of the 19th Century.</em> Cleveland, OH: The Cleveland Museum of Art, 1999.",
        page_number: "Reproduced: p. 61",
        url: null,
      },
      {
        citation:
          "Bajou-Charpentreau, Valérie, and Gustave Courbet. <em>Courbet</em>. Paris, France: A. Biro, 2003.",
        page_number: "Reproduced: p. 268",
        url: null,
      },
      {
        citation:
          "Riat, Georges. <em>Gustave Courbet</em>. Ho Chi Minh City, Vietnam: Baseline Co, Ltd., 2008.",
        page_number: "Reproduced: p. 126, fig. 70",
        url: null,
      },
      {
        citation:
          'Lobstein, Dominique. "Le Retour de la Conference et les Salons de 1863." In <em>Le Retour de la Conférence: Un Tableau Disparu, </em>29-36. [Ornans]: Musée Gustave Courbet; Besançon: Sekoya, 2015.',
        page_number: "Reproduced: P. 32",
        url: "",
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1962.2",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1962.2/1962.2_web.jpg",
        width: "684",
        height: "893",
        filename: "1962.2_web.jpg",
        filesize: "345987",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1962.2/1962.2_print.jpg",
        width: "2604",
        height: "3400",
        filename: "1962.2_print.jpg",
        filesize: "5231419",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1962.2/1962.2_full.tif",
        width: "4123",
        height: "5384",
        filename: "1962.2_full.tif",
        filesize: "66624912",
      },
    },
    updated_at: "2022-04-14 09:00:28.248000",
  },
  {
    id: 135299,
    accession_number: "1958.31",
    share_license_status: "CC0",
    tombstone:
      "Adeline Ravoux, 1890. Vincent van Gogh (Dutch, 1853-1890). Oil on fabric; framed: 72.5 x 73.5 x 8.5 cm (28 9/16 x 28 15/16 x 3 3/8 in.); unframed: 50.2 x 50.5 cm (19 3/4 x 19 7/8 in.). The Cleveland Museum of Art, Bequest of Leonard C. Hanna, Jr. 1958.31",
    current_location: "222 Impressionism & Post-Impressionism",
    title: "Adeline Ravoux",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1890",
    creation_date_earliest: 1890,
    creation_date_latest: 1890,
    creators: [
      {
        id: 1779,
        description: "Vincent van Gogh (Dutch, 1853-1890)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography:
          "The son of a clergyman, Vincent van Gogh was sent to The Hague at the age of sixteen to become an apprentice at Goupil &amp; Co., an art dealer with whom his uncle was affiliated. In August 1872 van Gogh began his extensive correspondence with his younger brother Theo, who would join the Brussels branch of the firm the following year. Vincent was transferred to the London offices in 1873 and two years later to the Paris office, but he despised the art trade and was dismissed in 1876. He then taught briefly at a boarding school in Ramsgate and Isleworth, and, back in the Netherlands, worked in a bookshop in Dordrecht before moving to Amsterdam to study theology. In little more than a year he had left the university and entered missionary school, failing again. Still intent on entering the ministry, he moved to the Borinage in Belgium and became a lay evangelist to the miners. Van Gogh finally decided to become an artist in August 1880 and started copying works by Millet (q.v.), the painter of peasant life. With his brother's financial help, he briefly joined the Academy in Brussels. The following year he returned to The Hague, where he received some artistic training from his cousin by marriage, Anton Mauve (1838-1888). There van Gogh met Sien Hoornik, a pregnant prostitute with a five-year-old daughter, with whom he lived briefly. Unable to marry her because of his family's disapproval, he moved in November 1883 from The Hague to the province of Drenthe, a popular place for artists, where he painted and drew laborers and peasants. Feeling terribly lonely, he visited his parents in December 1884 in Nuenen, and it was there that he finally decided to become a painter of peasant life. Van Gogh completed The Potato Eaters (Van Gogh Museum, Amsterdam) in April 1885 and sent it to his brother in Paris. On 25 November he moved to Antwerp, where he reveled in the work of Rubens and first came to know Japanese prints. Van Gogh traveled to Paris in March 1886 and lived with Theo. Under the influence of the impressionists, and works by Monticelli (q.v.), his palette changed to more intense and vibrant colors. He began to associate with Émile Bernard (1868-1941), Henri de Toulouse-Lautrec (1864-1901), Degas (q.v.), Gauguin (q.v.), Pissarro (q.v.), and Seurat (q.v.) and started collecting some of their paintings as well as Japanese prints. He moved to Arles in February 1888. Apart from paintings, he also made some drawings because it was a cheaper medium. Theo encouraged him to submit to the Salon des Indépendants. In May Vincent rented a room in the Yellow House, even though he could hardly afford to do so, and continued to send his work to his brother. In June he became intrigued with the subject of the wheat harvest and painted The Sower (Kröller-Müller Museum, Otterlo). On 23 October 1888, Gauguin arrived in Arles, at a time when van Gogh was having trouble with his eyesight. Gauguin encouraged him to paint from memory, which resulted in Memory of the Garden in Etten (Hermitage, St. Petersburg). The artists, however, had many disagreements, and during a dramatic quarrel on 23 December van Gogh mutilated his ear. He was taken into a hospital in Arles, and Gauguin left for Paris. Van Gogh recovered rapidly and was dismissed on 7 January 1889. In February his neighbors objected to his presence in the Yellow House, and he had to return to the hospital. In April Theo married Johanna Gesina Bonger, who would eventually safeguard most of Vincent's oeuvre. Aware of his mental problems, at the end of April van Gogh checked himself into the asylum of Saint-Paul-de-Mausole in Saint-Rémy, where he was treated by Dr. Peyron. His condition was stable, and he was allowed to work in a makeshift studio. He worked in the garden (Irises, J. Paul Getty Museum, Los Angeles) and painted the fields he could see from his window. Under supervision he painted in the countryside, rendering cypresses and olive trees. Starry Night (Museum of Modern Art, New York) also stems from this period. From July through September he suffered from a severe depression that prevented him from working. He resumed his work from October through December, painting well-known Provençal works and adapting prints after Delacroix (q.v.), Millet, and Rembrandt (1606-1669). In January 1890 he exhibited five works with Les XX in Brussels, selling one of them. After a visit to Arles at the end of February, he became ill again but continued to work. He finally left the asylum, and visited Theo in Paris on his way to Auvers, where he arrived on 20 May. He became close friends with Dr. Gachet and rented a room at the inn of the Ravoux family. He painted the village, portraits, and the surrounding wheat fields. On 27 July 1890, during an episode of depression, van Gogh shot himself in the chest and died two days later.",
        name_in_original_language: null,
        birth_year: "1853",
        death_year: "1890",
      },
    ],
    culture: ["Netherlands, 19th century"],
    technique: "oil on fabric",
    support_materials: [],
    department: "Modern European Painting and Sculpture",
    collection: "Mod Euro - Painting 1800-1960",
    type: "Painting",
    measurements:
      "Framed: 72.5 x 73.5 x 8.5 cm (28 9/16 x 28 15/16 x 3 3/8 in.); Unframed: 50.2 x 50.5 cm (19 3/4 x 19 7/8 in.)",
    dimensions: {
      framed: {
        height: 0.725,
        width: 0.735,
        depth: 0.085,
      },
      unframed: {
        height: 0.502,
        width: 0.505,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Bequest of Leonard C. Hanna, Jr.",
    copyright: null,
    inscriptions: [],
    exhibitions: {
      current: [
        {
          id: 300779,
          title: "Juxtapositions",
          description:
            "<i>Juxtapositions</i>. The Cleveland Museum of Art (September 11-October 10, 1965).",
          opening_date: "1965-09-11T04:00:00",
        },
        {
          id: 343566,
          title:
            "In Quest of Excellence: Civic Pride, Patronage, Connoisseurship",
          description:
            "<i>In Quest of Excellence: Civic Pride, Patronage, Connoisseurship</i>. Pérez Art Museum Miami (organizer) (January 12-April 22, 1984).",
          opening_date: "1984-01-12T05:00:00",
        },
        {
          id: 442139,
          title: "ゴッホ (Van Gogh)",
          description:
            "<i>ゴッホ (Van Gogh)</i>. National Museum of Western Art, Tokyo, Tokyo, Japan (organizer) (October 12-December 8, 1985); Nagoya City Art Museum, Nagoya, Japan (December 21, 1985-February 2, 1986).",
          opening_date: "1985-10-12T04:00:00",
        },
        {
          id: 310025,
          title: "Creativity in Art and Science, 1860-1960",
          description:
            "<i>Creativity in Art and Science, 1860-1960</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (September 16-November 8, 1987).",
          opening_date: "1987-09-16T04:00:00",
        },
        {
          id: 174820,
          title: "Van Gogh Face to Face: The Portraits",
          description:
            "<i>Van Gogh Face to Face: The Portraits</i>. The Detroit Institute of Arts, Detroit, MI (organizer) (March 12-June 4, 2000); Museum of Fine Arts, Boston, Boston, MA (July 2-September 24, 2000); Philadelphia Museum of Art, Philadelphia, PA (October 22, 2000-January 14, 2001).",
          opening_date: "2000-03-12T00:00:00",
        },
        {
          id: 205456,
          title: "The Société Anonyme: Modernism for America",
          description:
            "<i>The Société Anonyme: Modernism for America</i>. UCLA at Armand Hammer Museum of Art and Cultural Center (April 23-August 20, 2006).",
          opening_date: "2006-04-23T04:00:00",
        },
        {
          id: 182153,
          title:
            "Monet to Dalí: Modern Masters from the Cleveland Museum of Art",
          description:
            "<i>Monet to Dalí: Modern Masters from the Cleveland Museum of Art</i>. Seoul Art Center, South Korea (December 22, 2006-March 28, 2007); Seoul Olympic Museum of Art, South Korea (April 7-May 20, 2007); Vancouver Art Gallery, Vancouver, Canada (June 9-September 16, 2007); The Cleveland Museum of Art, Cleveland, OH (organizer) (October 21, 2007-January 13, 2008); Frist Art Museum, Nashville, TN (February 15-June 1, 2008); Utah Museum of Fine Arts, Salt Lake City, UT (June 22-September 21, 2008); The Detroit Institute of Arts, Detroit, MI (October 12, 2008-January 18, 2009).",
          opening_date: "2006-05-27T00:00:00",
        },
        {
          id: 213656,
          title: "Van Gogh Repetitions",
          description:
            "<i>Van Gogh Repetitions</i>. The Cleveland Museum of Art, Cleveland, OH (March 2-May 26, 2014).",
          opening_date: "2013-10-12T00:00:00",
        },
        {
          id: 379202,
          title: "Through Vincent's Eyes: Van Gogh and His Sources",
          description:
            "<i>Through Vincent's Eyes: Van Gogh and His Sources</i>. Columbus Museum of Art, Columbus, OH (organizer) (November 12, 2021-February 6, 2022) https://www.columbusmuseum.org/through-vincents-eyes-van-gogh-and-his-sources/.",
          opening_date: "2021-11-12T05:00:00",
        },
        {
          id: 308774,
          title: "Van Gogh in America",
          description:
            "<i>Van Gogh in America</i>. The Detroit Institute of Arts, Detroit, MI (organizer) (October 2, 2022-January 22, 2023).",
          opening_date: "2022-10-02T04:00:00",
        },
        {
          id: 440610,
          title: "Van Gogh & Auvers",
          description:
            "<i>Van Gogh & Auvers</i>. Van Gogh Museum, 1070 AJ Amsterdam, Netherlands (organizer) (May 12-September 3, 2023); Musée d'Orsay, 75343 Paris, France (September 25, 2023-January 28, 2024).",
          opening_date: "2023-05-12T04:00:00",
        },
      ],
      legacy: [
        "<em>International Exhibition of Modern Art</em> (Armory Show) New York. Armory of the 69th Regiment, New York, NY; Art Institute of Chicago, Chicago, IL; Copley Hall, Georgetown, MA; Copley Society, Boston, MA (1913).",
        "<em>Opening Exhibition</em>. Galleries of the Société Anonyme, New York, NY (1920).",
        "<em>An Exhibition of Modern French Art.</em> Baltimore Museum of Art, Baltimore, MD (1925).",
        "<em>First Loan Exhibition: Cézanne, Gauguin, Seurat, Van Gogh</em>. Museum of Modern Art, New York, NY (1929).",
        "<em>Opening Exhibition</em>. Museum of Fine Arts, Springfield, MA (1933).",
        "<em>Paintings, Watercolors &amp; Drawings by Vincent van Gogh.</em> Museum of Modern Art, New York, NY; Philadelphia Museum of Art, Philadelphia, PA; Museum of Fine Arts, Boston, MA; Cleveland Museum of Art, Cleveland, OH; San Francisco Museum of Fine Arts, San Francisco, CA; Nelson Atkins Museum of Art, Kansas City, MO; Minneapolis Museum of Art, Minneapolis, MN; Art Institute of Chicago, Chicago, IL; Detroit Institute of Art, Detroit, MI; Art Gallery of Ontario, Toronto, Ontario (1935-36).The Hanna Collection of Modern Masterpieces. J.B. Speed Memorial Museum, Louisville, KY (1944).",
        "<em>The Hanna Collection of Modern Masterpieces.</em> J.B. Speed Memorial Museum, Louisville, KY (1944).",
        "<em>Pictures for Peace: A Retrospective Exhibition Organized from the Armory Show of 1913.</em> Cincinnati Art Museum, Cincinnati, OH (1944).",
        "<em>Works by Vincent van Gogh.</em> The Cleveland Museum of Art, Cleveland, OH (1948).",
        "<em>Summer Loan.</em>Metropolitan Museum of Art, New York, NY (June-September 1949).",
        "<em>Reconstruction of the 1913 Armory Show.</em> Munson-Williams-Proctor Institute, Utica, NY (February 17-March 31, 1963); Armory of the 69th Regiment, New York, NY (April 6-28,1963).",
        "<em>Vincent van Gogh.</em> National Museum of Western Art, Tokyo, Japan (organizer) (October 12-December 8, 1985); Nagoya-City Museum, Nagoya, Japan (December 19, 1985-February 2, 1986).",
        "<em>The Société Anonyme: Modernism for America</em>. Yale University Art Gallery, New Haven, CT (Organizer). UCLA at Armand Hammer Museum of Art and Cultural Center, Los Angeles, CA (April 23-August 20, 2006).",
      ],
    },
    provenance: [
      {
        description:
          "Johanna Van Gogh-Bonger [1862-1925], the wife of Theo van Gogh, Amsterdam, Netherlands.",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description: "(Artz and de Bois, The Hague, Netherlands)",
        citations: [],
        footnotes: null,
        date: "1912",
      },
      {
        description: "Katherine S. Dreier [1877-1952], New York, NY",
        citations: [],
        footnotes: [],
        date: "1912-1929",
      },
      {
        description: "Mrs. Cornelius Sullivan [1877-1939], New York, NY",
        citations: [],
        footnotes: [],
        date: "-1939",
      },
      {
        description:
          "(Parke-Bernet Galleries, New York, NY, December 6-7, 1939, sold to Leonard C. Hanna Jr.)",
        citations: [],
        footnotes: [],
        date: "1939",
      },
      {
        description:
          "Leonard C. Hanna Jr. [1889-1957], Cleveland, OH, bequeathed to the Cleveland Museum of Art",
        citations: [],
        footnotes: [],
        date: "1939-1958",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, OH",
        citations: [],
        footnotes: [],
        date: "1958-",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: ["1642.43"],
    fun_fact:
      "Adeline Ravoux, at age 13, was not pleased with her portrait and did not think the image resembled her. Today, a photograph exists of Adeline in her late seventies and the resemblance is truly remarkable.",
    digital_description: null,
    wall_description:
      "In May 1890, Van Gogh left the south and settled in Auvers-sur-Oise, a small town north of Paris, where he rented a room at the inn of Arthur Ravoux. This portrait, completed during the last months of the artist’s life, depicts Ravoux’s 13-year-old daughter, Adeline. Van Gogh wrote that rather than photographic resemblance, he wanted his portraits to convey the “impassioned aspects” of contemporary life through the “modern taste for color.”",
    external_resources: {
      wikidata: ["https://www.wikidata.org/wiki/Q26221230"],
      internet_archive: [
        "https://archive.org/details/clevelandart-1958.31-adeline-ravoux",
      ],
    },
    citations: [
      {
        citation: null,
        page_number: null,
        url: null,
      },
      {
        citation:
          "Louis Anfray, “Les souvenirs d’Adeline Ravoux sur le séjour de Vincent van Gogh à Auvers-sur-Oise,” <em>Les Cahiers de Van Gogh</em> no. 1 (Geneva: Pierre Cailler, 1956): p. 9.",
        page_number: "Mentioned: p. 9",
        url: null,
      },
      {
        citation:
          "<em>Société Anonyme. Report 1920-1921.</em> [New York]: The Society, 1921.",
        page_number: "Reproduced: p. 6",
        url: null,
      },
      {
        citation:
          "Dreier, Katherine S. <em>Western Art and the New Era; An Introduction to Modern Art.</em> New York: Brentano's, 1923.",
        page_number: "Mentioned and reproduced: p. 63-64, fig. 35",
        url: null,
      },
      {
        citation:
          "de LaFaille, J. B. <em>L'oeuvre de Vincent van Gogh, </em>catalogue raisonné. Paris, FR et Bruxelles, BE: Les Éditions G. van Oest, 1928.",
        page_number: "Reproduced: no. 786, vol. 2",
        url: null,
      },
      {
        citation:
          "Gogh, Vincent van. <em>Further Letters of Vincent Van Gogh to His Brother, 1886-1889.</em> London: Constable &amp; Co, 1929.",
        page_number: "Mentioned: p. 472, no. 644",
        url: null,
      },
      {
        citation:
          'Scherjon, W., and W. Jos. de Gruyter. <em>Vincent Van Gogh\'s Great Period, Arles, St. Rémy and Auvers Sur Oise</em> <em>(Complete Catalogue)</em>. Amsterdam NL: "De Spieghel", Ltd, 1937.',
        page_number: "Reproduced: p. 375, no. 222",
        url: null,
      },
      {
        citation:
          "La Faille, J. Bernard de , Charles Terrasse, Prudence Montagu-Pollock, and André Gloeckner. <em>Vincent Van Gogh</em>. New York, N.Y.: French and European Publications [etc.], 1939",
        page_number: "Reproduced: p. 776",
        url: null,
      },
      {
        citation:
          'Venturi, Lionello. "Notes on the Collection of Mrs. Cornelius J. Sullivan." <em>Parnassus</em> 11, no. 8 (1939): 32-33.',
        page_number: "Mentioned:p. 33",
        url: "https://www.jstor.org/stable/772018",
      },
      {
        citation:
          '"The Sullivan Collection." <em>Magazine of Art </em>32, no. 12 (December 1939): 710-711.',
        page_number: "Mentioned: p. 711",
        url: null,
      },
      {
        citation:
          "Leymarie, Jean. <em>Van Gogh.</em> [Paris]: Éditions P. Tisné, 1951.",
        page_number: "Mentioned and reproduced: no. 156",
        url: null,
      },
      {
        citation:
          "Coe, Nancy. T<em>he History of the Collecting of European Paintings and Drawings in the City of Cleveland.</em> Thesis M.A. Oberlin College, 1955.",
        page_number: "Reproduced: vol. 2, p. 11",
        url: null,
      },
      {
        citation:
          "Saarinen, Aline B. <em>The Proud Possessors: The Lives, Times, and Tastes of Some Adventurous American Art Collectors.</em> New York, NY: Random House, 1958.",
        page_number: "Reproduced: p. 241",
        url: null,
      },
      {
        citation:
          "Elgar, Frank. <em>Van Gogh, A Study of His Life and Work</em>. New York: Praeger, 1958.",
        page_number: "Reproduced: fig. 210",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>In Memoriam: Leonard C. Hanna, Jr.</em> Cleveland: The Museum, 1958.",
        page_number: "Reproduced: no. 16",
        url: null,
      },
      {
        citation:
          "Frankfurter, Alfred M. “Cleveland: Model Museum for a Modern Cosmopolis.” <em>ARTnews</em> 57 (March 1958): 24–37.",
        page_number: "Reproduced: p. 37, fig. 28",
        url: null,
      },
      {
        citation:
          "<em>The Bulletin of The Cleveland Museum of Art LIX,</em> no.9 (September, 1959): 199.",
        page_number: "Reproduced: p. 199",
        url: null,
      },
      {
        citation:
          '"Bequest of Leonard C. Hannah, Jr." <em>The Bulletin of The Cleveland Museum of Art </em>XLVI,no.6 (June, 1959)<em>: </em>122.',
        page_number: "Mentioned: p. 122",
        url: null,
      },
      {
        citation:
          "Munson-Williams-Proctor Institute. <em>1913 Armory Show; 50th Anniversary Exhibition, </em>Utica, NY:1963.",
        page_number: "Reproduced: p. 191, no. 1047",
        url: null,
      },
      {
        citation:
          'Sachs II, Samuel. "Reconstructing the Whirlwind of 26th Street." <em>ARTnews </em>61 (February 1963): 26.',
        page_number: "Reproduced: p. 26",
        url: null,
      },
      {
        citation:
          "Henning, E. B. “Cleveland Museum of Art: From Turner to Guston.” <em>Apollo: The International Magazine for Collectors</em> 78 (December 1963): 481–88.",
        page_number: "Reproduced: p. 486",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 178",
        url: "https://archive.org/details/CMAHandbook1966/page/n202",
      },
      {
        citation:
          "Christie, Manson &amp; Woods. <em>Important Impressionist and Modern Drawings, Paintings and Sculpture. </em>1966.",
        page_number: "Mentioned & reproduced: lot no. 49",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 178",
        url: null,
      },
      {
        citation:
          "De la Faille, J.-B. <em>The Works of Vincent Van Gogh; His Paintings and Drawings.</em> Amsterdam: Meulenhoff International, 1970.",
        page_number: "Mentioned and reproduced: no. 786",
        url: null,
      },
      {
        citation:
          "Lecaldano, Paolo. <em>L'opera pittorica completa di Van Gogh e i suoi nessi grafici.</em> Milan, IT: Rizzoli, 1971.",
        page_number: "Reproduced: no. 841",
        url: null,
      },
      {
        citation:
          "Lubin, Albert J.<em> Stranger on the Earth; A Psychological Biography of Vincent Van Gogh</em>. New York, NY: Holt, Rinehart Winston, 1972.",
        page_number: "Reproduced: p. 232, pl. 19",
        url: null,
      },
      {
        citation:
          'Henning, Edward B. "Pablo Picasso: Bouteille, Verre, et Fourchette." <em>The Bulletin of the Cleveland Museum of Art </em>LIX, no. 7 (September 1972): 194-203.',
        page_number: "Mentioned and reproduced: p. 199, fig. 12",
        url: null,
      },
      {
        citation:
          'Henning, Edward. "Reconstruction: A Painting by Jasper Johns." <em>The Bulletin of The Cleveland Museum of Art</em> LX, no. 8 (October, 1973): 235-241.',
        page_number: "Reproduced: p. 237",
        url: null,
      },
      {
        citation:
          'Johnson, Mark. "Portrait Painting: An Image of a Man." <em>Arts and Activities </em>82, no. 1 (September 1977): 32-38.',
        page_number: "Reproduced: p. 37, fig. 5",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 221",
        url: "https://archive.org/details/CMAHandbook1978/page/n241",
      },
      {
        citation:
          "Hulsker, Jan. <em>The Complete Van Gogh: Paintings, Drawings, Sketches.</em> New York, NY: H.N. Abrams, 1980.",
        page_number: "Reproduced: no. 2036; Detail: p. 485 no. 16",
        url: null,
      },
      {
        citation:
          'Nemecaek, Alfred. "Der Wirt Ravoux und Seine Tochter-Menschen in Auvers." <em>Art: Das Kunstmagazin </em>1 (February 1981): 28.',
        page_number: "Reproduced: p. 28",
        url: null,
      },
      {
        citation:
          'Henning, Edward. "Woman in the Waves by Paul Gauguin." <em>The Bulletin of The Cleveland Museum of Art </em>LXXI, no.10 (October, 1984): 280-289.',
        page_number: "Reproduced: p. 283",
        url: null,
      },
      {
        citation:
          "Herbert, Robert L., Eleanor S. Apter, and Elise K. Kenney. <em>The Société Anonyme and the Dreier Bequest at Yale University: A Catalogue Raisonné</em>. New Haven, CT: Published for the Yale University Art Gallery by Yale University Press, 1984.",
        page_number: "Mentioned: p. 748, 776",
        url: null,
      },
      {
        citation:
          "Van der Marck, Jan. <em>In Quest of Excellence: Civic Pride, Patronage, Connoisseurship</em>. Miami, Fla., U.S.A.: The Center, 1984.",
        page_number: "Mentioned: cat no. 124, p. 246, Reproduced: p. 73",
        url: null,
      },
      {
        citation:
          "Ikegami, Chūji. <em>Gohho</em>. Tōkyō, Japan: Shūeisha, 1985.",
        page_number: "Reproduced: p. 72",
        url: null,
      },
      {
        citation: "<em>Gohho ten</em>. Tokyo, Japan: Tōkyō Shinbun, 1985.",
        page_number: "Reproduced: p. 76",
        url: null,
      },
      {
        citation:
          "Mothe, Alain. <em>Vincent van Gogh à Auvers-sur-Oise. </em>Paris, FR: Valhermeil, 1987.",
        page_number: "Reproduced: p. 89",
        url: null,
      },
      {
        citation:
          "Henning, Edward B. <em>Creativity in Art and Science</em>, 1860-1960. [Cleveland, Ohio]: Published by the Cleveland Museum of Art in cooperation with Indiana University Press, 1987.",
        page_number: "Reproduced: p. 107",
        url: null,
      },
      {
        citation:
          "Brown, Milton W. <em>The Story of the Armory Show.</em> New York, NY: Abbeville Press, 1988.",
        page_number: "Reproduced: p. 199; mentioned: p. 272, no. 1047",
        url: null,
      },
      {
        citation:
          "Christie, Manson &amp; Woods International Inc. <em>Impressionist and Modern Paintings and Sculpture, Part I.</em> 1988.",
        page_number: "Mentioned and reproduced: p. 56-62, lot no. 22",
        url: null,
      },
      {
        citation:
          "Mukōda, Naoki, and Hideo Takumi. Gohho junrei. Tōkyō: Shinchōsha, 1990.",
        page_number: "Reproduced: p. 76",
        url: null,
      },
      {
        citation:
          'Madeline, Laurence. "Auvers: La Symphonie Inachevee." In <em>Van Gogh, Auvers-sur-Oise: Mai-Juillet 1890., </em>8-27. [Paris]: Publié par Beaux-Arts Magazine, Publications, Nuit et jour, 1990.',
        page_number: "Reproduced: p. 17",
        url: null,
      },
      {
        citation:
          "Heijbroek, Jan Frederik, and Ester Wouthuysen. <em>Kunst, kennis en commercie: de kunsthandelaar J.H. de Bois (1878-1946)</em>. Amsterdam, NL: Contact, 1993.",
        page_number: "Mentioned: p. 44, 200",
        url: null,
      },
      {
        citation:
          "Walther, Ingo F. and Rainer Metzger. <em>Vincent Van Gogh: The Complete Paintings</em>. Köln, DE: Benedikt Taschen, 1993.",
        page_number: "Reproduced: p. 667, vol. 2",
        url: null,
      },
      {
        citation:
          "Chong, Alan. <em>European &amp; American Painting in the Cleveland Museum of Art: A Summary Catalogue.</em> Cleveland, Ohio: Cleveland Museum of Art, 1993.",
        page_number: "Reproduced: p. 88",
        url: null,
      },
      {
        citation:
          "Gachet, Paul, and Alain Mothe. <em>Les 70 jours de van Gogh à Auvers: essai d'éphéméride dans le décor de l'époque (20 mai-30 juillet 1890), d'après les lettres, documents, souvenirs et déductions, Auvers-sur-Oise, 1959.</em> [Saint-Ouen-l'Aumône]: Editions du Valhermeil, 1994.",
        page_number: "Reproduced: p. 154-155, pl. 26",
        url: null,
      },
      {
        citation:
          "Hulsker, Jan. <em>The New Complete Van Gogh: Paintings, Drawings, Sketches: Revised and Enlarged Edition of the Catalogue Raisonné of the Works of Vincent Van Gogh.</em> Philadelphia: John Benjamins Pub. Co, 1996.",
        page_number: ":Mentioned and reproduced: p. 466-467",
        url: null,
      },
      {
        citation:
          "D' Argencourt, Louise, and Roger Diederen. <em>Catalogue of Paintings. Pt. 4. European Paintings of the 19th Century. </em>Cleveland: Cleveland Museum of Art, 1974.",
        page_number: "Mentioned and reproduced: p. 310-313.",
        url: null,
      },
      {
        citation:
          "Dorn, Roland. <em>Van Gogh Face to Face: The Portraits.</em> New York, NY: Thames &amp; Hudson, 2000.",
        page_number: "Reproduced: p. 197",
        url: null,
      },
      {
        citation:
          "Shackelford, George T. M.. <em>Vincent Van Gogh: The Painter and the Portrait.</em> New York, NY: Universe, 2000.",
        page_number: "Reproduced: p. 66, no. 50",
        url: null,
      },
      {
        citation:
          "Gogh, Vincent van, and Roland Dorn. <em>Van Gogh Face to Face: The Portraits</em>. New York: Thames &amp; Hudson, 2000.",
        page_number: "Mentioned and Reproduced: cat. no. 197",
        url: null,
      },
      {
        citation:
          "Goldin, Marco. <em>Gauguin, Van Gogh: l'avventura del colore nuovo. </em>Conegliano, IT: Linea d'ombra libri, 2005.",
        page_number: "Reproduced: p. 26",
        url: null,
      },
      {
        citation:
          "Gross, Jennifer R., and Ruth L. Bohan. <em>The Société Anonyme: Modernism for America</em>. New Haven, CT: Yale University Press in association with the Yale University Art Gallery, 2006.",
        page_number: "Reproduced: p. 174",
        url: null,
      },
      {
        citation:
          "Veen, Wouter van der, and Peter Knapp. <em>Van Gogh in Auvers: his last days.</em> New York, NY: Monacelli Press, 2010.",
        page_number: "Reproduced: p. 163, fig. 83",
        url: null,
      },
      {
        citation:
          "Franklin, David. <em>Director's Choice: The Cleveland Museum of Art</em>. Cleveland: Cleveland Museum of Art, 2012.",
        page_number: "Reproduced: p. 62-63",
        url: null,
      },
      {
        citation:
          "Berman, Avis. 2013. “Forces for the New Collectors and the Armory.” <em>Magazine Antiques</em> 180, no. 1 (January/February 2013: 154-166.",
        page_number: "Mentioned: p. 159; reproduced: p. 162, fig. 11",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Museum Masters: 2016-17 Companion Guide.</em> [Cleveland, Ohio]: Cleveland Museum of Art, 2016.",
        page_number: "Mentioned and Reproduced: P. 22",
        url: "",
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1958.31",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1958.31/1958.31_web.jpg",
        width: "900",
        height: "897",
        filename: "1958.31_web.jpg",
        filesize: "451143",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1958.31/1958.31_print.jpg",
        width: "3400",
        height: "3389",
        filename: "1958.31_print.jpg",
        filesize: "6008242",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1958.31/1958.31_full.tif",
        width: "11512",
        height: "11476",
        filename: "1958.31_full.tif",
        filesize: "396370084",
      },
    },
    updated_at: "2022-03-22 09:00:21.983000",
  },
  {
    id: 93014,
    accession_number: "1917.1335",
    share_license_status: "CC0",
    tombstone:
      "View of Schroon Mountain, Essex County, New York, After a Storm, 1838. Thomas Cole (American, 1801-1848). Oil on canvas; framed: 132.5 x 193.5 x 13 cm (52 3/16 x 76 3/16 x 5 1/8 in.); unframed: 99.8 x 160.6 cm (39 5/16 x 63 1/4 in.). The Cleveland Museum of Art, Hinman B. Hurlbut Collection 1917.1335",
    current_location: "206 American Landscape",
    title: "View of Schroon Mountain, Essex County, New York, After a Storm",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1838",
    creation_date_earliest: 1838,
    creation_date_latest: 1838,
    creators: [
      {
        id: 2659,
        description: "Thomas Cole (American, 1801-1848)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography: null,
        name_in_original_language: null,
        birth_year: "1801",
        death_year: "1848",
      },
    ],
    culture: ["America, 19th century"],
    technique: "oil on canvas",
    support_materials: [],
    department: "American Painting and Sculpture",
    collection: "American - Painting",
    type: "Painting",
    measurements:
      "Framed: 132.5 x 193.5 x 13 cm (52 3/16 x 76 3/16 x 5 1/8 in.); Unframed: 99.8 x 160.6 cm (39 5/16 x 63 1/4 in.)",
    dimensions: {
      framed: {
        height: 1.325,
        width: 1.935,
        depth: 0.13,
      },
      unframed: {
        height: 0.998,
        width: 1.606,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Hinman B. Hurlbut Collection",
    copyright: null,
    inscriptions: [
      {
        inscription: "signed lower left:  T. Cole / Catskill 1838.",
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 316645,
          title: "A Century of American Landscape Painting 1800-1900",
          description:
            "<i>A Century of American Landscape Painting 1800-1900</i>. Whitney Museum of American Art, New York, NY (organizer) (co-organizer) (January 19-February 25, 1938).",
          opening_date: "1938-01-19T05:00:00",
        },
        {
          id: 316648,
          title:
            "A Souvenir of Romanticism in America; or An Elegant Exposition of Taste and Fashion from 1812-to 1865",
          description:
            "<i>A Souvenir of Romanticism in America; or An Elegant Exposition of Taste and Fashion from 1812-to 1865</i>. The Baltimore Museum of Art, Baltimore, MD (organizer) (co-organizer) (May 10-June 10, 1940).",
          opening_date: "1940-05-10T04:00:00",
        },
        {
          id: 316653,
          title: "Survey of American Painting",
          description:
            "<i>Survey of American Painting</i>. Carnegie Museum of Art, Pittsburgh, PA (co-organizer) (October 24-December 15, 1940).",
          opening_date: "1940-10-24T05:00:00",
        },
        {
          id: 316663,
          title: "The Works of Thomas Cole, 1801-1848",
          description:
            "<i>The Works of Thomas Cole, 1801-1848</i>. Albany Institute of History and Art, Albany, NY (organizer) (co-organizer) (November 1-December 15, 1941).",
          opening_date: "1941-11-01T05:00:00",
        },
        {
          id: 316674,
          title:
            "The Hudson River School and the Early American Landscape Tradition",
          description:
            "<i>The Hudson River School and the Early American Landscape Tradition</i>. The Art Institute of Chicago, Chicago, IL (organizer) (co-organizer) (February 15-March 25, 1945); Whitney Museum of American Art, New York, NY (April 17-May 18, 1945).",
          opening_date: "1945-02-15T04:00:00",
        },
        {
          id: 316680,
          title:
            "Thomas Cole 1801-1848 One Hundred Years Later: A Loan Exhibition",
          description:
            "<i>Thomas Cole 1801-1848 One Hundred Years Later: A Loan Exhibition</i>. Wadsworth Atheneum Museum of Art, Hartford, CT (organizer) (co-organizer) (November 12, 1948-January 2, 1949); Whitney Museum of American Art, New York, NY (January 8-30, 1949).",
          opening_date: "1948-11-12T05:00:00",
        },
        {
          id: 355653,
          title: "Exhibition of the Month: The Romantic Spirit",
          description:
            "<i>Exhibition of the Month: The Romantic Spirit</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (March 29-May 5, 1952).",
          opening_date: "1952-03-29T05:00:00",
        },
        {
          id: 316690,
          title: "Arts of the Young Republic: The Age of William Dunlap",
          description:
            "<i>Arts of the Young Republic: The Age of William Dunlap</i>. Ackland Art Museum, University of North Carolina, Chapel Hill, NC (organizer) (co-organizer) (November 2-December 1, 1968).",
          opening_date: "1968-11-02T05:00:00",
        },
        {
          id: 316697,
          title: "Thomas Cole",
          description:
            "<i>Thomas Cole</i>. Memorial Art Gallery of the University of Rochester, NY (organizer) (co-organizer) (February 14-March 23, 1969); Munson-Williams-Proctor Institute, Utica, NY (April 7-May 4, 1969); Albany Institute of History and Art, Albany, NY (May 9-June 20, 1969); Whitney Museum of American Art, New York, NY (June 30-September 1, 1969).",
          opening_date: "1969-02-14T05:00:00",
        },
        {
          id: 302330,
          title: "Heritage and Horizon: American Painting 1776 - 1976",
          description:
            "<i>Heritage and Horizon: American Painting 1776 - 1976</i>. Albright-Knox Art Gallery, Buffalo, NY (organizer) (March 7-April 11, 1976); The Detroit Institute of Arts, Detroit, MI (May 2-June 13, 1976); The Toledo Museum of Art, Toledo, OH (July 4-August 15, 1976); The Cleveland Museum of Art, Cleveland, OH (September 8-October 24, 1976).",
          opening_date: "1976-03-07T05:00:00",
        },
        {
          id: 304561,
          title: "Visions of Landscape: East and West",
          description:
            "<i>Visions of Landscape: East and West</i>. The Cleveland Museum of Art (organizer) (February 17-March 21, 1982).",
          opening_date: "1982-02-17T05:00:00",
        },
        {
          id: 314070,
          title: "A New World: Masterpieces of American Painting, 1760 - 1910",
          description:
            "<i>A New World: Masterpieces of American Painting, 1760 - 1910</i>. Museum of Fine Arts, Boston, Boston, MA (organizer) (co-organizer) (September 7-November 13, 1983); Corcoran Gallery of Art, Washington, DC (December 7, 1983-February 12, 1984).",
          opening_date: "1983-09-07T04:00:00",
        },
        {
          id: 315079,
          title: "American Paradise: The World of the Hudson River School",
          description:
            "<i>American Paradise: The World of the Hudson River School</i>. The Metropolitan Museum of Art, New York, NY (organizer) (co-organizer) (October 4, 1987-January 3, 1988).",
          opening_date: "1987-10-04T04:00:00",
        },
        {
          id: 316981,
          title:
            "A Nation's Legacy: 150 Years of American Art from Ohio Collections",
          description:
            "<i>A Nation's Legacy: 150 Years of American Art from Ohio Collections</i>. Columbus Museum of Art, Columbus, OH (organizer) (co-organizer) (January 19-March 15, 1992).",
          opening_date: "1992-01-19T05:00:00",
        },
        {
          id: 316985,
          title: "Landscape Into History",
          description:
            "<i>Landscape Into History</i>. National Museum of American Art, Washington, DC (organizer) (co-organizer) (March 18-August 7, 1994); Wadsworth Atheneum Museum of Art, Hartford, CT (September 11-December 4, 1994); The Brooklyn Museum, Brooklyn, NY (January 8-March 25, 1995).",
          opening_date: "1994-03-18T05:00:00",
        },
      ],
      legacy: [
        "<em>Thirteenth Annual Exhibition of the National Academy of Desig</em>n. National Academy of Design, New York, NY (April 23, 1838-?).",
        "<em>Dunlap Benefit Exhibition</em>. Stuyvesant Institute, New York, NY (November 19-December 1838).",
        "<em>January Exhibition of the Apollo Association for the Promotion of the Fine Arts in the United States. </em>Apollo Gallery, New York, NY (1839).",
        "<em>Exhibition of the Paintings of the Late Thomas Cole, At the Gallery of the American Art-Unio</em>n. Gallery of the American Art-Union. New York, NY (March 27 1848-?).",
        "<em>Maryland Historical Society, Second Annual Exhibition</em>. The Picture Gallery, Baltimore, MD (1849). Lent by J.S. Chapman.",
        "<em>The Inaugural Exhibition. </em>Cleveland Museum of Art, Cleveland, OH (June 6-September 20, 1916). Lent by the Holland Galleries.",
      ],
    },
    provenance: [
      {
        description:
          "Dr. George Ackerly [d. 1842], New York, NY, to his daughter, Emma Ackerly1",
        citations: [],
        footnotes: ["1Ackerly was Cole's brother-in-law."],
        date: "1838",
      },
      {
        description: "Emma Ackerly",
        citations: [],
        footnotes: [
          "1 Although the painting is listed as for sale in the 1839 Apollo Association exhibition catalogue, it may not have sold, because in the 1848 Thomas Cole exhibition at the Gallery of the American Art Union, the owner is given as “Mrs. J. J. [sic] Chapman,” the married name of Emma Ackerly.",
          "",
        ],
        date: "By `839 - `847",
      },
      {
        description:
          "Jonathan G. and Emma Ackerly Chapman, sold to Nicholas Matthews1",
        citations: [],
        footnotes: ["1Chapman and Emma Ackerly married on April 20, 1847.11"],
        date: "1847-",
      },
      {
        description: "Nicholas M. Matthews [1858-1930], Baltimore, MD",
        citations: [],
        footnotes: null,
        date: "Until 1914",
      },
      {
        description:
          "(American Art Association, Matthews collection sale, Feb. 17, 1914, no. 61, possibly sold to T. Austin)",
        citations: [],
        footnotes: null,
        date: "1914",
      },
      {
        description: "Possibly T. Austin",
        citations: [],
        footnotes: [
          'According to <em>American Art Annual</em> (1914, vol. 11), the painting was purchased by T. Austin at the 1914 American Art Association sale of Matthews\' collection. The painting then appears again in 1916 in the second Matthews collection sale, this time at Anderson Galleries, with no mention of any ownership by Austin. It is possible that it failed to sell in 1914, and was simply put up for sale again in 1916. That both the 1914 and 1916 sales situate the painting in the collection of Matthews calls into question the supposed purchase by Austin, as does the fact that the 1916 sale notes that the painting was purchased by Matthews "from Mrs. J.G. Chapman, granddaughter of Mr. Cole," who appears prior to Matthews in the provenance.',
          "",
        ],
        date: "1914-1916",
      },
      {
        description:
          "(Anderson Galleries, New York, NY, Matthews collection sale, Jan. 17, 1916, no. 55, sold to Holland Galleries)",
        citations: [],
        footnotes: [
          '1In the sale catalogue the painting is titled "Catskill Mountains.',
          "",
        ],
        date: "1916",
      },
      {
        description:
          "(Holland Galleries, New York, NY, sold to the Cleveland Museum of Art)",
        citations: [],
        footnotes: [
          "1Several copies of the catalogue of the 1916 Matthews collection sale have handwritten notations indicating that Holland Galleries was the buyer. Additionally, shortly prior to CMA's acquisition of the painting, Holland Galleries lent it to the museum's inaugural exhibition in 1916.",
        ],
        date: "1916-1917",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, Ohio",
        citations: [],
        footnotes: null,
        date: "1917-",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: ["1335.1917"],
    fun_fact:
      'Nicknamed "Schroon Mountain" by the artist, the peak\'s official name is Hoffman Mountain.',
    digital_description: null,
    wall_description:
      'Championing the unspoiled American wilderness, Cole declared, "We are still in Eden," in his Essay on American Scenery, published two years before he painted this view of the Adirondacks. Cole sketched the scene in early summer, but when he created the painting in his Catskill studio, he rendered it in a dramatic blaze of fall colors. Such a choice likely had nationalistic overtones, for Cole once proclaimed that autumn was "one season where the American forest surpasses all the world in gorgeousness." Cole further underscored the New World character of his scene by depicting Native Americans in the right foreground foliage. At this time, the presence of Native Americans in the Adirondacks-as in most areas east of the Mississippi River-was rapidly diminishing due to forced resettlement and repression.',
    external_resources: {
      wikidata: [],
      internet_archive: [],
    },
    citations: [
      {
        citation:
          "American Art Association. <em>Illustrated Catalogue of the Valuable Paintings by the Great and Little Masters of the Old and Modern Schools Formed by Mr. Nicholas M. Matthews of Baltimore</em>. New York: The Association, 1914.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "American Federation of Arts. <em>American Art Annual</em>. New York: MacMillan Co, 1898.",
        page_number: null,
        url: null,
      },
      {
        citation: "<em>American Art Annual</em> 11 (1914): 481.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Anderson Galleries, Inc. <em>Paintings by Old and Modern Masters</em>. 1916.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Catalogue of the Inaugural Exhibition June 6-September 20, 1916</em>. Cleveland: The Cleveland Museum of Art, 1916.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Hoffman, Charles Fenno. <em>New-York Mirror, </em>June 1838.",
        page_number: "Mentioned: p. 367, 390",
        url: null,
      },
      {
        citation:
          "American Art-Union. <em>Exhibition of the Paintings of the Late Thomas Cole: At the Gallery of the American Art-Union</em>. New York, NY: Snowden &amp; Prall, 1848.",
        page_number: "Reproduced: no. 75",
        url: null,
      },
      {
        citation:
          "<em>Catalogue of Paintings, Engravings, &amp;c. &amp;c. at Picture Gallery of the Maryland Historical Society: Second Annual Exhibition, 1849</em>. Baltimore, MD: Printed by J.D. Toy, 1849.",
        page_number: "Reproduced: no. 199",
        url: null,
      },
      {
        citation:
          '"The Matthews Sale." <em>American Art News. </em>12:20 (February 21, 1914).',
        page_number: "Mentioned: p. 8",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Catalogue of the Inaugural Exhibition, June 6-September 20, 1916</em>. Cleveland, OH: Cleveland Museum of Art, 1916.",
        page_number: "Reproduced: p. 125",
        url: null,
      },
      {
        citation:
          '"Matthews Pictures Sold." <em>American Art News.</em> 14:16 (January 22, 1916).',
        page_number: "Mentioned: p. 3, no. 55",
        url: null,
      },
      {
        citation:
          '"Accessions." <em>The Bulletin of the Cleveland Museum of Art. </em>4:4 (April-May 1917).',
        page_number: "Mentioned: p. 64-67",
        url: "http://www.jstor.org/stable/25136092",
      },
      {
        citation:
          'Downes, William Howe. "American Painters of Mountains." <em>The American Magazine of Art.</em> 25:4 (October, 1932).',
        page_number: "Reproduced: p. 194",
        url: null,
      },
      {
        citation:
          'Francis, Henry S. "Thomas Cole: Painter of the Catskill Mountains." <em>The Bulletin of The Cleveland Museum of Art.</em> 24:7 (July, 1937).',
        page_number: "Reproduced: front cover; Mentioned: p. 113-116",
        url: "http://www.jstor.org/stable/25137862",
      },
      {
        citation:
          'Kellner, Sydney. "The Beginnings of Landscape Painting in America." <em>Art in America and Elsewhere: An Illustrated Quarterly Magazine.</em> 25 (October, 1938). p. 158-168.',
        page_number: "Reproduced",
        url: null,
      },
      {
        citation:
          "Carnegie Institute, and Lloyd Goodrich. <em>A Century of American Landscape Painting, 1800 to 1900</em>. Pittsburgh, PA: Carnegie Institute, Department of Fine Arts 1939.",
        page_number: "Mentioned: p. 33, cat. no. 59",
        url: null,
      },
      {
        citation:
          'Nathan, Walter L. "Thomas Cole and the Romantic Landscape." <em>Romanticism in America: Papers Contributed to a Symposium Held at The Baltimore Museum of Art.</em> Edited by George Boas, p. 24-63. Baltimore: Johns Hopkins Press, 1940.',
        page_number: "Mentioned: p. 45",
        url: null,
      },
      {
        citation:
          'Watson, Jane. "News and Comment." <em>Magazine of Art.</em> 33 (May, 1940).',
        page_number: "Reproduced: p. 310",
        url: null,
      },
      {
        citation:
          'Lane, James W. "This Year the Carnegie National: Pittsburgh\'s Brilliant Survey of 160 Years of U.S. Painting." <em>The Art News.</em> 39:4 (26 October 1940). p. 7-18.',
        page_number: "Reproduced: p. 11",
        url: null,
      },
      {
        citation:
          'Ault, George. "Thomas Cole Exhibition at Albany Institute." <em>Ulster County News</em> (Kingston, NY), November 27, 1941.',
        page_number: "Mentioned: p. 14",
        url: null,
      },
      {
        citation:
          'Lesley, Parker. "Thomas Cole and the Romantic Sensibility." <em>The Art Quarterly.</em> 5:3 (Summer, 1942). p. 199-221.',
        page_number: "Mentioned: p. 199-221",
        url: null,
      },
      {
        citation:
          'Frankenstein, Alfred. "Thomas Cole: The Story of a New Local Purchase." <em>San Francisco Chronicle, </em>January, 1947.',
        page_number: "Mentioned: p. 21",
        url: null,
      },
      {
        citation:
          'Devree, Howard. "Baroque to Modern: A Wide Range of Styles in the New Shows." <em>The New York Times</em>, January 16, 1949.',
        page_number: "Reproduced: p. X9",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland, OH: The Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 533",
        url: "https://archive.org/details/CMAHandbook1958/page/n98",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 184",
        url: "https://archive.org/details/CMAHandbook1966/page/n208",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 184",
        url: "https://archive.org/details/CMAHandbook1969/page/n208",
      },
      {
        citation:
          "Hamilton, George Heard. <em>19th and 20th Century Art: Painting, Sculpture, Architecture</em>. New York: H.N. Abrams, 1970.",
        page_number: "Mentioned: p. 70-77; Reproduced: p. 76, fig. 60",
        url: null,
      },
      {
        citation:
          "Celeste, Adam, Rita Myers, and Adele Z. Silver. <em>An Introduction to American Art in The Cleveland Museum of Art. </em>Cleveland, OH: The Cleveland Museum of Art, 1972.",
        page_number: "Mentioned: p. 7-10; Reproduced: p. 7",
        url: null,
      },
      {
        citation:
          'Cleveland Museum of Art. "A Check List: American Paintings and Water Colors of the Eighteenth, Nineteenth, and Early Twentieth Centuries in The Cleveland Museum of Art." <em>The Bulletin of the Cleveland Museum of Art</em>. 60:1 (January, 1973). pp. 1-36.',
        page_number: "Mentioned: p. 24, no. 39",
        url: "http://www.jstor.org/stable/25152465",
      },
      {
        citation:
          'Talbot, William S. "American Landscape Paintings in The Cleveland Museum of Art." <em>Antiques</em>. 104:5 (November, 1973). pp. 906-917.',
        page_number: "Reproduced: p. 906, fig. 1",
        url: null,
      },
      {
        citation:
          "Barnett, Lincoln. <em>The Ancient Adirondacks.</em> New York: Time-Life Books, 1974.",
        page_number: "Reproduced",
        url: null,
      },
      {
        citation:
          "Albright-Knox Art Gallery, Detroit Institute of Arts, and Toledo Museum of Art. <em>Heritage and Horizon: American Painting, 1776-1976</em>. Toledo, OH: Toledo Museum of Art, 1976.",
        page_number: "Mentioned: p. [16]; Reproduced",
        url: null,
      },
      {
        citation:
          'Field, Marta. <em>"</em>Kindred Spirits: George Arms and American Studies Since 1944." <em>New America. </em>3:2 (Summer/Fall, 1977).',
        page_number: "Reproduced: p. 44",
        url: null,
      },
      {
        citation:
          'Johnson, Mark M. "American Landscapes." <em>Arts and Activities. </em>82:4 (December, 1977). pp. 8-33.',
        page_number: "Reproduced: p. 28, fig. 1",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art</em>. Cleveland, OH: Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 228",
        url: null,
      },
      {
        citation:
          "Millhouse, Barbara Babcock. <em>American Wilderness: The Hudson River School of Painting</em>. Garden City, NY: Doubleday, 1978.",
        page_number: "Reproduced: p. 46; Mentioned: pp. 41-47",
        url: null,
      },
      {
        citation:
          'Zakon, Ronnie L. "The Romantic Vision." <em>The Romantic Vision: 19th Century American Landscape Painting in the Walker Art Center Permanent Collection. </em>Minneapolis, MN: Walker Art Center 1978. pp. 6-21.',
        page_number: "Reproduced: p. 8, fig. 3",
        url: null,
      },
      {
        citation:
          'Powell, Earl A., III. "Thomas Cole and the American Landscape Tradition: The Picturesque." <em>Arts Magazine.</em> 52 (March, 1978). pp. 110-117.',
        page_number: "Reproduced: p. 113",
        url: null,
      },
      {
        citation:
          'Meservey, Anne Farmer. "The Role of Art in American Life: Critics\' Views of Native Art and Literature, 1830-1865." <em>The American Art Journal. </em>10:1 (May, 1978). pp. 72-89.',
        page_number: "Reproduced: p. 84, fig. 10",
        url: null,
      },
      {
        citation:
          'Craven, Wayne. "Thomas Cole and Italy." <em>The Magazine Antiques</em>. 114:5 (November, 1978). pp. 1014-1027.',
        page_number: "Mentioned: p. 1014-1027",
        url: null,
      },
      {
        citation:
          "Moore, Janet Gaylord.<em> The Eastern Gate: An Invitation to the Arts of China and Japan</em>. Cleveland: Collins, 1979.",
        page_number: "Mentioned: p. 19-26; Reproduced: p. 23",
        url: null,
      },
      {
        citation:
          "Cikovsky, Nicolai, Jr. \"'The Ravages of the Axe': The Meaning of the Tree Stump in Nineteenth-Century American Art.\" <em>The Art Bulletin.</em> 61:4 (December, 1979). pp. 611-626.",
        page_number: "Mentioned:  p. 624; Reproduced: p. 624, fig. 22",
        url: "www.jstor.org/stable/3049941",
      },
      {
        citation:
          "Wilmerding, John, and Lisa Fellows Andrus. <em>American Light: The Luminist Movement, 1850-1875: Paintings, Drawings, Photographs</em>. Washington, D.C.: National Gallery of Art, 1980.",
        page_number:
          "Mentioned: p. 162-170, 181-183; Reproduced: illus. p. 164, fig. 200",
        url: null,
      },
      {
        citation:
          "Hobbs, Robert Carleton. <em>Robert Smithson: Sculpture</em>. Ithaca, NY: Cornell University Press, 1981.",
        page_number: "Mentioned: p. 27-30; Reproduced: p. 28",
        url: null,
      },
      {
        citation:
          "Baigell, Matthew. <em>Thomas Cole</em>. New York: Watson-Guptill Publications, 1981.",
        page_number:
          "Mentioned: p. 34-35, 58-59, 68-69, 76-77; Reproduced: p. 59, plate 20",
        url: null,
      },
      {
        citation:
          "Silver, Adele Z. <em>Guide to the Galleries: The Cleveland Museum of Art.</em> 2nd ed., revised. Cleveland, OH: Cleveland Museum of Art, 1981.",
        page_number: "Mentioned: p. 80-82; Reproduced: p. 82, fig. 75",
        url: null,
      },
      {
        citation:
          "Czestochowski, Joseph S. <em>The American Landscape Tradition: A Study and Gallery of Paintings</em>. New York, NY: E.P. Dutton, 1982.",
        page_number:
          "Mentioned: p. 7-11, 13-17, 49, 68-69, 154-168; Reproduced: pp. 68-69, fig. no. 53",
        url: null,
      },
      {
        citation:
          "Morse, Samuel Finley Breese. <em>Lectures on the Affinity of Painting with the Other Fine Arts</em>, edited by Nicolai Cikovsky. Columbia, MO: University of Missouri Press, 1983.",
        page_number: "Mentioned: p. 19-33; Reproduced: fig. 13",
        url: null,
      },
      {
        citation:
          'Talbot, William S. "Visions of Landscape: East and West." <em>The Bulletin of the Cleveland Museum of Art</em>. 70:3 (March, 1983). pp. 112-135.',
        page_number: "Mentioned: p. 115-117; Reproduced: p. 115, fig. 4",
        url: "http://www.jstor.org/stable/25159808",
      },
      {
        citation:
          "Creese, Walter L. <em>The Crowning of the American Landscape: Eight Great Spaces and Their Buildings</em>. Princeton, N.J.: Princeton University Press, 1985.",
        page_number: "Mentioned: p. 71-76; Reproduced: p. 76, fig. 20",
        url: null,
      },
      {
        citation:
          "Kelly, Franklin. <em>Frederic Edwin Church and the North American Landscape, 1845-60</em>. Ph.D. dissertation, University of Delaware, 1985.",
        page_number: "Mentioned: p. 9",
        url: null,
      },
      {
        citation:
          "Avery, Kevin J., Oswaldo Rodriguez Roque, John K. Howat, Doreen Bolger Burke, and Catherine Hoover Voorsanger. <em>American Paradise: The World of the Hudson River School</em>. New York, NY : Metropolitan Museum of Art : H.N. Abrams, 1987.",
        page_number: "Mentioned: p. 134-136",
        url: null,
      },
      {
        citation:
          'Rodrigues Roque, Oswaldo. "Realism and Idealism in Hudson River School Painting." <em>Antiques</em> 132:5 (November, 1987). pp. 1096-1109.',
        page_number: "Mentioned: p. 1100",
        url: null,
      },
      {
        citation:
          "Parry, Ellwood C, III. <em>The Art of Thomas Cole: Ambition and Imagination</em>. Newark, NJ: University of Delaware Press, 1988.",
        page_number:
          "Mentioned: p. 188-225, 389-391; Reproduced: p. 202, fig. 165",
        url: null,
      },
      {
        citation:
          'Roque, Oswaldo Rodriguez. "The Exaltation of American Landscape Painting." <em>Nature Rightly Observed: Hudson River School Landscape Paintings from The Metropolitan Museum of Art. </em>Shizuoka-shi: Metoroporitan Bijutsukan Meisaku Nihon Jikkō Iinkaii, 1988.',
        page_number:
          "Mentioned: p. 18, 36-55, 182, 209-210; Reproduced: p. 18, fig. 11",
        url: null,
      },
      {
        citation:
          'Cikovsky, Nicolai, Jr. "Thomas Cole (1801-1848) Schroon Lake." <em>American Paintings from the Manoogian Collection</em>. Washington, D.C.: National Gallery of Art, 1989.',
        page_number: "Mentioned: p. 16-17",
        url: null,
      },
      {
        citation:
          "Vance, William L. <em>America's Rome.</em> New Haven, CT: Yale University Press, 1989.",
        page_number: "Mentioned: p. 90-105; Reproduced: p. 104, fig. 35",
        url: null,
      },
      {
        citation:
          "Minks, Louise. <em>The Hudson River School</em>. New York: Crescent Books, 1989.",
        page_number: "Mentioned: p. 6-18, 20; Reproduced: p. 25",
        url: null,
      },
      {
        citation:
          "Powell, Earl A. <em>Thomas Cole</em>. New York: H.N. Abrams, 1990.",
        page_number: "Mentioned: p. 20-47, 72-83, 139; Reproduced: p. 72",
        url: null,
      },
      {
        citation:
          "Wilkins, David G., and Bernard Schultz. <em>Art Past/Art Present</em>. New York: Abrams, 1990.",
        page_number: "Mentioned: p. 388-389; Reproduced: p. 388, fig. 421",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art</em>. Cleveland, OH: Cleveland Museum of Art, 1991.",
        page_number: "Reproduced: p. 126",
        url: null,
      },
      {
        citation:
          "Parry, Ellwood C., III. \"Les Montagnes dans L'Imaginaire de Thomas Cole.\" <em>La montagne et ses images du peintre d'Askrésilas à Thomas Cole. </em>Paris: Éditions du CTHS, 1991.",
        page_number: "Mentioned: p. 383-415; Reproduced: p. 411, fig. 7",
        url: null,
      },
      {
        citation:
          "Clément, Jean-Paul. <em>Chateaubriand et le sentiment de la nature</em>. Châtenay-Malabry: La Vallée aux loups, Maison de Chateaubriand, 1991.",
        page_number: "Mentioned: p. 13-21; Reproduced: p. 16",
        url: null,
      },
      {
        citation:
          'Robertson, Bruce. "Frederic A. Whiting: Founding the Museum with Art and Craft." <em>Object Lessons: Cleveland Creates an Art Museum</em>. Cleveland, OH: Cleveland Museum of Art, 1991.',
        page_number: "Mentioned: p. 32-59; Reproduced: p. 47",
        url: null,
      },
      {
        citation:
          "Maciejunes, Nannette V., and Norma J. Roberts. <em>A Nation's Legacy: 150 Years of American Art from Ohio Collections</em>. Columbus, OH: Columbus Museum of Art, 1992.",
        page_number: "Reproduced: p. 30, 174; Mentioned: p. 22",
        url: null,
      },
      {
        citation:
          "Truettner, William H., Alan Wallach, and Christine Stansell. <em>Thomas Cole: Landscape into History</em>. New Haven, CT: Yale University Press, 1994.",
        page_number: "Reproduced: p. 69, fig. 84; Mentioned: p. 171",
        url: null,
      },
      {
        citation:
          "Marchetti, Francesca Castria, ed. <em>American Painting. </em>New York: Watson-Guptill Publications, 2002.",
        page_number: "Mentioned: p. 44",
        url: null,
      },
      {
        citation:
          'Grabenhorst, T.N. "A River Runs Through It: Master Artists of the Hudson." <em>The Compass: The Magazine of the Sea. </em>2 (2004).',
        page_number: "Mentioned: p. 30-35; Reproduced: p. 34",
        url: null,
      },
      {
        citation:
          'Grabenhorst, T.N. "A River Runs Through It: Master Artists of the Hudson," <em>The Compass: A Magazine of the Sea, no. 2 (</em>2004):30-35.',
        page_number: "Reproduced: p. 34",
        url: null,
      },
      {
        citation:
          'Cole, Mark. "New Spaces in the Cleveland Museum of Art." <em>American Art </em>24 no. 2 (Summer 2010)',
        page_number: "Reproduced: p. 16",
        url: null,
      },
      {
        citation:
          'Shepard, Paul, Jr. "Paintings of the New England Landscape: A Scientist Looks at Their Geomorphology." <em>College Art Journal. </em>17:1 (Fall, 1957). pp. 30-43.',
        page_number: "Reproduced: p. 36, fig. 5",
        url: null,
      },
      {
        citation:
          "Eliot, Alexander. <em>Three Hundred Years of American Painting</em>. New York: Time Inc, 1957.",
        page_number: "Mentioned: pp. 70-74; Reproduced: p. 70",
        url: null,
      },
      {
        citation:
          'Goodrich, Lloyd. "What is American in American Art?" <em>Art in America.</em> 46 (Fall, 1958). pp. 19-33.',
        page_number: "Reproduced: p. 23",
        url: null,
      },
      {
        citation:
          '"Special Exhibitions." <em>The Bulletin of The Cleveland Museum of Art.</em> 45:1 (January 1962). pp. 3-12.',
        page_number: "Reproduced",
        url: "http://www.jstor.org/stable/25142482",
      },
      {
        citation:
          "McCoubrey, John W. <em>American Tradition in Painting</em>. New York: G. Braziller, 1963.",
        page_number: "Reproduced: plate 22; Mentioned: pp. 22-31, 113-126",
        url: null,
      },
      {
        citation:
          "<em>American Literature.</em> eds. Andrew J. Porter and Henry L. Terrie, Jr. New York: Ginn and Company, 1964.",
        page_number: "Reproduced: p. 204",
        url: null,
      },
      {
        citation:
          "<em>The Beauty of America in Great American Art: With Selections from the Writings of Renowned American Authors</em>. Waukesha, WI: Country Beautiful Foundation; New York: In association with W. Morrow, 1965.",
        page_number: "Reproduced: pp. 38-39; Mentioned: pp. 37-39",
        url: null,
      },
      {
        citation:
          "Huntington, David Carew. <em>The Landscapes of Frederic Edwin Church: Vision of an American Era</em>. New York: G. Braziller, 1966.",
        page_number: "Mentioned: p. 24-34, 200; Reproduced: fig. 4",
        url: null,
      },
      {
        citation:
          "Merritt, Howard S. \"'A Wild Scene' Genesis of a Painting.\" <em>The Baltimore Museum of Art Annual II: Studies on Thomas Cole, An American Romanticist. </em>Baltimore, MD: The Baltimore Museum of Art, 1967.",
        page_number: "Mentioned: p. 7-40; Reproduced: p. 23, fig. 7",
        url: null,
      },
      {
        citation:
          '"I Don\'t Know Art, But I Know What I Like." <em>The Ohio Bell Voice, </em>January, 1967.',
        page_number: "Mentioned: p. 12-15; Reproduced: p. 13",
        url: null,
      },
      {
        citation:
          "Moore, Janet Gaylord. <em>The Many Ways of Seeing: An Introduction to the Pleasures of Art</em>. Cleveland, OH: World Pub. Co, 1968.",
        page_number: "Mentioned: p. 117-120; Reproduced: p. 118",
        url: null,
      },
      {
        citation:
          'Talbot, William S. "American Visions of Wilderness." <em>The Bulletin of the Cleveland Museum of Art</em>. 56:4 (April, 1969). p. 151-166.',
        page_number: "Mentioned: p. 154-156; Reproduced: p. 154, fig. 3",
        url: "http://www.jstor.org/stable/25152270",
      },
      {
        citation:
          'Talbot, William S. "American Visions of Wilderness." <em>The Living Wilderness.</em> 33:108 (Winter, 1969). pp. 14-25.',
        page_number: "Reproduced: p. 17, fig. 3",
        url: null,
      },
      {
        citation:
          "Prown, Jules David. <em>American Painting: From Its Beginnings to the Armory Show, vol. 1. </em>Geneva: Skira, distributed by World Publishing Company, 1969.",
        page_number: "Mentioned: p. 64-75; Reproduced: p. 67",
        url: null,
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1917.1335",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1917.1335/1917.1335_web.jpg",
        filename: "1917.1335_web.jpg",
        filesize: "716717",
        width: "1263",
        height: "775",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1917.1335/1917.1335_print.jpg",
        filename: "1917.1335_print.jpg",
        filesize: "5582485",
        width: "3400",
        height: "2086",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1917.1335/1917.1335_full.tif",
        filename: "1917.1335_full.tif",
        filesize: "72628688",
        width: "6280",
        height: "3853",
      },
    },
    updated_at: "2022-01-04 14:34:13.493000",
  },
  {
    id: 126769,
    accession_number: "1949.186",
    share_license_status: "CC0",
    tombstone:
      "Fight between a Tiger and a Buffalo, 1908. Henri Rousseau (French, 1844-1910). Oil on fabric; framed: 183 x 203 x 4.5 cm (72 1/16 x 79 15/16 x 1 3/4 in.); unframed: 170 x 189.5 cm (66 15/16 x 74 5/8 in.). The Cleveland Museum of Art, Gift of the Hanna Fund 1949.186",
    current_location: "223 20th Century Avant-Garde",
    title: "Fight between a Tiger and a Buffalo",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1908",
    creation_date_earliest: 1908,
    creation_date_latest: 1908,
    creators: [
      {
        id: 1804,
        description: "Henri Rousseau (French, 1844-1910)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography:
          "Self-taught artist Henri Rousseau was born in Laval in 1844. He entered the military at the age of eighteen and served as a saxophone player in an infantry band. Most biographers discount his claim of traveling abroad during the Mexican campaign. In 1871 Rousseau left the military to join the customs service, where he spent fourteen years working on the outskirts of Paris as a minor inspector. After retiring with a small pension in 1885, he pursued the career of a painter and sought portrait commissions. From 1886 to 1910, he exhibited on a regular basis at the Salon des Indépendants, and after 1905, at the Salon d'Automne. Through these activities he became friendly with other artists, including Gauguin (q.v.), Pissarro (q.v.), Seurat (q.v), Paul Signac (1863-1935), and Redon (q.v.) who affectionately called him \"le douanier\" (customs officer). Rousseau's paintings were poorly received, and frequently ridiculed in the press, until he attracted a small group of admirers in the early years of this century. This group included Pablo Picasso, Maurice de Vlaminck, Robert Delaunay, Max Weber, and Ardengo Soffici, along with the writers Alfred Jarry, Max Jacob, André Salmon, and Guillaume Apollinaire. In 1908, a famous banquet honoring Rousseau was organized at Picasso's studio. Avant-garde artists admired Rousseau's direct, simple vision and his innate talent at clear, pictorial design. However, he aspired to paint in the academic manner of Gérôme (q.v.) and Bouguereau (q.v.). Rousseau reportedly told Picasso: \"We are the two greatest artists of this era-you in the Egyptian style, I in the modern style.\"1 Despite growing acclaim in his late years, Rousseau struggled for sales and was forced to supplement his meager income by giving private painting and violin lessons. He occasionally sold works through the dealers Ambroise Vollard and Wilhelm Uhde. In 1909 Rousseau was convicted of complicity in a bank fraud, but authorities suspended the sentence because of his age and apparent failure to comprehend his role in the crime. Rousseau died in Paris of pneumonia in 1910. In 1911 Uhde organized a retrospective at the Indépendants and published the first biography of Rousseau.",
        name_in_original_language: null,
        birth_year: "1844",
        death_year: "1910",
      },
    ],
    culture: ["France, late 19th-early 20th Century"],
    technique: "oil on fabric",
    support_materials: [],
    department: "Modern European Painting and Sculpture",
    collection: "Mod Euro - Painting 1800-1960",
    type: "Painting",
    measurements:
      "Framed: 183 x 203 x 4.5 cm (72 1/16 x 79 15/16 x 1 3/4 in.); Unframed: 170 x 189.5 cm (66 15/16 x 74 5/8 in.)",
    dimensions: {
      framed: {
        height: 1.83,
        width: 2.03,
        depth: 0.045,
      },
      unframed: {
        height: 1.7,
        width: 1.895,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Gift of the Hanna Fund",
    copyright: null,
    inscriptions: [
      {
        inscription:
          "Signed and dated lower right: Henri Rousseau / 1908\r\n\r\n\r\n",
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 301477,
          title: "In Memoriam: Leonard C. Hanna, Jr.",
          description:
            "<i>In Memoriam: Leonard C. Hanna, Jr.</i>. The Cleveland Museum of Art (organizer) (March 4-April 7, 1958).",
          opening_date: "1958-03-04T05:00:00",
        },
        {
          id: 300763,
          title: "Years of Ferment: The Birth of Twentieth-century Art",
          description:
            "<i>Years of Ferment: The Birth of Twentieth-century Art</i>. The Cleveland Museum of Art (July 14-August 22, 1965).",
          opening_date: "1965-07-14T04:00:00",
        },
        {
          id: 310025,
          title: "Creativity in Art and Science, 1860-1960",
          description:
            "<i>Creativity in Art and Science, 1860-1960</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (September 16-November 8, 1987).",
          opening_date: "1987-09-16T04:00:00",
        },
        {
          id: 224431,
          title: "Henri Rousseau and the Modern Age",
          description:
            "<i>Henri Rousseau and the Modern Age</i>. Künsthalle Tubingen, D-72076 Tübingen, Germany (organizer) (February 3-June 17, 2001).",
          opening_date: "2001-02-03T00:00:00",
        },
        {
          id: 229570,
          title: "Jungles in Paris: The Paintings of Henri Rousseau",
          description:
            "<i>Jungles in Paris: The Paintings of Henri Rousseau</i>. Tate Modern, London, United Kingdom of Great Britain and Northern Ireland (organizer) (November 3, 2005-February 5, 2006); Galeries Nationales du Grand Palais, 75008 Paris, France (March 13-June 19, 2006); National Gallery of Art, Landover, MD (July 16-October 15, 2006).",
          opening_date: "2005-11-03T00:00:00",
        },
        {
          id: 182153,
          title:
            "Monet to Dalí: Modern Masters from the Cleveland Museum of Art",
          description:
            "<i>Monet to Dalí: Modern Masters from the Cleveland Museum of Art</i>. Seoul Art Center, South Korea (December 22, 2006-March 28, 2007); Seoul Olympic Museum of Art, South Korea (April 7-May 20, 2007); Vancouver Art Gallery, Vancouver, Canada (June 9-September 16, 2007); The Cleveland Museum of Art, Cleveland, OH (organizer) (October 21, 2007-January 13, 2008).",
          opening_date: "2006-05-27T00:00:00",
        },
        {
          id: 202129,
          title:
            "Admired from Afar: Masterworks of Japanese Painting from the Cleveland Museum of Art",
          description:
            "<i>Admired from Afar: Masterworks of Japanese Painting from the Cleveland Museum of Art</i>. Tokyo National Museum, Tokyo, Japan (January 15-February 23, 2014); Kyushu National Museum, Fukuoka, Japan (July 8-August 31, 2014).",
          opening_date: "2014-01-15T00:00:00",
        },
        {
          id: 223433,
          title: "The Shadow of the Avant-Garde",
          description:
            "<i>The Shadow of the Avant-Garde</i>. Museum Folkwang, 45128 Essen, Germany (organizer) (October 3, 2015-January 10, 2016).",
          opening_date: "2015-10-03T00:00:00",
        },
        {
          id: 220685,
          title: "Le Douanier Rousseau. L'innocence archaïque",
          description:
            "<i>Le Douanier Rousseau. L'innocence archaïque</i>. Musée d'Orsay, 75343 Paris, France (organizer) (March 21-July 17, 2016); National Gallery, Prague (September 16, 2016-January 15, 2017).",
          opening_date: "2016-03-21T00:00:00",
        },
      ],
      legacy: [
        "Paris, Société des Artistes Indépendants. 24me exposition (1908), no. 5260, Combat de Tigre et de Buffle (for sale).<br><br>Chicago, Arts Club Exhibitions at the Art Institute. Loan Exhibition of Some Modern Paintings (1926-27), no. 14, The Jungle, lent by Mrs. John A. Carpenter. <br><br>New York, Reinhardt Gallery. Loan Exhibition of Paintings from Memling, Holbein, and Titian to Renoir and Picasso (1928), no. 27, The Jungle, lent by Mrs. John Alden Carpenter (repr.)<br><br>New York, Valentine Gallery. Six Major Paintings by the Modern Masters of France, Braque, Matisse, Derain, Picasso, and One Important Work by Henri Rousseau (1930), no. 7, Le tigre et le rhinocéros-1908.<br><br>Arts Club of Chicago. Paintings by Henri Rousseau (1931), no. 7, The Jungle, collection of Mrs. John Alden Carpenter, Chicago.<br><br>New York, Museum of Modern Art. Fruit and Flower Paintings (1933), no cat. <br>Art Institute of Chicago. A Century of Progress Exhibition of Paintings and Sculpture (1933 and 1934), no. 368 (1933); no. 321 (1934), lent by Mrs. Patrick J. Hill to the Joseph Winterbotham Collection, Art Institute of Chicago. <br><br>Art Institute of Chicago; New York, Museum of Modern Art. Henri Rousseau (1942-43), 49 (repr.) (lent by Hill, according to 1942 moma label on the back of the frame; according to moma archives, the painting did not travel to other venues after New York), 64.<br><br>New York, Pierre Matisse Gallery. Twentieth Century Masters (1948), no. 12, The Jungle (repr.).<br>Venice. XXV Biennale di Venezia (1950), 235, no. 14, fig. 59.<br><br>Montreal Museum of Art. Six Centuries of Landscape (1952), no. 58, 29 (repr.). <br><br>Paris, Musée National d'Art Moderne. L'oeuvre du XXe siècle (1952), no. 98.<br><br>London, Tate Gallery (Organized by the Arts Council). XXth Century Masterpieces (1952), no. 83. <br><br>Kansas City, Nelson Gallery and Atkins Museum. Twentieth Anniversary Celebration: French Paintings-19th and 20th Centuries-A Loan Exhibition (1953), checklist no. 10. <br><br>Buffalo, Albright Art Gallery. Fifty Paintings 1905-1913 (1955), no. 42, 64 (repr.). <br><br>Kansas City, Nelson Gallery and Atkins Museum. Twenty-fifth Anniversary Exhibition, in The Nelson Gallery and Atkins Museum Bulletin 1 (December 1958), no. 9.<br><br>Seattle World's Fair, Fine Art Pavillion. Masterpieces of Art (1962), no. 53 (repr.).<br><br>New York, Wildenstein. Loan Exhibition Henri Rousseau (1963), no. 46 (repr.).<br><br>Rotterdam, Museum Boymans-van Beuningen. De Lusthof der Naïeven (1964), no. 20 (repr.).<br><br>Paris, Musée National d'Art Moderne. Le Monde des Naifs (1964), no. 20 (repr.).<br><br>Los Angeles, ucla Art Galleries; San Francisco Museum of Art; cma. Years of Ferment: The Birth of Twentieth Century Art 1886-1914 (1965), 38 (repr.), no. 47 (repr. on cover).<br><br>Paris, Grand Palais; New York, Museum of Modern Art. Henri Rousseau (1984-85), no. 50 (repr.) (not shown in Paris).<br><br>CMA. Creativity in Art and Science (1987), no. 18 (repr.).<br><br>Tübingen, Germany: Kunsthalle Tübingen, Germany. Henri Rousseau and the Modern Age (2/3/01 - 6/17/01), exh. cat. no. 43, pp 209-211, repr. p. 211, detail front and back.<br><br>Tate Modern, London (11/3/2005 - 2/5/2006), Galeries du Grand Palais, Paris (3/13/2006 - 6/19/2006) and the National Gallery of Art, Washington, DC (7/16/2006 - 10/15/2006): \"Jungles in Paris: The Paintings of Henri Rousseau\" ex. cat. no. 45, p. 148-149.<br><br>CMA (organizer). Seoul Arts Center, Seoul, Korea: Dec. 18, 2006 - March 31, 2007; Seoul Olympic Museum of Art, Seoul, Korea: Apr. 7 - May 20, 2007; Vancouver Art Gallery, Vancouver, British Columbia, Canada: June 9 - Sept. 16, 2007; Cleveland Museum of Art, Oct. 21, 2007- January 13, 2008: \"Modern Masters from the Cleveland Museum of Art\"<br><br>Musée d'Orsay, Paris, France (3/21/2016 - 7/17/2016): \"Le Douanier Rousseau. L'innocence archaïque\" cat. no. 89, p. 232-233.",
      ],
    },
    provenance: [],
    find_spot: null,
    related_works: [],
    former_accession_numbers: [],
    fun_fact:
      "Many of Rousseau's paintings depict wild animals and tropical jungles that might lead you to believe he was quite the adventurer. Despite the wild subject matter Rousseau never left France, but instead drew inspiration from visiting botanical gardens and reading travel books. Would you like to visit the fantastical world shown in this painting?",
    digital_description: null,
    wall_description:
      "Having never ventured outside France, Rousseau derived his jungle scenes from reading travel books and visiting the Paris botanical garden. He placed this imaginary scene of a tiger attacking a buffalo within a fantastic jungle environment in which botanical accuracy was of little importance (note the bananas growing upside down). Here, sharply outlined hothouse plants are enlarged to fearsome proportions. Rousseau was working on this painting while imprisoned for fraud in December 1907. Officials granted him an early release to finish it for exhibition at the Salon des Indépendants, where this major composition, one of the artist's largest and most important, appeared in March 1908. A self-taught artist and retired customs inspector, Rousseau was admired by Pablo Picasso and other avant-garde artists for his originality and the naïve purity of his vision.",
    external_resources: {
      wikidata: [],
      internet_archive: [],
    },
    citations: [
      {
        citation:
          "Le douanier Rousseau: l'innocence archaïque [exposition au Musée d'Orsay, du 22 mars au 17 juillet 2016]. Dossier De L'art (Dijon). Dijon: Édition Faton, 2016. \ncatalogue number 89",
        page_number: "232-233",
        url: null,
      },
      {
        citation:
          "Fajt, Jiří. Celnik Douanier Rousseau: Painter's Paradise Lost : [Exposition National Gallery, Prague, 15.09.2016-15.01.2017]. Prague: National Gallery, 2016.",
        page_number: "128-129",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland, OH: The Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 515",
        url: "https://archive.org/details/CMAHandbook1958/page/n95",
      },
      {
        citation:
          "Henning, Edward B. <em>The Spirit of Surrealism</em>. Cleveland: The Cleveland Museum of Art, 1979.",
        page_number:
          "Mentioned: p. 49-50, 185; Reproduced: p. 50, fig. 8; colorplate III",
        url: null,
      },
      {
        citation:
          "Le Pichon, Yann. <em>The world of Henri Rousseau.</em> New York: Viking Press, 1982.",
        page_number: "Reproduced: p. 147",
        url: null,
      },
      {
        citation:
          "Henning, Edward B. <em>Creativity in Art and Science, 1860-1960</em>. [Cleveland, Ohio]: Published by the Cleveland Museum of Art in cooperation with Indiana University Press, 1987.",
        page_number: "Mentioned and reproduced: P. 110, no. 18",
        url: "",
      },
      {
        citation:
          "<em>Admired from afar: masterworks of Japanese painting from the Cleveland Museum of Art</em> [クリーブランド美術館展 : 名画でたどる日本の美 Kurīburando Bijutsukan ten: meiga de tadoru Nihon no bi ]. Tokyo: Tōkyō Kokuritsu Hakubutsukan, 2014.",
        page_number: "Reproduced: p. 135",
        url: null,
      },
      {
        citation:
          "König, Kasper, and Falk Wolf, eds. <em>The Shadow of the Avant-Garde: Rousseau and the Forgotten Masters.</em> Ostfildern, Germany: Hatje Cantz Verlag, 2015.",
        page_number: "Reproduced: p. 92, fig. 57",
        url: null,
      },
      {
        citation:
          "Belli, Gabriella. <em>Le Douanier Rousseau: l'innocence archaïque.</em> Vanves: Hazan, 2016.",
        page_number: "Reproduced: p. 232-233, no. 89",
        url: null,
      },
      {
        citation:
          "Brožová, Kristýna. <em>Celník Rousseau: malířův ztracený ráj = Douanier Rousseau: Painter's Paradise Lost.</em> 2016.",
        page_number: "Mentioned: p. 21; Reproduced: p. 128-129",
        url: null,
      },
      {
        citation:
          'Homburg, Cornelia. "Redon\'s Femmes aux Fleurs." In <em>Odilon Redon: Literature and Music.</em> Cornelia Homburg, etal., 174-197. Rotterdam: Nai010 uitgevers, 2018.',
        page_number: "Reproduced: p. 184, no. 183",
        url: null,
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1949.186",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1949.186/1949.186_web.jpg",
        width: "900",
        height: "806",
        filename: "1949.186_web.jpg",
        filesize: "265744",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1949.186/1949.186_print.jpg",
        width: "3400",
        height: "3046",
        filename: "1949.186_print.jpg",
        filesize: "3071351",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1949.186/1949.186_full.tif",
        width: "12503",
        height: "11202",
        filename: "1949.186_full.tif",
        filesize: "420208660",
      },
    },
    updated_at: "2022-05-03 09:00:25.937000",
  },
  {
    id: 125249,
    accession_number: "1947.209",
    share_license_status: "CC0",
    tombstone:
      "The Large Plane Trees (Road Menders at Saint-Rémy), 1889. Vincent van Gogh (Dutch, 1853-1890). Oil on fabric; framed: 104.5 x 124.5 x 7.6 cm (41 1/8 x 49 x 3 in.); unframed: 73.4 x 91.8 cm (28 7/8 x 36 1/8 in.). The Cleveland Museum of Art, Gift of the Hanna Fund 1947.209",
    current_location: "222 Impressionism & Post-Impressionism",
    title: "The Large Plane Trees (Road Menders at Saint-Rémy)",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1889",
    creation_date_earliest: 1889,
    creation_date_latest: 1889,
    creators: [
      {
        id: 1779,
        description: "Vincent van Gogh (Dutch, 1853-1890)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography:
          "The son of a clergyman, Vincent van Gogh was sent to The Hague at the age of sixteen to become an apprentice at Goupil &amp; Co., an art dealer with whom his uncle was affiliated. In August 1872 van Gogh began his extensive correspondence with his younger brother Theo, who would join the Brussels branch of the firm the following year. Vincent was transferred to the London offices in 1873 and two years later to the Paris office, but he despised the art trade and was dismissed in 1876. He then taught briefly at a boarding school in Ramsgate and Isleworth, and, back in the Netherlands, worked in a bookshop in Dordrecht before moving to Amsterdam to study theology. In little more than a year he had left the university and entered missionary school, failing again. Still intent on entering the ministry, he moved to the Borinage in Belgium and became a lay evangelist to the miners. Van Gogh finally decided to become an artist in August 1880 and started copying works by Millet (q.v.), the painter of peasant life. With his brother's financial help, he briefly joined the Academy in Brussels. The following year he returned to The Hague, where he received some artistic training from his cousin by marriage, Anton Mauve (1838-1888). There van Gogh met Sien Hoornik, a pregnant prostitute with a five-year-old daughter, with whom he lived briefly. Unable to marry her because of his family's disapproval, he moved in November 1883 from The Hague to the province of Drenthe, a popular place for artists, where he painted and drew laborers and peasants. Feeling terribly lonely, he visited his parents in December 1884 in Nuenen, and it was there that he finally decided to become a painter of peasant life. Van Gogh completed The Potato Eaters (Van Gogh Museum, Amsterdam) in April 1885 and sent it to his brother in Paris. On 25 November he moved to Antwerp, where he reveled in the work of Rubens and first came to know Japanese prints. Van Gogh traveled to Paris in March 1886 and lived with Theo. Under the influence of the impressionists, and works by Monticelli (q.v.), his palette changed to more intense and vibrant colors. He began to associate with Émile Bernard (1868-1941), Henri de Toulouse-Lautrec (1864-1901), Degas (q.v.), Gauguin (q.v.), Pissarro (q.v.), and Seurat (q.v.) and started collecting some of their paintings as well as Japanese prints. He moved to Arles in February 1888. Apart from paintings, he also made some drawings because it was a cheaper medium. Theo encouraged him to submit to the Salon des Indépendants. In May Vincent rented a room in the Yellow House, even though he could hardly afford to do so, and continued to send his work to his brother. In June he became intrigued with the subject of the wheat harvest and painted The Sower (Kröller-Müller Museum, Otterlo). On 23 October 1888, Gauguin arrived in Arles, at a time when van Gogh was having trouble with his eyesight. Gauguin encouraged him to paint from memory, which resulted in Memory of the Garden in Etten (Hermitage, St. Petersburg). The artists, however, had many disagreements, and during a dramatic quarrel on 23 December van Gogh mutilated his ear. He was taken into a hospital in Arles, and Gauguin left for Paris. Van Gogh recovered rapidly and was dismissed on 7 January 1889. In February his neighbors objected to his presence in the Yellow House, and he had to return to the hospital. In April Theo married Johanna Gesina Bonger, who would eventually safeguard most of Vincent's oeuvre. Aware of his mental problems, at the end of April van Gogh checked himself into the asylum of Saint-Paul-de-Mausole in Saint-Rémy, where he was treated by Dr. Peyron. His condition was stable, and he was allowed to work in a makeshift studio. He worked in the garden (Irises, J. Paul Getty Museum, Los Angeles) and painted the fields he could see from his window. Under supervision he painted in the countryside, rendering cypresses and olive trees. Starry Night (Museum of Modern Art, New York) also stems from this period. From July through September he suffered from a severe depression that prevented him from working. He resumed his work from October through December, painting well-known Provençal works and adapting prints after Delacroix (q.v.), Millet, and Rembrandt (1606-1669). In January 1890 he exhibited five works with Les XX in Brussels, selling one of them. After a visit to Arles at the end of February, he became ill again but continued to work. He finally left the asylum, and visited Theo in Paris on his way to Auvers, where he arrived on 20 May. He became close friends with Dr. Gachet and rented a room at the inn of the Ravoux family. He painted the village, portraits, and the surrounding wheat fields. On 27 July 1890, during an episode of depression, van Gogh shot himself in the chest and died two days later.",
        name_in_original_language: null,
        birth_year: "1853",
        death_year: "1890",
      },
    ],
    culture: ["Netherlands, 19th century"],
    technique: "oil on fabric",
    support_materials: [],
    department: "Modern European Painting and Sculpture",
    collection: "Mod Euro - Painting 1800-1960",
    type: "Painting",
    measurements:
      "Framed: 104.5 x 124.5 x 7.6 cm (41 1/8 x 49 x 3 in.); Unframed: 73.4 x 91.8 cm (28 7/8 x 36 1/8 in.)",
    dimensions: {
      framed: {
        height: 1.045,
        width: 1.245,
        depth: 0.076,
      },
      unframed: {
        height: 0.734,
        width: 0.918,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Gift of the Hanna Fund",
    copyright: null,
    inscriptions: [],
    exhibitions: {
      current: [
        {
          id: 312052,
          title: "Work by Vincent Van Gogh",
          description:
            "<i>Work by Vincent Van Gogh</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (November 3-December 12, 1948).",
          opening_date: "1948-11-03T04:00:00",
        },
        {
          id: 338462,
          title: "Van Gogh: Paintings and Drawings",
          description:
            "<i>Van Gogh: Paintings and Drawings</i>. The Metropolitan Museum of Art, New York, NY (October 21, 1949-January 15, 1950); The Art Institute of Chicago, Chicago, IL (February 1-April 15, 1950).",
          opening_date: "1949-10-21T05:00:00",
        },
        {
          id: 300437,
          title: "Four Modes of Composition",
          description:
            "<i>Four Modes of Composition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (September 10-October 27, 1954).",
          opening_date: "1954-09-10T04:00:00",
        },
        {
          id: 301477,
          title: "In Memoriam: Leonard C. Hanna, Jr.",
          description:
            "<i>In Memoriam: Leonard C. Hanna, Jr.</i>. The Cleveland Museum of Art (organizer) (March 4-April 7, 1958).",
          opening_date: "1958-03-04T05:00:00",
        },
        {
          id: 338466,
          title: "Van Gogh in St. Remy and Auvers",
          description:
            "<i>Van Gogh in St. Remy and Auvers</i>. The Metropolitan Museum of Art, New York, NY (organizer) (November 25, 1986-March 22, 1987).",
          opening_date: "1986-11-25T05:00:00",
        },
        {
          id: 310025,
          title: "Creativity in Art and Science, 1860-1960",
          description:
            "<i>Creativity in Art and Science, 1860-1960</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (September 16-November 8, 1987).",
          opening_date: "1987-09-16T04:00:00",
        },
        {
          id: 338459,
          title: "Vincent van Gogh",
          description:
            "<i>Vincent van Gogh</i>. Van Gogh Museum, 1070 AJ Amsterdam, Netherlands (March 30-July 29, 1990).",
          opening_date: "1990-03-30T05:00:00",
        },
        {
          id: 441657,
          title: "Vincent van Gogh 1990",
          description:
            "<i>Vincent van Gogh 1990</i>. Kröller-Müller Museum (co-organizer) (March 30-July 29, 1990); Rijksmuseum Vincent van Gogh, Amsterdam, Netherlands (organizer) (co-organizer) (March 30-July 29, 1990).",
          opening_date: "1990-03-30T05:00:00",
        },
        {
          id: 184132,
          title: "Masterworks from The Phillips Collection",
          description:
            "<i>Masterworks from The Phillips Collection</i>. The Cleveland Museum of Art (organizer) (February 20-May 29, 2005).",
          opening_date: "2005-02-20T00:00:00",
        },
        {
          id: 223479,
          title:
            "Right Under the Sun: Painting in Provence from Classicism to Modernism (1750-1920)",
          description:
            "<i>Right Under the Sun: Painting in Provence from Classicism to Modernism (1750-1920)</i>. Montréal Museum of Fine Arts, Montreal, Quebec, Canada (organizer) (September 22, 2005-January 8, 2006).",
          opening_date: "2005-05-14T00:00:00",
        },
        {
          id: 182153,
          title:
            "Monet to Dalí: Modern Masters from the Cleveland Museum of Art",
          description:
            "<i>Monet to Dalí: Modern Masters from the Cleveland Museum of Art</i>. Beijing World Art Museum, China (May 26-August 27, 2006); Mori Art Center (September 16-November 26, 2006); Seoul Art Center, South Korea (December 22, 2006-March 28, 2007); Seoul Olympic Museum of Art, South Korea (April 7-May 20, 2007); Vancouver Art Gallery, Vancouver, Canada (June 9-September 16, 2007); The Cleveland Museum of Art, Cleveland, OH (organizer) (October 21, 2007-January 13, 2008); The Detroit Institute of Arts, Detroit, MI (October 12, 2008-January 18, 2009).",
          opening_date: "2006-05-27T00:00:00",
        },
        {
          id: 211379,
          title: "Van Gogh: Up Close",
          description:
            "<i>Van Gogh: Up Close</i>. Philadelphia Museum of Art, Philadelphia, PA (January 26-May 6, 2012); National Gallery of Canada, Ottawa, Ont.,, Canada (organizer) (May 25-September 2, 2012).",
          opening_date: "2012-01-26T00:00:00",
        },
        {
          id: 213656,
          title: "Van Gogh Repetitions",
          description:
            "<i>Van Gogh Repetitions</i>. The Phillips Collection, Washington, DC (organizer) (October 12, 2013-February 2, 2014); The Cleveland Museum of Art, Cleveland, OH (March 2-May 26, 2014).",
          opening_date: "2013-10-12T00:00:00",
        },
      ],
      legacy: [
        "<em>Société des Artistes Indépendants</em>.Pavillon de la Ville de Paris, Paris, France (1890).",
        "<em>Exposition Vincent van Gogh. Boulevard à St-Rémy</em>, Provence, France:1889-90. Galerie Bernheim Jeune, Paris, France (1901).",
        "<em>Quelques oeuvres de Vincent van Gogh</em>. Galerie Druet, Paris, France (1908).",
        "<em>Exhibition of French Painting of the Nineteenth and Twentieth Centuries</em>. Fogg Art Museum, Cambridge, MA (1929).",
        "<em>Cézanne, Gauguin, Seurat, Van Gogh.</em> Museum of Modern Art, New York, NY (1929).",
        "<em>Retrospective Exhibition of Landscape Painting</em>. Wadsworth Atheneum, Hartford, CT (1931).",
        "<em>Exhibition of Masters of French 19th Century Painting</em>. New Burlington Galleries,London, United Kingdom (1936).",
      ],
    },
    provenance: [
      {
        description: "Theo van Gogh [1857-1891], Paris, France",
        citations: [],
        footnotes: null,
        date: "1890",
      },
      {
        description:
          "Julien Leclercq [1865-1901] Paris, France (see document b1533 v/1962 in the archive of the Van Gogh Museum",
        citations: [],
        footnotes: null,
        date: null,
      },
      {
        description:
          "(Schuffenecker Brothers, Paris, France, sold to Gustave Fayet, Igny, France",
        citations: [],
        footnotes: null,
        date: null,
      },
      {
        description: "Gustave Fayet [1865-1925], Igny, France",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description: "Gilbert E. Fuller, Boston, MA",
        citations: [],
        footnotes: [],
        date: "1929-1931",
      },
      {
        description:
          "(Paul Rosenberg, New York, NY, July 18, 1947, sold to the Cleveland Museum of Art)",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, OH",
        citations: [],
        footnotes: null,
        date: "1947-",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: [],
    fun_fact:
      'Van Gogh sometimes created what he called "repetitions," in which he painted the same subject and composition again. This painting has a repetition, currently in the Phillips Collection in Washington, DC. Conservation research has shown that the Cleveland painting is the first version.',
    digital_description: null,
    wall_description:
      "In 1889, after suffering a severe hallucinatory seizure, Van Gogh committed himself to an asylum near Saint-Rémy. While walking through the town that fall, he was impressed by the sight of men repairing a road beneath immense plane trees. Rushing to capture the yellowing leaves, he painted this composition on an unusual cloth with a pattern of small red diamonds, visible in the picture’s many unpainted areas. “In spite of the cold,” he wrote to his brother, “I have gone on working outside till now, and I think it is doing me good and the work too.” After painting this composition directly from nature, Van Gogh used it to produce a second version in the studio known as <em>The Road Menders at Saint-Rémy</em>. Painted on a traditional canvas covered by a ground layer, the second version is more restrained, the explosive yellows balanced by larger areas of cool color.",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1947.209-the-large-plane-tree",
      ],
    },
    citations: [
      {
        citation:
          'Meyer-Riefstahl, R. "Vincent Van Gogh-II. Van Gogh\'s Style in Relation to Nature." <em>The Burlington Magazine for Connoisseurs </em>18, no. 93 (December 1910): 155-62.',
        page_number: "Reproduced: p. 160, pl. III",
        url: null,
      },
      {
        citation:
          "<em>Volné Směry: Měsíčník Umělecky</em> nos. 1-5 (1911): 108.",
        page_number: "Reproduced: p. 108",
        url: null,
      },
      {
        citation:
          "Coquiot, Gustave. <em>... Vincent van Gogh; avec 24 reproductions hors-texte des œuvres de Vincent van Gogh</em>. Paris, FR: Ollendorff, 1923",
        page_number: "Reproduced: opp. p. 216",
        url: null,
      },
      {
        citation:
          "Grey, Roch. <em>Vincent Van Gogh</em>. Rome: Valori Plastici, 1924.",
        page_number: "Reproduced: pl. 21",
        url: null,
      },
      {
        citation:
          "Fels, Florent. <em>Van Gogh</em>. Paris: Librairie Stock, 1924.",
        page_number: "Reproduced: pl. 9",
        url: null,
      },
      {
        citation:
          "Goulinat, J. G. \"Les Collections Gustave Fayet.\" <em>L'Amour de l'Art</em> 132 (1925): 129-142.",
        page_number: "Reproduced: p. 132",
        url: null,
      },
      {
        citation:
          "Faure, Élie. <em>Histoire de l'art</em>. Paris, FR: G. Crès, 1926.",
        page_number: "Reproduced: p. 447, vol. 4",
        url: null,
      },
      {
        citation:
          'Leroy, Edgar. "Le Séjour de Vincent van Gogh à l\'Asile de Saint-Rémy-de-Provence."<em> Aesculape</em> 16, no. 7 (July 1926): 180-186.',
        page_number: "Reproduced: p. 181",
        url: null,
      },
      {
        citation:
          "Doiteau, Victor, and Edgard Leroy. <em>La folie de Vincent van Gogh</em>. Paris, FR: Aesculape, 1928.",
        page_number: "Reproduced: opp. p. 80",
        url: null,
      },
      {
        citation:
          "de LaFaille, J. B. <em>L'oeuvre de Vincent van Gogh, catalogue raisonné</em>. Paris, FR: et Bruxelles: Les Éditions G. van Oest, 1928.",
        page_number: "Mentioned: no. 657, vol. 1; Reproduced: no. 657, vol. 2",
        url: null,
      },
      {
        citation:
          "Gogh, Vincent van. <em>Further Letters of Vincent Van Gogh to His Brother, 1886-1889</em>. London, UK: Constable &amp; Co, 1929.",
        page_number: "Mentioned: p. 418, letter 618; p.424, letter 621",
        url: null,
      },
      {
        citation:
          "Wilenski, R. H. <em>French Painting</em>. Boston, MA: Hale, Cushman &amp; Flint, 1931.",
        page_number: "Reproduced: p. 297",
        url: null,
      },
      {
        citation:
          "Art Institute of Chicago. <em>Catalogue of a Century of Progress Exhibition of Prints: The Art Institute of Chicago, June 1 to November 1, 1933.</em> [Chicago]: Art Institute of Chicago, 1933.",
        page_number: "Mentioned: p. 54, no. 381",
        url: null,
      },
      {
        citation:
          "Uhde, Wilhelm. <em>Vincent Van Gogh</em>. Vienna, Austria: Phaidon Press, 1936.",
        page_number: "Reproduced: Pl. 89",
        url: null,
      },
      {
        citation:
          'Scherjon,W. and W. Jos. de Gruyter. <em>Vincent Van Gogh\'s Great Period, Arles, St. Rémy and Auvers Sur Oise (Complete Catalogue)</em>. Amsterdam (Holland): "De Spieghel", Ltd, 1937.',
        page_number: "Reproduced: p. 272; no. 77",
        url: null,
      },
      {
        citation:
          "La Faille, J. Bernard de, Charles Terrasse, Prudence Montagu-Pollock, and André Gloeckner. <em>Vincent Van Gogh</em>. New York, N.Y.: French and European Publications [etc.], 1939.",
        page_number: "Reproduced: no. 667",
        url: null,
      },
      {
        citation:
          'Nordenfalk, Carl. "Van Gogh and Sweden." <em>Konsthistorisk Tidskrift</em> 15 (December 1946): 89-96.',
        page_number: "Mentioned: p. 92",
        url: null,
      },
      {
        citation:
          'Zervos, Christian. "Vincent Van Gogh." <em>Cahiers d\'Art</em> 22 (1947): 159-266.',
        page_number: "Reproduced: p. 254",
        url: null,
      },
      {
        citation:
          'Francis, H.S. "Les Paveurs, by Vincent van Gogh." <em>The Bulletin of the</em> <em>Cleveland Museum of Art XXXV</em>, no 4 (April 1948): 57-63.',
        page_number: "Reproduced: p. 61-62",
        url: null,
      },
      {
        citation:
          "<em>The Bulletin of the Cleveland Museum of Art </em>XXXV, no. 6 (June 1948): 121",
        page_number: "Reproduced: cover",
        url: null,
      },
      {
        citation:
          "Gogh, Vincent van. <em>Work by Vincent Van Gogh: Catalogue of a Loan Exhibition at the Cleveland Museum of Art, November 3 Through December 12 1948</em>. [Cleveland, Ohio]: Cleveland Museum of Art, 1948.",
        page_number: "Mentioned and Reproduced: cat. no. 25",
        url: null,
      },
      {
        citation:
          'Levine, Jack. "Homage to Vincent." <em>ARTnews</em> 47 (December 1948): 26-30.',
        page_number: "Mentioned: p. 26; reproduced: p. 28-29",
        url: null,
      },
      {
        citation:
          '"The Year\'s Best: 1948." <em>ARTnews</em> 47 (January 1949): 40-41.',
        page_number: "Mentioned: p. 40",
        url: null,
      },
      {
        citation:
          "<em>ARTnews Annual 1949.</em> New York, N.Y.: Newsweek, Inc, 1949. P. 72-73.",
        page_number: "Mentioned and reproduced: p. 72-73",
        url: null,
      },
      {
        citation:
          "Metropolitan Museum of Art (New York, N.Y.). <em>Van Gogh, Paintings and Drawings; A Special Loan Exhibition, the Metropolitan Museum of Art, the Art Institute of Chicago, 1949-1950</em>. New York: Metropolitan Museum. 1949-50. 1949.",
        page_number: "Mentioned and Reproduced: cat. no. 123",
        url: null,
      },
      {
        citation:
          "Schapiro, Meyer. <em>Vincent Van Gogh</em>. New York, NY: H.N. Abrams, 1950.",
        page_number: "Reproduced: p. 112",
        url: null,
      },
      {
        citation: "Leymarie, Jean. <em>Van Gogh</em>. [Paris]: P. Tisné, 1951.",
        page_number: "Mentioned and reproduced: p. 128, no. 123",
        url: null,
      },
      {
        citation:
          "Hanson, Lawrence, and Elisabeth Hanson. <em>Passionate Pilgrim; The Life of Vincent Van Gogh.</em> New York: Random House, 1955.",
        page_number: "Mentioned: p. 264; reproduced: between p. 178-179",
        url: null,
      },
      {
        citation:
          "Rewald, John. <em>Post-Impressionism: From Van Gogh to Gauguin</em>. New York, NY: Museum of Modern Art, 1956.",
        page_number: "Reproduced: p. 357",
        url: null,
      },
      {
        citation:
          "Huyghe, René. <em>L'Art et l'Homme.</em> Paris: Larousse, 1957.",
        page_number: "Reproduced: vol. 3, p. 403",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland, OH: The Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 513",
        url: "https://archive.org/details/CMAHandbook1958/page/n95",
      },
      {
        citation:
          "Cleveland Museum of Art. <em>In Memoriam: Leonard C. Hanna, Jr.</em> Cleveland: The Cleveland Museum of Art. 1958.",
        page_number: "Reproduced: no. 53",
        url: null,
      },
      {
        citation:
          "Milliken, William Mathewson. <em>The Cleveland Museum of Art</em>. New York: H.N. Abrams, 1958.",
        page_number: "Mentioned and reproduced: p. 55",
        url: null,
      },
      {
        citation:
          "Elgar, Frank.<em> Van Gogh, A Study of His Life and Work.</em> New York: Praeger, 1958.",
        page_number: "Mentioned and reproduced: no. 188",
        url: null,
      },
      {
        citation:
          'Henning, Edward B. "From Turner to Gaston." <em>Apollo: A Journal of the Arts </em>78 (December 1963): 481-488.',
        page_number: "Reproduced: p. 484; mentioned: p. 486-487",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 178",
        url: "https://archive.org/details/CMAHandbook1966/page/n202",
      },
      {
        citation:
          "Bourniquel, Camille. <em>Van Gogh</em>. Paris, FR] Hachette, 1968.",
        page_number: "Reproduced: p. 211",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 178",
        url: "https://archive.org/details/CMAHandbook1969/page/n202",
      },
      {
        citation:
          "Gaunt, William. <em>The Impressionists.</em> London, UK: Thames &amp; Hudson, 1970.",
        page_number: "Reproduced: p. 142",
        url: null,
      },
      {
        citation:
          "Nakayama, Kimio. <em>Gogh</em>. Tokyo, Japan: [Shueisha], 1970.",
        page_number: "Reproduced: p. 132; no. 56; vol. 8",
        url: null,
      },
      {
        citation:
          "De la Faille, J.-B. <em>The Works of Vincent Van Gogh; His Paintings and Drawings.</em> Amsterdam: Meulenhoff International, 1970.",
        page_number: "Reproduced: no. 657",
        url: null,
      },
      {
        citation:
          "Lecaldano, Paolo. <em>L'opera pittorica completa di Van Gogh e i suoi nessi grafici.</em> Milan, IT: Rizzoli,1971.",
        page_number: "Reproduced: no. 754; vol. 2",
        url: null,
      },
      {
        citation:
          "Lubin, Albert J. <em>Stranger on the Earth; A Psychological Biography of Vincent Van Gogh.</em> New York, NY: Holt, Rinehart Winston, 1972.",
        page_number: "Reproduced: p. 93; pl. 23",
        url: null,
      },
      {
        citation:
          "Gatto, Joseph A. <em>Cities</em>. Worcester, MA: Davis Publications, 1977.",
        page_number: "Reproduced: p. 78",
        url: null,
      },
      {
        citation:
          "Gogh, Vincent van, Jean Leymarie, and V. W. van Gogh.<em> Letters of Vincent van Gogh, 1886-1890: A Facsimile Edition.</em> London: Scolar Press, 1977.",
        page_number:
          "Mentioned: v. 2, no. 618, p. 1/4; mentioned: v. 2, no. 621, p. 2/4",
        url: null,
      },
      {
        citation:
          "Hulsker, Jan. <em>The Complete Van Gogh: Paintings, Drawings, Sketches.</em> New York, NY: H.N. Abrams, 1980.",
        page_number: "Reproduced: p. 426; no. 428",
        url: null,
      },
      {
        citation:
          "Canaday, John. <em>Mainstreams of Modern Art.</em> New York, NY: Holt, Rinehart and Winston, 1981.",
        page_number: "Reproduced: p. 357; fog. 418",
        url: null,
      },
      {
        citation:
          "Schapiro, Meyer. <em>Vincent Van Gogh</em>. Norwalk, CT: Easton Press, 1983.",
        page_number: "Reproduced: p. 110",
        url: null,
      },
      {
        citation:
          "Barrielle, Jean-François. <em>La vie et l'œuvre de Vincent van Gogh.</em> Paris, FR: ACR, 1984.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Pickvance, Ronald. <em>Van Gogh in Saint-Rémy and Auvers</em>. New York: Metropolitan Museum of Art, 1986.",
        page_number: "Mentioned: cat. no. 44, p. 304, 307",
        url: null,
      },
      {
        citation:
          "Henning, Edward B. <em>Creativity in Art and Science</em>, 1860-1960. [Cleveland, Ohio]: Published by the Cleveland Museum of Art in cooperation with Indiana University Press, 1987.",
        page_number: "Mentioned and Reproduced: p.106",
        url: null,
      },
      {
        citation:
          "Robinson, William. “George Hendrik Breitner and the Emergence of Dutch Modernism.” <em>The Bulletin of the Cleveland Museum of Art</em> 81, no. 2 (1994): 27-43.",
        page_number: "Mentioned and Reproduced: p. 32",
        url: "https://www.jstor.org/stable/25161441",
      },
      {
        citation:
          "Grossvogel, Jill. <em>Claude-Emile Schuffenecker: Catalogue Raisonné.</em> San Francisco: Alan Wofsy Fine Arts, 2000.",
        page_number: "Mention: p. 45",
        url: null,
      },
      {
        citation:
          "Hughes, Robert. <em>The Portable Van Gogh</em>. New York, NY: Universe, 2002.",
        page_number: "Reproduced: p. 344",
        url: null,
      },
      {
        citation:
          "Schapiro, Meyer. <em>Vincent Van Gogh.</em> New York, NY: Harry N. Abrams, Publishers, 2003.",
        page_number: "Mentioned: p. 110-111",
        url: null,
      },
      {
        citation:
          "Stokstad, Marilyn, David Cateforis, and Stephen Addiss. <em>Art History</em>. Upper Saddle River, NJ: Pearson/Prentice Hall, 2005.",
        page_number: "Reproduced: fig 28",
        url: null,
      },
      {
        citation:
          "Cogeval, Guy, and Marie-Paule Vial. <em>Right under the sun: landscape in Provence from classicism to modernism (1750-1920).</em> Montréal: Montreal Museum of Fine Arts, 2005.",
        page_number: "Reproduced: p. 143; no. 186",
        url: null,
      },
      {
        citation:
          "Corty, Axelle. “La Face Cachée Du Soleil.” <em>Connaissance Des Arts</em>, no. 627 (May 2005): 42–55.",
        page_number: "Mentioned and reproduced: p. 46-47",
        url: null,
      },
      {
        citation:
          '"L\'Oeil sur les Expositions." <em>Oeil</em> (June 2005): 16-37.',
        page_number: "Reproduced: p. 34",
        url: null,
      },
      {
        citation:
          'Bailey, Martin. "Vincent van Cloth." The Art Newspaper XVI, no. 183 (September 2007): 3.',
        page_number: "Mentioned: p. 3",
        url: null,
      },
      {
        citation:
          "Ligon, Scott. <em>Digital Art Revolution: Creating Fine Art with Photoshop.</em> New York, NY: Watson-Guptill, 2010.",
        page_number: "Mentioned: p. 31",
        url: null,
      },
      {
        citation:
          "Franklin, David and C. Griffith Mann. <em>Treasures from the Cleveland Museum of Art.</em> Cleveland, OH: Cleveland Museum of Art, 2012.",
        page_number: "Reproduced: p. 272-273",
        url: null,
      },
      {
        citation:
          "Hubert, Jean-Christophe. <em>Sur les traces de Van Gogh.</em> Waterloo, Belgium: Avant-Propos, 2012.",
        page_number: "Reproduced: p. 118; fig. 478",
        url: null,
      },
      {
        citation:
          'Robinson, William H., Eliza Rathbone, Marcia Steele, and H. Travers Newton. "The Road Menders." In <em>Van Gogh Repetitions</em>, 140-153. New Haven, CT: Yale University Press, 2013.',
        page_number: "Reproduced: p. 140, 142, cat. no. 26",
        url: null,
      },
      {
        citation:
          "Rathbone, Eliza E., William H. Robinson, and Marcia Steele. <em>Van Gogh Repetitions</em>. New Haven, CT: Yale University Press, 2013.",
        page_number: "Reproduced: 0. 142; Mentioned: p. 140-153",
        url: null,
      },
      {
        citation:
          'Fensom, Sarah E. "Hitting Repeat" <em>Art &amp; Antiques</em> 37, issue 3 (March 2014): 54-56.',
        page_number: "Reproduced: p. 55",
        url: null,
      },
      {
        citation:
          'Homburg, Cornelia. "What Van Gogh Did Next." <em>The Art Newspaper</em> 23, no. 257 (May 2014): 67, 76.',
        page_number: "Reproduced: p. 76",
        url: null,
      },
      {
        citation:
          "Blanc, Jan. <em>Van Gogh: ni Dieu ni maître.</em> Paris: Citadelles &amp; Mazenod, 2017.",
        page_number: "Reproduced: p. 304-305",
        url: null,
      },
      {
        citation:
          "Bailey, Martin. <em>Starry Night: Van Gogh at the Asylum</em>. London, England: White Lion Publishing, 2018.",
        page_number: "Mentioned and Reproduced: p. 95-96",
        url: null,
      },
      {
        citation:
          "Uitert, Evert van, Vincent van Gogh, Louis van Tilborgh, and Sjraar van Heugten. <em>Vincent van Gogh</em>. Milan: Arnoldo Mondadori Arte, 1990.",
        page_number: "Mentioned and Reproduced: cat. no. 109, p. 31",
        url: null,
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1947.209",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1947.209/1947.209_web.jpg",
        filename: "1947.209_web.jpg",
        filesize: "341961",
        width: "900",
        height: "718",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1947.209/1947.209_print.jpg",
        filename: "1947.209_print.jpg",
        filesize: "4467246",
        width: "3400",
        height: "2713",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1947.209/1947.209_full.tif",
        filename: "1947.209_full.tif",
        filesize: "496057452",
        width: "14395",
        height: "11486",
      },
    },
    updated_at: "2022-01-13 10:01:28.530000",
  },
  {
    id: 149410,
    accession_number: "1978.63",
    share_license_status: "CC0",
    tombstone:
      "In the Waves (Dans les Vagues), 1889. Paul Gauguin (French, 1848-1903). Oil on fabric; framed: 123.8 x 106 x 7 cm (48 3/4 x 41 3/4 x 2 3/4 in.); unframed: 92.5 x 72.4 cm (36 7/16 x 28 1/2 in.). The Cleveland Museum of Art, Gift of Mr. and Mrs. William Powell Jones 1978.63",
    current_location: "222 Impressionism & Post-Impressionism",
    title: "In the Waves (Dans les Vagues)",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1889",
    creation_date_earliest: 1889,
    creation_date_latest: 1889,
    creators: [
      {
        id: 1776,
        description: "Paul Gauguin (French, 1848-1903)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography:
          "Gauguin spent the first seven years of his life with his mother and great uncle in Peru. In 1855 his mother took him back to France where he attended boarding school. He joined the merchant marine when he was seventeen and began traveling around South America. When Gauguin's mother died in 1868, Gustave Arosa, an art collector and photographer, became his legal guardian. Arosa's collection included works by Corot (q.v.), Courbet (q.v.), Delacroix (q.v.), and the Barbizon painters, and it was he who would encourage Gauguin to start painting. In 1872 Arosa found a job for Gauguin at a brokerage firm, giving him financial security. The following year he married a Danish woman, Mette Gad. Gauguin had already started painting and sculpting in his spare time and first exhibited at the Salon in 1876 with a landscape.1 He was asked by Pissarro (q.v.) and Degas (q.v.) to participate in the fourth impressionist exhibition in 1879, where from then on he would exhibit regularly. Durand-Ruel began purchasing his paintings, and in turn Gauguin started to collect the works of his colleagues, such as Manet (q.v.) and Renoir (q.v.) and, in particular, Cézanne (q.v.) and Pissarro. He went to Pontoise in 1882, where he painted with Cézanne and Pissarro, who along with Degas continued to influence him at this period. In 1883 Gauguin decided to become a full-time artist. In 1884 he moved with his wife and children to Rouen and then to Copenhagen, but he failed to earn a comfortable living. He returned to Paris in 1886 and met ceramicist Ernest Chaplet (1835-1909), who introduced him to his métier. Gauguin distanced himself from impressionism and in 1888 worked in Pont-Aven with Émile Bernard (1868-1941), who had been experimenting with creating compositions using flat areas of color and dark outlines (cloissonism). Gauguin also studied Japanese prints and Indonesian art. The impact of these influences is evident in Gauguin's Vision after the Sermon: Jacob Wrestling with the Angel (1888, National Gallery of Scotland, Edinburgh), so far removed from his earlier impressionist style. Succumbing to van Gogh's (q.v.) many requests, Gauguin agreed to travel to Arles and paint with the artist; their characters, however, proved incompatible. Theo van Gogh, who worked for Boussod Valadon & Cie, would in the meantime sell Gauguin's work. For the next two years, Gauguin traveled often around Brittany. In search of a more pure and unspoiled culture, he auctioned off his paintings in 1891 in order to finance a journey to Tahiti. Upon his arrival, he was disappointed to find many expatriates and developed areas, yet he was still able to capture in his works an uncultivated spirit. He not only made paintings but also created bold woodcuts and sculptures and was an avid writer. Gauguin returned to France in 1893, where he was given a solo exhibition by Durand-Ruel that was not particularly successful. He decided to leave Europe again in 1895, moving to Tahiti and later to Hivaoa, a more remote island in the Marquesas. Because he abandoned naturalistic colors and used formal distortions in order to achieve expressive compositions, Gauguin's work became an inspiration for many subsequent artists. \r\n1. Possibly Wildenstein 1964, no. 12.",
        name_in_original_language: null,
        birth_year: "1848",
        death_year: "1903",
      },
    ],
    culture: ["France, 19th century"],
    technique: "oil on fabric",
    support_materials: [],
    department: "Modern European Painting and Sculpture",
    collection: "Mod Euro - Painting 1800-1960",
    type: "Painting",
    measurements:
      "Framed: 123.8 x 106 x 7 cm (48 3/4 x 41 3/4 x 2 3/4 in.); Unframed: 92.5 x 72.4 cm (36 7/16 x 28 1/2 in.)",
    dimensions: {
      framed: {
        height: 1.238,
        width: 1.06,
        depth: 0.07,
      },
      unframed: {
        height: 0.925,
        width: 0.724,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Gift of Mr. and Mrs. William Powell Jones",
    copyright: null,
    inscriptions: [
      {
        inscription: "Signed lower center: P Gauguin. 89-\r\n",
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 304286,
          title: "Year in Review: 1978",
          description:
            "<i>Year in Review: 1978</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (February 13-March 18, 1979).",
          opening_date: "1979-02-13T05:00:00",
        },
        {
          id: 310025,
          title: "Creativity in Art and Science, 1860-1960",
          description:
            "<i>Creativity in Art and Science, 1860-1960</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (September 16-November 8, 1987).",
          opening_date: "1987-09-16T04:00:00",
        },
        {
          id: 441402,
          title: "The Art of Paul Gauguin",
          description:
            "<i>The Art of Paul Gauguin</i>. National Gallery of Art, Washington, D.C. (organizer) (May 1-July 31, 1988); The Art Institute of Chicago, Chicago, IL (September 17-December 11, 1988); Galeries Nationales du Grand Palais, Paris, France, Paris, France (January 9-April 24, 1989).",
          opening_date: "1988-05-01T04:00:00",
        },
        {
          id: 218060,
          title: "Gauguin's 'Nirvana'. Painters at Le Pouldu, 1889-1890",
          description:
            "<i>Gauguin's 'Nirvana'. Painters at Le Pouldu, 1889-1890</i>. Wadsworth Atheneum Museum of Art, Hartford, CT (organizer) (January 27-April 29, 2001).",
          opening_date: "2001-01-27T00:00:00",
        },
        {
          id: 220471,
          title: "Gauguin and the Origins of Symbolism",
          description:
            "<i>Gauguin and the Origins of Symbolism</i>. Museo Thyssen-Bornemisza, Madrid, Spain (organizer) (September 28, 2004-January 9, 2005).",
          opening_date: "2004-09-28T00:00:00",
        },
        {
          id: 182153,
          title:
            "Monet to Dalí: Modern Masters from the Cleveland Museum of Art",
          description:
            "<i>Monet to Dalí: Modern Masters from the Cleveland Museum of Art</i>. Beijing World Art Museum, China (May 26-August 27, 2006); Mori Art Center (September 16-November 26, 2006); Seoul Art Center, South Korea (December 22, 2006-March 28, 2007); Seoul Olympic Museum of Art, South Korea (April 7-May 20, 2007); Vancouver Art Gallery, Vancouver, Canada (June 9-September 16, 2007); The Cleveland Museum of Art, Cleveland, OH (organizer) (October 21, 2007-January 13, 2008); Frist Art Museum, Nashville, TN (February 15-June 1, 2008); Utah Museum of Fine Arts, Salt Lake City, UT (June 22-September 21, 2008); The Detroit Institute of Arts, Detroit, MI (October 12, 2008-January 18, 2009).",
          opening_date: "2006-05-27T00:00:00",
        },
        {
          id: 195556,
          title: "Paul Gauguin: Paris, 1889",
          description:
            "<i>Paul Gauguin: Paris, 1889</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (October 4, 2009-January 18, 2010); Van Gogh Museum, 1070 AJ Amsterdam, Netherlands (February 18-June 6, 2010).",
          opening_date: "2009-10-04T00:00:00",
        },
        {
          id: 229635,
          title: "Gauguin: Maker of Myth",
          description:
            "<i>Gauguin: Maker of Myth</i>. Tate Modern, London, United Kingdom of Great Britain and Northern Ireland (organizer) (September 30, 2010-January 18, 2011); National Gallery of Art, Landover, MD (February 21-May 30, 2011).",
          opening_date: "2010-09-30T00:00:00",
        },
        {
          id: 230536,
          title: "Friction of Ideas: Gauguin, Van Gogh, Bernard",
          description:
            "<i>Friction of Ideas: Gauguin, Van Gogh, Bernard</i>. Ordrupgaard, Charlottenlund, Copenhagen, Denmark (organizer) (February 6-June 22, 2014).",
          opening_date: "2014-02-06T00:00:00",
        },
        {
          id: 216766,
          title: "Gauguin: Artist as Alchemist",
          description:
            "<i>Gauguin: Artist as Alchemist</i>. The Art Institute of Chicago, Chicago, IL (organizer) (June 25-September 10, 2017); Galeries Nationales du Grand Palais, 75008 Paris, France (October 9, 2017-January 21, 2018).",
          opening_date: "2017-06-25T00:00:00",
        },
      ],
      legacy: [
        'Paris, Café de M. Volpini. Exposition de peintures du Groupe Impressionniste et Synthétiste (1889), no. 44, Dans les vagues.<br>Paris, Société du Salon d\'Automne au Grand Palais. (1906), no. 25, L\'Ondine (Bretagne), G. Fayet collection.<br>Paris, Galerie L. Dru. Exposition rétrospective de P. Gauguin (1923), no. 12, 1889, La femme de la mer.<br>Basel, Kunsthalle. Paul Gauguin 1848-1903 (1928), no. 59, Die Welle, Leicester Galleries, London.<br>Berlin, Galerie Thannhauser. Paul Gauguin 1848-1903 (1928), no. 42.<br>New York, Museum of Modern Art. Cézanne, Gauguin, Seurat, Van Gogh (1929), no. 42 (repr.).<br>Cleveland, Kinney and Levan Building. Catalogue of the Twentieth Anniversary Exhibition under the Auspices of the Cleveland School of Art (1936), no. 275.<br>New York, Wildenstein. Paul Gauguin 1848-1903 (1936), no. 11.<br>Cambridge, Mass., Fogg Art Museum. Paul Gauguin 1848-1903 (1936), no. 12.<br>Toledo Museum of Art. Cézanne-Gauguin (1936), no. 4 (repr.), lent by Mr. and Mrs. Frank H. Ginn. <br>New York, Wildenstein. A Loan Exhibition of Paul Gauguin (1946), no. 6, lent by Mr. and Mrs. W. Powell Jones; 22 (repr.).<br>Museum of Fine Arts, Houston. Paul Gauguin, His Place in the Meeting of East and West (1954), no. 14 (Odine [sic] or Woman in the Waves).<br>New York, Wildenstein. Loan Exhibition: Gauguin (1956), no. 18, 37 (repr.). <br>Palm Beach, Society of the Four Arts; Coral Gables, Lowe Gallery of the University of Miami. Paul Gauguin 1848-1903 (1956), no. 13 (repr.).<br>Art Institute of Chicago; New York, Metropolitan Museum of Art. Gauguin (1959), no. 18, 35 (repr.). <br>New York, Solomon R. Guggenheim Museum. Gauguin and the Decorative Style (1966), 46.<br>London, Tate Gallery. Gauguin and the Pont-Aven Group (1966), 21, no. 17 (Woman in the Waves), 22, pl. 14c.<br>Toronto, Art Gallery of Ontario; Amsterdam, Van Gogh Museum. Vincent van Gogh and the Birth of Cloisonism (1981), 44, 65 (repr.), 204-5.<br>cma. Creativity in Art and Science (1987), no. 16, color pl. III.<br>Washington/Chicago/Paris. The Art of Paul Gauguin (1988-89), 74, 199, no. 80 (repr.) (English ed.); no. 80 (repr.) (French ed.).<br>Baltimore, Walters Art Gallery. Gauguin and the School of Pont-Aven (1994-95), 43, add. no. 1 (repr.). <br>Hartford, CT: Wadsworth Atheneum (1/26/01-4/20/01) "Gauguin\'s Nirvana. Painters at Le Pouldu 1889-90" color repr. p. 132, cat. no. 3, fig.  no. 178, p. 149.<br>The Cleveland Museum of Art (06/21/2005 - 09/11/2005); "CMA Highlights"<br>Museo Thyssen-Bornemisza, Madrid (9/28/2004 - 1/9/2004):  "Gauguin and the Origins of Symbolism"<br>CMA (organizer). Beijing World Art Museum, China, May 26 - Aug. 27, 2006; Mori Arts Center, Tokyo, Japan: Sept. 9 - Nov. 26, 2006; Seoul Arts Center, Seoul, Korea: Dec. 18, 2006 - March 31, 2007; Seoul Olympic Museum of Art, Seoul, Korea: Apr. 7 - May 20, 2007; Vancouver Art Gallery, Vancouver, British Columbia, Canada: June 9 - Sept. 16, 2007; Cleveland Museum of Art, Oct. 21, 2007- January 13, 2008;  Frist Center for the Visual Arts, Nashville, TN, Feb. 21-June 1, 2008; Utah Museum of Fine Arts, Salt Lake City, UT, June 22 - September 21, 2008; and the Detroit Institute of Arts, MI, October 12, 2008 - January 18, 2009:  "Modern Masters from the Cleveland Museum of Art"<br>Cleveland Museum of Art (10/4/2009 - 1/18/2010; Van Gogh Museum of Art (2/19/2010 - 6/6/2010): "Paul Gauguin: Paris, 1889", ex. cat. no. 43<br>Tate Modern, London (9/20/2010 - 1/24/2011) and the National Gallery of Art, Washington, DC (2/21/2011 - 5/30/2011):  "Gauguin: Maker of Myth", ex. cat. 92, p. 161.<br>Ordrupgaard, Denmark (2/6/2014 - 6/22/2014):  "Friction of Ideas: Gauguin, Van Gogh, Bernard"<br>Art Institute of Chicago IL (6/25/2017 - 9/10/2017) and RMN - Galeries Nationales du Grand Palais, Paris, France (10/9/2017 - 1/12/2018):  "Gauguin: Artist as Alchemist"',
      ],
    },
    provenance: [
      {
        description:
          "On consignment with Boussod & Valadon, Paris, 1890, under the title given by Gauguin, Femme nue dans la vague, valued at ff 400 (see, Rewald 1973, 49). Paris, Gauguin sale, 23 February 1891 (lot 14), Une Ondine, for ff 320 to M. Jeanson. Sold by Joseph Hessel to Gustave Fayet, Paris, March 1906. In February 1907 Fayet sold it together with a Gauguin self-portrait for ff 24,000 to Vollard, Paris. Ordrupgaard, Denmark. Paul Éluard, Paris, who probably bought it at Galerie Dru in 1923. Paris sale, Drouot, 12 December 1927 (lot 103 repr.), L'ondine (for ff 10,080 according to Wildenstein 1964; but according to annotated auc-tion catalogue in the Frick Art Reference Library, N.Y., sold for 46,100 to Hessel). Leicester Galleries, London, 1928. Bought in 1929 by Frank H. Ginn, Cleveland. Mr. and Mrs. Powell Jones, Gates Mills, Ohio. Given to the CMA on 20 November 1978.",
        citations: [],
        footnotes: null,
        date: null,
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: ["610.68", "1110.78"],
    fun_fact:
      "Gauguin likely painted this work of art during his time in a small coastal village called Pont-Aven where he sought to immerse himself in nature and escape modern civilization.",
    digital_description: null,
    wall_description:
      "Painted at Pont-Aven in northwest France, this depiction of a nude figure throwing herself into the sea suggests a metaphor for a modern European woman forsaking civilization and abandoning herself to her natural, primitive instincts. The simplified lines and exaggerated colors, especially the contrasting green and orange, seem invented rather than observed from life. Exhibiting the painting at the Café Volpini in Paris in 1889, Gauguin established himself as a leader of the Symbolist movement in art.",
    external_resources: {
      wikidata: ["https://www.wikidata.org/wiki/Q60473553"],
      internet_archive: [
        "https://archive.org/details/clevelandart-1978.63-in-the-waves-dans-le",
      ],
    },
    citations: [
      {
        citation:
          "Henning, Edward B. <em>Creativity in Art and Science, 1860-1960.</em> [Cleveland, Ohio]: Published by the Cleveland Museum of Art in cooperation with Indiana University Press, 1987.",
        page_number:
          "Reproduced: P. 48, pl. III; Mentioned and reproduced: P. 108, no. 16",
        url: "",
      },
      {
        citation:
          'Robinson, William H. "Puvis De Chavannes\'s "Summer" and the Symbolist Avant-Garde." <em>The Bulletin of the Cleveland Museum of Art</em> 78, no. 1 (1991): 2-27.',
        page_number: "Reproduced and Mentioned: p. 13-14",
        url: "https://www.jstor.org/stable/25161310",
      },
      {
        citation:
          'Robinson, William H. "Vuillard\'s <em>Under the Trees</em> from the Nabi Cycle <em>The Public Gardens</em>." <em>The Bulletin of the Cleveland Museum of Art</em> 79, no. 4 (1992): 111-27.',
        page_number: "Reproduced and Mentioned: p. 113",
        url: "https://www.jstor.org/stable/25161356",
      },
      {
        citation:
          'Pinchon, Pierre. "<em>Tahiti Mysterieux Rivage 1890-1895." </em>Dossier de l\'art, 252 (September 2017): 28-45.',
        page_number: "Reproduced: p. 31",
        url: "",
      },
      {
        citation:
          "Groom, Gloria Lynn, ed. <em>Gauguin: Artist as Alchemist.</em> Chicago: The Art Institute of Chicago, 2017.",
        page_number:
          "Reproduced: p. 56 (detail); pp. 190-191, cat. #118; Mention: p. 188",
        url: null,
      },
      {
        citation:
          "Fémelat, Armelle. <em>Gauguin, d'art et de liberté</em>. Neuilly-sur-Seine: Michel Lafon: BeauxArts Éditions, 2017.",
        page_number: "Reproduced: P. 112",
        url: null,
      },
      {
        citation:
          "Guégan, Stéphane. <em>Gauguin: voyage au bout de la terre.</em> Paris: Chêne Editions, 2017.",
        page_number: "Reproduced: P. 122",
        url: null,
      },
      {
        citation:
          'Tate Gallery. "Exhibition Diary: Autumn Highlights." <em>Tate Etc. </em>41 (Autumn 2017): 14.',
        page_number: "Reproduced: p. 14",
        url: null,
      },
      {
        citation:
          "Brettell, Richard R. <em>On Modern Beauty: Three Paintings by Manet, Gauguin, and Cezanne</em>. Los Angeles: The J. Paul Getty Museum, 2019.",
        page_number: "Reproduced: P. 45, no. 29",
        url: null,
      },
      {
        citation:
          "Jamet, Christian. <em>Gauguin: Les Chemins de la Spiritualité. </em>Paris: Cohen&amp;Cohen, 2020.",
        page_number: "Mentioned and reproduced: P. 78-81, ill. 46",
        url: "",
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1978.63",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1978.63/1978.63_web.jpg",
        width: "700",
        height: "900",
        filename: "1978.63_web.jpg",
        filesize: "277344",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1978.63/1978.63_print.jpg",
        width: "2646",
        height: "3400",
        filename: "1978.63_print.jpg",
        filesize: "3820562",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1978.63/1978.63_full.tif",
        width: "11539",
        height: "14827",
        filename: "1978.63_full.tif",
        filesize: "513298268",
      },
    },
    updated_at: "2022-05-03 09:00:48.079000",
  },
  {
    id: 149112,
    accession_number: "1977.43",
    share_license_status: "CC0",
    tombstone:
      "Church Street El, 1920. Charles Sheeler (American, 1883-1965). Oil on canvas; framed: 60 x 67.5 x 6 cm (23 5/8 x 26 9/16 x 2 3/8 in.); unframed: 41 x 48.5 cm (16 1/8 x 19 1/8 in.). The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund 1977.43",
    current_location: "226A American Modern",
    title: "Church Street El",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1920",
    creation_date_earliest: 1920,
    creation_date_latest: 1920,
    creators: [
      {
        id: 889,
        description: "Charles Sheeler (American, 1883-1965)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography:
          "Charles Sheeler American, 1883-1965\r\n\r\nPhiladelphia-born Charles Sheeler was a well-known precisionist painter and photographer. After studying at the School of Industrial Art in Philadelphia (1900-3), he spent the next three years as a student of painter William Merritt Chase at the Pennsylvania Academy of Fine Arts. Around 1910 he took up photography as a way to support himself.\r\n\tSheeler began as an architectural photographer, documenting buildings for Philadelphia architects, but was soon taking pictures of paintings and other works of art. He continued to paint (in 1913 a group of his works were exhibited in the famous Armory Show in New York) and to photograph, often using his photographs as the basis for paintings. In 1917 his photographs were included in a three-person show along with Paul Strand and Morton Schamberg at Marius de Zayas's Modern Gallery in New York.\r\n\tTwo years later Sheeler moved to New York and in 1920 collaborated with Paul Strand on the avant-garde film Manhatta (originally titled New York the Magnificent). In 1923 he began working as a staff photographer for Condé Nast publications. Four years later he received his most important commercial commission when Ford Motor Company hired him to photograph its River Rouge plant. A powerful series of images celebrating American industry resulted and were widely published. They also served as an inspiration for a number of his paintings.\r\n\tIn 1939 a small group of Sheeler's photographs were included in a retrospective of his work organized by the Museum of Modern Art, New York. Over the next decade he worked as staff photographer for the Metropolitan Museum of Art and focused primarily on painting in his own work, especially during the late 1940s and 1950s. In 1959, after suffering a stroke, Sheeler stopped painting and photographing; he died six years later from a second stroke. M.M.",
        name_in_original_language: null,
        birth_year: "1883",
        death_year: "1965",
      },
    ],
    culture: ["America, 20th century"],
    technique: "oil on canvas",
    support_materials: [],
    department: "American Painting and Sculpture",
    collection: "American - Painting",
    type: "Painting",
    measurements:
      "Framed: 60 x 67.5 x 6 cm (23 5/8 x 26 9/16 x 2 3/8 in.); Unframed: 41 x 48.5 cm (16 1/8 x 19 1/8 in.)",
    dimensions: {
      framed: {
        height: 0.6,
        width: 0.675,
        depth: 0.06,
      },
      unframed: {
        height: 0.41,
        width: 0.485,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Mr. and Mrs. William H. Marlatt Fund",
    copyright: null,
    inscriptions: [
      {
        inscription: 'Signed lower right: "Sheeler 1920"',
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 302666,
          title: "Year in Review: 1977",
          description:
            "<i>Year in Review: 1977</i>. The Cleveland Museum of Art (organizer) (December 28, 1977-January 22, 1978).",
          opening_date: "1977-12-28T05:00:00",
        },
        {
          id: 442371,
          title: "American Realism, 1920 - 1940",
          description:
            "<i>American Realism, 1920 - 1940</i>. Academy of Fine Arts, Berlin, Berlin 1000, Germany (organizer) (November 9-December 28, 1980).",
          opening_date: "1980-11-09T05:00:00",
        },
        {
          id: 310243,
          title: "The Precisionist Aesthetic in American Art",
          description:
            "<i>The Precisionist Aesthetic in American Art</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (January 24-April 9, 1989).",
          opening_date: "1989-01-24T05:00:00",
        },
        {
          id: 205796,
          title: "Mad for Modernism: Earl Horter and His Collection",
          description:
            "<i>Mad for Modernism: Earl Horter and His Collection</i>. Philadelphia Museum of Art (organizer) (March 7-May 16, 1999).",
          opening_date: "1999-03-07T00:00:00",
        },
        {
          id: 226121,
          title: "Der kühle Blick",
          description:
            "<i>Der kühle Blick</i>. Kunsthalle der Hypo-Kulturstiftung, Munich, Germany (organizer) (June 1-September 2, 2001).",
          opening_date: "2001-06-01T00:00:00",
        },
        {
          id: 177240,
          title: "Charles Sheeler: Mediums and Messages",
          description:
            "<i>Charles Sheeler: Mediums and Messages</i>. National Gallery of Art, Landover, MD (organizer) (May 7-September 4, 2006); The Art Institute of Chicago, Chicago, IL (October 15, 2006-January 7, 2007); Fine Arts Museums of San Francisco, de Young Museum, San Francisco, CA (February 10-May 6, 2007).",
          opening_date: "2006-05-07T00:00:00",
        },
        {
          id: 176614,
          title: "Youth and Beauty: Art of the American Twenties",
          description:
            "<i>Youth and Beauty: Art of the American Twenties</i>. The Brooklyn Museum, Brooklyn, NY (organizer) (October 28, 2011-January 22, 2012); The Dallas Museum of Art, Dallas, TX (February 24-May 27, 2012); The Cleveland Museum of Art, Cleveland, OH (July 1-September 16, 2012).",
          opening_date: "2011-10-28T00:00:00",
        },
        {
          id: 292179,
          title: "The Cult of the Machine: Precision in American Art",
          description:
            "<i>The Cult of the Machine: Precision in American Art</i>. Fine Arts Museums of San Francisco, de Young Museum, San Francisco, CA (March 24-August 12, 2018); The Dallas Museum of Art, Dallas, TX (September 16, 2018-January 6, 2019).",
          opening_date: "2018-03-24T04:00:00",
        },
      ],
      legacy: [
        'New York, Whitney Studio Galleries, Exhibition of Selected Works by Charles Sheeler (1 March-31 March 1924).<br><br>Cleveland, Cleveland Museum of Art, The Precisionist Aesthetic in American Art (24 January-9 April 1989)<br><br>Philadelphia, The Philadelphia Museum of Art, Mad for Modernism: Earl Horter and His Collection, (7 March-16 May 1999), plate 78, p. 122, also included two footnotes concerning Sheeler and his relationship to Horter (p. 61), and pp. 173, 180-181, 184.<br><br>New York, Whitney Museum of American Art, The American Century: Art &amp; Culture 1900-1950 (23 April-22 August 1999), cat. no. 273, illus. p. 148.<br><br>Munich, Kunsthalle der Hypo-Kulturstiftung, Der kühle Blick: Realismus der Zwanzigerjahre in Europa und Amerika (1 June-2 September 2001), illus. p. 311.<br><br>National Gallery of Art (5/7/2006-9/4/2006), Art Institute of Chicago (10/15/2006-1/7/2007), Fine Arts Museums of San Francisco, MH de Young Museum (2/10/2007-5/6/2007): "Charles Sheeler: Mediums and Messages"<br><br>Brooklyn Museum of Art (10/28/2011 - 1/22/2012), Dallas Museum of Art (2/24/2012 - 5/27/2012), and Cleveland Museum of Art (7/1/2012 - 9/16/2012): "Youth and Beauty: Art of the American Twenties", Fig. 105, p. 143.',
        "<em>The Collection of Earl Horter.</em> Pennsylvania Museum of Art, Philadelphia, PA (February 17-1-March 13, 1934).",
        "<em>Modern Paintings from the Collection of Mr. Earl Horter of Philadelphia</em>. The Arts Club of Chicago, Chicago, IL (April 3 - April 26, 1934); no. 57",
        "<em>Charles Sheeler: Paintings, Drawings, Photographs</em>. Museum of Modern Art. New York, NY (1939), no. 11, listed p. 46.",
        "<em>Charles Sheeler.</em> National Collection of Fine Arts, Smithsonian Institution, Washington, DC (October 10-November 24 ,1968); Philadelphia Museum of Art, Philadelphia, PA (January 10-February 16, 1969); Whitney Museum of American Art, New York, NY (March 11-April 27,1969); no. 24, illus. p. 39,",
        'mentioned briefly in essays by both Martin Friedman ("The Art of Charles Sheeler: Americana in a Vacuum") p. 40, and Bartlett Hayes ("Reminiscence") p. 70.',
        "Berlin, Academy of Fine Arts, America: Traum und Depression 1920-1940, (1980), pp. 109-137, illus. p. 89, pl. 8, cat. no. 292.",
        "San Francisco, San Francisco Museum of Modern Art, Images of America: Precisionist Painting and Modern Photography, (9 September-7 November 1982); traveled to Saint Louis, The Saint Louis Art Museum (6 December 1982-30 January 1983); Baltimore, The Baltimore Museum of Art (28 February-25 April 1983); Des Moines, Des Moines Art Center (23 May-17 July 1983); Cleveland, The Cleveland Museum of Art (15 August-9 October 1983), no. 92, plate 18 (also reproduced on cover),",
        'included essay by Karen Tsujimoto entitled "Charles Sheeler: Precisionist Painter and Modern Photographer," (pp. 73-85, 172-173) which discusses the CMA painting.',
        "Boston, Museum of Fine Arts, Charles Sheeler: Paintings and Drawings, (13 October 1987- 3 January 1988); traveled to New York, Whitney Museum of American Art (28 January-17 April 1988); Dallas, Dallas Museum of Art (15 May-10 July 1988), no. 16, p. 80,",
        'also included parts from essay by Carol Troyen and Erica E. Hirshler, "From the Eyes Inward: Paintings and Drawings by Charles Sheeler," (pp. 9-11, 36-37), which point out the fact that the CMA painting was derived from Manhatta.',
      ],
    },
    provenance: [
      {
        description: "The Cleveland Museum of Art, Cleveland, Ohio",
        citations: [],
        footnotes: [],
        date: "1977-",
      },
      {
        description:
          "(Robert Schoelkopf Gallery, New York, NY, sold to the Cleveland Museum of Art)",
        citations: [],
        footnotes: [],
        date: "-1977",
      },
      {
        description: "(Harold Diamond, New York, NY) 1",
        citations: [],
        footnotes: [
          "1 According to Andy Schoelkopf, Harold Diamond acquired the painting from Mrs. Horter, but because Diamond had little experience in selling Sheeler's works, he consigned the painting to Robert Schoelkopf to sell. Diamond most likely never owned the painting. Schoelkopf sold the painting rather quickly after a visit from Sherman Lee, who happened to see the painting soon after it was received from Diamond.",
        ],
        date: "?",
      },
      {
        description: "Elizabeth Lentz Horter [1900-1985], South Langhorne, PA",
        citations: [],
        footnotes: [],
        date: "Probably 1940-at least 1969",
      },
      {
        description: "Earl Horter [1880-1940], Philadelphia, PA 1",
        citations: [],
        footnotes: [
          "1Horter's ownership of this painting by 1934 is confirmed by an exhibition of his collection at the Philadelphia Museum of Art in that year.",
        ],
        date: "By 1930-probably 1940",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: [],
    fun_fact:
      "Sheeler and his good friend, the poet William Carlos Williams, patronized speakeasies together during Prohibition.",
    digital_description: null,
    wall_description:
      "Capturing the soaring heights of New York City, this painting is a dramatic bird's-eye view of Broadway and Wall Street, showing a conglomeration of buildings at left and center, and the Church Street elevated train at right. Sheeler based his composition on an image from the short movie <em>Manhatta</em> (1920-21), which he made with the photographer Paul Strand. One of the first avant-garde American films, <em>Manhatta</em> celebrates the dynamic metropolis through a series of carefully composed shots of Lower Manhattan. As typical with Sheeler's work, the artist simplified forms and eliminated textures in <em>Church Street El</em> to concentrate on rhythmic interplay of shapes and color, and patterns of light and shadow.",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1977.43-church-street-el",
      ],
    },
    citations: [
      {
        citation:
          "Robert Schoelkopf Gallery, expect notice, April 27, 1977, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Andy Schoelkopf, telephone conversation with Victoria Sears Goldman, April 16, 2013.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Shoemaker, Innis H., Christa Clarke, and William S. Wierzbowski. <em>Mad for Modernism: Earl Horter and His Collection</em>. 1999.",
        page_number: null,
        url: null,
      },
      {
        citation:
          '"Above the Turmoil of New York, a Painting by Charles Sheeler-Photograph." <em>Vanity Fair</em> 16, no. 2 (April 1921).',
        page_number: "Reproduced: p. 47",
        url: null,
      },
      {
        citation:
          '"Manhattan: The Proud and Passionate City- Photographs." <em>Vanity Fair</em> 18, no. 2 (April 1922).',
        page_number: "Reproduced: p. 51",
        url: null,
      },
      {
        citation:
          'Watson, Forbes. "Charles Sheeler." <em>The Arts</em> 3, no. 5 (May 1923).',
        page_number: "Reproduced: p. 344",
        url: null,
      },
      {
        citation:
          "Rourke, Constance. <em>Charles Sheeler: Artist in the American Tradition</em>. New York: Harcourt, Brace and Company, 1938.",
        page_number:
          "Mentioned: p. 89, 91, 94, 96, 106, 147, 180, 187; Reproduced: p. 53",
        url: null,
      },
      {
        citation:
          'Devree, Howard. "Exhibition Reviews: Sheeler Complete." <em>Magazine of Art </em>32, no. 11 (November 1939).',
        page_number: "Mentioned: p. 644-645; Reproduced: p. 645",
        url: null,
      },
      {
        citation:
          'Brown, Milton W. "Cubist-Realism: An American Style." <em>Marsyas </em>3 (1943-1945).',
        page_number: "Mentioned: p. 150; Reproduced: no. 5",
        url: null,
      },
      {
        citation:
          'Seeley, Carol. "On the Nature of Abstract Painting in America." <em>Magazine of Art</em> 43, no. 5 (May 1950).',
        page_number: "Reproduced: p. 167",
        url: null,
      },
      {
        citation:
          'Hayes, Jr., Bartlett H. "An Appreciation." In <em>Charles Sheeler: A Retrospective Exhibition. </em>Los Angeles: The Galleries, 1954.',
        page_number: "Mentioned: p. 9",
        url: null,
      },
      {
        citation:
          'Wight, Frederick S. "Charles Sheeler." In <em>Charles Sheeler: A Retrospective Exhibition. </em>Los Angeles: The Galleries, 1954.',
        page_number: "Mentioned: p. 25, 27, 36",
        url: null,
      },
      {
        citation:
          'Wight, Frederick S. "Charles Sheeler." <em>Art in America</em> 42, no. 3 (October 1954).',
        page_number: "Mentioned: p. 195",
        url: null,
      },
      {
        citation:
          "Brown, Milton. <em>American Painting From the Armory Show to the Depression. </em>Princeton: Princeton University Press, 1955.",
        page_number: "Mentioned: p. 118; Reproduced: p. 120",
        url: null,
      },
      {
        citation:
          'Chanin, A.L. "Sheeler: Purist Brush and Camera Eye." <em>ARTnews </em>54, no. 4 (June 1955).',
        page_number: "Mentioned: p. 71-72",
        url: null,
      },
      {
        citation:
          'Wight, Frederick S. "Charles Sheeler." In <em>New Art in America: Fifty Painters of the 20th Century,</em> edited by John I. H. Baur. New York: A. Praeger Publishers, 1957.',
        page_number: "Reproduced: p. 97",
        url: null,
      },
      {
        citation:
          'Cohen, George Michael. "Charles Sheeler." <em>American Artist </em>23, no. 1 (January 1959).',
        page_number: "Mentioned: p. 34 ; Reproduced: p. 35",
        url: null,
      },
      {
        citation:
          'Craven, George M. "Sheeler at Seventy-Five."<em> College Art Journal </em>18, no. 2 (Winter 1959).',
        page_number: "Reproduced: p. 137; Mentioned: p. 138",
        url: null,
      },
      {
        citation:
          "Larkin, Oliver W. <em>Art and Life in America.</em> New York: Holt, Rinehart and Winston, 1960.",
        page_number: "Mentioned: p. 389; Reproduced: p. 387",
        url: null,
      },
      {
        citation:
          'Raoul, Rosine. "Letter From New York: The Armory Show and its Decade." <em>Apollo</em> (April 1963).',
        page_number: "Mentioned: p. 335; Reproduced: p. 334, no. 3",
        url: null,
      },
      {
        citation:
          "Baur, John I. H. <em>Revolution and Tradition in Modern American Art. </em>Cambridge: Harvard University Press, 1966.",
        page_number: "Reproduced: no. 73",
        url: null,
      },
      {
        citation:
          "The National Collection of Fine Arts. <em>Charles Sheeler</em>. Washington, D.C.: The Smithsonian Institution Press, 1968.",
        page_number: "Mentioned: p. 15, 155; Reproduced: p. 39, no. 24",
        url: null,
      },
      {
        citation:
          'Friedman, Martin. "The Art of Charles Sheeler: Americana in a Vacuum." In <em>Charles Sheeler. </em>Washington, D.C.: The Smithsonian Institution Press, 1968.',
        page_number: "Mentioned: p. 40",
        url: null,
      },
      {
        citation:
          'Hayes, Bartlett. "Reminiscence." In <em>Charles Sheeler.</em> Washington, D.C.: The Smithsonian Institution Press, 1968.',
        page_number: "Mentioned: p. 70",
        url: null,
      },
      {
        citation:
          'Davidson, Abraham A. "Charles Sheeler: Paintings and Photographs at the Whitney." <em>Arts Magazine </em>43, no. 5 (March 1969).',
        page_number: "Mentioned: p. 40",
        url: null,
      },
      {
        citation:
          'Jaffe, Irma B. "The Forming of the Avant-Garde, 1900-30. " In <em>The Genius of American Painting</em>, edited by John Wilmerding. New York: William Morrow and Company, Inc., 1973.',
        page_number: "Mentioned: p. 238,  Reproduced: p. 239",
        url: null,
      },
      {
        citation:
          "Davidson, Abraham A. <em>The Story of American Painting</em>. New York: Harry N. Abrams, 1974.",
        page_number: "Reproduced: p. 132, no. 119; Mentioned: p. 132, 133",
        url: null,
      },
      {
        citation:
          "Friedman, Martin. <em>Charles Sheeler</em>. New York: Watson-Guptill Publications, 1975.",
        page_number: "Mentioned: p. 36; Reproduced: p. 56",
        url: null,
      },
      {
        citation:
          'Heller, Nancy, and Julia Williams. "Charles Sheeler: American Industry as Landscape." <em>American Artist</em> 40, no. 402 (January 1976).',
        page_number: "Mentioned p. 62",
        url: null,
      },
      {
        citation:
          'Driscoll, John Paul. "Books in Review: Martin Friedman, Charles Sheeler." <em>Art Journal</em> 36, no. 1 (Fall 1976).',
        page_number: null,
        url: null,
      },
      {
        citation:
          "Arnason, H.H. <em>History of Modern Art: Painting, Sculpture, Architecture</em>. New York: Harry N. Abrams, Inc., 1977.",
        page_number: "Mentioned: p. 428; Reproduced: p. 428, no. 689",
        url: null,
      },
      {
        citation:
          'Lee, Sherman E. "The Year in Review." <em>The Bulletin of the Cleveland Museum of Art </em>65, no. 1 (January 1978).',
        page_number: "Mentioned: p. 4",
        url: null,
      },
      {
        citation:
          "<em>Midwest Art History Society Newsletter, </em>October, 1978.",
        page_number: "Reproduced: no. 5",
        url: null,
      },
      {
        citation:
          'Schulz, Bernhard. "Made in America: Tecnik und Dingwelt in Prazisionismus." In <em>Amerika Traum und Depression 1920/40</em>. Berlin: Die Gesellschaft, 1980.',
        page_number: "Reproduced: p. 89; Mentioned: p. 116, 534",
        url: null,
      },
      {
        citation:
          'Fillen-Yeh, Susan. "Charles Sheeler: Industry, Fashion, and the Vanguard." <em>Arts Magazine</em> 54, no. 6 (February 1980).',
        page_number: "Reproduced: p. 157, no. 13; Mentioned: p. 157",
        url: null,
      },
      {
        citation:
          'Fillin-Yeh, Susan. "Charles Sheeler and the Machine Age." PhD diss., The City University of New York, 1981.',
        page_number:
          "Mentioned: p. xiv, 152 note 58, 153, 206, 210-211, 249 note 18; Reproduced: p. 332, no. 80",
        url: null,
      },
      {
        citation:
          'Stewart, Patrick Leonard. "Charles Sheeler, William Carlos Williams, and the Development of the Precisionist Aesthetic, 1917-1931." PhD diss., University of Delaware, 1981.',
        page_number: "Mentioned: p. 33; Reproduced: p. 190, no. 8",
        url: null,
      },
      {
        citation:
          "Tsujimoto, Karen. <em>Images of Precisionist Painting: America and Modern Photography</em>. Seattle: University of Washington Press, 1982.",
        page_number: "Mentioned: p. 74, 79, 80; Reproduced: no. 18",
        url: null,
      },
      {
        citation:
          "Menton, Seymour. <em>Magic Realism Rediscovered, 1918-1981</em>. Philadelphia: Art Alliance Press, 1982.",
        page_number: "Mentioned: p. 78-79",
        url: null,
      },
      {
        citation:
          'Albright, Thomas. "Precisionism\'s Ambivalent Modernism." <em>ARTnews</em> 82, no. 1 (January 1983).',
        page_number: "Mentioned p. 88; Reproduced: p. 87",
        url: null,
      },
      {
        citation:
          'Ricciotti, Dominic. "The Revolution in Urban Transport: Max Weber and Italian Futurism." <em>The American Art Journal</em> 16 (Winter 1984).',
        page_number: "Mentioned: p. 61; Reproduced: 61, no. 13",
        url: null,
      },
      {
        citation:
          "Haskell, Barbara. <em>Ralston Crawford</em>. New York: Whitney Museum of American Art, 1985.",
        page_number: "Mentioned: p. 14; Reproduced: p. 15, no. 4",
        url: null,
      },
      {
        citation:
          "Maroney, Jr., James H. <em>The Elite and Popular Appeal of the Art of Charles Sheeler. </em>New York: James Maroney, Inc., 1986.",
        page_number: "Mentioned: p. 11",
        url: null,
      },
      {
        citation:
          "Wilson, Richard Guy, Dianne H. Pilgrim, and Dickran Tashjian. <em>The Machine Age in America 1918-1941</em>. New York: Harry N. Abrams, 1986.",
        page_number: "Mentioned: p. 219; Reproduced: p. 219",
        url: null,
      },
      {
        citation:
          "Wheat, Ellen Harkins. <em>Jacob Lawrence: American Painter.</em> Seattle: Seattle Art Museum, 1986.",
        page_number: "Reproduced: p. 45, no. 24",
        url: null,
      },
      {
        citation:
          "Schleier, Merrill. <em>The Skyscraper in American Art, 1890-1931. </em>New York: Da Capo Press, 1986.",
        page_number: "Mentioned: p. 80",
        url: null,
      },
      {
        citation:
          "Tichi, Cecelia. <em>Shifting Gears: Technology, Literature, Culture in Modernist America.</em> Charlotte: The University of North Carolina Press, 1987.",
        page_number: "Reproduced: p. 253",
        url: null,
      },
      {
        citation:
          "Stern, Robert A.M., Gregory Gilmart, and Thomas Messins. <em>New York 1930: Architecture and Urbanism Between the Two World Wars</em>. New York: Rizzoli International Publications, Inc., 1987.",
        page_number: "Reproduced: p. 53",
        url: null,
      },
      {
        citation:
          "Baker, John. <em>Henry Lee McFee and Formalist Realism in American Still Life 1923-1936</em>. Cranbury: Associated University Presses, 1987.",
        page_number: "Mentioned: p. 99; Reproduced: p. 99, no. 126",
        url: null,
      },
      {
        citation:
          'Hammer, Martin. "Exhibition Reviews: New York, Whitney Museum, Charles Sheeler." <em>The Burlington Magazine</em> 130, no. 1019 (Feb 1988).',
        page_number: "Mentioned: p. 164; Reproduced: p. 164, no. 107",
        url: null,
      },
      {
        citation:
          "Lubowsky, Susan. <em>George Ault.</em> New York: Whitney Museum of American Art, 1988.",
        page_number: "Mentioned: p. 14; Reproduced: p. 14, no. 9",
        url: null,
      },
      {
        citation:
          'Ricciotti, Dominic. "City Railways/Modernist Visions." In <em>The Railroad in American Art: Representations of Technological Change</em>. Japan: Toppan Printing Company, 1988.',
        page_number: "Mentioned: p. 139-140, 143; Reproduced: p. 139, no. 106",
        url: null,
      },
      {
        citation:
          'Fillin- Yeh, Susan. "Charles Sheeler\'s Rolling Power." In <em>The Railroad in American Art: Representations of Technological Change</em>, edited by Susan Danly and Leo Marx. Japan: Toppan Printing Company, 1988.',
        page_number: "Mentioned: p. 158",
        url: null,
      },
      {
        citation:
          'Henry, Steven P. "Exhibition: Charles Sheeler: Prints, Drawings, Photographs." <em>Dallas Museum of Art Bulletin</em> (Spring/Summer 1988).',
        page_number: "Mentioned: p. 17; Reproduced: p. 16",
        url: null,
      },
      {
        citation:
          "Lynton, Norbert. <em>The Story of Modern Art</em>. Oxford: Phaidon, 1989.",
        page_number: "Mentioned: p. 162-163; Reproduced: p. 164",
        url: null,
      },
      {
        citation:
          "Lucie-Smith, Edward. <em>Art Deco Painting</em>. Oxford: Phaidon, 1990.",
        page_number: "Reproduced: p. 21, no. 11",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Handbook of The Cleveland Museum of Art. </em>Cleveland: Cleveland Museum of Art, 1991.",
        page_number: "Reproduced: p. 146",
        url: "https://archive.org/details/CMAHandbook1991",
      },
      {
        citation:
          "Hinson, Tom E. <em>Sixty-Five Works from the Cleveland Museum of Art. </em>Cleveland: Cleveland Museum of Art, 1991.",
        page_number: "Mentioned: p. 38; Reproduced: p. 37",
        url: null,
      },
      {
        citation:
          "Lucic, Karen. <em>Charles Sheeler and the Cult of the Machine</em>. London: Reaktion Books, 1991.",
        page_number: "Mentioned: p. 59-71; Reproduced: no. 33",
        url: null,
      },
      {
        citation:
          "Harnsberger, R. Scott, and David L. Henderson. <em>Ten Precisionist Artists: Annotated Bibliographies.</em> Westport: Greenwood Press, 1992.",
        page_number: "Mentioned: p. 250, note 1080",
        url: null,
      },
      {
        citation:
          "Chong, Alan. <em>European and American Painting in The Cleveland Museum of Art: A Summary Catalogue,</em> Cleveland: Cleveland Museum of Art, 1993.",
        page_number: "Reproduced: p. 222",
        url: null,
      },
      {
        citation:
          'Schmied, Wieland. "Precisionsit View and American Scene: The 1920s." In <em>American Art in the 20th Century: Painting and Sculpture 1913-1993</em>, edited by Christos M. Joachimides and Norman Rosenthal. New York: Prestel, 1993.',
        page_number: "Mentioned: 471; Reproduced: p. 55, no. 8",
        url: null,
      },
      {
        citation:
          "Benke, Britta. <em>Georgia O'Keeffe 1887-1986: Blumen in der Wüste</em> Köln: Benedikt Taschen Verlag, 1994.",
        page_number: "Mentioned: p. 52; Reproduced: p. 52",
        url: null,
      },
      {
        citation:
          'Stavitsky, Gail. "Reordering Reality: Precisionist Directions in American Art, 1915-1941." In <em>Precisionism in America 1915-1941: Reordering Reality. </em>New York: Harry N. Abrams, Inc., 1994.',
        page_number: "Mentioned: p. 33, 35; Reproduced: p. 17, no. 5",
        url: null,
      },
      {
        citation:
          'Handy, Ellen. "The Idea and the Fact: Painting, Photography, Film, Precisionists, and the Real World." In <em>Precisionism in America 1915-1941: Reordering Reality. </em>New York: Harry N. Abrams, Inc., 1994.',
        page_number: "Mentioned: p. 42-45",
        url: null,
      },
      {
        citation:
          "Honour, Hugh, and John Fleming. <em>A World History of Art. </em>4th ed. London: Laurence King Publishing, 1995.",
        page_number: "Mentioned: p. 751; Reproduced: p. 752",
        url: null,
      },
      {
        citation:
          "Turner, Evan H. Foreward to <em>Catalogue of Photography,</em> Tom E. Hinson. Cleveland: Cleveland Museum of Art, 1996.",
        page_number: "Mentioned: p. XI",
        url: null,
      },
      {
        citation:
          "Hughes, Robert. <em>American Visions: The Epic History of Art in America. </em>New York: Alfred A. Knopf, Inc., 1997.",
        page_number: "Mentioned: p. 383; Reproduced: p. 384, no. 228",
        url: null,
      },
      {
        citation:
          "Arnason, H.H., and Marla F. Prather. <em>History of Modern Art.</em> New York: Harry N. Abrams, 1998.",
        page_number: "Mentioned:  p. 419; Reproduced: p. 411, no. 216",
        url: null,
      },
      {
        citation:
          "Shoemaker, Innis Howe, Christa Clarke, and William Wierzbowski. <em>Mad for Modernism: Earl Horter and His Collection</em>. Philadelphia: Philadelphia Museum of Art, 1999.",
        page_number: "Mentioned: p. 36, 173, 184; Reproduced: p. 122, no. 78",
        url: null,
      },
      {
        citation:
          "Haskell, Barbara. <em>The American Century: Art &amp; Culture 1900-1950</em>. New York: Whitney Museum of Art, 1999.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Brettell, Richard R. <em>Modern Art 1851-1929: Capitalism and Representation. </em>Oxford: Oxford Unviersity Press, 1999.",
        page_number: "Reproduced: p. 43",
        url: null,
      },
      {
        citation:
          "May, Sally Ruth. <em>Knockouts: A Pocket Guide. </em>Cleveland: Cleveland Museum of Art, 2001.",
        page_number: "Mentioned: p. 58, 118",
        url: null,
      },
      {
        citation:
          "Baldacci, Paolo, Jean Clair, Hajo Duchting, Claudia Gian Ferrari, Magdalena Holzhey, Christiane Lange, Gerd Roos, and Wieland Schmied. <em>Der kuhle Blick: Realismus der zwanziger Jahre</em>. New York: Prestel, 2001.",
        page_number: "Mentioned: p. 310; Reproduced: p. 311",
        url: null,
      },
      {
        citation:
          "Honour, Hugh, and John Fleming. <em>A World History of Art. </em>6th ed<em>. </em>London: Laurence King Publishing, 2002.",
        page_number: "Mentioned: p. 815",
        url: null,
      },
      {
        citation:
          'Haas, Karen E. "Charles Sheeler and Film." <em>Magazine Antiques. </em>Nov 2002.',
        page_number: "Mentioned: p. 122-129; Reproduced: p. 126, pl XI.",
        url: null,
      },
      {
        citation:
          "Cameron, Dan.<em> Living Inside the Grid.</em> New York: New Museum of Contemporary Art, 2003.",
        page_number: "Reproduced: p. 19",
        url: null,
      },
      {
        citation:
          "Fontbona, Francesc. <em>El Modernisme. </em>Barcelona: Edicions l'isard, 2003.",
        page_number: "Reproduced: p. 168",
        url: null,
      },
      {
        citation:
          'Solans, Piedad. "Cosmolgias de la Ciudad." In La Ciudad Collage: La Coleccion del IVAM<em>, </em>edited by Institut Valencia d\'Art Modern. Valencia: IVAM, 2004.',
        page_number: "Reproduced: p. 41, no. 8",
        url: null,
      },
      {
        citation:
          "Charles, Brock. <em>Charles Sheeler: Across Media.</em> Washington, DC: National Gallery of Art, 2006.",
        page_number: "Mentioned: p. 31, 48, 50-52, 116; Reproduced: p. 60",
        url: null,
      },
      {
        citation:
          "Weber, Bruce. <em>Paintings of New York, 1800-1850</em>. San Francisco: Pomegranate, 2005.",
        page_number: "Reproduced: p. 107",
        url: null,
      },
      {
        citation:
          "Honour, Hugh, and John Fleming. <em>A World History of Art. </em>7th ed<em>. </em>London: Laurence King Publishing, Ltd., 2005.",
        page_number: "Reproduced: p. 805, fig. 20.11",
        url: null,
      },
      {
        citation:
          'Brock, Charles. "Charles Sheeler: Across Media." <em>American Art Review</em> 18, no. 3 (May-June 2006).',
        page_number: "Mentioned: p. 165",
        url: null,
      },
      {
        citation:
          "Adams, Henry.<em> What's American about American Art? A Gallery Tour in the Cleveland Museum of Art</em>. Cleveland: Cleveland Museum of Art, 2008.",
        page_number: "Mentioned: p. 12, 129; Reproduced: p. 12, 128",
        url: null,
      },
      {
        citation:
          "Miller, Angela L., Janet C. Berlo, Bryan J. Wolf, and Jennifer L. Roberts. <em>American Encounters: Art, History and Cultural Identity. </em>Upper Saddle River: Pearson Education, Inc, 2012.",
        page_number: "Reproduced: p. 14.7",
        url: null,
      },
      {
        citation:
          "Arnason, H.H. <em>History of Modern Art: Painting, Sculpture, Architecture, Photography. </em>6th ed. Upper Saddle River: Prentice Hall, 2010.",
        page_number: "Mentioned: p. 376-377; Reproduced: p. 37",
        url: null,
      },
      {
        citation:
          "Carbone, Theresa A., ed. <em>Youth and Beauty: Art of the American Twenties. </em>New York: Skira Rizzolli Publications in association with the Brooklyn Museum, 2011.",
        page_number: "Mentioned: p. 141-142  Reproduced: p. 143, no. 105",
        url: null,
      },
      {
        citation:
          "Franklin, David, and C. Griffith Mann. <em>Treasures from the Cleveland Museum of Art</em>. Cleveland: The Cleveland Museum of Art; London: Scala Publishers Ltd, 2012.",
        page_number: "Mentioned: p. 304; Reproduced: p. 305",
        url: null,
      },
      {
        citation:
          'Troyen, Carol, and Jorge Santis. "Red-Hot American Painters: The Ashcan School." In <em>Return to the Ashcan</em>. Fort Lauderdale: Museum of Art, 2012.',
        page_number: "Reproduced: p. 26, no. 3",
        url: null,
      },
      {
        citation:
          'Jensen, Kirsten M. "Painting Manhatta: Modernism, Urban Planning, and New York, 1920-1940." In<em> Industrial Sublime: Modernism and the Transformation of New York\'s Rivers, 1900-1940.</em> Yonkers: Hudson River Museum in association with Empire State Editions, 2013.',
        page_number: "Reproduced: p. 74, fig. 32.",
        url: null,
      },
      {
        citation:
          "Bering, Kunibert, and Rolf Niehoff. <em>Bildkompetenz: eine kunstdidaktische Perspektive</em>. Oberhausen, Germany: Athena, 2013.",
        page_number: "Reproduced: p. 139",
        url: null,
      },
      {
        citation:
          "Arnason, H. H. and Elizabeth Mansfield. <em>History of Modern Art: Painting, Sculpture, Architecture, Photography. </em>Boston: Pearson, 2013.",
        page_number: "Mentioned & Reproduced: pp.352-353",
        url: null,
      },
      {
        citation:
          "Hiller, Susan. \"O'Keeffe as I see her, 1993.\" In <em>Georgia O'Keeffe</em>, edited by Tanya Barson. London: Tate Publishing, 2016.",
        page_number: "Mentioned: p. 230",
        url: null,
      },
      {
        citation:
          "Maroney, Jr., James H. <em>Fresh Perspectives on Grant Wood, Charles Sheeler, and George Durrie. </em>Leicester, VT: Gala Books, Ltd, 2019.",
        page_number: "Mentioned: p. 151-154, 170 ; Reproduced: p. 151",
        url: null,
      },
      {
        citation:
          "Maroney, James H. <em>Fresh Perspectives on Grant Wood, Charles Sheeler, and George H. Durrie</em>. Leicester, VT: Gala Books, Ltd., 2019.",
        page_number: "Reproduced: p. 151",
        url: null,
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1977.43",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1977.43/1977.43_web.jpg",
        filename: "1977.43_web.jpg",
        filesize: "602527",
        width: "1069",
        height: "893",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1977.43/1977.43_print.jpg",
        filename: "1977.43_print.jpg",
        filesize: "5386734",
        width: "3400",
        height: "2841",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1977.43/1977.43_full.tif",
        filename: "1977.43_full.tif",
        filesize: "49578716",
        width: "4446",
        height: "3715",
      },
    },
    updated_at: "2022-01-04 16:51:29.223000",
  },
  {
    id: 135382,
    accession_number: "1958.39",
    share_license_status: "CC0",
    tombstone:
      "The Red Kerchief, c. 1868–73. Claude Monet (French, 1840-1926). Oil on fabric; framed: 128.3 x 105.7 x 14.6 cm (50 1/2 x 41 5/8 x 5 3/4 in.); unframed: 99 x 79.8 cm (39 x 31 7/16 in.). The Cleveland Museum of Art, Bequest of Leonard C. Hanna, Jr. 1958.39",
    current_location: "222 Impressionism & Post-Impressionism",
    title: "The Red Kerchief",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "c. 1868–73",
    creation_date_earliest: 1868,
    creation_date_latest: 1873,
    creators: [
      {
        id: 1844,
        description: "Claude Monet (French, 1840-1926)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography:
          "Claude Monet spent his youth in Le Havre in Normandy, where his father worked as a wholesale grocer. By the age of sixteen, he had exhibited some of his caricatures in an art supply store, leading to his acquaintance with Boudin (q.v.). It was Boudin who first encouraged him to paint out of doors. In 1859 Monet traveled to Paris, where he saw Boudin's salon debut and met Constant Troyon (1810-1865). A year later he joined the Académie Suisse, where he was introduced to Pissarro (q.v.), but his studies were interrupted in 1861 when he was drafted for a seven-year stint in the military. His family would pay for his release from military duties only if he gave up painting. Finding this unacceptable, Monet served for one year in Algeria before an early return to France to convalesce after a severe illness. In 1862 he met Jongkind (q.v.), another important influence on the young painter's development. Monet's father then allowed him to pursue his art career in Paris, where he entered the studio of the Swiss painter Charles Gleyre (1806-1874). He studied with Gleyre until 1864 and befriended Frédéric Bazille (1841-1870), Renoir (q.v.), and Sisley (q.v.), with whom he painted in the forest of Fontainebleau (Déjeuner sur l'herbe, 1865, two fragments in Musée d'Orsay, Paris). Monet first exhibited at the Salon of 1865 and would do so again in 1866, 1868, and 1880. In 1868 he shared a studio with Bazille and Renoir but was soon forced to leave Paris to escape his creditors. He took his mistress, Camille Doncieux, and their son, Jean, to Fécamp, then Étretat, and finally Saint-Michel. There Renoir provided hospitality, and the two also painted at the boating and bathing center of La Grenouillère on the Seine. In 1870 Monet married Camille and, to escape the Franco-Prussian War, left for London, where he remained for nine months and met Durand-Ruel, his first dealer. In the summer of 1871 he visited the Netherlands and then settled in Argenteuil, to the west of Paris. He converted a boat into a studio, as Daubigny (q.v.) had done before him, allowing him to explore different viewpoints for his landscapes. He assisted in the organization of the First Impressionist Exhibition in 1874, partly because Durand-Ruel's worsened business situation had prevented the dealer from buying his art. The following year he participated in the Hôtel Drouot sale with Morisot (q.v.), Renoir, and Sisley. In 1878 Monet and his wife moved to Vétheuil with the Hoschedés, who had previously commissioned some works. Camille died the following year, and, while Ernest Hoschedé spent most of his time in Paris trying to settle his precarious financial situation, Monet stayed behind with Ernest's wife, Alice. In 1881 he moved with her and her children to Poissy and within two years was living at Giverny, where he would remain for the rest of his life. He painted some of his famous scenes-the haystack and poplar series, for example- in 1890-91. Ernest Hoschedé died in 1891, and Monet married Alice the following year. At Giverny, Monet explored the themes of his garden and water lilies. He continued to travel, going to Norway in 1895, making three trips to London from 1899 through 1901, and taking Alice to Venice in 1908. The final years of his life were mainly spent working on his Great Decorations, large paintings of a water lily pond designed for two oval rooms at the Paris Orangerie. Monet is generally considered the most typical exponent of impressionism.",
        name_in_original_language: null,
        birth_year: "1840",
        death_year: "1926",
      },
    ],
    culture: ["France, 19th century"],
    technique: "oil on fabric",
    support_materials: [],
    department: "Modern European Painting and Sculpture",
    collection: "Mod Euro - Painting 1800-1960",
    type: "Painting",
    measurements:
      "Framed: 128.3 x 105.7 x 14.6 cm (50 1/2 x 41 5/8 x 5 3/4 in.); Unframed: 99 x 79.8 cm (39 x 31 7/16 in.)",
    dimensions: {
      framed: {
        height: 1.283,
        width: 1.057,
        depth: 0.146,
      },
      unframed: {
        height: 0.99,
        width: 0.798,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Bequest of Leonard C. Hanna, Jr.",
    copyright: null,
    inscriptions: [
      {
        inscription: "Not signed\r\n",
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 343629,
          title: "Claude Monet - Seasons and Moments",
          description:
            "<i>Claude Monet - Seasons and Moments</i>. The Museum of Modern Art (March 7-May 15, 1960); Los Angeles County Museum of Art (June 14-August 7, 1960).",
          opening_date: "1960-03-07T05:00:00",
        },
        {
          id: 338832,
          title: "Paintings by Monet",
          description:
            "<i>Paintings by Monet</i>. The Art Institute of Chicago, Chicago, IL (organizer) (March 15-May 11, 1975).",
          opening_date: "1975-03-15T04:00:00",
        },
        {
          id: 343615,
          title: "Hommage a Claude Monet",
          description:
            "<i>Hommage a Claude Monet</i>. Musée du Louvre, Paris, France (February 9-May 5, 1980).",
          opening_date: "1980-02-09T05:00:00",
        },
        {
          id: 310025,
          title: "Creativity in Art and Science, 1860-1960",
          description:
            "<i>Creativity in Art and Science, 1860-1960</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (September 16-November 8, 1987).",
          opening_date: "1987-09-16T04:00:00",
        },
        {
          id: 343621,
          title: "Claude Monet: 1840-1926",
          description:
            "<i>Claude Monet: 1840-1926</i>. The Art Institute of Chicago, Chicago, IL (organizer) (July 14-November 26, 1995).",
          opening_date: "1995-07-04T04:00:00",
        },
        {
          id: 213923,
          title: "Impressionists in Winter: Effets de Neige",
          description:
            "<i>Impressionists in Winter: Effets de Neige</i>. The Phillips Collection, Washington, DC (organizer) (September 19, 1998-January 3, 1999); Fine Arts Museum of San Francisco, Yerba Buena Gardens, CA (January 30-May 2, 1999); The Brooklyn Museum, Brooklyn, NY (May 27-August 29, 1999).",
          opening_date: "1998-09-19T00:00:00",
        },
        {
          id: 216847,
          title: "Faces of Impressionism: Portraits from American Collections",
          description:
            "<i>Faces of Impressionism: Portraits from American Collections</i>. The Baltimore Museum of Art (organizer) (October 10, 1999-January 30, 2000); Museum of Fine Arts, Houston (March 25-May 7, 2000); The Cleveland Museum of Art (May 28-July 30, 2000).",
          opening_date: "1999-10-10T00:00:00",
        },
        {
          id: 227545,
          title: "Monet's Garden",
          description:
            "<i>Monet's Garden</i>. Kunsthaus Zürich, CH-8024 Zürich, Switzerland (organizer) (October 29, 2004-March 13, 2005).",
          opening_date: "2004-10-29T00:00:00",
        },
        {
          id: 182153,
          title:
            "Monet to Dalí: Modern Masters from the Cleveland Museum of Art",
          description:
            "<i>Monet to Dalí: Modern Masters from the Cleveland Museum of Art</i>. Beijing World Art Museum, China (May 26-August 27, 2006); Mori Art Center (September 16-November 26, 2006); Seoul Art Center, South Korea (December 22, 2006-March 28, 2007); Seoul Olympic Museum of Art, South Korea (April 7-May 20, 2007); Vancouver Art Gallery, Vancouver, Canada (June 9-September 16, 2007); The Cleveland Museum of Art, Cleveland, OH (organizer) (October 21, 2007-January 13, 2008); Frist Art Museum, Nashville, TN (February 15-June 1, 2008); Utah Museum of Fine Arts, Salt Lake City, UT (June 22-September 21, 2008); The Detroit Institute of Arts, Detroit, MI (October 12, 2008-January 18, 2009).",
          opening_date: "2006-05-27T00:00:00",
        },
        {
          id: 216795,
          title: "Becoming Edvard Munch: Influence, Anxiety, and Myth",
          description:
            "<i>Becoming Edvard Munch: Influence, Anxiety, and Myth</i>. The Art Institute of Chicago, Chicago, IL (organizer) (February 14-April 26, 2009).",
          opening_date: "2009-02-14T00:00:00",
        },
        {
          id: 220678,
          title: "Claude Monet",
          description:
            "<i>Claude Monet</i>. Galeries Nationales du Grand Palais, 75008 Paris, France (September 20, 2010-January 24, 2011).",
          opening_date: "2010-09-20T00:00:00",
        },
        {
          id: 213320,
          title: "Lend-Back - Painting the Modern Garden",
          description:
            "<i>Lend-Back - Painting the Modern Garden</i>. Allen Memorial Art Museum, Oberlin, OH (organizer) (August 27, 2015-January 3, 2016).",
          opening_date: "2015-08-27T00:00:00",
        },
        {
          id: 213583,
          title: "Monet: The Early Years",
          description:
            "<i>Monet: The Early Years</i>. Kimbell Art Museum, Fort Worth, TX (organizer) (October 16, 2016-January 29, 2017); Fine Arts Museum of San Francisco, Legion of Honor, San Francisco, CA (February 25-May 29, 2017).",
          opening_date: "2016-10-16T00:00:00",
        },
        {
          id: 304929,
          title: "Claude Monet - Impression and Emotion",
          description:
            "<i>Claude Monet - Impression and Emotion</i>. Albertina, Wein, Austria (organizer) (September 21, 2018-January 6, 2019).",
          opening_date: "2018-09-21T04:00:00",
        },
      ],
      legacy: [
        "<em>Claude Monet: Exposition rétrospective.</em> Musée de l'Orangerie, Paris, France (1931).",
        "<em>Claude Monet de 1865 à 1888.</em> Durand-Ruel, Paris, France (1935).",
        "<em>Five Centuries of History Mirrored in Five Centuries of French Art.</em> World's Fair (Pavillon de la France), New York, NY (1939).",
        "<em>A Loan Exhibition of Paintings by Claude Monet.</em> Wildenstein &amp; Co., New York, NY (1945).",
      ],
    },
    provenance: [
      {
        description:
          "Michel Monet [1878-1966] Giverny, France, bequeathed from the artist's estate to his son, 1931",
        citations: [],
        footnotes: [],
        date: "1931-1939",
      },
      {
        description: "Edouard Molyneux [1891-1974] Paris, France, 1939",
        citations: [],
        footnotes: [],
        date: "1939-1948",
      },
      {
        description:
          "(Carroll Carstairs Gallery, New York, NY, September 16, 1948, sold to Leonard C. Hanna, Jr.)",
        citations: [],
        footnotes: [],
        date: "1948",
      },
      {
        description:
          "Leonard C. Hanna, Jr. [1889-1958], Cleveland, OH, bequeathed to the Cleveland Museum of Art",
        citations: [],
        footnotes: [],
        date: "1948-1958",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, OH",
        citations: [],
        footnotes: null,
        date: "1958-",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: [],
    fun_fact:
      "Madame Monet’s red cape draws the viewer’s attention beyond the glass of the French doors capturing her glance, a brief moment frozen in time. This painting was very special to Monet and he kept it with him for his entire life.",
    digital_description:
      "This painting depicts Monet's first wife, Camille, outside on a snowy day passing by the French doors of their home at Argenteuil. Her face is rendered in a radically bold Impressionist technique of mere daubs of paint quickly applied, just as the snow and trees are defined by broad, broken strokes of pure white and green.",
    wall_description:
      "In its early stages, this composition contained two figures seated inside the room on either side of the window. Monet radically altered the composition by painting over the figures. They were replaced by an image of the artist's favorite model---his wife Camille, who passes outside the window in a red cape. Intense light---reflected from the snow-covered landscape---floods the room, obliterating details along the walls and floor. The off-center window frame and the blurriness achieved through sketchy brushstrokes suggest the scanning movement of the artist's eye as he viewed this scene. Contrasted with cold blues and silver whites, Camille's red cape draws the viewer's attention through the glass and into a swift exchange of glances, registering a brief moment in time. This painting evidently held special meaning for Monet, for he kept it with him until his death in 1926.",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1958.39-the-red-kerchief",
      ],
    },
    citations: [
      {
        citation:
          "Becker, Christoph. <em>Monet's Garden</em>. Ostfildern-Ruit, Germany: Hatje Cantz, 2004.",
        page_number: "Reproduced: p. 25, fig. 9",
        url: null,
      },
      {
        citation:
          "Geffroy, Gustave. <em>Claude Monet, sa vie, son œuvre</em>. Paris, FR: G. Crès et cie, 1922.",
        page_number: "Reproduced: opp. p. 140",
        url: null,
      },
      {
        citation:
          'Trevise, Duc de. "Le Pelerinage de Giverny." <em>Revue de l\'Art Ancien et Moderne </em>51 (January-May 1927: 42-50.',
        page_number: "Reproduced: p. 45",
        url: null,
      },
      {
        citation:
          'Fels, Florent. "Claude Monet or the Fading Luminary." <em>Formes; An International Art Review </em>15 (May 1931<em>)</em>: 74b-75.',
        page_number: "Reproduced: p. 74c",
        url: null,
      },
      {
        citation:
          "Malingue, Maurice. <em>Claude Monet.</em> Monaco: Les Documents d'art, 1943.",
        page_number: "Reproduced: p. 63",
        url: null,
      },
      {
        citation:
          "Rewald, John. <em>The History of Impressionism</em>. New York, NY: Museum of Modern Art, 1946.",
        page_number: "Reproduced: p. 207",
        url: null,
      },
      {
        citation:
          "Reuterswärd, Oscar. <em>Monet: En konstnärshistorik.</em> Stockholm: Bonniers, 1948.",
        page_number: "Reproduced: p. 51",
        url: null,
      },
      {
        citation:
          "<em>Catalogue de reproductions en couleurs de la peinture de 1860 à ... = Catalogue of colour reproductions of painting from 1860 to ... = Catálogo de reproducciones en color de la pintura de 1860 a</em>. Paris, France: Unesco, 1949.",
        page_number: "Reproduced: p. 234",
        url: null,
      },
      {
        citation:
          "Besson, George. <em>Claude Monet (1840-1926)</em>. Paris: Braun, 1949.",
        page_number: "Reproduced: pl. 28",
        url: null,
      },
      {
        citation:
          "Coe, Nancy. <em>The History of the Collecting of European Paintings and Drawings in the City of Cleveland</em>. Thesis M.A. Oberlin College, 1955.",
        page_number: "Reproduced: vol. 2, p. 75",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art.<em> In Memoriam: Leonard C. Hanna, Jr. </em>Cleveland: The Cleveland Museum of Art, 1958.",
        page_number: "Reproduced: no. 23",
        url: null,
      },
      {
        citation:
          "<em>The Bulletin of the Cleveland Museum of Art XLVI </em>no.6<em>.</em> (June, 1959): 123.",
        page_number: "Reproduced: p. 123",
        url: null,
      },
      {
        citation:
          "Museum of Modern Art (New York, N.Y.), and William Chapin Seitz. <em>Claude Monet: Seasons and Moments</em>. New York. Museum of Modern Art. Catalogues. 1959-1963. 1960.",
        page_number: "Mentioned: cat. no. 13",
        url: null,
      },
      {
        citation:
          "Gimpel, René. <em>Journal d'un Collectionneur, Marchand de Tableaux</em>. [Paris]: Calmann-Lévy, 1963.",
        page_number: "Reproduced: opp. p 78",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 174",
        url: "https://archive.org/details/CMAHandbook1966/page/n198",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 174",
        url: "https://archive.org/details/CMAHandbook1969/page/n198",
      },
      {
        citation:
          'Arnason, H. H. "Motherwell: The Window and the Wall." <em>ARTnews</em> 68 (Summer 1969): 48-50.',
        page_number: "Reproduced: p. 50; mentioned: p. 48",
        url: null,
      },
      {
        citation:
          "Isaacson, Joel. <em>Monet: Le Dejeuner Sur L'herbe</em>. London, United Kingdom: Allen Lane the Penguin Press, 1972.",
        page_number: "Reproduced: p. 14",
        url: null,
      },
      {
        citation:
          "Bortolatto, Luigina Rossi. <em>L'opera Completa Di Claude Monet, 1870-1889</em>. Milano: Rizzoli, 1972.",
        page_number: "Reproduced: no. 77",
        url: null,
      },
      {
        citation:
          "Tsuji, Kunio, Yoshiaki Inui, and Shūji Takashina. <em>Mone to inshōha = Monet et l'impressionnisme.</em> Tōkyō: Chūō Kōronsha, 1972.",
        page_number: "Reproduced: no. 33",
        url: null,
      },
      {
        citation:
          "Champa, Kermit Swiler. <em>Studies in Early Impressionism</em>. New Haven, CT: Yale University Press, 1973.",
        page_number: "Reproduced: p.31 fig. 40",
        url: null,
      },
      {
        citation:
          "Rewald, John. <em>The History of Impressionism.</em> New York, NY: Museum of Modern Art, 1973.",
        page_number: "Reproduced: p. 251",
        url: null,
      },
      {
        citation:
          'Nordenfalk, Carl Adam Johan. "Outdoors-Indoors: A 2000-Year-Old Space Problem in Western Art." In <em>Proceedings of the American Philosophical Society</em> 117, no. 4 (1973): 253-54, fig. 31.',
        page_number: "Reproduced: p. 253-254, fig. 31",
        url: null,
      },
      {
        citation:
          "Wildenstein, Daniel. <em>Claude Monet: biographie et catalogue raisonné</em>. Lausanne, Switzerland: La Bibliothèque des arts, 1974.",
        page_number: "Reproduced: p. 257",
        url: null,
      },
      {
        citation:
          "Monet, Claude, and Susan Wise. <em>Paintings by Monet: [Exhibition] March 15 Through May 11, 1975, the Art Institute of Chicago</em>. Chicago: Art Institute of Chicago, 1975.",
        page_number: "Mentioned and Reproduced: cat. no. 26, p 24",
        url: null,
      },
      {
        citation:
          "House, John. <em>Monet</em>. Oxford, United Kingdom: Phaidon; New York, NY, Dutton, 1977.",
        page_number: "Reproduced: no. 18",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 216",
        url: "https://archive.org/details/CMAHandbook1978/page/n236",
      },
      {
        citation:
          'House, John. "The New Monet Catalogue." <em>The Burlington Magazine</em> 120, no. 907 (1978): 678-39.',
        page_number: "Mentioned: p. 680",
        url: null,
      },
      {
        citation:
          '"Hommage a Monet." <em>Le Petit Journal des Grandes Expositions</em> 88 (1980): fig. 25.',
        page_number: "Reproduced: fig. 25",
        url: null,
      },
      {
        citation:
          "Monet, Claude, Hélène Adhémar, Anne Distel, and Sylvie Patin. <em>Hommage à Claude Monet (1840-1926): 1980, année du patrimoine, Grand Palais, 8 février - 5 mai 1980</em>. Paris: Éditions de la Réunion des musée nationaux, Ministère de la culture et de la communication, 1980.",
        page_number: "Mentioned and Reproduced: cat. no. 25",
        url: null,
      },
      {
        citation:
          '"Grand Palais, Paris; Exposition." <em>L\'Œil </em>297 (April, 1980): 74.',
        page_number: "Reproduced: p. 74",
        url: null,
      },
      {
        citation:
          "House, John. <em>Monet</em>. Oxford, United Kingdom: Phaidon, NY, 1981.",
        page_number: "Reproduced: no. 8",
        url: null,
      },
      {
        citation:
          'Borowitz, Helen O. "The Rembrandt and Monet of Marcel Proust." <em>The Bulletin of the Cleveland Museum of Art LXX, </em>no. 2. (February, 1983):90.',
        page_number: "Reproduced: p. 90, fig. 16",
        url: null,
      },
      {
        citation:
          "Keller, Horst. <em>Claude Monet</em>. München, Germany: Bruckmann, 1985.",
        page_number: "Reproduced: plate 44",
        url: null,
      },
      {
        citation:
          "Kijima, Shunsuke, Kimio Nakayama, Yoshiaki Tōno, Makoto Ōoka, and Katsunori Miyauchi. <em>Mone = Monet.</em> Tōkyō, Japan: Shūeisha, 1985.",
        page_number: "Reproduced: p. 6",
        url: null,
      },
      {
        citation:
          "Stuckey. Charles F. <em>Monet: A Retrospective</em>. New York, NY: 1985.",
        page_number: "Reproduced: p. 75, plate 27",
        url: null,
      },
      {
        citation:
          "Taillandier, Yvon. <em>Monet.</em> New York, NY: Crown, 1987.",
        page_number: "Reproduced: p. 40",
        url: null,
      },
      {
        citation:
          "Henning, Edward B. <em>Creativity in Art and Science</em>, 1860-1960. [Cleveland, Ohio]: Published by the Cleveland Museum of Art in cooperation with Indiana University Press, 1987.",
        page_number: "Mentioned and Reproduced: p. 95, cat. no. 2",
        url: null,
      },
      {
        citation:
          "Sagner-Düchting, <em>Karin. Claude Monet 1840-1926: ein Fest für die Augen.</em> Köln, Germany: Benedikt Taschen Verlag, 1990.",
        page_number: "Reproduced: p. 68",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Masterpieces from East and West.</em> New York, NY: Rizzoli International, 1992.",
        page_number: "Reproduced: p. 7-8",
        url: null,
      },
      {
        citation:
          "Chong, Alan. <em>European &amp; American Painting in the Cleveland Museum of Art: A Summary Catalogue</em>. Cleveland, Ohio: Cleveland Museum of Art, 1993.",
        page_number: "Reproduced: p. 158",
        url: null,
      },
      {
        citation:
          "Taylor, John Russell, <em>Claude Monet: Impressions of France : from Le Havre to Giverny.</em> London, United Kingdom: Collins &amp; Brown, 1995.",
        page_number: "Reproduced: p. 70",
        url: null,
      },
      {
        citation:
          "Tucker, Paul Hayes. <em>Claude Monet: Life and Art.</em> New Haven, CT: Yale University Press, 1995.",
        page_number: "Mentioned: p. 66-68, Reproduced: pl. 75",
        url: null,
      },
      {
        citation:
          "Stuckey, Charles F., Claude Monet, and Sophia Shaw. <em>Claude Monet: 1840-1926</em>. New York: Thames and Hudson, 1995.",
        page_number: "Mentioned and Reproduced cat. no. 24, p. 244",
        url: null,
      },
      {
        citation:
          "Pelfrey, Robert H. <em>Art and Mass Media</em>. Dubuque, Iowa: Kendall/Hunt, 1996.",
        page_number: "Reproduced: p. 165, fig. 7.3",
        url: null,
      },
      {
        citation:
          "Wildenstein, Daniel, <em>Monet</em>. Köln, Germany: Taschen, 1996.",
        page_number: "Reproduced: p. 90, vol. 1; p. 257, vol. 2",
        url: null,
      },
      {
        citation:
          "Weiss, Susanne. <em>Claude Monet: ein distanzierter Blick auf Stadt und Land</em> : <em>Werke 1859-1889</em>. Berlin, Germany: Reimer, 1997.",
        page_number: "Reproduced: p. 55, fig. 15",
        url: null,
      },
      {
        citation:
          "Moffett, Charles S. <em>Impressionists in Winter: Effets De Neige</em>. Washington, D.C.: Phillips Collection in collaboration with Philip Wilson Publishers, 1998.",
        page_number: "Reproduced: cat. no. 6",
        url: null,
      },
      {
        citation:
          "Sallis, John. <em>Shades--of Painting at the Limit</em>. Bloomington, IN: Indiana University Press, 1998.",
        page_number: "Reproduced: p. 52, fig. 4",
        url: null,
      },
      {
        citation:
          "Pittman, Dianne W. <em>Bazille: Purity, Pose, and Painting in the 1860s</em>. University Park, PA: Pennsylvania State University, 1998.",
        page_number: "Reproduced: p. 207, p. 209, fig. 131",
        url: null,
      },
      {
        citation:
          "D Argencourt, Louise and Roger Diederen. <em>The Cleveland Museum of Art: Catalogue of Paintings, Part Four; European Paintings of the 19th Century.</em> Cleveland, OH: Cleveland Museum of Art, 1999.",
        page_number: "Reproduced: p. 155",
        url: null,
      },
      {
        citation:
          "Museum of Fine Arts, Boston. Mone, Runowāru to inshōha no fūkei: kaikan kinen dai ikkai kikakuten = <em>Monet, Renoir, and the impressionist landscape.</em> [Japan]: Nagoya Bosuton Bijutsukan, 1999.",
        page_number: "Reproduced: p. 28, fig. 28",
        url: null,
      },
      {
        citation:
          "Johnston, Sona, Susan Bollendorf, and John House. <em>Faces of Impressionism: Portraits from American Collections</em>. Baltimore, Md: Baltimore Museum of Art in association with Rizzoli International, 1999.",
        page_number: "Reproduced: p. 126-127",
        url: null,
      },
      {
        citation:
          "Wildenstein, Daniel. <em>Monet, or, The Triumph of Impressionism.</em> Köln, Germany: Taschen, 1999.",
        page_number: "Reproduced: p. 90, cat. no. 257",
        url: null,
      },
      {
        citation:
          "Johnston, Sona.<em> Faces of Impressionism: Portraits from American Collections</em>. New York, NY : Rizzoli, 1999.",
        page_number: "Reproduced: p. 127, cat. no. 44",
        url: null,
      },
      {
        citation:
          "Knight, Lynne. <em>Snow Effects: Poems on Impressionists in Winter</em>. Concord, CA: Small Poetry Press, 2000.",
        page_number: "Reproduced: p. 24",
        url: null,
      },
      {
        citation:
          "Jiminez, Jill Berk, and Joanna Banham. <em>Dictionary of Artists' Models.</em> London, United Kingdom: Fitzroy Dearborn, 2001.",
        page_number: "Reproduced: p. 167",
        url: null,
      },
      {
        citation:
          "<em>Norio Shimada, and Keiko Sakagami. Kurōdo Mone meigashū: hikari to kaze no kiseki</em>. Tōkyō, Japan: Nihon Bijutsu Kyōiku Sentā, 2001.",
        page_number: "Reproduced: p. 123",
        url: null,
      },
      {
        citation:
          "Clancy, John I. <em>Impressionism: Historical Overview and Bibliography.</em> New York, NY: Nova Science Publishers, 2003.",
        page_number: "Reproduced: p. 20",
        url: null,
      },
      {
        citation:
          "Borzello, Frances. <em>At Home: The Domestic Interior in Art.</em> London, United Kingdom: Thames &amp; Hudson, 2006.",
        page_number: "Reproduced: p. 65",
        url: null,
      },
      {
        citation:
          "Lambert, Stéphane.<em> L'adieu au paysage: les nymphéas de Claude Monet</em>. Paris, France: Différence, 2008.",
        page_number: "Reproduced: fig. 12",
        url: null,
      },
      {
        citation:
          "Baillio, Joseph. <em>Claude Monet, 1840-1926</em>:<em> Paris, Galeries Nationales, Grand Palais, September 22, 2010-January 24, 2011</em>. Paris: Réunion des musées nationaux, 2010.",
        page_number: "Reproduced: p. 103, Mentioned: p. 254-255",
        url: null,
      },
      {
        citation:
          'Braschi, Cecilia. "1840-1926. Monet, une Vie Dediee a la Peinture." <em>Dossier de l\'Art </em>177 (September 2010): 2-23.',
        page_number: "Reproduced: p. 21",
        url: null,
      },
      {
        citation:
          "Marchesseau, Daniel. <em>Monet au Musée Marmottan et dans les collections suisses ; Estampes japonaises, Fondation Claude Monet, Giverny. </em>Martigny, Switzerland: Fondation Pierre Gianadda, 2011.",
        page_number: "Reproduced: p. 201, fig. 24",
        url: null,
      },
      {
        citation:
          "Franklin, David and C. Griffith Mann. <em>Treasures from the Cleveland Museum of Art</em>. Cleveland, OH: Cleveland Museum of Art, London, United Kingdom, Scala Publishers Ltd., 2012.",
        page_number: "Reproduced: p. 262-3",
        url: null,
      },
      {
        citation:
          "Patin, Sylvie. <em>Monet's Private Picture Gallery at Giverny: Paintings by Monet and His Friends.</em> Montreuil, France: Gourcuff Gradenigo; Giverny: Éditions Claude Monet Giverny: Fondation Claude Monet, 2016.",
        page_number: "Reproduced: P. 12, 14, 16-17, 23",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Museum Masters: 2016-17 Companion Guide.</em> [Cleveland, Ohio]: Cleveland Museum of Art, 2016.",
        page_number: "Mentioned and Reproduced: P. 22",
        url: "",
      },
      {
        citation:
          'Cachorro Fernandez, Emilio. "Habitaciones con Vistas. Pulsion Escopica A Traves de la Ventana". Archivo español de arte 88, issue 350 (April-June 2015): 157-172.',
        page_number: "Reproduced: p. 170, fig. 6",
        url: null,
      },
      {
        citation:
          "Shackelford, George T. M., et. al. Monet: The Early Years. Fort Worth, TX: Kimball Art Museum, 2016.",
        page_number: "Mention: p. 107; 202 Reproduced: cover; p. 106, cat. 12",
        url: null,
      },
      {
        citation:
          "Bortolatto, Luigina Rossi. <em>Tout l'œuvre peint de Monet, 1870-1889.</em> Paris: Flammarion, 1981.",
        page_number: "Reproduced: P. 93, fig. 78",
        url: null,
      },
      {
        citation:
          'Widaur, Heinz. "From Pleinairism to Impressionism." In <em>Claude Monet: A Floating World.</em> Heinz Widauer and Dieter Buchhart, eds., 55-79. Vienna: The Albertina Museum, 2018.',
        page_number: "Mentioned and reproduced: p. 76-79, cat. 24",
        url: null,
      },
      {
        citation:
          "Shackelford, George T. M. <em>Monet: the Late Years.</em> Fort Worth, Texas: Kimbell Art Museum; San Francisco: Fine Arts Museums of San Francisco, New Haven; London: Distributed by Yale University Press, 2019.",
        page_number: "Reproduced: P. 15, 29",
        url: null,
      },
      {
        citation: "Rubin, James Henry. Monet. 2020, 54.",
        page_number: "Mentioned and reproduced; pp. 53-54, fig. 37.",
        url: "",
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1958.39",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1958.39/1958.39_web.jpg",
        filename: "1958.39_web.jpg",
        filesize: "242663",
        width: "723",
        height: "900",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1958.39/1958.39_print.jpg",
        filename: "1958.39_print.jpg",
        filesize: "3767988",
        width: "2732",
        height: "3400",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1958.39/1958.39_full.tif",
        filename: "1958.39_full.tif",
        filesize: "506893484",
        width: "11652",
        height: "14500",
      },
    },
    updated_at: "2022-01-13 10:02:03.832000",
  },
  {
    id: 141639,
    accession_number: "1965.233",
    share_license_status: "CC0",
    tombstone:
      "Twilight in the Wilderness, 1860. Frederic Edwin Church (American, 1826-1900). Oil on canvas; framed: 124 x 185 x 13 cm (48 13/16 x 72 13/16 x 5 1/8 in.); unframed: 101.6 x 162.6 cm (40 x 64 in.). The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund 1965.233",
    current_location: "206 American Landscape",
    title: "Twilight in the Wilderness",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1860",
    creation_date_earliest: 1860,
    creation_date_latest: 1860,
    creators: [
      {
        id: 2697,
        description: "Frederic Edwin Church (American, 1826-1900)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography: null,
        name_in_original_language: null,
        birth_year: "1826",
        death_year: "1900",
      },
    ],
    culture: ["America, 19th century"],
    technique: "oil on canvas",
    support_materials: [],
    department: "American Painting and Sculpture",
    collection: "American - Painting",
    type: "Painting",
    measurements:
      "Framed: 124 x 185 x 13 cm (48 13/16 x 72 13/16 x 5 1/8 in.); Unframed: 101.6 x 162.6 cm (40 x 64 in.)",
    dimensions: {
      framed: {
        height: 1.24,
        width: 1.85,
        depth: 0.13,
      },
      unframed: {
        height: 1.016,
        width: 1.626,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Mr. and Mrs. William H. Marlatt Fund",
    copyright: null,
    inscriptions: [
      {
        inscription: 'Signed and dated lower right: "F. E. CHURCH / -60-"',
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 300794,
          title: "Year in Review: 1965",
          description:
            "<i>Year in Review: 1965</i>. The Cleveland Museum of Art (organizer) (October 27-November 14, 1965).",
          opening_date: "1965-10-27T04:00:00",
        },
        {
          id: 314948,
          title: "Wilderness",
          description:
            "<i>Wilderness</i>. Corcoran Gallery of Art, Washington, DC (organizer) (co-organizer) (October 9-November 14, 1971).",
          opening_date: "1971-10-09T04:00:00",
        },
        {
          id: 302330,
          title: "Heritage and Horizon: American Painting 1776 - 1976",
          description:
            "<i>Heritage and Horizon: American Painting 1776 - 1976</i>. Albright-Knox Art Gallery, Buffalo, NY (organizer) (March 7-April 11, 1976); The Detroit Institute of Arts, Detroit, MI (May 2-June 13, 1976); The Toledo Museum of Art, Toledo, OH (July 4-August 15, 1976); The Cleveland Museum of Art, Cleveland, OH (September 8-October 24, 1976).",
          opening_date: "1976-03-07T05:00:00",
        },
        {
          id: 315054,
          title: "American Light: The Luminist Movement, 1850-1875",
          description:
            "<i>American Light: The Luminist Movement, 1850-1875</i>. National Gallery of Art, Washington, DC (organizer) (co-organizer) (February 10-June 15, 1980).",
          opening_date: "1980-02-10T05:00:00",
        },
        {
          id: 304561,
          title: "Visions of Landscape: East and West",
          description:
            "<i>Visions of Landscape: East and West</i>. The Cleveland Museum of Art (organizer) (February 17-March 21, 1982).",
          opening_date: "1982-02-17T05:00:00",
        },
        {
          id: 314070,
          title: "A New World: Masterpieces of American Painting, 1760 - 1910",
          description:
            "<i>A New World: Masterpieces of American Painting, 1760 - 1910</i>. Museum of Fine Arts, Boston, Boston, MA (organizer) (co-organizer) (September 7-November 13, 1983); Corcoran Gallery of Art, Washington, DC (December 7, 1983-February 12, 1984).",
          opening_date: "1983-09-07T04:00:00",
        },
        {
          id: 315079,
          title: "American Paradise: The World of the Hudson River School",
          description:
            "<i>American Paradise: The World of the Hudson River School</i>. The Metropolitan Museum of Art, New York, NY (organizer) (co-organizer) (October 4, 1987-January 3, 1988).",
          opening_date: "1987-10-04T04:00:00",
        },
        {
          id: 315091,
          title:
            "Bilder Aus des Neuen Welt: Amerikanische Malerei des 18. und 19. Jahrhunderts (Paintings from the New World: American Paintings from the 18th and the 19th Century)",
          description:
            "<i>Bilder Aus des Neuen Welt: Amerikanische Malerei des 18. und 19. Jahrhunderts (Paintings from the New World: American Paintings from the 18th and the 19th Century)</i>. Staatliche Museen zu Berlin, Nationalgalerie, Berlin, Germany (organizer) (November 17, 1988-February 12, 1989); Orangerie des Schlosses Charlottenburg, Berlin, Germany (November 17, 1988-February 12, 1989); Kunsthaus Zürich, CH-8024 Zürich, Switzerland (March 3-May 15, 1989).",
          opening_date: "1988-11-17T05:00:00",
        },
        {
          id: 315126,
          title: "Frederic Edwin Church",
          description:
            "<i>Frederic Edwin Church</i>. National Gallery of Art (co-organizer) (October 8, 1989-January 28, 1990).",
          opening_date: "1989-10-08T04:00:00",
        },
        {
          id: 311444,
          title: "Object Lessons: Cleveland Creates an Art Museum",
          description:
            "<i>Object Lessons: Cleveland Creates an Art Museum</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 7-September 8, 1991).",
          opening_date: "1991-06-07T04:00:00",
        },
        {
          id: 221835,
          title:
            "America. The New World in 19th-century Painting\r\nAmerica. Die Neue Welt in Bildern des 19. Jahrhunderts",
          description:
            "<i>America. The New World in 19th-century Painting\r\nAmerica. Die Neue Welt in Bildern des 19. Jahrhunderts</i>. Belvedere, Wien, Austria (organizer) (March 17-June 20, 1999).",
          opening_date: "1999-03-17T00:00:00",
        },
        {
          id: 221738,
          title: "The American Sublime",
          description:
            "<i>The American Sublime</i>. Tate Britain, London (organizer) (February 20-May 19, 2002); Pennsylvania Academy of Fine Arts, Museum of American Art, Philadelphia, PA (June 17-August 25, 2002); Minneapolis Institute of Art, Minneapolis, MN (September 22-November 17, 2002).",
          opening_date: "2002-02-20T00:00:00",
        },
        {
          id: 205195,
          title: "Maine Sublime",
          description:
            "<i>Maine Sublime</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (October 4, 2014-January 25, 2015).",
          opening_date: "2014-10-04T00:00:00",
        },
      ],
      legacy: [
        "Goupil's Gallery, New York, June 1860.<br><br>New York, Metropolitan Museum of Art and National Academy of Design, The New York Centennial Loan Exhibition of Paintings, Selected from the Private Art Galleries, (1876), no. 125, listed as being part of J. T. Johnston's collection. <br><br>New York, Metropolitan Museum of Art, Paintings by Frederic E. Church, N. A., (28 May to 15 October1900), illustrated in catalogue as plate 6.<br><br>Baltimore, The Municipal Art Society of Baltimore, Art Loan Exhibition, (1902), no. 89, listed as the property of Miss Garrett.<br><br>Washington, D. C., National Collection of Fine Arts, Smithsonian Institution, Frederic Edwin Church, (12 February to 13 March 1966), no. 44; E18/ C56 W319. Exhibition traveled to the Albany Institute of History and Art (30 March through 30 April 1966), and, without Twilight in the Wilderness, to M. Knoedler and Company, New York (1 June through 30 June 1966). <br><br>New York, Whitney Museum of American Art, Art of the United States: 1670-1966, (28 September to 27 November, 1966), no. 48, brief comments about the color in Twilight in the Wilderness by Lloyd Goodrich, p. 25, catalogue.<br><br>Washington, D. C., The National Endowment for the Arts with the Corcoran Gallery of Art, Wilderness, (9 October to 14 November 1971), no. 69.<br><br>Buffalo, New York, Albright-Knox Art Gallery, Heritage and Horizon: American Painting 1776-1976, (6 March to 11 April 1976), no. 10. Exhibition traveled to the Detroit Institute of Arts (5 May through 13 June 1976), The Toledo Museum of Art (4 July through 15 August 1976), and the Cleveland Museum of Art, (8 September through 10 October 1976). <br><br>Washington, D. C., National Gallery of Art, American Light: The Luminist Movement, 1850-1875, (10 February through 15 June 1980), no. 204; includes the following remarks: in \"Design and Measurement in Luminist Art\", Lisa Andrus discusses the composition of and quality of light in Twilight in the Wilderness, p.36; Earl A. Powell's \"Luminism and the American Sublime\" describes Church's use of cadmium colors to achieve brilliant light in many of his paintings, including Twilight in the Wilderness; and Twilight's role in the development of the 19th century ideal of the sublime, p. 92; \"Church and Luminism: Light for America's Elect\" by David C. Huntington describes how Church's technique in Twilight in the Wilderness erases all evidence of the artist's touch, p. 170, illus. 167.<br>Boston, Museum of Fine Arts, A New World: Masterpieces of American Painting, 1760- 1910, (7 September through 13 November 1983), no. 39. <br><br>Also traveled to The Corcoran Gallery of Art, Washington, D. C. (7 December 1983- 12 February 1984) and, without Twilight in the Wilderness, to Grand Palais, Paris (16 March- 11 June 1984).<br>New York, Metropolitan Museum of Art, American Paradise: The World of the Hudson River School, (4 October 1987 through 3 January 1988), pp.45, 251-4.<br><br>Berlin, Staatliche Museen Preußischer Kulturbesitz, Nationalgalerie, Orangerie des Schlosses Charlottenburg, Bilder Aus des Neuen Welt: Amerikanische Malerei des 18. und 19. Jahrhunderts, (22 November 1988 through 5 February 1989), no. 15. Exhibition traveled to Kunsthaus Zurich, (3 March - 15 May 1989).<br><br>Washington, D. C., National Gallery of Art, Frederic Edwin Church, (8 October 1989 to 28 January 1990), no. 34, catalogue text by Franklin Kelly, pp. 58-59, 61-62, illus. p. 110, cat. 34.<br><br>Vienna, Osterreichischen Galerie Belvedere, America: Die Neue Welt in Bildern des 19 Jahrunderts, (17 March through 20 June 1999), no. 45.<br><br>London, The Tate Britain, American Sublime: Landscape Painting in the United States, 1820-1880, (21 February - 19 May 2002), no. 25; pp. 129-131, p. 55-6, illus. p. 115, 131; Exhibition traveled to the Pennsylvania Academy of Fine Arts, Philadelphia (17 June -25 August 2002) and Minneapolis Institute of Art (22 September- 17 November 2002).<br><br>The Cleveland Museum of Art (06/21/2005 - 09/11/2005); \"CMA Highlights\"",
        "New York, Avery's Gallery, (1866). Also shown at Dusseldorf Gallery, New York, 1866. Both exhibitions held in connection with auction, according to The Round Table, 10 March 1866. (See reference above.)",
        'New Haven, Connecticut, Yale College, Second Annual Exhibition of the Yale School of the Fine Arts, Founded as a Department of Yale College by the Late Augustus Russell Street of New Haven, Conn., (1870), no. 114, listed as the property of John T. Johnston.<br><br>New York, Metropolitan Museum of Art and National Academy of Design, The New York Centennial Loan Exhibition of Paintings, Selected from the Private Art Galleries, (1876), no. 125, listed as being part of J. T. Johnston\'s collection. <br><br>New York, Metropolitan Museum of Art, Paintings by Frederic E. Church, N. A., (28 May to 15 October1900), illustrated in catalogue as plate 6.<br><br>Baltimore, The Municipal Art Society of Baltimore, Art Loan Exhibition, (1902), no. 89, listed as the property of Miss Garrett.<br><br>Washington, D. C., National Collection of Fine Arts, Smithsonian Institution, Frederic Edwin Church, (12 February to 13 March 1966), no. 44; E18/ C56 W319. Exhibition traveled to the Albany Institute of History and Art (30 March through 30 April 1966), and, without Twilight in the Wilderness, to M. Knoedler and Company, New York (1 June through 30 June 1966). <br><br>New York, Whitney Museum of American Art, Art of the United States: 1670-1966, (28 September to 27 November, 1966), no. 48, brief comments about the color in Twilight in the Wilderness by Lloyd Goodrich, p. 25, catalogue.<br><br>Washington, D. C., The National Endowment for the Arts with the Corcoran Gallery of Art, Wilderness, (9 October to 14 November 1971), no. 69.<br><br>Buffalo, New York, Albright-Knox Art Gallery, Heritage and Horizon: American Painting 1776-1976, (6 March to 11 April 1976), no. 10. Exhibition traveled to the Detroit Institute of Arts (5 May through 13 June 1976), The Toledo Museum of Art (4 July through 15 August 1976), and the Cleveland Museum of Art, (8 September through 10 October 1976). <br><br>Washington, D. C., National Gallery of Art, American Light: The Luminist Movement, 1850-1875, (10 February through 15 June 1980), no. 204; includes the following remarks: in "Design and Measurement in Luminist Art", Lisa Andrus discusses the composition of and quality of light in Twilight in the Wilderness, p.36; Earl A. Powell\'s "Luminism and the American Sublime" describes Church\'s use of cadmium colors to achieve brilliant light in many of his paintings, including Twilight in the Wilderness; and Twilight\'s role in the development of the 19th century ideal of the sublime, p. 92; "Church and Luminism: Light for America\'s Elect" by David C. Huntington describes how Church\'s technique in Twilight in the Wilderness erases all evidence of the artist\'s touch, p. 170, illus. 167.<br>Boston, Museum of Fine Arts, A New World: Masterpieces of American Painting, 1760- 1910, (7 September through 13 November 1983), no. 39. <br><br>Also traveled to The Corcoran Gallery of Art, Washington, D. C. (7 December 1983- 12 February 1984) and, without Twilight in the Wilderness, to Grand Palais, Paris (16 March- 11 June 1984).<br>New York, Metropolitan Museum of Art, American Paradise: The World of the Hudson River School, (4 October 1987 through 3 January 1988), pp.45, 251-4.<br><br>Berlin, Staatliche Museen Preußischer Kulturbesitz, Nationalgalerie, Orangerie des Schlosses Charlottenburg, Bilder Aus des Neuen Welt: Amerikanische Malerei des 18. und 19. Jahrhunderts, (22 November 1988 through 5 February 1989), no. 15. Exhibition traveled to Kunsthaus Zurich, (3 March - 15 May 1989).<br><br>Washington, D. C., National Gallery of Art, Frederic Edwin Church, (8 October 1989 to 28 January 1990), no. 34, catalogue text by Franklin Kelly, pp. 58-59, 61-62, illus. p. 110, cat. 34.<br><br>Vienna, Osterreichischen Galerie Belvedere, America: Die Neue Welt in Bildern des 19 Jahrunderts, (17 March through 20 June 1999), no. 45.<br><br>London, The Tate Britain, American Sublime: Landscape Painting in the United States, 1820-1880, (21 February - 19 May 2002), no. 25; pp. 129-131, p. 55-6, illus. p. 115, 131; Exhibition traveled to the Pennsylvania Academy of Fine Arts, Philadelphia (17 June -25 August 2002) and Minneapolis Institute of Art (22 September- 17 November 2002).<br><br>The Cleveland Museum of Art (06/21/2005 - 09/11/2005); "CMA Highlights"',
      ],
    },
    provenance: [
      {
        description:
          "William T. Walters [1820-1894], Baltimore, MD, consigned to Samuel Putnam Avery for sale at Henry H. Leeds and Co.",
        citations: [],
        footnotes: [
          "Walters, a prominent collector and namesake of the Walters Art Museum, commissioned the painting from Church in 1860.",
        ],
        date: "1860-1864",
      },
      {
        description: "(Henry H. Leeds and Co., New York, NY, Feb. 12-13, 1864)",
        citations: [],
        footnotes: [
          "Consigned to Samuel Putnam Avery by Walters, the painting seems to have been bought in by Avery at this sale and then put up for auction again in 1866.",
        ],
        date: "1864",
      },
      {
        description: "(Samuel Putnam Avery [1822-1904], New York, NY)",
        citations: [],
        footnotes: [
          "After likely buying in the painting at the 1864 auction, Avery, a close associate of Walters, offered it for sale again in 1866.",
        ],
        date: "1864-1866",
      },
      {
        description:
          "(Leeds and Minor at Old Dusseldorf Gallery, New York, NY, March 9, 1866, no. 174, sold to John Taylor Johnston)",
        citations: [],
        footnotes: [
          'This auction included “the entire collection of the foreign oil and water color paintings, consigned to Samuel P. Avery," ”to which will be added the celebrated picture by F.E. Church, Twilight in the Wilderness." As in the 1864 auction, here, too, Walters consigned the painting to Avery for sale.',
        ],
        date: "1866",
      },
      {
        description: "John Taylor Johnston [1820-1893], New York, NY",
        citations: [],
        footnotes: [],
        date: "1866-1876",
      },
      {
        description:
          "(Chickering Hall, John Taylor Johnston sale, Dec. 19-22, 1876, sold to John Work Garrett?)",
        citations: [],
        footnotes: [
          "According to Emily de Forest, Johnston's daughter and Robert de Forest's wife, the painting was purchased at this sale by Mary Garrett. Lockwood de Forest, Robert's brother, however, maintains it was purchased by John Work Garrett and then descended to his daughter, Mary.",
        ],
        date: "1876",
      },
      {
        description:
          "John Work Garrett [1820-1884], Baltimore, MD, by descent to his daughter, Mary E. Garrett?",
        citations: [],
        footnotes: [],
        date: "1876-probably 1884",
      },
      {
        description:
          "Mary E. Garrett [1854-1909], Baltimore, MD, sold to Robert de Forest",
        citations: [],
        footnotes: ["Mary Garrett was a close friend of the de Forests."],
        date: "Probably 1884-at least 1902",
      },
      {
        description:
          "Robert de Forest [1848-1931], Parkers Point, CT, by descent to his brother, Lockwood de Forest",
        citations: [],
        footnotes: [
          "According to Robert's wife, Emily, he purchased the painting from Mary Garrett.",
        ],
        date: "After 1902-1931",
      },
      {
        description:
          "Lockwood de Forest [1850-1932], Santa Barbara, CA, by descent to his son, Alfred Victor de Forest",
        citations: [],
        footnotes: [],
        date: "1931-1932",
      },
      {
        description:
          "Alfred Victor de Forest [1888-1945], Marlborough, NH, by descent to his son, Taber de Forest",
        citations: [],
        footnotes: [],
        date: "1932-1945",
      },
      {
        description: "Taber de Forest, Maine, sold to David McCoy",
        citations: [],
        footnotes: [],
        date: "1945-early 1960s",
      },
      {
        description: "David McCoy, Lyme, CT, sold to Robert Weimann",
        citations: [],
        footnotes: [],
        date: "Early 1960s",
      },
      {
        description:
          "Robert Weimann, Ansonia, CT, sold to the Cleveland Museum of Art",
        citations: [],
        footnotes: [],
        date: "1962 or 1963-1965",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, OH",
        citations: [],
        footnotes: [],
        date: "1965-",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: [],
    fun_fact:
      "An image of this painting has a cameo in the Harrison Ford film <em>Clear and Present Danger</em>.",
    digital_description: null,
    wall_description:
      "In his New York studio, Church painted this spectacular view of a blazing sunset over wilderness near Mount Katahdin in Maine, which he had sketched during a visit nearly two years earlier. Although Church often extolled the grandeur of pristine American landscape in his work, this painting appears to have additional overtones. Created on the eve of the Civil War, the painting's subject can be interpreted as symbolically evoking the coming conflagration. Church's considerable technical skills and clever showmanship contributed to his fame as the premier artist of his generation. Rather than debut this painting in an annual exhibition with works by other artists as was the custom, Church instead exhibited it by itself at a prestigious art gallery. Coaxed by advance publicity and highly favorable press reviews, several hundred spectators flocked to admire it during its seven-week run.",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1965.233-twilight-in-the-wild",
      ],
    },
    citations: [
      {
        citation: "<em>New York Herald</em> (June 8, 1860): 10.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Lockwood de Forest, letter to Emily de Forest, Sept. 16, 1931, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Franklin W. Kelly, letter to William S. Talbot, Oct. 21, 1982, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          '"Art Exhibitions and Sales," <em>The Nation</em> 2 (March 15, 1866): 346.',
        page_number: null,
        url: null,
      },
      {
        citation:
          "Franklin W. Kelly, letter to William S. Talbot, Oct. 21, 1982, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          '"Art Notes," <em>The Round Table</em> 3 (March 10, 1866): 151.',
        page_number: null,
        url: null,
      },
      {
        citation:
          '"Art Exhibitions and Sales,” <em>The Nation</em> 2 (March 15, 1866): 346.',
        page_number: null,
        url: null,
      },
      {
        citation:
          "Eleanor Harvey, email to Victoria Sears Goldman, April 8, 2013, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation: "Auction Sales,”<em> New York Times</em> (March 6, 1866): 6.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "“Art Notes,” <em>The Round Table</em> 3 (March 10, 1866): 151.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Franklin W. Kelly, letter to William S. Talbot, May 5, 1982, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Franklin W. Kelly, letter to William S. Talbot, Oct. 21, 1982, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Harold Kirker, letter to Sherman Lee, July 10, 1969, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Emily de Forest, letter to Lockwood de Forest, Sept. 10, 1931, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Emily de Forest, letter to Lockwood de Forest, Sept. 10, 1931, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Lockwood de Forest, letter to Emily de Forest, Sept. 16, 1931, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Lockwood de Forest, letter to Emily de Forest, Sept. 16, 1931, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Emily de Forest, letter to Lockwood de Forest, Sept. 10, 1931, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Sander, Kathleen Waters. <em>Mary Elizabeth Garrett: Society and Philanthropy in the Gilded Age</em>. Baltimore, Md: Johns Hopkins University Press, 2008.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Emily de Forest, letter to Lockwood de Forest, Sept. 10, 1931, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Lockwood de Forest, letter to Emily de Forest, Sept. 16, 1931, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Harold Kirker, letter to Sherman Lee, July 10, 1969, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Emily de Forest, letter to Lockwood de Forest, Sept. 10, 1931, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Lockwood de Forest, letter to Emily de Forest, Sept. 16, 1931, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Harold Kirker, letter to Sherman Lee, July 10, 1969, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Marion de Forest, letter to James H. Dempsey, Jr., June 6, 1982, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "William S. Talbot, letter to Kevin Avery, Oct. 27, 1986, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Marion de Forest, letter to James H. Dempsey, Jr., June 6, 1982, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Harold Kirker, letter to Sherman Lee, July 10, 1969, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Taber de Forest, letter to William S. Talbot, Jan. 12, 1970, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Harold Kirker, letter to William S. Talbot, Sept. 18, 1969, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Marion de Forest, letter to James H. Dempsey, Jr., June 6, 1982, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Taber de Forest, letter to William S. Talbot, Jan. 12, 1970, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Taber de Forest, letter to William S. Talbot, Jan. 12, 1970, in CMA curatorial file.",
        page_number: null,
        url: null,
      },
      {
        citation:
          '"Mr. Church\'s Last Picture," <em>New York Times</em> (Jun. 7, 1860).',
        page_number: null,
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 185",
        url: "https://archive.org/details/CMAHandbook1966/page/n209",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 185",
        url: "https://archive.org/details/CMAHandbook1969/page/n209",
      },
      {
        citation:
          "National Endowment for the Arts, and Corcoran Gallery of Art. <em>Wilderness</em>. New York: Printed by Benson Litho; for sale by the Corcoran Gallery of Art, Washington, 1971.",
        page_number: "Cat. No. 69",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 229",
        url: "https://archive.org/details/CMAHandbook1978/page/n249",
      },
      {
        citation:
          'Carr, Gerald. "Frederic Edwin Church and Mexico." In <em>Arte, Historia e Identidad en America: Visiones Comparativas, </em>edited by Gustavo Curiel. Mexico: Universidad Nacional Autonoma de Mexico, 1994.',
        page_number: "Mentioned: p. 255",
        url: null,
      },
      {
        citation:
          "Keck, Michaela. <em>Walking in the Wilderness: The Peripatetic Tradition in Nineteenth-Century American Literature and Painting</em>. Heidelberg: Winter, 2006.",
        page_number: "p. 160, fig. 3.28",
        url: null,
      },
      {
        citation:
          'Cole, Mark. "New Spaces in the Cleveland Museum of Art." <em>American Art </em>24, no. 2 (Summer 2010)',
        page_number: "Mentioned: p. 16; Reproduced: p. 16",
        url: null,
      },
      {
        citation:
          "Mitchell, Mark DeSaussure, and George Inness. <em>George Inness in Italy</em>. Philadelphia, PA: Philadelphia Museum of Art, 2011.",
        page_number: "21. Reproduced: 22, fig. 7",
        url: null,
      },
      {
        citation:
          "Janson, H. W., Penelope J. E. Davies, and H. W. Janson. <em>Janson's History of Art: The Western Tradition.</em> Upper Saddle River, NJ: Prentice Hall, 2011.",
        page_number: "Mentioned and reproduced: P. 834-835, fig. 24.10",
        url: null,
      },
      {
        citation:
          "Raab, Jennifer. <em>Frederic Church: The Art and Science of Detail</em>. New Haven, CT : Yale University Press, 2015.",
        page_number: "Mentioned and reproduced: P. 93, fig. 40",
        url: null,
      },
      {
        citation:
          "Sotheby's (Firm). <em>American Paintings, Works on Paper and Sculpture: The Collection of A. Alfred Taubman, Volume Three.</em> New York: Sotheby's, 2015.",
        page_number: "Reproduced: P. 68",
        url: null,
      },
      {
        citation:
          "Avery, Kevin J. <em>Sanford R. Gifford in the Catskills.</em> Catskill, N.Y.: Thomas Cole National Historic Site, 2017.",
        page_number: "Reproduced: p. 14, fig. 12",
        url: null,
      },
      {
        citation:
          "Fortenberry, Diane, ed.<em> The Art Museum.</em> London; New York: Phaidon Press, 2017.",
        page_number: "Reproduced: P. 285, no. 4",
        url: null,
      },
      {
        citation:
          "Kornhauser, Elizabeth Mankin. \"Cole's Legacy.\" In <em>Thomas Cole's Journey: Atlantic Crossings. </em>Elizabeth Mankin Kornhauserand T. J. Barringer. New York: The Metropolitan Museum of Art, 2018.",
        page_number: "Reproduced: p. 239, fig. 141",
        url: null,
      },
      {
        citation:
          "Christie' New York. <em>Post-War and Contemporary Art; Afternoon Session. May 15, 2018.<br></em>",
        page_number: "Reproduced: p. 134",
        url: null,
      },
      {
        citation:
          "Crosman, Christopher B. <em>John Moore: After the Rain, October 24 - December 6, 2019.</em> New York: Hirschl and Adler Modern, 2019.",
        page_number: "Reproduced: P. 10",
        url: "",
      },
      {
        citation:
          "Green, Tyler. <em>Emerson's Nature and the Artists: Idea As Landscape, Landscape As Idea</em>. Munich: Prestel, 2021.",
        page_number:
          "Reproduced: Frontispiece, P. 102, fig. 43; Mentioned: P. 102",
        url: "",
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1965.233",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1965.233/1965.233_web.jpg",
        width: "900",
        height: "561",
        filename: "1965.233_web.jpg",
        filesize: "128410",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1965.233/1965.233_print.jpg",
        width: "3400",
        height: "2118",
        filename: "1965.233_print.jpg",
        filesize: "1184701",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1965.233/1965.233_full.tif",
        width: "5000",
        height: "3115",
        filename: "1965.233_full.tif",
        filesize: "46748860",
      },
    },
    updated_at: "2022-04-19 09:00:30.107000",
  },
  {
    id: 102578,
    accession_number: "1921.1239",
    share_license_status: "CC0",
    tombstone:
      "Portrait of Dora Wheeler, 1882–83. William Merritt Chase (American, 1849-1916). Oil on canvas; framed: 180.6 x 188.6 x 11 cm (71 1/8 x 74 1/4 x 4 5/16 in.); unframed: 159.8 x 166.4 cm (62 15/16 x 65 1/2 in.). The Cleveland Museum of Art, Gift of Mrs. Boudinot Keith in memory of  Mr. and Mrs. J. H. Wade 1921.1239",
    current_location: "208 American Gilded Age and Realism",
    title: "Portrait of Dora Wheeler",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1882–83",
    creation_date_earliest: 1882,
    creation_date_latest: 1883,
    creators: [
      {
        id: 3071,
        description: "William Merritt Chase (American, 1849-1916)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography: null,
        name_in_original_language: null,
        birth_year: "1849",
        death_year: "1916",
      },
    ],
    culture: ["America, 19th century"],
    technique: "oil on canvas",
    support_materials: [],
    department: "American Painting and Sculpture",
    collection: "American - Painting",
    type: "Painting",
    measurements:
      "Framed: 180.6 x 188.6 x 11 cm (71 1/8 x 74 1/4 x 4 5/16 in.); Unframed: 159.8 x 166.4 cm (62 15/16 x 65 1/2 in.)",
    dimensions: {
      framed: {
        height: 1.806,
        width: 1.886,
        depth: 0.11,
      },
      unframed: {
        height: 1.598,
        width: 1.664,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline:
      "Gift of Mrs. Boudinot Keith in memory of  Mr. and Mrs. J. H. Wade",
    copyright: null,
    inscriptions: [
      {
        inscription: "signed lower right:  WM M. Chase [WM in monogram]",
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 312517,
          title:
            "The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition",
          description:
            "<i>The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 26-October 12, 1936).",
          opening_date: "1936-06-26T04:00:00",
        },
        {
          id: 312462,
          title: "Exhibition of American Painting from 1860 Until Today",
          description:
            "<i>Exhibition of American Painting from 1860 Until Today</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 23-October 4, 1937).",
          opening_date: "1937-06-23T04:00:00",
        },
        {
          id: 302330,
          title: "Heritage and Horizon: American Painting 1776 - 1976",
          description:
            "<i>Heritage and Horizon: American Painting 1776 - 1976</i>. Albright-Knox Art Gallery, Buffalo, NY (organizer) (March 7-April 11, 1976); The Detroit Institute of Arts, Detroit, MI (May 2-June 13, 1976); The Toledo Museum of Art, Toledo, OH (July 4-August 15, 1976); The Cleveland Museum of Art, Cleveland, OH (September 8-October 24, 1976).",
          opening_date: "1976-03-07T05:00:00",
        },
        {
          id: 309658,
          title: "Portraiture: The Image of the Individual",
          description:
            "<i>Portraiture: The Image of the Individual</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (November 22, 1983-January 22, 1984).",
          opening_date: "1983-11-22T05:00:00",
        },
        {
          id: 215111,
          title:
            'American Impressionism, Images "of hope, of life, of promise"',
          description:
            '<i>American Impressionism, Images "of hope, of life, of promise"</i>. Worcester Art Museum, Worcester, MA (organizer) (October 4, 1997-January 4, 1998).',
          opening_date: "1997-10-04T00:00:00",
        },
        {
          id: 207232,
          title:
            "Candace Wheeler:  The Art and Enterprise of American Design, 1875-1900",
          description:
            "<i>Candace Wheeler:  The Art and Enterprise of American Design, 1875-1900</i>. The Metropolitan Museum of Art, New York, NY (organizer) (October 10, 2001-January 6, 2002).",
          opening_date: "2001-10-10T00:00:00",
        },
        {
          id: 184052,
          title: "Cleveland Collects American Art of the Gilded Age",
          description:
            "<i>Cleveland Collects American Art of the Gilded Age</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (February 23-May 18, 2003).",
          opening_date: "2003-02-23T00:00:00",
        },
        {
          id: 224230,
          title:
            "After Whistler: The Artist and His Influence on American Painting",
          description:
            "<i>After Whistler: The Artist and His Influence on American Painting</i>. High Museum of Art, Atlanta, GA (organizer) (November 22, 2003-February 8, 2004); The Detroit Institute of Arts, Detroit, MI (March 13-June 6, 2004).",
          opening_date: "2003-11-15T00:00:00",
        },
        {
          id: 213635,
          title: "Americans in Paris",
          description:
            "<i>Americans in Paris</i>. National Gallery, London, London WC2N 5DN (organizer) (February 22-May 21, 2006); Museum of Fine Arts, Boston, Boston, MA (June 25-September 24, 2006); The Metropolitan Museum of Art, New York, NY (October 16, 2006-January 28, 2007).",
          opening_date: "2006-02-22T00:00:00",
        },
        {
          id: 213855,
          title: "William Merritt Chase: A Modern Master",
          description:
            "<i>William Merritt Chase: A Modern Master</i>. The Phillips Collection, Washington, DC (organizer) (June 4-September 11, 2016); Museum of Fine Arts, Boston, Boston, MA (October 9, 2016-January 16, 2017).",
          opening_date: "2016-06-04T00:00:00",
        },
      ],
      legacy: [
        '<em>Salon.</em> Paris, France (1883).<br><br>Boston Art Club, Exhibition of Pictures, Studies, and Sketches by Mr. Wm. M. Chase under the Auspices of the American Art Association, November 13-December 4, 1886, cat. 10, as Portrait of Miss Dora Wheeler.<br><br>New York Moore\'s Art Galleries, Paintings by Mr. William M. Chase, March 2-3, 1887, cat. 115, [lent by Miss. Wheeler].Pittsburgh, Carnegie Institute, Survey of American Painting (1940), no. 155, pl. 49.<br><br>Santa Barbara, Santa Barbara Museum of Art, Painting today and Yesterday in the United States (Calif. 1941), no. 27.New York, Portraits, Inc., Portraits of American Women, from Romanticism to Surrealism (5-29 December 1945); cat. no. 15.<br><br>Indianapolis, John Herron Art Institute, Chase Centennial Exhibition: Commemorating the Birth of William Merritt Chase, November 1, 1849 (1949), no. 15, illus.<br><br>New York, Metropolitan Museum of Art, The 75th Anniversary Exhibition of Painting &amp; Sculpture by 75 Artists Associated with the Art Students League of New York, (1951), xiii, no. 6, p. 1, illus. p. 6.<br><br>Philadelphia, Pennsylvania Academy of the Fine Arts, 150th Anniversary Exhibition (15 January-13 March 1955); cat. no. 59, not illus.Southampton, Long Island, The Parrish Art Museum, William Merritt Chase: A Retrospective Exhibition (New York 1957), illus. p. 47, no. 31.<br><br>Santa Barbara, University of California Art Gallery; La Jolla (Calif.) Museum of Art; San Francisco, California Palace of the Legion of Honor; Seattle Art Museum; New York, Gallery of Modern Art Including the Huntington Harford Collection, First West Coast Exhibition of Paintings by Willaim Merritt Chase (1964/65), p. i, no. 8, illus. pl. 8.<br><br>Buffalo, Albright-Knox Art Gallery; Detroit Institute of Arts; Toledo Museum of Art; Cleveland Museum of Art, Heritage and Horizon: American Painting 1776-1976 (1976), no. 31, illus.<br><br>Los Angeles, Los Angeles County Museum of Art, American Portraiture in the Grand Manner: 1720-1920, (1981/82), traveled to Smithsonian Institution, National Portrait Gallery p. 68, illus. p. 69, Fig. 14.<br><br>Akron, Akron Art Museum, William Merritt Chase: Portraits (1982), pp. 10, 12-14, 46, illus. p. 13, pl. 1.<br><br>Seattle, University of Washington Henry Art Gallery, William Merritt Chase, 1849-1916: A Leading Spirit in American Art (1983), pp. 63 &amp; 175, illus. p. 19, Fig. 16 &amp; p. 172.<br><br>New York, Metropolitan Museum of Art, In Pursuit of Beauty: Americans and the Aesthetic Movement, (1986/87), pp. 41 &amp; 406-407, illus. p. 325, Fig. 9.15 &amp; p. 22.<br><br>New York, The Metropolitan Museum of Art, American Impressionism and Realism: The Painting of Modern Life, 1885-1915 (1994), pp. 38-41, illus. p. 39, Fig. 29.<br><br>Boston, Museum of Fine Arts, Dennis Miller Bunker: American Impressionist, (1994), pp. 46- 7, illus. p. 46, Fig. 16.<br><br>The Cleveland Museum of Art (06/21/2005 - 09/11/2005); "CMA Highlights"',
        "<em>Internationale Kunstausstellung</em>, Crystal Palace, Munich, Germany (1883).",
        "<em>Annual Exhibition</em>. Calumet Club, New York, NY ( 1884).",
        "<em>National Academy of Design, Society of American Artists Seventh Annual Exhibition</em>, New York, NY (May 26-June 21,1884).",
        "<em>Inter-State Industrial Exposition of Chicago Twelfth Annual Exhibition</em>. Art Hall Gallery D, Chicago, IL (September 3-October 18,1884).",
      ],
    },
    provenance: [
      {
        description:
          "Dora Wheeler, later Mrs. Boudinot Keith [1856-1940], New York, NY, by donation to the Cleveland Museum of Art",
        citations: [],
        footnotes: [],
        date: "1883-1921",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, Ohio",
        citations: [],
        footnotes: [],
        date: "1921-",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: [],
    fun_fact:
      "Chase and Wheeler worked together to raise money for constructing the Statue of Liberty's pedestal.",
    digital_description: null,
    wall_description:
      "Dora Wheeler became Chase's first student when he returned from overseas study in Munich and set up a teaching studio in New York. At the time, few American artists accepted women as private pupils. After her course of study, Wheeler joined her mother in launching a successful decorating firm, one of the first businesses in the country to be operated entirely by women. For the firm, she designed luxurious textiles, and the embroidered silk tapestry that fills the background in her portrait references her occupational interest. Chase's portrait was awarded a gold medal at an international exhibition of contemporary art in Munich in 1883, and later that year was also shown in Paris. At some later point, the painting was acquired by the sitter, who subsequently donated it to the museum.",
    external_resources: {
      wikidata: [],
      internet_archive: [],
    },
    citations: [
      {
        citation:
          'Brownell, W. C. "American Pictures at the Salon." <em>The Magazine of Art </em>6 (1883): 492-501.',
        page_number: "Mentioned: P. 494-495",
        url: null,
      },
      {
        citation:
          "Dumas, F. G., Henry Houssaye, and Ludovic Baschet. <em>[Paris salon de ...]</em>. Paris, France: Liepmannssohn ed Dufour, 1883.",
        page_number: "Reproduced: no. 506",
        url: null,
      },
      {
        citation:
          "Internationale Kunstausstellung. <em>Illustrierter Katalog der internationalen Kunstausstellung im königl. Glaspalaste in München</em>. Munchen, Germany : Knorr &amp; Hirth, 1883-1937",
        page_number: "Reproduced: p. 347",
        url: null,
      },
      {
        citation:
          "Society of American Artists. <em>Catalogue of the Exhibition</em>. New York, NY: [Society of American Artists], 1800.",
        page_number: "Reproduced: no. 24",
        url: null,
      },
      {
        citation:
          "<em>Catalogue of the Art Hall of the Inter-State Industrial Exposition of Chicago, 1884 : Twelfth Annual Exhibition Open from September 3d until October 18th</em>. Chicago, IL: Rand, McNally, 1884.",
        page_number: "Reproduced: no. 354",
        url: null,
      },
      {
        citation:
          '"Mr. William M. Chase\'s Art." <em>The Art Interchange </em>12, no. 13 (June 19, 1884): 148.',
        page_number: "Mentioned: P. 148",
        url: null,
      },
      {
        citation:
          'Pecht. "A German Critic on American Art." <em>The Art Amateur</em> 11, no. 4 (1884): 76-79.',
        page_number: "Mentioned: P. 78",
        url: "www.jstor.org/stable/25628198.",
      },
      {
        citation:
          '"The Brush." <em>Chicago Tribune. </em>(September 14, 1884): 17.',
        page_number: "Mentioned: P. 17",
        url: null,
      },
      {
        citation:
          '"A Boston Estimate of a New York Painter." <em>The Art Interchange </em>17, no. 12 (December 4, 1886): 179.',
        page_number: "Mentioned: P. 179",
        url: null,
      },
      {
        citation:
          "Wheeler, Candace. <em>Yesterdays in a Busy Life</em>. New York: Harper, 1918.",
        page_number: "Mentioned: P. 253",
        url: null,
      },
      {
        citation:
          'J.C.G. "Painting by Chase Given to Cleveland." <em>American Art News</em> 20, no. 15 (Jan. 21, 1922): 5.',
        page_number: "Mentioned: P. 5",
        url: "http://www.jstor.org/stable/25589899.",
      },
      {
        citation:
          "Milliken, W. M. “Portrait of Miss Dora Wheeler by William Merritt Chase.” <em>The Bulletin of the Cleveland Museum of Art</em> 9, no. 3 (1922): 39–42.",
        page_number: "Reproduced: P. 37",
        url: null,
      },
      {
        citation:
          "Cortissoz, Royal. <em>American Artists</em>. New York: C. Scribner's Sons, 1923.",
        page_number: "Reproduced: P. 166",
        url: null,
      },
      {
        citation:
          'Whiting, Frederic. "The Cleveland Museum of Art." <em>Art and Archaeology </em>16 (November 1923): 187-194.',
        page_number: "Reproduced: P. 191.",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art</em>. Cleveland, OH: The Cleveland Museum of Art, 1925.",
        page_number: "Mentioned and Reproduced: 32",
        url: "https://archive.org/details/CMAHandbook_80839/page/n34",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art</em>. Cleveland, OH: The Cleveland Museum of Art, 1928.",
        page_number: "Mentioned and Reproduced: p. 41",
        url: "https://archive.org/details/CMAHandbook1928/page/n45",
      },
      {
        citation:
          "Cleveland Museum of Art. Catalogue of the Twentieth Anniversary Exhibition of the Cleveland Museum of Art: The Official Art Exhibit of the Great Lakes Exposition : June Twenty-Sixth to October Fourth 1936. [Cleveland, Ohio]: [Cleveland Museum of Art], 1936.",
        page_number: "no. 379",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. Catalogue of an Exhibition of American Painting from 1860 Until Today at the Cleveland Museum of Art. [Cleveland]: [Printed by the Artcraft Printing Co.], 1937.",
        page_number: "p. 16, no. 30, pl. XIV, no. 30",
        url: null,
      },
      {
        citation:
          "Lane, James W. “This YEAR the CARNEGIE NATIONAL: Pittsburgh’s Brilliant Survey of 160 Years of U.S. Painting.” <em>ARTnews</em> 39, no. 4 (October 26, 1940): 7–18.",
        page_number: "Mentioned and reproduced: P. 15-16",
        url: null,
      },
      {
        citation:
          "Saint-Gaudens, Homer. <em>The American Artist and His Times</em>. New York: Dodd, Mead &amp; Company, 1941.",
        page_number: "Reproduced: P. 185, pl. 33",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art, and Henry Sayles Francis. <em>Paintings in the Cleveland Museum of Art</em>. Picture Book, No. 1. Cleveland: Cleveland Museum of Art, 1945.",
        page_number: "Reproduced: P. 14",
        url: "https://archive.org/details/CMAPaintings1945/mode/2up",
      },
      {
        citation:
          "<em>Paintings in the Cleveland Museum of Art.</em> [Cleveland]: The Cleveland Museum of Art, 1945.",
        page_number: "Reproduced: p. 14",
        url: "https://archive.org/details/CMAPaintings1945/page/n22",
      },
      {
        citation:
          'Flexner, James Thomas. "The Great Chase." <em>ARTnews </em>48, no. 8 (December 1949): 32-34; 60.',
        page_number: "Reproduced: P. 33; Mentioned: P. 34",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland, OH: The Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 538",
        url: "https://archive.org/details/CMAHandbook1958/page/n99",
      },
      {
        citation:
          'Neumeyer, A. "Chase, William Merritt." <em>Kindlers Malerei Lexikon: 1000 Malersignaturen, 1200 farbige Reproducktionen, 3000 schwarzweisse Reproduktionen in sechs Bänden.</em> Zürich : Kindler Verlag, 1964.',
        page_number: "Mentioned: Band I, P. 730",
        url: null,
      },
      {
        citation:
          'Francis, Henry. "Portraits by Wheeler and Chase." <em>The Bulletin of The</em> <em>Cleveland Museum of Art</em> LII, no. 1 (January, 1965):19-22.',
        page_number: "Reproduced: p. 20, fig. 2",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 188",
        url: "https://archive.org/details/CMAHandbook1966/page/n212",
      },
      {
        citation:
          "Wittke, Carl Frederick. <em>The First Fifty Years: The Cleveland Museum of Art, 1916-1966.</em> [Cleveland]: John Huntington Art and Polytechnic Trust, Cleveland Museum of Art, 1966.",
        page_number: "Mentioned: P. 88",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 188",
        url: "https://archive.org/details/CMAHandbook1969/page/n212",
      },
      {
        citation:
          "Milgrome, David. <em>The Art of William Merrit Chase</em>. 1970.",
        page_number: "Mentioned: p. 74-76; Reproduced: p. p. 206",
        url: null,
      },
      {
        citation:
          "Flexner, James Thomas. <em>Nineteenth Century American Painting</em>. New York, NY: Putnam, 1970.",
        page_number: "Reproduced: p. 166; Mentioned: p. 171",
        url: null,
      },
      {
        citation:
          "Flexner, James Thomas. <em>Nineteenth Century American Painting</em>. New York: Putnam, 1970.",
        page_number: "Reproduced: P. 166; mentioned: P. 171",
        url: null,
      },
      {
        citation:
          "Wilmerding, John, and R. Peter Mooz. <em>The Genius of American Painting</em>. London. United Kingdom: Weidenfeld &amp; Nicolson, 1973.",
        page_number: "Mentioned: p. 165-167; Reproduced: p. 166",
        url: null,
      },
      {
        citation:
          "Albright-Knox Art Gallery, Detroit Institute of Arts, and Toledo Museum of Art. <em>Heritage and Horizon: American Painting, 1776-1976. </em>[Toledo]: Toledo Museum of Art, 1976.",
        page_number: "Reproduced: P. 43",
        url: null,
      },
      {
        citation:
          "Pisano, Ronald G. “Teaching Career of William Merritt Chase.” <em>American Artist</em> 40 (May 1976): 26-33, 63-66..",
        page_number: "Mentioned: P. 28; reproduced: P. 30",
        url: null,
      },
      {
        citation:
          "Young, Mahonri Sharp. <em>American Realists, Homer to Hopper</em>. New York, NY: Watson-Guptill Publications, 1977.",
        page_number: "Reproduced: p. 100",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 233",
        url: "https://archive.org/details/CMAHandbook1978/page/n253",
      },
      {
        citation:
          'Marling, Karal Ann. "Portrait of the Artist as a Young Woman: Miss Dora Wheeler." <em>The Bulletin of the Cleveland Museum of Art</em> 65, no. 2 (1978): 47-57.',
        page_number: "Reproduced: P. 46; mentioned: P. 47-48",
        url: "http://www.jstor.org/stable/25159564",
      },
      {
        citation:
          '"Les Chronique des Arts." <em>Gazette des Beaux-Arts</em> (November 1978): 27.',
        page_number: "Reproduced: P. 27, fig. 31",
        url: null,
      },
      {
        citation:
          "Pisano, Ronald G. <em>William Merritt Chase</em>. New York, NY: Watson-Guptill, 1979.",
        page_number: "Mentioned: p. 8, 29: Reproduced: p. 29",
        url: null,
      },
      {
        citation:
          "Quick, Michael, Marvin S. Sadik, and William H. Gerdts. <em>American Portraiture in the Grand Manner, 1720-1920</em>. Los Angeles, CA: Los Angeles County Museum of Art, 1981.",
        page_number: "Mentioned: p. 68; Reproduced: p. 69",
        url: null,
      },
      {
        citation:
          "Ludwig, Horst. <em>Münchner Maler im 19. Jahrhundert</em>. München, Germany: Bruckmann, 1981.",
        page_number: "Mentioned: p. 173-174; Reproduced: p. 173",
        url: null,
      },
      {
        citation:
          "<em>William Merritt Chase: Portraits, Akron Art Museum, 5 June-29 August, 1982</em>. Akron, Ohio (70 E. Market St., Akron 44308): The Museum, 1982.",
        page_number: "Mentioned: p. 10, 12-14; Reproduced: P. 13",
        url: null,
      },
      {
        citation:
          'Betsky, Celia. "In the Artists Studio." <em>Portfolio</em> 4 (January-February 1982): 38-39.',
        page_number: "Reproduced: P. 39",
        url: null,
      },
      {
        citation:
          "Bienenstock, Jennifer A. Martin. <em>The Formation and Early Years of the Society of American Artists, 1877-1884</em>. 1983.",
        page_number: "Mentioned: p. 163-183, 316, 405-407",
        url: null,
      },
      {
        citation:
          "Johnston, Sona. <em>American Paintings, 1750-1900, from the Collection of the Baltimore Museum of Art</em>. Baltimore, MD: The Museum, 1983.",
        page_number: "Reproduced:.p. 69",
        url: null,
      },
      {
        citation:
          "Pisano, Ronald G. <em>A Leading Spirit in American Art: William Merritt Chase, 1849-1916</em>. Seattle, WA: Henry Art Gallery, University of Washington, 1983.",
        page_number: "Mentioned: p. 63,175; Reproduced: p. 16, 172",
        url: null,
      },
      {
        citation:
          "Boyle, Richard J. <em>American Impressionism</em>. Boston, MA: New York Graphic Society, 1974.",
        page_number: "Mentioned: P. 182-206; Reproduced: p. 185",
        url: null,
      },
      {
        citation:
          "Bolger, Doreen. <em>In Pursuit of Beauty: Americans and the Aesthetic Movement</em>. New York, NY: Metropolitan Museum of Art, 1986.",
        page_number: "Mentioned: p. 41, 406-407; Reproduced: p. 325",
        url: null,
      },
      {
        citation:
          "Simon, Robin. <em>The Portrait in Britain and America: With a Biographical Dictionary of Portrait Painters, 1680-1914</em>. Oxford, United Kingdom: Phaidon, 1987.",
        page_number: "Mentioned: p. 32; Reproduced: p. 45",
        url: null,
      },
      {
        citation:
          "Fink, Lois Marie. <em>American Art at the Nineteenth-Century Paris Salons</em>. Washington, DC.: National Museum of American Art, Smithsonian Institution, 1990.",
        page_number: "Mentioned: p. 240, 329; Reproduced: p. 266",
        url: null,
      },
      {
        citation:
          "Bryant, Keith L. <em>William Merritt Chase, a Genteel Bohemian</em>. Columbia, MO: University of Missouri Press, 1991.",
        page_number: "Mentioned: p. 102-104, 136; Reproduced: p. 103",
        url: null,
      },
      {
        citation:
          "Hiesinger, Ulrich W. <em>Impressionism in America: The Ten American Painters</em>. Munich, Germany: Prestel, 1991.",
        page_number: "Reproduced: p, 81",
        url: null,
      },
      {
        citation:
          "Butor, Michel, Jennifer Martin, Claude Massu, Sarah Nichols, Alexandra Parigoris, Denys Riout, and David Travis. <em>L'Art des Etats-Unis</em>. Paris, France: Citadelles &amp; Mazenod, 1992.",
        page_number: "Mentioned: p. 209-210; Reproduced: p. 548",
        url: null,
      },
      {
        citation:
          "Chong, Alan. <em>European &amp; American Painting in the Cleveland Museum of Art: A Summary Catalogue</em>. Cleveland,OH: Cleveland Museum of Art, 1993.",
        page_number: "Reproduced: p. 36",
        url: null,
      },
      {
        citation:
          ".Weinberg, H. Barbara, Doreen Bolger, and David Park Curry. <em>American Impressionism and Realism: The Painting of Modern Life, 1885-1915</em>. New York, NY: Metropolitan Museum of Art, 1994.",
        page_number: "Mentioned: p. 38-41; Reproduced: p.",
        url: null,
      },
      {
        citation:
          "Hirshler, Erica E. <em>Dennis Miller Bunker: American Impressionist</em>. Boston, MA: Museum of Fine Arts Boston, 1994.",
        page_number: "Mentioned and reproduced: p. 46-47",
        url: null,
      },
      {
        citation:
          "Fuller, Margaret, and Donna Dickenson. <em>Woman in the Nineteenth Century and Other Writings</em>. Oxford, NY: Oxford University Press, 1994.",
        page_number: "Reproduced: cover",
        url: null,
      },
      {
        citation:
          "Baigell, Matthew. <em>A Concise History of American Painting and Sculpture</em>. New York, NY: IconEditions, 1996.",
        page_number: "Mentioned and reproduced: p. 161",
        url: null,
      },
      {
        citation:
          "Van Hook, Bailey. <em>Angels of Art: Women and Art in American Society, 1876-1914</em>. University Park, PA: Pennsylvania State University Press, 1996.",
        page_number: "Mentioned: p. 49-67; Reproduced: p. 65",
        url: null,
      },
      {
        citation:
          "Brigham, David R. American Impressionism: Paintings of Promise. Worcester, Mass: Worcester Art Museum, 1997.",
        page_number: "pp. 25-26, illus. p. 53, Pl. 13",
        url: null,
      },
      {
        citation:
          "Brigham, David R. <em>American Impressionism: Paintings of Promise</em>. Worcester, MA: Worcester Art Museum, 1997.",
        page_number: "Mentioned: p. 25-26; Reproduced: p. 53",
        url: null,
      },
      {
        citation:
          "Turner, Jane. <em>Encyclopedia of American Art Before 1914</em>. New York, NY: Grove's Dictionaries, 2000.",
        page_number: "Reproduced: p. 90",
        url: null,
      },
      {
        citation:
          "Groseclose, Barbara S. <em>Nineteenth-Century American Art</em>. New York, NY: Oxford University Press, 2000.",
        page_number: "Mentioned: p. 49-59; Reproduced: p. 55",
        url: null,
      },
      {
        citation:
          "Peck, Amelia, and Carol Irish. Candace Wheeler: The Art and Enterprise of American Design, 1875-1900. New York: Metropolitan Museum of Art, 2001.",
        page_number: "cat. no. 47, illus. p. 175",
        url: "http://libmma.contentdm.oclc.org/cdm/ref/collection/p15324coll10/id/48949",
      },
      {
        citation:
          "May, Sally Ruth, Jane Takac, and Barbara J. Bradley. <em>Knockouts: A Pocket Guide</em>. Cleveland, OH: Cleveland Museum of Art, 2001.",
        page_number: "Mentioned: p. 50-51; Reproduced: p. 50",
        url: null,
      },
      {
        citation:
          "Merrill, Linda, and James McNeill Whistler. After Whistler: The Artist and His Influence on American Painting. Atlanta: High Museum of Art, 2003.",
        page_number: "exh. cat no. 22, p.150-151",
        url: null,
      },
      {
        citation:
          "Tinterow, Gary, Geneviève Lacambre, and Deborah L. Roldán. <em>Manet/Velázquez: The French Taste for Spanish Painting</em>. New York, NY: Metropolitan Museum of Art, 2003.",
        page_number: "Reproduced: p. 290, fig. 10.34",
        url: null,
      },
      {
        citation:
          "Merrill, Linda, and James McNeill Whistler. <em>After Whistler: The Artist and His Influence on American Painting</em>. Atlanta, GA: High Museum of Art, 2003.",
        page_number: "Mentioned and reproduced: p. 150-151",
        url: null,
      },
      {
        citation:
          "Merrill, Linda, and James McNeill Whistler. <em>After Whistler: The Artist and His Influence on American Painting</em>. Atlanta, GA: High Museum of Art, 2003.",
        page_number: "Mentioned and reproduced: p. 150-151",
        url: null,
      },
      {
        citation:
          "Curry, David Park. <em>James Mcneill Whistler: Uneasy Pieces</em>. Richmond, VA: Virginia Museum of Fine Arts in association with Quantuck Lane Press, 2004.",
        page_number: "Mentioned: p. 164-219; Reproduced: p. 197",
        url: null,
      },
      {
        citation:
          "Weber, Bruce, Sarah Kate Gillespie, and William Merritt Chase. <em>Chase Inside and Out: the Aesthetic Interiors of William Merritt Chase</em>. New York, NY: Berry-Hill Galleries, 2004.",
        page_number: "Mentioned: p. 32-34; Reproduced: p. 33",
        url: null,
      },
      {
        citation:
          "Adler, Kathleen, Erica E. Hirshler, H. Barbara Weinberg, David Park Curry, Rodolphe Rapetti, and Christopher Riopelle. Americans in Paris, 1860-1900. London: National Gallery, 2006.",
        page_number: "pp. 34, 236, plate 14",
        url: null,
      },
      {
        citation:
          "Adler, Kathleen, Erica E. Hirshler, H. Barbara Weinberg, David Park Curry, Rodolphe Rapetti, and Christopher Riopelle. <em>Americans in Paris, 1860-1900</em>. London, United Kingdom: National Gallery, 2006.",
        page_number: "Mentioned: p. 34, 236; Reproduced: p. 35",
        url: null,
      },
      {
        citation:
          "Connor, Holly Pyne. <em>Off the Pedestal: New Women in the Art of Homer, Chase, and Sargent</em>. Newark, NJ.: Newark Museum, 2006.",
        page_number: "Mentioned: p. 40, 43; Reproduced: p. 44",
        url: null,
      },
      {
        citation:
          "Brooklyn Museum, Teresa A. Carbone, Barbara Dayer Gallati, and Linda S. Ferber. <em>American Paintings in the Brooklyn Museum: Artists Born by 1876</em>. New York, NY: Brooklyn Museum, 2006.",
        page_number: "Mentioned:  p. 362,369",
        url: null,
      },
      {
        citation:
          "Pisano, Ronald G., William Merritt Chase, and D. Frederick Baker. <em>The Complete Catalogue of Known and Documented Work by William Merritt Chase (1849-1916)</em>. New Haven, CT: Yale University Press, 2006.",
        page_number: "Mentioned: p. 27, 50-51; Reproduced: p. 50",
        url: null,
      },
      {
        citation:
          "Goldin, Marco. <em>America!: storie di pittura dal nuovo mondo</em>. Treviso, Italy : Linea d’ombra libri, 2007.",
        page_number: "Reproduced: p. 380",
        url: null,
      },
      {
        citation:
          "Gallati, Barbara Dayer, and Ortrud Westheider. <em>High Society: American Portraits of the Gilded Age : Bucerius Kunst Forum, Hamburg, June 7-August 31, 2008</em>. Munich, Germany: Hirmer, 2008.",
        page_number: "Reproduced: p. 48, fig. 2",
        url: null,
      },
      {
        citation:
          "Miller, Angela L., Janet Catherine Berlo, Bryan Jay Wolf, and Jennifer L. Roberts. <em>American Encounters: Art, History, and Cultural Identity</em>. Upper Saddle River, NJ: Pearson Education, Inc., 2008.",
        page_number: "Reproduced: p. 48, fig. 2",
        url: null,
      },
      {
        citation:
          "Rudolph, William Keyse, A. Kate Sheerin, Chloe Barnett, and Julian Onderdonk. <em>Julian Onderdonk: American Impressionist</em>. New Haven, CT: Yale University Press, 2008.",
        page_number: "Mentioned: p. 17-18; Reproduced: p. 18",
        url: null,
      },
      {
        citation:
          "Hirshler, Erica E., <em>Sargent's Daughters: The Biography of a Painting</em>. Boston, MA: MFA Publications, 2009.",
        page_number: "Reperoduced: p. 111",
        url: null,
      },
      {
        citation:
          "Ringelberg, Kirstin. <em>Redefining Gender in American Impressionist Studio Paintings: Work Place/Domestic Space</em>. Surrey, UK, England: Ashgate, 2010.",
        page_number: "Mentioned: p. 87-88; Reproduced:  p. 87",
        url: null,
      },
      {
        citation:
          "Reason, Akela, and Thomas Eakins. <em>Thomas Eakins and the Uses of History</em>. Philadelphia, PA: University of Pennsylvania Press, 2010.",
        page_number: "Reproduced: p. 78, fig. 31",
        url: null,
      },
      {
        citation:
          "Marter, Joan M. <em>The Grove Encyclopedia of American Art</em>. New York, NY: Oxford University Press, 2011.",
        page_number: "Mentioned and reproduced: p. 445-446",
        url: null,
      },
      {
        citation:
          "Pohl, Frances K. <em>Framing America: A Social History of American Art</em>. New York, NY: Thames &amp; Hudson, 2012.",
        page_number: "Reproduced: p. 289, fig. 5.38",
        url: null,
      },
      {
        citation:
          "Marozeau, Maureen, and Matthieu de Sainte-Croix. <em>Art: 365 histoires pour épater la galerie</em>. Paris, France: La Martinière, 2012.",
        page_number: "Mentioned and reproduced: p. 36-37",
        url: null,
      },
      {
        citation:
          "Major, Judith K. <em>Mariana Griswold Van Rensselaer: A Landscape Critic in the Gilded Age</em>. Charlottesville, VA: University of Virginia Press, 2013.",
        page_number: "Reproduced: p. 31",
        url: "<http://site.ebrary.com/id/10672483>",
      },
      {
        citation:
          "Hirshler, Erica E. <em>William Merritt Chas</em>e. Boston, Mass.: MFA Publications, Museum of Fine Arts, 2016.",
        page_number: "Reproduced: p. 24-25, 33",
        url: null,
      },
      {
        citation:
          "Smithgall, Elsa. <em>William Merritt Chase: A Modern Master.</em> Washington, D.C.: The Phillips Collection; New Haven; London: in association with Yale University Press, 2016.",
        page_number: "Reproduced: p. 103, pl. 16",
        url: null,
      },
      {
        citation:
          'Green, Dominic. "The Body Eclectic." <em>Art &amp; Antiques</em>, (Summer 2016): 88-93.',
        page_number: "Reproduced: p. 89",
        url: null,
      },
      {
        citation:
          'Smithgall, Elsa. "William Merritt Chase: A Modern Master". <em>American Art Review</em>. 28, no.4 (Aug. 2016): 48-55, 111-112.',
        page_number: "Reproduced: p. 53",
        url: null,
      },
      {
        citation:
          "Adams, Henry. <em>What's American About American Art?: A Gallery Tour in the Cleveland Museum of Art</em>. Cleveland, OH: Cleveland Museum of Art, 2008.",
        page_number: "Mentioned and reproduced: p. 104-105",
        url: null,
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1921.1239",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1921.1239/1921.1239_web.jpg",
        filename: "1921.1239_web.jpg",
        filesize: "175673",
        width: "939",
        height: "893",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1921.1239/1921.1239_print.jpg",
        filename: "1921.1239_print.jpg",
        filesize: "8163185",
        width: "3400",
        height: "3254",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1921.1239/1921.1239_full.tif",
        filename: "1921.1239_full.tif",
        filesize: "71824808",
        width: "5000",
        height: "4786",
      },
    },
    updated_at: "2022-01-04 14:51:06.211000",
  },
  {
    id: 128391,
    accession_number: "1951.355",
    share_license_status: "CC0",
    tombstone:
      "Portrait of a Family Playing Music, 1663. Pieter de Hooch (Dutch, 1629-1684). Oil on canvas; framed: 124.5 x 142.5 x 7 cm (49 x 56 1/8 x 2 3/4 in.); unframed: 98.7 x 116.7 cm (38 7/8 x 45 15/16 in.). The Cleveland Museum of Art, Gift of the Hanna Fund 1951.355",
    current_location: "215 French, German, and Dutch",
    title: "Portrait of a Family Playing Music",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1663",
    creation_date_earliest: 1663,
    creation_date_latest: 1663,
    creators: [
      {
        id: 2633,
        description: "Pieter de Hooch (Dutch, 1629-1684)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography: null,
        name_in_original_language: null,
        birth_year: "1629",
        death_year: "1684",
      },
    ],
    culture: ["Netherlands, 17th century"],
    technique: "oil on canvas",
    support_materials: [],
    department: "European Painting and Sculpture",
    collection: "P - Netherlandish-Dutch",
    type: "Painting",
    measurements:
      "Framed: 124.5 x 142.5 x 7 cm (49 x 56 1/8 x 2 3/4 in.); Unframed: 98.7 x 116.7 cm (38 7/8 x 45 15/16 in.)",
    dimensions: {
      framed: {
        height: 1.245,
        width: 1.425,
        depth: 0.07,
      },
      unframed: {
        height: 0.987,
        width: 1.167,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Gift of the Hanna Fund",
    copyright: null,
    inscriptions: [
      {
        inscription: 'Signed lower left: "P D HOOCH/ 63"',
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 300448,
          title: "Dutch Painting, The Golden Age",
          description:
            "<i>Dutch Painting, The Golden Age</i>. The Cleveland Museum of Art (organizer) (January 5-February 27, 1955).",
          opening_date: "1955-01-05T05:00:00",
        },
        {
          id: 335898,
          title: "Old Masters from American Collections",
          description:
            "<i>Old Masters from American Collections</i>. Newark Museum, Newark, NJ (organizer) (November 20, 1955-January 2, 1956).",
          opening_date: "1955-11-20T05:00:00",
        },
        {
          id: 335895,
          title: "25th Anniversary Exhibition",
          description:
            "<i>25th Anniversary Exhibition</i>. Joslyn Art Museum, Omaha, NE (organizer) (November 29, 1956-January 2, 1957).",
          opening_date: "1956-11-29T05:00:00",
        },
        {
          id: 301477,
          title: "In Memoriam: Leonard C. Hanna, Jr.",
          description:
            "<i>In Memoriam: Leonard C. Hanna, Jr.</i>. The Cleveland Museum of Art (organizer) (March 4-April 7, 1958).",
          opening_date: "1958-03-04T05:00:00",
        },
        {
          id: 335901,
          title: "Paintings of 17th Century Dutch Interiors",
          description:
            "<i>Paintings of 17th Century Dutch Interiors</i>. The Nelson-Atkins Museum of Art (organizer) (November 30, 1967-January 7, 1968).",
          opening_date: "1967-11-30T05:00:00",
        },
        {
          id: 301805,
          title: "Dutch Art and Life in the Seventeenth Century",
          description:
            "<i>Dutch Art and Life in the Seventeenth Century</i>. The Cleveland Museum of Art (July 10-September 2, 1973).",
          opening_date: "1973-07-10T04:00:00",
        },
        {
          id: 310235,
          title: "Lutes, Lovers, and Lyres: Musical Imagery in the Collection",
          description:
            "<i>Lutes, Lovers, and Lyres: Musical Imagery in the Collection</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (February 6-June 11, 1989).",
          opening_date: "1989-02-06T05:00:00",
        },
        {
          id: 335904,
          title:
            "Hollandse Meesters uit Ametrika (Great Dutch Paintings in America)",
          description:
            "<i>Hollandse Meesters uit Ametrika (Great Dutch Paintings in America)</i>. Mauritshuis, The Hague, Netherlands (co-organizer) (September 25, 1990-January 13, 1991); The Fine Arts Museums of San Francisco, San Francisco, CA (organizer) (co-organizer) (February 16-May 5, 1991).",
          opening_date: "1990-09-25T04:00:00",
        },
        {
          id: 380201,
          title: "Delft Masters: Vermeer's Contemporaries",
          description:
            "<i>Delft Masters: Vermeer's Contemporaries</i>. Museum Prinsenhof Delft (organizer) (March 1-June 2, 1996).",
          opening_date: "1996-03-01T05:00:00",
        },
        {
          id: 218067,
          title: "Pieter de Hooch",
          description:
            "<i>Pieter de Hooch</i>. Dulwich Picture Gallery, London , United Kingdom of Great Britain and Northern Ireland (August 26-November 15, 1998); Wadsworth Atheneum Museum of Art, Hartford, CT (organizer) (December 20, 1998-March 14, 1999).",
          opening_date: "1998-08-26T00:00:00",
        },
        {
          id: 179662,
          title:
            "Masterpieces of European Painting from the Cleveland Museum of Art",
          description:
            "<i>Masterpieces of European Painting from the Cleveland Museum of Art</i>. Maltz Museum of Jewish Heritage, Beachwood, OH (March 29-July 8, 2007).",
          opening_date: "2007-03-29T00:00:00",
        },
        {
          id: 215380,
          title: "Asia in Amsterdam",
          description:
            "<i>Asia in Amsterdam</i>. Rijksmuseum, Amsterdam, Netherlands (organizer) (October 17, 2015-January 17, 2016).",
          opening_date: "2015-10-17T00:00:00",
        },
        {
          id: 312555,
          title: "Pieter de Hooch in Delft: From the Shadow of Vermeer",
          description:
            "<i>Pieter de Hooch in Delft: From the Shadow of Vermeer</i>. Museum Prinsenhof Delft, Delft, Netherlands (organizer) (October 11, 2019-February 16, 2020).",
          opening_date: "2019-10-11T04:00:00",
        },
      ],
      legacy: [
        'Delft Masters: Vermeer\'s Contemporaries, Delft, Municipal Museum Het Prinsenhof, March 1 - June 9, 1996: [ p. refs. in accompanying book, see under literature].<br>Giltaij, Jeroen. Senses and Sins: Dutch Painters of Daily Life in the Seventeenth Century (Ostfildern-Ruit, Germany: Hatje Cantz, c2004), p. 237, fig. 1.<br>Maltz Museum of Jewish Heritage (March 29, 2007 - July 8, 2007): "Masterpieces of European Painting from the Cleveland Museum of Art"',
        "British Institution, London, United Kingdom (1829).",
      ],
    },
    provenance: [
      {
        description:
          "James A. Stuart-Wortley-Mackenzie, First Baron Wharncliffe (1776-1845), 1833;",
        citations: [],
        footnotes: null,
        date: null,
      },
      {
        description: "John Smith, London;",
        citations: [],
        footnotes: null,
        date: null,
      },
      {
        description:
          "William Theobald, London, 1842 (sale: Christies’s, London, May 10, 1851, no. 76);",
        citations: [],
        footnotes: null,
        date: null,
      },
      {
        description: "private collection, Yorkshire;",
        citations: [],
        footnotes: null,
        date: null,
      },
      {
        description: "E. E. Cook, Bath;",
        citations: [],
        footnotes: null,
        date: null,
      },
      {
        description:
          "[Scott & Fowles, New York], sold to the Cleveland Museum of Art, 1951.",
        citations: [],
        footnotes: null,
        date: null,
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: [],
    fun_fact:
      "During this period, the Dutch Republic was the richest, most urbanized nation.",
    digital_description: null,
    wall_description:
      "The identity of the sitters remains unknown, although the marble floor and mantelpiece, the Transylvanian prayer rug on the table, and the silk clothes all point to the family’s considerable wealth. Furthermore, the richly carved chest at the right supports Chinese vases and Japanese lacquered boxes, a reference to the flourishing Dutch trade with Asia. Music making often took place at home, and its appearance here also signifies the harmoniousness of the family.",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1951.355-portrait-of-a-family",
      ],
    },
    citations: [
      {
        citation:
          "Smith, John. <em>A Catalogue Raisonné of the Works of the Most Eminent Dutch, Flemish and French Painters;</em> In Which Is Included a Short Biographical Notice of the Artists, with a Copious Description of Their Principal Pictures; a Statement of the Prices at Which Such Pictures Have Been Sold at Public Sales on the Continent and in England; a Reference to the Galleries and Private Collections, in Which a Large Portion Are at Present; and the Names of the Artists by Whom They Have Been Engraved; to Which Is Added, a Brief Notice of the Scholars &amp; Imitators of the Great Masters of the Above Schools. London: Smith and Son, 1829.",
        page_number: "Mentioned: v. IX, p. 571, no. 27",
        url: null,
      },
      {
        citation:
          "Hofstede de Groot, C. Beschreibendes und kritisches verzeichnis der werke des hervorragendsten holländischen Maler des XVII. Jahrhunderts; nach dem muster. Esslingen, Germany: a. N.: P. Neff, 1907.",
        page_number: "Reproduced: p. 518, no. 157; vol. 1",
        url: null,
      },
      {
        citation:
          "Rudder, Arthur de. <em>Pieter de Hooch et son œuvre.</em> Bruxelles, Belgium: G. van Oest &amp; cie, 1914.",
        page_number: "Reproduced: p. 101",
        url: null,
      },
      {
        citation:
          'Burchfield, Louise H. "The Music Party by de Hooch, " The Bulletin of the Cleveland Museum of Art XXXIX, no. 6 (June, 1952): 121-123',
        page_number: "Reproduced: p. 118",
        url: null,
      },
      {
        citation:
          "Newark Museum. <em>Old Masters from American Collections : [exhibition] the Newark Museum, November 22, 1955-January 2, 1956</em>. Newark, N.J.: Museum, 1955.",
        page_number: "Mentioned: cat. no. 13",
        url: null,
      },
      {
        citation:
          "Staring, Adolph. <em>De Hollanders thuis, gezelschapstukken uit drie eeuwen</em>. 's-Gravenhage, Netherlands: M. Nijhoff, 1956.",
        page_number: "Reproduced: p. 86, pl. X",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland, OH: The Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 447",
        url: "https://archive.org/details/CMAHandbook1958/page/n82",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 126",
        url: "https://archive.org/details/CMAHandbook1966/page/n150",
      },
      {
        citation:
          "William Rockhill Nelson Gallery of Art and Mary Atkins Museum of Fine Arts, and Ralph T. Coe. <em>Paintings of 17th Century Dutch Interiors</em>. Kansas City: The Museum, 1967.",
        page_number: "Reproduced: cat. no. 5,  p. 13, Listed p. 22",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 126",
        url: "https://archive.org/details/CMAHandbook1969/page/n150",
      },
      {
        citation:
          "Praz, Mario. <em>Conversation Pieces; A Survey of the Informal Group Portrait in Europe and America</em>. University Park: Pennsylvania State University Press, 1971.",
        page_number: "Mentioned: p. 184; reproduced: pl. 151",
        url: null,
      },
      {
        citation:
          'Eikemeier, Peter. "Das Familienbildnis des Emanuel de Witte in der Alten Pinakothek." <em>Pantheon</em> XXXII (1974): 255-261.',
        page_number: "Mentioned: p. 260, n. 6",
        url: null,
      },
      {
        citation:
          "Thornton, Peter. <em>Seventeenth-Century Interior Decoration in England, France, and Holland.</em> New Haven, CT: Published for the Paul Mellon Centre for Studies in British Art by Yale University Press, 1978.",
        page_number: "Reproduced: p. 42, fig. 48; mentioned: p. 405, n. 48",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 162",
        url: "https://archive.org/details/CMAHandbook1978/page/n182",
      },
      {
        citation:
          "Sutton, Peter C. <em>Pieter De Hooch (1629-1684)</em>. Thesis Yale University. 1979.",
        page_number:
          "Mentioned: v. 1, p. 51-54, 57; v. 2, p. 73-74, no. 54; reproduced: v. 3, p. 20, fig. 54",
        url: null,
      },
      {
        citation:
          "Sutton, Peter C. <em>Pieter De Hooch: Complete Edition</em>. Oxford, UK: Phaidon, 1980.",
        page_number:
          "Mentioned: p. 28-30, 92, no. 53; reproduced: pl. XII, pl. 57",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Catalogue of Paintings, Part 3: European Paintings of the 16th, 17th, and 18th Centuries</em>. Cleveland, OH: The Cleveland Museum of Art, 1982.",
        page_number: "Reproduced: p. 246; Mentioned: p. 247-248",
        url: null,
      },
      {
        citation:
          "Broos, B. P. J., Edwin Buijsen, and Rieke van Leeuwen. <em>Great Dutch Paintings from America</em>. The Hague: Mauritshuis, 1990.",
        page_number: "Mentioned and Reproduced: cat. no. 36, p. 305-309",
        url: null,
      },
      {
        citation:
          "Seaton, Douglass. <em>Ideas and Styles in the Western Musical Tradition. </em>Mountain View, CA: Mayfield Pub. Co, 1991.",
        page_number: "Mentioned and reproduced: p. 172-173, fig. 13.1",
        url: null,
      },
      {
        citation:
          "Ydema, Onno. <em>Carpets and Their Datings in Netherlandish Paintings 1540-1700.</em> Woodbridge, Suffolk, UK: Antique Collectors' Club, 1991.",
        page_number: "Reproduced: p. 52. fig. 45",
        url: null,
      },
      {
        citation:
          "Fiero, Gloria K. <em>The Age of the Baroque and the European Enlightenment. </em>Dubuque, IA: Brown &amp; Benchmark, 1992.",
        page_number: "Reproduced: p. 53, fig. 22",
        url: null,
      },
      {
        citation:
          '"1993 Annual Report." <em>The Bulletin of the Cleveland Museum of Art</em> 81, no. 6 (1994): 143-218.',
        page_number: "Mentioned: p. 170",
        url: "https://www.jstor.org/stable/25161457",
      },
      {
        citation:
          "Thomson, John Mansfield, and Anthony Rowland-Jones. <em>The Cambridge Companion to the Recorder</em>. Cambridge, MA: Cambridge University Press, 1995.",
        page_number: "Reproduced: p. 82; Mentioned: p. 83",
        url: null,
      },
      {
        citation:
          "Kersten, Michiel, Daniëlle H. A. C. Lokin, and Michiel Plomp. <em>Delft masters</em>, <em>Vermeer's contemporaries: illusionism through the conquest of light and space.</em> Zwolle: Waanders Publishers, 1996.",
        page_number: "Reproduced: p. 157; plate 152",
        url: null,
      },
      {
        citation:
          "Wilschut, Arie Herman Josephus. <em>Sporen: Geschiedenis Voor Havo 4/5.</em> Groningen: Wolters-Noordhoff, 1996.",
        page_number: "Reproduced: p. 106, no. 17",
        url: null,
      },
      {
        citation:
          "Peeters, Jan. <em>The Royal Palace of Amsterdam in Paintings of the Golden Age.</em> Amsterdam,, NL: Royal Palace, 1997.",
        page_number: "Reproduced: pl. 18a",
        url: null,
      },
      {
        citation:
          "Sutton, Peter C. <em>Pieter De Hooch, 1629-1684.</em> Hartford, Conn: Dulwich Picture Gallery, Wadsworth Atheneum, 1998.",
        page_number: "Mentioned: p. 142-145",
        url: null,
      },
      {
        citation:
          "Fiero, Gloria K. Faith, <em>Reason, and Power in the Early Modern World.</em> 3rd edition, New York, NY: McGraw Hill, 1998.",
        page_number: "Reproduced: p. 6, fig. 22",
        url: null,
      },
      {
        citation:
          "Connell, Timothy C., and Jackson J. Spielvogel.<em> World Art Transparencies</em>. Cincinnati, OH: West Educational Publishing, 1998.",
        page_number: "Reproduced: p. 37",
        url: null,
      },
      {
        citation:
          'Vries, Jan de. "Luxury and Calvinism/Luxury and Capitalism: Supply and Demand for Luxury Goods in the Seventeenth-Century Dutch Republic." <em>The Journal of the Walters Art Museum </em>57 (1999): 73-85.',
        page_number: "Reproduced: p. 79, fig. 5",
        url: null,
      },
      {
        citation:
          'Alpers, Svetlana. "De Hooch: A View with a Room." <em>Art in America: An Illustrated Magazine </em>87, no. 6 (June 1999): 92-99.',
        page_number: "Mentioned and reproduced: p. 97-98",
        url: null,
      },
      {
        citation:
          "Kühlenthal, Michael. <em>Ostasiatische und europäische Lacktechniken: internationale Tagung des Bayerischen Landesamtes für Denkmalpflege und des Deutschen Nationalkomitees von ICOMOS in Zusammenarbeit mit dem Tokyo National Research Institute of Cultural Properties, München, 11.-13. März 1999 = East Asian and European lacquer techniques : international conference of the Bavarian State Department of Historical Monuments and the German National Committee of ICOMOS together with the Tokyo National Research Institute of Cultural Properties, Munich, 11-13 March 1999.</em> München: Lipp, 2000.",
        page_number: "Mentioned and reproduced: p. 27, fig. 1",
        url: null,
      },
      {
        citation:
          "Westermann, Mariët, C. Willemijn Fock, Eric Jan Sluijter, and H. Perry Chapman. <em>Art &amp; Home: Dutch Interiors in the Age of Rembrandt. </em>Denver, CO: Denver Art Museum, 2001.",
        page_number: "Reproduced: p. 142",
        url: null,
      },
      {
        citation:
          "Hollander, Martha. <em>An Entrance for the Eyes: Space and Meaning in Seventeenth-Century Dutch Art.</em> Berkeley, CA: University of California Press, 2002.",
        page_number: "Mentioned: p. 156-157; Reproduced pl. XII",
        url: null,
      },
      {
        citation:
          "Fiero, Gloria K. <em>Faith, Reason, and Power in the Early Modern World</em>. 4th edition, Boston, MA: McGraw-Hill, 2002.",
        page_number: "Reproduced: p. 7 fig. 23",
        url: null,
      },
      {
        citation:
          "Giltaij, Jeroen, and Peter Hecht. <em>Senses and Sins: Dutch Painters of Daily Life in the Seventeenth Century. </em>Ostfildern-Ruit: Hatje Cantz, 2004.",
        page_number: "Reproduced: p. 67, fig. 60",
        url: null,
      },
      {
        citation:
          "Franses, Michael, Rupert Waterhouse, and Christine Davis. <em>East to West: Textile-Art 2004.</em> London, UK: Textile &amp; Art Publications, 2004.",
        page_number: "Reproduced: p. 32, fig. 25",
        url: null,
      },
      {
        citation:
          "Venturi, Robert, and Denise Scott Brown.<em> Architecture As Signs and Systems: For a Mannerist Time. </em>Cambridge,MA: Belknap Press of Harvard University Press, 2004.",
        page_number: "Reproduced: 9. 189, fig. 335 and 336",
        url: null,
      },
      {
        citation:
          "Franses, Michael, Rupert Waterhouse, and Christine Davis. <em>East to West: Textile-Art 2004.</em> London, UK: Textile &amp; Art Publications, 2004.",
        page_number: "Reproduced: p.32, fig. 25",
        url: null,
      },
      {
        citation:
          "Cunningham, Lawrence, and John J. Reich. <em>Culture and Values: A Survey of the Humanities.</em> Belmont, CA: Thomson/Wadsworth, 2006.",
        page_number: "Reproduced: p. 396, fig. 15.33",
        url: null,
      },
      {
        citation:
          "Aynsley, Jeremy, and Charlotte Grant.<em> Imagined Interiors: Representing the Domestic Interior Since the Renaissance.</em> London, UK: V &amp; A Pub, 2006.",
        page_number: "Reproduced: p. 91, fig. 4.16",
        url: null,
      },
      {
        citation:
          "Franits, Wayne E. <em>Pieter De Hooch: A Woman Preparing Bread and Butter for a Boy.</em> Los Angeles, CA: J. Paul Getty Museum, 2006.",
        page_number: "Reproduced: p. 23, fig. 18",
        url: null,
      },
      {
        citation:
          "Shawe-Taylor, Desmond. <em>The Conversation Piece: Scenes of Fashionable Life.</em> London, UK: Royal Collection, 2009.",
        page_number: "Reproduced: p. 46, fig. 5",
        url: null,
      },
      {
        citation:
          "Fiero, Gloria K. <em>Landmarks in Humanities.</em> Boston, Mass: McGraw-Hill Higher Education, 2009.",
        page_number: "Reproduced: p. 290, fig. 10.34",
        url: null,
      },
      {
        citation:
          "Stevenson, Rachel. \"'At Home' with the Eameses.\" In <em>Camera Constructs: Photography, Architecture and the Modern City. </em>Andrew Higgott, and Timothy Wray, eds., 61-72. Burlington: Ashgate Pub. Co, 2012.",
        page_number: "Reproduced: p. 71, fig. 4.6",
        url: null,
      },
      {
        citation:
          'Corrigan, Karina. "Asia on the Heregracht: Furnishing Amsterdam with Asian Imports." In <em>Asia in Amsterdam: The Culture of Luxury in the Golden Age</em>. Jan van Campen, Femke Diercks, and Janet C. Blyberg, 123-132. New Haven, CT: Yale University Press, 2015.',
        page_number: "Mentioned: P. 127; reproduced: P. 125, fig. 2",
        url: null,
      },
      {
        citation:
          'Brook, Timothy. "Trading Places" <em>Apollo: A Journal of the Arts </em>182, issue 636 (November 2015).',
        page_number: "Mentioned: p. 70-74; Reproduced: fig. 7",
        url: null,
      },
      {
        citation:
          'Miller, Tony. "17th Century Disruptors: The Dutch Rise to Dominance of the Chinese Porcelain Trade." <em>Arts of Asia</em> 47, no. 4 (July-August 2017): 103-117.',
        page_number: "Mentioned and reproduced: P. 103, fig. 1",
        url: null,
      },
      {
        citation:
          "Amiel, Vincent. Naissances d'images: l'image dans l'image, des enluminures à la société des écrans. 2018.",
        page_number: "Mentioned: p. 60, footnote 13",
        url: "",
      },
      {
        citation:
          "Jansen, Anita, et. al. <em>Pieter De Hooch in Delft: From the Shadow of Vermeer. </em>Zwolle: WBOOKS, in cooperation with Museum Prinsenhof Delft, 2019.",
        page_number: "Reproduced: p. 188, fig. 24; Mentioned: p. 189",
        url: null,
      },
      {
        citation:
          "Wolf, Norbert. <em>The Golden Age of Dutch and Flemish Painting</em>. Munich; London; New York: Prestel Verlag, 2019.",
        page_number: "Mentioned and reproduced: P. 207, fig. 168",
        url: "",
      },
      {
        citation:
          "Tillerot, Isabelle. Beautés arbitraires: essai sur l'imagination à l'époque moderne. 2021, 149.",
        page_number: "Mentioned and reproduced; pp. 148-149, fig. 51",
        url: "",
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1951.355",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1951.355/1951.355_web.jpg",
        width: "900",
        height: "759",
        filename: "1951.355_web.jpg",
        filesize: "188537",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1951.355/1951.355_print.jpg",
        width: "3400",
        height: "2867",
        filename: "1951.355_print.jpg",
        filesize: "2369926",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1951.355/1951.355_full.tif",
        width: "13750",
        height: "11594",
        filename: "1951.355_full.tif",
        filesize: "478282288",
      },
    },
    updated_at: "2022-05-17 09:00:12.724000",
  },
  {
    id: 125104,
    accession_number: "1946.83",
    share_license_status: "CC0",
    tombstone:
      "Frieze of Dancers, c. 1895. Edgar Degas (French, 1834-1917). Oil on fabric; framed: 103 x 233.5 x 7 cm (40 9/16 x 91 15/16 x 2 3/4 in.); unframed: 70 x 200.5 cm (27 9/16 x 78 15/16 in.). The Cleveland Museum of Art, Gift of the Hanna Fund 1946.83",
    current_location: "222 Impressionism & Post-Impressionism",
    title: "Frieze of Dancers",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "c. 1895",
    creation_date_earliest: 1890,
    creation_date_latest: 1900,
    creators: [
      {
        id: 1759,
        description: "Edgar Degas (French, 1834-1917)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography:
          "Son of a Parisian banker, Edgar Degas enrolled in law school in 1853 following his father's wishes. But he had already shown an interest in art and had also registered to copy at the Louvre. In 1855 he entered the École des Beaux-Arts and became a student of Louis Lamothe (1822-1869), a former pupil of Ingres (q.v.). One year later Degas made the traditional journey to Italy, remaining there for three years. He visited family members in Naples and Florence and attended life classes at the Villa Medici in Rome. A visit to Normandy in 1861 may have introduced him to the racetrack. In Paris he continued to study at the Louvre, where he met Manet (q.v.) in 1862. Apart from his continuous interest in portraiture and history painting, Degas began to pay attention to subjects of modern life. Between 1865 and 1870, he exhibited at the Salon. At the time of the Franco-Prussian War, he enlisted in the artillery, but because of his poor eyesight he served (with Manet) in the infantry. After the war he traveled first to London and, in 1872-73, visited his uncle and brothers who had a cotton business in New Orleans. Degas participated in the first impressionist exhibition of 1874. He continued to exhibit with these artists until 1886 but never completely considered himself a member of the group, preferring to call himself a realist or naturalist. While many of the impressionists painted en plein air, Degas worked with models in his studio and, later in his career, from his imagination. In addition to painting, he experimented often with monotypes, engraving, pastels, sculpture, and photography. He traveled extensively-London, Naples, Spain, Morocco, and Switzerland-but continued to draw his subject matter from modern-day Paris. Other recurring themes would be the female nude and the ballet dancer. After the impressionist exhibition of 1886, Degas no longer participated in group shows. Instead he sold his works to private dealers such as Durand-Ruel and Ambroise Vollard. In the 1890s he began his own art collection, which, besides many works on paper, included paintings by such artists as Ingres, Cézanne (q.v.), Delacroix (q.v.), Gauguin (q.v.), and van Gogh (q.v.). His own art at the time became characterized by broader strokes of paint, charcoal, and pastel and the use of more vibrant colors, partly because of problems with his vision. His failing eyesight and poor health caused him to abandon his pursuit of art during the last years of his life.",
        name_in_original_language: null,
        birth_year: "1834",
        death_year: "1917",
      },
    ],
    culture: ["France, 19th century"],
    technique: "oil on fabric",
    support_materials: [],
    department: "Modern European Painting and Sculpture",
    collection: "Mod Euro - Painting 1800-1960",
    type: "Painting",
    measurements:
      "Framed: 103 x 233.5 x 7 cm (40 9/16 x 91 15/16 x 2 3/4 in.); Unframed: 70 x 200.5 cm (27 9/16 x 78 15/16 in.)",
    dimensions: {
      framed: {
        height: 1.03,
        width: 2.335,
        depth: 0.07,
      },
      unframed: {
        height: 0.7,
        width: 2.005,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Gift of the Hanna Fund",
    copyright: null,
    inscriptions: [
      {
        inscription: "Signed in lower right: Degas\r\n",
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 355543,
          title: "Exhibition of the Month: Art is Long",
          description:
            "<i>Exhibition of the Month: Art is Long</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (April 14-June 7, 1948).",
          opening_date: "1948-04-14T05:00:00",
        },
        {
          id: 300857,
          title: "Art: The International Language",
          description:
            "<i>Art: The International Language</i>. The Cleveland Museum of Art (October 2-November 4, 1956).",
          opening_date: "1956-10-02T04:00:00",
        },
        {
          id: 301477,
          title: "In Memoriam: Leonard C. Hanna, Jr.",
          description:
            "<i>In Memoriam: Leonard C. Hanna, Jr.</i>. The Cleveland Museum of Art (organizer) (March 4-April 7, 1958).",
          opening_date: "1958-03-04T05:00:00",
        },
        {
          id: 310025,
          title: "Creativity in Art and Science, 1860-1960",
          description:
            "<i>Creativity in Art and Science, 1860-1960</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (September 16-November 8, 1987).",
          opening_date: "1987-09-16T04:00:00",
        },
        {
          id: 398992,
          title: "Degas: Beyond Impressionism",
          description:
            "<i>Degas: Beyond Impressionism</i>. The Art Institute of Chicago (September 28, 1996-January 12, 1997).",
          opening_date: "1996-05-22T04:00:00",
        },
        {
          id: 224558,
          title:
            "Time Stands Still: Muybridge and the Instantaneous Photography Movement",
          description:
            "<i>Time Stands Still: Muybridge and the Instantaneous Photography Movement</i>. The Cleveland Museum of Art (February 15-May 16, 2004).",
          opening_date: "2004-02-15T00:00:00",
        },
        {
          id: 184132,
          title: "Masterworks from The Phillips Collection",
          description:
            "<i>Masterworks from The Phillips Collection</i>. The Cleveland Museum of Art (organizer) (February 20-May 29, 2005).",
          opening_date: "2005-02-20T00:00:00",
        },
        {
          id: 182153,
          title:
            "Monet to Dalí: Modern Masters from the Cleveland Museum of Art",
          description:
            "<i>Monet to Dalí: Modern Masters from the Cleveland Museum of Art</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (October 21, 2007-January 13, 2008).",
          opening_date: "2006-05-27T00:00:00",
        },
        {
          id: 174875,
          title: "Edgar Degas: A Strange New Beauty",
          description:
            "<i>Edgar Degas: A Strange New Beauty</i>. The Museum of Modern Art, New York, NY (organizer) (March 22-July 24, 2016).",
          opening_date: "2016-03-22T00:00:00",
        },
        {
          id: 292699,
          title: "Artlens Exhibition 2017",
          description:
            "<i>Artlens Exhibition 2017</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 24, 2017-May 29, 2019).",
          opening_date: "2017-06-24T04:00:00",
        },
      ],
      legacy: [
        "<em>Degas</em>. Orangerie des Tuileries, Paris, France (1937).",
        "<em>Honderd Jaar Fransche Kunst.</em> Stedelijk Museum, Amsterdam, Netherlands (1938).",
        "Art Institute of Chicago, Chicago, IL (October 1941-October 1942).",
        "<em>Works by Edgar Degas</em>. The Cleveland Museum of Art, Cleveland, OH (February 5 to March 9, 1947).",
      ],
    },
    provenance: [
      {
        description:
          "(Durand-Ruel, Paris, France, acquired from the artist and sold to Paul Cassier the same day)",
        citations: [],
        footnotes: [],
        date: "September 19,1904",
      },
      {
        description: "(Paul Cassirer, Berlin Germany, sold to Max Liebermann)",
        citations: [],
        footnotes: [],
        date: "November 21, 1904",
      },
      {
        description:
          "Max Liebermann [1847-1935], Berlin, Germany, deposited to the Kunsthaus Zürich",
        citations: [],
        footnotes: [],
        date: "1904-May 9, 1933",
      },
      {
        description: "Kunsthaus Zürich, Switzerland",
        citations: [],
        footnotes: null,
        date: "1933-1935",
      },
      {
        description:
          "Kathe Riezler, Max Leibermann's daughter, [1885-1952] Berlin, Germany and New York, NY, by inheritance (on loan to the Art Institute of Chicago, October 1941-October 1942).",
        citations: [],
        footnotes: null,
        date: "1935-1946",
      },
      {
        description:
          "(Paul Rosenberg & Co., New York, NY, sold to the Cleveland Museum of Art)",
        citations: [],
        footnotes: [],
        date: "-1946",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, OH",
        citations: [],
        footnotes: [],
        date: "1946-",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: [],
    fun_fact:
      "The ballet is a subject Degas returned to again and again over the course of his career. Rather than public performances, he often depicted dancers behind the curtain, practicing, waiting, or, as in this painting, lacing up their shoes.",
    digital_description: null,
    wall_description:
      "This painting may depict a single dancer seen from four different viewpoints. The young woman is placed in an undefined setting, surrounded by mere wisps of color, applied so spontaneously that the paint ran and dripped. Degas even added the circles in the foreground with his thumb. Such audacity, while acceptable in a small sketch, must have shocked the artist's contemporaries when presented on a six-foot canvas. Equally radical is the idea of combining multiple views of a single figure. Degas's unusual presentation may have been inspired by the photographs of Eadweard Muybridge (1830-1904)",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1946.83-frieze-of-dancers",
      ],
    },
    citations: [
      {
        citation:
          "Meier-Graefe, Julius. <em>Degas: ein Beitrag zur Entwicklungsgeschichte der modernen Malerei</em>. München: R. Piper, 1920.",
        page_number: "Reproduced: pl. 62",
        url: null,
      },
      {
        citation:
          'Frances, Henry S. "Degas\' Frieze of Dancers entitled Danseuses ajustant leurs chaussons." <em>Bulletin of The Cleveland Museum of Art XXXIII</em>, no. 6 (June, 1946) 87-94.',
        page_number: "Reproduced: p. 89-91",
        url: null,
      },
      {
        citation:
          'Milliken, William M. "Report for the Year 1946." <em>Bulletin of The Cleveland Museum of Art XXXIVI</em>, no. 6 (June, 1947) 127-139.',
        page_number: "Mentioned: p. 128",
        url: null,
      },
      {
        citation:
          "Browse, Lillian. <em>Degas Dancers</em>. London: Faber and Faber, 1949.",
        page_number: "Reproduced: no. 115, p. 376",
        url: null,
      },
      {
        citation:
          "Venturi, Lionello. <em>Impressionists and Symbolists: Manet, Degas, Monet, Pissarro, Sisley, Renoir, Cezanne, Seurat, Gauguin, Van Gogh, Toulouse-Lautrec</em>. New York, NY: Scribner, 1950.",
        page_number: "Mentioned: p. 41-42; Reproduced: fig. 36",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art, “Cleveland Owned Paintings Will Go to France,” April 20, 1955, Cleveland Museum of Art Archives.",
        page_number: null,
        url: "https://archive.org/details/cmapr4556",
      },
      {
        citation:
          "Cabanne, Pierre. <em>Edgar Degas</em>. Paris: Editions Pierre Tisné, 1957.",
        page_number: "Reproduced: pl. 124",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland: Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 506",
        url: "https://archive.org/details/CMAHandbook1958/page/n93",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland: Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 173",
        url: "https://archive.org/details/CMAHandbook1966/page/n197",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland: Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 173",
        url: "https://archive.org/details/CMAHandbook1969/page/n197",
      },
      {
        citation:
          "Russoli, Franco and Fiorella Minervino. <em>L'opera completa di Degas</em>. Milan: Rizzoli, 1970.",
        page_number: "Reproduced: no. 1093, Mentioned: p. 1893-1898",
        url: null,
      },
      {
        citation:
          "Hüttinger, Eduard. <em>Degas</em>. New York, NY: Crown Publishers, 1988.",
        page_number: "Reproduced: p. 90",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland: Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 214",
        url: "https://archive.org/details/CMAHandbook1978/page/n234",
      },
      {
        citation:
          "Ikegami, Chūji Ikegami. <em>Doga</em>. Tokyo: Kōdansha, 1980.",
        page_number: "Reproduced: pl. 49; Mentioned: p. 121",
        url: null,
      },
      {
        citation:
          "Roberts, Keith and Helen Langdon. <em>Degas</em>. Oxford, United Kingdom: Phaidon, 1982.",
        page_number: "Reproduced: fig. 37",
        url: null,
      },
      {
        citation:
          "Vaizey, Marina. <em>The Artist As Photographer</em>. London: Sidgwick &amp; Jackson, 1982.",
        page_number: "Reproduced: fig. 29",
        url: null,
      },
      {
        citation:
          "Shackelford, George T. M. <em>Degas, the Dancers</em>. Washington, DC: National Gallery of Art, 1984.",
        page_number: "Reproduced: p. 105-106",
        url: null,
      },
      {
        citation:
          "Larson, Dean M. <em>Studying with the Masters: Lessons from Rubens, Velázquez, Turner, Degas, Monet, Sargent, Matisse</em>. New York, NY: Watson-Guptill Publications, 1986.",
        page_number: "Reproduced: p. 65",
        url: null,
      },
      {
        citation:
          "Sutton, Denys. <em>Edgar Degas, Life and Work</em>. New York, NY: Rizzoli, 1986.",
        page_number: "Mentioned: p. 183; Reproduced: p. 192",
        url: null,
      },
      {
        citation:
          "Kendall, Richard. <em>Degas by Himself: Drawings, Prints, Paintings, Writings</em>. London: Macdonald Orbis, 1987.",
        page_number: "Reproduced: p. 266-267",
        url: null,
      },
      {
        citation:
          "Thomson, Richard. <em>The Private Degas</em>. New York, NY: Thames and Hudson, 1987",
        page_number: "Reproduced: p. 86-87",
        url: null,
      },
      {
        citation:
          "Henning, Edward B. <em>Creativity in Art and Science, 1860-1960.</em> [Cleveland, Ohio]: Published by the Cleveland Museum of Art in cooperation with Indiana University Press, 1987.",
        page_number: "Mentioned and reproduced: P. 99, no. 6",
        url: "",
      },
      {
        citation: "Loyrette, Henri. <em>Degas</em>. Paris: Fayard, 1991.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Eberle, Matthias. <em>Max Liebermann, 1847-1935: Werkverzeichnis der Gemälde und Ölstudien.</em> München: Hirmer, 1995.",
        page_number: "Reproduced: p. 542",
        url: null,
      },
      {
        citation:
          "Natter, Tobias G.and Julius H. Schoeps. <em>Max Liebermann und die französischen Impressionisten</em>. Düsseldorf: DuMont, 1997.",
        page_number:
          "Reproduced: p. 24, 203-294; Mentioned, p. 224, 239, 240, 252",
        url: null,
      },
      {
        citation:
          "Bilski, Emily D. <em>Berlin Metropolis: Jews and the New Culture, 1890-1918</em>. Berkeley: University of California Press, 1999.",
        page_number: "Reproduced: fig. 21, p. 35",
        url: null,
      },
      {
        citation:
          "Louise d'Argencourt, Roger Diederen, Alisa Luxenberg, Patrick Noon, William H. Robinson, Ann Tzeutschler Lurie. <em>European Paintings of the 19th Century</em>. Cleveland: Cleveland Museum of Art 1999.",
        page_number: "I:218-221.",
        url: null,
      },
      {
        citation:
          "Rubin, Susan Goldman. <em>Degas and the Dance: The Painter and the Petits Rats, Perfecting Their Art</em>. New York, NY: Harry Abrams, 2002.",
        page_number: "Reproduced: p. 2-3",
        url: null,
      },
      {
        citation:
          "Rosenblum, Naomi. <em>A World History of Photography</em>. New York, NY: Abbeville Press Publishers, 2007.",
        page_number: "Reproduced: p. 255, fig. 301",
        url: null,
      },
      {
        citation:
          "Echte, Bernhard, and Petra Cordioli. <em>Kunstsalon Bruno &amp; Paul Cassirer: die Ausstellungen 1898-1901</em>. Wädenswil, Switzerland: Nimbus, Kunst und Bücher, 2011.",
        page_number: "Mentioned: vol 5, p. 564-565",
        url: null,
      },
      {
        citation:
          "Kostenevich, A. G. <em>Impressionism: Sensation &amp; Inspiration: Highlights from the Hermitage</em>. Amsterdam, Netherlands: Museumshop Hermitage Amsterdam, 2012.",
        page_number: "Reproduced: p. 88",
        url: null,
      },
      {
        citation:
          "<em>Treasures of the Cleveland Museum of Art</em>. London: Scala Books, 2012.",
        page_number: "Reproduced: p. 278-279",
        url: null,
      },
      {
        citation:
          "Faass, Martin, and Annegret Janda. <em>Verlorene Schätze: die Kunstsammlung von Max Liebermann</em>. Berlin: Liebermann-Villa am Wannsee: Nicolai, 2013.",
        page_number: "Mentioned: p. 23; Reproduced: p. 131, fig. 41",
        url: null,
      },
      {
        citation:
          'DeVonyar, Jill. "Frieze of Dancers." In <em>Degas: A Strange New Beauty. </em>Jodi Hauptman, 202-226. New York: The Museum of Modern Art, 2016.',
        page_number: "Reproduced: p. 202-203, fig. 153",
        url: null,
      },
      {
        citation:
          "Bonafoux, Pascal. <em>Les 100 tableaux qui racontent Degas</em>. Vanves: Chêne, 2017.",
        page_number: "Reproduced: p. 170-171",
        url: null,
      },
      {
        citation:
          "Barbe-Gall, Françoise, and Edgar Degas. Pourquoi Degas est Degas. Paris: Éditions Le Deuxième Horizon, 2019.",
        page_number: "Mentioned and reproduced: pp. 84-85",
        url: "",
      },
      {
        citation:
          'Arendsee, M., and M. Steinman-Arendsee. "Take the CAN disability aesthetics tour, at the Cleveland Museum of Art." <em>CAN Journal </em>(Winter 2019/20): 76-87.',
        page_number: "Mentioned: p. 81",
        url: null,
      },
      {
        citation:
          "Degas, Edgar, Adriano Pedrosa, Fernando Oliva, and Sofia Borges. Degas: Dance, Politics and Society. 2021, 196-197.",
        page_number: "Reproduced: pp. 196-197, fig. 136.",
        url: "",
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1946.83",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1946.83/1946.83_web.jpg",
        width: "900",
        height: "314",
        filename: "1946.83_web.jpg",
        filesize: "96599",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1946.83/1946.83_print.jpg",
        width: "3400",
        height: "1187",
        filename: "1946.83_print.jpg",
        filesize: "1203087",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1946.83/1946.83_full.tif",
        width: "32683",
        height: "11412",
        filename: "1946.83_full.tif",
        filesize: "1118962804",
      },
    },
    updated_at: "2022-05-17 09:00:12.107000",
  },
  {
    id: 151904,
    accession_number: "1927.1984",
    share_license_status: "CC0",
    tombstone:
      "The Biglin Brothers Turning the Stake, 1873. Thomas Eakins (American, 1844-1916). Oil on canvas; framed: 117 x 167 x 6.5 cm (46 1/16 x 65 3/4 x 2 9/16 in.); unframed: 101.3 x 151.4 cm (39 7/8 x 59 5/8 in.). The Cleveland Museum of Art, Hinman B. Hurlbut Collection 1927.1984",
    current_location: "207 American Realism",
    title: "The Biglin Brothers Turning the Stake",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1873",
    creation_date_earliest: 1873,
    creation_date_latest: 1873,
    creators: [
      {
        id: 4037,
        description: "Thomas Eakins (American, 1844-1916)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography: null,
        name_in_original_language: null,
        birth_year: "1844",
        death_year: "1916",
      },
    ],
    culture: ["America, 19th century"],
    technique: "oil on canvas",
    support_materials: [],
    department: "American Painting and Sculpture",
    collection: "American - Painting",
    type: "Painting",
    measurements:
      "Framed: 117 x 167 x 6.5 cm (46 1/16 x 65 3/4 x 2 9/16 in.); Unframed: 101.3 x 151.4 cm (39 7/8 x 59 5/8 in.)",
    dimensions: {
      framed: {
        height: 1.17,
        width: 1.67,
        depth: 0.065,
      },
      unframed: {
        height: 1.013,
        width: 1.514,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Hinman B. Hurlbut Collection",
    copyright: null,
    inscriptions: [
      {
        inscription: "signed lower left:  EAKINS 73.",
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 312517,
          title:
            "The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition",
          description:
            "<i>The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 26-October 12, 1936).",
          opening_date: "1936-06-26T04:00:00",
        },
        {
          id: 312462,
          title: "Exhibition of American Painting from 1860 Until Today",
          description:
            "<i>Exhibition of American Painting from 1860 Until Today</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 23-October 4, 1937).",
          opening_date: "1937-06-23T04:00:00",
        },
        {
          id: 312341,
          title: "The Silver Jubilee Exhibition",
          description:
            "<i>The Silver Jubilee Exhibition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 23-September 28, 1941).",
          opening_date: "1941-06-23T04:00:00",
        },
        {
          id: 311898,
          title: "35th Anniversary Exhibition",
          description:
            "<i>35th Anniversary Exhibition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 20-September 30, 1951).",
          opening_date: "1951-06-20T04:00:00",
        },
        {
          id: 445590,
          title: "Thomas Eakins: Retrospective Exhibition",
          description:
            "<i>Thomas Eakins: Retrospective Exhibition</i>. Whitney Museum of American Art, New York, NY (organizer) (September 21-November 21, 1970).",
          opening_date: "1970-09-21T04:00:00",
        },
        {
          id: 302330,
          title: "Heritage and Horizon: American Painting 1776 - 1976",
          description:
            "<i>Heritage and Horizon: American Painting 1776 - 1976</i>. Albright-Knox Art Gallery, Buffalo, NY (organizer) (March 7-April 11, 1976); The Detroit Institute of Arts, Detroit, MI (May 2-June 13, 1976); The Toledo Museum of Art, Toledo, OH (July 4-August 15, 1976); The Cleveland Museum of Art, Cleveland, OH (September 8-October 24, 1976).",
          opening_date: "1976-03-07T05:00:00",
        },
        {
          id: 205372,
          title: "Thomas Eakins: The Rowing Pictures",
          description:
            "<i>Thomas Eakins: The Rowing Pictures</i>. National Gallery of Art (June 23-September 29, 1996); Yale University Art Gallery (organizer) (October 11, 1996-January 14, 1997); The Cleveland Museum of Art (February 19-May 18, 1997).",
          opening_date: "1996-06-23T00:00:00",
        },
        {
          id: 205787,
          title: "Thomas Eakins, American Realist",
          description:
            "<i>Thomas Eakins, American Realist</i>. Philadelphia Museum of Art, Philadelphia, PA (organizer) (September 30, 2001-January 6, 2002); Musée d'Orsay, 75343 Paris, France (February 3-May 12, 2002); The Metropolitan Museum of Art, New York, NY (June 10-September 15, 2002).",
          opening_date: "2001-09-20T00:00:00",
        },
        {
          id: 184052,
          title: "Cleveland Collects American Art of the Gilded Age",
          description:
            "<i>Cleveland Collects American Art of the Gilded Age</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (February 23-May 18, 2003).",
          opening_date: "2003-02-23T00:00:00",
        },
        {
          id: 224558,
          title:
            "Time Stands Still: Muybridge and the Instantaneous Photography Movement",
          description:
            "<i>Time Stands Still: Muybridge and the Instantaneous Photography Movement</i>. The Cleveland Museum of Art (February 15-May 16, 2004).",
          opening_date: "2004-02-15T00:00:00",
        },
        {
          id: 216543,
          title: "Manly Pursuits: The Sporting Images of Thomas Eakins",
          description:
            "<i>Manly Pursuits: The Sporting Images of Thomas Eakins</i>. Los Angeles County Museum of Art, Los Angeles, CA (organizer) (July 25-October 23, 2010).",
          opening_date: "2010-07-25T00:00:00",
        },
      ],
      legacy: [
        "Long Branch, NJ, unknown location (Summer, 1878) as Biglen Brothers turning the Stake-boat; see Thomas Eakins: The Rowing Pictures (Washington, D.C, 1996). <br><br>Boston, Charitable Mechanics Association, 13th Exhibition (2 September-2 November 1878) as Turning the Stake; see Thomas Eakins: The Rowing Pictures (Washington, D.C, 1996). <br><br>Philadelphia, Philadelphia Society of Artists, 2nd Annual Exhibition (1 November-6 December 1880) as Turning the Stake, A pair oared Race; see Thomas Eakins: The Rowing Pictures (Washington, D.C, 1996). <br><br>St. Louis, Art Hall, 21st St. Louis Fair, (3-8 October 1881) as Turning the Stake-boat; see Thomas Eakins: The Rowing Pictures (Washington, D.C, 1996). <br><br>Denver, National Mining and Industrial Exposition, 1st Annual Exposition (1 August-30 September 1882) as Biglen Brothers turning the Stake-boat; see Thomas Eakins: The Rowing Pictures (Washington, D.C, 1996). <br><br>New York, The Metropolitan Museum of Art, Loan Exhibition of the Works of Thomas Eakins (5 November-3 December 1917), illus. cat. no. 3, pl. 3 as The Biglin Brothers Turning the Stake-Boat.<br><br>Philadelphia, The Pennsylvania Academy of the Fine Arts, Memorial Exhibition of the Works of the Late Thomas Eakins (23 December 1917-13 January 1918), illus. cat. no. 33, listed p. 86. <br><br>Philadelphia, Department of Fine Arts, Paintings, Sculpture, and Prints in the Department of Fine Arts Sesqui-centennial International Exposition (1926), listed cat. no. 360, p. 70.",
        'Cleveland, The Cleveland Museum of Art, Memorial Exhibition of Paintings by Thomas Eakins, Albert P. Ryder, and J. Alden Weir (15 December 1927-23 January 1928) <br><br>Philadelphia, PA, Pennsylvania Museum of Art, Work of Thomas Eakins (March 1930) New York, The Museum of Modern Art, Sixth Loan Exhibition: Winslow Homer, Albert P. Ryder, Thomas Eakins (May, 1930), illus. cat. no. 94, listed p. 29. <br><br>Los Angeles, Los Angeles Museum of History, Science, and Art, Olympic Competition and Exhibition of Art (30 July 30-31 August 1932), listed cat. no. 753, p. 51. <br><br>New York, Whitney Museum of American Art, American Genre: The Social Scene in Paintings and Prints (26 March-29 April 1935) cat. no. 28, listed p. 16, not illus.<br><br>Baltimore, The Baltimore Museum of Art, Thomas Eakins 1844-1916: A Retrospective Exhibition of His Paintings (1 December 1936-1 January 1937), illus. cat. no. 5. <br><br>Detroit, Detroit Institute of Art, Eighteenth Annual Exhibition of American Art (2 April-3 May 1937) cat. no. 1, listed p. 8, not illus. <br><br>New York, National Academy of Design, The Special World\'s Fair Exhibition (8 May-25 July 1939), listed cat. no.213. <br><br>San Francisco, The California Palace of the Legion of Honor, Seven Centuries of Painting: A Loan Exhibition of Old and Modern Masters (29 December 1939 - 28 January 1940), illus. cat. no. L-153, listed p. 50. <br><br>Detroit, The Detroit Institute of Arts, Five Centuries of Marine Painting (6 March-5 April 1942), listed no. 117, pp. 37-38, not illus. <br><br>Philadelphia, Philadelphia Museum of Art, Thomas Eakins Centennial Exhibitions (8 April-14 May, 1944), illus. cat. no. 17, p. 123, listed p. 134. <br><br>New York, M. Knoedler &amp; Company, A Loan Exhibition of the Works of Thomas Eakins 1844-1944, Commemorating the Centennial of His Birth (3 June-31 July 1944) illus. cat. no. 6. <br><br>Boston, Museum of Fine Arts, Boston Sport in American Art (10 October-10 December 1944), listed cat. no. 26, p.11, not illus. <br><br>Pittsburgh, Department of Fine Arts, Carnegie Institute, Thomas Eakins: Centennial Exhibition 1844-1944 (26 April-1 June 1945), illus. cat. no. 110. <br><br>London, The Tate Gallery, American Painting: From the Eighteenth Century to the Present Day (June - July 1946), illus. cat. no. 70, listed p. 12. <br><br>Saginaw Museum, Michigan, (2-28 November 1948), Thomas Eakins Centennial, no catalogue can be found for this show. <br><br>New York, NY, The Century Association, Exhibition of Paintings by Thomas Eakins (10 January-18 February 1951) no catalogue can be found for this show. <br><br>Akron, OH, Akron Art Institute, Masterpiece Series ( 30 December 1952-1 February 1953) no catalogue. <br><br>New York, Wildenstein &amp; Co., Landmarks in American Art, 1670-1950 (26 February-28 March 1953), illus. cat. no. 25, pl. 25 as The Biglen Brothers Turning the Stake. <br><br>Syracuse, Syracuse Museum of Fine Arts, 125 Years of American Art (16 September-11 October 1953), illus. cat . no. no. 18 as Turning the Stake Boat. <br><br>Philadelphia, Pennsylvania Academy of Fine Arts, 150th Anniversary Exhibition (15 January-13 March 1955); listed p. 65, cat. no. 74, not illus. <br><br>Washington, DC, National Gallery of Art, Smithsonian Institution, Thomas Eakins: A Retrospective Exhibition (8 October-12 November 1961); traveled to Chicago, The Art Institute of Chicago (1 December 1961-7 January 1962); to Philadelphia, Philadelphia Museum of Art (1 February-18 March 1962), illus. cat. no. 9, p. 43. <br><br>New York, Whitney Museum of Art, Thomas Eakins: Retrospective Exhibition (22 September-21 November 1970), illus. cat. no. 10, p. 37, listed p. 69. <br><br>Buffalo, Albright-Knox Art Gallery, Heritage and Horizon: American Painting 1776-1976 (6 March- 11 April 1976); traveled to Detroit, The Detroit Institute of Arts (5 May-13 June 1976); to Toledo, The Toledo Museum of Art (4 July-15 August 1976); to Cleveland, The Cleveland Museum of Art (8 September-10 October 1976), illus. cat. no. 22, illus. <br><br>Philadelphia, Philadelphia Museum of Art, Thomas Eakins Exhibition: Artist of Philadelphia (29 May-1 August 1982); traveled to Boston, Museum of Fine Arts, Boston (22 September-28 November 1982), illus. cat. no. 18, p. 22, illus. <br><br>Boston, Museum of Fine Arts, Boston A New World: Masterpieces of American Paintings 1760-1910 (7 September-13 November 1983); traveled to Washington, DC, Corcoran Gallery of American Art (7 December 1983-12 February 1984); to Paris, Grand Palais (16 March-11 June 1984) illus. cat. no. 58, p. 118, pp. 267-268, illus. p. 267. <br><br>The Cleveland Museum of Art (06/21/2005 - 09/11/2005); "CMA Highlights"',
      ],
    },
    provenance: [
      {
        description:
          "Susan MacDowell Eakins [1851-1938], Philadelphia, sold to the Cleveland Museum of Art",
        citations: [],
        footnotes: [
          "Ownership of Eakins' unsold works passed to his wife, Susan Macdowell Eakins, upon his death in 1916.",
        ],
        date: "1916-1927",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, OH",
        citations: [],
        footnotes: [],
        date: "1927-",
      },
    ],
    find_spot: null,
    related_works: [
      {
        id: 121189,
        description:
          "The Biglin Brothers Turning the Stake, 1873. Thomas Eakins (American, 1844-1916). Graphite and brush and brown wash; image: 35.4 x 43.2 cm (13 15/16 x 17 in.). The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund 1942.1066",
        relationship: null,
      },
    ],
    former_accession_numbers: ["1955.27", "1984.1927"],
    fun_fact:
      "Rowing was among the most popular spectator sports in the U.S. during the 1870s.",
    digital_description: null,
    wall_description:
      "Eakins's painting celebrates athletic teamwork while commemorating an actual event, a famous rowing race that took place on the Schuylkill River in Philadelphia during May 1872. Throngs of spectators line the riverbank and watch as Barney and John Biglin negotiate the tricky turn around a stake marking the halfway point in the contest. Their competitors, seen in the middle distance at the right, lag behind. The Biglin brothers won the race, cementing their status as the most celebrated oarsmen of the era. Trained in the United States and France, Eakins spent almost his entire artistic career in his hometown of Philadelphia. He is renowned for the unsentimental realism in his paintings, whose compositions he developed through painstakingly prepared figure and perspective drawings.",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1927.1984-the-biglin-brothers",
      ],
    },
    citations: [
      {
        citation: "",
        page_number: "",
        url: "",
      },
      {
        citation:
          "Koehler, S. R. “Second Annual Exhibition of the Philadelphia Society of Artists(Opened November 1. Closed December 6).” <em>The American Art Review</em> 2, no. 3 (January 1881): 103–15.",
        page_number: "Mentioned: P. 110",
        url: "https://doi.org/10.2307/20559774",
      },
      {
        citation:
          "Metropolitan Museum of Art (New York, N.Y.). <em>Loan Exhibition of the Works of Thomas Eakins, New York, November 5 to December 3, MCMXVII.</em> New York: The De Vinne press, 1917.",
        page_number: "Mentioned: pg 1; Reproduced: cat. no. 3, pl. 3",
        url: "https://archive.org/details/loanexhibitionof00metr_2/page/20/mode/2up",
      },
      {
        citation:
          'Burroughs, Alan. "Catalogue of Work of Thomas Eakins (1869-1916)." <em>The Arts</em> 5, no. 6 (June 1924): 328-335.',
        page_number: "Mentioned: P. 329",
        url: "",
      },
      {
        citation:
          "“Catalogue of the Works of Thomas Eakins.” <em>Bulletin of the Pennsylvania Museum</em> 25, no. 133 (March 1930): 17–33.",
        page_number: "Mentioned: P. 19, no. 25",
        url: "http://www.jstor.org/stable/3794383",
      },
      {
        citation:
          'M.M "Exhibitions." <em>The International Studio </em>30 (June 1930): 70-74.',
        page_number: "Mentioned: P. 70; Reproduced: P. 74",
        url: "",
      },
      {
        citation:
          "Goodrich, Lloyd, and Thomas Eakins. <em>Thomas Eakins: His Life and Work</em>. New York, NY: Whitney Museum of American Art, 1933.",
        page_number: "Mentioned: p. 37-47; Reproduced: pl. 8",
        url: null,
      },
      {
        citation:
          "Cahill, Holger, and Alfred H. Barr. <em>Art in America in Modern Times</em>. New York, NY:: Reynal &amp; Hitchcock,1934.",
        page_number: "Mentioned: p. 79-81; Reproduced: p. 81",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. Catalogue of the Twentieth Anniversary Exhibition of the Cleveland Museum of Art: The Official Art Exhibit of the Great Lakes Exposition : June Twenty-Sixth to October Fourth 1936. [Cleveland, Ohio]: [Cleveland Museum of Art], 1936.",
        page_number:
          "listed cat. no. 355, p. 132 as Turning Stake Boat, or Biglin Brothers Turning Stake Boat",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. Catalogue of an Exhibition of American Painting from 1860 Until Today at the Cleveland Museum of Art. [Cleveland]: [Printed by the Artcraft Printing Co.], 1937.",
        page_number:
          "illus. cat. no. 56, pl. 9, listed p. 20 as Turning Stake Boat",
        url: null,
      },
      {
        citation:
          '"The Story of American Painting Is Retold in Cleveland Exhibition." <em>Art Digest </em>11, no. 19 (August 1937): 5-9.',
        page_number: "Mentioned and reproduced: P. 6",
        url: "",
      },
      {
        citation:
          "Sweeney, J. J. \"L'Art Contemporain aux Etats-Unis.\" <em>Cahiers d'Art </em>13 (1938): 45-57.",
        page_number: "Mentioned: P. 50; Reproduced: P. 57",
        url: "",
      },
      {
        citation:
          "McKinney, Roland Joseph, Aimée Crane, and André Gloeckner. <em>Thomas Eakins</em>. New York, NY: Crown Publishers, 1942.",
        page_number: "Mentioned: p. 9-22; Reproduced: p. 67",
        url: null,
      },
      {
        citation:
          "Richardson, E. P., and Robert Freund. <em>American Romantic Painting</em>. New York, NY: E. Weyhe, 1944.",
        page_number: "Mentioned: p.5-22, 31-32; Reproduced: no. 231",
        url: null,
      },
      {
        citation:
          'Watkins, Franklin. "Eakins." <em>ARTnews </em>63, no. 5 (April 15, 1944): 10-13.',
        page_number: "Reproduced: P. 11",
        url: "",
      },
      {
        citation:
          'Goodrich, Lloyd. "Thomas Eakins Today." <em>Magazine of Art </em>37, no. 5 (May 1944): 162-166.',
        page_number: "",
        url: "",
      },
      {
        citation:
          'Ormsbee, Thomas H. "Thomas Eakins, American Realist Painter." <em>American Collector: Biweekly for Dealers and Collectors </em>13, no. 6 (July 1944): 162-166.',
        page_number: "Reproduced: P. 165.",
        url: "",
      },
      {
        citation:
          "<em>Paintings in the Cleveland Museum of Art.</em> [Cleveland]: The Cleveland Museum of Art, 1945.",
        page_number: "Reproduced: p. 13",
        url: "https://archive.org/details/CMAPaintings1945/page/n21",
      },
      {
        citation:
          'O\'Connor, Jr., John. "Thomas Eakins, Consistent Realist." <em>Carnegie Magazine </em>19, no. 2 (April 1945): 35-39.',
        page_number: "Reproduced: P. 39",
        url: "",
      },
      {
        citation:
          "McHenry, Margaret. <em>Thomas Eakins Who Painted</em>. Oreland? PA: [Privately printed for the author], 1946.",
        page_number: "Mentioned: p. 23-24, 155",
        url: null,
      },
      {
        citation:
          'Winchester, Alice. "American Painting in London: A Comment On the Tate Gallery Exhibition." <em>The Magazine Antiques </em>51, no. 2 (February 1947): 100-108.',
        page_number: "Reproduced: P. 105, fig. 44",
        url: "",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland, OH: The Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 541",
        url: "https://archive.org/details/CMAHandbook1958/page/n100",
      },
      {
        citation:
          "Milliken, William Mathewson. <em>The Cleveland Museum of Art.</em> New York: H.N. Abrams, 1958.",
        page_number: "Mentioned and reproduced: P. 60-61",
        url: "",
      },
      {
        citation:
          "Porter, Fairfield. <em>Thomas Eakins</em>. New York: George Braziller,1959.",
        page_number: "Reproduced: Pl. 11",
        url: "",
      },
      {
        citation:
          "Grosser, Maurice. <em>Critic's Eye</em>. Indianapolis, IN: Bobbs-Merrill, 1962.",
        page_number: "Reproduced: p. 166",
        url: null,
      },
      {
        citation:
          "Grosser, Maurice. <em>Critic's Eye</em>. Indianapolis: Bobbs-Merrill, 1962.",
        page_number: "Mentioned: P. 166",
        url: "",
      },
      {
        citation:
          'Kessler, Charles S. "The Realism of Thomas Eakins." <em>Arts Magazine </em>36, no. 4 (January 1962): 16-22.',
        page_number: "Mentioned and reproduced: P. 17-18",
        url: "",
      },
      {
        citation:
          "Gracza, Margaret Young. <em>The Ship and the Sea in Art</em>. Minneapolis, MN: Lerner Publications Co, 1965.",
        page_number: "Mentioned and Reproduced: p. 52",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 187",
        url: "https://archive.org/details/CMAHandbook1966/page/n211",
      },
      {
        citation:
          "Schendler, Sylvan. <em>Eakins</em>. Boston, MA: Little, Brown, 1967.",
        page_number: "Mentioned: p. 33-40, 284-285; Reproduced: p. 39, fig. 14",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 187",
        url: "https://archive.org/details/CMAHandbook1969/page/n211",
      },
      {
        citation:
          "Hamilton, George Heard. <em>19th and 20th Century Art: Painting, Sculpture, Architecture</em>. New York: H.N. Abrams, 1970.",
        page_number: "Reproduced: p. 112, fig. 97",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art, and Berthold Fricke. <em>The Cleveland Museum of Art.</em> Hannover: Knorr &amp; Hirth, 1970.",
        page_number: "Mentioned and reproduced: P. 68-69",
        url: "",
      },
      {
        citation:
          "Adams, Celeste, Rita Myers, and Adele Z. Silver.<em> An Introduction to American Art in the Cleveland Museum of Art</em>. Cleveland: Cleveland Museum of Art, 1972.",
        page_number: "Mentioned and reproduced: P. 12-13",
        url: "",
      },
      {
        citation:
          "“A Check List. American Paintings and Water Colors of the Eighteenth, Nineteenth, and Early Twentieth Centuries in the Cleveland Museum of Art.” <em>The Bulletin of the Cleveland Museum of Art</em> 60, no. 1 (January 1973): 21–35.",
        page_number: "Mentioned: P. 25, no. 57",
        url: "http://www.jstor.org/stable/25152465",
      },
      {
        citation:
          "Parry, Ellwood C., and Maria Chamberlin-Hellman. “Thomas Eakins as an Illustrator, 1878-1881.” <em>American Art Journal</em> 5, no. 1 (May 1973): 20–45.",
        page_number: "Mentioned: P. 35",
        url: "https://www.jstor.org/stable/1593941",
      },
      {
        citation:
          "Albright-Knox Art Gallery, Detroit Institute of Arts, and Toledo Museum of Art. <em>Heritage and Horizon: American Painting, 1776-1976 : </em>[Exhibition. [Toledo]: Toledo Museum of Art, 1976.",
        page_number: "Mentioned and reproduced: No. 22",
        url: "",
      },
      {
        citation:
          "Hirshhorn Museum and Sculpture Garden, and Phyllis D. Rosenzweig. <em>The Thomas Eakins Collection of the Hirshhorn Museum and Sculpture Garden</em>. Washington DC: Published for the Hirshhorn Museum and Sculpture Garden, Smithsonian Institution, by the Smithsonian Institution Press, 1977.",
        page_number: "Mentioned and Reproduced: p. 50-51",
        url: null,
      },
      {
        citation:
          'Johnson, Mark M. "American Landscapes." <em>Arts and Activities </em>82, no. 4 (December 1977): 28-33.',
        page_number: "Mentioned: P. 31; Reproduced: P. 29, fig. 3",
        url: "",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 232",
        url: "https://archive.org/details/CMAHandbook1978/page/n252",
      },
      {
        citation:
          'Johns, Elizabeth. "Thomas Eakins: A Case for Reassessment." <em>Arts Magazine </em>53, no. 9 (May 1979): 130-133.',
        page_number: "Mentioned: P. 131",
        url: "",
      },
      {
        citation:
          "Johnson, Mark M. <em>Idea to Image: Preparatory Studies from the Renaissance to Impressionism.</em> Cleveland, Ohio: Cleveland Museum of Art, 1980.",
        page_number: "Mentioned and reproduced: P. 44-45, fig. 50",
        url: "",
      },
      {
        citation:
          'Weinberg, Barbara H. "American Impressionism in Cosmopolitan Context." <em>Arts Magazine </em>(November 1980): 160-165.',
        page_number: "Mentioned and reproduced: P. 163-164, fig. 8",
        url: "",
      },
      {
        citation:
          "Silver, Adele Z. <em>Guide to the Galleries.</em> Cleveland, Ohio: Cleveland Museum of Art, 1981.",
        page_number: "Mentioned and reproduced: P. 83-84, fig. 77",
        url: "",
      },
      {
        citation:
          "Goodrich, Lloyd. <em>Thomas Eakin</em>s. Cambridge, Mass: Published for the National Gallery of Art [by] Harvard University Press, 1982.",
        page_number: "Mentioned: P. 83, Vol. I; Reproduced: P. 86, fig. 29",
        url: "",
      },
      {
        citation:
          "Wilmerding, John. “Philadelphia. Thomas Eakins.” <em>The Burlington Magazine</em> 124, no. 954 (September 1982): 583–85.",
        page_number: "Mentioned: P. 583; Reproduced: P. 585, fig. 40",
        url: "http://www.jstor.org/stable/880963",
      },
      {
        citation:
          'Goodrich, Lloyd. "The Art of Thomas Eakins." <em>Portfolio </em>4, no. 5 (September/October 1982): 60-65.',
        page_number: "Mentioned and reproduced: P. 61-62",
        url: "",
      },
      {
        citation:
          "Parry, Ellwood. \"The 'Exact, Uncompromising' Eye of Thomas Eakins.\" <br><em>ARTnews </em>81, no. 8 (October 1982): 80-83.",
        page_number: "Mentioned: P. 82",
        url: "",
      },
      {
        citation:
          "Rosenblum, Robert, and H. W. Janson. <em>19th Century Art</em>. New York: Abrams, 1984.",
        page_number: "Mentioned: P. 357-358; Reproduced: P. 340, pl. 58",
        url: "",
      },
      {
        citation:
          "Weinberg, H. Barbara. <em>The American Pupils of Jean-Léon Gérôme. </em>Fort Worth, Tex: Amon Carter Museum, 1984.",
        page_number: "Mentioned and reproduced: P. 41-42, fig. 27",
        url: "",
      },
      {
        citation:
          'Johns, Elizabeth. "Thomas Eakins: Strokes of Genius." <em>Art &amp; Antiques</em> (September 1984): 72-76.',
        page_number: "Mentioned and reproduced: P. 74-75",
        url: "",
      },
      {
        citation:
          "Milroy, Elizabeth. <em>Thomas Eakins' Artistic Training, 1860-1870. </em>Thesis, University of Pennsylvania, 1986.",
        page_number: "Mentioned: P. 326; Reproduced: P. 418, fig. 57",
        url: "",
      },
      {
        citation:
          'Hubbard, Roberta. "Cleveland: A Cultural Campaign." <em>Horizon </em>29, no. 10 (December 1986): 16-24.',
        page_number: "Reproduced: P. 16",
        url: "",
      },
      {
        citation:
          "Fried, Michael. <em>Realism, Writing, Disfiguration: On Thomas Eakins and Stephen Crane. </em>Chicago: University of Chicago Press, 1987.",
        page_number: "Mentioned and reproduced: P. 47-48, fig. 36",
        url: "",
      },
      {
        citation:
          "Kimmerle, Constance. <em>Thomas Eakins' Exploration of the Mechanism and Laws of Human Expression and Understanding in Themes of Mental Effort and Creative Activity.</em> Thesis, Dissertation, University of Pennsylvania, 1989.",
        page_number: "Mentioned: P. 369",
        url: "",
      },
      {
        citation:
          "Miyazaki, Katsumi. <em>Inshō-ha No Miryoku.</em> Kyōto: Dōhōsha Shuppan, 1990.",
        page_number: "Mentioned and reproduced: P. 71",
        url: "",
      },
      {
        citation:
          "Griffin, Randall C. “Thomas Anshutz’s ‘The Ironworkers’ Noontime’: Remythologizing the Industrial Worker.” <em>Smithsonian Studies in American Art</em> 4, no. 3/4 (Summer-Autumn 1990): 129–43.",
        page_number: "Mentioned and reproduced: P. 139, fig. 13",
        url: "http://www.jstor.org/stable/3109019",
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Interpretations: Sixty-Five Works from the Cleveland Museum of Art</em>. Cleveland, Ohio: Cleveland Museum of Art, 1991.",
        page_number: "Mentioned and reproduced: no. 31",
        url: "",
      },
      {
        citation:
          "Weinberg, H. Barbara. <em>The Lure of Paris: Nineteenth-Century American Painters and Their French Teachers.</em> New York: Abbeville Press Publishers, 1991.",
        page_number: "Mentioned and reproduced: P. 9-10, pl. 5",
        url: "",
      },
      {
        citation:
          "Wilmerding, John. <em>American Views: Essays on American Art.</em> Princeton, N.J.: Princeton University Press, 1991.",
        page_number: "Mentioned: P. 314; Reproduced: P. 316, fig. 214",
        url: "",
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art</em>. Cleveland, Ohio: The Museum, 1991.",
        page_number: "Reproduced; p. 32",
        url: "https://archive.org/details/CMAHandbook1991/page/n147",
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Masterpieces from East and West. </em>New York, NY: Rizzoli International, 1992.",
        page_number: "Mentioned and reproduced: P. 145",
        url: "",
      },
      {
        citation:
          "Homer, William Innes. <em>Thomas Eakins: His Life and Art. </em>New York: Abbeville Press, 1992.",
        page_number: "Mentioned and reproduced: P. 61, fig. 50",
        url: "",
      },
      {
        citation:
          "Chong, Alan. <em>European &amp; American Painting in the Cleveland Museum of Art: A Summary Catalogue</em>. Cleveland, Ohio: Cleveland Museum of Art, 1993.",
        page_number: "Mentioned and reproduced: P. 71",
        url: "",
      },
      {
        citation:
          "Wilmerding, John. <em>Thomas Eakins (1844-1916) and the Heart of American Life.</em> London: National Portrait Gallery, 1993.",
        page_number: "Mentioned: P. 20, 69",
        url: "",
      },
      {
        citation:
          "Griffin, Randall C. <em>Thomas Anshutz: Artist and Teach</em>er. Huntington, N.Y. : Heckscher Museum in association with the University of Washington Press, Seattle, 1994.",
        page_number: "Mentioned: P. 46; Reproduced: P. 48, fig. 16",
        url: "",
      },
      {
        citation:
          '"1993 Annual Report." <em>The Bulletin of the Cleveland Museum of Art</em> 81, no. 6 (1994): 143-218.',
        page_number: "Mentioned: p. 170",
        url: "https://www.jstor.org/stable/25161457",
      },
      {
        citation:
          "Berger, Martin Andrew. <em>Determining Manhood: Constructions of Sexuality in the Art of Thomas Eakins.</em> Dissertation Yale University, 1995.",
        page_number: "Mentioned: P. 32-37; Reproduced: P. 173, fig. 8",
        url: "",
      },
      {
        citation:
          "Milroy, Elizabeth, and W. Douglass Paschall. <em>Guide to the Thomas Eakins Research Collection with a Lifetime Exhibition Record and Bibliography.</em> Philadelphia, Pa: Philadelphia Museum of Art, 1996.",
        page_number: "Mentioned: P. 21, 23, 36",
        url: "",
      },
      {
        citation:
          "Cooper, Helen A. Thomas Eakins: The Rowing Pictures. New Haven, Conn: Yale University Art Gallery, 1996.",
        page_number: "illus. fig. no. 26, p. 51, listed p. 137",
        url: null,
      },
      {
        citation:
          'Distel, Anne. "Yerres." In <em>Gustave Caillebotte: The Unknown Impressionist.</em> Anne Distel, 45-62. London: Royal Academy of Arts, in association with Ludion Press, Ghent, 1996.',
        page_number: "Mentioned and reproduced: P. 48-49, fig. 5",
        url: "",
      },
      {
        citation:
          "Baigell, Matthew.<em> A Concise History of American Painting and Sculpture.</em> New York: IconEditions, 1996.",
        page_number: "Mentioned and reproduced: P. 139-140, fig. 137",
        url: "",
      },
      {
        citation:
          "Mørstad, Erik. <em>Malerileksikon: Teknikker, motivtyper og estetikk. </em>Oslo: Ad Notam Gyldendal, 1996.",
        page_number: "Reproduced: P. 283",
        url: "",
      },
      {
        citation:
          "Werbel, Amy Beth. <em>Perspective in the Life and Art of Thomas Eakins.</em> Dissertation, Yale University, 1996.",
        page_number: "Mentioned: P. 118; Reproduced: P. 244, fig. 58",
        url: "",
      },
      {
        citation:
          'Cooper, Helen. "The Rowing Pictures of Thomas Eakins." <em>The Magazine Antiques </em>150, no. 2 (August 1996): 166-177.',
        page_number: "Mentioned: P. 173; Reproduced: P. 174-175",
        url: "",
      },
      {
        citation:
          'Loos, Ted. "Eakins\'s Shell Game." <em>Art &amp; Antiques </em>19, no. 10 (November 1996): 99-105.',
        page_number: "Mentioned and reproduced: P. 102",
        url: "",
      },
      {
        citation:
          "Masschelein-Currie, Christina. 1997. “Thomas Eakins under the Microscope: A Technical Study of the Rowing Paintings.” <em>American Artist</em> 61, no. 654 ( January 1997): 12-19.",
        page_number: "Mentioned and reproduced: P. 15-17, figs. 1-4, 7-9",
        url: "",
      },
      {
        citation:
          "Foster, Kathleen A., and Mark Bockrath. <em>Thomas Eakins Rediscovered: Charles Bregler's Thomas Eakins Collection at the Pennsylvania Academy of the Fine Arts.</em> New Haven: Yale University Press, 1997.",
        page_number: "Mentioned: P. 83, 125, 126, 143",
        url: "",
      },
      {
        citation:
          'Berger, Martin A. "Modernity and Gender in Thomas Eakins\'s Swimming." <em>American Art </em>11, no. 3 (Fall 1997): 32-47.',
        page_number: "Reproduced: P. 36, fig. 3; Mentioned: P. 38",
        url: "",
      },
      {
        citation:
          'Burns, Sara Lea. "Thomas Eakins Exposed." <em>Nineteenth-Century Studies </em>13 (1999): 139-152.',
        page_number: "Mentioned: P. 143; Reproduced: P. 145",
        url: "",
      },
      {
        citation:
          "Groseclose, Barbara S.<em> Nineteenth-Century American Art.</em> Oxford: Oxford University Press, 2000.",
        page_number: "Mentioned and reproduced: P. 103, no. 65",
        url: "",
      },
      {
        citation:
          "Mishory, Alec. <em>Art History: An Introduction.</em> Tel-Aviv: Open University of Israel, 2000.",
        page_number: "Reproduced: P. 83, no. 69",
        url: "",
      },
      {
        citation:
          "Berger, Martin A. <em>Man Made: Thomas Eakins and the Construction of Gilded Age Manhood</em>. Berkeley, Calif: University of California Press, 2000.",
        page_number: "Mentioned: P. 3, 23, 133 n. 51; Reproduced: Pl. 2",
        url: "",
      },
      {
        citation:
          'Sewell, Darrel, Kathleen A. Foster, and Thomas Eakins. Thomas Eakins: [... on the Occasion of the Exhibition "Thomas Eakins. American Realist" ... Philadelphia Museum of Art, October 4, 2001, to January 6, 2002 ...]. [New Haven, Conn.]: Yale Univ. Press, 2001.',
        page_number: "illus. pl. 6, p. 45, pp. 27-40, 390-391",
        url: null,
      },
      {
        citation:
          'Ledes, Allison Eckardt. "Current and Coming: Eakins in Philadelphia." <em>The Magazine Antiques </em>160, no. 4 (October 2001): 398-400.',
        page_number: "Mentioned: P. 400; Reproduced: P. 398",
        url: "",
      },
      {
        citation:
          "Esten, John.<em> Thomas Eakins: The Absolute Male.</em> New York, NY: Universe Pub, 2002.",
        page_number: "Reproduced: P. 39; mentioned: P. 78",
        url: "",
      },
      {
        citation:
          "Esten, John, and Thomas Eakins. Thomas Eakins: The Absolute Male. New York, NY: Universe Pub, 2002.",
        page_number: "Mentioned and reproduced: P. 61-63",
        url: "",
      },
      {
        citation:
          "Homer, William Innes. <em>Thomas Eakins: His Life and Art</em>. New York: Abbeville Press, 2002.",
        page_number: "Mentioned and reproduced: P. 61-63, fig. 50",
        url: "",
      },
      {
        citation:
          'Pinelli, Orietta Rossi. "Un Pittore a Bordo Ring." <em>Art e dossier </em>175 (February 2002): 36-43.',
        page_number: "Reproduced: P. 39",
        url: "",
      },
      {
        citation:
          "Cleveland Museum of Art. <em>American Painting</em>. Cleveland, Ohio: Cleveland Museum of Art, 2003.",
        page_number: "Reproduced: P. 2",
        url: "",
      },
      {
        citation:
          "Griffin, Randall C. <em>Homer, Eakins, and Anshutz: The Search for American Identity in the Gilded Age.</em> University Park, Pa: Pennsylvania State University, 2004.",
        page_number: "Mentioned and reproduced: P. 50, fig. 19",
        url: "",
      },
      {
        citation:
          "Rosenblum, Robert, and H. W. Janson. <em>19th-Century Art. </em>Upper Saddle River, N.J.: Prentice Hall, 2005.",
        page_number: "Mentioned and reproduced: P. 364, fig. 350",
        url: "",
      },
      {
        citation:
          "Adams, Henry. <em>Eakins Revealed: The Secret Life of an American Artist.</em> Oxford [England]: Oxford University Press, 2005.",
        page_number: "Mentioned: P. 270, 243-244, 337; Reproduced: P. 192",
        url: "",
      },
      {
        citation:
          "Updike, John. <em>Still Looking: Essays on American A</em>rt. New York: Knopf, 2005.",
        page_number: "Mentioned: P. 76",
        url: "",
      },
      {
        citation:
          "Burns, Sarah. \"Ordering the Artist's Body: Thomas Eakins's Acts of Self-Portrayal.\"<em> American Art </em>19, no. 1 (Spring 2005): 82-107.",
        page_number: "Mentioned: P. 91",
        url: "",
      },
      {
        citation:
          "Kirkpatrick, Sidney. <em>The Revenge of Thomas Eakin</em>s. New Haven: Yale University Press, 2006.",
        page_number:
          "Reproduced: Pl. 5; Mentioned: P. 444, 146-147, 151-154, 160, 174, 187, 254",
        url: "",
      },
      {
        citation:
          "Novak, Barbara. <em>Nature and Culture: American Landscape and Painting, 1825-1875.</em> New York, NY: Oxford University Press, 2007.",
        page_number: "Mentioned and reproduced: P. 222, fig. 10.15",
        url: "",
      },
      {
        citation:
          'Cooper, James F. "Is Thomas Eakins a Great Artist?" <em>American Arts Quarterly </em>24, no. 2 (Spring 2007): 2-9.',
        page_number: "Mentioned: P. 3, 8",
        url: "",
      },
      {
        citation:
          "Fonsmark, Anne-Birgitte, Dorothee Hansen, and Gry Hedin. <em>Gustave Caillebotte.</em> Ostfildern: Hatje Cantz, 2008.",
        page_number: "Mentioned and reproduced: P. 112, fig. 4",
        url: "",
      },
      {
        citation:
          "Adams, Henry. <em>What's American About American Art?: A Gallery Tour in the Cleveland Museum of Art.</em> Cleveland: Cleveland Museum of Art, 2008.",
        page_number: "Mentioned and reproduced: P. 90-93",
        url: "",
      },
      {
        citation:
          '"Welcome Back!" <em>Cleveland Art: Cleveland Museum of Art Members Magazine </em>48, no. 5 (May/June 2008): 5-6.',
        page_number: "Mentioned: P. 6",
        url: "",
      },
      {
        citation:
          'Leja, Michael. "Composite Images In a Hybrid Medium by Thomas Eakins and His Contemporaries." In <em>Shared Intelligence: American Painting and the Photograph.</em> Barbara Buhler Lynes, and Jonathan Weinberg, 28-41. Berkeley [Calif.]: University of California Press, 2011.',
        page_number: "Mentioned and reproduced: P. 32-33",
        url: "",
      },
      {
        citation:
          "Guttmann, Allen. S<em>ports and American Art from Benjamin West to Andy Warhol.</em> Amherst [Mass.]: University of Massachusetts Press, 2011.",
        page_number: "Mentioned: P. 106; Reproduced: Pl. 17",
        url: "",
      },
      {
        citation:
          "Fort, Ilene Susan. <em>Manly Pursuits: Writings on the Sporting Images of Thomas Eakins. </em>[Los Angeles]: Los Angeles County Museum of Art, 2011.",
        page_number: "Mentioned: P. 66, 67, 227, 345-350; Reproduced: P. 43",
        url: "",
      },
      {
        citation:
          "Franklin, David, and C. Griffith Mann. <em>Treasures from the Cleveland Museum of Art</em>. Cleveland, OH: Cleveland Museum of Art, 2012.",
        page_number: "Mentioned and reproduced: P. 266-267",
        url: "",
      },
      {
        citation:
          '"Personal Favorite: Gloria Plevin." <em>Cleveland Art: Cleveland Museum of Art Members Magazine </em>53, no. 4 (July/August 2013): 16.',
        page_number: "Mentioned and reproduced: P. 16",
        url: "",
      },
      {
        citation:
          "Davis, John, Jennifer A. Greenhill and Jason David LaFountain. <em>A Companion to American Art.</em> Malden, MA: Wiley- Blackwell, 2015.",
        page_number: "Reproduced: p. 149, figure 9.2 Mention: p. 148",
        url: null,
      },
      {
        citation:
          '"Personal Favorite: William Busta." <em>Cleveland Art: Cleveland Museum of Art Members Magazine </em>55, no. 6 (November/December 2015): 12.',
        page_number: "Mentioned and reproduced: P. 12",
        url: "",
      },
      {
        citation:
          "Hendricks, Gordon. <em>The Life and Work of Thomas Eakins</em>. New York, NY: Grossman Publishers, 1974.",
        page_number:
          "Mentioned: p. 65-86, 296-298, 335-336; Reproduced: pl. 12 and 13 (detail).",
        url: null,
      },
      {
        citation:
          "Lanouette, William. The Triumph of the Amateurs: The Rise, Ruin, and Banishment of Professional Rowing in the Gilded Age, Guilford, Connecticut : Lyons Press, 2021, 215",
        page_number:
          "Mentioned: p. 215, Reproduced; second page of image section following p. 138",
        url: "",
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1927.1984",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1927.1984/1927.1984_web.jpg",
        width: "1263",
        height: "835",
        filename: "1927.1984_web.jpg",
        filesize: "780656",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1927.1984/1927.1984_print.jpg",
        width: "3400",
        height: "2247",
        filename: "1927.1984_print.jpg",
        filesize: "5271592",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1927.1984/1927.1984_full.tif",
        width: "7164",
        height: "4735",
        filename: "1927.1984_full.tif",
        filesize: "101799424",
      },
    },
    updated_at: "2022-03-30 09:00:29.605000",
  },
  {
    id: 138464,
    accession_number: "1962.37",
    share_license_status: "CC0",
    tombstone:
      "Cupid and Psyche, 1817. Jacques-Louis David (French, 1748-1825). Oil on canvas; framed: 221 x 282 x 10 cm (87 x 111 x 3 15/16 in.); unframed: 184.2 x 241.6 cm (72 1/2 x 95 1/8 in.). The Cleveland Museum of Art, Leonard C. Hanna, Jr. Fund 1962.37",
    current_location: "201 French Neoclassical Painting & Sculpture",
    title: "Cupid and Psyche",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1817",
    creation_date_earliest: 1817,
    creation_date_latest: 1817,
    creators: [
      {
        id: 1643,
        description: "Jacques-Louis David (French, 1748-1825)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography:
          "The founder and leading painter of the neoclassical movement in France, Jacques-Louis David was born in Paris to a prosperous family of artists and archi-tects. In 1766 he entered the Académie Royale as the pupil of Joseph-Marie Vien (1716-1809). After several failed attempts, David won the Prix de Rome in 1774. The following year he left for Italy, where he studied antique art and envisioned replacing the frivolity of the rococo with an art of grandeur, simplicity, and moral virtue. After returning to Paris in 1780, he established his reputa-tion with three spectacular successes at the Salon: The Oath of the Horatii (1785, Musée du Louvre, Paris), The Death of Socrates (1787, Metropolitan Museum of Art, New York), and The Lictors Bring-ing Brutus the Bodies of His Sons (1789, Musée du Louvre, Paris). Widely interpreted as moral parables for contemporary political events, these archetypes of neoclassical aesthetics set the standard for academic painting of the next century. In the 1790s David joined the radical Jacobin Club and played an active role in the French Revolution. He allied himself with Robespierre, served a short term as president of the Convention, and voted for the execution of Louis XVI. He also placed his artistic talents at the service of the Revolution by creating paintings that glorified its martyrs and by organizing public festivals that celebrated the new political order. As the most prominent artist in the revolutionary ranks, he led the attack against the Académie Royale that culminated in its abolish-ment in 1793. When the excesses of the Reign of Terror precipitated the fall of Robespierre in 1794, David was imprison-ed but spared execution. Authorities released him the following year due to ill health. Around 1798 David developed a new alliance with the brilliant young general of the Directory, Napoléon Bonaparte. David's painting The Intervention of the Sabine Women (1799, Musée du Louvre, Paris) coalesced perfectly with Napoleonic propaganda urging national reconciliation. After the coup d'état of 1799, Napoléon was named first consul and began supplying David with important commissions. Upon Napoléon's coronation in 1804, David was appointed first painter to the emperor. David's monumental painting The Coronation of Napoléon, or Le Sacre (1805-7, Musée du Louvre, Paris), introduced a less spartan, more colorful and emotive style. However, as seen in his life-size portrait Napoléon in His Study (1812, National Gallery of Art, Washington, D.C.), David increasingly searched to balance this new heroic-romanticism with an exacting realism. In 1816, following Napoléon's defeat at Waterloo and the restoration of the monarchy, David went into exile in Belgium. He spent the last nine years of his life in Brussels, painting mostly mythological subjects and portraits. David died of a stroke in 1825 and was denied burial in France.",
        name_in_original_language: null,
        birth_year: "1748",
        death_year: "1825",
      },
    ],
    culture: ["France, 19th century"],
    technique: "oil on canvas",
    support_materials: [],
    department: "Modern European Painting and Sculpture",
    collection: "Mod Euro - Painting 1800-1960",
    type: "Painting",
    measurements:
      "Framed: 221 x 282 x 10 cm (87 x 111 x 3 15/16 in.); Unframed: 184.2 x 241.6 cm (72 1/2 x 95 1/8 in.)",
    dimensions: {
      framed: {
        height: 2.21,
        width: 2.82,
        depth: 0.1,
      },
      unframed: {
        height: 1.842,
        width: 2.416,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Leonard C. Hanna, Jr. Fund",
    copyright: null,
    inscriptions: [
      {
        inscription:
          "Signed in yellow in arm of the couch: L. David 1817 Bruxelles\r\n",
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 302276,
          title: "Year in Review - 1962",
          description:
            "<i>Year in Review - 1962</i>. The Cleveland Museum of Art (organizer) (October 24-November 25, 1962).",
          opening_date: "1962-10-24T04:00:00",
        },
        {
          id: 304705,
          title: "Neo-classicism: Style and Motif",
          description:
            "<i>Neo-classicism: Style and Motif</i>. The Cleveland Museum of Art (organizer).",
          opening_date: "1964-09-23T04:00:00",
        },
        {
          id: 455290,
          title: "The Age of Neoclassicism",
          description:
            "<i>The Age of Neoclassicism</i>. Arts Council of Great Britain (organizer) (September 7-November 19, 1972).",
          opening_date: "1972-09-07T04:00:00",
        },
        {
          id: 223677,
          title: "Jacques-Louis David: Empire to Exile",
          description:
            "<i>Jacques-Louis David: Empire to Exile</i>. J. Paul Getty Museum, Los Angeles, CA (February 1-April 24, 2005); Sterling and Francine Clark Art Institute, Williamstown, MA (organizer) (June 5-September 5, 2005).",
          opening_date: "2005-02-01T00:00:00",
        },
        {
          id: 180662,
          title: "CMA @ Oberlin (first rotation)",
          description:
            "<i>CMA @ Oberlin (first rotation)</i>. Allen Memorial Art Museum, Oberlin, OH (January 31-April 3, 2006).",
          opening_date: "2006-01-31T00:00:00",
        },
        {
          id: 222394,
          title:
            "Masterpieces of European Painting from The Cleveland Museum of Art",
          description:
            "<i>Masterpieces of European Painting from The Cleveland Museum of Art</i>. Frick Collection, New York, NY (organizer) (November 8, 2006-January 28, 2007).",
          opening_date: "2006-11-08T00:00:00",
        },
        {
          id: 179662,
          title:
            "Masterpieces of European Painting from the Cleveland Museum of Art",
          description:
            "<i>Masterpieces of European Painting from the Cleveland Museum of Art</i>. Maltz Museum of Jewish Heritage, Beachwood, OH (March 29-July 8, 2007).",
          opening_date: "2007-03-29T00:00:00",
        },
      ],
      legacy: [
        "City Hall, Ghent, Belgium (1817). (According to Dowd 1956).",
        "<em>Au profit des hospices de Sainte-Gudule et des Ursuline</em>s. Musée Royal de Bruxelles, Bruxelles, Belgium (1817). (See Wildenstein and Wildenstein 1973).",
        "<em>Au profit des Grecs</em>. Galerie Lebrun, Paris, France (1826). (According to David, exh. cat., Orangerie des Tuileries, Paris, France (1948).",
        "<em>Gros, ses amis, ses élèves</em>. Petit Palais, Paris, France (1936).",
        "<em>David: Exposition en l'honneur du deuxième centenaire de sa naissance</em>. Orangerie des Tuileries, Paris, France (June-September, 1948).",
      ],
    },
    provenance: [
      {
        description:
          "Giovanni Battista Comte de Sommariva [1760-1826], his sale February 18-23, 1839, sold to Dubois.",
        citations: [],
        footnotes: [],
        date: "1839",
      },
      {
        description: "(Dubois, Paris, France, February 18-23, 1839, lot 1)",
        citations: [],
        footnotes: null,
        date: "1839",
      },
      {
        description:
          "James Alexandre Comte de Pourtalès [1776-1855], Paris. France.",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description:
          "Pourtalès-Gorgier sale, Paris, France, March 27, 1865 (lot 242), ff 1,450 sold to Madame de Furtado, 1880.",
        citations: [],
        footnotes: [],
        date: "1880",
      },
      {
        description: "Madame de Furtado [1821-1896], Paris, France",
        citations: [],
        footnotes: [],
        date: "1880-?",
      },
      {
        description: "M. Eisenschitz ? (See distinguishing marks label)",
        citations: [],
        footnotes: null,
        date: null,
      },
      {
        description:
          "Prince Murat by 1913. Princesse Murat. Murat sale, Palais Galliéra, Paris, France, March 2, 1961 (lot 140), ff 245,000.",
        citations: [],
        footnotes: null,
        date: null,
      },
      {
        description:
          "(Rosenberg & Stiebel, New York, NY sold to the Cleveland Museum of Art)",
        citations: [],
        footnotes: null,
        date: "1962",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, OH",
        citations: [],
        footnotes: null,
        date: "1962",
      },
    ],
    find_spot: null,
    related_works: [
      {
        id: 162396,
        description:
          "Cupid and Psyche, 1813. Jacques-Louis David (French, 1748-1825). Gray wash and pen and black ink with white paint and traces of black chalk ; sheet: 16.7 x 22.4 cm (6 9/16 x 8 13/16 in.). The Cleveland Museum of Art, Andrew R. and Martha Holden Jennings Fund 2002.91",
        relationship: "based on",
      },
    ],
    former_accession_numbers: [],
    fun_fact:
      "Jacques-Louis David included two butterflies in this painting: one above the slumbering Psyche and the other on the base of the couple's bed frame.",
    digital_description: null,
    wall_description:
      "David used the story of Cupid and Psyche to explore the conflict between idealized love and physical reality. Cupid, lover of the beautiful mortal Psyche, visited her nightly on the condition that she not know his identity. Cupid was usually depicted as an ideal adolescent, but here David presents him as an ungainly teenager smirking at his sexual conquest.David took inspiration from a number of ancient texts, including an obscure, recently published Greek poem by Moschus that describes Cupid as a mean-spirited brat with dark skin, flashing eyes, and curly hair.",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1962.37-cupid-and-psyche",
      ],
    },
    citations: [
      {
        citation:
          "Dibdin, Thomas Frognall, William Bulmer, William Nicol, R. H. Evans, Robert Triphook, and John Major. <em>A Bibliographical, Antiquarian and Picturesque Tour in France and Germany</em>. 1821.",
        page_number: "Mentioned: vol. 2, p. 309-310",
        url: null,
      },
      {
        citation:
          "Blanc, Charles and Adolphe Narcisse Thibaudeau. <em>Le trésor de la curiosité, tiré des catalogues de vente de tableaux, dessins, estampes, livres, marbres, bronzes, ivoires, terres cuites, vitraux, médailles, armes, precelaines, meubles, émaux, laques et autres objets d'art</em>. Paris: Ve J. Renouard, 1857.",
        page_number: "Mentioned: vol. 2, p. 437",
        url: null,
      },
      {
        citation:
          "Rosenthal, Léon. Louis David. Paris: Librairie de l'art ancien et moderne, 1904.",
        page_number: "Mentioned: p. 139-140",
        url: null,
      },
      {
        citation:
          "Musée du Petit Palais. <em>Exposition David et ses élèves, 7 avril-9 juin, 1913, Palais des beaux-arts de la ville de Paris</em>. Paris: Impr. G. Petit, 1913.",
        page_number: "Reproduced: no. 60",
        url: null,
      },
      {
        citation:
          "Gallatin, James. <em>A Great Peace Maker; The Diary of James Gallatin, Secretary to Albert Gallatin, 1813-1827</em>. New York, NY: C. Scribner's Sons, 1930.",
        page_number: "Mentioned: p. 64; Reproduced: p. 67",
        url: null,
      },
      {
        citation:
          "Cantinelli, R. <em>Jacques-Louis David, 1748-1825</em>. Paris: Editions G. van Oest, 1930.",
        page_number: "Reproduced: no. 143",
        url: null,
      },
      {
        citation:
          "Escholier, Raymond and Germaine Barnaud. <em>Gros, ses amis et ses élèves</em>. Paris: Petit Palais, 1936.",
        page_number: "Reproduced: p. 218",
        url: null,
      },
      {
        citation:
          "Kolma, Klaus. <em>David, son evolution et son style</em>. Paris: P. Lejay, 1940.",
        page_number: "Mentioned: p. 94-95; Reproduced: p. 129, no. 149",
        url: null,
      },
      {
        citation:
          "Maret, Jacques. <em>David</em>. Monaco: Documents d'Art, 1943",
        page_number: "Mentioned: p. 16; Reproduced: p. 94",
        url: null,
      },
      {
        citation:
          "Maurois, André and Françoise Gaston-Chérau. <em>J.-L. David</em>. Paris: Éditions du Dimanche, 1948.",
        page_number: "Reproduced: no. 36",
        url: null,
      },
      {
        citation:
          "Florisoone, Michel. <em>David: exposition en l'honneur du deuxième centenaire de sa naissance</em>. Paris: Éditions des Musées Nationaux, 1948.",
        page_number: "Reproduced: no. 72",
        url: null,
      },
      {
        citation:
          "Galerie Charpentier. <em>Figures nues d'écloe française; depuis les maîtres de Fontainebleau</em>: Paris: 1953.",
        page_number: "Reproduced: p. 45",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art, “Recent Acquisition Press Release,” June 13, 1962, Cleveland Museum of Art Archives.",
        page_number: null,
        url: "https://archive.org/details/cmapr0964",
      },
      {
        citation:
          "Francis, Henry S. \"Jacques Louis David 'Cupid and Psyche'.\" <em>Bulletin of the Cleveland Museum of Art, </em>vol. L (1963): 29-34.",
        page_number: "Reproduced: p. 34",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland: Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 164",
        url: "https://archive.org/details/CMAHandbook1966/page/n188",
      },
      {
        citation:
          "<em>Fiftieth Anniversary Exhibition, 1915-1965. November 4, 1965-January 2, 1966. </em>Minneapolis: Minneapolis Institute of Arts, 1966.",
        page_number: "Reproduced: no. 20",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland: Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 164",
        url: "https://archive.org/details/CMAHandbook1969/page/n188",
      },
      {
        citation:
          "Council of Europe, Royal Academy of Arts, Victoria and Albert Museum, and Arts Council of Great Britain. <em>The Age of Neo-Classicism </em>(catalogue of exhibition at the Royal Academy of Arts and the V&amp;A Museum). London: Arts Council of Great Britain, 1972.",
        page_number: "Reproduced: no. 71",
        url: null,
      },
      {
        citation:
          "Verbraeken, René. <em>Jacques-Louis David jugé par ses contemporains et par la postérité. Suivi de la liste des tableaux dont l'authenticité est garantie par les écrits de l'artiste, des documents de son époque, ou par leur appartenance à ses descendants</em>. Paris: L. Laget, 1973.",
        page_number: "Mentioned: p. 29,105-106,184; Reproduced: p. 186, pl. 65",
        url: null,
      },
      {
        citation:
          "Praz, Mario. <em>Gusto neoclassico</em>. Milan: Rizzoli, 1974.",
        page_number: "Mentioned: p. 18, 123; Reproduced: p. 255, pl. 27",
        url: null,
      },
      {
        citation:
          "Heim Gallery. <em>Exhibition of French Drawings: Neo-Classicism</em>. London: Heim Gallery, 1975.",
        page_number: "Reproduced: no. 26",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland: Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 202",
        url: "https://archive.org/details/CMAHandbook1978/page/n222",
      },
      {
        citation:
          'Borowitz, Helen O. "The Man Who Wrote to David." <em>The Bulletin of the Cleveland Museum of Art</em> 67, no. 8 (1980): 256-74.',
        page_number: "Mentioned and reproduced: P. 263-264",
        url: "http://www.jstor.org/stable/25159691",
      },
      {
        citation:
          "Lawrence, Mary. <em>Lovers: 100 Works of Art Celebrating Romantic Love, with Commentaries by the Distinguished and the Great</em>. New York, NY: A &amp; W Publishers, 1982.",
        page_number: "Mentioned: p. 144-145; Reproduced: p. 145",
        url: null,
      },
      {
        citation:
          "Louise d'Argencourt, Roger Diederen, Alisa Luxenberg, Patrick Noon, William H. Robinson, Ann Tzeutschler Lurie. <em>European Paintings of the 19th Century</em>. Cleveland: Cleveland Museum of Art 1999.",
        page_number: "I:194-202",
        url: null,
      },
      {
        citation:
          "Laveissière, Sylvain and Philippe Bordes. <em>Pierre-Paul Prud'hon: actes du colloque organisé au Musée du Louvre par le Service culturel, le 17 novembre 1997</em>. Paris: Documentation française, 2001.",
        page_number: "Reproduced: fig. 19",
        url: null,
      },
      {
        citation:
          "Cavicchioli, Sonia. <em>The Tale of Cupid and Psyche: An Illustrated History</em>. New York, NY: George Braziller, 2002.",
        page_number: "Reproduced: p. 209, fig.148",
        url: null,
      },
      {
        citation:
          "Baur, Eva Gesine. <em>Meisterwerke der erotischen Kunst</em>. Cologne: Dumont, 2002.",
        page_number: "Reproduced: p. 73, fig.4",
        url: null,
      },
      {
        citation:
          "Greer, Germainer. <em>The Beautiful Boy</em>. New York, NY: Rizzoli, 2003.",
        page_number: "Reproduced: p. 84",
        url: null,
      },
      {
        citation:
          "Delaporte, François. <em>Anatomie des passions</em>. Paris: Presses Universitaires de France, 2003.",
        page_number: "Reproduced: pl. 9",
        url: null,
      },
      {
        citation:
          "Pinelli, Antonio. <em>David</em>. Milan: 5 Continents, 2004.",
        page_number: "Reproduced: pl. 46",
        url: null,
      },
      {
        citation:
          "Bordes, Philippe. <em>Jacques-Louis David: Empire to Exile</em>. New Haven: Yale University Press, 2005.",
        page_number: "Mentioned: p. 231-232; Reproduced: no. 32",
        url: null,
      },
      {
        citation:
          "Musée du Louvre. <em>Rūvuru Bijutsukan ten: 19-seiki Furansu kaiga : shin koten shugi kara roman shugi e </em>(Louvre: chefs-d'œuvre de la peinture française du XIXème siècle dans les collections du Louvre). Tokyo: Nihon Terebi Hōsōmō, 2005.",
        page_number: "Reproduced: p. 42",
        url: null,
      },
      {
        citation:
          "Iacono, Margaret. <em>Masterpieces of European Painting from the Cleveland Museum of Art</em>. New York, NY: Frick Collection, 2006.",
        page_number: "Mentioned: p. 64-69; no. 13",
        url: null,
      },
      {
        citation:
          "Holm, Christiane. <em>Amor und Psyche: die Erfindung eines Mythos in Kunst, Wissenschaft und Alltagskultur (1765-1840)</em>. Munich: Deutscher Kunstverlag, 2006.",
        page_number: "Mentioned: p. 20-21,115-116,192-194,251,159",
        url: null,
      },
      {
        citation:
          "Carrier, David. <em>Museum Skepticism: A History of the Display of Art in Public Galleries</em>. Durham, North Carolina: Duke University Press, 2006.",
        page_number: "Reproduced: p. 72, fig.11",
        url: null,
      },
      {
        citation:
          "Johnson, Dorothy. <em>Jacques-Louis David: New Perspectives</em>. Newark: University of Delaware Press, 2006.",
        page_number: "Reproduced: p. 30, pl. 14",
        url: null,
      },
      {
        citation:
          "Lampe, Issa. <em>Painting History Ex Patria: Empire, Exile and Memory in the Late Narrative Paintings of Jacques-Louis David (1817-1824)</em>. Ph.D. diss., Harvard University, 2006.",
        page_number: "Reproduced: p. 265, fig. 4",
        url: null,
      },
      {
        citation:
          "Ledbury, Mark. <em>David After David: Essays on the Later Work</em>. Williamstown, MA: Sterling and Francine Clark Art Institute, 2007.",
        page_number: "Reproduced: fig. 4",
        url: null,
      },
      {
        citation:
          "Allard, Sébastien and Marie-Claude Chaudonneret. <em>Le suicide de Gros: les peintres de l'Empire et la génération romantique</em>. Paris: Gourcuff Gradenigo, 2010.",
        page_number: "Reproduced: p. 65",
        url: null,
      },
      {
        citation:
          "Johnson, Dorothy. <em>David to Delacroix: The Rise of Romantic Mythology</em>. Chapel Hill: University of North Carolina Press, 2011.",
        page_number: "Reproduced: p. 14, fig. 5",
        url: null,
      },
      {
        citation:
          "Allard, Sébastien, Nadeije Laneyrie-Dagen, and Emmanuel Pernoud. <em>L'enfant dans la peinture</em>. Paris: Citadelles &amp; Mazenod, 2011.",
        page_number: "Mentioned: p. 248-249; Reproduced: p. 249",
        url: null,
      },
      {
        citation:
          "Leniaud, Jean-Michel. <em>Napoléon et les arts</em>. Paris: Citadelles &amp; Mazenod, 2012.",
        page_number: "Reproduced: p. 402",
        url: null,
      },
      {
        citation:
          "<em>Treasures of the Cleveland Museum of Art</em>. Cleveland:Cleveland Museum of Art in association with Scala Publishers, 2012.",
        page_number: "Reproduced: p. 226-227",
        url: null,
      },
      {
        citation:
          "Pomarède, Vincent, Valeria Merlini, and Daniela Storti. <em>Cupid and Psyche</em>. Soveria Mannelli, Italy: Rubbettino Editore, 2012.",
        page_number: "Reproduced: p. 39, fig. 14",
        url: null,
      },
      {
        citation:
          "Cogeval, Guy. <em>Masculin masculin: l'homme nu dans l'art de 1800 à nos jours</em>. Paris: Musée d'Orsay, 2013.",
        page_number: "Reproduced: p. 15, fig. 5",
        url: null,
      },
      {
        citation:
          "Fried, Michael. <em>Another Light: Jacques-Louis David to Thomas Demand. </em>New Haven: Yale University Press, 2014.",
        page_number: "Reproduced: p. 27",
        url: null,
      },
      {
        citation:
          'Langer, Laurent. "James de Pourtales. Collectionneur de tableaux contemporains." In <em>Kunst &amp; Karriere: ein Kaleidoskop des Kunstbetriebs.</em> Ed. by Bätschmann, Oskar, and Regula Krähenbühl, 139-154. Zürich: Schweizerisches Institut für Kunstwissenschaft, 2015.',
        page_number: "Reproduced: p. 142, fig. 2",
        url: null,
      },
      {
        citation:
          "Guichard, Charlotte. <em>La griffe du peintre: la valeur de l'art (1730-1820).</em> Paris: Éditions du Seuil, 2018.",
        page_number: "Reproduced and mentioned: p. 250-251, fig.75",
        url: null,
      },
      {
        citation:
          'Arendsee, M. and M. Steinman-Arendsee. "Take the CAN disability aesthetics tour, at the Cleveland Museum of art." CAN Journal (Winter 2019/20): 76-87.',
        page_number: "Mentioned: p. 77",
        url: null,
      },
      {
        citation:
          "David, Jacques Louis, and Perrin Stein. Jacques Louis David: Radical Draftsman. 2022, 245.",
        page_number: "Mentioned and reproduced, p. 245, fig. 140.",
        url: "",
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1962.37",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1962.37/1962.37_web.jpg",
        width: "1180",
        height: "893",
        filename: "1962.37_web.jpg",
        filesize: "695293",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1962.37/1962.37_print.jpg",
        width: "3400",
        height: "2574",
        filename: "1962.37_print.jpg",
        filesize: "5203435",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1962.37/1962.37_full.tif",
        width: "5000",
        height: "3785",
        filename: "1962.37_full.tif",
        filesize: "56804216",
      },
    },
    updated_at: "2022-04-02 09:00:31.483000",
  },
  {
    id: 122349,
    accession_number: "1942.645",
    share_license_status: "CC0",
    tombstone:
      "Portrait of the Ladies Amabel and Mary Jemima Yorke, c. 1761. Joshua Reynolds (British, 1723-1792). Oil on canvas; framed: 224.5 x 201.3 x 11.4 cm (88 3/8 x 79 1/4 x 4 1/2 in.); unframed: 196 x 170 cm (77 3/16 x 66 15/16 in.); former: 223.5 x 198 x 9 cm (88 x 77 15/16 x 3 9/16 in.). The Cleveland Museum of Art, Bequest of John L. Severance 1942.645",
    current_location: "203A British Painting and Decorative Arts",
    title: "Portrait of the Ladies Amabel and Mary Jemima Yorke",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "c. 1761",
    creation_date_earliest: 1756,
    creation_date_latest: 1766,
    creators: [
      {
        id: 2541,
        description: "Joshua Reynolds (British, 1723-1792)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography: null,
        name_in_original_language: null,
        birth_year: "1723",
        death_year: "1792",
      },
    ],
    culture: ["England, 18th century"],
    technique: "oil on canvas",
    support_materials: [],
    department: "European Painting and Sculpture",
    collection: "P - British before 1800",
    type: "Painting",
    measurements:
      "Framed: 224.5 x 201.3 x 11.4 cm (88 3/8 x 79 1/4 x 4 1/2 in.); Unframed: 196 x 170 cm (77 3/16 x 66 15/16 in.); Former: 223.5 x 198 x 9 cm (88 x 77 15/16 x 3 9/16 in.)",
    dimensions: {
      framed: {
        height: 2.245,
        width: 2.013,
        depth: 0.114,
      },
      unframed: {
        height: 1.96,
        width: 1.7,
      },
      former: {
        height: 2.235,
        width: 1.98,
        depth: 0.09,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Bequest of John L. Severance",
    copyright: null,
    inscriptions: [],
    exhibitions: {
      current: [
        {
          id: 300859,
          title: "The Venetian Tradition",
          description:
            "<i>The Venetian Tradition</i>. The Cleveland Museum of Art (November 8, 1956-January 1, 1957).",
          opening_date: "1956-11-08T05:00:00",
        },
        {
          id: 304248,
          title: "Style, Truth and the Portrait",
          description:
            "<i>Style, Truth and the Portrait</i>. The Cleveland Museum of Art (October 2-November 19, 1963).",
          opening_date: "1963-10-02T04:00:00",
        },
        {
          id: 442098,
          title: "Sir Joshua Reynolds",
          description:
            "<i>Sir Joshua Reynolds</i>. Royal Academy of Arts, London, United Kingdom of Great Britain and Northern Ireland (organizer) (January 16-March 31, 1986).",
          opening_date: "1985-10-09T04:00:00",
        },
        {
          id: 181714,
          title: "CMA @ Oberlin (second rotation)",
          description:
            "<i>CMA @ Oberlin (second rotation)</i>. Allen Memorial Art Museum, Oberlin, OH (April 3-June 5, 2006).",
          opening_date: "2006-04-03T00:00:00",
        },
        {
          id: 306699,
          title: "British Gallery Reinstallation  (June 2020)",
          description:
            "<i>British Gallery Reinstallation  (June 2020)</i>. The Cleveland Museum of Art (organizer).",
          opening_date: "2020-06-30T04:00:00",
        },
      ],
      legacy: [
        "British Institution, London, United Kingdom (1813).",
        "Suffolk Street, London, United Kingdom (1833).",
        "<em>Family Portraits</em>,Royal Academy, Burlington House, London, United Kingdom (1875).",
        "<em>Old Masters Exhibition</em>, Grafton Gallery, London, United Kingdom (1895).",
        "<em>Second National Exhibition, Woman and Child in Art</em>, London, United Kingdom (1913-1914).",
        "<em>The Twentieth Anniversary Exhibition of The Cleveland Museum of Art.</em> Cleveland Museum of Art (1936).",
      ],
    },
    provenance: [
      {
        description:
          "Philip Yorke, Viscount Royston, later Second Earl of Hardwicke [1720-1790], St. James Square, London, by descent to his daughter Amabel Yorke, later Hume-Campbell, 1st Countess de Grey",
        citations: [],
        footnotes: [],
        date: "c. 1761-1790",
      },
      {
        description:
          "Amabel Hume-Campbell, 1st Countess de Grey [1751-1833], by descent to her great niece Anne Florence de Grey",
        citations: [],
        footnotes: [],
        date: "1790-1833",
      },
      {
        description:
          "Anne Florence de Grey, Baroness Lucas [died 1880], by descent to her son, Francis Thomas de Grey",
        citations: [],
        footnotes: [],
        date: "1833-1880",
      },
      {
        description:
          "Francis Thomas de Grey, Seventh Earl Cowper, Seventh Baron Lucas and Tenth Baron Dingwall [1834-1905], by descent to his nephew Auberon Thomas Herbert",
        citations: [],
        footnotes: [],
        date: "1880-1905",
      },
      {
        description:
          "Auberon Thomas Herbert, Eighth Baron Lucas and Eleventh Baron Dingwall [1876-1916], by descent to his sister Nan Ino Cooper",
        citations: [],
        footnotes: [],
        date: "1905-1916",
      },
      {
        description:
          "Nan Ino Cooper, Ninth Baroness Lucas and Twelfth Baroness Dingwall [1880-1958], consigned to sale at Christie's London",
        citations: [],
        footnotes: [],
        date: "1916-1922",
      },
      {
        description: "(Christies’s, London, May 26, 1922, lot 78)",
        citations: [],
        footnotes: [],
        date: "1922",
      },
      {
        description: "(Agnew, London)",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description: "(M. Knoedler & Co., New York)",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description:
          "John L. Severance, Cleveland, OH, by bequest to the Cleveland Museum of Art",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, OH",
        citations: [],
        footnotes: [],
        date: "1942-",
      },
    ],
    find_spot: null,
    related_works: [
      {
        id: 154630,
        description:
          "The Ladies Amabel and Mary Jemima Yorke, c. 1761. Edward Fisher (British, 1722-1785), after Joshua Reynolds (British, 1723-1792). Mezzotint; image: 41.7 x 36.3 cm (16 7/16 x 14 5/16 in.). The Cleveland Museum of Art, Bequest of Mrs. Severance A. Millikin 1989.236",
        relationship: null,
      },
    ],
    former_accession_numbers: [],
    fun_fact:
      'Her family affectionately referred to Mary Jemima (at right) as "Mouse."',
    digital_description: null,
    wall_description:
      "Sisters Amabel (left) and Mary Jemima are shown playing on the grounds of their family’s country estate outside London. They wear loose, flowing garments invented specifically for the portrait rather than their usual outdoor dresses. Their father commissioned the painting to hang in the family’s city home in London’s St. James Square and it highlights their status as landowners. Joshua Reynolds painted this portrait after his return from Italy, where his studies inspired him to incorporate classical references. The famous ancient Roman <em>Statue of a Girl with a Dove </em>is echoed in Mary Jemima’s pose as she shields a dove from the family dog.",
    external_resources: {
      wikidata: [],
      internet_archive: [
        "https://archive.org/details/clevelandart-1942.645-portrait-of-the-ladi",
      ],
    },
    citations: [
      {
        citation:
          "Cotton, W., and John Burnet. <em>Sir Joshua Reynolds and His Works</em>. London, 1856.",
        page_number: "Mentioned: P. 36",
        url: null,
      },
      {
        citation:
          "Cook, Clarence. <em>Art and Artists of Our Time</em>. New York, NY: Selmar Hess, 1888.",
        page_number: "Reproduced: p. 37; Mentioned: p. 37-38",
        url: null,
      },
      {
        citation:
          "Graves, Algernon, and William Vine Cronin. <em>A History of the Works of Sir Joshua Reynolds</em>. [With Plates.]. London: H. Graves &amp; Co, 1899.",
        page_number: "Mentioned: P. 1084",
        url: null,
      },
      {
        citation:
          "Armstrong, Walter. <em>Sir Joshua Reynolds, First President of the Royal Academy</em>. London, United Kingdom: W. Heinemann, 1900.",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Bryan, Michael, and George Charles Williamson. <em>Bryan's Dictionary of Painters and Engravers</em>. New York, NY: Macmillan, 1903.",
        page_number: "Reproduced: p. 219",
        url: null,
      },
      {
        citation:
          "Baldry, A. L. <em>Sir Joshua Reynolds</em>. London: George Newnes, 1905.",
        page_number: "Mentioned: P. xxxii",
        url: null,
      },
      {
        citation:
          "Graves, Algernon. <em>Century of Loan Exhibitions 1813-1912</em>. London, United Kingdom: Graves, 1913.",
        page_number: "Mentioned: pgs. 1020, 1041, 1054, 1085, 1091, vol. 3",
        url: null,
      },
      {
        citation:
          '"American Art News, Vol. 20, No. 31." <em>American Art News</em> 20, no. 31 (May 13, 1922): 1-10.',
        page_number: "Reproduced: P. 4",
        url: "http://www.jstor.org/stable/25589970.",
      },
      {
        citation:
          'Marillier, H. C. <em>"Christie\'s" 1766 to 1925</em>. London: Constable &amp; Company, Ltd, 1926.',
        page_number: "Mentioned: P. 196",
        url: null,
      },
      {
        citation:
          'Toynbee, Paget. "Horace Walpole\'s Journals of Visits to Country Seats, etc." <em>The Walpole Society</em>, XVI (1927--28)',
        page_number: "Reproduced: p. 40",
        url: null,
      },
      {
        citation:
          "Waterhouse, Ellis Kirkham. <em>Reynolds</em>. London, United Kingdom: K. Paul, Trench, Trubner &amp; Co, 1941.",
        page_number: "Mentioned: p. 117; Reproduced: p. 121, pl. 70",
        url: null,
      },
      {
        citation:
          "<em>Catalogue of the John L. Severance Collection: Bequest of John L. Severance, 1936.</em> [Cleveland, Ohio]: Cleveland Museum of Art, 1942.",
        page_number:
          "Reproduced: p. [18], Plate VI, cat. no. 14; Mentioned: p. 22, cat. no. 14",
        url: "https://archive.org/details/SeveranceBequest/page/n26",
      },
      {
        citation:
          'Francis, Henry S. "Bequest of John L. Severance, 1936." <em>The Bulletin of The Cleveland Museum of Art XXIX</em>, no. 9 (November, 1942):131-136.',
        page_number: "Reproduced: p. 133; Mentioned: p. 136",
        url: null,
      },
      {
        citation:
          'Richard, Edgar P. "Recent Acquisitions: Ladies Amabel and Mary Jemima Yorke, by Reynolds." <em>The Art Quarterly </em>VI, no. 2 (Spring 1943): 146-149.',
        page_number: "Mentioned and reproduced: P. 146-149",
        url: null,
      },
      {
        citation:
          "<em>Paintings in the Cleveland Museum of Art.</em> [Cleveland]: The Cleveland Museum of Art, 1945.",
        page_number: "Reproduced: p. 18",
        url: "https://archive.org/details/CMAPaintings1945/page/n26",
      },
      {
        citation:
          "Flexner, James Thomas. <em>John Singleton Copley</em>. Boston, MA: Houghton Mifflin Co, 1948.",
        page_number: "Mentioned: p. 32, 132; Reproduced: pl. 3",
        url: null,
      },
      {
        citation:
          'Talbot, William S. "Thomas Gainsborough: George Pitt, First Lord Rivers." <em>The Bulletin of The Cleveland Museum of Art LVIII</em>, no. 11 (November, 1971): 258-268.',
        page_number: "Reproduced: p. 259, fig. 2",
        url: null,
      },
      {
        citation:
          "Coe, Nancy. <em>The History of the Collecting of European Paintings and Drawings in the City of Cleveland</em>. 1955.",
        page_number:
          "Mentioned: p. 234-235, vol. II; Reproduced: no. 14, XLVII",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland, OH: The Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 469",
        url: "https://archive.org/details/CMAHandbook1958/page/n86",
      },
      {
        citation:
          "Milliken, William Mathewson. <em>The Cleveland Museum of Art</em>. New York, NY: H.N. Abrams, 1958.",
        page_number: "Reproduced: p. 47",
        url: null,
      },
      {
        citation:
          'Argan, Giulio Carlo. "Reynolds." In <em>Encyclopedia of World Art</em>. Bernard S. Myers, ed., 202-207. New York: McGraw-Hill, 1959.',
        page_number: "Mentioned: P. 206",
        url: null,
      },
      {
        citation:
          "Gimpel, René. <em>Journal d'un collectionneur, marchand de tableaux</em>. [Paris]: Calmann-Lévy, 1963.",
        page_number: "Mentioned: P. 236",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 154",
        url: "https://archive.org/details/CMAHandbook1966/page/n178",
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Selected Works: Cleveland Museum of Art.</em> Cleveland: The Cleveland Museum of Art, 1967.",
        page_number: "Reproduced: no. 194",
        url: null,
      },
      {
        citation:
          'Cormack, Malcolm, "The Ledgers of Sir Joshua Reynolds." <em>The Walpole Society</em>, XLII (1968-70)',
        page_number: "Reproduced: p. 121",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 154",
        url: "https://archive.org/details/CMAHandbook1969/page/n178",
      },
      {
        citation:
          "Hamilton, Edward. <em>The Engraved Works, of Sir Joshua Reynolds; A Catalogue Raisonné of the Engravings Made After His Paintings from 1755-1822, with Descriptions of the States of Each Plate, Biographical Sketches of the Persons Represented, a List of Pictures Which Have Been Engraved, Names of the Possessors, and Other Particulars</em>. Amsterdam, Netherlands: G.W. Hissink, 1973.",
        page_number: "Reproduced: p. 139",
        url: null,
      },
      {
        citation:
          "Waterhouse, Ellis Kirkham. <em>Reynolds</em>. New York, NY: Phaidon; [distributed by Praeger], 1973.",
        page_number: "Reproduced: pl. 26",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 192",
        url: "https://archive.org/details/CMAHandbook1978/page/n212",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Catalogue of Paintings, Part 3: European Paintings of the 16th, 17th, and 18th Centuries</em>. Cleveland, OH: The Cleveland Museum of Art, 1982.",
        page_number: "Mentioned: p. 210-212; Reproduced: p. 211",
        url: null,
      },
      {
        citation:
          "Flexner, James Thomas. <em>John Singleton Copley</em>. New York, NY: Fordham University Press, 1993.",
        page_number: "Pl. 11",
        url: null,
      },
      {
        citation:
          "Kirsh, Andrea, and Rustin S. Levenson. <em>Seeing Through Paintings: Physical Examination in Art Historical Studies</em>. New Haven, CT: Yale University Press, 2000.",
        page_number: "Reproduced: p. 167, no. 174",
        url: null,
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1942.645",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1942.645/1942.645_web.jpg",
        filename: "1942.645_web.jpg",
        filesize: "480021",
        width: "777",
        height: "893",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1942.645/1942.645_print.jpg",
        filename: "1942.645_print.jpg",
        filesize: "6549504",
        width: "2960",
        height: "3400",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1942.645/1942.645_full.tif",
        filename: "1942.645_full.tif",
        filesize: "79035068",
        width: "4788",
        height: "5500",
      },
    },
    updated_at: "2022-01-04 15:27:04.702000",
  },
  {
    id: 117032,
    accession_number: "1937.577",
    share_license_status: "CC0",
    tombstone:
      "The Sacrifice of Isaac, c. 1527. Andrea del Sarto (Italian, 1486-1530). Oil on wood; framed: 208 x 171 x 12.5 cm (81 7/8 x 67 5/16 x 4 15/16 in.); unframed: 178 x 138 cm (70 1/16 x 54 5/16 in.). The Cleveland Museum of Art, Delia E. Holden and L. E. Holden Funds 1937.577",
    current_location: "217 Italian Baroque",
    title: "The Sacrifice of Isaac",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "c. 1527",
    creation_date_earliest: 1522,
    creation_date_latest: 1532,
    creators: [
      {
        id: 2291,
        description: "Andrea del Sarto (Italian, 1486-1530)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography: null,
        name_in_original_language: null,
        birth_year: "1486",
        death_year: "1530",
      },
    ],
    culture: ["Italy, Florence, 16th century"],
    technique: "oil on wood",
    support_materials: [],
    department: "European Painting and Sculpture",
    collection: "P - Italian 16th & 17th Century",
    type: "Painting",
    measurements:
      "Framed: 208 x 171 x 12.5 cm (81 7/8 x 67 5/16 x 4 15/16 in.); Unframed: 178 x 138 cm (70 1/16 x 54 5/16 in.)",
    dimensions: {
      framed: {
        height: 2.08,
        width: 1.71,
        depth: 0.125,
      },
      unframed: {
        height: 1.78,
        width: 1.38,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "Delia E. Holden and L. E. Holden Funds",
    copyright: null,
    inscriptions: [],
    exhibitions: {
      current: [
        {
          id: 312517,
          title:
            "The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition",
          description:
            "<i>The Twentieth Anniversary Exhibition: The Official Art Exhibit of the Great Lakes Exposition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 26-October 12, 1936).",
          opening_date: "1936-06-26T04:00:00",
        },
        {
          id: 312341,
          title: "The Silver Jubilee Exhibition",
          description:
            "<i>The Silver Jubilee Exhibition</i>. The Cleveland Museum of Art, Cleveland, OH (organizer) (June 23-September 28, 1941).",
          opening_date: "1941-06-23T04:00:00",
        },
        {
          id: 211386,
          title: "Leonardo, Michelangelo and the Renaissance in Florence",
          description:
            "<i>Leonardo, Michelangelo and the Renaissance in Florence</i>. National Gallery of Canada, Ottawa, Ont.,, Canada (organizer) (May 27-September 5, 2005).",
          opening_date: "2005-05-27T00:00:00",
        },
        {
          id: 222394,
          title:
            "Masterpieces of European Painting from The Cleveland Museum of Art",
          description:
            "<i>Masterpieces of European Painting from The Cleveland Museum of Art</i>. Frick Collection, New York, NY (organizer) (November 8, 2006-January 28, 2007).",
          opening_date: "2006-11-08T00:00:00",
        },
        {
          id: 179662,
          title:
            "Masterpieces of European Painting from the Cleveland Museum of Art",
          description:
            "<i>Masterpieces of European Painting from the Cleveland Museum of Art</i>. Maltz Museum of Jewish Heritage, Beachwood, OH (March 29-July 8, 2007).",
          opening_date: "2007-03-29T00:00:00",
        },
        {
          id: 217133,
          title: "Andrea del Sarto: The Renaissance Workshop in Action",
          description:
            "<i>Andrea del Sarto: The Renaissance Workshop in Action</i>. J. Paul Getty Museum, Los Angeles, CA (organizer) (June 23-September 13, 2015).",
          opening_date: "2015-06-23T00:00:00",
        },
      ],
      legacy: [
        "<em>Winter Exhibition</em>. Burlington House, Royal Academy, London, United Kingdom (1882).",
        "<em>Florence and the Arts: Five Centuries of Patronage</em>. The Cleveland Museum of Art, Cleveland, OH (1971).",
        "<em>Leonardo, Michelangelo and the Renaissance in Florence</em>. National Gallery of Canada, Ottawa, Ontario (May 27-September 5, 2005).",
        "<em>Masterpieces of European Painting from the Cleveland Museum of Art</em>. Maltz Museum of Jewish Heritage, Beachwood, OH (March 29, 2007 - July 8, 2007).",
      ],
    },
    provenance: [
      {
        description: "Cardinal Carlo de' Medici, Florence, 1649",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description: "Montalvi Collection, Florence",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description: "Peruzzi Collection, Florence",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description: "Zondadari Collection, Florence (see Biadi, 1829)",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description:
          "William Cave, died 1858 (Brentry House, near Bristol, bought in Florence in 1846), unsold, Christie's, London, June 29, 1854, lot 77, by inheritance to his wife.",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description:
          "Mrs. Cave, sold, Christie's, London, June 22, 1858, lot 102, bought by Peters)",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description: "Peters",
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description:
          'George Cornwall Legh, High Legh, Co. Chester (according to Royal Academy exhibition catalogue, Winter 1882, no. 206, "purchased by George Cornwall Legh in 1862 at Florence; in the Tordanari collection"); Lieutenant Colonel Henry Cornwall Legh, High Legh, Co. Chester, sold Sotheby\'s, London, May 21, 1935, to Spencer Samuels',
        citations: [],
        footnotes: [],
        date: null,
      },
      {
        description:
          "Spencer Samuels, T. Harris, London, and Durlacher Brothers, New York, sold to the Cleveland Museum of Art, 1937.",
        citations: [],
        footnotes: [],
        date: null,
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: ["2787.36"],
    fun_fact:
      "Del Sarto never finished this painting depicting the Old Testament story of the sacrifice of Isaac. Look closely at the angel in the upper right corner and notice the outline of another set of legs that illustrate the artist struggling with his composition.",
    digital_description: null,
    wall_description:
      "In this dramatic test of faith from the Old Testament book of Genesis, Abraham agrees to slay his son Isaac on God’s command. As Abraham raises the knife, an angel suddenly appears to halt the sacrifice. This work gains its power from the complex expressions of father and son, combining grief, strength, resignation, fear, and realization in their faces and bodies, the latter inspired by ancient sculpture and Michelangelo. Andrea del Sarto never finished this painting, and it lays bare his working methods. He transferred the design to the panel from a drawing, reinforcing the chalk with painted lines—best seen in the donkey at the far right. He then worked over the whole panel at once with thin, brushy veils of color, letting him alter the composition while painting—especially evident in the angel, Isaac’s body, and Abraham’s head.",
    external_resources: {
      wikidata: [],
      internet_archive: [],
    },
    citations: [
      {
        citation:
          "Biadi, Luigi. <em>Notizie inedite della vita dA̕ndrea del Sarto, raccolte da manoscritti</em>. Firenze, Italy: Tip. Bonducciana, 1831.",
        page_number: "Reproduced: p. 163, no. 2",
        url: null,
      },
      {
        citation:
          "Reumont, Alfred von. <em>Andrea del Sarto</em>. Leipzig: F.A. Brockhaus, 1835.",
        page_number: "Mentioned: P.183",
        url: null,
      },
      {
        citation:
          "Venturi, Adolfo. <em>La R. Galleria Estense in Modena.</em> Modena: P. Toschi, 1882.",
        page_number: "Mentioned: P. 257",
        url: null,
      },
      {
        citation:
          'Redford, George. <em>Art Sales. A History of Sales of Pictures and Other Works of Art. With Notices of the Collections Sold, Names of Owners, Titles of Pictures, Prices and Purchasers, Arranged Under the Artists of the Different Schools in Order of Date. Including the Purchases and Prices of Pictures for the National Gallery.</em> London: [Bradbury, Agnew, &amp; Co., Printers, the "Whitefriars" Press], 1888.',
        page_number: "Mentioned: V. II, P. 251",
        url: null,
      },
      {
        citation:
          "Vasari, Giorgio. <em>Le opere di Giorgio Vasari.</em> Firenze: G.C. Sansoni, 1906.",
        page_number: "Mentioned: Vol. V, P. 52",
        url: null,
      },
      {
        citation:
          "Guinness, H. <em>Andrea Del Sarto</em>. London, United Kingdom: G. Bell, 1907.",
        page_number: "Mentioned: p. 74-75",
        url: null,
      },
      {
        citation:
          "Graves, Algernon. <em>Century of Loan Exhibitions 1813-1912</em>. London: Graves, 1913.",
        page_number: "Mentioned: Vol. III, p. 1198",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Catalogue of Paintings, Part 3: European Paintings of the 16th, 17th, and 18th Centuries</em>. Cleveland, OH: The Cleveland Museum of Art, 1982.",
        page_number: "Reproduced: p. 406; Mentioned: p. 407-409",
        url: null,
      },
      {
        citation:
          "Francis, Henry S. \"An Unfinished Version of the 'Sacrifice of Abraham' by Andrea del Sarto.\" <em>The Bulletin of The Cleveland Museum of Art XXV</em>, no. 3 (March, 1938):39-42.",
        page_number: "Reproduced: p. 37; Detail: p.38",
        url: null,
      },
      {
        citation:
          '"Au Cleveland Museum of Art." <em>Mouseion. </em>(Avril 1938) 13-14.',
        page_number: "Mentioned: p. 13",
        url: null,
      },
      {
        citation:
          "Gibson, Katharine. <em>Pictures to Grow Up With</em>. New York, NY: Studio Publications, 1942.",
        page_number: "Reproduced: p. 90",
        url: null,
      },
      {
        citation:
          "<em>Paintings in the Cleveland Museum of Art.</em> [Cleveland]: The Cleveland Museum of Art, 1945.",
        page_number: "Reproduced: p. 52",
        url: "https://archive.org/details/CMAPaintings1945/page/n60",
      },
      {
        citation:
          "Coe, Nancy. <em>The History of the Collecting of European Paintings and Drawings in the City of Cleveland.</em> Thesis M.A. Oberlin College, 1956.",
        page_number: "Reproduced: Vol. II, P. 216, no. 21",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Handbook.</em> Cleveland, OH: The Cleveland Museum of Art, 1958.",
        page_number: "Mentioned and Reproduced: cat. no. 407",
        url: "https://archive.org/details/CMAHandbook1958/page/n75",
      },
      {
        citation:
          'Härth, Isolde. "Zu Andrea Del Sartos "Opfer Abrahams"." <em>Mitteilungen Des Kunsthistorischen Institutes in Florenz</em> 8, no. 3 (1959): 167-73.',
        page_number: "Mentioned: P. 167, n. 2",
        url: "http://www.jstor.org/stable/27652062.",
      },
      {
        citation:
          "Wescher, Paul. <em>La prima idea: die Entwicklung der Ölskizze von Tintoretto bis Picasso</em>. München, Germany: F. Bruckmann, 1960.",
        page_number: "Reproduced: p. 19, pl. 3, fig. 2",
        url: null,
      },
      {
        citation:
          "Berenson, Bernard. <em>Italian Pictures of the Renaissance: A List of the Principal Artists and Their Works, with an Index of Places : Florentine School</em>. London, United Kingdom: Phaidon Press, 1963.",
        page_number: "Mentioned: p. 1, 7",
        url: null,
      },
      {
        citation:
          "Freedberg, S. J. <em>Andrea Del Sarto</em>. Cambridge, MA: Belknap Press of Harvard University Press, 1963.",
        page_number: "Reproduced: vol. I, p. 77-70, figs. 179-184;",
        url: null,
      },
      {
        citation:
          'Jaffe, Michael. "The Figurative Arts of the West, ca. 1400-1800." A<em>pollo: The International Magazine for Collectors</em> 75, no. 22 (1963):',
        page_number: "Mentioned: p. 458; Reproduced: fig. 4, p. 460",
        url: null,
      },
      {
        citation:
          "Shearman, John K. G. <em>Andrea Del Sarto</em>. Oxford, United Kingdom: Clarendon Press, 1965.",
        page_number:
          "Reproduced: p. 110-111, pl. 146, 148 a and b, vol. I; p. 216, no. 79. vol. II",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 92",
        url: "https://archive.org/details/CMAHandbook1966/page/n116",
      },
      {
        citation:
          "Hillyer, V. M., and E. G. Huey. <em>Fine Art; [the Last Two Hundred Years]</em>. New York, NY: Meredith Press, 1966.",
        page_number: "Reproduced: p. 78",
        url: null,
      },
      {
        citation:
          "Coe, Ralph T. \"Rubens in 1614: 'The Sacrifice of Abraham.'\" <em>The Nelson Gallery and Atkins Museum Bulletin </em>IV, no. 7 (December 1966): 1-22.",
        page_number: "Mentioned: P. 2; reproduced: P.3, fig. 1",
        url: null,
      },
      {
        citation:
          "Cleveland Museum of Art. <em>Selected Works: Cleveland Museum of Art</em>. Cleveland, OH: The Museum, 1967.",
        page_number: "Reproduced: no. 140",
        url: null,
      },
      {
        citation:
          "Murray, Linda. <em>The High Renaissance.</em> New York: F.A. Praeger, 1967.",
        page_number: "Reproduced: P. 160, fig. 118",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 92",
        url: "https://archive.org/details/CMAHandbook1969/page/n116",
      },
      {
        citation:
          "Cleveland Museum of Art, and Berthold Fricke. <em>The Cleveland Museum of Art.</em> Hannover: Knorr &amp; Hirth, 1970.",
        page_number: "Mentioned and reproduced: P. 44-45",
        url: null,
      },
      {
        citation:
          "Avery, Catherine B., ed. <em>The New Century Italian Renaissance Encyclopedia. </em>New York: Appleton-Century-Crofts, 1972.",
        page_number: "Mentioned: P. 42",
        url: null,
      },
      {
        citation:
          "Fredericksen, Burton B., and Federico Zeri. <em>Census of Pre-Nineteenth-Century Italian Paintings in North American Public Collections. </em>Cambridge: Harvard University Press, 1972.",
        page_number: "Mentioned: P. 8, 255, 573",
        url: null,
      },
      {
        citation:
          'Lurie, Ann Tzeutschler. "Agnolo Bronzino: Portrait of a Young Lady." <em>The Bulletin of The Cleveland Museum of Art LXI</em>, no. 1 (January, 1975):3-13.',
        page_number: "Detail Reproduced: p. 6",
        url: null,
      },
      {
        citation:
          "Fader, Martha Alice Agnew. <em>Sculpture in the Piazza Della Signoria: As Emblem of the Florentine Republic</em>. Thesis Ph.D. Ann Anbor, MI: University of Michigan, 1977.",
        page_number: "Reproduced: p. 339, fig. 27",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 107",
        url: "https://archive.org/details/CMAHandbook1978/page/n127",
      },
      {
        citation:
          "Vos, Rik. <em>Lucas van Leyden</em>. Bentveld, Netherlands: Landshoff, 1978.",
        page_number: "Mentioned: p. 56-57; Reproduced: fig. 80",
        url: null,
      },
      {
        citation:
          "Hall, Marcia B. <em>Color and Meaning: Practice and Theory in Renaissance Painting</em>. Cambridge, MA: Cambridge University Press, 1992.",
        page_number: "Reproduced: p. 147, fig. 47",
        url: null,
      },
      {
        citation:
          "<em>Masterpieces from East and West</em>. New York, NY: Rizzoli International, 1992.",
        page_number: "Reproduced: p. 109",
        url: null,
      },
      {
        citation:
          "Natali, Antonio. <em>Andrea Del Sarto</em>. New York, NY: Abbeville Press Publishers, 1999.",
        page_number: "Reproduced: p. 183, no. 179",
        url: null,
      },
      {
        citation:
          "May, Sally Ruth, Jane Takac, and Barbara J. Bradley. <em>Knockouts: A Pocket Guide</em>. Cleveland, OH: Cleveland Museum of Art, 2001.",
        page_number: "Mentioned: p. 50; Reproduced: p. 50, 51",
        url: null,
      },
      {
        citation:
          "Keiith, Larry. \"Andrea del Sarto's 'The Virgin and Child with Saint Elizabeth and Saint John the Baptist': Technique and Critical Reception.\" <em>National Gallery Technical Bulletin </em>22 (2001): 42-53.",
        page_number: "Mentioned: P. 50; Reproduced: P. 50-51, pl. 7 & 9",
        url: null,
      },
      {
        citation:
          "Franklin, David, Louis Alexander Waldman, and Andrew Butterfield. <em>Leonardo Da Vinci, Michelangelo, and the Renaissance in Florence</em>. Ottawa, Ontario: National Gallery of Canada, 2005.",
        page_number: "Mentioned: p. 150; Reproduced: fig. 40",
        url: null,
      },
      {
        citation:
          "Iacono, Margaret. <em>Masterpieces of European Painting from the Cleveland Museum of Art</em>. New York, NY: The Frick Collection, 2006.",
        page_number: "Mentioned: p. 24-27; Reproduced: no. 3",
        url: null,
      },
      {
        citation:
          "Boskovits, Miklós, ed. <em>Italian Paintings from the 13th to 15th Century.</em> Firenze, Italy: Polistampa, 2009.",
        page_number: "Mentioned: p. 20",
        url: null,
      },
      {
        citation:
          "Wetering, Ernst van de. <em>Rembrandt: The Painter at Work</em>. Amsterdam, Netherlands: Amsterdam University Press, 2009.",
        page_number: "Reproduced: p. 32, fig. 35",
        url: null,
      },
      {
        citation:
          "Hilaire, Michel, and Axel Hémery. <em>Corps et ombres: Caravage et le caravagisme européen</em>. Milan, Italy: 5 continents, 2012.",
        page_number: "Reproduced: p. 72, fig. 1",
        url: null,
      },
      {
        citation:
          "Hout, Nico van, and Ted Alkins. <em>The unfinished painting</em>. 2012. Ghent, Belgium: Ludion, 2012.",
        page_number: "Mentioned: p. 4, p. 82-84; Reproduced: Fig. 82",
        url: null,
      },
      {
        citation:
          "Pontormo, Jacopo da, Bastian Eclercy, and Ralf Bormann. <em>Pontormo: Meisterwerke des Manierismus in Florenz</em>. Hannover, Germany: Landesmuseum Hannover, 2013.",
        page_number: "Reproduced: p. 73, fig. 52; Mentioned: p. 207",
        url: null,
      },
      {
        citation:
          "Bomford, David. <em>Unfinished Paintings: Narratives of the Non Finito</em>. Edinburgh: National Galleries of Scotland: in association with the University of Edinburgh, 2015.",
        page_number: "Mentioned p. 17; Reproduced: p. 18",
        url: null,
      },
      {
        citation:
          "Carmen C. Bambach, exhibition review of Andrea del Sarto, <em>The Burlington Magazine</em> 158, no. 1354 (January 2016).",
        page_number: "Mentioned: p. 70-72; Reproduced: p. 70, fig. 95",
        url: null,
      },
      {
        citation:
          "Jenison, Tim, Jonathan Janson, and David Walsh. <em>Hound in the Hunt: Optical Aids in Art.</em> Berriedale, Tas.: Museum of Old and New Art, 2016.",
        page_number: "Reproduced: p. 96, fig. 2.4",
        url: null,
      },
      {
        citation:
          "Schumacher, Andreas, et. al. <em>Florentiner Malerei: Alte Pinakothek : die Gemälde des 14. bis 16. Jahrhunderts.</em> [München]: Alte Pinakothek; Berlin: Deutscher Kunstverlag, 2017.",
        page_number: "Reproduced: p. 535, Abb. 37.10; P.536, Abb. 37.12",
        url: null,
      },
      {
        citation:
          'Bayer, A., et. al. "Andrea del Sarto\'s <em>Borgherini Holy Family</em> and <em>Charity</em>: Two Intertwined Late Works." <em>Metropolitan Museum of Art </em>52 (2017).',
        page_number: "Mentioned: p. [34]-55; Reproduced: p. 46, fig. 15",
        url: null,
      },
      {
        citation:
          "Hall, Marcia B. <em>The Power of Color: Five Centuries of European Painting</em>. New Haven: Yale University Press, 2019.",
        page_number: "Reproduced: p. 127, fig. 3.21",
        url: null,
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1937.577",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1937.577/1937.577_web.jpg",
        filename: "1937.577_web.jpg",
        filesize: "485315",
        width: "697",
        height: "893",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1937.577/1937.577_print.jpg",
        filename: "1937.577_print.jpg",
        filesize: "6669637",
        width: "2654",
        height: "3400",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1937.577/1937.577_full.tif",
        filename: "1937.577_full.tif",
        filesize: "205817976",
        width: "7318",
        height: "9374",
      },
    },
    updated_at: "2022-01-04 15:16:30.815000",
  },
  {
    id: 135428,
    accession_number: "1958.425",
    share_license_status: "CC0",
    tombstone:
      "Hunting near Hartenfels Castle, 1540. Lucas Cranach (German, 1472-1553). Oil, originally on wood, transferred to masonite; framed: 133 x 185.5 x 7.3 cm (52 3/8 x 73 1/16 x 2 7/8 in.); unframed: 116.8 x 170.2 cm (46 x 67 in.). The Cleveland Museum of Art, John L. Severance Fund 1958.425",
    current_location: "114 Late Northern Renaissance",
    title: "Hunting near Hartenfels Castle",
    title_in_original_language: null,
    series: null,
    series_in_original_language: null,
    creation_date: "1540",
    creation_date_earliest: 1540,
    creation_date_latest: 1540,
    creators: [
      {
        id: 2647,
        description: "Lucas Cranach (German, 1472-1553)",
        extent: null,
        qualifier: null,
        role: "artist",
        biography: null,
        name_in_original_language: null,
        birth_year: "1472",
        death_year: "1553",
      },
    ],
    culture: ["Germany, 16th century"],
    technique: "oil, originally on wood, transferred to masonite",
    support_materials: [],
    department: "European Painting and Sculpture",
    collection: "P - German before 1800",
    type: "Painting",
    measurements:
      "Framed: 133 x 185.5 x 7.3 cm (52 3/8 x 73 1/16 x 2 7/8 in.); Unframed: 116.8 x 170.2 cm (46 x 67 in.)",
    dimensions: {
      framed: {
        height: 1.33,
        width: 1.855,
        depth: 0.073,
      },
      unframed: {
        height: 1.168,
        width: 1.702,
      },
    },
    state_of_the_work: null,
    edition_of_the_work: null,
    creditline: "John L. Severance Fund",
    copyright: null,
    inscriptions: [
      {
        inscription:
          "Signed lower right on boat with a winged serpent, and dated: 1540 [inventory number, lower right: 1577]",
        inscription_translation: null,
        inscription_remark: null,
      },
    ],
    exhibitions: {
      current: [
        {
          id: 300779,
          title: "Juxtapositions",
          description:
            "<i>Juxtapositions</i>. The Cleveland Museum of Art (September 11-October 10, 1965).",
          opening_date: "1965-09-11T04:00:00",
        },
        {
          id: 304550,
          title: "A Cleveland Bestiary",
          description:
            "<i>A Cleveland Bestiary</i>. The Cleveland Museum of Art (organizer) (October 14-December 16, 1981).",
          opening_date: "1981-10-14T04:00:00",
        },
        {
          id: 304561,
          title: "Visions of Landscape: East and West",
          description:
            "<i>Visions of Landscape: East and West</i>. The Cleveland Museum of Art (organizer) (February 17-March 21, 1982).",
          opening_date: "1982-02-17T05:00:00",
        },
        {
          id: 399430,
          title: "Lucas Cranach: Ein Maler-Unternehmer aus Franken",
          description:
            "<i>Lucas Cranach: Ein Maler-Unternehmer aus Franken</i>. Museum of Fine Arts, Leipzig (May 17-July 1, 1994); Fortress of Rosenberg Kronach (September 7-November 6, 1994).",
          opening_date: "1994-05-17T04:00:00",
        },
        {
          id: 218734,
          title:
            "Faith and Power:  Saxony in the Europe of the Reformation Era",
          description:
            "<i>Faith and Power:  Saxony in the Europe of the Reformation Era</i>. Hartenfels Castle, Torgau, Dresden, Germany (May 24-October 10, 2004).",
          opening_date: "2004-05-24T00:00:00",
        },
        {
          id: 180667,
          title:
            "Sacred Gifts and Worldly Treasures: Medieval Masterworks from the Cleveland Museum of Art",
          description:
            "<i>Sacred Gifts and Worldly Treasures: Medieval Masterworks from the Cleveland Museum of Art</i>. National Museum of Bavaria, Munich, Germany (May 10-September 16, 2007); J. Paul Getty Museum, Los Angeles, CA (October 30, 2007-January 20, 2008); Frist Art Museum, Nashville, TN (February 13-June 7, 2009).",
          opening_date: "2007-05-10T00:00:00",
        },
        {
          id: 193954,
          title: "Arms and Armor from Imperial Austria",
          description:
            "<i>Arms and Armor from Imperial Austria</i>. The Cleveland Museum of Art (organizer) (February 24-June 1, 2008).",
          opening_date: "2008-02-24T00:00:00",
        },
        {
          id: 231753,
          title: "Lucas Cranach. L'altro rinascimento",
          description:
            "<i>Lucas Cranach. L'altro rinascimento</i>. Galleria Borghese, Rome, Italy (organizer) (October 13, 2010-March 3, 2011).",
          opening_date: "2010-10-13T00:00:00",
        },
        {
          id: 218729,
          title: "Luther and the Princes",
          description:
            "<i>Luther and the Princes</i>. Schloss Hartenfels, Torgau, Germany (May 15-November 1, 2015).",
          opening_date: "2015-05-15T00:00:00",
        },
      ],
      legacy: [
        "<em>Lucas Cranach d. A und Lucas Cranach d. J</em>. Staatliche Museen (duetsches Museum) Berlin, Germany (1937).",
      ],
    },
    provenance: [
      {
        description:
          "Royal Collection of Saxony, Schloss Hartenfels and Schloss Moritzburg, consigned to M.H. Drey",
        citations: [],
        footnotes: [
          "On October 4, 1543, Cranach was paid 123 florins, 10 groschen, and 8 pfennig for various works (Staatsarchiv, Weimar Reg. Bb. 4551, Bl. 24b (Schuchardt [1851] 162ff.), including a hunting picture presented to Duke Maurice of Saxony [1521-1553], presumably the Cleveland painting. Cranach had been appointed court painter to the Electors of Saxony in 1505 by Frederick the Wise.  A House of Saxony inventory number (1577) is inscribed in the lower right corner of the painting. The painting remained at Schloss Hartenfels, Torgau for generations, and with the Dukes of Saxony at Schloss Moritzburg until the 1950s.",
        ],
        date: "1540-1950s",
      },
      {
        description: "(M.H. Drey, London, sold to the Cleveland Museum of Art)",
        citations: [],
        footnotes: [],
        date: "Until 1958",
      },
      {
        description: "The Cleveland Museum of Art, Cleveland, Ohio",
        citations: [],
        footnotes: [],
        date: "1958-",
      },
    ],
    find_spot: null,
    related_works: [],
    former_accession_numbers: [],
    fun_fact:
      "Humans, dogs, and deer make up most of the creatures in this busy scene—but not all of them! Look closely at the background to spot a bear and three boars.",
    digital_description: null,
    wall_description:
      "The Protestant rulers of Saxony commissioned this animated hunt scene, set near their residence seen in the background, Hartenfels Castle (in eastern Germany). John Frederick the Magnanimous, in the bottom left corner, wears dark green hunting attire; he spans his crossbow and waits for his courtiers and dogs to chase a stag across the river. His wife, the Electress Sibylle, stands at right, poised to take the first ceremonial shot. The prince electors of Saxony were passionate practitioners of hunting with dogs—elaborate, highly rehearsed occasions, coordinated by the use of signals from hunting horns. Cranach dated this work and his signature is the winged snake at lower right. 1577 in the right corner is an inventory number.",
    external_resources: {
      wikidata: [],
      internet_archive: [],
    },
    citations: [
      {
        citation:
          "<div><!--block-->Margaret H. Drey, letter to Henry Sayles Francis, April 9, 1959, in CMA curatorial file.</div>",
        page_number: null,
        url: null,
      },
      {
        citation:
          "<div><!--block-->Margaret H. Drey, letter to Henry Sayles Francis, March 18, 1959, in CMA curatorial file.</div>",
        page_number: null,
        url: null,
      },
      {
        citation:
          "<div><!--block-->Margaret H. Drey, letter to Henry Sayles Francis, March 18, 1959, in CMA curatorial file.<br><br></div><ul><li><!--block--><br></li></ul>",
        page_number: null,
        url: null,
      },
      {
        citation:
          "<div><!--block-->Margaret H. Drey, letter to Henry Sayles Francis, April 9, 1959, in CMA curatorial file.</div>",
        page_number: null,
        url: null,
      },
      {
        citation:
          "<div><!--block--><em>Cranach-Ausstellung: Lucas Cranach d. Ä., und Lucas Cranach d. J., Gemälde, Zeichnungen, Graphik, april-juni 1937 im Deutschen Museum Berlin</em>. Berlin: Staatliche Museen, 1937.</div>",
        page_number: null,
        url: null,
      },
      {
        citation:
          "<div><!--block-->Schade, Werner, Lucas Cranach, Lucas Cranach, and Hans Cranach. <em>Cranach, a Family of Master Painters</em>. New York: Putnam, 1980.&nbsp;</div>",
        page_number: null,
        url: null,
      },
      {
        citation:
          "<div><!--block-->Schuchardt, Christian. <em>Lucas Cranach des Aeltern leben und werke</em>. Leipzig: F.A. Brockhaus, 1851.</div>",
        page_number: null,
        url: null,
      },
      {
        citation:
          "Flechsig, Eduard. <em>Cranachstudien</em>. Leipzig, Germany: K.W. Hiersemann, 1900.",
        page_number: "Reproduced: p. 275; Mentioned: p. 288",
        url: null,
      },
      {
        citation:
          "Friedländer, Max J., and Jakob Rosenberg. <em>Die Gemälde von Lucas Cranach</em>. Berlin, Germany: Deutscher Verein für Kunstwissenschaft, 1932.",
        page_number: "Reproduced: no. 331a, p. 91",
        url: null,
      },
      {
        citation:
          "Lilienfein, Heinrich. <em>Lukas Cranach und seine Zeit</em>. Bielefeld, Germany: Velhagen &amp; Klasing, 1944.",
        page_number: "Reproduced: p. 86",
        url: null,
      },
      {
        citation:
          "Kunsthistorisches Museum Wien, Vinzenz Oberhammer, Friderike Klauner, and Günther Heinz. <em>Katalog der Gemäldegalerie</em>. Wien, Austria: Kunsthistorisches Museum, 1958.",
        page_number: "Reproduced: p. 39, no. 117",
        url: null,
      },
      {
        citation:
          'Francis, Henry S. "The Stag Hunt by Lucas Cranach the Elder and Lucas Cranach the Younger." <em>The Bulletin of The Cleveland Museum of Art XLVI,</em> no. 10 (November, 1959):198-205.',
        page_number: "Reproduced: p. 198-199, fig. 1",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1966</em>. Cleveland, OH: The Cleveland Museum of Art, 1966.",
        page_number: "Reproduced: p. 108",
        url: "https://archive.org/details/CMAHandbook1966/page/n132",
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1969</em>. Cleveland, OH: The Cleveland Museum of Art, 1969.",
        page_number: "Reproduced: p. 108",
        url: "https://archive.org/details/CMAHandbook1969/page/n132",
      },
      {
        citation:
          "Schütz, Karl. <em>Lucas Cranach der Ältere und seine Werkstatt. Jubiläumsausstellung museumseigener Werke, 1472-1972</em>. Wien, Austria: Kunsthist. Museum, 1972.",
        page_number: "Reproduced: p. 32",
        url: null,
      },
      {
        citation:
          "Museo del Prado. <em>Museo del Prado: catálogo de las pinturas</em>. Madrid, Spain: El Museo, 1972.",
        page_number: "Reproduced: 0. 165, no. 2175",
        url: null,
      },
      {
        citation:
          "Lurie, Ann T. <em>The Cleveland Museum of Art Catalogue of Paintings</em>. Cleveland, OH: The Museum, 1982.",
        page_number: "Mentioned: p. 162-165; Reproduced: p. 163",
        url: null,
      },
      {
        citation:
          "Schade, Werner. <em>Die Malerfamilie Cranach</em>. Dresden, Germany: Verlag der Kunst, 1974.",
        page_number: "Reproduced: p. 210 and 211",
        url: null,
      },
      {
        citation:
          "Findeisen, Peter, and Heinrich Magirius. <em>Die Denkmale der Stadt Torgau</em>. Leipzig, Germany: Seemann, VEB, 1976.",
        page_number: "Reproduced: p. 108-109, plates 64, 65",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>Handbook of the Cleveland Museum of Art/1978</em>. Cleveland, OH: The Cleveland Museum of Art, 1978.",
        page_number: "Reproduced: p. 128",
        url: "https://archive.org/details/CMAHandbook1978/page/n148",
      },
      {
        citation:
          "Morse, John D. <em>Old Master Paintings in North America: Over 3000 Masterpieces by 50 Great Artists</em>. New York, NY: Abbeville Press, 1979.",
        page_number: "Reproduced: p. 77",
        url: null,
      },
      {
        citation:
          "Kathman, Barbara A. <em>A Cleveland Bestiary</em>. Cleveland, OH; Cleveland Museum of Art, 1981.",
        page_number: "Reproduced: p. 9; Mentioned: p. 7-11, p. 60",
        url: null,
      },
      {
        citation:
          "The Cleveland Museum of Art. <em>The Cleveland Museum of Art Catalogue of Paintings, Part 3: European Paintings of the 16th, 17th, and 18th Centuries. </em>Cleveland, OH: The Cleveland Museum of Art, 1982.",
        page_number: "Mentioned: p. 162-164; Reproduced: p. 163",
        url: null,
      },
      {
        citation:
          'Weber, Erwin. <em>Cranach and Luther: With Selected Works of the "Painting Evangelist" in the United States</em>. St. Louis, MO: Concordia Pub. House, 1983.',
        page_number: "Reproduced: p. 60, plate 42",
        url: null,
      },
      {
        citation:
          "Grimm, Claus, Johannes Erichsen, and Evamaria Brockhoff. <em>Lucas Cranach: ein Maler-Unternehmer aus Franken</em>. Augsburg, Germany: Haus der Bayerischen Geschichte, 1994.",
        page_number: "Reproduced: no. 131; Mentioned: p. 311-313",
        url: null,
      },
      {
        citation:
          "Fliegel, Stephen N. <em>Arms and Armor: The Cleveland Museum of Art</em>. Cleveland, OH: The Museum, 1998.",
        page_number: "Reproduced: p. 135",
        url: null,
      },
      {
        citation:
          "Kolb, Karin, and Harald Marx. <em>Cranach: [anlässlich der Ausstellung Cranach vom 13. November 2005 bis 12. März 2006 in den Kunstsammlungen Chemnitz ; eine Ausstellung in Kooperation mit der Gemäldegalerie Alte Meister der Staatlichen Kunstsammlungen Dresden]</em>. Köln, Germany: Wienand, 2005.",
        page_number: "Reproduced: p. 160, fig. 72",
        url: null,
      },
      {
        citation:
          "Ferino Pagden, Sylvia, and Andreas Beyer. <em>Tizian versus Seisenegger: die Portraits Karls V. mit Hund : ein Holbeinstreit</em>. Turnhout, Belgium: Brepols, 2005.",
        page_number: "Mentioned: p. 169; Reproduced: p. 171, fig. 4a",
        url: null,
      },
      {
        citation:
          "Klein, Holger A. <em>Sacred Gifts and Worldly Treasures: Medieval Masterworks from the Cleveland Museum of Art</em>. Cleveland, OH: Cleveland Museum of Art, 2007.",
        page_number: "Reproduced: cat. 112, Mentioned: p. 294, 295",
        url: null,
      },
      {
        citation:
          "Fliegel, Stephen N. <em>Arms &amp; Armor: The Cleveland Museum of Art</em>. Cleveland, OH: Cleveland Museum of Art, 2007.",
        page_number: "Reproduced: p. 155",
        url: null,
      },
      {
        citation:
          "<em>Treasures of the Cleveland Museum of Art</em>. London: United Kingdom: Scala Books, 2012.",
        page_number: "Reproduced: p. 168-169",
        url: null,
      },
      {
        citation:
          "Greub, Suzanne. <em>Von Meisterhand: die Cranach-Sammlung des Musée des beaux-arts de Reims</em>. Munich, Germany: Hirmer, 2015.",
        page_number: "Mentioned and reproduced: P. 54-55, Abb. 6",
        url: null,
      },
    ],
    catalogue_raisonne: null,
    url: "https://clevelandart.org/art/1958.425",
    images: {
      web: {
        url: "https://openaccess-cdn.clevelandart.org/1958.425/1958.425_web.jpg",
        filename: "1958.425_web.jpg",
        filesize: "1094651",
        width: "1263",
        height: "866",
      },
      print: {
        url: "https://openaccess-cdn.clevelandart.org/1958.425/1958.425_print.jpg",
        filename: "1958.425_print.jpg",
        filesize: "7869098",
        width: "3400",
        height: "2332",
      },
      full: {
        url: "https://openaccess-cdn.clevelandart.org/1958.425/1958.425_full.tif",
        filename: "1958.425_full.tif",
        filesize: "51477396",
        width: "5000",
        height: "3430",
      },
    },
    updated_at: "2022-01-04 16:00:08.748000",
  },
];

function App() {
  //const [data, setData] = useState(undefined);
  const [page, setPage] = useState(0);

  // useEffect(() => {
  //   fetch(
  //     `https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=20&skip=${
  //       page * 20
  //     }`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.table(data.data);
  //       setData(data);
  //     });
  // }, [page]);

  if (!data) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          justifyContent="space-between"
          alignItems="center"
        >
          {data /*.data*/
            .slice(0, 5)
            .map((artwork) => (
              <ArtworkCard key={`artwork_${artwork.id}`} artwork={artwork} />
            ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          justifyContent="space-between"
          alignItems="center"
        >
          {data /*.data*/
            .slice(5, 10)
            .map((artwork) => (
              <ArtworkCard key={`artwork_${artwork.id}`} artwork={artwork} />
            ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          justifyContent="space-between"
          alignItems="center"
        >
          {data /*.data*/
            .slice(10, 15)
            .map((artwork) => (
              <ArtworkCard key={`artwork_${artwork.id}`} artwork={artwork} />
            ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          justifyContent="space-between"
          alignItems="center"
        >
          {data /*.data*/
            .slice(15, 20)
            .map((artwork) => (
              <ArtworkCard key={`artwork_${artwork.id}`} artwork={artwork} />
            ))}
        </Grid>
      </Grid>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
    </>
  );
}

export default App;
