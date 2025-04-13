"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

const formSchema = z.object({
  // Step 1: Personal Information
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),

  // Step 2: Startup Information
  startupName: z.string().min(2, { message: "Startup name must be at least 2 characters." }),
  industry: z.string().min(1, { message: "Please select an industry." }),
  stage: z.string().min(1, { message: "Please select your startup stage." }),

  // Step 3: Problem & Solution
  problem: z.string().min(10, { message: "Please describe the problem in at least 10 characters." }),
  solution: z.string().min(10, { message: "Please describe your solution in at least 10 characters." }),
  targetMarket: z.string().min(10, { message: "Please describe your target market in at least 10 characters." }),

  // Step 4: Expertise & Needs
  expertise: z.string().min(10, { message: "Please describe your expertise in at least 10 characters." }),
  needsHelp: z.string().min(10, { message: "Please describe what you need help with in at least 10 characters." }),
})

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const router = useRouter()
  const totalSteps = 4

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      startupName: "",
      industry: "",
      stage: "",
      problem: "",
      solution: "",
      targetMarket: "",
      expertise: "",
      needsHelp: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // In a real application, you would send this data to your backend
    router.push("/dashboard")
  }

  const nextStep = async () => {
    let fieldsToValidate: string[] = []

    switch (step) {
      case 1:
        fieldsToValidate = ["name", "email", "password"]
        break
      case 2:
        fieldsToValidate = ["startupName", "industry", "stage"]
        break
      case 3:
        fieldsToValidate = ["problem", "solution", "targetMarket"]
        break
      case 4:
        fieldsToValidate = ["expertise", "needsHelp"]
        break
    }

    const result = await form.trigger(fieldsToValidate as any)
    if (result) {
      if (step < totalSteps) {
        setStep(step + 1)
      } else {
        form.handleSubmit(onSubmit)()
      }
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="bg-gray-50 py-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-red-900 to-red-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Join Co-Founder</CardTitle>
            <CardDescription className="text-gray-100">
              Complete this onboarding survey to get started with your AI startup coach
            </CardDescription>

            <div className="flex justify-between items-center mt-6">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step > index + 1
                        ? "bg-white text-red-800"
                        : step === index + 1
                          ? "bg-white text-red-800 ring-4 ring-red-400"
                          : "bg-red-800 text-white"
                    }`}
                  >
                    {step > index + 1 ? <Check className="h-5 w-5" /> : index + 1}
                  </div>
                  {index < totalSteps - 1 && (
                    <div className={`h-1 w-16 sm:w-24 md:w-32 ${step > index + 1 ? "bg-white" : "bg-red-800"}`} />
                  )}
                </div>
              ))}
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <Form {...form}>
              <form className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Personal Information</h3>

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormDescription>Must be at least 8 characters</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Startup Information</h3>

                    <FormField
                      control={form.control}
                      name="startupName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Startup Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="ecommerce">E-commerce</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="stage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Startup Stage</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your startup stage" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="idea">Idea Stage</SelectItem>
                              <SelectItem value="mvp">MVP</SelectItem>
                              <SelectItem value="early">Early Traction</SelectItem>
                              <SelectItem value="growth">Growth</SelectItem>
                              <SelectItem value="scaling">Scaling</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Problem & Solution</h3>

                    <FormField
                      control={form.control}
                      name="problem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What problem are you solving?</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe the problem your startup is addressing..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="solution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How does your solution work?</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your product or service..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="targetMarket"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Who is your target market?</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your ideal customers..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Expertise & Needs</h3>

                    <FormField
                      control={form.control}
                      name="expertise"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What expertise do you bring to your startup?</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your skills, background, and experience..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="needsHelp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What areas do you need help with?</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe the challenges you're facing or areas where you need guidance..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </form>
            </Form>
          </CardContent>

          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" onClick={prevStep} disabled={step === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>

            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-red-900 to-red-700 text-white hover:from-red-800 hover:to-red-600"
            >
              {step === totalSteps ? "Complete" : "Next"}{" "}
              {step !== totalSteps && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
