import { LinkCard } from "../../components/LinkCard";

export default function Articles() {
  return (
    <>
      <h1>Articles</h1>
      <li>
        <LinkCard
          frame="box1"
          title="Data Fetching"
          href="/articles/data-fetching"
          src="https://picsum.photos/300/200"
        />
      </li>
    </>
  );
}
