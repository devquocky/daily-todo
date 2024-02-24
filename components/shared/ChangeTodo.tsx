import { changeStatus } from '@/actions/todoActions'
import { todoType } from '@/types/todoType'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Button from '../ui/Button'
import Form from '../ui/Form'
import Input from '../ui/Input'

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button actionButton type="submit" text={<AiOutlineCheckCircle />}></Button>
    </Form>
  )
}

export default ChangeTodo
