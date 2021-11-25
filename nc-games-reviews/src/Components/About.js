import { getCategories } from "../utils/api";
import { useEffect, useState } from "react";

export default function About({slug}) {
  const [cats, setCats] = useState([]);

    useEffect(() => {
      getCategories().then((categories) => {
        setCats(categories);
      });
    }, []);

  if(slug) {
    return (
      <div className="about">
        <h2>{slug.toUpperCase()}</h2>
        {cats.map((cat) => {
        if(slug === cat.slug) {
          return <p>{cat.description}</p>
        }
        return [];
      })}
      </div>
    )
  }

  return (
    <div className="about">
      <h2>About Northcoders Games Reviews</h2>
      <p>The #1 source for news, information, and discussion about modern board games and board game culture. Join our community! Come discuss games like Codenames, Arkham Horror, Terra Mystica, and all your other favorite games!</p>
    </div>
  )
}