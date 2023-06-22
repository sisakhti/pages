import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import {useBlogPost} from "@docusaurus/theme-common/internal";
import Tags from "@site/src/theme/BlogPostItem/Header/Tags";
export default function BlogPostItemHeader() {
    const {isBlogPostPage} = useBlogPost();
  return (
    <>
        {!isBlogPostPage && (
            <div className="card__image">
                <img
                    src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="Image alt text"
                    title="Logo Title Text 1"/>
            </div>
        )}
        <header className={'card__header'}>
            <Tags />
            <BlogPostItemHeaderTitle />
            {isBlogPostPage && <BlogPostItemHeaderAuthors />}
        </header>
    </>
  );
}
