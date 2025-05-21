import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const LoginRegister = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("login");

  // Login state
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Register state
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [registerError, setRegisterError] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setLoginError("");
      setLoginLoading(true);
      try {
        const res = await fetch("/api/users/login/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: loginForm.email,
            password: loginForm.password,
          }),
        });
        if (!res.ok) {
          const data = await res.json();
          setLoginError(data.detail || "Login failed.");
        } else {
          // Optionally store token or user info here
          const data = await res.json();
          localStorage.setItem("token", data.access);
          navigate("/profile");
        }
      } catch (err) {
        setLoginError("Network error. Please try again. " + err);
      } finally {
        setLoginLoading(false);
      }
    } else {
      setLoginError("Please enter both email and password.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (
      registerForm.email &&
      registerForm.password &&
      registerForm.firstName &&
      registerForm.lastName
    ) {
      setRegisterError("");
      setRegisterLoading(true);
      try {
        const res = await fetch("/api/users/register/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: registerForm.email,
            password: registerForm.password,
            first_name: registerForm.firstName,
            last_name: registerForm.lastName,
          }),
        });

        console.log(res);

        if (!res.ok) {
          const data = await res.json();
          setRegisterError(data.detail || "Registration failed.");
        } else {
          const data = await res.json();
          localStorage.setItem("token", data.access);
          navigate("/profile");
        }
      } catch (error) {
        setRegisterError("Network error. Please try again. " + error);
      } finally {
        setRegisterLoading(false);
      }
    } else {
      setRegisterError("Please fill in all fields.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  required
                  disabled={loginLoading}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  required
                  disabled={loginLoading}
                />
                {loginError && (
                  <div className="text-red-500 text-sm">{loginError}</div>
                )}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loginLoading}
                >
                  {loginLoading ? "Logging in..." : "Log In"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={registerForm.firstName}
                  onChange={handleRegisterChange}
                  required
                  disabled={registerLoading}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={registerForm.lastName}
                  onChange={handleRegisterChange}
                  required
                  disabled={registerLoading}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={registerForm.email}
                  onChange={handleRegisterChange}
                  required
                  disabled={registerLoading}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                  required
                  disabled={registerLoading}
                />
                {registerError && (
                  <div className="text-red-500 text-sm">{registerError}</div>
                )}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={registerLoading}
                >
                  {registerLoading ? "Registering..." : "Register"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginRegister;
