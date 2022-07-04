import React from 'react';

const HomeIcon = (props) => {
  const size = props.size ? props.size : '18';
  const color = props.color ? props.color : '';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zm-9-7v6h2v-6h-2z"
        fill={color}
      />
    </svg>
  );
};

export default HomeIcon;
