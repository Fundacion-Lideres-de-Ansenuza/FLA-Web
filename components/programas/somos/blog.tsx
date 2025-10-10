import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      title: "Descubrí lo que fue la cumbre de SOMOS 2024 en Tucumán",
      url: "https://www.lideresdeansenuza.org/2024/12/17/descubri-lo-que-fue-la-cumbre-de-somos-2024-en-tucuman/",
    },
    {
      title: "Descubrí lo que fue el Diversathon",
      url: "https://www.lideresdeansenuza.org/2024/11/23/descubri-lo-que-fue-el-diversathon/",
    },
    {
      title: "Descubrí lo que fue la cumbre de SOMOS 2024 en Tucumán",
      url: "https://www.lideresdeansenuza.org/2024/12/17/descubri-lo-que-fue-la-cumbre-de-somos-2024-en-tucuman/",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Notas de Nuestro Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link href={post.url} key={index}>
              <div className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full">
                <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}