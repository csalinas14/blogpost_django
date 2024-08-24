const Blog = ({ blog }) => {
  return (
    <div className='blog'>
      <div>Title: {blog.title}</div>
      <div>{blog.content}</div>
      <div>Published: {blog.published_date}</div>
    </div>
  )
}

export default Blog
