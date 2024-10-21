import { useState } from 'react';

export function useDropdownToggle(initialState = false) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(initialState);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return { isDropdownOpen, handleToggleDropdown, closeDropdown };
}