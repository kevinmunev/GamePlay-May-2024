export default function GamesListItem({ _id, title, category,imagUrl }) {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imagUrl} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <a href="#" className="details-button">
          Details
        </a>
      </div>
    </div>
  );
}
