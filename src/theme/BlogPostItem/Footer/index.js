import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
import BlogPostItemHeaderAuthors from "@site/src/theme/BlogPostItem/Footer/Authors";
export default function BlogPostItemFooter() {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {tags, title, editUrl, hasTruncateMarker} = metadata;
  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;
  const tagsExists = tags.length > 0;
  const renderFooter = tagsExists || truncatedPost || editUrl;
  if (!renderFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(
        'row docusaurus-mt-lg',
        isBlogPostPage && styles.blogPostFooterDetailsFull,
          !isBlogPostPage && 'card__footer'
      )}>
      {
        !isBlogPostPage && (
            <div className={'col col--12'}>
              <BlogPostItemHeaderAuthors />
            </div>
          )
      }
    </footer>
  );
}
