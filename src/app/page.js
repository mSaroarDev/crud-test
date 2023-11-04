import Form from "@/components/Form";
import prisma from "@/lib/db";

export default async function Homepage() {
  const posts = await prisma.post.findMany();

  return (
    <>
      <Form />

      <div className="p-10">
        <ol className="w-full">
          {posts &&
            posts.map((post) => {
              return (
                <li className="w-full" key={post.id}>
                  {post.title}
                </li>
              );
            })}
        </ol>
      </div>
    </>
  );
}
