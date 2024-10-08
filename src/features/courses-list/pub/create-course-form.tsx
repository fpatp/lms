'use client'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { createCourseAction } from '../actions'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/ui/utils'

const createCourseFormSchema = z.object({
  name: z.string(),
  description: z.string(),
})

export function CreateCourseForm({
  className,
  revalidatePagePath,
}: {
  className: string
  revalidatePagePath: string
}) {
  const form = useForm({
    resolver: zodResolver(createCourseFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const [isCreateTransition, startCreateTransition] = useTransition()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createCourseAction(data, revalidatePagePath)
          })
        })}
        className={cn(className, 'space-y-4')}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder="название..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder="описание..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-8" type="submit" disabled={isCreateTransition}>
          Добавить
        </Button>
      </form>
    </Form>
  )
}
