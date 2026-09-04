import { blogDT } from '@/types/blog-d-t';
import blogData from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';

const StartupBlogItem = () => {
    // Select by id, not position — see the note in blogData.
    const HOME_BLOG_IDS = [20, 21, 22];
    const displayBlog: blogDT[] = HOME_BLOG_IDS
        .map((id) => blogData.find((b) => b.id === id))
        .filter(Boolean) as blogDT[];

    return (
        <>
            {displayBlog.map((blog) => (
                <div key={blog.id} className="col-lg-4 col-md-6">
                    <div className="st-blog-item mb-30">
                        <div className="st-blog-item-thumb">
                            <Link href={blog.link}>
                                <Image src={blog.image} alt={blog.title} />
                            </Link>
                        </div>
                        <div className="st-blog-item-content">
                            <h3 className="st-blog-item-title">
                                <Link className="tp-line-black" href={blog.link}>
                                    {blog.title}
                                </Link>
                            </h3>
                            <div className="st-blog-item-tags d-flex align-items-center">
                                <span>{blog.category}</span>
                                <div className="st-blog-item-tags-devide"></div>
                                <p>{blog.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default StartupBlogItem;