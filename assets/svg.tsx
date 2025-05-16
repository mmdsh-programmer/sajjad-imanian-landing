interface IProps {
  className?: string;
}

export const DownloadIcon = ({ className }: IProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor;"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask0_58_61"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <rect width="16" height="16" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_58_61)">
        <path
          d="M8.00115 13.6537C6.76993 13.6537 5.72304 13.2226 4.86048 12.3605C3.99793 11.4985 3.56665 10.4518 3.56665 9.22033H5.33332C5.33332 9.95367 5.59443 10.5814 6.11665 11.1037C6.63887 11.6259 7.26665 11.887 7.99998 11.887C8.73332 11.887 9.3611 11.6259 9.88332 11.1037C10.4055 10.5814 10.6667 9.95367 10.6667 9.22033H12.4333C12.4333 10.4508 12.0024 11.4973 11.1407 12.3598C10.2788 13.2224 9.23226 13.6537 8.00115 13.6537ZM7.99998 9.87967L4.88115 6.76083L6.12532 5.5L7.11665 6.50067V2.63617H8.88332V6.50067L9.87465 5.5L11.1188 6.76083L7.99998 9.87967Z"
          fill="currentColor;"
        />
      </g>
    </svg>
  );
};
