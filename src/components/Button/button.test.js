import {render, screen, fireEvent} from '@testing-library/react'
import Button from '.'
test('The button  should be able to call the handleClick props', () => {

       const handleClick = jest.fn()
    
    const {getByTestId} = render(<Button onClick ={handleClick} />)
    const renderButton = getByTestId('button')
    fireEvent.click(screen.getTestById(renderButton))
    expect(handleClick).toHaveBeenCalled()

    
})
// test('calls onClick prop when clicked', () => {
//     const handleClick = jest.fn()
//     render(<Button onClick={handleClick}>play again</Button>)
//     fireEvent.click(screen.getByText(/play again/i))
//     expect(handleClick).toHaveBeenCalledTimes(1)
//   })