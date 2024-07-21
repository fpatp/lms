import { render, screen } from '@testing-library/react'
import { CourseItem } from './course-item'
import userEvent from '@testing-library/user-event'

describe('course-item', () => {
  it('вызвать удаление по нажатию на Удалить', async () => {
    const onDelete = jest.fn()

    render(
      <CourseItem
        course={{ id: 'qwerty', name: 'qwerty', description: 'qwerty' }}
        onDelete={onDelete}
      />
    )

    await userEvent.click(screen.getByText('Удалить'))

    expect(onDelete).toHaveBeenCalled()
  })
})
