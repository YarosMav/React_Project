import { useState } from 'react';

export function useCommentAnswerToggle(initialState = false) {
  const [isCommentsAnswOpen, setIsCommentsAnswOpen] = useState(initialState);

  const handleToggleCommentsAnsw = () => {
    setIsCommentsAnswOpen(!isCommentsAnswOpen);
  };

  const closeCommentsAnsw = () => {
    setIsCommentsAnswOpen(false);
  };

  return { isCommentsAnswOpen, handleToggleCommentsAnsw, closeCommentsAnsw };
}