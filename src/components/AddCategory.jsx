import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const realValue = inputValue.trim();
        if (realValue.length <= 2 ) {setInputValue(''); return}
        // checkElements.includes(inputValue) ? "" : categoryState(prevItems => [...prevItems, inputValue])
        // checkElements.includes(inputValue) ? "" : onNewCategory(realValue)
        onNewCategory(realValue)
        setInputValue("")
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
                required
            />
        </form>
    )
}
