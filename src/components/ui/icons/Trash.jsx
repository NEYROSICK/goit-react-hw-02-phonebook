import cl from 'components/ContactItem/contactitem.module.css';

const Trash = props => {
  return (
    <svg
      className={cl.icon}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 2.75H13.75M2.75 5.5H19.25M17.4167 5.5L16.7738 15.1427C16.6774 16.5894 16.6291 17.3128 16.3167 17.8613C16.0416 18.3441 15.6266 18.7323 15.1265 18.9747C14.5585 19.25 13.8335 19.25 12.3836 19.25H9.61643C8.1665 19.25 7.44153 19.25 6.87348 18.9747C6.37336 18.7323 5.95841 18.3441 5.68332 17.8613C5.37085 17.3128 5.32263 16.5894 5.22618 15.1427L4.58333 5.5M9.16667 9.625V14.2083M12.8333 9.625V14.2083"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Trash;
