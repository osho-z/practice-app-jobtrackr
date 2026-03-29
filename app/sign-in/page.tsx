"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import Link from "next/link";
import { EyeIcon, EyeOffIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { signIn} from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function signInPage() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    const router = useRouter();
  
    async function handleSubmit(e: React.SubmitEvent) {
      e.preventDefault();
  
      setError("");
      setLoading(true);
  
      try {
        const result = await signIn.email({
          email,
          password
        });
  
          if (result.error) {
            setError(result.error.message ?? "Failed to sign in. Please try again.");
          } else {
            // Handle successful sign in (e.g., redirect to dashboard)
            router.push("/dashboard");
          }
      } catch (err) {
        setError("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">Sign In</CardTitle>
          <CardDescription className="text-gray-600">
            Welcome back! Please enter your details to sign in to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <CardContent className="space-y-4">
            {error && <p className="rounded-md p-3 text-destructive bg-destructive/15 text-sm">{error}</p>}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <InputGroup>
                <InputGroupInput id="email" type="email" placeholder="john.doe@example.com" required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 focus:border-primary focus:ring-primary"/>
                <InputGroupAddon align="inline-end">
                  <MailIcon className="h-4 w-4" />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <InputGroup>
                <InputGroupInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-gray-300 focus:border-primary focus:ring-primary"
                />
                <InputGroupAddon align="inline-end">
                  <Button
                    variant="ghost"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="p-1"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-8">
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6"
              disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </Button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account? <Link href="/sign-up" className="font-medium text-primary hover:underline">
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}