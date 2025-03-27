import { useDispatch, useSelector } from "react-redux";

import styles from "./SearchBox.module.css";
import { filterNameAction } from "../../redux/store";

export default function SearchBox() {
  const filterValue = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handeleChange = (e) => {
    const value = e.target.value.trim();
    value !== filterValue && dispatch(filterNameAction(value));
  };

  return (
    <div>
      <p>Search contact:</p>
      <input
        className={styles.searchInput}
        type="text"
        value={filterValue}
        onChange={handeleChange}
      />
    </div>
  );
}
