import { Button } from "./Button";
import { Link } from "react-router-dom";

const withLink =
  (Component) =>
  ({ to, ...props }) => {
    if (to) {
      return (
        <Link to={to}>
          <Component {...props} />
        </Link>
      );
    }

    return <Component {...props} />;
  };

export const LinkButton = withLink(Button);
