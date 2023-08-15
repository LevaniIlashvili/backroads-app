const SocialLink = ({ link, className }) => {
  const { href, icon } = link;
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
