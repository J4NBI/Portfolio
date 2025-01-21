'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import useLanguageStore from "@/lib/useLanguageStore";



import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/app/api/send-email'

// Schema for contact form validation
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' }),
})

export default function ContactFormPreview() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
      sendEmail(values);
      form.reset();
  };

  const { language } = useLanguageStore();

  return (
    <div id="form" className="container flex min-h-[60vh] mb-20 h-full w-full items-center justify-center px-4 mt-8 z-50">
      <div className='max-w-xl mx-auto hidden md:block'>
          <h2 className='text-8xl'>✉️</h2>
        </div>
      <Card className="self-start mx-auto max-w-xl bg-gray-800 text-white ">
        <CardHeader>
          <CardTitle className="text-2xl mb-2 font-bold">{language === "de" ? "Contact me" : "Kontaktiere mich"}</CardTitle>
          <CardDescription className='text-white/60'>
            {language === "de" ?  "Please fill out the form below and I will get back to you shortly." : "Fülle bitte das Formular aus und ich werde mich so schnell wie möglich bei dir melden."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          type="text"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="johndoe@mail.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="message">{language === "de" ? "Message" : "Deine Nachricht" }</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder={language === "de" ? "Your message..." : "Deine Nachricht..." }
                          autoComplete="off"
                          rows={8}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-auto mx-auto px-6 hover:shadow-3xl">
                  {language === "de" ? "Send Message" : "Nachricht senden"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
