const PageLink = ({ link, className }) => {
  const { href, text } = link;
  return (
    <li>
      <a href={href} className={className}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
