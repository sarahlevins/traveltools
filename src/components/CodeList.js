import React from "react";
import SearchFilter from "./SearchFilter.js";

const alphaCodes = [
  "alpha",
  "bravo",
  "charlie",
  "delta",
  "echo",
  "foxtrot",
  "golf",
  "hotel",
  "india",
  "juliet",
  "kilo",
  "lima",
  "mike",
  "november",
  "oscar",
  "papa",
  "quebec"
];

// const alphaCodes = [
//   { id: "a", phon: "alpha" },
//   { id: "b", phon: "bravo" },
//   { id: "c", phon: "charlie" },
//   { id: "d", phon: "delta" },
//   { id: "e", phon: "echo" },
//   { id: "f", phon: "foxtrot" },
//   { id: "g", phon: "golf" },
//   { id: "h", phon: "hotel" },
//   { id: "i", phon: "india" },
//   { id: "j", phon: "juliet" },
//   { id: "k", phon: "kilo" },
//   { id: "l", phon: "lima" },
//   { id: "m", phon: "mike" },
//   { id: "n", phon: "november" },
//   { id: "o", phon: "oscar" },
//   { id: "p", phon: "papa" },
//   { id: "q", phon: "quebec" },
//   { id: "r", phon: "romeo" },
//   { id: "s", phon: "sierra" },
//   { id: "t", phon: "tango" },
//   { id: "u", phon: "uniform" },
//   { id: "v", phon: "victor" },
//   { id: "w", phon: "whiskey" },
//   { id: "x", phon: "x-ray" },
//   { id: "y", phon: "yankee" },
//   { id: "z", phon: "zulu" }
// ];

const CodeList = () => (
  // <table>
  //   <thead>
  //     <tr>
  //       <th>letter</th>
  //       <th>phonetic</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {alphaCodes.map(item => (
  //       <tr key={item.id}>
  //         <td>{item.id}</td>
  //         <td>{item.phon}</td>
  //       </tr>
  //     ))}
  //   </tbody>
  // </table>
  <SearchFilter content={alphaCodes} />
);

export default CodeList;
