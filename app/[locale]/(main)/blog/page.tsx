import Posts from "@/app/ui/Home/Posts/Posts";
import Wrapper from "@/app/ui/Wrapper";

export default async function Page({
    searchParams,
    
  }: {
   
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;
    return (
      <Wrapper>
        <Posts 
        query={query} 
        page={currentPage}
        />
        </Wrapper>
    )
}