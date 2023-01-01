import React, { FC } from "react";
import { SvgIconConstituentValues } from "../types";

export interface SvgIcon extends FC<SvgIconConstituentValues> {}

const CoinIcon = ({ height, width, ...props }: React.SVGProps<SVGAElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_30106_749)">
        <path
          d="M0 12.6656V14C0 15.1031 2.6875 16 6 16C9.3125 16 12 15.1031 12 14V12.6656C10.7094 13.575 8.35 14 6 14C3.65 14 1.29062 13.575 0 12.6656ZM10 4C13.3125 4 16 3.10313 16 2C16 0.896875 13.3125 0 10 0C6.6875 0 4 0.896875 4 2C4 3.10313 6.6875 4 10 4ZM0 9.3875V11C0 12.1031 2.6875 13 6 13C9.3125 13 12 12.1031 12 11V9.3875C10.7094 10.45 8.34688 11 6 11C3.65313 11 1.29062 10.45 0 9.3875ZM13 9.73125C14.7906 9.38437 16 8.74063 16 8V6.66563C15.275 7.17812 14.2094 7.52813 13 7.74375V9.73125ZM6 5C2.6875 5 0 6.11875 0 7.5C0 8.88125 2.6875 10 6 10C9.3125 10 12 8.88125 12 7.5C12 6.11875 9.3125 5 6 5ZM12.8531 6.75938C14.7281 6.42188 16 5.75938 16 5V3.66563C14.8906 4.45 12.9844 4.87188 10.9781 4.97188C11.9 5.41875 12.5781 6.01875 12.8531 6.75938Z"
          fill="#213F7D"
        />
      </g>
      <defs>
        <clipPath id="clip0_30106_749">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CoinIcon;
