import React from 'react'
import { Link } from 'react-router-dom'
import trimContent from '../libs/util'


const BlogPreview = ({ dateCreated, slug, title, excerpt, image }) => {

  return <div className="columns mb-5">
    <div className="column is-2">
      <img src={image} alt="image" />
    </div>
    <div className="column">
      <span>Posted on: {dateCreated}</span>
      <h3 className="is-size-4 has-text-weight-mediums">{title}</h3>
      <p>{trimContent(excerpt, 275)}</p>
      <Link to={`/blog/${slug}`}>Read More</Link>
    </div>
  </div>
}

export default BlogPreview;