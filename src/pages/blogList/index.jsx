import React from "react";
import "./style.css";
// Example blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Tài dùng binh của Quang Trung - Nguyễn Huệ",
    image:
      "https://toquoc.mediacdn.vn/thumb_w/640/2019/4/26/avatar1556265019432-15562650196321022855511.jpg",
    category: "Anh hùng dân tộc",
    author: "Nguyễn Bá Tùng",
    date: "15/04/2014",
    content:
      "Chiến thắng bất hủ Xuân Kỷ Dậu đã đưa Nguyễn Huệ lên tột đỉnh đài vinh quang của dân tộc. Người đời sau có thể vì quá thần thánh hóa con người hùng của Nguyễn Huệ, nên người ta đã coi Nguyễn Huệ như một thiên tài quân sự siêu việt. Thực ra thiên tài quân sự của Nguyễn Huệ cũng đã được người cùng thời với Nguyễn Huệ xác nhận như là một sự thực không thể chối cãi",
  },
  // Add more blog post objects here
  {
    id: 2,
    title: "Tài dùng binh của Quang Trung - Nguyễn Huệ",
    image:
      "https://toquoc.mediacdn.vn/thumb_w/640/2019/4/26/avatar1556265019432-15562650196321022855511.jpg",
    category: "Anh hùng dân tộc",
    author: "Nguyễn Bá Tùng",
    date: "15/04/2014",
    content:
      "Chiến thắng bất hủ Xuân Kỷ Dậu đã đưa Nguyễn Huệ lên tột đỉnh đài vinh quang của dân tộc. Người đời sau có thể vì quá thần thánh hóa con người hùng của Nguyễn Huệ, nên người ta đã coi Nguyễn Huệ như một thiên tài quân sự siêu việt. Thực ra thiên tài quân sự của Nguyễn Huệ cũng đã được người cùng thời với Nguyễn Huệ xác nhận như là một sự thực không thể chối cãi",
  },
];

function BlogList() {
  return (
    <div>
      <section id="recent-posts" className="bg-sectionsBg">
        <div className="container mx-auto p-4" data-aos="fade-up">
          <div className="mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-red-500 sm:text-4xl md:text-[40px]">
              Blogs
            </h2>
            <p className="text-lg text-gray-500">
              Các bài đăng blog mới nhất của chúng tôi, bao gồm hình ảnh và
              video để nâng cao trải nghiệm đọc của bạn
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            {blogPosts.map((post) => (
              <div key={post.id}>
                <article>
                  <div className="post-img overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="img-fluid w-full h-auto"
                    />
                  </div>
                  <p className="post-category text-sm text-gray-500 mt-2">
                    {post.category}
                  </p>
                  <h2 className="title font-bold text-xl mt-2">
                    <a href="single-blog.html">{post.title}</a>
                  </h2>
                  <div className="flex align-items-center mt-2">
                    <div className="post-meta flex items-center justify-between w-full">
                      <p className="post-author text-sm">
                        <i className="fa-solid fa-at mr-3"></i>

                        {post.author}
                      </p>
                      <span className="bg-red-400/100 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-base mt-2">{post.content}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogList;
