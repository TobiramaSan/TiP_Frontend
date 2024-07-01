import React from "react";

const IC_CardsOption = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      // fill={color ?? "#1B1B1B"}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={className} clip-path="url(#clip0_1662_4605)">
        <path
          d="M18 4H6C4.89543 4 4 4.89543 4 6V8C4 9.10457 4.89543 10 6 10H18C19.1046 10 20 9.10457 20 8V6C20 4.89543 19.1046 4 18 4Z"
          // fill={color ?? "#1B1B1B"}
          // stroke={color ?? "#1B1B1B"}
          className={className}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V16C20 14.8954 19.1046 14 18 14Z"
          // fill={color ?? "#1B1B1B"}
          // stroke={color ?? "#1B1B1B"}
          className={className}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1662_4605">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IC_CardsOption;
