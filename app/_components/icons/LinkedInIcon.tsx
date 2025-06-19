import type { ComponentPropsWithoutRef } from "react";

export const LinkedInIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.568c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.137 1.448-2.137 2.944v5.661H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.6 0 4.267 2.37 4.267 5.451v6.29zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.278V1.723C24 .771 23.2 0 22.225 0z" />
    </svg>
  );
};
