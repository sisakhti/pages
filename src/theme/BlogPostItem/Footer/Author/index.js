import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}
function Date({date, formattedDate}) {
  return (
      <time dateTime={date} itemProp="datePublished">
        {formattedDate}
      </time>
  );
}
export default function BlogPostItemHeaderAuthor({author, className, date, formattedDate}) {
  const {name, title, url, imageURL, email} = author;
  const link = url || (email && `mailto:${email}`) || undefined;
  return (
      <div className={clsx('avatar margin-bottom--sm', className)}>
        {imageURL && (
            <MaybeLink href={link} className="avatar__photo-link">
              <img className="avatar__photo" src={imageURL} alt={name} />
            </MaybeLink>
        )}

        {name && (
            <div
                className="avatar__intro"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person">
              <div className="avatar__name">
                <MaybeLink href={link} itemProp="url">
                  <span itemProp="name">{name}</span>
                </MaybeLink>
              </div>
              {
                <small className="avatar__subtitle" itemProp="description">
                  <Date date={date} formattedDate={formattedDate} />
                </small>
              }
            </div>
        )}
      </div>
  );
}