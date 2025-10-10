"use client"
import React from 'react'
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
import { useRouter } from 'next/navigation';
import { useForm } from '@/lib/hooks/use-form';


interface LoginFormType {
  email: string;
  password: string;
}


const LoginForm = () => {

  const router = useRouter();
  const{updateForm , formData} = useForm<LoginFormType>({
    email: '',
    password: ''
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform login logic here (e.g., authentication)
    // On successful login, redirect to the dashboard
    router.push('/dashboard/overview');
  }

  

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
          <form onSubmit={handleLogin} >
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
                  value={formData.email}
                  name="password"
                  onChange={updateForm} 
                  placeholder="Your password" 
                  // required 
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm