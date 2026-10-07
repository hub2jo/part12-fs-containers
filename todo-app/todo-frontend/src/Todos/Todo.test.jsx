import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

describe('<Todo />', () => {
  test('renders text and not-done state', () => {
    const todo = { _id: '1', text: 'Learn Docker', done: false }
    render(<Todo todo={todo} deleteTodo={vi.fn()} completeTodo={vi.fn()} />)

    expect(screen.getByText('Learn Docker')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
  })

  test('done todo has no "Set as done" button', () => {
    const todo = { _id: '1', text: 'Learn Docker', done: true }
    render(<Todo todo={todo} deleteTodo={vi.fn()} completeTodo={vi.fn()} />)

    expect(screen.getByText('This todo is done')).toBeInTheDocument()
    expect(screen.queryByText('Set as done')).toBeNull()
  })

  test('clicking "Set as done" calls completeTodo with the todo', async () => {
    const todo = { _id: '1', text: 'Learn Docker', done: false }
    const completeTodo = vi.fn()
    render(<Todo todo={todo} deleteTodo={vi.fn()} completeTodo={completeTodo} />)

    await userEvent.click(screen.getByText('Set as done'))

    expect(completeTodo).toHaveBeenCalledWith(todo)
  })
})