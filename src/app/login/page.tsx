"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-dvh">
      <div className="w-full max-w-sm px-4">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-lg">Welcome Back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="#" method="post" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="ephraim@blocks.so"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="**************"
                />
              </div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Forgot your password?{" "}
              <a href="#" className="font-medium text-primary hover:underline">
                Reset password
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
