import React from 'react';
import {useBlogPost} from "@docusaurus/theme-common/internal";
import TagsListInline from '@theme/TagsListInline';

export default function Tags(){
    const {metadata} = useBlogPost();
    const {tags} = metadata;
    const tagsExists = tags.length > 0;

    return (
        <div>
            <TagsListInline tags={tags} />
        </div>
    )
}