// import { useState } from "react";
// import "./searchInputAtom.scss";

// function SearchInputAtom(props) {
//   const [inputValue, setInputValue] = useState("");

//   const inputHandler = (e) => {
//     setInputValue(e.target.value);
//     props.searchHandler(e.target.value.trim())
//     // console.log(e.target.value);
//   };

//   return (
//     <>
//       <input
//         className={"form-control " + props.customClass}
//         type="search"
//         placeholder={props.inputPlaceholder}
//         aria-label={props.areaLabel}
//         value={inputValue}
//         autoComplete={props.autoCompleteState}
//         onChange={inputHandler}
//       />
//     </>
//   );
// }

// export default SearchInputAtom;
