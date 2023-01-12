import React, { useState, useEffect } from 'react'
import BlogData from '../data/blog.json'
import Services from '../components/services'
import '../styles/blog-post.scss'

const BlogPost = (_slug) => {

  const [slug, setSlug] = useState("")
  const [postData, setPostData] = useState(null)

  useEffect(() => {
    setSlug(_slug)
  }, [_slug])

  useEffect(() => {
    setPostData(BlogData[Object.keys(BlogData).find(el => BlogData[el].slug === slug.toLocaleLowerCase())])
  }, [slug])

  if (postData) {
    return <>
      <h1 className="is-size-1">{postData.title}</h1>
      <p>{postData.content}</p>
    </>
  } else {
    return <h1 className="is-size-1">Post data not found</h1>
  }
}

const blogPostPage = () => {
  return <main className="blog-post">
    <div className="container">
      <div className="columns py-6">
        <div className="column">
          {BlogPost(window.location.pathname.split("/blog/")[1])}
        </div>
      </div>
    </div>
    <section className="what-we-do py-5">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">Discover how our amazing team can help your business.</p>
          </div>
        </div>
        <Services />
      </div>
    </section>
  </main>
}

export default blogPostPage;