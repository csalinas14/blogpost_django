import SingleForm from './SingleForm'
import { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [blogTitle, setBlogTitle] = useState('')
  const [blogContent, setBlogContent] = useState('')

  const blogForms = [
    {
      value: blogTitle,
      name: 'Title',
      handleChange: setBlogTitle,
    },
    {
      value: blogContent,
      name: 'Content',
      handleChange: setBlogContent,
    },
  ]

  const addBlog = (event) => {
    event.preventDefault()

    const blogObject = {
      title: blogTitle,
      content: blogContent,
    }

    createBlog(blogObject)

    setBlogTitle('')
    setBlogContent('')
  }

  return (
    <form onSubmit={addBlog}>
      {blogForms.map((form) => (
        <SingleForm
          key={form.name}
          name={form.name}
          value={form.value}
          handleChange={form.handleChange}
        />
      ))}
      <button id='blogFormCreateButton' type='submit'>
        create
      </button>
    </form>
  )
}

export default BlogForm
