import useRouteGuard from "@/hooks/useRouteGuard";

const ProtectedRoute = ({ element, path }) => {
  useRouteGuard({ path });
  return element;
};

export default ProtectedRoute;
