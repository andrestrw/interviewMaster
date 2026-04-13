"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart, Code, Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FormField } from "@/components/shared/FormField";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, type SignUpData } from "@/schemas/auth";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      role: "designer",
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const onSubmit = async (data: SignUpData) => {
    try {
      console.log("Datos listos para enviar:", data);
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-dvh">
      <div className="w-full max-w-md">
        <Card className=" shadow-lg pb-0">
          <CardHeader className="flex flex-col items-center space-y-1.5 pb-4 pt-6">
            <div className="space-y-0.5 flex flex-col items-center">
              <h2 className="text-balance text-2xl font-semibold text-foreground">
                Create an account
              </h2>
              <p className="text-pretty text-muted-foreground">
                Welcome! Create an account to get started.
              </p>
            </div>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="space-y-6 px-8">
              <FormField
                id="role"
                label="Role"
                error={errors.role?.message}
                renderInput={(cls) => (
                  <Controller
                    name="role"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger
                          id="role"
                          className={`[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 ${cls}`}
                        >
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0">
                          <SelectItem value="designer">
                            <User size={16} aria-hidden="true" />
                            <span className="truncate">Product Designer</span>
                          </SelectItem>
                          <SelectItem value="developer">
                            <Code size={16} aria-hidden="true" />
                            <span className="truncate">Developer</span>
                          </SelectItem>
                          <SelectItem value="manager">
                            <BarChart size={16} aria-hidden="true" />
                            <span className="truncate">Product Manager</span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  id="firstName"
                  label="First name"
                  error={errors.firstName?.message}
                  renderInput={(cls) => (
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className={cls}
                    />
                  )}
                />
                <FormField
                  id="lastName"
                  label="Last name"
                  error={errors.lastName?.message}
                  renderInput={(cls) => (
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className={cls}
                    />
                  )}
                />
              </div>

              <FormField
                id="username"
                label="Username"
                error={errors.username?.message}
                renderInput={(cls) => (
                  <Input
                    id="username"
                    {...register("username")}
                    className={cls}
                  />
                )}
              />

              <FormField
                id="email"
                label="Email address"
                error={errors.email?.message}
                renderInput={(cls) => (
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={cls}
                  />
                )}
              />

              <FormField
                id="password"
                label="Password"
                error={errors.password?.message}
                renderInput={(cls) => (
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className={`pr-10 ${cls}`}
                      {...register("password")}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                )}
              />

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Controller
                    name="terms"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id="terms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={errors.terms ? "border-destructive" : ""}
                      />
                    )}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground"
                  >
                    I agree to the{" "}
                    <Link href="#" className="text-primary hover:underline">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-primary hover:underline">
                      Conditions
                    </Link>
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-xs font-medium text-destructive">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground"
              >
                {isSubmitting ? "Creating account..." : "Create free account"}
              </Button>
            </CardContent>
          </form>
          <CardFooter className="flex justify-center border-t py-4!">
            <p className="text-pretty text-center text-sm text-muted-foreground">
              Already have an account?
              <Link href="#" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
