import React from 'react';
import {BlogPostProvider} from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';
export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}) {
  return (
    <div className="row">
      {items.map(({content: BlogPostContent}) => (
          <div className="col col--4">
            <BlogPostProvider
                key={BlogPostContent.metadata.permalink}
                content={BlogPostContent}>
              <BlogPostItemComponent>
                <BlogPostContent />
              </BlogPostItemComponent>
            </BlogPostProvider>
          </div>
      ))}
    </div>
  );
}
