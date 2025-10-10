"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useForm } from "@/lib/hooks/use-form";
import { createClient } from "@/lib/utils/supabase/client";
import { Loader2 } from "lucide-react";


interface LoginFormType {
  email: string;
  password: string;
  error: string;
  loading:boolean
}

const LoginForm = () => {
  const router = useRouter();
  const supabase = createClient();

  const { updateForm, formData, setFormData } = useForm<LoginFormType>({
    email: "",
    password: "",
    error: "",
    loading: false
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ ...formData, loading: true });
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      setFormData({ ...formData, error: error.message ,loading:false});
      
    } else {
      router.push("/dashboard/overview");
      setFormData({
        email: "",
        password: "",
        error: "",
        loading: false
      });
    }
    console.log(error);
  };

  return (
    <div className={"flex flex-col gap-6"}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="benderyouths@example.com"
                    value={formData.email}
                    onChange={updateForm}
                    // required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    name="password"
                    onChange={updateForm}
                    placeholder="Your password"
                    // required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={formData.loading}
                >
                  {formData.loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Log In"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
