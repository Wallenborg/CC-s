import PageBox from "../page-box/PageBox";
import posts from "../../data/posts";
import "./PageList.css";

// Fisher-Yates algorithm for shuffling an array randomly
function shuffleArray(array) {
  // Create a copy of the array to avoid modifying the original
  const shuffled = [...array];

  // Iterate from the end of the array to the beginning
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Choose a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1)); // Select a random index

    // Swap the elements at indices i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }

  // Return the shuffled array
  return shuffled;
}

export default function PageList() {
  // Shuffle the order of the posts
  const shuffledPosts = shuffleArray(posts);

  return (
    <div className="wrapper">
      <h2>Sundays past...</h2>
      <div className="page-list-box">
        {shuffledPosts.map((post) => (
          <PageBox key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

/*
  Explanation of the Fisher-Yates Shuffle Algorithm:
  1. This algorithm is used to randomize the order of elements in an array.
  2. It iterates through the array from the last element to the second element.
  3. For each element, it selects a random index from the range that includes
     the current element and all elements before it.
  4. It then swaps the current element with the element at the random index.
  5. This ensures that each element has an equal probability of appearing in 
     each position, resulting in a uniformly shuffled array.
*/
