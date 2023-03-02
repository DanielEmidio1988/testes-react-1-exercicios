import Calculator from "../components/Calculator"
import userEvent from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"

describe("Testando Calculator.js",()=>{

//     test("Testando renderização",()=>{
//         render(<Calculator/>)

//         const button = screen.getByText("+","-","/","*")
//         expect(button).toBeInTheDocument()
//         screen.logTestingPlaygroundURL()
//     })

// //     Garanta em pelo menos dois testes que a multiplicação está funcionando corretamente. Por exemplo:

// // ao clicar nos dígitos para realizar o cálculo 5 * 2 e clicar em =, deve aparecer no resultado o valor 10.
//     test("Testando multiplicação", async ()=>{
//         render(<Calculator/>)

//         const user = userEvent.setup()
//         const button5 = screen.getByText("5")
//         const button2 = screen.getByText("2")
//         const buttonM = screen.getByText("*")
//         const buttonResult = screen.getByText("=")

//         await user.click(button5)
//         await user.click(buttonM)
//         await user.click(button2)
//         await user.click(buttonResult)

//         const result = screen.getByText("10")

//         expect(result).toBeInTheDocument()
//     })

    test("Testando concatenação", async ()=>{
        render(<Calculator/>)

        const user = userEvent.setup()
        const button5 = screen.getByText("5")
        await user.click(button5)

        const buttonM = screen.getByText("*")
        await user.click(buttonM)

        const button2 = screen.getByText("2")
        await user.click(button2)

        const buttonS = screen.getByText("+")
        await user.click(buttonS)

        const button1 = screen.getByText("1")
        await user.click(button1)

        const button0 = screen.getByText("0")
        await user.click(button0)

        const buttonResult = screen.getByText("=")
        await user.click(buttonResult)

        const result = screen.getByText("20")
        screen.logTestingPlaygroundURL()

        expect(result).toBeInTheDocument()
    })
})