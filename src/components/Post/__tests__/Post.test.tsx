import { render, screen } from "@testing-library/react"
import Post from ".."

describe('Teste para o omponente de Post', () => {
    test('Deve rederizar o componente de Post', () => {
        render(<Post children="Titulo Post" imageUrl={""} />)

        expect(screen.getByTestId('image-test')).toBeInTheDocument();
    })
})