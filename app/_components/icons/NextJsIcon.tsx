import { ComponentPropsWithoutRef } from "react";

export const NextJsIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 100 100"
      fill="none"
      className={props.className}
      {...props}
    >
      <rect width="100" height="100" rx="20" fill="black" />
      <path
        d="M33.3 40V59.7h4.2V44.5l10.3 15.2H52L41.7 40H33.3ZM62.8 40v19.7H67V40h-4.2Z"
        fill="white"
      />
      <path
        d="M50 0C22.4 0 0 22.4 0 50c0 24.2 17.3 44.3 40 49.1V66.3H27.8V50h12.2v-6.2c0-12.1 7.2-18.8 18.1-18.8 5.2 0 10.6.9 10.6.9v11.6h-6c-5.9 0-7.7 3.6-7.7 7.3V50H67l-2 16.3H55v32.8C77.6 94.3 95 74.2 95 50 95 22.4 72.6 0 50 0Z"
        fill="url(#nextjs-gradient)"
      />
      <defs>
        <linearGradient
          id="nextjs-gradient"
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0.1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
};
