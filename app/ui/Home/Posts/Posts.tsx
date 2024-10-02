import { fetchPosts } from "@/lib/fetchPosts";
import PostCard from "./PostCard";
import Pagination from "./Pagination";
import { getTranslations } from "next-intl/server";

type Props = {
  query: string;
  page: number;
};

export default async function Posts({ query, page }: Props) {
  const { totalPages, paginatedPosts } = await fetchPosts(query, page);
  const posts = paginatedPosts;
  const pages = totalPages;
  const t = await getTranslations()

  return (
    <div className=" flex flex-col items-center pt-[50px] ps-[40px] pe-[40px] lg:ps-0 lg:pe-0 md:pb-0  ">
      <div className="w-full pb-[32px] flex justify-start ps-[10px]">
        <h1 className="text-[#181A2A] dark:text-[#FFFFFF] font-bold text-[24px] font-workSans ">
         {t("homepage.posts")}
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] ">
        {posts &&
          posts.map((post) => (
            <PostCard
              key={post.id + post.title}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
      </div>

      <Pagination postsPages={pages} />
    </div>
  );
}
