const postsPerPage = 9;
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?";

export const fetchPosts = async (query: string, page: number) => {
  const fetchAllPosts = await fetch(`${POSTS_URL}`); 
  const resPosts = await fetchAllPosts.json();

  const filteredPosts = resPosts.filter((post) => post.title.includes(query));

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return { paginatedPosts, totalPages };
};

export const generatePagination = (totalPages: number) => {
  const count = [...Array(totalPages)].map((_, index) => index + 1);
  return count;
};


export const fetchSinglePosts = async (postId: number) => {
  const fetchAllPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const resPosts = await fetchAllPosts.json();
// console.log("resPosts",resPosts)
  // const filteredPost = resPosts.find((post) => post.title.includes(query));
  return resPosts

}