import React from "react";

// Для отрисовки компонентов в зависимости от условия
export const Conditional = ({ condition, children }) => {
  if (!condition) return null;
  return <>{children}</>;
};
