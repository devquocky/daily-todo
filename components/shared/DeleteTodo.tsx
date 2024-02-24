'use client'

import { deleteTodo } from '@/actions/todoActions'
import { todoType } from '@/types/todoType'
import { BsFillTrashFill } from 'react-icons/bs'
import Button from '../ui/Button'
import Form from '../ui/Form'
import Input from '../ui/Input'

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button actionButton text={<BsFillTrashFill />} type="submit" />
    </Form>
  )
}

export default DeleteTodo
