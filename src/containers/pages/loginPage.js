import RedirectIfLoggedIn from "../../components/auth/redirectIfLoggedIn";
import LoginForm from "../../components/forms/loginForm";

const LoginPage = () => {
  return (
    <RedirectIfLoggedIn>
      <div className="full-page centered-flex transparent-background">
        <div className="centered-flex-vert">
          <img
            src={process.env.PUBLIC_URL + "/cyberbugLogoQuick.png"}
            alt="Cyberbug Logo"
            className="med-logo"
          />
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </RedirectIfLoggedIn>
  );
};

export default LoginPage;
