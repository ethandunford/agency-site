import React from 'react';
import BlogPreview from '../components/blog-preview';
import BlogData from '../data/blog.json'

const generateBlogPosts = () => {
  return Object.keys(BlogData).map((el) => {
    return <><BlogPreview
      dateCreated={BlogData[el].date_created}
      slug={BlogData[el].slug}
      title={BlogData[el].title}
      excerpt={BlogData[el].content}
      image="https://picsum.photos/200/200"
    /></>
  })
}

const blog = () => {
  return (
    <div>
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6">
                <h1 className="is-size-1">Our news</h1>
                <p className="is-size-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel convallis mi, id mattis eros. Morbi ornare justo sed arcu dignissim, auctor vestibulum sem aliquet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-6">
          {generateBlogPosts()}
        </div>
      </section>
    </div>
  );
};

export default blog;
