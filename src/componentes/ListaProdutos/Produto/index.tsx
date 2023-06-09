import IProdutos from '../../../interfaces/IProdutos';

interface ProtudoProps {
  produto: IProdutos
}

const Produto = ({ produto }: ProtudoProps) => {
  return (
    <div className="card rounded-0" style={{ width: '20rem', height: '35rem' }}>
      <div style={{ position: 'relative', overflow: 'hidden', height: '400px' }}>
        <img
          src={produto.url_imagem}
          className="img-fluid object-fit-cover"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          alt="Imagem"
        />
      </div>
      <div className="card-body ps-4 pb-3 bg-white-blue d-flex flex-column">
        <h5 className="card-title fw-bolder fs-5">{produto.nome}</h5>
        <p className="card-text">{produto.descricao}</p>
        <p className="card-text fw-bold text-end mt-auto">R${produto.preco},00</p>
      </div>
    </div>
  )
}

export default Produto