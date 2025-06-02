import { ComponentPropsWithoutRef } from "react";

export const TailwindCSSIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={props.size}
      height={props.size}
      fill="none"
      className={props.className}
      {...props}
    >
      <path
        fill="#38BDF8"
        d="M24 12c-6 0-9.6 3-10.8 9 2.4-3 5.1-4.2 8.1-3.6 1.8.3 3.1 1.6 4.5 3.2 2.3 2.6 4.9 5.3 10.2 5.3 6 0 9.6-3 10.8-9-2.4 3-5.1 4.2-8.1 3.6-1.8-.3-3.1-1.6-4.5-3.2C31.9 14.7 29.3 12 24 12Zm-10.8 12c-6 0-9.6 3-10.8 9 2.4-3 5.1-4.2 8.1-3.6 1.8.3 3.1 1.6 4.5 3.2 2.3 2.6 4.9 5.3 10.2 5.3 6 0 9.6-3 10.8-9-2.4 3-5.1 4.2-8.1 3.6-1.8-.3-3.1-1.6-4.5-3.2-2.3-2.6-4.9-5.3-10.2-5.3Z"
      />
    </svg>
  );
};
