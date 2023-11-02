import React from 'react';
export const useTogglePasswordVisibility = (icon, replaceIcon) => {
    const [passwordVisibility, setPasswordVisibility] = React.useState(true);
    const [rightIcon, setRightIcon] = React.useState(icon);

  
    const handlePasswordVisibility = () => {
      if (rightIcon === icon) {
        setRightIcon(replaceIcon);
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === replaceIcon) {
        setRightIcon(icon);
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility
    };
  };