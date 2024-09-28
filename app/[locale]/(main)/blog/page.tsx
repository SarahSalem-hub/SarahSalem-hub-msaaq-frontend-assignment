import Posts from "@/app/ui/Home/Posts/Posts";

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
        <Posts 
        query={query} 
        page={currentPage}
        />
    )
}