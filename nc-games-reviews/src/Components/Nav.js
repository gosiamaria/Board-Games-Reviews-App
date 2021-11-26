import { useNavigate } from "react-router-dom";
import { getCategories } from "../utils/api";
import { useEffect, useState } from "react";

export default function Nav() {

  let navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  const handleSelect = (e) => {
    e.preventDefault();
    navigate(`/categories/${e.target.value}`);
  };

  return (
    <div className="nav">
      <select className="categoriesOptions" onChange={handleSelect}>
        <option
          key="Category selector"
          value="" disabled="disabled" selected="selected"
        >
          Choose a category
        </option>
        {categories.map((category) => {
          return (
            <option key={category.slug} value={category.slug}>
              {category.slug}
            </option>
          );
        })}
      </select>
    </div>
  )
}