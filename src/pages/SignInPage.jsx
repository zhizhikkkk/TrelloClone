import { Button } from "../components/Button";

const SignInPage = () => {
  return (
    <div className="font-trello h-screen w-screen bg-slate-100 flex items-center justify-center">
      <div className="w-96 mb-14">
        <div className="text-3xl mb-4 text-center">Sign in</div>
        <div className="mb-4">
          <div className="text-sm mb-2">Email</div>
          <input
            type="email"
            className="w-full py-1 px-3 rounded-sm"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-8">
          <div className="text-sm mb-2">Password</div>
          <input
            type="password"
            className="w-full py-1 px-3 rounded-sm"
            placeholder="********"
          />
        </div>
        <Button className="w-full">Sign In</Button>
      </div>
    </div>
  );
};

export default SignInPage;
