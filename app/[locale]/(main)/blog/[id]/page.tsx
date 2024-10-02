import Wrapper from "@/app/ui/Wrapper";
import { fetchSinglePosts } from "@/lib/fetchPosts";

export default async function Page({ params }: { params: { id: string } }) {
  console.log("id", params.id);
  const fetchedPost = await fetchSinglePosts(Number(params.id));
  return (
    <Wrapper>
      <div className=" w-[80%] h-auto mt-[100px] flex flex-col gap-[40px] items-start rounded-[12px] border-[#E8E8EA] p-[16px] dark:border-[#242535] border-[2px] ">
        <div className="flex flex-col gap-0">
          <h1 className="text-[35px] ">Title</h1>
          <h5 className="text-[25px]  ms-[24px]">{fetchedPost && fetchedPost.title}</h5>
        </div>
        <div>
          <h1 className="text-[30px]">Blog</h1>
          <p>{fetchedPost.body}</p>
        </div>
      </div>
    </Wrapper>
  );
}
