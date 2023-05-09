import { fireEvent, render, screen } from '@testing-library/react'

import PostComment from '..'

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve inserir dois comentários', () => {
        const { debug } = render(<PostComment />)
        
        fireEvent.change(screen.getByTestId('textarea-comentario'),  {
            target: {
                value: "Tenho um carrinho igual somente falta o boneco"
            }
        })
        fireEvent.click(screen.getByTestId('btn-adicionar-comentario'))

        fireEvent.change(screen.getByTestId('textarea-comentario'),  {
            target: {
                value: "comentario"
            }
        })
        fireEvent.click(screen.getByTestId('btn-adicionar-comentario'))
        
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
        expect(screen.getAllByTestId('comentario')).toHaveLength(2)
        expect(screen.getByText('Tenho um carrinho igual somente falta o boneco')).toBeInTheDocument()
        expect(screen.getByText('comentario')).toBeInTheDocument()
    });
});