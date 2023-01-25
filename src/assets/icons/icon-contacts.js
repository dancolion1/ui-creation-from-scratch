

import React from 'react';

export default (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity={props.opacity || ''} d="M2.4 7.2C3.2825 7.2 4 6.4825 4 5.6C4 4.7175 3.2825 4 2.4 4C1.5175 4 0.8 4.7175 0.8 5.6C0.8 6.4825 1.5175 7.2 2.4 7.2ZM13.6 7.2C14.4825 7.2 15.2 6.4825 15.2 5.6C15.2 4.7175 14.4825 4 13.6 4C12.7175 4 12 4.7175 12 5.6C12 6.4825 12.7175 7.2 13.6 7.2ZM14.4 8H12.8C12.36 8 11.9625 8.1775 11.6725 8.465C12.68 9.0175 13.395 10.015 13.55 11.2H15.2C15.6425 11.2 16 10.8425 16 10.4V9.6C16 8.7175 15.2825 8 14.4 8ZM8 8C9.5475 8 10.8 6.7475 10.8 5.2C10.8 3.6525 9.5475 2.4 8 2.4C6.4525 2.4 5.2 3.6525 5.2 5.2C5.2 6.7475 6.4525 8 8 8ZM9.92 8.8H9.7125C9.1925 9.05 8.615 9.2 8 9.2C7.385 9.2 6.81 9.05 6.2875 8.8H6.08C4.49 8.8 3.2 10.09 3.2 11.68V12.4C3.2 13.0625 3.7375 13.6 4.4 13.6H11.6C12.2625 13.6 12.8 13.0625 12.8 12.4V11.68C12.8 10.09 11.51 8.8 9.92 8.8ZM4.3275 8.465C4.0375 8.1775 3.64 8 3.2 8H1.6C0.7175 8 0 8.7175 0 9.6V10.4C0 10.8425 0.3575 11.2 0.8 11.2H2.4475C2.605 10.015 3.32 9.0175 4.3275 8.465Z"
            fill={props.fill || "#9FA2B4"}
        />
    </svg>
);