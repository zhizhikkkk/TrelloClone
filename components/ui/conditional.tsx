import { ReactNode } from "react";

interface ConditionalProps {
  condition: boolean;
  children: ReactNode;
}

// Для отрисовки компонентов в зависимости от условия
export const Conditional: React.FC<ConditionalProps> = ({
  condition,
  children,
}) => {
  if (!condition) return null;
  return <>{children}</>;
};
