const catEmojis = ["🐱", "🐱", "😺", "😽", "😻"];
const getRandomCatEmoji = () => catEmojis[Math.floor(Math.random() * catEmojis.length)];

export function CatEmoji() {
  return <p className="CatEmoji">{getRandomCatEmoji()}</p>;
}
