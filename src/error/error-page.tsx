import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="grid w-screen h-screen place-content-center text-center space-y-4">
      <img src="/empty.png" alt="" className="w-[426px] h-[290px] mx-auto" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
