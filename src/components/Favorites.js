import { useGlobalCOntext } from "../context";
const Favorites = () => {
  const { favorites, selectMeal, removeFavorites } = useGlobalCOntext();
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image } = item;

            return (
              <div key={idMeal} className="favorite-item">
                <img
                  src={image}
                  className="favorites-img img"
                  onClick={() => selectMeal(idMeal, true)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeFavorites(idMeal)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
