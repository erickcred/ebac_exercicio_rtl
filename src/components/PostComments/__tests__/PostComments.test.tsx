import { fireEvent, render, screen } from '@testing-library/react'

// import Post from '..'
import PostComment from '..'

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve inserir dois comentários', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'Tenho um carrinho igual a esse mas falta o boneco'
            }
        })
        fireEvent.submit(screen.getByTestId('btn-adicionar-comentario'));

        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'Show de bola, lebrei da minha infancia rsrss'
            }
        });
        fireEvent.submit(screen.getByTestId('btn-adicionar-comentario'));

        expect(screen.getAllByTestId('comentario')).toHaveLength(2)
    });
});